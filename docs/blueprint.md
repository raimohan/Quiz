# **App Name**: Agniveer Ascent

## Core Features:

- Onboarding Screen: Displays a motivational welcome screen with the title "The Agniveer Knowledge Challenge" and a "Begin Assessment" button to start the quiz.
- Interactive Quiz Interface: Presents questions, answer options in clickable boxes, a 10-second timer, score, and navigation buttons within a two-column layout, designed as floating cards on a gradient background.
- Answer Validation: Highlights the selected answer with immediate visual feedback: green for the correct answer and red for the incorrect one.
- Intuitive Navigation: Provides "Previous", "Next", and "Mark for Review" buttons for question navigation. A grid-based question navigator allows direct access to each question.
- Firestore Data Persistence: Saves the anonymous user ID and quiz details in Firebase Firestore and triggers automatically after answering all quiz questions
- Results Presentation: Show a score screen including percentage, and the string "i love you 😅❤️".
- Anonymous Authentication: Anonymous users are authenticated to facilitate storing quiz data to the database.

## Style Guidelines:

- Primary color: Dark slate blue (#475569) for a professional yet motivational aesthetic.
- Background color: Very light slate gray (#EDF2F7) for a subtle, non-distracting background. The gradient is subtle, transitioning from the light gray to pure white.
- Accent color: Steel blue (#64748B) for interactive elements and highlights. This is similar in hue but has a different brightness and saturation to provide adequate contrast.
- Body and headline font: 'Inter', a grotesque-style sans-serif. Note: currently only Google Fonts are supported.
- Two-column layout with floating cards for quiz content and the question navigator on a subtle gray-to-white gradient background.
- Minimalist icons for navigation (previous, next, review) and to represent the status of each question in the question navigator (answered, current, marked for review).
- Smooth transitions between questions and a visually distinct circular timer animation with color changes (green to red) as time runs out.