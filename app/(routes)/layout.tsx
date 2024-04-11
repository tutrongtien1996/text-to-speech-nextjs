'use client'
import { ProductsProvider } from '@/store/products'

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ProductsProvider>{children}</ProductsProvider>
}
