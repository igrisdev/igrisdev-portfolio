import { useEffect, useState } from 'react'

import type { GithubResultAPI } from '@types/GithubResultAPI'

import { CardRepository } from '@components_functional/products/CardRepository'

import { useStore } from '@nanostores/react'
import { cacheRepositoriesStore, repositoriesStore } from '@stores/store'

export const ContainerRepositories = ({
  repos,
}: {
  repos: GithubResultAPI[]
}) => {
  const [loading, setLoading] = useState(true)

  const repositories = useStore(repositoriesStore)
  const skeleton = Array(4).fill('')

  const addRepository = ({ repos }: { repos: GithubResultAPI[] }) => {
    cacheRepositoriesStore.set(repos)
    repositoriesStore.set(repos)
  }

  useEffect(() => {
    addRepository({ repos })
    setLoading(false)
  }, [repos])

  if (loading) {
    return (
      <div className='grid gap-4'>
        {skeleton.map((_, index) => (
          <div key={index} className='skeleton w-full h-24 rounded-md' />
        ))}
      </div>
    )
  }

  return (
    <div className='grid gap-4'>
      {repositories.map((repository: GithubResultAPI) => (
        <CardRepository key={repository.name} {...repository} />
      ))}
    </div>
  )
}
