import fastifyCors from '@fastify/cors'
import { env } from '@/helpers/env'

import { app } from './server'
import './modules'

app.register(fastifyCors, { origin: true })

export async function start(): Promise<void> {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
