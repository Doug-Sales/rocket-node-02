import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// plugin, trecho desacoplado do código, rotas.
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/hello', async () => {
  return 'Hello World'
})
