export interface Album {
  id: string
  name: string
  image: string
}

export interface Artist {
  id: string
  name: string
  albums: Album[]
}

export const query = `{
  queryArtists(byName: "yowis ben") {
    id
    name
    albums {
      id
      image
      name
    }
  }
}`
