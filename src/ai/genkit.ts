import {genkit} from 'genkit';

// The Google AI plugin has been removed to allow for free deployment.
// Result saving via Firebase will still work.
export const ai = genkit({
  plugins: [],
});
