import { ArrowRight } from 'lucide-react'

interface Props {
  url: string
  target?: boolean
  text: string
}

export const ButtonLink = ({
  url = '/',
  target = false,
  text = 'Ver mas',
}: Props) => {
  return (
    <a
      href={url}
      target={target ? '_blank' : '_self'}
      rel='noopener noreferrer'
      className='group flex gap-1 text-sm opacity-80 items-center hover:opacity-100'
    >
      {text}
      <ArrowRight
        size={12}
        className='transition-transform duration-100 group-hover:scale-125'
      />
    </a>
  )
}