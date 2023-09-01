import { type Category } from '@prisma/client'
import { prisma } from '../prisma'

export const getCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany()
  return categories
}
