import React from 'react'
import { useQuery } from 'urql'

interface Album {
  id: string
  name: string
  image: string
}

interface Artist {
  id: string
  name: string
  albums: Album[]
}

const App = () => {
  const [result] = useQuery({
    query: `
{
  queryArtists(byName: "yowis ben") {
    id
    name
    albums {
      id
      image
      name
    }
  }
}`,
  })
  const { fetching, data, error } = result

  if (fetching) {
    return <>Loading...</>
  } else if (error) {
    return <>{error.message}</>
  }

  const { queryArtists: artists } = data
  console.log(`Artist count: ${artists.length}`)
  // parent.postMessage({ pluginMessage: { type: 'projects', data } }, '*')

  return artists.map(({ id, name, albums }: Artist) => (
    <div key={id}>
      <h1>{name} albums</h1>
      <ul>{albums.map(a => <li key={a.id}>{a.name}</li>)}</ul>
    </div>
  ))
}

export default App
