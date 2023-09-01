import { R } from '@mobily/ts-belt'
import { type Category } from '@prisma/client'
import { database } from '@/adapters/db'

export async function fetchCategories(): Promise<R.Result<Category[], unknown>> {
  return await R.fromPromise(database.getCategories())
}
