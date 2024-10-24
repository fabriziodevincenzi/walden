import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      image: z.string().optional(),
    }),
    category: z.enum(['editoriale', 'reportage', 'escursione', 'multimedia']),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articles,
};