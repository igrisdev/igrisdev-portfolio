import type { GithubResultAPI } from '@types/GithubResultAPI'

import { useStore } from '@nanostores/react'
import { cacheRepositoriesStore, repositoriesStore } from '@stores/store'

import { Search } from 'lucide-react'

export const SearchProducts = () => {
  const res = useStore(cacheRepositoriesStore)

  const addRepository = ({ repos }: { repos: GithubResultAPI[] }) => {
    repositoriesStore.set(repos)
  }

  const filterRepositories = (text: string) => {
    const newRepos = res.filter((repository: GithubResultAPI) =>
      repository.name.includes(text)
    )

    addRepository({ repos: newRepos })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLocaleLowerCase()
    filterRepositories(text)
  }

  return (
    <form className='mt-2 animate-fade-up animate-once animate-ease-out'>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          className='grow'
          placeholder='Buscar repositorio'
          name='search'
          defaultValue={''}
          onChange={e => handleSearch(e)}
        />
        <Search size={20} />
      </label>
    </form>
  )
}
