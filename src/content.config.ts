import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/projects" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    link: z.string().url(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.date().optional(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = { projects };
