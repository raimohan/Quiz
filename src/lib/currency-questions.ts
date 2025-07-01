
import type { Question } from '@/lib/questions';

export const currencyQuestions: Question[] = [
    {
        question: { en: "What is the currency of the United States?", hi: "संयुक्त राज्य अमेरिका की मुद्रा क्या है?" },
        options: {
            en: ["Euro", "Dollar", "Pound", "Yen"],
            hi: ["यूरो", "डॉलर", "पाउंड", "येन"]
        },
        answer: 1,
        explanation: {
            en: "The United States Dollar (USD) is the official currency of the United States and its territories.",
            hi: "संयुक्त राज्य डॉलर (USD) संयुक्त राज्य अमेरिका और उसके क्षेत्रों की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Japan?", hi: "जापान की मुद्रा क्या है?" },
        options: {
            en: ["Yuan", "Yen", "Won", "Baht"],
            hi: ["युआन", "येन", "वोन", "बात"]
        },
        answer: 1,
        explanation: {
            en: "The Japanese Yen (JPY) is the official currency of Japan.",
            hi: "जापानी येन (JPY) जापान की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of the United Kingdom?", hi: "यूनाइटेड किंगडम की मुद्रा क्या है?" },
        options: {
            en: ["Dollar", "Franc", "Pound Sterling", "Euro"],
            hi: ["डॉलर", "फ्रैंक", "पाउंड स्टर्लिंग", "यूरो"]
        },
        answer: 2,
        explanation: {
            en: "The Pound Sterling (GBP) is the official currency of the United Kingdom.",
            hi: "पाउंड स्टर्लिंग (GBP) यूनाइटेड किंगडम की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of China?", hi: "चीन की मुद्रा क्या है?" },
        options: {
            en: ["Yen", "Won", "Renminbi (Yuan)", "Rupee"],
            hi: ["येन", "वोन", "रेनमिन्बी (युआन)", "रुपया"]
        },
        answer: 2,
        explanation: {
            en: "The Renminbi is the official currency of China, with the Yuan being the basic unit.",
            hi: "रेनमिन्बी चीन की आधिकारिक मुद्रा है, जिसमें युआन मूल इकाई है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of India?", hi: "भारत की मुद्रा क्या है?" },
        options: {
            en: ["Rupiah", "Rupee", "Ringgit", "Riyal"],
            hi: ["रुपिया", "रुपया", "रिंगगिट", "रियाल"]
        },
        answer: 1,
        explanation: {
            "en": "The Indian Rupee (INR) is the official currency of India.",
            "hi": "भारतीय रुपया (INR) भारत की आधिकारिक मुद्रा है।"
        },
        "category": "Economy"
    },
    {
        question: { en: "What is the currency of Australia?", hi: "ऑस्ट्रेलिया की मुद्रा क्या है?" },
        options: {
            en: ["Australian Dollar", "Kiwi Dollar", "Canadian Dollar", "Peso"],
            hi: ["ऑस्ट्रेलियाई डॉलर", "कीवी डॉलर", "कैनेडियन डॉलर", "पेसो"]
        },
        answer: 0,
        explanation: {
            en: "The Australian Dollar (AUD) is the official currency of Australia.",
            hi: "ऑस्ट्रेलियाई डॉलर (AUD) ऑस्ट्रेलिया की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Canada?", hi: "कनाडा की मुद्रा क्या है?" },
        options: {
            en: ["US Dollar", "Canadian Dollar", "Peso", "Franc"],
            hi: ["अमेरिकी डॉलर", "कैनेडियन डॉलर", "पेसो", "फ्रैंक"]
        },
        answer: 1,
        explanation: {
            en: "The Canadian Dollar (CAD) is the official currency of Canada, often nicknamed the 'Loonie'.",
            hi: "कैनेडियन डॉलर (CAD) कनाडा की आधिकारिक मुद्रा है, जिसे अक्सर 'लूनी' कहा जाता है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Switzerland?", hi: "स्विट्जरलैंड की मुद्रा क्या है?" },
        options: {
            en: ["Euro", "Krone", "Franc", "Złoty"],
            hi: ["यूरो", "क्रोन", "फ्रैंक", "ज़्लॉटी"]
        },
        answer: 2,
        explanation: {
            en: "The Swiss Franc (CHF) is the currency of Switzerland and Liechtenstein.",
            hi: "स्विस फ्रैंक (CHF) स्विट्जरलैंड और लिकटेंस्टीन की मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Russia?", hi: "रूस की मुद्रा क्या है?" },
        options: {
            en: ["Hryvnia", "Ruble", "Forint", "Tenge"],
            hi: ["ह्रिव्निया", "रूबल", "फोरिंट", "तेंजे"]
        },
        answer: 1,
        explanation: {
            en: "The Russian Ruble (RUB) is the official currency of the Russian Federation.",
            hi: "रूसी रूबल (RUB) रूसी संघ की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Brazil?", hi: "ब्राजील की मुद्रा क्या है?" },
        options: {
            en: ["Peso", "Real", "Bolívar", "Sol"],
            hi: ["पेसो", "रियल", "बोलिवर", "सोल"]
        },
        answer: 1,
        explanation: {
            en: "The Brazilian Real (BRL) is the official currency of Brazil.",
            hi: "ब्राज़ीलियाई रियल (BRL) ब्राज़ील की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of South Africa?", hi: "दक्षिण अफ्रीका की मुद्रा क्या है?" },
        options: {
            en: ["Naira", "Cedi", "Shilling", "Rand"],
            hi: ["नायरा", "सेडी", "शिलिंग", "रैंड"]
        },
        answer: 3,
        explanation: {
            en: "The South African Rand (ZAR) is the official currency of South Africa.",
            hi: "दक्षिण अफ्रीकी रैंड (ZAR) दक्षिण अफ्रीका की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    },
    {
        question: { en: "What is the currency of Mexico?", hi: "मेक्सिको की मुद्रा क्या है?" },
        options: {
            en: ["Dollar", "Peso", "Real", "Quetzal"],
            hi: ["डॉलर", "पेसो", "रियल", "क्वेटज़ल"]
        },
        answer: 1,
        explanation: {
            en: "The Mexican Peso (MXN) is the official currency of Mexico.",
            hi: "मैक्सिकन पेसो (MXN) मेक्सिको की आधिकारिक मुद्रा है।"
        },
        category: "Economy"
    }
]

