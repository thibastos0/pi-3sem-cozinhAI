'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/components/auth/auth-context'
import axios from 'axios'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'

type FavoriteRecipe = {
  recipeId: string
  title: string
  recipeImage?: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL
const SPOONACULAR_API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY

export default function FavoritesPage() {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const limit = 12

  const fetchFavorites = useCallback(async () => {
    if (!user?.id || !hasMore) return
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        `${API_URL}/user/${user.id}/favorites`,
        {
          params: { limit, offset },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.data.length < limit) {
        setHasMore(false)
      }
      console.log('Favorites recebidos da API:', response.data)
      setFavorites((prev) => [...prev, ...response.data])
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error)
    } finally {
      setLoading(false)
    }

  }, [user?.id, offset, hasMore])

  const removeFavorite = async (recipeId: string) => {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(
        `${API_URL}/user/${user?.id}/favorites/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setFavorites((prev) => prev.filter((fav) => fav.recipeId !== recipeId))
    } catch (error) {
      console.error('Erro ao remover favorito:', error)
    }
  }

  const getRecipeUrlAndRedirect = async (id: string) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey: SPOONACULAR_API_KEY,
          },
        }
      )
      const url = response.data.sourceUrl
      if (url) window.open(url, '_blank')
      else alert('URL da receita não encontrada.')
    } catch (error) {
      console.error('Erro ao buscar receita:', error)
      alert('Não foi possível abrir a receita.')
    }
  }

  useEffect(() => {
    fetchFavorites()
  }, [fetchFavorites])

  const loadMore = () => {
    setOffset((prev) => prev + limit)
  }

  if (loading && favorites.length === 0) return <p className="p-4">Carregando favoritos...</p>

  return (
    <>
      <Header />
      <div className="p-4 max-w-7xl mx-auto pt-32">
        <h1 className="text-2xl font-semibold text-[#22577A] mb-6" style={{ fontFamily: 'Alexandria' }}>
          Caderno de Receitas
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-600">Você ainda não favoritou nenhuma receita.</p>
        ) : (
          <>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((recipe) => (
                <li
                  key={recipe.recipeId}
                  className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 cursor-pointer"
                  onClick={() => getRecipeUrlAndRedirect(recipe.recipeId)}
                >
                  {recipe.recipeImage ? (
                    <Image
                      src={recipe.recipeImage}
                      alt={recipe.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-xl mb-3"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-100 rounded-xl mb-3" />
                  )}
                  <h2 className="text-base font-semibold text-[#22577A] mb-2" style={{ fontFamily: 'Alexandria' }}>
                    {recipe.title}
                  </h2>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFavorite(recipe.recipeId)
                    }}
                    className="mt-2 flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                    style={{ fontFamily: 'Alexandria' }}
                  >
                    <Trash2 className="w-4 h-4" />
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="px-6 py-2 bg-[#22577A] text-white rounded-lg hover:bg-[#19495d] transition-colors"
                >
                  {loading ? 'Carregando...' : 'Carregar mais'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}
