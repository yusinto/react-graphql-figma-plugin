import React from 'react'
import { useQuery } from 'urql'
import { Artist, query } from './constants'

export default () => {
  const [result] = useQuery({ query })
  const { fetching, data, error } = result

  if (fetching) {
    return <>Loading...</>
  } else if (error) {
    return <>{error.message}</>
  }

  const { queryArtists: artists } = data

  return artists.map(({ id, name, albums }: Artist) => (
    <div key={id}>
      <h1>Artist: {name}</h1>
      <ul>
        {albums.map(a => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </div>
  ))
}
