const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-900 p-2 rounded-lg border border-slate-600'>
      {children}
    </div>
  )
}

export default Card
