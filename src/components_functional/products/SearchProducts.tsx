import { useStore } from '@nanostores/react'
import { cacheRepositoriesStore } from '@stores/store'

import { Search } from 'lucide-react'

export const SearchProducts = () => {
  const res = useStore(cacheRepositoriesStore)

  // console.log(res)

  return (
    <form className='mt-2 animate-fade-up animate-once animate-ease-out'>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          className='grow'
          placeholder='Buscar repositorio'
          name='search'
        />
        <Search size={20} />
      </label>
    </form>
  )
}
