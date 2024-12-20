import { GitForkIcon } from 'lucide-react'
import { ButtonLink } from '@components_functional/general/ButtonLink'

import { repositoriesStore } from '@stores/store'
import { useStore } from '@nanostores/react'
import { useEffect, useState } from 'react'

export const InfoRepositories = () => {
  const [loading, setLoading] = useState(true)

  const repositories = useStore(repositoriesStore)

  const reposLength = repositories.length

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className='flex justify-between items-center flex-wrap'>
      <div className='flex gap-2 items-center text-sm'>
        <GitForkIcon size={14} />
        {loading ? (
          <div className='skeleton w-32 h-4'></div>
        ) : (
          <>
            <span>{reposLength > 0 ? reposLength : '0'}</span>
            <h2>{reposLength > 1 ? 'Repositorios' : 'Repositorio'}</h2>
          </>
        )}
      </div>

      <ButtonLink
        url='https://github.com/igrisdev?tab=repositories'
        target={true}
        text='Ver en GitHub'
      />
    </div>
  )
}
