
"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Palette, CheckCircle, BookOpen, Target, Flag, AlertTriangle } from 'lucide-react';
import { useQuizLanguage } from '@/context/QuizLanguageContext';

interface QuizRulesProps {
  onStartTest: () => void;
  quizTitle: string;
}

const rules = [
    {
        icon: Target,
        title_en: "Scoring System",
        title_hi: "स्कोरिंग प्रणाली",
        description_en: "You get +1 point for each correct answer and a penalty of -0.25 points for each incorrect answer. There is no penalty for unanswered questions.",
        description_hi: "आपको प्रत्येक सही उत्तर के लिए +1 अंक मिलता है और प्रत्येक गलत उत्तर के लिए -0.25 अंक का दंड लगता है। अनुत्तरित प्रश्नों के लिए कोई दंड नहीं है।"
    },
    {
        icon: Palette,
        title_en: "Question Palette Guide",
        title_hi: "प्रश्न पैलेट गाइड",
        description_en: "Green: Correct, Red: Incorrect, Purple: Marked for Review, Blue: Answered & Marked, Gray: Unanswered. Click any number to jump to that question.",
        description_hi: "हरा: सही, लाल: गलत, बैंगनी: समीक्षा के लिए चिह्नित, नीला: उत्तर दिया और चिह्नित, ग्रे: अनुत्तरित। किसी भी प्रश्न पर सीधे जाने के लिए उस नंबर पर क्लिक करें।"
    },
    {
        icon: Flag,
        title_en: "Mark for Review",
        title_hi: "समीक्षा के लिए चिह्नित करें",
        description_en: "Use the 'Mark for Review' button for questions you are unsure about. They will be highlighted for easy access later.",
        description_hi: "जिन प्रश्नों के बारे में आप अनिश्चित हैं, उनके लिए 'समीक्षा के लिए चिह्नित करें' बटन का उपयोग करें। बाद में आसान पहुंच के लिए उन्हें हाइलाइट किया जाएगा।"
    },
    {
        icon: CheckCircle,
        title_en: "Review and Submit",
        title_hi: "समीक्षा करें और सबमिट करें",
        description_en: "You can navigate between questions and change answers any time before the final submission. Once submitted, the test is final.",
        description_hi: "आप अंतिम सबमिशन से पहले कभी भी प्रश्नों के बीच नेविगेट कर सकते हैं और उत्तर बदल सकते हैं। एक बार सबमिट करने के बाद, परीक्षण अंतिम होता है।"
    },
    {
        icon: AlertTriangle,
        title_en: "Honesty Policy",
        title_hi: "ईमानदारी नीति",
        description_en: "Please attempt the quiz fairly. Do not use external aids or seek help from others during the test.",
        description_hi: "कृपया क्विज़ को ईमानदारी से हल करें। परीक्षण के दौरान बाहरी सहायता का उपयोग न करें या दूसरों से मदद न लें।"
    },
];

const QuizRules: React.FC<QuizRulesProps> = ({ onStartTest, quizTitle }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const { language, setLanguage } = useQuizLanguage();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 p-4">
      <Card className="w-full max-w-4xl shadow-2xl animate-fade-in-up border-0">
        <CardHeader className="text-center p-8">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4 shadow-lg">
             <BookOpen className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight">{quizTitle} - Instructions</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Please read the instructions carefully before you begin the test.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 md:px-12 py-8 bg-slate-50/50">
          <div className="space-y-8">
             <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Select Test Language / परीक्षा भाषा चुनें</h3>
                <RadioGroup defaultValue={language} onValueChange={(value) => setLanguage(value as 'en' | 'hi')} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="en" id="en" />
                    <Label htmlFor="en" className="text-base cursor-pointer">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hi" id="hi" />
                    <Label htmlFor="hi" className="text-base cursor-pointer">हिन्दी</Label>
                  </div>
                </RadioGroup>
              </div>

            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{rule.title_en} / {rule.title_hi}</h3>
                    <p className="text-muted-foreground leading-relaxed mt-1">{rule.description_en}</p>
                    <p className="text-muted-foreground leading-relaxed mt-1">{rule.description_hi}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-6 p-8 bg-white rounded-b-lg">
          <div className="flex items-center space-x-3">
            <Checkbox id="terms" checked={isAccepted} onCheckedChange={(checked) => setIsAccepted(!!checked)} className="h-5 w-5"/>
            <Label htmlFor="terms" className="text-base text-muted-foreground cursor-pointer">
              I have read and understood all the instructions. / मैंने सभी निर्देशों को पढ़ और समझ लिया है।
            </Label>
          </div>
          <Button
            size="lg"
            className="w-full max-w-sm font-bold text-lg"
            disabled={!isAccepted}
            onClick={onStartTest}
          >
            Start The Challenge
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default QuizRules;
