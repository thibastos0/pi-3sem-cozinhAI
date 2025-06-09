"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar se há um token no localStorage
    const token = localStorage.getItem("token")

    if (token) {
      // Aqui você pode fazer uma chamada para o backend para validar o token
      // e obter os dados do usuário
      // Por enquanto, vamos apenas simular que o usuário está autenticado
      setIsLoading(false)
      // Implementação real: buscar dados do usuário com o token
    } else {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Falha na autenticação")
      }

      const data = await response.json()
      localStorage.setItem("token", data.access_token)

      // Aqui você deve fazer uma chamada para obter os dados do usuário
      // usando o token recebido
      // Por enquanto, vamos simular um usuário
      setUser({
        id: "user-id",
        name: "Usuário",
        email: email,
      })
    } catch (error) {
      console.error("Erro de login:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
