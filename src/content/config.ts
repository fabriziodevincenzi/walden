// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  authorTitle: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }).optional(),
  category: z.enum(['Editoriali', 'Reportage', 'Escursioni', 'Media'])
});

const editorialiCollection = defineCollection({
  schema: articleSchema.extend({
    category: z.literal('Editoriali')
  })
});

const reportageCollection = defineCollection({
  schema: articleSchema.extend({
    category: z.literal('Reportage')
  })
});

const escursioniCollection = defineCollection({
  schema: articleSchema.extend({
    category: z.literal('Escursioni'),
    duration: z.string().optional(),
    difficulty: z.string().optional(),
    distance: z.string().optional()
  })
});

const mediaCollection = defineCollection({
  schema: articleSchema.extend({
    category: z.literal('Media'),
    mediaType: z.enum(['Video', 'Podcast'])
  })
});

export const collections = {
  'editoriali': editorialiCollection,
  'reportage': reportageCollection,
  'escursioni': escursioniCollection,
  'media': mediaCollection,
};