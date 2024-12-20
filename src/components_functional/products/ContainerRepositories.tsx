import { useEffect } from 'react'

import type { GithubResultAPI } from '@types/GithubResultAPI'

import { CardRepository } from '@components_functional/products/CardRepository'

import { useStore } from '@nanostores/react'
import { cacheRepositoriesStore, repositoriesStore } from '@stores/store'

export const ContainerRepositories = ({
  repos,
}: {
  repos: GithubResultAPI[]
}) => {
  const repositories = useStore(repositoriesStore)

  const addRepository = ({ repos }: { repos: GithubResultAPI[] }) => {
    cacheRepositoriesStore.set(repos)
    repositoriesStore.set(repos)
  }

  useEffect(() => {
    addRepository({ repos })
  }, [repos])

  return (
    <div className='grid gap-4'>
      {repositories.map((repository: GithubResultAPI) => (
        <CardRepository key={repository.name} {...repository} />
      ))}
    </div>
  )
}
