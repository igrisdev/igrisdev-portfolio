import { ArrowRight, Star } from 'lucide-react'

import { Tags } from '@components_functional/general/Tags'

interface CardRepositoryProps {
  name?: string
  description?: string
  topics?: string[]
  html_url?: string
  stargazers_count?: number
  icon?: string
}

export const CardRepository = ({
  name,
  description,
  topics,
  html_url,
  stargazers_count,
  icon,
}: CardRepositoryProps) => {
  return (
    <article className='border-[1px] border-base-300 rounded-md p-3 grid gap-1'>
      <header className='flex justify-between items-center'>
        <a
          href={html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='group flex gap-1 font-medium items-center hover:underline decoration-dotted underline-offset-4'
        >
          <span className='lowercase'>{name}</span>
          <ArrowRight
            size={12}
            className='-rotate-45 group-hover:scale-125 transition-transform duration-200'
          />
        </a>

        <div className='flex gap-2 items-center group'>
          <Star size={14} className='group-hover:text-yellow-500' />
          <span className='text-sm'>{stargazers_count}</span>
        </div>
      </header>

      <main className='flex items-center text-sm text-pretty'>
        <p>{description ? description : '💔 No description provided'}</p>
      </main>

      <footer className='flex gap-1 flex-wrap cursor-context-menu'>
        {icon && <Tags>{icon}</Tags>}
        {topics?.map((topic: string) => (
          <Tags key={topic}>{topic}</Tags>
        ))}
      </footer>
    </article>
  )
}
