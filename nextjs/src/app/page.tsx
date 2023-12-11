"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  useRouter().replace('/dashboard')

  return null

}
