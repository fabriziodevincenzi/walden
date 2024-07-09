import { z, defineCollection } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string().optional()
  }).optional(),
  tags: z.array(z.string()).optional()
});

const articoloSchema = baseSchema.extend({});

const editorialeSchema = baseSchema.extend({
  authorImage: z.object({
    url: z.string(),
    alt: z.string()
  }).optional(),
});

const reportageSchema = baseSchema.extend({
  authorImage: z.object({
    url: z.string(),
    alt: z.string()
  }).optional(),
});

const escursioneSchema = baseSchema.extend({
  durata: z.string(),
  difficolta: z.string()
});

const mediaSchema = z.object({
  title: z.string(),
  author: z.string(),
  authorRole: z.string(),
  authorImage: z.string(),
  type: z.enum(['podcast', 'video']),
  url: z.string(),
  thumbnailUrl: z.string().optional(),
  pubDate: z.date()
});

const legendSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  author: z.string(),
  description: z.string(),
});

export const collections = {
  'articoli': defineCollection({ schema: articoloSchema }),
  'editoriali': defineCollection({ schema: editorialeSchema }),
  'reportage': defineCollection({ schema: reportageSchema }),
  'escursioni': defineCollection({ schema: escursioneSchema }),
  'media': defineCollection({ schema: mediaSchema }),
  'leggende': defineCollection({ schema: legendSchema })
};