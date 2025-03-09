/**
 * Calculate estimated reading time for text content
 * @param content - The markdown content to analyze
 * @param wordsPerMinute - Words per minute reading speed (default: 200)
 * @returns The estimated reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  // Remove code blocks, HTML tags, frontmatter, and special characters
  const cleanContent = content
    .replace(/---(.|\n)*?---/m, '') // Remove frontmatter
    .replace(/```(.|\n)*?```/gm, '') // Remove code blocks
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim();

  // Count words by splitting on spaces
  const words = cleanContent.split(/\s+/).length;
  
  // Calculate reading time in minutes
  const minutes = Math.ceil(words / wordsPerMinute);
  
  // Format the reading time
  return minutes
}

