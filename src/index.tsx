import React from 'react'
import { render } from 'react-dom'
import { Provider as GraphqlProvider, createClient } from 'urql'
import App from './app'

const graphqlClient = createClient({
  url: 'https://spotify-graphql-server.herokuapp.com/graphql',
})

render(
  <GraphqlProvider value={graphqlClient}>
    <App />
  </GraphqlProvider>,
  document.getElementById('reactDiv'),
)
