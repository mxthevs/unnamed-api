import { R, pipe } from '@mobily/ts-belt'
import * as categories from '@/adapters/http/modules/category'
import { app } from '@/ports/fastify/server'

app.get('/api/categories', async (_request, response) => {
  pipe(
    await categories.fetchCategories(),
    R.mapError(() => response.code(500).send('TODO: Handle error :)')),
    R.map((result) => response.send(result))
  )
})
