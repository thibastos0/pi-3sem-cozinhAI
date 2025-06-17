'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useAuth } from '@/components/auth/auth-context'
import axios from 'axios'
import Image from 'next/image'
import { Star, Star as StarOutline, Trash2, Edit2, Check, X } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import Header from '@/components/Header'

type Review = {
  recipeId: string
  title: string
  recipeImage?: string
  grade?: number
  comment?: string
  date?: string
}

export default function ReviewsPage() {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const limit = 10
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)

  // Carrega batch de avaliações
  const fetchReviews = useCallback(async () => {
    if (!user?.id || !hasMore) return
    setLoading(true)
    const token = localStorage.getItem('token')!
    try {
      const { data } = await axios.get<Review[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${user.id}/reviews`,
        {
          params: { limit, offset },
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      setReviews((prev) => [...prev, ...data])
      if (data.length < limit) setHasMore(false)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [user?.id, offset, hasMore])

  // Infinite scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setOffset((o) => o + limit),
      { rootMargin: '200px' }
    )
    if (loaderRef.current) obs.observe(loaderRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    fetchReviews()
  }, [fetchReviews])

  // State de edição inline
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: '', grade: 3, comment: '' })

  const startEditing = (r: Review) => {
    setEditingId(r.recipeId)
    setForm({
      title: r.title || '',
      grade: r.grade || 3,
      comment: r.comment || '',
    })
  }
  const cancelEditing = () => setEditingId(null)

  const saveReview = async (recipeId: string) => {
    const token = localStorage.getItem('token')!
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${user!.id}/${recipeId}/reviews`,
        { ...form, recipeId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setReviews((prev) =>
        prev.map((r) =>
          r.recipeId === recipeId ? { ...r, ...form } : r
        )
      )
      setEditingId(null)
    } catch (err) {
      console.error(err)
    }
  }

  // Exibe estrelas
  const Stars = ({ grade = 0 }: { grade?: number }) => (
    <div className="flex gap-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= grade ? (
          <Star key={i} size={16} />
        ) : (
          <StarOutline key={i} size={16} />
        )
      )}
    </div>
  )

  return (
    <>
    <Header />
    <div className="p-4 max-w-3xl mx-auto pt-32">
      <h1 className="text-2xl font-semibold text-[#22577A] mb-6">
        Minhas Avaliações
      </h1>

      {loading && reviews.length === 0 ? (
        // Skeleton loaders
        <ul className="space-y-6">
          {Array(limit)
            .fill(0)
            .map((_, i) => (
              <li
                key={i}
                className="h-40 rounded-2xl bg-gray-200 animate-pulse"
              />
            ))}
        </ul>
      ) : reviews.length === 0 ? (
        <p className="text-gray-600">Você ainda não avaliou nenhuma receita.</p>
      ) : (
        <ul className="space-y-6">
          {reviews.map((r) => (
            <li
              key={r.recipeId}
              className="bg-white p-4 rounded-2xl shadow flex flex-col gap-3"
            >
              {/* Imagem */}
              {r.recipeImage ? (
                <Image
                  src={r.recipeImage}
                  alt={r.title}
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ) : (
                <div className="bg-gray-100 w-full h-40 rounded-lg" />
              )}

              {editingId === r.recipeId ? (
                // Edição inline
                <>
                  <input
                    value={form.title}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, title: e.target.value }))
                    }
                    className="border rounded px-3 py-2 w-full"
                  />
                  <div className="flex items-center gap-2">
                    <Stars grade={form.grade} />
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={form.grade}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          grade: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <textarea
                    value={form.comment}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, comment: e.target.value }))
                    }
                    className="border rounded px-3 py-2 w-full"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveReview(r.recipeId)}
                      className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded"
                    >
                      <Check size={16} /> Salvar
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-300 rounded"
                    >
                      <X size={16} /> Cancelar
                    </button>
                  </div>
                </>
              ) : (
                // Modo leitura
                <>
                  <h2 className="text-lg font-semibold text-[#22577A]">
                    {r.title}
                  </h2>
                  <Stars grade={r.grade} />
                  <p className="text-sm text-gray-700">{r.comment}</p>
                  <p className="text-xs text-gray-500">
                    {r.date
                      ? formatDistanceToNow(new Date(r.date), {
                          addSuffix: true,
                        })
                      : ''}
                  </p>
                  <button
                    onClick={() => startEditing(r)}
                    className="self-start text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Edit2 size={16} /> Editar
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Loader invisível para scroll infinito */}
      <div ref={loaderRef} />

      {loading && reviews.length > 0 && (
        <p className="text-center mt-4">Carregando mais...</p>
      )}
    </div>
    </>
  )
}
