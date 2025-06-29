export type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const allQuestions: Question[] = [
  {
    question: "What is the primary role of an Agniveer in the Indian Army?",
    options: ["Logistics and Supply", "Combat and Security", "Medical Services", "Administrative Support"],
    answer: "Combat and Security",
    explanation: "Agniveers are primarily recruited for combat and security roles, forming the frontline of the armed forces."
  },
  {
    question: "The 'Tour of Duty' model for Agniveers is for a period of how many years?",
    options: ["2 years", "4 years", "5 years", "10 years"],
    answer: "4 years",
    explanation: "The Agnipath scheme involves a four-year 'Tour of Duty' for soldiers, sailors, and airmen."
  },
  {
    question: "What percentage of Agniveers will be retained for a full term in the armed forces after their initial engagement?",
    options: ["10%", "25%", "50%", "100%"],
    answer: "25%",
    explanation: "Up to 25% of the best-performing Agniveers from each batch will be offered a regular commission in the armed forces."
  },
  {
    question: "Which of the following is a key objective of the Agnipath scheme?",
    options: ["To reduce the pension bill", "To create a more youthful and tech-savvy military", "To provide short-term employment", "All of the above"],
    answer: "All of the above",
    explanation: "The Agnipath scheme aims to make the armed forces more youthful, reduce the long-term financial burden of pensions, and provide disciplined youth to society."
  },
  {
    question: "What is the age limit for applicants to the Agnipath scheme?",
    options: ["17.5 to 21 years", "18 to 23 years", "20 to 25 years", "16 to 20 years"],
    answer: "17.5 to 21 years",
    explanation: "The age limit for entry into the Agnipath scheme for Agniveers is 17.5 to 21 years."
  },
];

const sampleQuestion: Question = {
  question: "This is a sample question number X. What is the correct option?",
  options: ["Sample Option A", "Sample Option B", "This is the Correct Answer", "Sample Option D"],
  answer: "This is the Correct Answer",
  explanation: "This is the detailed explanation for why the chosen option is the correct answer for sample question X."
};

for (let i = allQuestions.length + 1; i <= 106; i++) {
    allQuestions.push({
        ...sampleQuestion,
        question: `This is a sample question number ${i}. What is the correct option?`,
        explanation: `This is the detailed explanation for why the chosen option is the correct answer for sample question ${i}.`
    });
}
