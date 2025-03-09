import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/projects" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    status: z.enum(['ongoing', 'done']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    link: z.string().url(),
    tags: z.array(z.string()).optional(),
    publishedOn: z.coerce.date().optional(),
  }),
});

const blogposts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    abstract: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    publishedOn: z.coerce.date(),
    readingTime: z.number().optional(),
  }),
});

export const collections = { projects, blogposts };
