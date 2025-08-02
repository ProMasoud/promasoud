'use server';

/**
 * @fileOverview Provides AI-powered content rewrite suggestions for webpage content, focusing on clarity and effectiveness.
 *
 * - getContentRewriteSuggestions - A function that generates content rewrite suggestions based on the input content.
 * - ContentRewriteSuggestionsInput - The input type for the getContentRewriteSuggestions function.
 * - ContentRewriteSuggestionsOutput - The return type for the getContentRewriteSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentRewriteSuggestionsInputSchema = z.object({
  content: z
    .string()
    .describe(
      'The content to be analyzed and rewritten with improved clarity and effectiveness.'
    ),
});
export type ContentRewriteSuggestionsInput = z.infer<
  typeof ContentRewriteSuggestionsInputSchema
>;

const ContentRewriteSuggestionsOutputSchema = z.object({
  rewrittenContent: z
    .string()
    .describe(
      'The rewritten content with improved clarity, effectiveness, and keyword optimization.'
    ),
});
export type ContentRewriteSuggestionsOutput = z.infer<
  typeof ContentRewriteSuggestionsOutputSchema
>;

export async function getContentRewriteSuggestions(
  input: ContentRewriteSuggestionsInput
): Promise<ContentRewriteSuggestionsOutput> {
  return contentRewriteSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentRewriteSuggestionsPrompt',
  input: {schema: ContentRewriteSuggestionsInputSchema},
  output: {schema: ContentRewriteSuggestionsOutputSchema},
  prompt: `You are an AI-powered content rewriter designed to improve the clarity and effectiveness of website content, especially in the areas of AI, DevOps, and cloud computing.

  Please analyze the following content and provide a rewritten version that is more engaging, clear, and optimized for relevant keywords without adding superfluous details.

  Original Content: {{{content}}}

  Rewritten Content:`,
});

const contentRewriteSuggestionsFlow = ai.defineFlow(
  {
    name: 'contentRewriteSuggestionsFlow',
    inputSchema: ContentRewriteSuggestionsInputSchema,
    outputSchema: ContentRewriteSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
