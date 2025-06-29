'use server';
/**
 * @fileOverview An AI agent for generating detailed explanations for quiz questions.
 *
 * - explainQuestion - A function that provides a detailed explanation for a quiz question.
 * - ExplainQuestionInput - The input type for the explainQuestion function.
 * - ExplainQuestionOutput - The return type for the explainQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainQuestionInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).describe('The possible answers to the question.'),
  answer: z.string().describe('The correct answer to the question.'),
  explanation: z.string().describe('The existing basic explanation for the answer.'),
});
export type ExplainQuestionInput = z.infer<typeof ExplainQuestionInputSchema>;

const ExplainQuestionOutputSchema = z.object({
  detailedExplanation: z.string().describe('A detailed, comprehensive explanation of the answer, including context and why other options are incorrect.'),
});
export type ExplainQuestionOutput = z.infer<typeof ExplainQuestionOutputSchema>;

export async function explainQuestion(input: ExplainQuestionInput): Promise<ExplainQuestionOutput> {
  return explainQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainQuestionPrompt',
  input: {schema: ExplainQuestionInputSchema},
  output: {schema: ExplainQuestionOutputSchema},
  prompt: `You are an expert educator and trivia master. Your task is to provide a detailed and engaging explanation for a quiz question. Go beyond the provided basic explanation.

Please provide historical context, fun facts, and a clear breakdown of why the correct answer is right and why the other options are incorrect. Make the explanation easy to understand and memorable.

Quiz Question: {{{question}}}
Options:
- {{{options.[0]}}}
- {{{options.[1]}}}
- {{{options.[2]}}}
- {{{options.[3]}}}

Correct Answer: {{{answer}}}
Basic Explanation: {{{explanation}}}

Generate a detailed explanation based on this information.`,
});

const explainQuestionFlow = ai.defineFlow(
  {
    name: 'explainQuestionFlow',
    inputSchema: ExplainQuestionInputSchema,
    outputSchema: ExplainQuestionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
