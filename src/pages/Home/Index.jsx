import { useState } from 'react'
import { Header } from '../../components/Header'

export function Home() {
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <div>
      <Header onChange={setSearch} />
      <h1>Home</h1>
    </div>
  )
}
