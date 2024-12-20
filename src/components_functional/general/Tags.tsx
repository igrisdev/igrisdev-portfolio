export const Tags = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className='flex items-center gap-2 bg-base-200 px-2 py-1 rounded-md text-[0.75rem] border-[1px] border-base-300'>
      {children}
    </span>
  )
}