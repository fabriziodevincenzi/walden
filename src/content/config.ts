import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    category: z.enum(['editoriale', 'reportage', 'escursioni', 'multimedia']),
    excerpt: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};