import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const schema = z.object({
  number: z.number(),
  lang: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  update: z.string(),
})

const docs = defineCollection({
  loader: glob({ pattern: '**/**/*.md', base: './src/content/docs' }),
  schema: schema,
})

const mokuzi = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/docs' }),
  schema: schema,
})

export const collections = { docs, mokuzi }
