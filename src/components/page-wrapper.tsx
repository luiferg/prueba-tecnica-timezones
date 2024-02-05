const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex flex-col gap-2 p-4 items-center mx-auto'>
      {children}
    </main>
  )
}

export default PageWrapper
