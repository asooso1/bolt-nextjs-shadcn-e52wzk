interface MainLayoutProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function MainLayout({ children, className = "", fullWidth = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className={`md:pl-64 transition-all duration-200 ${className}`}>
        <div className={`${fullWidth ? 'w-full' : 'container mx-auto'} p-4 md:p-8 pt-16 md:pt-8`}>
          {children}
        </div>
      </main>
    </div>
  )
}