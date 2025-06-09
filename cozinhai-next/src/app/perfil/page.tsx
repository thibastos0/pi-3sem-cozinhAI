"use client"

import { useAuth } from "@/components/auth/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Mail, Calendar, Settings } from "lucide-react"

export default function PerfilPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (!isAuthenticated && !isLoading) {
      router.push("/home/login")
    }
    setIsLoading(false)
  }, [isAuthenticated, router, isLoading])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#EDF2F4] via-white to-[#EDF2F4] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#22577A]/30 border-t-[#22577A] rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2F4] via-white to-[#EDF2F4] pt-20 pb-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#57CC99]/20 to-[#22577A]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#22577A]/20 to-[#57CC99]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/home"
            className="p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-[#22577A]" />
          </Link>
          <h1
            className="text-3xl font-bold bg-gradient-to-r from-[#22577A] to-[#57CC99] bg-clip-text text-transparent"
            style={{ fontFamily: "DaCherry" }}
          >
            Meu Perfil
          </h1>
        </div>

        {/* Card do perfil */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-6">
          {/* Avatar e info básica */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-[#22577A] to-[#57CC99] rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#22577A] mb-2" style={{ fontFamily: "Alexandria" }}>
              {user?.name}
            </h2>
            <p className="text-gray-600" style={{ fontFamily: "Alexandria" }}>
              {user?.email}
            </p>
          </div>

          {/* Informações do usuário */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50/80 rounded-2xl">
              <Mail className="w-5 h-5 text-[#22577A]" />
              <div>
                <p className="text-sm font-semibold text-[#22577A]" style={{ fontFamily: "Alexandria" }}>
                  Email
                </p>
                <p className="text-gray-600" style={{ fontFamily: "Alexandria" }}>
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50/80 rounded-2xl">
              <Calendar className="w-5 h-5 text-[#22577A]" />
              <div>
                <p className="text-sm font-semibold text-[#22577A]" style={{ fontFamily: "Alexandria" }}>
                  Membro desde
                </p>
                <p className="text-gray-600" style={{ fontFamily: "Alexandria" }}>
                  {new Date().toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="mt-8 space-y-4">
            <button
              className="w-full py-3 px-6 bg-gradient-to-r from-[#22577A] to-[#57CC99] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#57CC99]/30 transition-all duration-300"
              style={{ fontFamily: "Alexandria" }}
            >
              <Settings className="w-5 h-5 inline mr-2" />
              Editar Perfil
            </button>

            <button
              onClick={logout}
              className="w-full py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/30 transition-all duration-300"
              style={{ fontFamily: "Alexandria" }}
            >
              Sair da Conta
            </button>
          </div>
        </div>

        {/* Estatísticas ou outras informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <h3 className="text-lg font-semibold text-[#22577A] mb-2" style={{ fontFamily: "Alexandria" }}>
              Receitas Favoritas
            </h3>
            <p
              className="text-3xl font-bold bg-gradient-to-r from-[#22577A] to-[#57CC99] bg-clip-text text-transparent"
              style={{ fontFamily: "DaCherry" }}
            >
              0
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <h3 className="text-lg font-semibold text-[#22577A] mb-2" style={{ fontFamily: "Alexandria" }}>
              Receitas Criadas
            </h3>
            <p
              className="text-3xl font-bold bg-gradient-to-r from-[#22577A] to-[#57CC99] bg-clip-text text-transparent"
              style={{ fontFamily: "DaCherry" }}
            >
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
