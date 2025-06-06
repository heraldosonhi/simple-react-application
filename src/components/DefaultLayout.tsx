import { Header } from '@/components/Header'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}
