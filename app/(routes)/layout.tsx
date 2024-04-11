'use client'
import { ProductsProvider, useStoreProduct } from '@/store/products'

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ProductsProvider>{children}</ProductsProvider>
}
