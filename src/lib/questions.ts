
export type Question = {
    question: { en: string; hi: string };
    options: { en: string[]; hi:string[] };
    answer: number;
    explanation: { en: string; hi: string };
};

export const gkTest1Questions: Question[] = [
    {
        "question": {
            "en": "India observes National Sports Day on whose birth anniversary?",
            "hi": "भारत किसके जन्मदिवस पर राष्ट्रीय खेल दिवस मनाता है?"
        },
        "options": {
            "en": [ "Milkha Singh", "Mansoor Ali Khan Pataudi", "Dhyan Chand", "Michael Ferreira" ],
            "hi": [ "मिल्खा सिंह", "मंसूर अली खान पटौदी", "ध्यानचंद", "माइकल फरेरा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "National Sports Day is celebrated on August 29th, the birthday of hockey legend Major Dhyan Chand, who is widely regarded as the greatest hockey player of all time.",
            "hi": "राष्ट्रीय खेल दिवस 29 अगस्त को हॉकी के दिग्गज मेजर ध्यानचंद के जन्मदिन पर मनाया जाता है, जिन्हें सर्वकालिक महान हॉकी खिलाड़ी माना जाता है।"
        }
    },
    {
        "question": {
            "en": "Which country is called the “Sugar Bowl of the World”?",
            "hi": "किस देश को 'विश्व का चीनी का कटोरा' कहा जाता है?"
        },
        "options": {
            "en": [ "Cuba", "Italy", "India", "Japan" ],
            "hi": [ "क्यूबा", "इटली", "भारत", "जापान" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Cuba earned the nickname 'Sugar Bowl of the World' because, for a long period, it was the largest producer and exporter of sugar globally, with its economy heavily reliant on it.",
            "hi": "क्यूबा ने 'विश्व का चीनी का कटोरा' उपनाम अर्जित किया क्योंकि, एक लंबी अवधि के लिए, यह विश्व स्तर पर चीनी का सबसे बड़ा उत्पादक और निर्यातक था, जिसकी अर्थव्यवस्था इस पर बहुत अधिक निर्भर थी।"
        }
    },
    {
        "question": {
            "en": "Avani Lekhara is famed for which sport?",
            "hi": "अवनि लेखारा किस खेल के लिए प्रसिद्ध हैं?"
        },
        "options": {
            "en": [ "Table Tennis", "Cycling", "Shooting", "Boxing" ],
            "hi": [ "टेबल टेनिस", "साइकिलिंग", "शूटिंग", "बॉक्सिंग" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Avani Lekhara is a celebrated Indian Paralympian who competes in rifle shooting. She made history by winning a gold medal at the Tokyo 2020 Paralympics.",
            "hi": "अवनि लेखारा एक प्रसिद्ध भारतीय पैरालिंपियन हैं जो राइफल शूटिंग में प्रतिस्पर्धा करती हैं। उन्होंने टोक्यो 2020 पैरालिंपिक में स्वर्ण पदक जीतकर इतिहास रचा।"
        }
    },
    {
        "question": {
            "en": "Which port is known as the “Gateway of Eastern India”?",
            "hi": "किस बंदरगाह को 'पूर्वी भारत का प्रवेश द्वार' कहा जाता है?"
        },
        "options": {
            "en": [ "Kolkata Port", "Visakhapatnam Port", "Port Blair", "Paradip Port" ],
            "hi": [ "कोलकाता बंदरगाह", "विशाखापत्तनम बंदरगाह", "पोर्ट ब्लेयर", "पारादीप बंदरगाह" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Kolkata Port (Syama Prasad Mookerjee Port) is called the 'Gateway of Eastern India' as it's a major riverine port serving the vast economic hinterland of eastern and north-eastern India.",
            "hi": "कोलकाता बंदरगाह (श्यामा प्रसाद मुखर्जी बंदरगाह) को 'पूर्वी भारत का प्रवेश द्वार' कहा जाता है क्योंकि यह पूर्वी और उत्तर-पूर्वी भारत के विशाल आर्थिक भीतरी इलाकों की सेवा करने वाला एक प्रमुख नदी बंदरगाह है।"
        }
    },
    {
        "question": {
            "en": "A major classical dance of Andhra Pradesh is:",
            "hi": "आंध्र प्रदेश का एक प्रमुख शास्त्रीय नृत्य है:"
        },
        "options": {
            "en": [ "Kuchipudi", "Bharatanatyam", "Raaslila", "Bihu" ],
            "hi": [ "कुचिपुड़ी", "भरतनाट्यम", "रासलीला", "बिहू" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Kuchipudi is a renowned classical dance form that originated in a village named Kuchipudi in the Krishna district of Andhra Pradesh, India.",
            "hi": "कुचिपुड़ी एक प्रसिद्ध शास्त्रीय नृत्य शैली है जिसकी उत्पत्ति भारत के आंध्र प्रदेश के कृष्णा जिले में कुचिपुड़ी नामक गाँव में हुई।"
        }
    },
    {
        "question": {
            "en": "Which inspiring slogan is attributed to Subhas Chandra Bose?",
            "hi": "सुभाष चंद्र बोस को कौन सा प्रेरणादायक नारा दिया गया है?"
        },
        "options": {
            "en": [ "“Live as if you were to die tomorrow…”", "“Lose yourself in service…”", "“Give me blood and I will give you freedom.”", "“First they ignore you…”" ],
            "hi": [ "“ऐसे जियो जैसे कि तुम कल मरने वाले हो…”", "“सेवा में खुद को खो दो…”", "“तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा।“", "“पहले वे तुम्हें अनदेखा करते हैं…”" ]
        },
        "answer": 2,
        "explanation": {
            "en": "“Give me blood and I will give you freedom” (Tum Mujhe Khoon Do, Main Tumhe Azadi Dunga) was a powerful slogan used by Subhas Chandra Bose to motivate the soldiers of the Indian National Army (INA).",
            "hi": "“तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा” (तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा) सुभाष चंद्र बोस द्वारा भारतीय राष्ट्रीय सेना (आईएनए) के सैनिकों को प्रेरित करने के लिए इस्तेमाल किया गया एक शक्तिशाली नारा था।"
        }
    },
    {
        "question": {
            "en": "The Swadeshi Movement began in response to the…",
            "hi": "स्वदेशी आंदोलन किसके जवाब में शुरू हुआ था..."
        },
        "options": {
            "en": [ "Partition of Bengal", "Khilafat Movement", "Formation of Muslim League", "Non-cooperation Movement" ],
            "hi": [ "बंगाल का विभाजन", "खिलाफत आंदोलन", "मुस्लिम लीग का गठन", "असहयोग आंदोलन" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Swadeshi Movement was a major pre-independence movement started in 1905 as a direct protest against the British decision to partition Bengal.",
            "hi": "स्वदेशी आंदोलन 1905 में बंगाल के विभाजन के ब्रिटिश फैसले के सीधे विरोध के रूप में शुरू किया गया एक प्रमुख स्वतंत्रता-पूर्व आंदोलन था।"
        }
    },
    {
        "question": {
            "en": "How many Tirthankaras are there in Jainism?",
            "hi": "जैन धर्म में कितने तीर्थंकर हैं?"
        },
        "options": {
            "en": [ "12", "15", "24", "26" ],
            "hi": [ "12", "15", "24", "26" ]
        },
        "answer": 2,
        "explanation": {
            "en": "In Jainism, there are 24 Tirthankaras (spiritual teachers) in each half of the cosmic time cycle. Lord Mahavira was the 24th and last Tirthankara of the current era.",
            "hi": "जैन धर्म में, ब्रह्मांडीय समय चक्र के प्रत्येक आधे हिस्से में 24 तीर्थंकर (आध्यात्मिक शिक्षक) होते हैं। भगवान महावीर वर्तमान युग के 24वें और अंतिम तीर्थंकर थे।"
        }
    },
    {
        "question": {
            "en": "The Suez Canal connects which bodies of water?",
            "hi": "स्वेज नहर किन जल निकायों को जोड़ती है?"
        },
        "options": {
            "en": [ "Mediterranean & Red Sea", "Caspian & Aral Seas", "Red Sea & Nile River", "None of the above" ],
            "hi": [ "भूमध्य सागर और लाल सागर", "कैस्पियन और अरल सागर", "लाल सागर और नील नदी", "उपरोक्त में से कोई नहीं" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Suez Canal is a crucial artificial sea-level waterway in Egypt that connects the Mediterranean Sea to the Red Sea, significantly shortening trade routes between Europe and Asia.",
            "hi": "स्वेज नहर मिस्र में एक महत्वपूर्ण कृत्रिम समुद्री-स्तरीय जलमार्ग है जो भूमध्य सागर को लाल सागर से जोड़ता है, जिससे यूरोप और एशिया के बीच व्यापार मार्गों में काफी कमी आती है।"
        }
    },
    {
        "question": {
            "en": "BrahMos is a type of…",
            "hi": "ब्रह्मोस एक प्रकार का..."
        },
        "options": {
            "en": [ "Short-range supersonic cruise missile", "Air‑defence gun", "Military satellite", "Multiple rocket launcher" ],
            "hi": [ "कम दूरी की सुपरसोनिक क्रूज मिसाइल", "वायु-रक्षा बंदूक", "सैन्य उपग्रह", "मल्टीपल रॉकेट लॉन्चर" ]
        },
        "answer": 0,
        "explanation": {
            "en": "BrahMos is a supersonic cruise missile developed as a joint venture between India's DRDO and Russia's NPO Mashinostroyeniya. It can be launched from submarines, ships, aircraft, or land.",
            "hi": "ब्रह्मोस एक सुपरसोनिक क्रूज मिसाइल है जिसे भारत के DRDO और रूस के NPO Mashinostroyeniya के बीच एक संयुक्त उद्यम के रूप में विकसित किया गया है। इसे पनडुब्बियों, जहाजों, विमानों या भूमि से लॉन्च किया जा सकता है।"
        }
    },
    {
        "question": {
            "en": "The term “Breaststroke” is used in which sport?",
            "hi": "“ब्रेस्टस्ट्रोक” शब्द का प्रयोग किस खेल में किया जाता है?"
        },
        "options": {
            "en": [ "Football", "Swimming", "Cricket", "Lawn Tennis" ],
            "hi": [ "फ़ुटबॉल", "तैराकी", "क्रिकेट", "लॉन टेनिस" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Breaststroke is one of the four main competitive swimming styles, characterized by the swimmer's chest being on the water and not rotated.",
            "hi": "ब्रेस्टस्ट्रोक चार मुख्य प्रतिस्पर्धी तैराकी शैलियों में से एक है, जिसकी विशेषता तैराक की छाती का पानी पर होना और घुमाया नहीं जाना है।"
        }
    },
    {
        "question": {
            "en": "Who founded the Brahmo Samaj?",
            "hi": "ब्रह्म समाज की स्थापना किसने की?"
        },
        "options": {
            "en": [ "Keshab Chandra Sen", "Raja Rammohan Roy", "Devendranath Tagore", "Dayananda Saraswati" ],
            "hi": [ "केशब चंद्र सेन", "राजा राममोहन राय", "देवेंद्रनाथ टैगोर", "दयानंद सरस्वती" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Brahmo Samaj, a pivotal socio-religious reform movement, was founded in Calcutta in 1828 by Raja Rammohan Roy, a key figure in the Bengal Renaissance.",
            "hi": "ब्रह्म समाज, एक महत्वपूर्ण सामाजिक-धार्मिक सुधार आंदोलन, की स्थापना 1828 में कलकत्ता में राजा राममोहन राय द्वारा की गई थी, जो बंगाल पुनर्जागरण के एक प्रमुख व्यक्ति थे।"
        }
    },
    {
        "question": {
            "en": "The Widow Remarriage Act (1856) was passed during the tenure of?",
            "hi": "विधवा पुनर्विवाह अधिनियम (1856) किसके कार्यकाल में पारित किया गया था?"
        },
        "options": {
            "en": [ "Lord Canning", "Lord Ripon", "Lord William Bentinck", "Lord Dalhousie" ],
            "hi": [ "लॉर्ड कैनिंग", "लॉर्ड रिपन", "लॉर्ड विलियम बेंटिंक", "लॉर्ड डलहौजी" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Hindu Widows' Remarriage Act, 1856, was drafted during the tenure of Lord Dalhousie and was passed by his successor, Lord Canning.",
            "hi": "हिंदू विधवा पुनर्विवाह अधिनियम, 1856, लॉर्ड डलहौजी के कार्यकाल के दौरान तैयार किया गया था और उनके उत्तराधिकारी, लॉर्ड कैनिंग द्वारा पारित किया गया था।"
        }
    },
    {
        "question": {
            "en": "In which year was the Suez Canal officially opened?",
            "hi": "स्वेज नहर को आधिकारिक तौर पर किस वर्ष खोला गया था?"
        },
        "options": {
            "en": [ "1856", "1869", "1875", "1882" ],
            "hi": [ "1856", "1869", "1875", "1882" ]
        },
        "answer": 1,
        "explanation": {
            "en": "After a decade of construction, the Suez Canal was officially opened for navigation on November 17, 1869.",
            "hi": "एक दशक के निर्माण के बाद, स्वेज नहर को 17 नवंबर, 1869 को आधिकारिक तौर पर नेविगेशन के लिए खोल दिया गया था।"
        }
    },
    {
        "question": {
            "en": "Which river names inspired the name “BrahMos”?",
            "hi": "किन नदियों के नामों ने 'ब्रह्मोस' नाम को प्रेरित किया?"
        },
        "options": {
            "en": [ "Brahmaputra & Moskva", "Brahmaputra & Sewaro", "Brahmaputra & Oswego", "Brahmaputra & Moreau" ],
            "hi": [ "ब्रह्मपुत्र और मोस्कवा", "ब्रह्मपुत्र और सेवारो", "ब्रह्मपुत्र और ओस्वेगो", "ब्रह्मपुत्र और मोर्यू" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The name BrahMos is a portmanteau formed from the names of two rivers: the Brahmaputra of India and the Moskva of Russia.",
            "hi": "ब्रह्मोस नाम दो नदियों के नामों से बना एक पोर्टमैंट्यू है: भारत की ब्रह्मपुत्र और रूस की मोस्कवा।"
        }
    },
    {
        "question": {
            "en": "“Give me blood…” message was given in which region?",
            "hi": "“तुम मुझे खून दो…” संदेश किस क्षेत्र में दिया गया था?"
        },
        "options": {
            "en": [ "Tokyo", "Burma", "China", "London" ],
            "hi": [ "टोक्यो", "बर्मा", "चीन", "लंदन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Subhas Chandra Bose delivered this famous speech in 1944 in Burma (present-day Myanmar) to motivate the troops of the Indian National Army.",
            "hi": "सुभाष चंद्र बोस ने 1944 में बर्मा (वर्तमान म्यांमार) में भारतीय राष्ट्रीय सेना के सैनिकों को प्रेरित करने के लिए यह प्रसिद्ध भाषण दिया था।"
        }
    },
    {
        "question": {
            "en": "Who scored India’s first gold in Paralympics?",
            "hi": "पैरालिंपिक में भारत का पहला स्वर्ण पदक किसने जीता?"
        },
        "options": {
            "en": [ "Deepa Malik", "Avani Lekhara", "Murlikant Petkar", "Devendra Jhajharia" ],
            "hi": [ "दीपा मलिक", "अवनि लेखारा", "मुरलीकांत पेटकर", "देवेंद्र झाझरिया" ]
        },
        "answer": 2,
        "explanation": {
            "en": "While Avani Lekhara was the first Indian woman to win Paralympic gold, the first-ever Paralympic gold for India was won by Murlikant Petkar in swimming at the 1972 Heidelberg Games.",
            "hi": "जबकि अवनि लेखारा पैरालिंपिक स्वर्ण जीतने वाली पहली भारतीय महिला थीं, भारत के लिए पहला पैरालिंपिक स्वर्ण 1972 के हीडलबर्ग खेलों में तैराकी में मुरलीकांत पेटकर ने जीता था।"
        }
    },
    {
        "question": {
            "en": "Who is known as the “Wizard of Hockey”?",
            "hi": "“हॉकी का जादूगर” किसे कहा जाता है?"
        },
        "options": {
            "en": [ "Balbir Singh", "Dhanraj Pillay", "Major Dhyan Chand", "Hemanta Lakra" ],
            "hi": [ "बलबीर सिंह", "धनराज पिल्लै", "मेजर ध्यानचंद", "हेमंत लाकड़ा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Major Dhyan Chand was nicknamed 'The Wizard' or 'The Magician' of hockey for his superb ball control and goal-scoring feats.",
            "hi": "मेजर ध्यानचंद को उनके शानदार गेंद नियंत्रण और गोल करने के कारनामों के लिए हॉकी का 'जादूगर' या 'द मैजिशियन' उपनाम दिया गया था।"
        }
    },
    {
        "question": {
            "en": "Who was the first Indian woman to win an individual Olympic medal?",
            "hi": "व्यक्तिगत ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थी?"
        },
        "options": {
            "en": [ "Karnam Malleswari", "Saina Nehwal", "P.V. Sindhu", "Sakshi Malik" ],
            "hi": [ "कर्णम मल्लेश्वरी", "साइना नेहवाल", "पी.वी. सिंधु", "साक्षी मलिक" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Karnam Malleswari created history by winning a bronze medal in weightlifting at the 2000 Sydney Olympics, becoming the first Indian woman to win an Olympic medal.",
            "hi": "कर्णम मल्लेश्वरी ने 2000 के सिडनी ओलंपिक में भारोत्तोलन में कांस्य पदक जीतकर इतिहास रचा, जिससे वह ओलंपिक पदक जीतने वाली पहली भारतीय महिला बन गईं।"
        }
    },
    {
        "question": {
            "en": "What is the full form of DRDL?",
            "hi": "DRDL का पूर्ण रूप क्या है?"
        },
        "options": {
            "en": [ "Differential Research & Documentation Lab", "Defence Research and Development Laboratory", "Department of Research & Development Lab", "None of the above" ],
            "hi": [ "डिफरेंशियल रिसर्च एंड डॉक्यूमेंटेशन लैब", "रक्षा अनुसंधान और विकास प्रयोगशाला", "अनुसंधान और विकास प्रयोगशाला विभाग", "उपरोक्त में से कोई नहीं" ]
        },
        "answer": 1,
        "explanation": {
            "en": "DRDL stands for Defence Research and Development Laboratory. It is a premier laboratory of DRDO located in Hyderabad, working on missile systems.",
            "hi": "DRDL का मतलब रक्षा अनुसंधान और विकास प्रयोगशाला है। यह DRDO की एक प्रमुख प्रयोगशाला है जो हैदराबाद में स्थित है, जो मिसाइल प्रणालियों पर काम कर रही है।"
        }
    },
    {
        "question": {
            "en": "Which country launched the world’s first 5G network?",
            "hi": "किस देश ने दुनिया का पहला 5G नेटवर्क लॉन्च किया?"
        },
        "options": {
            "en": [ "Japan", "China", "South Korea", "USA" ],
            "hi": [ "जापान", "चीन", "दक्षिण कोरिया", "यूएसए" ]
        },
        "answer": 2,
        "explanation": {
            "en": "In April 2019, South Korea became the first country in the world to launch a nationwide commercial 5G (fifth-generation) wireless network.",
            "hi": "अप्रैल 2019 में, दक्षिण कोरिया देशव्यापी वाणिज्यिक 5G (पांचवीं पीढ़ी) वायरलेस नेटवर्क लॉन्च करने वाला दुनिया का पहला देश बन गया।"
        }
    },
    {
        "question": {
            "en": "What is the weak zone of the Earth's crust called?",
            "hi": "पृथ्वी की पपड़ी के कमजोर क्षेत्र को क्या कहा जाता है?"
        },
        "options": {
            "en": [ "Seismic zone", "Cosmic zone", "Formic zone", "Anaemic zone" ],
            "hi": [ "भूकंपीय क्षेत्र", "ब्रह्मांडीय क्षेत्र", "फॉर्मिक क्षेत्र", "एनेमिक क्षेत्र" ]
        },
        "answer": 0,
        "explanation": {
            "en": "A seismic zone, or fault zone, is an area of the Earth's crust where tectonic plates meet. These zones are prone to earthquakes and other seismic activities.",
            "hi": "एक भूकंपीय क्षेत्र, या फॉल्ट ज़ोन, पृथ्वी की पपड़ी का एक क्षेत्र है जहाँ टेक्टोनिक प्लेटें मिलती हैं। ये क्षेत्र भूकंप और अन्य भूकंपीय गतिविधियों के लिए प्रवण हैं।"
        }
    },
    {
        "question": {
            "en": "India’s first national museum of Indian cinema is located in:",
            "hi": "भारत का पहला राष्ट्रीय भारतीय सिनेमा संग्रहालय कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Delhi", "Hyderabad", "Rajasthan", "Mumbai" ],
            "hi": [ "दिल्ली", "हैदराबाद", "राजस्थान", "मुंबई" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The National Museum of Indian Cinema (NMIC) is located in Mumbai, the city that is the heart of India's film industry, often known as Bollywood.",
            "hi": "राष्ट्रीय भारतीय सिनेमा संग्रहालय (एनएमआईसी) मुंबई में स्थित है, यह शहर भारत के फिल्म उद्योग का दिल है, जिसे अक्सर बॉलीवुड के नाम से जाना जाता है।"
        }
    },
    {
        "question": {
            "en": "Who was honoured with the Bharat Ratna in 2019?",
            "hi": "2019 में भारत रत्न से किसे सम्मानित किया गया?"
        },
        "options": {
            "en": [ "Lata Mangeshkar", "Asha Bhosle", "Bhupen Hazarika", "Manna Dey" ],
            "hi": [ "लता मंगेशकर", "आशा भोसले", "भूपेन हजारिका", "मन्ना डे" ]
        },
        "answer": 2,
        "explanation": {
            "en": "In 2019, India's highest civilian award, the Bharat Ratna, was conferred upon social activist Nanaji Deshmukh (posthumously), singer-composer Bhupen Hazarika (posthumously), and former President Pranab Mukherjee.",
            "hi": "2019 में, भारत का सर्वोच्च नागरिक पुरस्कार, भारत रत्न, सामाजिक कार्यकर्ता नानाजी देशमुख (मरणोपरांत), गायक-संगीतकार भूपेन हजारिका (मरणोपरांत), और पूर्व राष्ट्रपति प्रणब मुखर्जी को प्रदान किया गया।"
        }
    },
    {
        "question": {
            "en": "Which national leader edited the Marathi newspaper Kesari?",
            "hi": "किस राष्ट्रीय नेता ने मराठी समाचार पत्र केसरी का संपादन किया?"
        },
        "options": {
            "en": [ "Gopal Krishna Gokhale", "Dr. B.R. Ambedkar", "M.G. Ranade", "Bal Gangadhar Tilak" ],
            "hi": [ "गोपाल कृष्ण गोखले", "डॉ. बी.आर. अंबेडकर", "एम.जी. रानाडे", "बाल गंगाधर तिलक" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Kesari is a Marathi newspaper founded in 1881 by Lokmanya Bal Gangadhar Tilak, a prominent leader of the Indian Independence movement. He used it to voice nationalist sentiments.",
            "hi": "केसरी 1881 में भारतीय स्वतंत्रता आंदोलन के एक प्रमुख नेता लोकमान्य बाल गंगाधर तिलक द्वारा स्थापित एक मराठी समाचार पत्र है। उन्होंने इसका उपयोग राष्ट्रवादी भावनाओं को आवाज देने के लिए किया।"
        }
    },
    {
        "question": {
            "en": "Which metal is extracted by smelting?",
            "hi": "प्रगलन द्वारा कौन सी धातु निकाली जाती है?"
        },
        "options": {
            "en": [ "Aluminium", "Magnesium", "Iron", "Silver" ],
            "hi": [ "एल्यूमीनियम", "मैग्नीशियम", "लोहा", "चांदी" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Smelting is a process of applying heat to an ore to extract a base metal. It is most prominently used to produce iron from its ore (iron oxide) in a blast furnace.",
            "hi": "प्रगलन एक आधार धातु निकालने के लिए अयस्क पर गर्मी लगाने की एक प्रक्रिया है। इसका उपयोग ब्लास्ट फर्नेस में इसके अयस्क (लौह ऑक्साइड) से लोहा बनाने के लिए सबसे प्रमुख रूप से किया जाता है।"
        }
    },
    {
        "question": {
            "en": "What is the formula of calcium hydroxide?",
            "hi": "कैल्शियम हाइड्रॉक्साइड का सूत्र क्या है?"
        },
        "options": {
            "en": [ "CaOH₂", "Ca₂OH", "Ca(OH)₂", "CaOH" ],
            "hi": [ "CaOH₂", "Ca₂OH", "Ca(OH)₂", "CaOH" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The correct chemical formula for calcium hydroxide is Ca(OH)₂, representing one calcium ion (Ca²⁺) bonded to two hydroxide ions (OH⁻).",
            "hi": "कैल्शियम हाइड्रॉक्साइड का सही रासायनिक सूत्र Ca(OH)₂ है, जो एक कैल्शियम आयन (Ca²⁺) को दो हाइड्रॉक्साइड आयनों (OH⁻) से बंधा हुआ दर्शाता है।"
        }
    },
    {
        "question": {
            "en": "What is India’s ranking in the Global Firepower Index 2025?",
            "hi": "ग्लोबल फायरपावर इंडेक्स 2025 में भारत की रैंकिंग क्या है?"
        },
        "options": {
            "en": [ "2nd", "3rd", "4th", "5th" ],
            "hi": [ "दूसरा", "तीसरा", "चौथा", "पांचवां" ]
        },
        "answer": 2,
        "explanation": {
            "en": "India consistently ranks as the 4th most powerful military in the world according to the Global Firepower Index, which assesses military strength based on multiple factors.",
            "hi": "ग्लोबल फायरपावर इंडेक्स के अनुसार भारत लगातार दुनिया में चौथी सबसे शक्तिशाली सेना के रूप में रैंक करता है, जो कई कारकों के आधार पर सैन्य ताकत का आकलन करता है।"
        }
    },
    {
        "question": {
            "en": "Where is the Army Airborne Training School located?",
            "hi": "सेना का एयरबोर्न ट्रेनिंग स्कूल कहाँ स्थित है?"
        },
        "options": {
            "en": [ "Agra", "Mumbai", "Pune", "Nagpur" ],
            "hi": [ "आगरा", "मुंबई", "पुणे", "नागपुर" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Indian Army's Airborne Training School (AATS), which trains paratroopers, is located in Agra, Uttar Pradesh.",
            "hi": "भारतीय सेना का एयरबोर्न ट्रेनिंग स्कूल (AATS), जो पैराट्रूपर्स को प्रशिक्षित करता है, आगरा, उत्तर प्रदेश में स्थित है।"
        }
    },
    {
        "question": {
            "en": "What does INTERPOL stand for?",
            "hi": "INTERPOL का मतलब क्या है?"
        },
        "options": {
            "en": [ "International Criminal Pole", "International Create Police", "International Criminal Police Organization", "None" ],
            "hi": [ "अंतर्राष्ट्रीय आपराधिक ध्रुव", "अंतर्राष्ट्रीय निर्माण पुलिस", "अंतर्राष्ट्रीय आपराधिक पुलिस संगठन", "कोई नहीं" ]
        },
        "answer": 2,
        "explanation": {
            "en": "INTERPOL stands for the International Criminal Police Organization. It is an inter-governmental organization facilitating worldwide police cooperation.",
            "hi": "INTERPOL का मतलब अंतर्राष्ट्रीय आपराधिक पुलिस संगठन है। यह एक अंतर-सरकारी संगठन है जो दुनिया भर में पुलिस सहयोग की सुविधा प्रदान करता है।"
        }
    },
    {
        "question": {
            "en": "Ex ‘Varuna’ is a bilateral exercise between India and which country?",
            "hi": "पूर्व 'वरुण' भारत और किस देश के बीच एक द्विपक्षीय अभ्यास है?"
        },
        "options": {
            "en": [ "Japan", "Sri Lanka", "France", "Australia" ],
            "hi": [ "जापान", "श्रीलंका", "फ्रांस", "ऑस्ट्रेलिया" ]
        },
        "answer": 2,
        "explanation": {
            "en": "'Varuna' is the name of the long-standing bilateral naval exercise conducted between the Indian Navy and the French Navy.",
            "hi": "'वरुण' भारतीय नौसेना और फ्रांसीसी नौसेना के बीच आयोजित होने वाले लंबे समय से चले आ रहे द्विपक्षीय नौसैनिक अभ्यास का नाम है।"
        }
    },
    {
        "question": {
            "en": "What does AEW&C stand for?",
            "hi": "AEW&C का मतलब क्या है?"
        },
        "options": {
            "en": [ "Airborne Early Warning and Center System", "Airborne East Warning and Control System", "Airborne Early Warning and Control System", "None of the above" ],
            "hi": [ "एयरबोर्न अर्ली वार्निंग एंड सेंटर सिस्टम", "एयरबोर्न ईस्ट वार्निंग एंड कंट्रोल सिस्टम", "एयरबोर्न अर्ली वार्निंग एंड कंट्रोल सिस्टम", "उपरोक्त में से कोई नहीं" ]
        },
        "answer": 2,
        "explanation": {
            "en": "AEW&C stands for Airborne Early Warning and Control System. It is an airborne radar picket system designed to detect aircraft, ships and vehicles at long ranges.",
            "hi": "AEW&C का मतलब एयरबोर्न अर्ली वार्निंग एंड कंट्रोल सिस्टम है। यह एक हवाई राडार पिकेट प्रणाली है जिसे लंबी दूरी पर विमान, जहाजों और वाहनों का पता लगाने के लिए डिज़ाइन किया गया है।"
        }
    },
    {
        "question": {
            "en": "Which day is observed as Kokborok Day in Tripura?",
            "hi": "त्रिपुरा में कोकबोरोक दिवस किस दिन मनाया जाता है?"
        },
        "options": {
            "en": [ "Jan 18", "Jan 19", "Jan 20", "Jan 21" ],
            "hi": [ "18 जनवरी", "19 जनवरी", "20 जनवरी", "21 जनवरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Kokborok Day is observed in the state of Tripura on January 19th every year to celebrate the development of Kokborok as an official language.",
            "hi": "कोकबोरोक को आधिकारिक भाषा के रूप में विकसित करने के जश्न में हर साल 19 जनवरी को त्रिपुरा राज्य में कोकबोरोक दिवस मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "PM JANMAN scheme is associated with which group?",
            "hi": "पीएम जनमन योजना किस समूह से संबंधित है?"
        },
        "options": {
            "en": [ "MSME Owners", "Farmers", "Particularly Vulnerable Tribal Groups", "NRIs" ],
            "hi": [ "एमएसएमई मालिक", "किसान", "विशेष रूप से कमजोर जनजातीय समूह", "एनआरआई" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) scheme is a central government initiative aimed at the socio-economic development of Particularly Vulnerable Tribal Groups (PVTGs).",
            "hi": "पीएम-जनमन (प्रधानमंत्री जनजाति आदिवासी न्याय महा अभियान) योजना एक केंद्र सरकार की पहल है जिसका उद्देश्य विशेष रूप से कमजोर जनजातीय समूहों (पीवीटीजी) का सामाजिक-आर्थिक विकास करना है।"
        }
    },
    {
        "question": {
            "en": "Which country pulled out of the Paris Climate Agreement?",
            "hi": "कौन सा देश पेरिस जलवायु समझौते से बाहर हो गया?"
        },
        "options": {
            "en": [ "France", "Germany", "USA", "None" ],
            "hi": [ "फ्रांस", "जर्मनी", "यूएसए", "कोई नहीं" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The United States, under the Trump administration, formally withdrew from the Paris Agreement on climate change in 2020. It has since rejoined.",
            "hi": "संयुक्त राज्य अमेरिका, ट्रम्प प्रशासन के तहत, 2020 में जलवायु परिवर्तन पर पेरिस समझौते से औपचारिक रूप से हट गया। यह तब से फिर से शामिल हो गया है।"
        }
    },
    {
        "question": {
            "en": "Which three states received full statehood on 21 Jan 1972?",
            "hi": "21 जनवरी 1972 को किन तीन राज्यों को पूर्ण राज्य का दर्जा मिला?"
        },
        "options": {
            "en": [ "Nagaland, Manipur, Tripura", "Tripura, Manipur, Meghalaya", "Assam, Manipur, Mizoram", "Sikkim, Meghalaya, Tripura" ],
            "hi": [ "नागालैंड, मणिपुर, त्रिपुरा", "त्रिपुरा, मणिपुर, मेघालय", "असम, मणिपुर, मिजोरम", "सिक्किम, मेघालय, त्रिपुरा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "On January 21, 1972, Tripura, Manipur, and Meghalaya became full-fledged states under the North Eastern Region (Re-organisation) Act, 1971.",
            "hi": "21 जनवरी, 1972 को, त्रिपुरा, मणिपुर और मेघालय उत्तर पूर्वी क्षेत्र (पुनर्गठन) अधिनियम, 1971 के तहत पूर्ण राज्य बन गए।"
        }
    },
    {
        "question": {
            "en": "What weapon counters swarm drones?",
            "hi": "कौन सा हथियार झुंड ड्रोन का मुकाबला करता है?"
        },
        "options": {
            "en": [ "Bhargavastra", "Agni", "Vayu", "Saryu" ],
            "hi": [ "भार्गवास्त्र", "अग्नि", "वायु", "सरयू" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Project Bhargavastra is reportedly an indigenous anti-drone system being developed by India's DRDO to detect, track, and neutralize hostile drone swarms.",
            "hi": "परियोजना भार्गवास्त्र कथित तौर पर भारत के DRDO द्वारा विकसित की जा रही एक स्वदेशी एंटी-ड्रोन प्रणाली है जो शत्रुतापूर्ण ड्रोन झुंडों का पता लगाने, ट्रैक करने और उन्हें बेअसर करने के लिए है।"
        }
    },
    {
        "question": {
            "en": "Which day is National Milk Day observed?",
            "hi": "राष्ट्रीय दुग्ध दिवस किस दिन मनाया जाता है?"
        },
        "options": {
            "en": [ "Dec 25", "Dec 26", "Nov 26", "Nov 25" ],
            "hi": [ "25 दिसंबर", "26 दिसंबर", "26 नवंबर", "25 नवंबर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "India celebrates National Milk Day on November 26th to commemorate the birth anniversary of Dr. Verghese Kurien, the 'Father of the White Revolution in India'.",
            "hi": "भारत में 'श्वेत क्रांति के जनक' डॉ. वर्गीज कुरियन की जयंती के उपलक्ष्य में 26 नवंबर को राष्ट्रीय दुग्ध दिवस मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "Who is called the ‘Father of Green Revolution in India’?",
            "hi": "भारत में 'हरित क्रांति का जनक' किसे कहा जाता है?"
        },
        "options": {
            "en": [ "M.S. Swaminathan", "Verghese Kurien", "Vikram Sarabhai", "Norman Borlaug" ],
            "hi": [ "एम.एस. स्वामीनाथन", "वर्गीज कुरियन", "विक्रम साराभाई", "नॉर्मन बोरलॉग" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Dr. M.S. Swaminathan, an eminent agricultural scientist, is hailed as the 'Father of the Green Revolution in India' for his leadership in introducing high-yielding varieties of wheat and rice.",
            "hi": "डॉ. एम.एस. स्वामीनाथन, एक प्रख्यात कृषि वैज्ञानिक, को गेहूं और चावल की उच्च उपज वाली किस्मों को पेश करने में उनके नेतृत्व के लिए 'भारत में हरित क्रांति का जनक' कहा जाता है।"
        }
    },
    {
        "question": {
            "en": "Who founded the Indian National Army (INA)?",
            "hi": "भारतीय राष्ट्रीय सेना (INA) की स्थापना किसने की?"
        },
        "options": {
            "en": [ "Subhas Chandra Bose", "Rash Bihari Bose", "Capt Mohan Singh", "Major Fujiwara" ],
            "hi": [ "सुभाष चंद्र बोस", "राश बिहारी बोस", "कैप्टन मोहन सिंह", "मेजर फुजिवारा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The first Indian National Army (INA) was conceptualized and founded by Captain Mohan Singh in 1942 in Southeast Asia during WWII. It was later revived and led by Subhas Chandra Bose.",
            "hi": "पहली भारतीय राष्ट्रीय सेना (INA) की अवधारणा और स्थापना द्वितीय विश्व युद्ध के दौरान दक्षिण पूर्व एशिया में 1942 में कैप्टन मोहन सिंह ने की थी। बाद में इसे सुभाष चंद्र बोस द्वारा पुनर्जीवित और नेतृत्व किया गया।"
        }
    },
    {
        "question": {
            "en": "What does the “Blue Revolution” refer to?",
            "hi": "“नीली क्रांति” का क्या अर्थ है?"
        },
        "options": {
            "en": [ "Fish production", "Food grain production", "Oil production", "Milk production" ],
            "hi": [ "मछली उत्पादन", "खाद्यान्न उत्पादन", "तेल उत्पादन", "दुग्ध उत्पादन" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The 'Blue Revolution' refers to the emergence of aquaculture as a significant and highly productive agricultural activity. It is focused on increasing fish production.",
            "hi": "'नीली क्रांति' एक महत्वपूर्ण और अत्यधिक उत्पादक कृषि गतिविधि के रूप में जलीय कृषि के उद्भव को संदर्भित करती है। यह मछली उत्पादन बढ़ाने पर केंद्रित है।"
        }
    },
    {
        "question": {
            "en": "The Territorial Army was established in which year?",
            "hi": "प्रादेशिक सेना की स्थापना किस वर्ष हुई थी?"
        },
        "options": {
            "en": [ "1962", "1949", "1920", "1953" ],
            "hi": [ "1962", "1949", "1920", "1953" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Territorial Army (TA), a second line of defence after the Regular Indian Army, was formally inaugurated by the first Indian Governor-General, C. Rajagopalachari, on October 9, 1949.",
            "hi": "प्रादेशिक सेना (टीए), नियमित भारतीय सेना के बाद रक्षा की दूसरी पंक्ति, का औपचारिक उद्घाटन पहले भारतीय गवर्नर-जनरल, सी. राजगोपालाचारी द्वारा 9 अक्टूबर, 1949 को किया गया था।"
        }
    },
    {
        "question": {
            "en": "How many Vedas are there in Hinduism?",
            "hi": "हिंदू धर्म में कितने वेद हैं?"
        },
        "options": {
            "en": [ "2", "3", "4", "5" ],
            "hi": [ "2", "3", "4", "5" ]
        },
        "answer": 2,
        "explanation": {
            "en": "There are four Vedas in Hinduism: the Rigveda, the Samaveda, the Yajurveda, and the Atharvaveda. They are the oldest scriptures of Hinduism.",
            "hi": "हिंदू धर्म में चार वेद हैं: ऋग्वेद, सामवेद, यजुर्वेद और अथर्ववेद। वे हिंदू धर्म के सबसे पुराने ग्रंथ हैं।"
        }
    },
    {
        "question": {
            "en": "Where was Gautam Buddha born?",
            "hi": "गौतम बुद्ध का जन्म कहाँ हुआ था?"
        },
        "options": {
            "en": [ "Kushinagar", "Lumbini", "Bodh Gaya", "Sarnath" ],
            "hi": [ "कुशीनगर", "लुंबिनी", "बोधगया", "सारनाथ" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Gautam Buddha was born in Lumbini, which is located in modern-day Nepal. Bodh Gaya is where he attained enlightenment, and Sarnath is where he gave his first sermon.",
            "hi": "गौतम बुद्ध का जन्म लुंबिनी में हुआ था, जो आधुनिक नेपाल में स्थित है। बोधगया वह जगह है जहाँ उन्होंने ज्ञान प्राप्त किया था, और सारनाथ वह जगह है जहाँ उन्होंने अपना पहला उपदेश दिया था।"
        }
    },
    {
        "question": {
            "en": "Who founded the Gupta dynasty?",
            "hi": "गुप्त वंश की स्थापना किसने की?"
        },
        "options": {
            "en": [ "Samudragupta", "Chandragupta I", "Kumaragupta", "Skandagupta" ],
            "hi": [ "समुद्रगुप्त", "चंद्रगुप्त प्रथम", "कुमारगुप्त", "स्कंदगुप्त" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Gupta dynasty was founded by Chandragupta I, who established a powerful empire in ancient India. Samudragupta was his son and a great conqueror.",
            "hi": "गुप्त वंश की स्थापना चंद्रगुप्त प्रथम ने की थी, जिसने प्राचीन भारत में एक शक्तिशाली साम्राज्य की स्थापना की थी। समुद्रगुप्त उसका पुत्र और एक महान विजेता था।"
        }
    },
    {
        "question": {
            "en": "What is the capital of Bhutan?",
            "hi": "भूटान की राजधानी क्या है?"
        },
        "options": {
            "en": [ "Kathmandu", "Thimphu", "Dhaka", "Yangon" ],
            "hi": [ "काठमांडू", "थिम्फू", "ढाका", "यांगून" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Thimphu is the capital and largest city of the Kingdom of Bhutan. Kathmandu is the capital of Nepal, and Dhaka is the capital of Bangladesh.",
            "hi": "थिम्फू भूटान साम्राज्य की राजधानी और सबसे बड़ा शहर है। काठमांडू नेपाल की राजधानी है, और ढाका बांग्लादेश की राजधानी है।"
        }
    },
    {
        "question": {
            "en": "Bhakra Nangal Dam is built on which river?",
            "hi": "भाखड़ा नांगल बांध किस नदी पर बनाया गया है?"
        },
        "options": {
            "en": [ "Ganga", "Yamuna", "Sutlej", "Narmada" ],
            "hi": [ "गंगा", "यमुना", "सतलुज", "नर्मदा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Bhakra Nangal Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh. It forms the Gobind Sagar reservoir.",
            "hi": "भाखड़ा नांगल बांध हिमाचल प्रदेश के बिलासपुर में सतलुज नदी पर एक कंक्रीट ग्रेविटी बांध है। यह गोबिंद सागर जलाशय बनाता है।"
        }
    },
    {
        "question": {
            "en": "Agriculture belongs to which sector of the economy?",
            "hi": "कृषि अर्थव्यवस्था के किस क्षेत्र से संबंधित है?"
        },
        "options": {
            "en": [ "Primary", "Secondary", "Tertiary", "Quaternary" ],
            "hi": [ "प्राथमिक", "माध्यमिक", "तृतीयक", "चतुर्धातुक" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The primary sector of the economy involves the extraction and harvesting of natural products from the earth, such as agriculture, fishing, and mining.",
            "hi": "अर्थव्यवस्था के प्राथमिक क्षेत्र में पृथ्वी से प्राकृतिक उत्पादों का निष्कर्षण और कटाई शामिल है, जैसे कृषि, मछली पकड़ना और खनन।"
        }
    },
    {
        "question": {
            "en": "Who is the Chairman of NITI Aayog?",
            "hi": "नीति आयोग का अध्यक्ष कौन है?"
        },
        "options": {
            "en": [ "President of India", "Vice President", "Prime Minister", "Finance Minister" ],
            "hi": [ "भारत के राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Prime Minister of India is the ex-officio Chairman of NITI Aayog (National Institution for Transforming India), which is the premier policy think tank of the Indian government.",
            "hi": "भारत के प्रधान मंत्री नीति आयोग (नेशनल इंस्टीट्यूशन फॉर ट्रांसफॉर्मिंग इंडिया) के पदेन अध्यक्ष हैं, जो भारत सरकार का प्रमुख नीति थिंक टैंक है।"
        }
    }
];

export const gkTest2Questions: Question[] = [
    {
        "question": {
            "en": "Who was the first Home Minister of India?",
            "hi": "भारत के पहले गृह मंत्री कौन थे?"
        },
        "options": {
            "en": [ "Rajendra Prasad", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar" ],
            "hi": [ "राजेंद्र प्रसाद", "सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "डॉ. बी.आर. अंबेडकर" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Sardar Vallabhbhai Patel served as the first Deputy Prime Minister and the first Home Minister of independent India.",
            "hi": "सरदार वल्लभभाई पटेल ने स्वतंत्र भारत के पहले उप प्रधानमंत्री और पहले गृह मंत्री के रूप में कार्य किया।"
        }
    },
    {
        "question": {
            "en": "From which country has India borrowed the concept of Fundamental Rights?",
            "hi": "भारत ने मौलिक अधिकारों की अवधारणा किस देश से उधार ली है?"
        },
        "options": {
            "en": [ "USA", "UK", "Russia", "France" ],
            "hi": [ "यूएसए", "यूके", "रूस", "फ्रांस" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The concept of Fundamental Rights in the Indian Constitution was borrowed from the Constitution of the United States of America (Bill of Rights).",
            "hi": "भारतीय संविधान में मौलिक अधिकारों की अवधारणा संयुक्त राज्य अमेरिका के संविधान (बिल ऑफ राइट्स) से उधार ली गई थी।"
        }
    },
    {
        "question": {
            "en": "Who was the first woman IPS officer of India?",
            "hi": "भारत की पहली महिला आईपीएस अधिकारी कौन थीं?"
        },
        "options": {
            "en": [ "Kiran Bedi", "Indira Gandhi", "Sarojini Naidu", "Aruna Asaf Ali" ],
            "hi": [ "किरण बेदी", "इंदिरा गांधी", "सरोजिनी नायडू", "अरुणा आसफ अली" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Kiran Bedi became the first woman Indian Police Service (IPS) officer in India in 1972 and served for 35 years.",
            "hi": "किरण बेदी 1972 में भारत में पहली महिला भारतीय पुलिस सेवा (आईपीएस) अधिकारी बनीं और 35 वर्षों तक सेवा की।"
        }
    },
    {
        "question": {
            "en": "Where is the headquarters of the United Nations?",
            "hi": "संयुक्त राष्ट्र का मुख्यालय कहाँ है?"
        },
        "options": {
            "en": [ "Geneva", "Paris", "Washington D.C.", "New York" ],
            "hi": [ "जिनेवा", "पेरिस", "वाशिंगटन डी.सी.", "न्यूयॉर्क" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The headquarters of the United Nations is located in New York City, USA. Geneva hosts many UN offices but is not the main headquarters.",
            "hi": "संयुक्त राष्ट्र का मुख्यालय न्यूयॉर्क शहर, यूएसए में स्थित है। जिनेवा में कई संयुक्त राष्ट्र कार्यालय हैं लेकिन यह मुख्य मुख्यालय नहीं है।"
        }
    },
    {
        "question": {
            "en": "Where is the Taj Mahal located?",
            "hi": "ताजमहल कहाँ स्थित है?"
        },
        "options": {
            "en": [ "Delhi", "Jaipur", "Agra", "Varanasi" ],
            "hi": [ "दिल्ली", "जयपुर", "आगरा", "वाराणसी" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Taj Mahal, a UNESCO World Heritage site, is located on the south bank of the Yamuna river in the Indian city of Agra.",
            "hi": "ताजमहल, एक यूनेस्को विश्व धरोहर स्थल, भारतीय शहर आगरा में यमुना नदी के दक्षिणी तट पर स्थित है।"
        }
    },
    {
        "question": {
            "en": "What is the title used for the head of the Indian Army?",
            "hi": "भारतीय सेना के प्रमुख के लिए किस उपाधि का प्रयोग किया जाता है?"
        },
        "options": {
            "en": [ "Field Marshal", "Commander-in-Chief", "Chief of the Army Staff", "General of India" ],
            "hi": [ "फील्ड मार्शल", "कमांडर-इन-चीफ", "थल सेनाध्यक्ष", "भारत के जनरल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The head of the Indian Army holds the rank of General and is known as the Chief of the Army Staff (COAS).",
            "hi": "भारतीय सेना के प्रमुख के पास जनरल का पद होता है और उन्हें थल सेनाध्यक्ष (COAS) के रूप में जाना जाता है।"
        }
    },
    {
        "question": {
            "en": "Who wrote 'Gitanjali'?",
            "hi": "'गीतांजलि' किसने लिखी थी?"
        },
        "options": {
            "en": [ "Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Subramania Bharati" ],
            "hi": [ "बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुब्रमण्य भारती" ]
        },
        "answer": 1,
        "explanation": {
            "en": "'Gitanjali' (Song Offerings) is a collection of poems by Rabindranath Tagore, for which he won the Nobel Prize in Literature in 1913.",
            "hi": "'गीतांजलि' (गीत प्रसाद) रवींद्रनाथ टैगोर द्वारा कविताओं का एक संग्रह है, जिसके लिए उन्होंने 1913 में साहित्य में नोबेल पुरस्कार जीता था।"
        }
    },
    {
        "question": {
            "en": "The 'Harimau Shakti' military exercise is conducted between India and which country?",
            "hi": "'हरिमौ शक्ति' सैन्य अभ्यास भारत और किस देश के बीच आयोजित किया जाता है?"
        },
        "options": {
            "en": [ "Indonesia", "Malaysia", "Sri Lanka", "Myanmar" ],
            "hi": [ "इंडोनेशिया", "मलेशिया", "श्रीलंका", "म्यांमार" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Exercise 'Harimau Shakti' is an annual joint military exercise between the Indian Army and the Malaysian Army to enhance interoperability.",
            "hi": "अभ्यास 'हरिमौ शक्ति' भारतीय सेना और मलेशियाई सेना के बीच अंतर-संचालन क्षमता बढ़ाने के लिए एक वार्षिक संयुक्त सैन्य अभ्यास है।"
        }
    },
    {
        "question": {
            "en": "Lothal is located in which Indian state?",
            "hi": "लोथल किस भारतीय राज्य में स्थित है?"
        },
        "options": {
            "en": [ "Rajasthan", "Gujarat", "Punjab", "Haryana" ],
            "hi": [ "राजस्थान", "गुजरात", "पंजाब", "हरियाणा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Lothal was one of the southernmost cities of the ancient Indus Valley Civilization and its archaeological site is located in the Bhal region of modern-day Gujarat.",
            "hi": "लोथल प्राचीन सिंधु घाटी सभ्यता के सबसे दक्षिणी शहरों में से एक था और इसका पुरातात्विक स्थल आधुनिक गुजरात के भाल क्षेत्र में स्थित है।"
        }
    },
    {
        "question": {
            "en": "Who was the Viceroy of India during the Non-Cooperation Movement?",
            "hi": "असहयोग आंदोलन के दौरान भारत का वायसराय कौन था?"
        },
        "options": {
            "en": [ "Lord Irwin", "Lord Reading", "Lord Curzon", "Lord Mountbatten" ],
            "hi": [ "लॉर्ड इरविन", "लॉर्ड रीडिंग", "लॉर्ड कर्जन", "लॉर्ड माउंटबेटन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Non-Cooperation Movement took place from 1920 to 1922. Lord Reading served as the Viceroy of India during the later phase of this movement, from 1921 to 1926.",
            "hi": "असहयोग आंदोलन 1920 से 1922 तक हुआ। लॉर्ड रीडिंग ने इस आंदोलन के बाद के चरण में 1921 से 1926 तक भारत के वायसराय के रूप में कार्य किया।"
        }
    },
    {
        "question": {
            "en": "What does 'MP' stand for in Indian Parliament?",
            "hi": "भारतीय संसद में 'सांसद' का क्या अर्थ है?"
        },
        "options": {
            "en": [ "Minister of Parliament", "Member of Panchayat", "Member of Parliament", "Military Personnel" ],
            "hi": [ "संसद मंत्री", "पंचायत सदस्य", "संसद सदस्य", "सैन्य कार्मिक" ]
        },
        "answer": 2,
        "explanation": {
            "en": "'MP' stands for Member of Parliament, which is a person elected to represent their constituency in the Parliament of India (either Lok Sabha or Rajya Sabha).",
            "hi": "'सांसद' का मतलब संसद सदस्य है, जो भारत की संसद (या तो लोकसभा या राज्यसभा) में अपने निर्वाचन क्षेत्र का प्रतिनिधित्व करने के लिए चुना गया व्यक्ति है।"
        }
    },
    {
        "question": {
            "en": "What is meant by 'Sex Ratio'?",
            "hi": "'लिंगानुपात' से क्या तात्पर्य है?"
        },
        "options": {
            "en": [ "No. of children per family", "No. of males per 1000 females", "No. of females per 1000 males", "Population density" ],
            "hi": [ "प्रति परिवार बच्चों की संख्या", "प्रति 1000 महिलाओं पर पुरुषों की संख्या", "प्रति 1000 पुरुषों पर महिलाओं की संख्या", "जनसंख्या घनत्व" ]
        },
        "answer": 2,
        "explanation": {
            "en": "In India, the Sex Ratio is defined as the number of females per 1000 males in the population. It is an important social indicator.",
            "hi": "भारत में, लिंगानुपात को जनसंख्या में प्रति 1000 पुरुषों पर महिलाओं की संख्या के रूप में परिभाषित किया गया है। यह एक महत्वपूर्ण सामाजिक संकेतक है।"
        }
    },
    {
        "question": {
            "en": "Which is the largest inland saline lake in India?",
            "hi": "भारत की सबसे बड़ी अंतर्देशीय खारी झील कौन सी है?"
        },
        "options": {
            "en": [ "Sambhar Lake", "Chilika Lake", "Pulicat Lake", "Wular Lake" ],
            "hi": [ "सांभर झील", "चिल्का झील", "पुलिकट झील", "वुलर झील" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Sambhar Salt Lake, located in Rajasthan, is India's largest inland saline water lake. Chilika Lake is the largest coastal lagoon (brackish water), not inland saline.",
            "hi": "राजस्थान में स्थित सांभर साल्ट लेक, भारत की सबसे बड़ी अंतर्देशीय खारे पानी की झील है। चिल्का झील सबसे बड़ी तटीय लैगून (खारा पानी) है, न कि अंतर्देशीय खारी।"
        }
    },
    {
        "question": {
            "en": "On which river is Agra situated?",
            "hi": "आगरा किस नदी पर स्थित है?"
        },
        "options": {
            "en": [ "Ganga", "Yamuna", "Chambal", "Betwa" ],
            "hi": [ "गंगा", "यमुना", "चंबल", "बेतवा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The city of Agra, home to the Taj Mahal, is situated on the banks of the Yamuna River.",
            "hi": "आगरा शहर, ताजमहल का घर, यमुना नदी के तट पर स्थित है।"
        }
    },
    {
        "question": {
            "en": "Which scheme recruits youth into the Armed Forces?",
            "hi": "कौन सी योजना युवाओं को सशस्त्र बलों में भर्ती करती है?"
        },
        "options": {
            "en": [ "Make in India", "Skill India", "Agnipath Scheme", "Ayushman Bharat" ],
            "hi": [ "मेक इन इंडिया", "स्किल इंडिया", "अग्निपथ योजना", "आयुष्मान भारत" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Agnipath Scheme is the recruitment process for individuals to serve in the Indian Armed Forces as 'Agniveers' for a period of four years.",
            "hi": "अग्निपथ योजना भारतीय सशस्त्र बलों में चार साल की अवधि के लिए 'अग्निवीर' के रूप में सेवा करने के लिए व्यक्तियों के लिए भर्ती प्रक्रिया है।"
        }
    },
    {
        "question": {
            "en": "Who wrote the ancient play 'Mudrarakshasa'?",
            "hi": "प्राचीन नाटक 'मुद्राराक्षस' किसने लिखा था?"
        },
        "options": {
            "en": [ "Kalidasa", "Vishakhadatta", "Bhavabhuti", "Bhasa" ],
            "hi": [ "कालिदास", "विशाखदत्त", "भवभूति", "भास" ]
        },
        "answer": 1,
        "explanation": {
            "en": "'Mudrarakshasa' is a historical play in Sanskrit by the ancient Indian playwright Vishakhadatta that narrates the ascent of King Chandragupta Maurya to power.",
            "hi": "'मुद्राराक्षस' प्राचीन भारतीय नाटककार विशाखदत्त द्वारा संस्कृत में एक ऐतिहासिक नाटक है जो राजा चंद्रगुप्त मौर्य की सत्ता में वृद्धि का वर्णन करता है।"
        }
    },
    {
        "question": {
            "en": "Where is the famous Somnath Temple located?",
            "hi": "प्रसिद्ध सोमनाथ मंदिर कहाँ स्थित है?"
        },
        "options": {
            "en": [ "Rajasthan", "Maharashtra", "Gujarat", "Madhya Pradesh" ],
            "hi": [ "राजस्थान", "महाराष्ट्र", "गुजरात", "मध्य प्रदेश" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Somnath Temple, one of the twelve jyotirlinga shrines of Lord Shiva, is located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat.",
            "hi": "सोमनाथ मंदिर, भगवान शिव के बारह ज्योतिर्लिंग मंदिरों में से एक, गुजरात के पश्चिमी तट पर सौराष्ट्र में वेरावल के पास प्रभास पाटन में स्थित है।"
        }
    },
    {
        "question": {
            "en": "Where was Saint Kabir born?",
            "hi": "संत कबीर का जन्म कहाँ हुआ था?"
        },
        "options": {
            "en": [ "Varanasi", "Ayodhya", "Haridwar", "Prayagraj" ],
            "hi": [ "वाराणसी", "अयोध्या", "हरिद्वार", "प्रयागराज" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Saint Kabir, the 15th-century mystic poet, was born in the city of Varanasi (also known as Kashi), Uttar Pradesh.",
            "hi": "संत कबीर, 15 वीं सदी के रहस्यवादी कवि, का जन्म वाराणसी (जिसे काशी भी कहा जाता है), उत्तर प्रदेश शहर में हुआ था।"
        }
    },
    {
        "question": {
            "en": "Who founded the Mughal Empire?",
            "hi": "मुगल साम्राज्य की स्थापना किसने की?"
        },
        "options": {
            "en": [ "Humayun", "Akbar", "Babur", "Aurangzeb" ],
            "hi": [ "हुमायूँ", "अकबर", "बाबर", "औरंगजेब" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi in the First Battle of Panipat.",
            "hi": "बाबर ने पानीपत की पहली लड़ाई में इब्राहिम लोदी को हराने के बाद 1526 में मुगल साम्राज्य की स्थापना की।"
        }
    },
    {
        "question": {
            "en": "Who presided over the Lahore Congress session in 1929?",
            "hi": "1929 में लाहौर कांग्रेस अधिवेशन की अध्यक्षता किसने की?"
        },
        "options": {
            "en": [ "Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bal Gangadhar Tilak" ],
            "hi": [ "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी", "बाल गंगाधर तिलक" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Jawaharlal Nehru presided over the historic Lahore session of the Indian National Congress in 1929, where the resolution for 'Purna Swaraj' (complete independence) was passed.",
            "hi": "जवाहरलाल नेहरू ने 1929 में भारतीय राष्ट्रीय कांग्रेस के ऐतिहासिक लाहौर अधिवेशन की अध्यक्षता की, जहाँ 'पूर्ण स्वराज' (पूर्ण स्वतंत्रता) का प्रस्ताव पारित किया गया था।"
        }
    },
    {
        "question": {
            "en": "Who chaired the first meeting of the Indian National Congress?",
            "hi": "भारतीय राष्ट्रीय कांग्रेस की पहली बैठक की अध्यक्षता किसने की?"
        },
        "options": {
            "en": [ "Mahatma Gandhi", "W.C. Bonnerjee", "Dadabhai Naoroji", "S.N. Banerjee" ],
            "hi": [ "महात्मा गांधी", "डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "एस.एन. बनर्जी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The first session of the Indian National Congress was held in Bombay in 1885 and was presided over by Womesh Chunder Bonnerjee.",
            "hi": "भारतीय राष्ट्रीय कांग्रेस का पहला अधिवेशन 1885 में बॉम्बे में आयोजित किया गया था और इसकी अध्यक्षता वोमेश चंदर बनर्जी ने की थी।"
        }
    },
    {
        "question": {
            "en": "Who wrote 'Sare Jahan Se Accha'?",
            "hi": "'सारे जहाँ से अच्छा' किसने लिखा?"
        },
        "options": {
            "en": [ "Rabindranath Tagore", "Muhammad Iqbal", "Bankim Chandra Chattopadhyay", "Subramania Bharati" ],
            "hi": [ "रवींद्रनाथ टैगोर", "मुहम्मद इकबाल", "बंकिम चंद्र चट्टोपाध्याय", "सुब्रमण्य भारती" ]
        },
        "answer": 1,
        "explanation": {
            "en": "'Sare Jahan Se Accha,' formally known as 'Tarānah-e-Hindi', is an Urdu patriotic song written by the poet Muhammad Iqbal.",
            "hi": "'सारे जहाँ से अच्छा,' जिसे औपचारिक रूप से 'तराना-ए-हिंदी' के नाम से जाना जाता है, कवि मुहम्मद इकबाल द्वारा लिखा गया एक उर्दू देशभक्ति गीत है।"
        }
    },
    {
        "question": {
            "en": "Which Article allows joint sessions of Parliament?",
            "hi": "कौन सा अनुच्छेद संसद के संयुक्त सत्रों की अनुमति देता है?"
        },
        "options": {
            "en": [ "Article 352", "Article 370", "Article 108", "Article 80" ],
            "hi": [ "अनुच्छेद 352", "अनुच्छेद 370", "अनुच्छेद 108", "अनुच्छेद 80" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Article 108 of the Indian Constitution provides for a joint sitting of both Houses of Parliament (Lok Sabha and Rajya Sabha) to resolve a deadlock on a bill.",
            "hi": "भारतीय संविधान का अनुच्छेद 108 एक विधेयक पर गतिरोध को हल करने के लिए संसद के दोनों सदनों (लोकसभा और राज्यसभा) की संयुक्त बैठक का प्रावधान करता है।"
        }
    },
    {
        "question": {
            "en": "Who is known as the 'Missile Man of India'?",
            "hi": "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?"
        },
        "options": {
            "en": [ "Pranab Mukherjee", "A.P.J. Abdul Kalam", "Zakir Hussain", "R. Venkataraman" ],
            "hi": [ "प्रणब मुखर्जी", "ए.पी.जे. अब्दुल कलाम", "जाकिर हुसैन", "आर. वेंकटरमन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Dr. A.P.J. Abdul Kalam, the 11th President of India, is popularly known as the 'Missile Man of India' for his pivotal role in developing India's missile and nuclear weapons programs.",
            "hi": "डॉ. ए.पी.जे. अब्दुल कलाम, भारत के 11वें राष्ट्रपति, को भारत के मिसाइल और परमाणु हथियार कार्यक्रमों को विकसित करने में उनकी महत्वपूर्ण भूमिका के लिए 'मिसाइल मैन ऑफ इंडिया' के रूप में जाना जाता है।"
        }
    },
    {
        "question": {
            "en": "What is the Upper House of India's Parliament called?",
            "hi": "भारत की संसद के ऊपरी सदन को क्या कहा जाता है?"
        },
        "options": {
            "en": [ "Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "High Court" ],
            "hi": [ "लोकसभा", "राज्यसभा", "विधानसभा", "उच्च न्यायालय" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Rajya Sabha (Council of States) is the Upper House of the Parliament of India. The Lok Sabha (House of the People) is the Lower House.",
            "hi": "राज्यसभा (राज्यों की परिषद) भारत की संसद का ऊपरी सदन है। लोकसभा (लोगों का सदन) निचला सदन है।"
        }
    },
    {
        "question": {
            "en": "Who was the first female judge of the Supreme Court of India?",
            "hi": "भारत के सर्वोच्च न्यायालय की पहली महिला न्यायाधीश कौन थीं?"
        },
        "options": {
            "en": [ "Ruma Pal", "Fatima Beevi", "Leila Seth", "Anna Chandy" ],
            "hi": [ "रूमा पाल", "फातिमा बीवी", "लीला सेठ", "अन्ना चांडी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Justice M. Fathima Beevi became the first female judge to be appointed to the Supreme Court of India in 1989. Leila Seth was the first female chief justice of a state high court.",
            "hi": "न्यायमूर्ति एम. फातिमा बीवी 1989 में भारत के सर्वोच्च न्यायालय में नियुक्त होने वाली पहली महिला न्यायाधीश बनीं। लीला सेठ एक राज्य उच्च न्यायालय की पहली महिला मुख्य न्यायाधीश थीं।"
        }
    },
    {
        "question": {
            "en": "The Booker Prize is awarded in the field of:",
            "hi": "बुकर पुरस्कार किस क्षेत्र में दिया जाता है:"
        },
        "options": {
            "en": [ "Science", "Fiction Literature", "Journalism", "Social Service" ],
            "hi": [ "विज्ञान", "कथा साहित्य", "पत्रकारिता", "समाज सेवा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Booker Prize is a prestigious literary award conferred each year for the best novel written in English and published in the UK or Ireland.",
            "hi": "बुकर पुरस्कार एक प्रतिष्ठित साहित्यिक पुरस्कार है जो हर साल अंग्रेजी में लिखे गए और यूके या आयरलैंड में प्रकाशित सर्वश्रेष्ठ उपन्यास के लिए दिया जाता है।"
        }
    },
    {
        "question": {
            "en": "Who is the author of the book \"Wings of Fire\"?",
            "hi": "\"विंग्स ऑफ फायर\" पुस्तक के लेखक कौन हैं?"
        },
        "options": {
            "en": [ "Jawaharlal Nehru", "Mahatma Gandhi", "A.P.J. Abdul Kalam", "Vikram Seth" ],
            "hi": [ "जवाहरलाल नेहरू", "महात्मा गांधी", "ए.पी.जे. अब्दुल कलाम", "विक्रम सेठ" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Wings of Fire is the autobiography of Dr. A.P.J. Abdul Kalam, former President of India.",
            "hi": "विंग्स ऑफ फायर भारत के पूर्व राष्ट्रपति डॉ. ए.पी.जे. अब्दुल कलाम की आत्मकथा है।"
        }
    },
    {
        "question": {
            "en": "The Pulitzer Prize is primarily associated with which field?",
            "hi": "पुलित्जर पुरस्कार मुख्य रूप से किस क्षेत्र से संबंधित है?"
        },
        "options": {
            "en": [ "Music", "Film", "Sports", "Journalism" ],
            "hi": [ "संगीत", "फिल्म", "खेल", "पत्रकारिता" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Pulitzer Prize is an award for achievements in newspaper, magazine, and online journalism, literature, and musical composition within the United States.",
            "hi": "पुलित्जर पुरस्कार संयुक्त राज्य अमेरिका के भीतर समाचार पत्र, पत्रिका और ऑनलाइन पत्रकारिता, साहित्य और संगीत रचना में उपलब्धियों के लिए एक पुरस्कार है।"
        }
    },
    {
        "question": {
            "en": "Who was the first Indian to receive the Nobel Prize?",
            "hi": "नोबेल पुरस्कार प्राप्त करने वाले पहले भारतीय कौन थे?"
        },
        "options": {
            "en": [ "C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen" ],
            "hi": [ "सी.वी. रमन", "रवींद्रनाथ टैगोर", "मदर टेरेसा", "अमर्त्य सेन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Rabindranath Tagore was the first Indian (and the first non-European) to be awarded the Nobel Prize in Literature in 1913 for his work 'Gitanjali'.",
            "hi": "रवींद्रनाथ टैगोर 1913 में अपनी कृति 'गीतांजलि' के लिए साहित्य में नोबेल पुरस्कार से सम्मानित होने वाले पहले भारतीय (और पहले गैर-यूरोपीय) थे।"
        }
    },
    {
        "question": {
            "en": "The \"Saraswati Samman\" is an annual award for outstanding prose or poetry in which languages?",
            "hi": "\"सरस्वती सम्मान\" किन भाषाओं में उत्कृष्ट गद्य या कविता के लिए एक वार्षिक पुरस्कार है?"
        },
        "options": {
            "en": [ "Only Hindi", "Any of the 22 languages of India listed in Schedule VIII of the Constitution", "Only Sanskrit", "English and Hindi" ],
            "hi": [ "केवल हिंदी", "संविधान की आठवीं अनुसूची में सूचीबद्ध भारत की 22 भाषाओं में से कोई भी", "केवल संस्कृत", "अंग्रेजी और हिंदी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "It is an annual award for outstanding literary work in any of the 22 languages of India listed in Schedule VIII of the Constitution.",
            "hi": "यह संविधान की आठवीं अनुसूची में सूचीबद्ध भारत की 22 भाषाओं में से किसी में भी उत्कृष्ट साहित्यिक कार्य के लिए एक वार्षिक पुरस्कार है।"
        }
    },
    {
        "question": {
            "en": "What is the term length for a member of the Rajya Sabha?",
            "hi": "राज्यसभा के सदस्य का कार्यकाल कितना होता है?"
        },
        "options": {
            "en": [ "4 years", "5 years", "6 years", "No fixed term" ],
            "hi": [ "4 साल", "5 साल", "6 साल", "कोई निश्चित अवधि नहीं" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Members of the Rajya Sabha are elected for a term of six years, with one-third of the members retiring every two years.",
            "hi": "राज्यसभा के सदस्य छह साल के कार्यकाल के लिए चुने जाते हैं, जिसमें एक-तिहाई सदस्य हर दो साल में सेवानिवृत्त होते हैं।"
        }
    },
    {
        "question": {
            "en": "Who appoints the Chief Election Commissioner of India?",
            "hi": "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?"
        },
        "options": {
            "en": [ "The Prime Minister", "The Chief Justice of India", "The President of India", "The Parliament" ],
            "hi": [ "प्रधानमंत्री", "भारत के मुख्य न्यायाधीश", "भारत के राष्ट्रपति", "संसद" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The President of India appoints the Chief Election Commissioner, who heads the Election Commission of India.",
            "hi": "भारत के राष्ट्रपति मुख्य चुनाव आयुक्त की नियुक्ति करते हैं, जो भारत के चुनाव आयोग का प्रमुख होता है।"
        }
    },
    {
        "question": {
            "en": "The 'Zero Hour' in the Indian Parliament refers to:",
            "hi": "भारतीय संसद में 'शून्य काल' का अर्थ है:"
        },
        "options": {
            "en": [ "The last hour of the session", "The first hour of the session", "The time immediately following the Question Hour", "The time when the budget is presented" ],
            "hi": [ "सत्र का अंतिम घंटा", "सत्र का पहला घंटा", "प्रश्नकाल के तुरंत बाद का समय", "बजट पेश करने का समय" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Zero Hour is the time when Members of Parliament can raise issues of urgent public importance without any prior notice.",
            "hi": "शून्यकाल वह समय है जब संसद सदस्य बिना किसी पूर्व सूचना के तत्काल सार्वजनिक महत्व के मुद्दे उठा सकते हैं।"
        }
    },
    {
        "question": {
            "en": "Which of the following is not a fundamental right in the Indian Constitution?",
            "hi": "निम्नलिखित में से कौन सा भारतीय संविधान में एक मौलिक अधिकार नहीं है?"
        },
        "options": {
            "en": [ "Right to Equality", "Right to Freedom of Religion", "Right to Property", "Right against Exploitation" ],
            "hi": [ "समानता का अधिकार", "धर्म की स्वतंत्रता का अधिकार", "संपत्ति का अधिकार", "शोषण के खिलाफ अधिकार" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Right to Property was removed from the list of Fundamental Rights by the 44th Amendment Act in 1978 and is now a legal right under Article 300-A.",
            "hi": "संपत्ति के अधिकार को 1978 में 44वें संशोधन अधिनियम द्वारा मौलिक अधिकारों की सूची से हटा दिया गया था और अब यह अनुच्छेद 300-ए के तहत एक कानूनी अधिकार है।"
        }
    },
    {
        "question": {
            "en": "The first session of the Indian Constituent Assembly was held on:",
            "hi": "भारतीय संविधान सभा का पहला सत्र कब आयोजित किया गया था:"
        },
        "options": {
            "en": [ "August 15, 1947", "January 26, 1950", "December 9, 1946", "August 9, 1942" ],
            "hi": [ "15 अगस्त, 1947", "26 जनवरी, 1950", "9 दिसंबर, 1946", "9 अगस्त, 1942" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Constituent Assembly met for the first time in New Delhi on 9 December 1946 in the Constitution Hall which is now known as the Central Hall of Parliament House.",
            "hi": "संविधान सभा की पहली बैठक 9 दिसंबर 1946 को नई दिल्ली में संविधान हॉल में हुई जिसे अब संसद भवन के सेंट्रल हॉल के रूप में जाना जाता है।"
        }
    },
    {
        "question": {
            "en": "On which date is the National Youth Day celebrated in India, marking the birth anniversary of Swami Vivekananda?",
            "hi": "भारत में राष्ट्रीय युवा दिवस किस तारीख को मनाया जाता है, जो स्वामी विवेकानंद की जयंती का प्रतीक है?"
        },
        "options": {
            "en": [ "January 23", "January 12", "January 26", "January 30" ],
            "hi": [ "23 जनवरी", "12 जनवरी", "26 जनवरी", "30 जनवरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "National Youth Day is celebrated on 12th January to honor the birth anniversary of Swami Vivekananda.",
            "hi": "स्वामी विवेकानंद की जयंती के सम्मान में 12 जनवरी को राष्ट्रीय युवा दिवस मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "World Environment Day is observed globally on:",
            "hi": "विश्व पर्यावरण दिवस विश्व स्तर पर कब मनाया जाता है:"
        },
        "options": {
            "en": [ "April 22", "June 5", "September 16", "October 24" ],
            "hi": [ "22 अप्रैल", "5 जून", "16 सितंबर", "24 अक्टूबर" ]
        },
        "answer": 1,
        "explanation": {
            "en": "World Environment Day, established by the UN, is celebrated on June 5th each year to encourage awareness and action for the protection of our environment.",
            "hi": "संयुक्त राष्ट्र द्वारा स्थापित विश्व पर्यावरण दिवस, हमारे पर्यावरण की सुरक्षा के लिए जागरूकता और कार्रवाई को प्रोत्साहित करने के लिए हर साल 5 जून को मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "National Science Day in India is celebrated to commemorate:",
            "hi": "भारत में राष्ट्रीय विज्ञान दिवस किसकी स्मृति में मनाया जाता है:"
        },
        "options": {
            "en": [ "The launch of Aryabhata satellite", "The discovery of the 'Raman Effect' by C.V. Raman", "The birth anniversary of Homi J. Bhabha", "The Pokhran nuclear test" ],
            "hi": [ "आर्यभट्ट उपग्रह का प्रक्षेपण", "सी.वी. रमन द्वारा 'रमन प्रभाव' की खोज", "होमी जे. भाभा की जयंती", "पोखरण परमाणु परीक्षण" ]
        },
        "answer": 1,
        "explanation": {
            "en": "It is celebrated on 28th February each year to mark the discovery of the Raman Effect by Indian physicist Sir C. V. Raman.",
            "hi": "यह हर साल 28 फरवरी को भारतीय भौतिक विज्ञानी सर सी. वी. रमन द्वारा रमन प्रभाव की खोज को चिह्नित करने के लिए मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "International Yoga Day is celebrated on:",
            "hi": "अंतर्राष्ट्रीय योग दिवस कब मनाया जाता है:"
        },
        "options": {
            "en": [ "May 21", "June 21", "July 21", "August 21" ],
            "hi": [ "21 मई", "21 जून", "21 जुलाई", "21 अगस्त" ]
        },
        "answer": 1,
        "explanation": {
            "en": "International Yoga Day is celebrated annually on June 21 since its inception in 2015.",
            "hi": "2015 में इसकी स्थापना के बाद से हर साल 21 जून को अंतर्राष्ट्रीय योग दिवस मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "Pravasi Bharatiya Divas (Non-Resident Indian Day) is celebrated on:",
            "hi": "प्रवासी भारतीय दिवस (अनिवासी भारतीय दिवस) कब मनाया जाता है:"
        },
        "options": {
            "en": [ "January 9", "February 9", "March 9", "April 9" ],
            "hi": [ "9 जनवरी", "9 फरवरी", "9 मार्च", "9 अप्रैल" ]
        },
        "answer": 0,
        "explanation": {
            "en": "It is celebrated on 9 January to mark the contribution of the overseas Indian community towards the development of India.",
            "hi": "यह भारत के विकास में प्रवासी भारतीय समुदाय के योगदान को चिह्नित करने के लिए 9 जनवरी को मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "Where is the headquarters of the International Monetary Fund (IMF) located?",
            "hi": "अंतर्राष्ट्रीय मुद्रा कोष (IMF) का मुख्यालय कहाँ स्थित है?"
        },
        "options": {
            "en": [ "Geneva, Switzerland", "New York, USA", "Washington D.C., USA", "Paris, France" ],
            "hi": [ "जिनेवा, स्विट्जरलैंड", "न्यूयॉर्क, यूएसए", "वाशिंगटन डी.सी., यूएसए", "पेरिस, फ्रांस" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The IMF is headquartered in Washington, D.C., United States.",
            "hi": "आईएमएफ का मुख्यालय वाशिंगटन, डी.सी., संयुक्त राज्य अमेरिका में है।"
        }
    },
    {
        "question": {
            "en": "Which of the following is NOT a member of SAARC?",
            "hi": "निम्नलिखित में से कौन सा सार्क का सदस्य नहीं है?"
        },
        "options": {
            "en": [ "Bhutan", "Nepal", "Myanmar", "Afghanistan" ],
            "hi": [ "भूटान", "नेपाल", "म्यांमार", "अफगानिस्तान" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The members of SAARC are Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka. Myanmar is a member of ASEAN.",
            "hi": "सार्क के सदस्य अफगानिस्तान, बांग्लादेश, भूटान, भारत, मालदीव, नेपाल, पाकिस्तान और श्रीलंका हैं। म्यांमार आसियान का सदस्य है।"
        }
    },
    {
        "question": {
            "en": "The headquarters of the World Trade Organization (WTO) is located in:",
            "hi": "विश्व व्यापार संगठन (WTO) का मुख्यालय कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Vienna, Austria", "Brussels, Belgium", "Geneva, Switzerland", "London, UK" ],
            "hi": [ "वियना, ऑस्ट्रिया", "ब्रसेल्स, बेल्जियम", "जिनेवा, स्विट्जरलैंड", "लंदन, यूके" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The WTO is headquartered in Geneva, Switzerland.",
            "hi": "डब्ल्यूटीओ का मुख्यालय जिनेवा, स्विट्जरलैंड में है।"
        }
    },
    {
        "question": {
            "en": "ASEAN (Association of Southeast Asian Nations) was established in which year?",
            "hi": "आसियान (दक्षिण पूर्व एशियाई राष्ट्रों का संघ) की स्थापना किस वर्ष हुई थी?"
        },
        "options": {
            "en": [ "1957", "1967", "1977", "1987" ],
            "hi": [ "1957", "1967", "1977", "1987" ]
        },
        "answer": 1,
        "explanation": {
            "en": "ASEAN was established on 8 August 1967 in Bangkok, Thailand.",
            "hi": "आसियान की स्थापना 8 अगस्त 1967 को बैंकॉक, थाईलैंड में हुई थी।"
        }
    },
    {
        "question": {
            "en": "The headquarters of UNESCO is located in:",
            "hi": "यूनेस्को का मुख्यालय कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Rome, Italy", "Paris, France", "New York, USA", "Berlin, Germany" ],
            "hi": [ "रोम, इटली", "पेरिस, फ्रांस", "न्यूयॉर्क, यूएसए", "बर्लिन, जर्मनी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The United Nations Educational, Scientific and Cultural Organization (UNESCO) is headquartered in Paris, France.",
            "hi": "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक और सांस्कृतिक संगठन (यूनेस्को) का मुख्यालय पेरिस, फ्रांस में है।"
        }
    },
    {
        "question": {
            "en": "The term 'Ashes' is associated with which sport?",
            "hi": "'एशेज' शब्द किस खेल से जुड़ा है?"
        },
        "options": {
            "en": [ "Football", "Hockey", "Cricket", "Tennis" ],
            "hi": [ "फ़ुटबॉल", "हॉकी", "क्रिकेट", "टेनिस" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ashes is a Test cricket series played between England and Australia.",
            "hi": "एशेज इंग्लैंड और ऑस्ट्रेलिया के बीच खेली जाने वाली एक टेस्ट क्रिकेट श्रृंखला है।"
        }
    },
    {
        "question": {
            "en": "The Ryder Cup is a famous tournament in which sport?",
            "hi": "राइडर कप किस खेल में एक प्रसिद्ध टूर्नामेंट है?"
        },
        "options": {
            "en": [ "Golf", "Tennis", "Badminton", "Table Tennis" ],
            "hi": [ "गोल्फ", "टेनिस", "बैडमिंटन", "टेबल टेनिस" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Ryder Cup is a biennial men's golf competition between teams from Europe and the United States.",
            "hi": "राइडर कप यूरोप और संयुक्त राज्य अमेरिका की टीमों के बीच एक द्विवार्षिक पुरुष गोल्फ प्रतियोगिता है।"
        }
    },
    {
        "question": {
            "en": "How many players are there on each side in a game of basketball?",
            "hi": "बास्केटबॉल के खेल में प्रत्येक पक्ष में कितने खिलाड़ी होते हैं?"
        },
        "options": {
            "en": [ "4", "5", "6", "7" ],
            "hi": [ "4", "5", "6", "7" ]
        },
        "answer": 1,
        "explanation": {
            "en": "A standard basketball team has five players on the court at any one time.",
            "hi": "एक मानक बास्केटबॉल टीम में किसी भी समय कोर्ट पर पांच खिलाड़ी होते हैं।"
        }
    },
    {
        "question": {
            "en": "The term 'Grand Slam' is associated with:",
            "hi": "'ग्रैंड स्लैम' शब्द किससे संबंधित है:"
        },
        "options": {
            "en": [ "Billiards", "Chess", "Bridge", "Tennis" ],
            "hi": [ "बिलियर्ड्स", "शतरंज", "ब्रिज", "टेनिस" ]
        },
        "answer": 3,
        "explanation": {
            "en": "In tennis, the Grand Slam refers to the accomplishment of winning all four major championships in the same calendar year.",
            "hi": "टेनिस में, ग्रैंड स्लैम एक ही कैलेंडर वर्ष में सभी चार प्रमुख चैंपियनशिप जीतने की उपलब्धि को संदर्भित करता है।"
        }
    }
];

export const gkTest3Questions: Question[] = [
    {
        "question": {
            "en": "Neeraj Chopra is associated with which sport?",
            "hi": "नीरज चोपड़ा किस खेल से जुड़े हैं?"
        },
        "options": {
            "en": [ "Shooting", "Wrestling", "Javelin Throw", "Boxing" ],
            "hi": [ "शूटिंग", "कुश्ती", "भाला फेंक", "बॉक्सिंग" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Neeraj Chopra is an Indian track and field athlete who competes in the javelin throw and is an Olympic gold medalist.",
            "hi": "नीरज चोपड़ा एक भारतीय ट्रैक और फील्ड एथलीट हैं जो भाला फेंक में प्रतिस्पर्धा करते हैं और एक ओलंपिक स्वर्ण पदक विजेता हैं।"
        }
    },
    {
        "question": {
            "en": "The 'Green Revolution' in India was primarily focused on increasing the production of:",
            "hi": "भारत में 'हरित क्रांति' मुख्य रूप से किसके उत्पादन को बढ़ाने पर केंद्रित थी:"
        },
        "options": {
            "en": [ "Milk", "Pulses", "Wheat and Rice", "Oilseeds" ],
            "hi": [ "दूध", "दालें", "गेहूं और चावल", "तिलहन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Green Revolution led to a significant increase in the production of food grains, particularly wheat and rice.",
            "hi": "हरित क्रांति ने खाद्यान्नों, विशेष रूप से गेहूं और चावल के उत्पादन में उल्लेखनीय वृद्धि की।"
        }
    },
    {
        "question": {
            "en": "What is the name of the oldest mountain range in India?",
            "hi": "भारत की सबसे पुरानी पर्वत श्रृंखला का क्या नाम है?"
        },
        "options": {
            "en": [ "Himalayas", "Vindhyas", "Aravalli Range", "Satpuras" ],
            "hi": [ "हिमालय", "विंध्य", "अरावली श्रृंखला", "सतपुड़ा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Aravalli Range in Northwestern India is one of the oldest fold mountain ranges in the world.",
            "hi": "उत्तर पश्चिमी भारत में अरावली श्रृंखला दुनिया की सबसे पुरानी वलित पर्वत श्रृंखलाओं में से एक है।"
        }
    },
    {
        "question": {
            "en": "The famous 'Dilwara Temples' are located in which state?",
            "hi": "प्रसिद्ध 'दिलवाड़ा मंदिर' किस राज्य में स्थित हैं?"
        },
        "options": {
            "en": [ "Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra" ],
            "hi": [ "गुजरात", "राजस्थान", "मध्य प्रदेश", "महाराष्ट्र" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Dilwara Temples are a group of Svetambara Jain temples located near the hill station of Mount Abu in Rajasthan.",
            "hi": "दिलवाड़ा मंदिर राजस्थान के हिल स्टेशन माउंट आबू के पास स्थित श्वेतांबर जैन मंदिरों का एक समूह है।"
        }
    },
    {
        "question": {
            "en": "Which river is known as the 'Sorrow of Bengal'?",
            "hi": "किस नदी को 'बंगाल का शोक' कहा जाता है?"
        },
        "options": {
            "en": [ "Ganga", "Hooghly", "Damodar", "Brahmaputra" ],
            "hi": [ "गंगा", "हुगली", "दामोदर", "ब्रह्मपुत्र" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Damodar River was known as the 'Sorrow of Bengal' because of its devastating floods in the plains of West Bengal.",
            "hi": "दामोदर नदी को पश्चिम बंगाल के मैदानों में विनाशकारी बाढ़ के कारण 'बंगाल का शोक' कहा जाता था।"
        }
    },
    {
        "question": {
            "en": "'Kuchipudi' is a classical dance form that originated in which state?",
            "hi": "'कुचिपुड़ी' एक शास्त्रीय नृत्य शैली है जिसकी उत्पत्ति किस राज्य में हुई?"
        },
        "options": {
            "en": [ "Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka" ],
            "hi": [ "तमिलनाडु", "केरल", "आंध्र प्रदेश", "कर्नाटक" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Kuchipudi is one of the eleven major Indian classical dances, originating from a village named Kuchipudi in Andhra Pradesh.",
            "hi": "कुचिपुड़ी ग्यारह प्रमुख भारतीय शास्त्रीय नृत्यों में से एक है, जिसकी उत्पत्ति आंध्र प्रदेश के कुचिपुड़ी नामक गाँव से हुई है।"
        }
    },
    {
        "question": {
            "en": "The first Five-Year Plan in India was launched in which year?",
            "hi": "भारत में पहली पंचवर्षीय योजना किस वर्ष शुरू की गई थी?"
        },
        "options": {
            "en": [ "1947", "1950", "1951", "1956" ],
            "hi": [ "1947", "1950", "1951", "1956" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The first Five-Year Plan was launched in 1951, focusing primarily on the development of the primary sector.",
            "hi": "पहली पंचवर्षीय योजना 1951 में शुरू की गई थी, जो मुख्य रूप से प्राथमिक क्षेत्र के विकास पर केंद्रित थी।"
        }
    },
    {
        "question": {
            "en": "The 'Gobi Desert' is located primarily in:",
            "hi": "'गोबी मरुस्थल' मुख्य रूप से कहाँ स्थित है:"
        },
        "options": {
            "en": [ "India and Pakistan", "China and Mongolia", "Russia and Kazakhstan", "Iran and Iraq" ],
            "hi": [ "भारत और पाकिस्तान", "चीन और मंगोलिया", "रूस और कजाकिस्तान", "ईरान और इराक" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Gobi Desert is a large desert region in Northern China and Southern Mongolia.",
            "hi": "गोबी मरुस्थल उत्तरी चीन और दक्षिणी मंगोलिया में एक बड़ा रेगिस्तानी क्षेत्र है।"
        }
    },
    {
        "question": {
            "en": "The 'Tattvabodhini Sabha' was founded by:",
            "hi": "'तत्त्वबोधिनी सभा' की स्थापना किसने की थी:"
        },
        "options": {
            "en": [ "Raja Ram Mohan Roy", "Keshab Chandra Sen", "Debendranath Tagore", "Swami Vivekananda" ],
            "hi": [ "राजा राम मोहन राय", "केशब चंद्र सेन", "देवेंद्रनाथ टैगोर", "स्वामी विवेकानंद" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Tattvabodhini Sabha was founded by Debendranath Tagore in 1839 as a splinter group of the Brahmo Samaj.",
            "hi": "तत्त्वबोधिनी सभा की स्थापना 1839 में देवेंद्रनाथ टैगोर ने ब्रह्म समाज के एक अलग समूह के रूप में की थी।"
        }
    },
    {
        "question": {
            "en": "The currency of Japan is:",
            "hi": "जापान की मुद्रा है:"
        },
        "options": {
            "en": [ "Yuan", "Won", "Yen", "Ringgit" ],
            "hi": [ "युआन", "वोन", "येन", "रिंगगिट" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Japanese Yen is the official currency of Japan.",
            "hi": "जापानी येन जापान की आधिकारिक मुद्रा है।"
        }
    },
    {
        "question": {
            "en": "Which of the following is the largest gland in the human body?",
            "hi": "निम्नलिखित में से कौन मानव शरीर में सबसे बड़ी ग्रंथि है?"
        },
        "options": {
            "en": [ "Pancreas", "Liver", "Thyroid", "Pituitary" ],
            "hi": [ "अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The liver is the largest internal organ and the largest gland in the human body.",
            "hi": "यकृत मानव शरीर में सबसे बड़ा आंतरिक अंग और सबसे बड़ी ग्रंथि है।"
        }
    },
    {
        "question": {
            "en": "The 'Kyoto Protocol' is an international treaty related to:",
            "hi": "'क्योटो प्रोटोकॉल' किससे संबंधित एक अंतर्राष्ट्रीय संधि है:"
        },
        "options": {
            "en": [ "Nuclear disarmament", "Protection of the ozone layer", "Climate change and greenhouse gas emissions", "Conservation of biodiversity" ],
            "hi": [ "परमाणु निरस्त्रीकरण", "ओजोन परत का संरक्षण", "जलवायु परिवर्तन और ग्रीनहाउस गैस उत्सर्जन", "जैव विविधता का संरक्षण" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Kyoto Protocol commits state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring.",
            "hi": "क्योटो प्रोटोकॉल राज्य दलों को ग्रीनहाउस गैस उत्सर्जन को कम करने के लिए प्रतिबद्ध करता है, इस वैज्ञानिक सहमति के आधार पर कि ग्लोबल वार्मिंग हो रही है।"
        }
    },
    {
        "question": {
            "en": "The instrument used to measure atmospheric pressure is the:",
            "hi": "वायुमंडलीय दबाव को मापने के लिए उपयोग किया जाने वाला उपकरण है:"
        },
        "options": {
            "en": [ "Altimeter", "Hydrometer", "Barometer", "Manometer" ],
            "hi": [ "अल्टीमीटर", "हाइड्रोमीटर", "बैरोमीटर", "मैनोमीटर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "A barometer is a scientific instrument that is used to measure air pressure in a certain environment.",
            "hi": "बैरोमीटर एक वैज्ञानिक उपकरण है जिसका उपयोग किसी निश्चित वातावरण में वायु दाब को मापने के लिए किया जाता है।"
        }
    },
    {
        "question": {
            "en": "The 'Sanchi Stupa' was built by which emperor?",
            "hi": "'सांची स्तूप' किस सम्राट द्वारा बनाया गया था?"
        },
        "options": {
            "en": [ "Chandragupta Maurya", "Ashoka", "Kanishka", "Harshavardhana" ],
            "hi": [ "चंद्रगुप्त मौर्य", "अशोक", "कनिष्क", "हर्षवर्धन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Great Stupa at Sanchi was originally commissioned by the Mauryan emperor Ashoka in the 3rd century BCE.",
            "hi": "सांची में महान स्तूप का निर्माण मूल रूप से मौर्य सम्राट अशोक द्वारा तीसरी शताब्दी ईसा पूर्व में किया गया था।"
        }
    },
    {
        "question": {
            "en": "Who was the first woman President of the Indian National Congress?",
            "hi": "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?"
        },
        "options": {
            "en": [ "Sarojini Naidu", "Annie Besant", "Nellie Sengupta", "Indira Gandhi" ],
            "hi": [ "सरोजिनी नायडू", "एनी बेसेंट", "नेल्ली सेनगुप्ता", "इंदिरा गांधी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Annie Besant was the first woman President of the Indian National Congress, presiding over the 1917 Calcutta session.",
            "hi": "एनी बेसेंट भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष थीं, जिन्होंने 1917 के कलकत्ता अधिवेशन की अध्यक्षता की थी।"
        }
    },
    {
        "question": {
            "en": "The 'Valley of Flowers' National Park is located in:",
            "hi": "'फूलों की घाटी' राष्ट्रीय उद्यान कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Sikkim" ],
            "hi": [ "हिमाचल प्रदेश", "उत्तराखंड", "जम्मू और कश्मीर", "सिक्किम" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Valley of Flowers National Park is an Indian national park, located in North Chamoli, in the state of Uttarakhand.",
            "hi": "फूलों की घाटी राष्ट्रीय उद्यान एक भारतीय राष्ट्रीय उद्यान है, जो उत्तराखंड राज्य के उत्तरी चमोली में स्थित है।"
        }
    },
    {
        "question": {
            "en": "The \"Make in India\" initiative was launched in which year?",
            "hi": "\"मेक इन इंडिया\" पहल किस वर्ष शुरू की गई थी?"
        },
        "options": {
            "en": [ "2012", "2014", "2016", "2018" ],
            "hi": [ "2012", "2014", "2016", "2018" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The 'Make in India' initiative was launched by the Government of India in September 2014 to encourage companies to manufacture their products in India.",
            "hi": "'मेक इन इंडिया' पहल भारत सरकार द्वारा सितंबर 2014 में कंपनियों को भारत में अपने उत्पादों का निर्माण करने के लिए प्रोत्साहित करने के लिए शुरू की गई थी।"
        }
    },
    {
        "question": {
            "en": "Which country is known as the 'Land of the Rising Sun'?",
            "hi": "किस देश को 'उगते सूरज की भूमि' कहा जाता है?"
        },
        "options": {
            "en": [ "China", "South Korea", "Japan", "Thailand" ],
            "hi": [ "चीन", "दक्षिण कोरिया", "जापान", "थाईलैंड" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Japan is often called the 'Land of the Rising Sun' because its name in Japanese translates to 'sun-origin'.",
            "hi": "जापान को अक्सर 'उगते सूरज की भूमि' कहा जाता है क्योंकि जापानी में इसके नाम का अनुवाद 'सूर्य-उत्पत्ति' होता है।"
        }
    },
    {
        "question": {
            "en": "The Ajanta and Ellora caves are located in which state?",
            "hi": "अजंता और एलोरा की गुफाएँ किस राज्य में स्थित हैं?"
        },
        "options": {
            "en": [ "Karnataka", "Madhya Pradesh", "Maharashtra", "Gujarat" ],
            "hi": [ "कर्नाटक", "मध्य प्रदेश", "महाराष्ट्र", "गुजरात" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ajanta and Ellora caves are UNESCO World Heritage sites located in the Aurangabad district of Maharashtra.",
            "hi": "अजंता और एलोरा की गुफाएँ महाराष्ट्र के औरंगाबाद जिले में स्थित यूनेस्को की विश्व धरोहर स्थल हैं।"
        }
    },
    {
        "question": {
            "en": "What is the name of the operation launched by India to evacuate its citizens from Ukraine in 2022?",
            "hi": "2022 में यूक्रेन से अपने नागरिकों को निकालने के लिए भारत द्वारा शुरू किए गए ऑपरेशन का क्या नाम है?"
        },
        "options": {
            "en": [ "Operation Ganga", "Operation Devi Shakti", "Operation Vande Bharat", "Operation Samudra Setu" ],
            "hi": [ "ऑपरेशन गंगा", "ऑपरेशन देवी शक्ति", "ऑपरेशन वंदे भारत", "ऑपरेशन समुद्र सेतु" ]
        },
        "answer": 0,
        "explanation": {
            "en": "Operation Ganga was an evacuation mission by the Indian government to rescue its citizens stranded in neighboring countries of Ukraine.",
            "hi": "ऑपरेशन गंगा यूक्रेन के पड़ोसी देशों में फंसे अपने नागरिकों को बचाने के लिए भारत सरकार का एक निकासी मिशन था।"
        }
    },
    {
        "question": {
            "en": "The Durand Cup is associated with which sport?",
            "hi": "डूरंड कप किस खेल से संबंधित है?"
        },
        "options": {
            "en": [ "Cricket", "Hockey", "Football", "Tennis" ],
            "hi": [ "क्रिकेट", "हॉकी", "फ़ुटबॉल", "टेनिस" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Durand Cup is the oldest football tournament in Asia, held annually in India.",
            "hi": "डूरंड कप एशिया का सबसे पुराना फुटबॉल टूर्नामेंट है, जो भारत में प्रतिवर्ष आयोजित किया जाता है।"
        }
    },
    {
        "question": {
            "en": "Who was the first Indian to go into space?",
            "hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?"
        },
        "options": {
            "en": [ "Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Ravish Malhotra" ],
            "hi": [ "कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "रविश मल्होत्रा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Rakesh Sharma, a former Indian Air Force pilot, flew aboard Soyuz T-11 in 1984, becoming the first Indian citizen to travel to space.",
            "hi": "राकेश शर्मा, एक पूर्व भारतीय वायु सेना के पायलट, 1984 में सोयुज टी-11 पर सवार हुए, अंतरिक्ष में यात्रा करने वाले पहले भारतीय नागरिक बने।"
        }
    },
    {
        "question": {
            "en": "The 'Ghadar Party' was founded in which city?",
            "hi": "'गदर पार्टी' की स्थापना किस शहर में हुई थी?"
        },
        "options": {
            "en": [ "London", "Berlin", "San Francisco", "Tokyo" ],
            "hi": [ "लंदन", "बर्लिन", "सैन फ्रांसिस्को", "टोक्यो" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ghadar Party was an international political movement founded by expatriate Indians in San Francisco, USA, in 1913.",
            "hi": "गदर पार्टी 1913 में संयुक्त राज्य अमेरिका के सैन फ्रांसिस्को में प्रवासी भारतीयों द्वारा स्थापित एक अंतर्राष्ट्रीय राजनीतिक आंदोलन था।"
        }
    },
    {
        "question": {
            "en": "The 'Beti Bachao, Beti Padhao' scheme was launched from which state?",
            "hi": "'बेटी बचाओ, बेटी पढ़ाओ' योजना किस राज्य से शुरू की गई थी?"
        },
        "options": {
            "en": [ "Uttar Pradesh", "Rajasthan", "Haryana", "Bihar" ],
            "hi": [ "उत्तर प्रदेश", "राजस्थान", "हरियाणा", "बिहार" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The scheme was launched by the Prime Minister on 22 January 2015 at Panipat, Haryana.",
            "hi": "यह योजना प्रधानमंत्री द्वारा 22 जनवरी 2015 को हरियाणा के पानीपत में शुरू की गई थी।"
        }
    },
    {
        "question": {
            "en": "Which is the largest river basin in India?",
            "hi": "भारत में सबसे बड़ा नदी बेसिन कौन सा है?"
        },
        "options": {
            "en": [ "Godavari Basin", "Narmada Basin", "Ganga Basin", "Krishna Basin" ],
            "hi": [ "गोदावरी बेसिन", "नर्मदा बेसिन", "गंगा बेसिन", "कृष्णा बेसिन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ganga basin is the largest river basin in India, covering about a quarter of the country's total area.",
            "hi": "गंगा बेसिन भारत का सबसे बड़ा नदी बेसिन है, जो देश के कुल क्षेत्रफल का लगभग एक चौथाई हिस्सा कवर करता है।"
        }
    },
    {
        "question": {
            "en": "The 'Vijay Stambha' (Tower of Victory) is located in which fort?",
            "hi": "'विजय स्तंभ' (विजय का टॉवर) किस किले में स्थित है?"
        },
        "options": {
            "en": [ "Mehrangarh Fort", "Chittorgarh Fort", "Amer Fort", "Gwalior Fort" ],
            "hi": [ "मेहरानगढ़ किला", "चित्तौड़गढ़ किला", "आमेर किला", "ग्वालियर किला" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Vijay Stambha is an imposing victory monument located within Chittor Fort in Chittorgarh, Rajasthan, built by Rana Kumbha to commemorate his victory over Mahmud Khilji.",
            "hi": "विजय स्तंभ चित्तौड़गढ़, राजस्थान में चित्तौड़ किले के भीतर स्थित एक भव्य विजय स्मारक है, जिसे राणा कुंभा ने महमूद खिलजी पर अपनी जीत के उपलक्ष्य में बनवाया था।"
        }
    },
    {
        "question": {
            "en": "The 'Simon Commission' was boycotted by Indians because:",
            "hi": "भारतीयों द्वारा 'साइमन कमीशन' का बहिष्कार क्यों किया गया:"
        },
        "options": {
            "en": [ "It was appointed before the stipulated time", "It did not include any Indian member", "It proposed the partition of India", "It was against granting any reforms" ],
            "hi": [ "इसे निर्धारित समय से पहले नियुक्त किया गया था", "इसमें कोई भारतीय सदस्य शामिल नहीं था", "इसने भारत के विभाजन का प्रस्ताव रखा", "यह किसी भी सुधार के खिलाफ था" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Simon Commission was boycotted because it was an all-British commission with no Indian representation, which was seen as an insult to India's self-respect.",
            "hi": "साइमन कमीशन का बहिष्कार किया गया क्योंकि यह एक सर्व-ब्रिटिश आयोग था जिसमें कोई भारतीय प्रतिनिधित्व नहीं था, जिसे भारत के स्वाभिमान का अपमान माना गया।"
        }
    },
    {
        "question": {
            "en": "The ancient site of 'Kalibangan', known for its Indus Valley Civilization remains, is in which state?",
            "hi": "सिंधु घाटी सभ्यता के अवशेषों के लिए जाना जाने वाला प्राचीन स्थल 'कालीबंगन' किस राज्य में है?"
        },
        "options": {
            "en": [ "Gujarat", "Punjab", "Haryana", "Rajasthan" ],
            "hi": [ "गुजरात", "पंजाब", "हरियाणा", "राजस्थान" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Kalibangan is an archaeological site in the Hanumangarh district of Rajasthan, where remains of both Pre-Harappan and Harappan settlements have been found.",
            "hi": "कालीबंगन राजस्थान के हनुमानगढ़ जिले में एक पुरातात्विक स्थल है, जहाँ पूर्व-हड़प्पा और हड़प्पा दोनों बस्तियों के अवशेष पाए गए हैं।"
        }
    },
    {
        "question": {
            "en": "Who was the first Tirthankara of Jainism?",
            "hi": "जैन धर्म के पहले तीर्थंकर कौन थे?"
        },
        "options": {
            "en": [ "Mahavira", "Parshvanatha", "Rishabhanatha (Adinatha)", "Ajitanatha" ],
            "hi": [ "महावीर", "पार्श्वनाथ", "ऋषभनाथ (आदिनाथ)", "अजितनाथ" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Rishabhanatha, also known as Adinatha, is considered the first of the 24 Tirthankaras in the Jain tradition.",
            "hi": "ऋषभनाथ, जिन्हें आदिनाथ के नाम से भी जाना जाता है, को जैन परंपरा में 24 तीर्थंकरों में से पहला माना जाता है।"
        }
    },
    {
        "question": {
            "en": "Which city is known as the 'Manchester of India'?",
            "hi": "किस शहर को 'भारत का मैनचेस्टर' कहा जाता है?"
        },
        "options": {
            "en": [ "Mumbai", "Surat", "Ahmedabad", "Kanpur" ],
            "hi": [ "मुंबई", "सूरत", "अहमदाबाद", "कानपुर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Ahmedabad was historically known as the 'Manchester of India' due to its flourishing cotton textile industry, similar to Manchester in England.",
            "hi": "अहमदाबाद को ऐतिहासिक रूप से 'भारत का मैनचेस्टर' कहा जाता था, क्योंकि इंग्लैंड के मैनचेस्टर के समान इसके फलते-फूलते सूती कपड़ा उद्योग के कारण।"
        }
    },
    {
        "question": {
            "en": "The 'Kanchenjunga' peak, the third highest in the world, is located in which state?",
            "hi": "दुनिया की तीसरी सबसे ऊंची चोटी 'कंचनजंगा' किस राज्य में स्थित है?"
        },
        "options": {
            "en": [ "Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh" ],
            "hi": [ "हिमाचल प्रदेश", "उत्तराखंड", "सिक्किम", "अरुणाचल प्रदेश" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Kanchenjunga lies on the border between Sikkim state, northeastern India, and eastern Nepal.",
            "hi": "कंचनजंगा सिक्किम राज्य, पूर्वोत्तर भारत और पूर्वी नेपाल के बीच की सीमा पर स्थित है।"
        }
    },
    {
        "question": {
            "en": "Which river originates from the Amarkantak Plateau?",
            "hi": "अमरकंटक पठार से कौन सी नदी निकलती है?"
        },
        "options": {
            "en": [ "Mahanadi", "Godavari", "Narmada", "Krishna" ],
            "hi": [ "महानदी", "गोदावरी", "नर्मदा", "कृष्णा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Narmada River, along with the Son and Johila rivers, originates from the Amarkantak Plateau in Madhya Pradesh.",
            "hi": "नर्मदा नदी, सोन और जोहिला नदियों के साथ, मध्य प्रदेश के अमरकंटक पठार से निकलती है।"
        }
    },
    {
        "question": {
            "en": "The 'Sariska Tiger Reserve' is located in which state?",
            "hi": "'सरिस्का टाइगर रिजर्व' किस राज्य में स्थित है?"
        },
        "options": {
            "en": [ "Madhya Pradesh", "Rajasthan", "Uttarakhand", "Maharashtra" ],
            "hi": [ "मध्य प्रदेश", "राजस्थान", "उत्तराखंड", "महाराष्ट्र" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Sariska Tiger Reserve is a national park and tiger reserve located in the Alwar district of the state of Rajasthan, India.",
            "hi": "सरिस्का टाइगर रिजर्व भारत के राजस्थान राज्य के अलवर जिले में स्थित एक राष्ट्रीय उद्यान और बाघ अभयारण्य है।"
        }
    },
    {
        "question": {
            "en": "Which of the following cities is NOT located on the banks of the river Ganga?",
            "hi": "निम्नलिखित में से कौन सा शहर गंगा नदी के तट पर स्थित नहीं है?"
        },
        "options": {
            "en": [ "Kanpur", "Patna", "Varanasi", "Lucknow" ],
            "hi": [ "कानपुर", "पटना", "वाराणसी", "लखनऊ" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Lucknow is situated on the banks of the Gomti River, while Kanpur, Patna, and Varanasi are major cities located on the Ganga.",
            "hi": "लखनऊ गोमती नदी के तट पर स्थित है, जबकि कानपुर, पटना और वाराणसी गंगा पर स्थित प्रमुख शहर हैं।"
        }
    },
    {
        "question": {
            "en": "The 'Dhuandhar Falls' are formed by which river?",
            "hi": "'धुआंधार जलप्रपात' किस नदी द्वारा बनता है?"
        },
        "options": {
            "en": [ "Tapti", "Chambal", "Narmada", "Sabarmati" ],
            "hi": [ "ताप्ती", "चंबल", "नर्मदा", "साबरमती" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Dhuandhar Falls are located on the Narmada River in Bhedaghat, Jabalpur district, Madhya Pradesh.",
            "hi": "धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर जिले के भेड़ाघाट में नर्मदा नदी पर स्थित है।"
        }
    },
    {
        "question": {
            "en": "What is the name of the strait that separates the Andaman and Nicobar Islands?",
            "hi": "अंडमान और निकोबार द्वीप समूह को अलग करने वाली जलडमरूमध्य का क्या नाम है?"
        },
        "options": {
            "en": [ "Palk Strait", "Duncan Passage", "Ten Degree Channel", "Eight Degree Channel" ],
            "hi": [ "पाक जलडमरूमध्य", "डंकन पैसेज", "टेन डिग्री चैनल", "आठ डिग्री चैनल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ten Degree Channel separates the Andaman Islands and the Nicobar Islands from each other in the Bay of Bengal.",
            "hi": "टेन डिग्री चैनल बंगाल की खाड़ी में अंडमान द्वीप समूह और निकोबार द्वीप समूह को एक दूसरे से अलग करता है।"
        }
    },
    {
        "question": {
            "en": "Which state in India has the highest forest cover as a percentage of its total geographical area?",
            "hi": "भारत के किस राज्य में उसके कुल भौगोलिक क्षेत्र के प्रतिशत के रूप में सबसे अधिक वन आवरण है?"
        },
        "options": {
            "en": [ "Arunachal Pradesh", "Mizoram", "Madhya Pradesh", "Nagaland" ],
            "hi": [ "अरुणाचल प्रदेश", "मिजोरम", "मध्य प्रदेश", "नागालैंड" ]
        },
        "answer": 1,
        "explanation": {
            "en": "According to the India State of Forest Report (ISFR) 2021, Mizoram has the highest forest cover as a percentage of its area (over 84%).",
            "hi": "इंडिया स्टेट ऑफ फॉरेस्ट रिपोर्ट (ISFR) 2021 के अनुसार, मिजोरम में इसके क्षेत्र के प्रतिशत के रूप में सबसे अधिक वन आवरण है (84% से अधिक)।"
        }
    },
    {
        "question": {
            "en": "The 'Nathula Pass' connects India with which neighboring country?",
            "hi": "'नाथूला दर्रा' भारत को किस पड़ोसी देश से जोड़ता है?"
        },
        "options": {
            "en": [ "Nepal", "Bhutan", "Myanmar", "China (Tibet Autonomous Region)" ],
            "hi": [ "नेपाल", "भूटान", "म्यांमार", "चीन (तिब्बत स्वायत्त क्षेत्र)" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Nathu La is a mountain pass in the Dongkya Range of the Himalayas between Sikkim in India and the Tibet Autonomous Region of China.",
            "hi": "नाथू ला भारत में सिक्किम और चीन के तिब्बत स्वायत्त क्षेत्र के बीच हिमालय की डोंगक्या रेंज में एक पहाड़ी दर्रा है।"
        }
    },
    {
        "question": {
            "en": "Which is the southernmost point of the Indian mainland?",
            "hi": "भारतीय मुख्य भूमि का सबसे दक्षिणी बिंदु कौन सा है?"
        },
        "options": {
            "en": [ "Indira Point", "Kanyakumari (Cape Comorin)", "Rameswaram", "Point Calimere" ],
            "hi": [ "इंदिरा पॉइंट", "कन्याकुमारी (केप कोमोरिन)", "रामेश्वरम", "पॉइंट कैलिमेरे" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Kanyakumari is the southernmost tip of the Indian peninsula, while Indira Point in the Nicobar Islands is the southernmost point of Indian territory overall.",
            "hi": "कन्याकुमारी भारतीय प्रायद्वीप का सबसे दक्षिणी सिरा है, जबकि निकोबार द्वीप समूह में इंदिरा पॉइंट समग्र रूप से भारतीय क्षेत्र का सबसे दक्षिणी बिंदु है।"
        }
    },
    {
        "question": {
            "en": "What is the name of India's first nuclear-powered ballistic missile submarine?",
            "hi": "भारत की पहली परमाणु-संचालित बैलिस्टिक मिसाइल पनडुब्बी का क्या नाम है?"
        },
        "options": {
            "en": [ "INS Chakra", "INS Arihant", "INS Vikrant", "INS Kalvari" ],
            "hi": [ "आईएनएस चक्र", "आईएनएस अरिहंत", "आईएनएस विक्रांत", "आईएनएस कलवरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "INS Arihant is the lead ship of India's Arihant class of nuclear-powered ballistic missile submarines.",
            "hi": "आईएनएस अरिहंत भारत की अरिहंत श्रेणी की परमाणु-संचालित बैलिस्टिक मिसाइल पनडुब्बियों का प्रमुख जहाज है।"
        }
    },
    {
        "question": {
            "en": "The military exercise 'Garuda Shakti' is conducted between India and which country?",
            "hi": "'गरुड़ शक्ति' सैन्य अभ्यास भारत और किस देश के बीच आयोजित किया जाता है?"
        },
        "options": {
            "en": [ "France", "Sri Lanka", "Indonesia", "Malaysia" ],
            "hi": [ "फ्रांस", "श्रीलंका", "इंडोनेशिया", "मलेशिया" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Garuda Shakti is a joint military exercise between the special forces of the Indian and Indonesian armies.",
            "hi": "गरुड़ शक्ति भारतीय और इंडोनेशियाई सेनाओं के विशेष बलों के बीच एक संयुक्त सैन्य अभ्यास है।"
        }
    },
    {
        "question": {
            "en": "The 'National War Memorial' of India is located in which city?",
            "hi": "भारत का 'राष्ट्रीय युद्ध स्मारक' किस शहर में स्थित है?"
        },
        "options": {
            "en": [ "Mumbai", "Kolkata", "Chennai", "New Delhi" ],
            "hi": [ "मुंबई", "कोलकाता", "चेन्नई", "नई दिल्ली" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The National War Memorial is located near India Gate in New Delhi and honors the soldiers of the Indian Armed Forces who fought in armed conflicts.",
            "hi": "राष्ट्रीय युद्ध स्मारक नई दिल्ली में इंडिया गेट के पास स्थित है और सशस्त्र संघर्षों में लड़ने वाले भारतीय सशस्त्र बलों के सैनिकों का सम्मान करता है।"
        }
    },
    {
        "question": {
            "en": "The term 'Pinaka' in the Indian defence context refers to a:",
            "hi": "भारतीय रक्षा संदर्भ में 'पिनाका' शब्द का अर्थ है:"
        },
        "options": {
            "en": [ "Fighter jet", "Submarine", "Battle Tank", "Multi-barrel rocket launcher" ],
            "hi": [ "लड़ाकू विमान", "पनडुब्बी", "युद्धक टैंक", "मल्टी-बैरल रॉकेट लॉन्चर" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Pinaka is a multiple rocket launcher produced in India and developed by the Defence Research and Development Organisation (DRDO) for the Indian Army.",
            "hi": "पिनाका भारत में उत्पादित एक मल्टीपल रॉकेट लॉन्चर है और इसे भारतीय सेना के लिए रक्षा अनुसंधान और विकास संगठन (DRDO) द्वारा विकसित किया गया है।"
        }
    },
    {
        "question": {
            "en": "The 'Officers Training Academy' (OTA) for Short Service Commission officers is located in:",
            "hi": "लघु सेवा आयोग के अधिकारियों के लिए 'अधिकारी प्रशिक्षण अकादमी' (OTA) कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Dehradun", "Gaya", "Pune", "Chennai" ],
            "hi": [ "देहरादून", "गया", "पुणे", "चेन्नई" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The OTA in Chennai is a premier training establishment of the Indian Army that trains officers for the Short Service Commission.",
            "hi": "चेन्नई में ओटीए भारतीय सेना का एक प्रमुख प्रशिक्षण प्रतिष्ठान है जो लघु सेवा आयोग के लिए अधिकारियों को प्रशिक्षित करता है।"
        }
    },
    {
        "question": {
            "en": "The 'Cheetah' and 'Chetak' are types of what used by the Indian Armed Forces?",
            "hi": "भारतीय सशस्त्र बलों द्वारा उपयोग किए जाने वाले 'चीता' और 'चेतक' किस प्रकार के हैं?"
        },
        "options": {
            "en": [ "Artillery Guns", "Helicopters", "Armoured Personnel Carriers", "Sniper Rifles" ],
            "hi": [ "तोपखाने की बंदूकें", "हेलीकॉप्टर", "बख्तरबंद कार्मिक वाहक", "स्नाइपर राइफल्स" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The HAL Cheetah and HAL Chetak are utility helicopters manufactured by Hindustan Aeronautics Limited (HAL).",
            "hi": "एचएएल चीता और एचएएल चेतक हिंदुस्तान एयरोनॉटिक्स लिमिटेड (एचएएल) द्वारा निर्मित उपयोगिता हेलीकॉप्टर हैं।"
        }
    },
    {
        "question": {
            "en": "The 'SLINEX' is a bilateral maritime exercise between India and:",
            "hi": "'SLINEX' भारत और किसके बीच एक द्विपक्षीय समुद्री अभ्यास है:"
        },
        "options": {
            "en": [ "Singapore", "Sri Lanka", "Seychelles", "South Africa" ],
            "hi": [ "सिंगापुर", "श्रीलंका", "सेशेल्स", "दक्षिण अफ्रीका" ]
        },
        "answer": 1,
        "explanation": {
            "en": "SLINEX stands for Sri Lanka-India Naval Exercise.",
            "hi": "SLINEX का मतलब श्रीलंका-भारत नौसेना अभ्यास है।"
        }
    },
    {
        "question": {
            "en": "Who was the first woman defence minister of India (full time)?",
            "hi": "भारत की पहली महिला रक्षा मंत्री (पूर्णकालिक) कौन थीं?"
        },
        "options": {
            "en": [ "Sushma Swaraj", "Pratibha Patil", "Nirmala Sitharaman", "Indira Gandhi" ],
            "hi": [ "सुषमा स्वराज", "प्रतिभा पाटिल", "निर्मला सीतारमण", "इंदिरा गांधी" ]
        },
        "answer": 2,
        "explanation": {
            "en": "While Indira Gandhi held the portfolio as Prime Minister, Nirmala Sitharaman was the first full-time woman Defence Minister of India.",
            "hi": "जबकि इंदिरा गांधी ने प्रधान मंत्री के रूप में पोर्टफोलियो संभाला था, निर्मला सीतारमण भारत की पहली पूर्णकालिक महिला रक्षा मंत्री थीं।"
        }
    },
    {
        "question": {
            "en": "The 'Gagan Shakti' is a major exercise conducted by the:",
            "hi": "'गगन शक्ति' किसके द्वारा आयोजित एक प्रमुख अभ्यास है:"
        },
        "options": {
            "en": [ "Indian Army", "Indian Navy", "Indian Air Force", "Indian Coast Guard" ],
            "hi": [ "भारतीय सेना", "भारतीय नौसेना", "भारतीय वायु सेना", "भारतीय तटरक्षक" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Gagan Shakti is one of the largest exercises conducted by the Indian Air Force to showcase its air dominance over the entire extended area of the Indian Ocean Region.",
            "hi": "गगन शक्ति भारतीय वायु सेना द्वारा हिंद महासागर क्षेत्र के पूरे विस्तारित क्षेत्र पर अपनी हवाई प्रभुत्व दिखाने के लिए आयोजित सबसे बड़े अभ्यासों में से एक है।"
        }
    },
    {
        "question": {
            "en": "The 'INS Baaz' naval air station is located in:",
            "hi": "'आईएनएस बाज़' नौसैनिक हवाई अड्डा कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Lakshadweep Islands", "Goa", "Andaman & Nicobar Islands", "Visakhapatnam" ],
            "hi": [ "लक्षद्वीप द्वीप समूह", "गोवा", "अंडमान और निकोबार द्वीप समूह", "विशाखापत्तनम" ]
        },
        "answer": 2,
        "explanation": {
            "en": "INS Baaz is an Indian naval air station located at Campbell Bay on Great Nicobar island, serving as a strategic outpost.",
            "hi": "आईएनएस बाज़ ग्रेट निकोबार द्वीप पर कैंपबेल खाड़ी में स्थित एक भारतीय नौसैनिक हवाई अड्डा है, जो एक रणनीतिक चौकी के रूप में कार्य करता है।"
        }
    },
    {
        "question": {
            "en": "Who was the Chief Guest at the Republic Day Parade in New Delhi in 2024?",
            "hi": "2024 में नई दिल्ली में गणतंत्र दिवस परेड में मुख्य अतिथि कौन थे?"
        },
        "options": {
            "en": [ "Joe Biden (USA President)", "Rishi Sunak (UK Prime Minister)", "Emmanuel Macron (French President)", "Abdel Fattah el-Sisi (Egyptian President)" ],
            "hi": [ "जो बिडेन (यूएसए के राष्ट्रपति)", "ऋषि सुनक (यूके के प्रधानमंत्री)", "इमैनुएल मैक्रों (फ्रांसीसी राष्ट्रपति)", "अब्देल फत्ताह अल-सिसी (मिस्र के राष्ट्रपति)" ]
        },
        "answer": 2,
        "explanation": {
            "en": "French President Emmanuel Macron was the chief guest for India's 75th Republic Day celebrations in 2024.",
            "hi": "फ्रांसीसी राष्ट्रपति इमैनुएल मैक्रों 2024 में भारत के 75वें गणतंत्र दिवस समारोह के मुख्य अतिथि थे।"
        }
    }
];

export const gkTest4Questions: Question[] = [
    {
        "question": {
            "en": "The \"Pradhan Mantri Surya Ghar: Muft Bijli Yojana\" scheme is aimed at:",
            "hi": "\"प्रधानमंत्री सूर्य घर: मुफ्त बिजली योजना\" का उद्देश्य क्या है:"
        },
        "options": {
            "en": [ "Providing free electricity to farmers", "Promoting rooftop solar installations", "Electrifying rural villages", "Replacing old power lines" ],
            "hi": [ "किसानों को मुफ्त बिजली प्रदान करना", "छत पर सौर प्रतिष्ठानों को बढ़ावा देना", "ग्रामीण गांवों का विद्युतीकरण करना", "पुरानी बिजली लाइनों को बदलना" ]
        },
        "answer": 1,
        "explanation": {
            "en": "This scheme aims to provide free electricity by promoting solar power installations on the roofs of houses.",
            "hi": "इस योजना का उद्देश्य घरों की छतों पर सौर ऊर्जा प्रतिष्ठानों को बढ़ावा देकर मुफ्त बिजली प्रदान करना है।"
        }
    },
    {
        "question": {
            "en": "Which film won the 'Best Feature Film' award at the 69th National Film Awards?",
            "hi": "69वें राष्ट्रीय फिल्म पुरस्कार में किस फिल्म ने 'सर्वश्रेष्ठ फीचर फिल्म' का पुरस्कार जीता?"
        },
        "options": {
            "en": [ "RRR", "Gangubai Kathiawadi", "Rocketry: The Nambi Effect", "Pushpa: The Rise" ],
            "hi": [ "आरआरआर", "गंगूबाई काठियावाड़ी", "रॉकेट्री: द नंबी इफेक्ट", "पुष्पा: द राइज" ]
        },
        "answer": 2,
        "explanation": {
            "en": "R. Madhavan's directorial debut \"Rocketry: The Nambi Effect\" won the Best Feature Film award.",
            "hi": "आर. माधवन के निर्देशन में बनी पहली फिल्म \"रॉकेट्री: द नंबी इफेक्ट\" ने सर्वश्रेष्ठ फीचर फिल्म का पुरस्कार जीता।"
        }
    },
    {
        "question": {
            "en": "Which Indian city was declared the cleanest city for the 7th consecutive time in the Swachh Survekshan Awards 2023?",
            "hi": "स्वच्छ सर्वेक्षण पुरस्कार 2023 में किस भारतीय शहर को लगातार 7वीं बार सबसे स्वच्छ शहर घोषित किया गया?"
        },
        "options": {
            "en": [ "Surat", "Navi Mumbai", "Indore", "Vijayawada" ],
            "hi": [ "सूरत", "नवी मुंबई", "इंदौर", "विजयवाड़ा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Indore and Surat were jointly awarded the cleanest city title, but for Indore, it was the seventh time in a row.",
            "hi": "इंदौर और सूरत को संयुक्त रूप से सबसे स्वच्छ शहर का खिताब दिया गया, लेकिन इंदौर के लिए यह लगातार सातवीं बार था।"
        }
    },
    {
        "question": {
            "en": "Who was recently appointed as the new Chief of Naval Staff of the Indian Navy in 2024?",
            "hi": "हाल ही में 2024 में भारतीय नौसेना के नए नौसेनाध्यक्ष के रूप में किसे नियुक्त किया गया?"
        },
        "options": {
            "en": [ "Admiral R. Hari Kumar", "Admiral Karambir Singh", "Admiral Dinesh K. Tripathi", "Admiral Sunil Lanba" ],
            "hi": [ "एडमिरल आर. हरि कुमार", "एडमिरल करमबीर सिंह", "एडमिरल दिनेश के. त्रिपाठी", "एडमिरल सुनील लांबा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Admiral Dinesh K. Tripathi took over as the 26th Chief of the Naval Staff on April 30, 2024.",
            "hi": "एडमिरल दिनेश के. त्रिपाठी ने 30 अप्रैल, 2024 को 26वें नौसेनाध्यक्ष के रूप में पदभार ग्रहण किया।"
        }
    },
    {
        "question": {
            "en": "What is the name of the new criminal law code that replaced the Indian Penal Code, 1860?",
            "hi": "1860 के भारतीय दंड संहिता को बदलने वाले नए आपराधिक कानून संहिता का क्या नाम है?"
        },
        "options": {
            "en": [ "Bharatiya Nyaya Sanhita, 2023", "Bharatiya Nagarik Suraksha Sanhita, 2023", "Bharatiya Sakshya Adhiniyam, 2023", "Indian Justice Code, 2023" ],
            "hi": [ "भारतीय न्याय संहिता, 2023", "भारतीय नागरिक सुरक्षा संहिता, 2023", "भारतीय साक्ष्य अधिनियम, 2023", "भारतीय न्याय संहिता, 2023" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The Bharatiya Nyaya Sanhita, 2023 replaced the IPC as the principal law on criminal offences in India.",
            "hi": "भारतीय न्याय संहिता, 2023 ने भारत में आपराधिक अपराधों पर प्रमुख कानून के रूप में आईपीसी की जगह ले ली।"
        }
    },
    {
        "question": {
            "en": "The 'Hoysala Temples', which recently became a UNESCO World Heritage Site, are located in which state?",
            "hi": "'होयसल मंदिर', जो हाल ही में यूनेस्को की विश्व धरोहर स्थल बन गए हैं, किस राज्य में स्थित हैं?"
        },
        "options": {
            "en": [ "Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh" ],
            "hi": [ "तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Sacred Ensembles of the Hoysalas, located in Belur, Halebidu, and Somanathapura in Karnataka, were inscribed on the UNESCO World Heritage list.",
            "hi": "कर्नाटक के बेलूर, हलेबिडु और सोमनाथपुरा में स्थित होयसलों के पवित्र समूह को यूनेस्को की विश्व धरोहर सूची में अंकित किया गया था।"
        }
    },
    {
        "question": {
            "en": "Which team won the inaugural Women's Premier League (WPL) in 2023?",
            "hi": "2023 में उद्घाटन महिला प्रीमियर लीग (WPL) किस टीम ने जीता?"
        },
        "options": {
            "en": [ "Delhi Capitals", "Mumbai Indians", "UP Warriorz", "Royal Challengers Bangalore" ],
            "hi": [ "दिल्ली कैपिटल्स", "मुंबई इंडियंस", "यूपी वारियर्स", "रॉयल चैलेंजर्स बैंगलोर" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Mumbai Indians defeated Delhi Capitals in the final to win the first-ever Women's Premier League title.",
            "hi": "मुंबई इंडियंस ने फाइनल में दिल्ली कैपिटल्स को हराकर पहली बार महिला प्रीमियर लीग का खिताब जीता।"
        }
    },
    {
        "question": {
            "en": "'Operation Ajay' was launched by the Indian government to evacuate citizens from which country?",
            "hi": "'ऑपरेशन अजय' भारत सरकार द्वारा किस देश से नागरिकों को निकालने के लिए शुरू किया गया था?"
        },
        "options": {
            "en": [ "Sudan", "Ukraine", "Israel", "Afghanistan" ],
            "hi": [ "सूडान", "यूक्रेन", "इज़राइल", "अफगानिस्तान" ]
        },
        "answer": 2,
        "explanation": {
            "en": "'Operation Ajay' was launched in October 2023 to facilitate the return of Indian citizens from Israel amid the escalating conflict with Hamas.",
            "hi": "'ऑपरेशन अजय' अक्टूबर 2023 में हमास के साथ बढ़ते संघर्ष के बीच इज़राइल से भारतीय नागरिकों की वापसी की सुविधा के लिए शुरू किया गया था।"
        }
    },
    {
        "question": {
            "en": "Who was awarded the Dadasaheb Phalke Lifetime Achievement Award for the year 2021 (presented in 2023)?",
            "hi": "वर्ष 2021 (2023 में प्रस्तुत) के लिए दादा साहब फाल्के लाइफटाइम अचीवमेंट पुरस्कार किसे प्रदान किया गया?"
        },
        "options": {
            "en": [ "Rajinikanth", "Asha Parekh", "Waheeda Rehman", "Amitabh Bachchan" ],
            "hi": [ "रजनीकांत", "आशा पारेख", "वहीदा रहमान", "अमिताभ बच्चन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Veteran actress Waheeda Rehman was honored with the Dadasaheb Phalke Award for her immense contribution to Indian cinema.",
            "hi": "दिग्गज अभिनेत्री वहीदा रहमान को भारतीय सिनेमा में उनके immense योगदान के लिए दादा साहब फाल्के पुरस्कार से सम्मानित किया गया।"
        }
    },
    {
        "question": {
            "en": "Who was the first Indian Governor-General of independent India?",
            "hi": "स्वतंत्र भारत के पहले भारतीय गवर्नर-जनरल कौन थे?"
        },
        "options": {
            "en": [ "Lord Mountbatten", "Dr. Rajendra Prasad", "C. Rajagopalachari", "Jawaharlal Nehru" ],
            "hi": [ "लॉर्ड माउंटबेटन", "डॉ. राजेंद्र प्रसाद", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू" ]
        },
        "answer": 2,
        "explanation": {
            "en": "While Lord Mountbatten was the last Viceroy and first Governor-General of a newly independent India, C. Rajagopalachari was the first (and only) Indian to hold the position.",
            "hi": "जबकि लॉर्ड माउंटबेटन अंतिम वायसराय और नए स्वतंत्र भारत के पहले गवर्नर-जनरल थे, सी. राजगोपालाचारी इस पद पर रहने वाले पहले (और एकमात्र) भारतीय थे।"
        }
    },
    {
        "question": {
            "en": "The ancient city of 'Pataliputra' is the modern-day equivalent of which city?",
            "hi": "प्राचीन शहर 'पाटलिपुत्र' आज के किस शहर के बराबर है?"
        },
        "options": {
            "en": [ "Varanasi", "Lucknow", "Patna", "Allahabad (Prayagraj)" ],
            "hi": [ "वाराणसी", "लखनऊ", "पटना", "इलाहाबाद (प्रयागराज)" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Pataliputra, the capital of major empires like the Mauryan and Gupta, was located at the confluence of the Son and Ganges rivers, where modern-day Patna stands.",
            "hi": "पाटलिपुत्र, मौर्य और गुप्त जैसे प्रमुख साम्राज्यों की राजधानी, सोन और गंगा नदियों के संगम पर स्थित था, जहाँ आज का पटना खड़ा है।"
        }
    },
    {
        "question": {
            "en": "The Jallianwala Bagh massacre took place in which city?",
            "hi": "जलियाँवाला बाग हत्याकांड किस शहर में हुआ था?"
        },
        "options": {
            "en": [ "Lahore", "Delhi", "Amritsar", "Jalandhar" ],
            "hi": [ "लाहौर", "दिल्ली", "अमृतसर", "जालंधर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The infamous Jallianwala Bagh massacre occurred on April 13, 1919, in Amritsar, Punjab, where British troops fired on a large crowd of unarmed Indians.",
            "hi": "कुख्यात जलियाँवाला बाग हत्याकांड 13 अप्रैल, 1919 को पंजाब के अमृतसर में हुआ था, जहाँ ब्रिटिश सैनिकों ने निहत्थे भारतीयों की एक बड़ी भीड़ पर गोलियाँ चलाई थीं।"
        }
    },
    {
        "question": {
            "en": "Which Indian state has the longest coastline?",
            "hi": "किस भारतीय राज्य की तटरेखा सबसे लंबी है?"
        },
        "options": {
            "en": [ "Andhra Pradesh", "Tamil Nadu", "Maharashtra", "Gujarat" ],
            "hi": [ "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र", "गुजरात" ]
        },
        "answer": 3,
        "explanation": {
            "en": "With a coastline of about 1,600 kilometers, Gujarat has the longest mainland coastline in India.",
            "hi": "लगभग 1,600 किलोमीटर की तटरेखा के साथ, गुजरात भारत में सबसे लंबी मुख्य भूमि तटरेखा है।"
        }
    },
    {
        "question": {
            "en": "The Sundarbans, the world's largest mangrove forest, is located in the delta of which two rivers?",
            "hi": "सुंदरबन, दुनिया का सबसे बड़ा मैंग्रोव वन, किन दो नदियों के डेल्टा में स्थित है?"
        },
        "options": {
            "en": [ "Godavari and Krishna", "Ganga and Brahmaputra", "Narmada and Tapti", "Mahanadi and Godavari" ],
            "hi": [ "गोदावरी और कृष्णा", "गंगा और ब्रह्मपुत्र", "नर्मदा और ताप्ती", "महानदी और गोदावरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Sundarbans delta is formed by the confluence of the Ganga, Brahmaputra, and Meghna Rivers in the Bay of Bengal.",
            "hi": "सुंदरबन डेल्टा बंगाल की खाड़ी में गंगा, ब्रह्मपुत्र और मेघना नदियों के संगम से बनता है।"
        }
    },
    {
        "question": {
            "en": "Which of the following is the longest river that flows entirely within India?",
            "hi": "निम्नलिखित में से कौन सी सबसे लंबी नदी है जो पूरी तरह से भारत के भीतर बहती है?"
        },
        "options": {
            "en": [ "Ganga", "Narmada", "Godavari", "Brahmaputra" ],
            "hi": [ "गंगा", "नर्मदा", "गोदावरी", "ब्रह्मपुत्र" ]
        },
        "answer": 2,
        "explanation": {
            "en": "While the Ganga is longer overall, a significant portion of it flows through Bangladesh. The Godavari is the longest river with its entire course within the borders of India.",
            "hi": "जबकि गंगा कुल मिलाकर लंबी है, इसका एक महत्वपूर्ण हिस्सा बांग्लादेश से होकर बहता है। गोदावरी भारत की सीमाओं के भीतर अपने पूरे पाठ्यक्रम के साथ सबसे लंबी नदी है।"
        }
    },
    {
        "question": {
            "en": "The Deccan Plateau is primarily made of what type of rock?",
            "hi": "दक्कन का पठार मुख्य रूप से किस प्रकार की चट्टान से बना है?"
        },
        "options": {
            "en": [ "Sandstone", "Limestone", "Granite", "Basalt" ],
            "hi": [ "बलुआ पत्थर", "चूना पत्थर", "ग्रेनाइट", "बेसाल्ट" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Deccan Plateau is a large igneous province, meaning it is composed of solidified volcanic lava, which is basaltic rock.",
            "hi": "दक्कन का पठार एक बड़ा आग्नेय प्रांत है, जिसका अर्थ है कि यह जमे हुए ज्वालामुखीय लावा से बना है, जो बेसाल्टिक चट्टान है।"
        }
    },
    {
        "question": {
            "en": "Which Indian state is known as the 'Spice Garden of India'?",
            "hi": "किस भारतीय राज्य को 'भारत का मसाला उद्यान' कहा जाता है?"
        },
        "options": {
            "en": [ "Karnataka", "Kerala", "Tamil Nadu", "Assam" ],
            "hi": [ "कर्नाटक", "केरल", "तमिलनाडु", "असम" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Kerala's unique climate and geography make it ideal for growing a wide variety of spices like pepper, cardamom, cloves, and nutmeg, earning it this title.",
            "hi": "केरल की अनूठी जलवायु और भूगोल इसे काली मिर्च, इलायची, लौंग और जायफल जैसे विभिन्न प्रकार के मसालों को उगाने के लिए आदर्श बनाते हैं, जिससे इसे यह उपाधि मिली।"
        }
    },
    {
        "question": {
            "en": "The highest peak in the Western Ghats is:",
            "hi": "पश्चिमी घाट की सबसे ऊँची चोटी है:"
        },
        "options": {
            "en": [ "Doddabetta", "Anamudi", "Kalsubai", "Mullayanagiri" ],
            "hi": [ "डोड्डाबेट्टा", "अनामुडी", "कलसुबाई", "मुल्लायनगिरि" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Anamudi, located in Kerala, is the highest peak in the Western Ghats and in South India, with an elevation of 2,695 meters.",
            "hi": "केरल में स्थित अनामुडी, पश्चिमी घाट और दक्षिण भारत की सबसे ऊंची चोटी है, जिसकी ऊंचाई 2,695 मीटर है।"
        }
    },
    {
        "question": {
            "en": "Which line passes through India, affecting its climate?",
            "hi": "कौन सी रेखा भारत से होकर गुजरती है, जो इसकी जलवायु को प्रभावित करती है?"
        },
        "options": {
            "en": [ "Equator", "Tropic of Capricorn", "Tropic of Cancer", "Arctic Circle" ],
            "hi": [ "भूमध्य रेखा", "मकर रेखा", "कर्क रेखा", "आर्कटिक वृत्त" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Tropic of Cancer (23.5°N latitude) passes through the middle of India, dividing the country into tropical and subtropical climate zones.",
            "hi": "कर्क रेखा (23.5°N अक्षांश) भारत के मध्य से होकर गुजरती है, जो देश को उष्णकटिबंधीय और उपोष्णकटिबंधीय जलवायु क्षेत्रों में विभाजित करती है।"
        }
    },
    {
        "question": {
            "en": "Majuli, the world's largest river island, is located in which river?",
            "hi": "माजुली, दुनिया का सबसे बड़ा नदी द्वीप, किस नदी में स्थित है?"
        },
        "options": {
            "en": [ "Ganga", "Yamuna", "Godavari", "Brahmaputra" ],
            "hi": [ "गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Majuli is a large river island located in the Brahmaputra River in the state of Assam.",
            "hi": "माजुली असम राज्य में ब्रह्मपुत्र नदी में स्थित एक बड़ा नदी द्वीप है।"
        }
    },
    {
        "question": {
            "en": "The 'Palk Strait' separates India from which country?",
            "hi": "'पाक जलडमरूमध्य' भारत को किस देश से अलग करता है?"
        },
        "options": {
            "en": [ "Maldives", "Sri Lanka", "Indonesia", "Myanmar" ],
            "hi": [ "मालदीव", "श्रीलंका", "इंडोनेशिया", "म्यांमार" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Palk Strait is a strait between the Tamil Nadu state of India and the Mannar District of the Northern Province of Sri Lanka.",
            "hi": "पाक जलडमरूमध्य भारत के तमिलनाडु राज्य और श्रीलंका के उत्तरी प्रांत के मन्नार जिले के बीच एक जलडमरूमध्य है।"
        }
    },
    {
        "question": {
            "en": "Which state is the largest producer of bauxite in India?",
            "hi": "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन सा है?"
        },
        "options": {
            "en": [ "Jharkhand", "Chhattisgarh", "Odisha", "Gujarat" ],
            "hi": [ "झारखंड", "छत्तीसगढ़", "ओडिशा", "गुजरात" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Odisha is the leading producer of bauxite, the primary ore of aluminum, accounting for over half of India's total production.",
            "hi": "ओडिशा बॉक्साइट का प्रमुख उत्पादक है, जो एल्यूमीनियम का प्राथमिक अयस्क है, जो भारत के कुल उत्पादन का आधे से अधिक हिस्सा है।"
        }
    },
    {
        "question": {
            "en": "Who served as the Chairman of the Drafting Committee of the Indian Constitution?",
            "hi": "भारतीय संविधान की मसौदा समिति के अध्यक्ष के रूप में किसने कार्य किया?"
        },
        "options": {
            "en": [ "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel", "Dr. B.R. Ambedkar", "Jawaharlal Nehru" ],
            "hi": [ "डॉ. राजेंद्र प्रसाद", "सरदार वल्लभभाई पटेल", "डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Dr. B.R. Ambedkar, as the Chairman of the Drafting Committee, is widely regarded as the chief architect of the Indian Constitution.",
            "hi": "डॉ. बी.आर. अंबेडकर, मसौदा समिति के अध्यक्ष के रूप में, व्यापक रूप से भारतीय संविधान के मुख्य वास्तुकार के रूप में माने जाते हैं।"
        }
    },
    {
        "question": {
            "en": "The power to create a new state in India rests with the:",
            "hi": "भारत में एक नया राज्य बनाने की शक्ति किसके पास है:"
        },
        "options": {
            "en": [ "President", "Prime Minister", "Parliament", "Supreme Court" ],
            "hi": [ "राष्ट्रपति", "प्रधानमंत्री", "संसद", "सर्वोच्च न्यायालय" ]
        },
        "answer": 2,
        "explanation": {
            "en": "According to Article 3 of the Constitution, the Parliament of India has the exclusive power to form new states and alter the areas, boundaries, or names of existing states.",
            "hi": "संविधान के अनुच्छेद 3 के अनुसार, भारत की संसद के पास नए राज्य बनाने और मौजूदा राज्यों के क्षेत्रों, सीमाओं या नामों को बदलने की विशेष शक्ति है।"
        }
    },
    {
        "question": {
            "en": "The concept of 'Judicial Review' in the Indian Constitution has been adopted from which country?",
            "hi": "भारतीय संविधान में 'न्यायिक समीक्षा' की अवधारणा किस देश से अपनाई गई है?"
        },
        "options": {
            "en": [ "United Kingdom", "United States", "Canada", "Australia" ],
            "hi": [ "यूनाइटेड किंगडम", "संयुक्त राज्य अमेरिका", "कनाडा", "ऑस्ट्रेलिया" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The power of the judiciary to examine the constitutionality of legislative enactments and executive orders is a concept borrowed from the U.S. Constitution.",
            "hi": "विधायी अधिनियमों और कार्यकारी आदेशों की संवैधानिकता की जांच करने की न्यायपालिका की शक्ति अमेरिकी संविधान से उधार ली गई एक अवधारणा है।"
        }
    },
    {
        "question": {
            "en": "How many fundamental duties are mentioned in the Indian Constitution?",
            "hi": "भारतीय संविधान में कितने मौलिक कर्तव्यों का उल्लेख है?"
        },
        "options": {
            "en": [ "9", "10", "11", "12" ],
            "hi": [ "9", "10", "11", "12" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Initially there were 10 fundamental duties. The 11th was added by the 86th Amendment in 2002.",
            "hi": "प्रारंभ में 10 मौलिक कर्तव्य थे। 11वां 2002 में 86वें संशोधन द्वारा जोड़ा गया था।"
        }
    },
    {
        "question": {
            "en": "The President of India can nominate how many members to the Rajya Sabha?",
            "hi": "भारत के राष्ट्रपति राज्यसभा में कितने सदस्य मनोनीत कर सकते हैं?"
        },
        "options": {
            "en": [ "2", "10", "12", "14" ],
            "hi": [ "2", "10", "12", "14" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The President can nominate 12 members to the Rajya Sabha who have special knowledge or practical experience in fields like literature, science, art, and social service.",
            "hi": "राष्ट्रपति राज्यसभा में 12 सदस्यों को मनोनीत कर सकते हैं जिन्हें साहित्य, विज्ञान, कला और सामाजिक सेवा जैसे क्षेत्रों में विशेष ज्ञान या व्यावहारिक अनुभव हो।"
        }
    },
    {
        "question": {
            "en": "Which amendment of the Constitution is known as the 'Mini-Constitution'?",
            "hi": "संविधान का कौन सा संशोधन 'लघु-संविधान' के रूप में जाना जाता है?"
        },
        "options": {
            "en": [ "44th Amendment", "42nd Amendment", "73rd Amendment", "74th Amendment" ],
            "hi": [ "44वां संशोधन", "42वां संशोधन", "73वां संशोधन", "74वां संशोधन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The 42nd Amendment Act, 1976, is called the 'Mini-Constitution' because it made widespread and significant changes to the Constitution.",
            "hi": "42वें संशोधन अधिनियम, 1976 को 'लघु-संविधान' कहा जाता है क्योंकि इसने संविधान में व्यापक और महत्वपूर्ण बदलाव किए।"
        }
    },
    {
        "question": {
            "en": "What is the minimum age to be appointed as the Governor of a state in India?",
            "hi": "भारत में किसी राज्य का राज्यपाल नियुक्त होने के लिए न्यूनतम आयु क्या है?"
        },
        "options": {
            "en": [ "25 years", "30 years", "35 years", "40 years" ],
            "hi": [ "25 साल", "30 साल", "35 साल", "40 साल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "According to Article 157 of the Constitution, a person must have completed the age of 35 years to be eligible for appointment as a Governor.",
            "hi": "संविधान के अनुच्छेद 157 के अनुसार, किसी व्यक्ति को राज्यपाल के रूप में नियुक्ति के लिए पात्र होने के लिए 35 वर्ष की आयु पूरी करनी होगी।"
        }
    },
    {
        "question": {
            "en": "The idea of a 'Welfare State' is included in which part of the Indian Constitution?",
            "hi": "भारतीय संविधान के किस भाग में 'कल्याणकारी राज्य' का विचार शामिल है?"
        },
        "options": {
            "en": [ "Preamble", "Fundamental Rights", "Directive Principles of State Policy (DPSP)", "Fundamental Duties" ],
            "hi": [ "प्रस्तावना", "मौलिक अधिकार", "राज्य के नीति निर्देशक सिद्धांत (DPSP)", "मौलिक कर्तव्य" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The DPSP in Part IV of the Constitution contains the ideals that the state should follow to establish a social and economic democracy, i.e., a welfare state.",
            "hi": "संविधान के भाग IV में DPSP में वे आदर्श शामिल हैं जिनका पालन राज्य को एक सामाजिक और आर्थिक लोकतंत्र, यानी एक कल्याणकारी राज्य स्थापित करने के लिए करना चाहिए।"
        }
    },
    {
        "question": {
            "en": "Who administers the oath of office to the President of India?",
            "hi": "भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?"
        },
        "options": {
            "en": [ "The Prime Minister", "The Vice President", "The Speaker of Lok Sabha", "The Chief Justice of India" ],
            "hi": [ "प्रधानमंत्री", "उपराष्ट्रपति", "लोकसभा अध्यक्ष", "भारत के मुख्य न्यायाधीश" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The oath of office to the President is administered by the Chief Justice of India, and in their absence, by the senior-most judge of the Supreme Court available.",
            "hi": "राष्ट्रपति को पद की शपथ भारत के मुख्य न्यायाधीश द्वारा दिलाई जाती है, और उनकी अनुपस्थिति में, सर्वोच्च न्यायालय के उपलब्ध वरिष्ठतम न्यायाधीश द्वारा।"
        }
    },
    {
        "question": {
            "en": "Panchayati Raj was first introduced in India in which state?",
            "hi": "भारत में पंचायती राज सबसे पहले किस राज्य में शुरू किया गया था?"
        },
        "options": {
            "en": [ "Andhra Pradesh", "Rajasthan", "Uttar Pradesh", "Gujarat" ],
            "hi": [ "आंध्र प्रदेश", "राजस्थान", "उत्तर प्रदेश", "गुजरात" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Panchayati Raj system was first adopted by the state of Rajasthan in Nagaur district on October 2, 1959.",
            "hi": "पंचायती राज व्यवस्था को सबसे पहले 2 अक्टूबर, 1959 को नागौर जिले में राजस्थान राज्य द्वारा अपनाया गया था।"
        }
    },
    {
        "question": {
            "en": "Who was the first Commander-in-Chief of the Indian Army after independence?",
            "hi": "स्वतंत्रता के बाद भारतीय सेना के पहले कमांडर-इन-चीफ कौन थे?"
        },
        "options": {
            "en": [ "Field Marshal Sam Manekshaw", "General K. M. Cariappa", "General Bipin Rawat", "General Rajendrasinhji Jadeja" ],
            "hi": [ "फील्ड मार्शल सैम मानेकशॉ", "जनरल के. एम. करियप्पा", "जनरल बिपिन रावत", "जनरल राजेंद्रसिंहजी जडेजा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "General K. M. Cariappa took over as the first Commander-in-Chief of the Indian Army from General Sir Roy Bucher, the last British C-in-C, on January 15, 1949.",
            "hi": "जनरल के. एम. करियप्पा ने 15 जनवरी, 1949 को अंतिम ब्रिटिश सी-इन-सी, जनरल सर रॉय बुचर से भारतीय सेना के पहले कमांडर-इन-चीफ के रूप में पदभार संभाला।"
        }
    },
    {
        "question": {
            "en": "In which year did the Indian Army achieve victory in the Kargil War?",
            "hi": "भारतीय सेना ने किस वर्ष कारगिल युद्ध में विजय प्राप्त की?"
        },
        "options": {
            "en": [ "1995", "1998", "1999", "2001" ],
            "hi": [ "1995", "1998", "1999", "2001" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Kargil War was fought between India and Pakistan from May to July 1999, culminating in an Indian victory.",
            "hi": "कारगिल युद्ध मई से जुलाई 1999 तक भारत और पाकिस्तान के बीच लड़ा गया था, जिसका समापन भारतीय जीत में हुआ।"
        }
    }
];

export const gkTest5Questions: Question[] = [
    {
        "question": {
            "en": "Who wrote the famous Sanskrit play 'Shakuntala'?",
            "hi": "प्रसिद्ध संस्कृत नाटक 'शकुंतला' किसने लिखा था?"
        },
        "options": {
            "en": [ "Tulsidas", "Valmiki", "Kalidasa", "Vishakhadatta" ],
            "hi": [ "तुलसीदास", "वाल्मीकि", "कालिदास", "विशाखदत्त" ]
        },
        "answer": 2,
        "explanation": {
            "en": "'Abhijnanasakuntalam', popularly known as 'Shakuntala', is a renowned Sanskrit play by the ancient Indian poet Kalidasa.",
            "hi": "'अभिज्ञानशाकुंतलम्', जिसे 'शकुंतला' के नाम से जाना जाता है, प्राचीन भारतीय कवि कालिदास का एक प्रसिद्ध संस्कृत नाटक है।"
        }
    },
    {
        "question": {
            "en": "Which Article of the Constitution grants special status to Jammu & Kashmir (now abrogated)?",
            "hi": "संविधान का कौन सा अनुच्छेद जम्मू और कश्मीर को विशेष दर्जा देता है (अब निरस्त)?"
        },
        "options": {
            "en": [ "Article 352", "Article 370", "Article 356", "Article 244" ],
            "hi": [ "अनुच्छेद 352", "अनुच्छेद 370", "अनुच्छेद 356", "अनुच्छेद 244" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Article 370 of the Indian constitution gave special status to the region of Jammu and Kashmir, which was abrogated in 2019.",
            "hi": "भारतीय संविधान के अनुच्छेद 370 ने जम्मू और कश्मीर क्षेत्र को विशेष दर्जा दिया, जिसे 2019 में निरस्त कर दिया गया था।"
        }
    },
    {
        "question": {
            "en": "The Comptroller and Auditor General (CAG) of India is appointed by the:",
            "hi": "भारत के नियंत्रक और महालेखा परीक्षक (CAG) की नियुक्ति किसके द्वारा की जाती है:"
        },
        "options": {
            "en": [ "Prime Minister", "Parliament", "President", "Finance Minister" ],
            "hi": [ "प्रधानमंत्री", "संसद", "राष्ट्रपति", "वित्त मंत्री" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The CAG is appointed by the President of India following a recommendation by the Prime Minister.",
            "hi": "CAG की नियुक्ति प्रधानमंत्री की सिफारिश के बाद भारत के राष्ट्रपति द्वारा की जाती है।"
        }
    },
    {
        "question": {
            "en": "The first linguistic state to be created in India was:",
            "hi": "भारत में बनाया जाने वाला पहला भाषाई राज्य था:"
        },
        "options": {
            "en": [ "Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka" ],
            "hi": [ "केरल", "तमिलनाडु", "आंध्र प्रदेश", "कर्नाटक" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Andhra State was the first state in India to be formed on a linguistic basis on 1 October 1953.",
            "hi": "आंध्र राज्य 1 अक्टूबर 1953 को भाषाई आधार पर गठित होने वाला भारत का पहला राज्य था।"
        }
    },
    {
        "question": {
            "en": "The 'Contingency Fund of India' is placed at the disposal of:",
            "hi": "'भारत की आकस्मिकता निधि' किसके निपटान में रखी गई है:"
        },
        "options": {
            "en": [ "The Parliament", "The Prime Minister", "The Finance Minister", "The President" ],
            "hi": [ "संसद", "प्रधानमंत्री", "वित्त मंत्री", "राष्ट्रपति" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Contingency Fund of India is held by the Finance Secretary on behalf of the President of India and is used for urgent unforeseen expenditure.",
            "hi": "भारत की आकस्मिकता निधि भारत के राष्ट्रपति की ओर से वित्त सचिव द्वारा रखी जाती है और इसका उपयोग तत्काल अप्रत्याशित व्यय के लिए किया जाता है।"
        }
    },
    {
        "question": {
            "en": "Which part of the Indian Constitution deals with 'Citizenship'?",
            "hi": "भारतीय संविधान का कौन सा भाग 'नागरिकता' से संबंधित है?"
        },
        "options": {
            "en": [ "Part I", "Part II", "Part III", "Part IV" ],
            "hi": [ "भाग I", "भाग II", "भाग III", "भाग IV" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Part II of the Constitution of India (Articles 5-11) deals with the Citizenship of India.",
            "hi": "भारत के संविधान का भाग II (अनुच्छेद 5-11) भारत की नागरिकता से संबंधित है।"
        }
    },
    {
        "question": {
            "en": "The famous 'Brihadeshwara Temple' at Thanjavur was built by which Chola ruler?",
            "hi": "तंजावुर में प्रसिद्ध 'बृहदेश्वर मंदिर' किस चोल शासक द्वारा बनाया गया था?"
        },
        "options": {
            "en": [ "Rajendra Chola I", "Karikala Chola", "Rajaraja Chola I", "Vijayalaya Chola" ],
            "hi": [ "राजेंद्र चोल प्रथम", "करिकाल चोल", "राजराजा चोल प्रथम", "विजयालय चोल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Brihadeshwara Temple was built by the great Chola king Rajaraja Chola I in the 11th century.",
            "hi": "बृहदेश्वर मंदिर का निर्माण 11वीं शताब्दी में महान चोल राजा राजराजा चोल प्रथम द्वारा किया गया था।"
        }
    },
    {
        "question": {
            "en": "Who was the court poet of Emperor Samudragupta?",
            "hi": "सम्राट समुद्रगुप्त का दरबारी कवि कौन था?"
        },
        "options": {
            "en": [ "Banabhatta", "Harisena", "Kalidasa", "Asvaghosa" ],
            "hi": [ "बाणभट्ट", "हरिसेन", "कालिदास", "अश्वघोष" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Harisena was the court poet of the Gupta emperor, Samudragupta, and he composed the famous Allahabad Pillar Inscription (Prayag Prashasti).",
            "hi": "हरिसेन गुप्त सम्राट, समुद्रगुप्त का दरबारी कवि था, और उसने प्रसिद्ध इलाहाबाद स्तंभ शिलालेख (प्रयाग प्रशस्ति) की रचना की।"
        }
    },
    {
        "question": {
            "en": "The 'Third Battle of Panipat' was fought in 1761 between:",
            "hi": "'पानीपत की तीसरी लड़ाई' 1761 में किसके बीच लड़ी गई थी:"
        },
        "options": {
            "en": [ "The Marathas and the British", "The Mughals and the Sikhs", "The Marathas and Ahmad Shah Abdali", "The British and the French" ],
            "hi": [ "मराठा और अंग्रेज", "मुगल और सिख", "मराठा और अहमद शाह अब्दाली", "अंग्रेज और फ्रांसीसी" ]
        },
        "answer": 2,
        "explanation": {
            "en": "It was fought between the Maratha Empire and the invading Afghan army of Ahmad Shah Abdali.",
            "hi": "यह मराठा साम्राज्य और अहमद शाह अब्दाली की हमलावर अफगान सेना के बीच लड़ा गया था।"
        }
    },
    {
        "question": {
            "en": "'Bihu' is a traditional folk dance of which state?",
            "hi": "'बिहू' किस राज्य का पारंपरिक लोक नृत्य है?"
        },
        "options": {
            "en": [ "West Bengal", "Odisha", "Bihar", "Assam" ],
            "hi": [ "पश्चिम बंगाल", "ओडिशा", "बिहार", "असम" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Bihu is a set of three important Assamese festivals, and the Bihu dance is a joyous folk dance from Assam.",
            "hi": "बिहू तीन महत्वपूर्ण असमिया त्योहारों का एक समूह है, और बिहू नृत्य असम का एक आनंदमय लोक नृत्य है।"
        }
    },
    {
        "question": {
            "en": "The ancient text 'Arthashastra' is attributed to:",
            "hi": "प्राचीन ग्रंथ 'अर्थशास्त्र' का श्रेय किसे दिया जाता है:"
        },
        "options": {
            "en": [ "Patanjali", "Kautilya (Chanakya)", "Manu", "Panini" ],
            "hi": [ "पतंजलि", "कौटिल्य (चाणक्य)", "मनु", "पाणिनि" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Arthashastra is an ancient Indian treatise on statecraft, economic policy and military strategy, written by Kautilya (also known as Chanakya).",
            "hi": "अर्थशास्त्र राज्य-व्यवस्था, आर्थिक नीति और सैन्य रणनीति पर एक प्राचीन भारतीय ग्रंथ है, जिसे कौटिल्य (चाणक्य के नाम से भी जाना जाता है) ने लिखा है।"
        }
    },
    {
        "question": {
            "en": "Which state is the largest producer of tea in India?",
            "hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?"
        },
        "options": {
            "en": [ "West Bengal", "Assam", "Karnataka", "Kerala" ],
            "hi": [ "पश्चिम बंगाल", "असम", "कर्नाटक", "केरल" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Assam is the world's largest tea-growing region by production and the leading producer in India.",
            "hi": "असम उत्पादन के हिसाब से दुनिया का सबसे बड़ा चाय उत्पादक क्षेत्र है और भारत में अग्रणी उत्पादक है।"
        }
    },
    {
        "question": {
            "en": "The 'Jog Falls', one of the highest waterfalls in India, is located on which river?",
            "hi": "'जोग जलप्रपात', भारत के सबसे ऊंचे झरनों में से एक, किस नदी पर स्थित है?"
        },
        "options": {
            "en": [ "Kaveri", "Sharavathi", "Krishna", "Godavari" ],
            "hi": [ "कावेरी", "शरावती", "कृष्णा", "गोदावरी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Jog Falls is a major tourist attraction located on the Sharavathi River in the state of Karnataka.",
            "hi": "जोग जलप्रपात कर्नाटक राज्य में शरावती नदी पर स्थित एक प्रमुख पर्यटक आकर्षण है।"
        }
    },
    {
        "question": {
            "en": "Which is the largest Union Territory of India by area?",
            "hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा केंद्र शासित प्रदेश कौन सा है?"
        },
        "options": {
            "en": [ "Puducherry", "Ladakh", "Andaman & Nicobar Islands", "Jammu & Kashmir" ],
            "hi": [ "पुडुचेरी", "लद्दाख", "अंडमान और निकोबार द्वीप समूह", "जम्मू और कश्मीर" ]
        },
        "answer": 1,
        "explanation": {
            "en": "After the reorganisation of Jammu & Kashmir in 2019, Ladakh became the largest Union Territory in India in terms of area.",
            "hi": "2019 में जम्मू और कश्मीर के पुनर्गठन के बाद, लद्दाख क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा केंद्र शासित प्रदेश बन गया।"
        }
    },
    {
        "question": {
            "en": "The 'Cardamom Hills' are located in which part of India?",
            "hi": "'इलायची की पहाड़ियाँ' भारत के किस भाग में स्थित हैं?"
        },
        "options": {
            "en": [ "Eastern Ghats", "Western Ghats", "Aravalli Range", "Himalayas" ],
            "hi": [ "पूर्वी घाट", "पश्चिमी घाट", "अरावली श्रृंखला", "हिमालय" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Cardamom Hills are a mountain range of southern India and part of the southern Western Ghats mountain range.",
            "hi": "इलायची की पहाड़ियाँ दक्षिणी भारत की एक पर्वत श्रृंखला है और दक्षिणी पश्चिमी घाट पर्वत श्रृंखला का हिस्सा है।"
        }
    },
    {
        "question": {
            "en": "Which is the only active volcano in India?",
            "hi": "भारत में एकमात्र सक्रिय ज्वालामुखी कौन सा है?"
        },
        "options": {
            "en": [ "Narcondam Island", "Barren Island", "Baratang Island", "Deccan Traps" ],
            "hi": [ "नारकोंडम द्वीप", "बंजर द्वीप", "बारातांग द्वीप", "दक्कन ट्रैप" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Barren Island, located in the Andaman Sea, is the only confirmed active volcano in the Indian subcontinent.",
            "hi": "बंजर द्वीप, अंडमान सागर में स्थित, भारतीय उपमहाद्वीप में एकमात्र पुष्ट सक्रिय ज्वालामुखी है।"
        }
    },
    {
        "question": {
            "en": "The 'High Altitude Warfare School' (HAWS) of the Indian Army is located in:",
            "hi": "भारतीय सेना का 'उच्च ऊंचाई युद्ध विद्यालय' (HAWS) कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Siachen", "Leh", "Gulmarg", "Dehradun" ],
            "hi": [ "सियाचिन", "लेह", "गुलमर्ग", "देहरादून" ]
        },
        "answer": 2,
        "explanation": {
            "en": "HAWS is a premier training establishment of the Indian Army located in Gulmarg, Jammu & Kashmir, specializing in high-altitude warfare.",
            "hi": "HAWS भारतीय सेना का एक प्रमुख प्रशिक्षण प्रतिष्ठान है जो गुलमर्ग, जम्मू और कश्मीर में स्थित है, जो उच्च ऊंचाई वाले युद्ध में विशेषज्ञता रखता है।"
        }
    },
    {
        "question": {
            "en": "What is 'INS Kalvari', which was recently in the news?",
            "hi": "'आईएनएस कलवरी' क्या है, जो हाल ही में खबरों में था?"
        },
        "options": {
            "en": [ "An aircraft carrier", "A destroyer", "A submarine", "A frigate" ],
            "hi": [ "एक विमानवाहक पोत", "एक विध्वंसक", "एक पनडुब्बी", "एक फ्रिगेट" ]
        },
        "answer": 2,
        "explanation": {
            "en": "INS Kalvari is the first of the six Scorpène-class submarines built for the Indian Navy under Project 75.",
            "hi": "आईएनएस कलवरी प्रोजेक्ट 75 के तहत भारतीय नौसेना के लिए बनाई गई छह स्कॉर्पीन-श्रेणी की पनडुब्बियों में से पहली है।"
        }
    },
    {
        "question": {
            "en": "The rank of 'Field Marshal' in the Indian Army is a:",
            "hi": "भारतीय सेना में 'फील्ड मार्शल' का पद है:"
        },
        "options": {
            "en": [ "Two-star rank", "Three-star rank", "Four-star rank", "Five-star rank" ],
            "hi": [ "दो सितारा रैंक", "तीन सितारा रैंक", "चार सितारा रैंक", "पांच सितारा रैंक" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Field Marshal is a five-star general officer rank and the highest attainable rank in the Indian Army, awarded for exceptional service.",
            "hi": "फील्ड मार्शल एक पांच सितारा सामान्य अधिकारी रैंक है और भारतीय सेना में सर्वोच्च प्राप्य रैंक है, जो असाधारण सेवा के लिए प्रदान किया जाता है।"
        }
    },
    {
        "question": {
            "en": "The 'College of Military Engineering' is located in:",
            "hi": "'सैन्य इंजीनियरिंग कॉलेज' कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Mumbai", "Pune", "Dehradun", "Secunderabad" ],
            "hi": [ "मुंबई", "पुणे", "देहरादून", "सिकंदराबाद" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The College of Military Engineering (CME) is a premier technical and tactical training institution of the Indian Army Corps of Engineers located in Pune.",
            "hi": "सैन्य इंजीनियरिंग कॉलेज (CME) पुणे में स्थित भारतीय सेना कोर ऑफ इंजीनियर्स का एक प्रमुख तकनीकी और सामरिक प्रशिक्षण संस्थान है।"
        }
    },
    {
        "question": {
            "en": "The joint military exercise 'Dharma Guardian' is conducted between India and:",
            "hi": "संयुक्त सैन्य अभ्यास 'धर्म गार्जियन' भारत और किसके बीच आयोजित किया जाता है:"
        },
        "options": {
            "en": [ "Thailand", "Vietnam", "South Korea", "Japan" ],
            "hi": [ "थाईलैंड", "वियतनाम", "दक्षिण कोरिया", "जापान" ]
        },
        "answer": 3,
        "explanation": {
            "en": "'Dharma Guardian' is an annual joint military exercise between the Indian Army and the Japanese Ground Self-Defense Force.",
            "hi": "'धर्म गार्जियन' भारतीय सेना और जापानी ग्राउंड सेल्फ-डिफेंस फोर्स के बीच एक वार्षिक संयुक्त सैन्य अभ्यास है।"
        }
    },
    {
        "question": {
            "en": "The 'Brexit' movement was associated with which country leaving the European Union?",
            "hi": "'ब्रेक्सिट' आंदोलन किस देश के यूरोपीय संघ छोड़ने से जुड़ा था?"
        },
        "options": {
            "en": [ "France", "Germany", "Italy", "United Kingdom" ],
            "hi": [ "फ्रांस", "जर्मनी", "इटली", "यूनाइटेड किंगडम" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Brexit was the withdrawal of the United Kingdom from the European Union and the European Atomic Energy Community.",
            "hi": "ब्रेक्सिट यूनाइटेड किंगडम का यूरोपीय संघ और यूरोपीय परमाणु ऊर्जा समुदाय से हटना था।"
        }
    },
    {
        "question": {
            "en": "The headquarters of the 'International Atomic Energy Agency' (IAEA) is in:",
            "hi": "'अंतर्राष्ट्रीय परमाणु ऊर्जा एजेंसी' (IAEA) का मुख्यालय कहाँ है:"
        },
        "options": {
            "en": [ "Vienna, Austria", "Geneva, Switzerland", "Paris, France", "New York, USA" ],
            "hi": [ "वियना, ऑस्ट्रिया", "जिनेवा, स्विट्जरलैंड", "पेरिस, फ्रांस", "न्यूयॉर्क, यूएसए" ]
        },
        "answer": 0,
        "explanation": {
            "en": "The IAEA is an international organization that seeks to promote the peaceful use of nuclear energy and is headquartered in Vienna, Austria.",
            "hi": "IAEA एक अंतर्राष्ट्रीय संगठन है जो परमाणु ऊर्जा के शांतिपूर्ण उपयोग को बढ़ावा देना चाहता है और इसका मुख्यालय वियना, ऑस्ट्रिया में है।"
        }
    },
    {
        "question": {
            "en": "Which country is the newest member of the United Nations?",
            "hi": "संयुक्त राष्ट्र का सबसे नया सदस्य कौन सा देश है?"
        },
        "options": {
            "en": [ "Kosovo", "Taiwan", "Palestine", "South Sudan" ],
            "hi": [ "कोसोवो", "ताइवान", "फिलिस्तीन", "दक्षिण सूडान" ]
        },
        "answer": 3,
        "explanation": {
            "en": "South Sudan became the 193rd member state of the United Nations in 2011.",
            "hi": "दक्षिण सूडान 2011 में संयुक्त राष्ट्र का 193वां सदस्य राज्य बना।"
        }
    },
    {
        "question": {
            "en": "The 'World Economic Forum' holds its annual meeting in which city?",
            "hi": "'विश्व आर्थिक मंच' अपनी वार्षिक बैठक किस शहर में आयोजित करता है?"
        },
        "options": {
            "en": [ "Zurich", "Geneva", "Davos", "Bern" ],
            "hi": [ "ज्यूरिख", "जिनेवा", "दावोस", "बर्न" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The World Economic Forum is famous for its annual meeting at the end of January in Davos, a mountain resort in Switzerland.",
            "hi": "विश्व आर्थिक मंच स्विट्जरलैंड के एक पहाड़ी रिसॉर्ट दावोस में जनवरी के अंत में अपनी वार्षिक बैठक के लिए प्रसिद्ध है।"
        }
    },
    {
        "question": {
            "en": "The 'International Day of Non-Violence' is observed on the birth anniversary of:",
            "hi": "'अंतर्राष्ट्रीय अहिंसा दिवस' किसकी जयंती पर मनाया जाता है:"
        },
        "options": {
            "en": [ "Nelson Mandela", "Martin Luther King Jr.", "Mahatma Gandhi", "Dalai Lama" ],
            "hi": [ "नेल्सन मंडेला", "मार्टिन लूथर किंग जूनियर", "महात्मा गांधी", "दलाई लामा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The International Day of Non-Violence is observed on 2 October, the birthday of Mahatma Gandhi.",
            "hi": "अंतर्राष्ट्रीय अहिंसा दिवस 2 अक्टूबर को महात्मा गांधी के जन्मदिन पर मनाया जाता है।"
        }
    },
    {
        "question": {
            "en": "The 'Jnanpith Award' is given for outstanding contribution to:",
            "hi": "'ज्ञानपीठ पुरस्कार' किसके लिए उत्कृष्ट योगदान के लिए दिया जाता है:"
        },
        "options": {
            "en": [ "Science", "Music", "Literature", "Journalism" ],
            "hi": [ "विज्ञान", "संगीत", "साहित्य", "पत्रकारिता" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Jnanpith Award is India's highest literary honour, awarded annually for outstanding contributions to literature.",
            "hi": "ज्ञानपीठ पुरस्कार भारत का सर्वोच्च साहित्यिक सम्मान है, जो साहित्य में उत्कृष्ट योगदान के लिए प्रतिवर्ष प्रदान किया जाता है।"
        }
    },
    {
        "question": {
            "en": "Who was the first musician to be awarded the Bharat Ratna?",
            "hi": "भारत रत्न से सम्मानित होने वाले पहले संगीतकार कौन थे?"
        },
        "options": {
            "en": [ "Lata Mangeshkar", "Bismillah Khan", "M.S. Subbulakshmi", "Ravi Shankar" ],
            "hi": [ "लता मंगेशकर", "बिस्मिल्लाह खान", "एम.एस. सुब्बुलक्ष्मी", "रवि शंकर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Carnatic classical vocalist M. S. Subbulakshmi was the first musician ever to be awarded the Bharat Ratna, in 1998.",
            "hi": "कर्नाटक शास्त्रीय गायिका एम. एस. सुब्बुलक्ष्मी 1998 में भारत रत्न से सम्मानित होने वाली पहली संगीतकार थीं।"
        }
    },
    {
        "question": {
            "en": "The 'Dronacharya Award' is given to:",
            "hi": "'द्रोणाचार्य पुरस्कार' किसे दिया जाता है:"
        },
        "options": {
            "en": [ "Outstanding sportspersons", "Outstanding coaches in sports", "Umpires and referees", "Sports journalists" ],
            "hi": [ "उत्कृष्ट खिलाड़ी", "खेलों में उत्कृष्ट कोच", "अंपायर और रेफरी", "खेल पत्रकार" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Dronacharya Award is presented for outstanding coaching in sports and games.",
            "hi": "द्रोणाचार्य पुरस्कार खेलों में उत्कृष्ट कोचिंग के लिए प्रदान किया जाता है।"
        }
    },
    {
        "question": {
            "en": "The 'Ramon Magsaysay Award' is named after the former president of which country?",
            "hi": "'रमन मैग्सेसे पुरस्कार' किस देश के पूर्व राष्ट्रपति के नाम पर है?"
        },
        "options": {
            "en": [ "Indonesia", "Malaysia", "Philippines", "Thailand" ],
            "hi": [ "इंडोनेशिया", "मलेशिया", "फिलीपींस", "थाईलैंड" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The award is named after Ramon Magsaysay, the seventh president of the Philippines, and is often considered Asia's Nobel Prize.",
            "hi": "यह पुरस्कार फिलीपींस के सातवें राष्ट्रपति रमन मैग्सेसे के नाम पर है, और इसे अक्सर एशिया का नोबेल पुरस्कार माना जाता है।"
        }
    },
    {
        "question": {
            "en": "Who was the first posthumous recipient of the Bharat Ratna?",
            "hi": "भारत रत्न के पहले मरणोपरांत प्राप्तकर्ता कौन थे?"
        },
        "options": {
            "en": [ "Sardar Patel", "Lal Bahadur Shastri", "K. Kamaraj", "M.G. Ramachandran" ],
            "hi": [ "सरदार पटेल", "लाल बहादुर शास्त्री", "के. कामराज", "एम.जी. रामचंद्रन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Former Prime Minister Lal Bahadur Shastri was the first individual to be honoured with the Bharat Ratna posthumously in 1966.",
            "hi": "पूर्व प्रधान मंत्री लाल बहादुर शास्त्री 1966 में मरणोपरांत भारत रत्न से सम्मानित होने वाले पहले व्यक्ति थे।"
        }
    },
    {
        "question": {
            "en": "The 'Ajrakh' block printing is a traditional art form from which state?",
            "hi": "'अजरख' ब्लॉक प्रिंटिंग किस राज्य की एक पारंपरिक कला है?"
        },
        "options": {
            "en": [ "Rajasthan", "Gujarat", "Uttar Pradesh", "Madhya Pradesh" ],
            "hi": [ "राजस्थान", "गुजरात", "उत्तर प्रदेश", "मध्य प्रदेश" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Ajrakh is a unique form of block-printing found mostly in the Kutch region of Gujarat.",
            "hi": "अजरख गुजरात के कच्छ क्षेत्र में ज्यादातर पाया जाने वाला ब्लॉक-प्रिंटिंग का एक अनूठा रूप है।"
        }
    },
    {
        "question": {
            "en": "What is the name of the boundary line between India and Pakistan?",
            "hi": "भारत और पाकिस्तान के बीच सीमा रेखा का क्या नाम है?"
        },
        "options": {
            "en": [ "Durand Line", "McMahon Line", "Radcliffe Line", "Line of Control" ],
            "hi": [ "डूरंड रेखा", "मैकमोहन रेखा", "रेडक्लिफ रेखा", "नियंत्रण रेखा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Radcliffe Line was the boundary demarcation line between the Indian and Pakistani portions of the Punjab and Bengal provinces.",
            "hi": "रेडक्लिफ रेखा पंजाब और बंगाल प्रांतों के भारतीय और पाकिस्तानी हिस्सों के बीच सीमांकन रेखा थी।"
        }
    },
    {
        "question": {
            "en": "The 'Buland Darwaza' is located in which city?",
            "hi": "'बुलंद दरवाजा' किस शहर में स्थित है?"
        },
        "options": {
            "en": [ "Delhi", "Agra", "Fatehpur Sikri", "Jaipur" ],
            "hi": [ "दिल्ली", "आगरा", "फतेहपुर सीकरी", "जयपुर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Buland Darwaza (Gate of Victory) was built by Mughal emperor Akbar to commemorate his victory over Gujarat and is located in Fatehpur Sikri.",
            "hi": "बुलंद दरवाजा (विजय का द्वार) मुगल सम्राट अकबर द्वारा गुजरात पर अपनी जीत के उपलक्ष्य में बनाया गया था और यह फतेहपुर सीकरी में स्थित है।"
        }
    },
    {
        "question": {
            "en": "Which state is the leading producer of coffee in India?",
            "hi": "भारत में कॉफी का प्रमुख उत्पादक राज्य कौन सा है?"
        },
        "options": {
            "en": [ "Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh" ],
            "hi": [ "तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Karnataka is the largest producer of coffee in India, accounting for a majority of the country's total coffee production.",
            "hi": "कर्नाटक भारत में कॉफी का सबसे बड़ा उत्पादक है, जो देश के कुल कॉफी उत्पादन का अधिकांश हिस्सा है।"
        }
    },
    {
        "question": {
            "en": "The first Indian Institute of Technology (IIT) was established in:",
            "hi": "पहला भारतीय प्रौद्योगिकी संस्थान (IIT) कहाँ स्थापित किया गया था:"
        },
        "options": {
            "en": [ "Delhi", "Bombay (Mumbai)", "Madras (Chennai)", "Kharagpur" ],
            "hi": [ "दिल्ली", "बॉम्बे (मुंबई)", "मद्रास (चेन्नई)", "खड़गपुर" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The first IIT was founded in May 1950 at Kharagpur, West Bengal.",
            "hi": "पहले IIT की स्थापना मई 1950 में खड़गपुर, पश्चिम बंगाल में हुई थी।"
        }
    },
    {
        "question": {
            "en": "The 'Indravati National Park' is located in which state?",
            "hi": "'इंद्रावती राष्ट्रीय उद्यान' किस राज्य में स्थित है?"
        },
        "options": {
            "en": [ "Odisha", "Chhattisgarh", "Jharkhand", "Telangana" ],
            "hi": [ "ओडिशा", "छत्तीसगढ़", "झारखंड", "तेलंगाना" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Indravati National Park is a national park located in the Bijapur district of Chhattisgarh state.",
            "hi": "इंद्रावती राष्ट्रीय उद्यान छत्तीसगढ़ राज्य के बीजापुर जिले में स्थित एक राष्ट्रीय उद्यान है।"
        }
    },
    {
        "question": {
            "en": "The 'Official Secrets Act' was first enacted in India in which year?",
            "hi": "भारत में 'आधिकारिक गोपनीयता अधिनियम' पहली बार किस वर्ष बनाया गया था?"
        },
        "options": {
            "en": [ "1905", "1919", "1923", "1935" ],
            "hi": [ "1905", "1919", "1923", "1935" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Indian Official Secrets Act, 1923, is India's anti-espionage act derived from the British version.",
            "hi": "भारतीय आधिकारिक गोपनीयता अधिनियम, 1923, भारत का जासूसी विरोधी अधिनियम है जो ब्रिटिश संस्करण से लिया गया है।"
        }
    },
    {
        "question": {
            "en": "Who is the author of the book 'The God of Small Things'?",
            "hi": "'द गॉड ऑफ स्मॉल थिंग्स' पुस्तक के लेखक कौन हैं?"
        },
        "options": {
            "en": [ "Jhumpa Lahiri", "Kiran Desai", "Arundhati Roy", "Anita Desai" ],
            "hi": [ "झुम्पा लाहिड़ी", "किरण देसाई", "अरुंधति रॉय", "अनीता देसाई" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The God of Small Things is the debut novel of Indian writer Arundhati Roy, which won the Booker Prize in 1997.",
            "hi": "द गॉड ऑफ स्मॉल थिंग्स भारतीय लेखिका अरुंधति रॉय का पहला उपन्यास है, जिसने 1997 में बुकर पुरस्कार जीता था।"
        }
    },
    {
        "question": {
            "en": "The 'Bandipur National Park' is located in which state?",
            "hi": "'बांदीपुर राष्ट्रीय उद्यान' किस राज्य में स्थित है?"
        },
        "options": {
            "en": [ "Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka" ],
            "hi": [ "तमिलनाडु", "आंध्र प्रदेश", "केरल", "कर्नाटक" ]
        },
        "answer": 3,
        "explanation": {
            "en": "Bandipur National Park is a tiger reserve located in the state of Karnataka.",
            "hi": "बांदीपुर राष्ट्रीय उद्यान कर्नाटक राज्य में स्थित एक बाघ अभयारण्य है।"
        }
    },
    {
        "question": {
            "en": "The 'Tehri Dam' is built on which river?",
            "hi": "'टिहरी बांध' किस नदी पर बनाया गया है?"
        },
        "options": {
            "en": [ "Alaknanda", "Bhagirathi", "Yamuna", "Ramganga" ],
            "hi": [ "अलकनंदा", "भागीरथी", "यमुना", "रामगंगा" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Tehri Dam is the tallest dam in India, built on the Bhagirathi River near Tehri in Uttarakhand.",
            "hi": "टिहरी बांध भारत का सबसे ऊंचा बांध है, जो उत्तराखंड में टिहरी के पास भागीरथी नदी पर बनाया गया है।"
        }
    },
    {
        "question": {
            "en": "Which city is known as the 'Electronic City of India'?",
            "hi": "किस शहर को 'भारत का इलेक्ट्रॉनिक सिटी' कहा जाता है?"
        },
        "options": {
            "en": [ "Hyderabad", "Pune", "Bengaluru", "Chennai" ],
            "hi": [ "हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Bengaluru (Bangalore) is widely regarded as the 'Silicon Valley of India' or 'Electronic City of India' because of its role as the nation's leading information technology exporter.",
            "hi": "बेंगलुरु (बैंगलोर) को व्यापक रूप से 'भारत की सिलिकॉन वैली' या 'भारत का इलेक्ट्रॉनिक सिटी' माना जाता है क्योंकि देश के अग्रणी सूचना प्रौद्योगिकी निर्यातक के रूप में इसकी भूमिका है।"
        }
    },
    {
        "question": {
            "en": "The famous 'Charminar' is located in which city?",
            "hi": "प्रसिद्ध 'चारमीनार' किस शहर में स्थित है?"
        },
        "options": {
            "en": [ "Delhi", "Agra", "Hyderabad", "Aurangabad" ],
            "hi": [ "दिल्ली", "आगरा", "हैदराबाद", "औरंगाबाद" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Charminar is a monument and mosque located in Hyderabad, Telangana, India.",
            "hi": "चारमीनार हैदराबाद, तेलंगाना, भारत में स्थित एक स्मारक और मस्जिद है।"
        }
    },
    {
        "question": {
            "en": "The 'National Stock Exchange' (NSE) of India is located in:",
            "hi": "भारत का 'नेशनल स्टॉक एक्सचेंज' (NSE) कहाँ स्थित है:"
        },
        "options": {
            "en": [ "New Delhi", "Kolkata", "Mumbai", "Ahmedabad" ],
            "hi": [ "नई दिल्ली", "कोलकाता", "मुंबई", "अहमदाबाद" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The NSE is the leading stock exchange of India, located in Mumbai, Maharashtra.",
            "hi": "एनएसई भारत का प्रमुख स्टॉक एक्सचेंज है, जो मुंबई, महाराष्ट्र में स्थित है।"
        }
    },
    {
        "question": {
            "en": "'Kathakali' is a classical dance form that originated from which state?",
            "hi": "'कथकली' एक शास्त्रीय नृत्य शैली है जिसकी उत्पत्ति किस राज्य से हुई?"
        },
        "options": {
            "en": [ "Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh" ],
            "hi": [ "कर्नाटक", "तमिलनाडु", "केरल", "आंध्र प्रदेश" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Kathakali is a major form of classical Indian dance. It is a 'story play' genre of art, but one distinguished by its elaborately colorful make-up, costumes and face masks.",
            "hi": "कथकली शास्त्रीय भारतीय नृत्य का एक प्रमुख रूप है। यह कला की एक 'कहानी नाटक' शैली है, लेकिन एक जो अपने विस्तृत रंगीन मेकअप, वेशभूषा और चेहरे के मुखौटे से प्रतिष्ठित है।"
        }
    },
    {
        "question": {
            "en": "Who was the first woman Chief Minister of an Indian state?",
            "hi": "किसी भारतीय राज्य की पहली महिला मुख्यमंत्री कौन थीं?"
        },
        "options": {
            "en": [ "Sarojini Naidu", "Sucheta Kripalani", "Jayalalithaa", "Mamata Banerjee" ],
            "hi": [ "सरोजिनी नायडू", "सुचेता कृपलानी", "जयललिता", "ममता बनर्जी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Sucheta Kripalani was the first woman to become the Chief Minister of an Indian state, serving as the head of the Uttar Pradesh government.",
            "hi": "सुचेता कृपलानी एक भारतीय राज्य की मुख्यमंत्री बनने वाली पहली महिला थीं, जो उत्तर प्रदेश सरकार की प्रमुख के रूप में कार्यरत थीं।"
        }
    },
    {
        "question": {
            "en": "The 'Chilika Lake', Asia's largest brackish water lagoon, is in which state?",
            "hi": "'चिल्का झील', एशिया की सबसे बड़ी खारे पानी की लैगून, किस राज्य में है?"
        },
        "options": {
            "en": [ "Andhra Pradesh", "West Bengal", "Odisha", "Tamil Nadu" ],
            "hi": [ "आंध्र प्रदेश", "पश्चिम बंगाल", "ओडिशा", "तमिलनाडु" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Chilika Lake is a brackish water lagoon, spread over the Puri, Khurda and Ganjam districts of Odisha state.",
            "hi": "चिल्का झील एक खारे पानी की लैगून है, जो ओडिशा राज्य के पुरी, खुर्दा और गंजम जिलों में फैली हुई है।"
        }
    },
    {
        "question": {
            "en": "The 'Indian Institute of Science' (IISc) is located in:",
            "hi": "'भारतीय विज्ञान संस्थान' (IISc) कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Chennai", "Mumbai", "Delhi", "Bengaluru" ],
            "hi": [ "चेन्नई", "मुंबई", "दिल्ली", "बेंगलुरु" ]
        },
        "answer": 3,
        "explanation": {
            "en": "IISc is a public, deemed, research university for higher education and research in science, engineering, design, and management, located in Bengaluru.",
            "hi": "IISc विज्ञान, इंजीनियरिंग, डिजाइन और प्रबंधन में उच्च शिक्षा और अनुसंधान के लिए एक सार्वजनिक, डीम्ड, अनुसंधान विश्वविद्यालय है, जो बेंगलुरु में स्थित है।"
        }
    },
    {
        "question": {
            "en": "'Bhoodan Movement' was initiated by:",
            "hi": "'भूदान आंदोलन' किसके द्वारा शुरू किया गया था:"
        },
        "options": {
            "en": [ "Mahatma Gandhi", "Jayaprakash Narayan", "Vinoba Bhave", "Sardar Patel" ],
            "hi": [ "महात्मा गांधी", "जयप्रकाश नारायण", "विनोबा भावे", "सरदार पटेल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Bhoodan Movement (Land Gift Movement) was a voluntary land reform movement in India, started by Acharya Vinoba Bhave in 1951.",
            "hi": "भूदान आंदोलन (भूमि उपहार आंदोलन) भारत में एक स्वैच्छिक भूमि सुधार आंदोलन था, जिसे 1951 में आचार्य विनोबा भावे ने शुरू किया था।"
        }
    },
    {
        "question": {
            "en": "The 'Salal Project' is constructed on which river?",
            "hi": "'सलाल परियोजना' किस नदी पर बनाई गई है?"
        },
        "options": {
            "en": [ "Jhelum", "Ravi", "Sutlej", "Chenab" ],
            "hi": [ "झेलम", "रावी", "सतलुज", "चिनाब" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Salal Hydroelectric Project is a run-of-the-river power project on the Chenab River in the Reasi district of Jammu and Kashmir.",
            "hi": "सलाल जलविद्युत परियोजना जम्मू और कश्मीर के रियासी जिले में चिनाब नदी पर एक रन-ऑफ-द-रिवर पावर प्रोजेक्ट है।"
        }
    },
    {
        "question": {
            "en": "The first metro rail service in India was started in which city?",
            "hi": "भारत में पहली मेट्रो रेल सेवा किस शहर में शुरू की गई थी?"
        },
        "options": {
            "en": [ "Delhi", "Mumbai", "Chennai", "Kolkata" ],
            "hi": [ "दिल्ली", "मुंबई", "चेन्नई", "कोलकाता" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Kolkata Metro is the first planned and operational rapid transit system in India. It started operations in 1984.",
            "hi": "कोलकाता मेट्रो भारत में पहली नियोजित और परिचालन वाली रैपिड ट्रांजिट प्रणाली है। इसने 1984 में परिचालन शुरू किया।"
        }
    }
];

export const gkTest6Questions: Question[] = [
    {
        "question": {
            "en": "Which is the highest gallantry award given during peacetime in India?",
            "hi": "भारत में शांतिकाल में दिया जाने वाला सर्वोच्च वीरता पुरस्कार कौन सा है?"
        },
        "options": {
            "en": [ "Param Vir Chakra", "Maha Vir Chakra", "Ashoka Chakra", "Kirti Chakra" ],
            "hi": [ "परमवीर चक्र", "महावीर चक्र", "अशोक चक्र", "कीर्ति चक्र" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Ashoka Chakra is India's highest peacetime military decoration awarded for valor, courageous action or self-sacrifice away from the battlefield.",
            "hi": "अशोक चक्र भारत का सर्वोच्च शांतिकालीन सैन्य सम्मान है जो युद्ध के मैदान से दूर वीरता, साहसी कार्रवाई या आत्म-बलिदान के लिए दिया जाता है।"
        }
    },
    {
        "question": {
            "en": "'Operation Sadbhavana' is an initiative of the Indian Army primarily focused on:",
            "hi": "'ऑपरेशन सद्भावना' भारतीय सेना की एक पहल है जो मुख्य रूप से किस पर केंद्रित है:"
        },
        "options": {
            "en": [ "Counter-terrorism", "Disaster relief", "Winning hearts and minds in conflict areas", "Border management" ],
            "hi": [ "आतंकवाद-निरोध", "आपदा राहत", "संघर्ष क्षेत्रों में दिल और दिमाग जीतना", "सीमा प्रबंधन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "It is a unique humane initiative undertaken in Jammu & Kashmir and Ladakh to address the aspirations of the people through various civic action programs.",
            "hi": "यह जम्मू-कश्मीर और लद्दाख में विभिन्न नागरिक कार्रवाई कार्यक्रमों के माध्यम से लोगों की आकांक्षाओं को संबोधित करने के लिए की गई एक अनूठी मानवीय पहल है।"
        }
    },
    {
        "question": {
            "en": "What is the full form of 'DRDO'?",
            "hi": "'DRDO' का पूर्ण रूप क्या है?"
        },
        "options": {
            "en": [ "Defence Research and Development Organisation", "Department of Research and Defence Operations", "Defence Registry and Documentation Office", "Directorate of Defence and Research" ],
            "hi": [ "रक्षा अनुसंधान और विकास संगठन", "अनुसंधान और रक्षा संचालन विभाग", "रक्षा रजिस्ट्री और प्रलेखन कार्यालय", "रक्षा और अनुसंधान निदेशालय" ]
        },
        "answer": 0,
        "explanation": {
            "en": "DRDO is the premier agency under the Department of Defence Research and Development in the Ministry of Defence of the Government of India, charged with the military's research and development.",
            "hi": "DRDO भारत सरकार के रक्षा मंत्रालय में रक्षा अनुसंधान और विकास विभाग के तहत प्रमुख एजेंसी है, जिस पर सेना के अनुसंधान और विकास का आरोप है।"
        }
    },
    {
        "question": {
            "en": "The first census in India during the British period was held during the tenure of which Viceroy?",
            "hi": "ब्रिटिश काल में भारत में पहली जनगणना किस वायसराय के कार्यकाल में हुई थी?"
        },
        "options": {
            "en": [ "Lord Dufferin", "Lord Lytton", "Lord Mayo", "Lord Ripon" ],
            "hi": [ "लॉर्ड डफरिन", "लॉर्ड लिटन", "लॉर्ड मेयो", "लॉर्ड रिपन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The first, non-synchronous census was conducted in 1872 during the time of Lord Mayo. The first synchronous census was taken in 1881 under Lord Ripon.",
            "hi": "पहली, गैर-तुल्यकालिक जनगणना 1872 में लॉर्ड मेयो के समय में आयोजित की गई थी। पहली तुल्यकालिक जनगणना 1881 में लॉर्ड रिपन के अधीन की गई थी।"
        }
    },
    {
        "question": {
            "en": "Which Article of the Constitution deals with the 'Right to Equality'?",
            "hi": "संविधान का कौन सा अनुच्छेद 'समानता के अधिकार' से संबंधित है?"
        },
        "options": {
            "en": [ "Article 19-22", "Article 14-18", "Article 23-24", "Article 25-28" ],
            "hi": [ "अनुच्छेद 19-22", "अनुच्छेद 14-18", "अनुच्छेद 23-24", "अनुच्छेद 25-28" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Articles 14 through 18 of the Indian Constitution collectively deal with the fundamental Right to Equality.",
            "hi": "भारतीय संविधान के अनुच्छेद 14 से 18 सामूहिक रूप से समानता के मौलिक अधिकार से संबंधित हैं।"
        }
    },
    {
        "question": {
            "en": "The Headquarters of the Eastern Command of the Indian Army is located at:",
            "hi": "भारतीय सेना के पूर्वी कमान का मुख्यालय कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Udhampur", "Pune", "Jaipur", "Kolkata" ],
            "hi": [ "उधमपुर", "पुणे", "जयपुर", "कोलकाता" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Eastern Command of the Indian Army is headquartered in Fort William, Kolkata.",
            "hi": "भारतीय सेना का पूर्वी कमान का मुख्यालय फोर्ट विलियम, कोलकाता में है।"
        }
    },
    {
        "question": {
            "en": "Who was the first woman to become a pilot in the Indian Air Force?",
            "hi": "भारतीय वायु सेना में पायलट बनने वाली पहली महिला कौन थीं?"
        },
        "options": {
            "en": [ "Gunjan Saxena", "Avani Chaturvedi", "Harita Kaur Deol", "Bhawana Kanth" ],
            "hi": [ "गुंजन सक्सेना", "अवनी चतुर्वेदी", "हरिता कौर देओल", "भावना कंठ" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Harita Kaur Deol became the first woman pilot to fly solo in the Indian Air Force in 1994.",
            "hi": "हरिता कौर देओल 1994 में भारतीय वायु सेना में अकेले उड़ान भरने वाली पहली महिला पायलट बनीं।"
        }
    },
    {
        "question": {
            "en": "What is the name of the light combat helicopter (LCH) of the Indian Air Force?",
            "hi": "भारतीय वायु सेना के हल्के लड़ाकू हेलीकॉप्टर (LCH) का क्या नाम है?"
        },
        "options": {
            "en": [ "Rudra", "Dhruv", "Prachand", "Chetak" ],
            "hi": [ "रुद्र", "ध्रुव", "प्रचंड", "चेतक" ]
        },
        "answer": 2,
        "explanation": {
            "en": "'Prachand' (meaning \"fierce\") is the name given to the indigenously developed Light Combat Helicopter.",
            "hi": "'प्रचंड' (जिसका अर्थ है \"भयंकर\") स्वदेशी रूप से विकसित हल्के लड़ाकू हेलीकॉप्टर को दिया गया नाम है।"
        }
    },
    {
        "question": {
            "en": "The Khajuraho group of temples in Madhya Pradesh were built by the rulers of which dynasty?",
            "hi": "मध्य प्रदेश में खजुराहो के मंदिर किस वंश के शासकों द्वारा बनवाए गए थे?"
        },
        "options": {
            "en": [ "Gupta", "Maurya", "Chandela", "Pala" ],
            "hi": [ "गुप्त", "मौर्य", "चंदेल", "पाल" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Khajuraho temples were built between 950 and 1050 AD by the Chandela dynasty.",
            "hi": "खजुराहो के मंदिर 950 और 1050 ईस्वी के बीच चंदेल वंश द्वारा बनवाए गए थे।"
        }
    },
    {
        "question": {
            "en": "What is the study of inscriptions called?",
            "hi": "शिलालेखों के अध्ययन को क्या कहा जाता है?"
        },
        "options": {
            "en": [ "Numismatics", "Epigraphy", "Paleography", "Cartography" ],
            "hi": [ "मुद्राशास्त्र", "पुरालेखशास्त्र", "पुरालेख", "मानचित्रण" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Epigraphy is the study and interpretation of inscriptions. Numismatics is the study of coins.",
            "hi": "पुरालेखशास्त्र शिलालेखों का अध्ययन और व्याख्या है। मुद्राशास्त्र सिक्कों का अध्ययन है।"
        }
    },
    {
        "question": {
            "en": "The National Defence Academy (NDA) is located at:",
            "hi": "राष्ट्रीय रक्षा अकादमी (NDA) कहाँ स्थित है:"
        },
        "options": {
            "en": [ "Dehradun", "Khadakwasla, Pune", "Gaya", "Wellington" ],
            "hi": [ "देहरादून", "खड़कवासला, पुणे", "गया", "वेलिंगटन" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The NDA is the joint services academy of the Indian Armed Forces, where cadets of the three services train together.",
            "hi": "NDA भारतीय सशस्त्र बलों की संयुक्त सेवा अकादमी है, जहाँ तीनों सेवाओं के कैडेट एक साथ प्रशिक्षण लेते हैं।"
        }
    },
    {
        "question": {
            "en": "Which of the following is an anti-tank guided missile?",
            "hi": "निम्नलिखित में से कौन सी एक टैंक रोधी निर्देशित मिसाइल है?"
        },
        "options": {
            "en": [ "Agni", "Prithvi", "Akash", "Nag" ],
            "hi": [ "अग्नि", "पृथ्वी", "आकाश", "नाग" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Nag missile is a third-generation, fire-and-forget, anti-tank guided missile developed by DRDO.",
            "hi": "नाग मिसाइल DRDO द्वारा विकसित एक तीसरी पीढ़ी की, दागो और भूल जाओ, टैंक रोधी निर्देशित मिसाइल है।"
        }
    },
    {
        "question": {
            "en": "The Rourkela Steel Plant was set up with the assistance of which country?",
            "hi": "राउरकेला इस्पात संयंत्र किस देश की सहायता से स्थापित किया गया था?"
        },
        "options": {
            "en": [ "USSR (Russia)", "United Kingdom", "USA", "West Germany" ],
            "hi": [ "यूएसएसआर (रूस)", "यूनाइटेड किंगडम", "यूएसए", "पश्चिम जर्मनी" ]
        },
        "answer": 3,
        "explanation": {
            "en": "The Rourkela Steel Plant in Odisha was set up in the 1950s in collaboration with a consortium of German companies.",
            "hi": "ओडिशा में राउरकेला इस्पात संयंत्र 1950 के दशक में जर्मन कंपनियों के एक संघ के सहयोग से स्थापित किया गया था।"
        }
    },
    {
        "question": {
            "en": "Who is known as the 'Lion of Punjab'?",
            "hi": "'पंजाब का शेर' किसे कहा जाता है?"
        },
        "options": {
            "en": [ "Bhagat Singh", "Maharaja Ranjit Singh", "Lala Lajpat Rai", "Kartar Singh Sarabha" ],
            "hi": [ "भगत सिंह", "महाराजा रणजीत सिंह", "लाला लाजपत राय", "करतार सिंह सराभा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Lala Lajpat Rai, a prominent nationalist leader, was popularly known as 'Punjab Kesari' or the 'Lion of Punjab'.",
            "hi": "लाला लाजपत राय, एक प्रमुख राष्ट्रवादी नेता, को 'पंजाब केसरी' या 'पंजाब का शेर' के नाम से जाना जाता था।"
        }
    },
    {
        "question": {
            "en": "The world's highest battlefield, Siachen, is part of which mountain range?",
            "hi": "दुनिया का सबसे ऊंचा युद्धक्षेत्र, सियाचिन, किस पर्वत श्रृंखला का हिस्सा है?"
        },
        "options": {
            "en": [ "Himalayas", "Pir Panjal", "Karakoram", "Zanskar" ],
            "hi": [ "हिमालय", "पीर पंजाल", "काराकोरम", "जांस्कर" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Siachen Glacier is located in the eastern Karakoram range in the Himalayas.",
            "hi": "सियाचिन ग्लेशियर हिमालय में पूर्वी काराकोरम रेंज में स्थित है।"
        }
    },
    {
        "question": {
            "en": "Which is the oldest paramilitary force in India?",
            "hi": "भारत में सबसे पुराना अर्धसैनिक बल कौन सा है?"
        },
        "options": {
            "en": [ "Border Security Force (BSF)", "Central Reserve Police Force (CRPF)", "Assam Rifles", "Indo-Tibetan Border Police (ITBP)" ],
            "hi": [ "सीमा सुरक्षा बल (BSF)", "केंद्रीय रिजर्व पुलिस बल (CRPF)", "असम राइफल्स", "भारत-तिब्बत सीमा पुलिस (ITBP)" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Assam Rifles, raised in 1835 as the 'Cachar Levy', is the oldest paramilitary force in India.",
            "hi": "असम राइफल्स, 1835 में 'कछार लेवी' के रूप में स्थापित, भारत का सबसे पुराना अर्धसैनिक बल है।"
        }
    },
    {
        "question": {
            "en": "The National Anthem of India, 'Jana Gana Mana', was first sung at the session of the Indian National Congress held in which city?",
            "hi": "भारत का राष्ट्रगान, 'जन गण मन', पहली बार भारतीय राष्ट्रीय कांग्रेस के किस शहर में आयोजित अधिवेशन में गाया गया था?"
        },
        "options": {
            "en": [ "Bombay", "Lahore", "Delhi", "Calcutta (Kolkata)" ],
            "hi": [ "बॉम्बे", "लाहौर", "दिल्ली", "कलकत्ता (कोलकाता)" ]
        },
        "answer": 3,
        "explanation": {
            "en": "It was first sung on December 27, 1911, at the Calcutta Session of the Indian National Congress.",
            "hi": "यह पहली बार 27 दिसंबर, 1911 को भारतीय राष्ट्रीय कांग्रेस के कलकत्ता अधिवेशन में गाया गया था।"
        }
    },
    {
        "question": {
            "en": "The \"Chipko Movement\" was primarily concerned with:",
            "hi": "\"चिपको आंदोलन\" मुख्य रूप से किससे संबंधित था:"
        },
        "options": {
            "en": [ "River water pollution", "Forest conservation", "Soil erosion", "Wildlife protection" ],
            "hi": [ "नदी जल प्रदूषण", "वन संरक्षण", "मृदा अपरदन", "वन्यजीव संरक्षण" ]
        },
        "answer": 1,
        "explanation": {
            "en": "The Chipko movement was a forest conservation movement in India where villagers, especially women, hugged trees to prevent them from being cut down.",
            "hi": "चिपको आंदोलन भारत में एक वन संरक्षण आंदोलन था जहाँ ग्रामीणों, विशेषकर महिलाओं ने पेड़ों को कटने से बचाने के लिए उन्हें गले लगा लिया।"
        }
    },
    {
        "question": {
            "en": "Who is often called the 'Napoleon of India' for his extensive military conquests?",
            "hi": "अपने व्यापक सैन्य विजयों के लिए किसे अक्सर 'भारत का नेपोलियन' कहा जाता है?"
        },
        "options": {
            "en": [ "Chandragupta Maurya", "Ashoka", "Samudragupta", "Harshavardhana" ],
            "hi": [ "चंद्रगुप्त मौर्य", "अशोक", "समुद्रगुप्त", "हर्षवर्धन" ]
        },
        "answer": 2,
        "explanation": {
            "en": "Samudragupta of the Gupta dynasty is renowned for his vast military campaigns, which are detailed in the Prayag Prashasti (Allahabad Pillar Inscription).",
            "hi": "गुप्त वंश के समुद्रगुप्त अपने विशाल सैन्य अभियानों के लिए प्रसिद्ध हैं, जिनका विवरण प्रयाग प्रशस्ति (इलाहाबाद स्तंभ शिलालेख) में दिया गया है।"
        }
    },
    {
        "question": {
            "en": "The 'Doctrine of Lapse' policy was most famously associated with which Governor-General?",
            "hi": "'व्यपगत का सिद्धांत' नीति सबसे प्रसिद्ध रूप से किस गवर्नर-जनरल से जुड़ी थी?"
        },
        "options": {
            "en": [ "Lord Curzon", "Lord Dalhousie", "Lord Canning", "Lord William Bentinck" ],
            "hi": [ "लॉर्ड कर्जन", "लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड विलियम बेंटिंक" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Lord Dalhousie widely implemented the Doctrine of Lapse, an annexation policy, to expand British territories in India.",
            "hi": "लॉर्ड डलहौजी ने भारत में ब्रिटिश क्षेत्रों का विस्तार करने के लिए व्यापक रूप से व्यपगत का सिद्धांत, एक विलय नीति, लागू किया।"
        }
    },
    {
        "question": {
            "en": "The famous slogan \"Swaraj is my birthright, and I shall have it!\" was given by whom?",
            "hi": "प्रसिद्ध नारा \"स्वराज मेरा जन्मसिद्ध अधिकार है, और मैं इसे लेकर रहूँगा!\" किसने दिया था?"
        },
        "options": {
            "en": [ "Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Subhas Chandra Bose" ],
            "hi": [ "महात्मा गांधी", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस" ]
        },
        "answer": 2,
        "explanation": {
            "en": "This powerful slogan was coined by Bal Gangadhar Tilak, a key figure in India's independence movement, to inspire a sense of self-rule among Indians.",
            "hi": "यह शक्तिशाली नारा बाल गंगाधर तिलक द्वारा गढ़ा गया था, जो भारत के स्वतंत्रता आंदोलन में एक प्रमुख व्यक्ति थे, ताकि भारतीयों में स्व-शासन की भावना को प्रेरित किया जा सके।"
        }
    },
    {
        "question": {
            "en": "Who was the first Indian to be elected to the British Parliament?",
            "hi": "ब्रिटिश संसद के लिए चुने जाने वाले पहले भारतीय कौन थे?"
        },
        "options": {
            "en": [ "W.C. Bonnerjee", "Dadabhai Naoroji", "Pherozeshah Mehta", "Surendranath Banerjee" ],
            "hi": [ "डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "फिरोजशाह मेहता", "सुरेंद्रनाथ बनर्जी" ]
        },
        "answer": 1,
        "explanation": {
            "en": "Dadabhai Naoroji, known as the \"Grand Old Man of India,\" was the first Indian to be elected as a Member of Parliament in the British House of Commons in 1892.",
            "hi": "दादाभाई नौरोजी, जिन्हें \"भारत के ग्रैंड ओल्ड मैन\" के रूप में जाना जाता है, 1892 में ब्रिटिश हाउस ऑफ कॉमन्स में संसद सदस्य के रूप में चुने जाने वाले पहले भारतीय थे।"
        }
    },
    {
        "question": {
            "en": "The Battle of Plassey in 1757 was fought between the British East India Company and whom?",
            "hi": "1757 में प्लासी की लड़ाई ब्रिटिश ईस्ट इंडिया कंपनी और किसके बीच लड़ी गई थी?"
        },
        "options": {
            "en": [ "Mir Qasim", "Tipu Sultan", "Siraj-ud-Daulah", "The Marathas" ],
            "hi": [ "मीर कासिम", "टीपू सुल्तान", "सिराज-उद-दौला", "मराठा" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The Battle of Plassey, a decisive victory for the British, was fought against Siraj-ud-Daulah, the Nawab of Bengal.",
            "hi": "प्लासी की लड़ाई, अंग्रेजों के लिए एक निर्णायक जीत, बंगाल के नवाब सिराज-उद-दौला के खिलाफ लड़ी गई थी।"
        }
    },
    {
        "question": {
            "en": "Who founded the 'Forward Bloc' party after resigning from the Indian National Congress?",
            "hi": "भारतीय राष्ट्रीय कांग्रेस से इस्तीफा देने के बाद 'फॉरवर्ड ब्लॉक' पार्टी की स्थापना किसने की?"
        },
        "options": {
            "en": [ "Sardar Vallabhbhai Patel", "Dr. Rajendra Prasad", "Subhas Chandra Bose", "C. Rajagopalachari" ],
            "hi": [ "सरदार वल्लभभाई पटेल", "डॉ. राजेंद्र प्रसाद", "सुभाष चंद्र बोस", "सी. राजगोपालाचारी" ]
        },
        "answer": 2,
        "explanation": {
            "en": "After resigning as the President of the Indian National Congress in 1939, Subhas Chandra Bose formed his own party, the All India Forward Bloc.",
            "hi": "1939 में भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष पद से इस्तीफा देने के बाद, सुभाष चंद्र बोस ने अपनी पार्टी, ऑल इंडिया फॉरवर्ड ब्लॉक का गठन किया।"
        }
    },
    {
        "question": {
            "en": "Who was the author of the famous book 'Geet Govinda'?",
            "hi": "प्रसिद्ध पुस्तक 'गीत गोविंद' के लेखक कौन थे?"
        },
        "options": {
            "en": [ "Kalidasa", "Tulsidas", "Jayadeva", "Valmiki" ],
            "hi": [ "कालिदास", "तुलसीदास", "जयदेव", "वाल्मीकि" ]
        },
        "answer": 2,
        "explanation": {
            "en": "The 'Geet Govinda' is a celebrated 12th-century Sanskrit poem composed by Jayadeva, focusing on the relationship between Krishna and the gopis of Vrindavan, particularly Radha.",
            "hi": "'गीत गोविंद' जयदेव द्वारा रचित 12वीं शताब्दी की एक प्रसिद्ध संस्कृत कविता है, जो कृष्ण और वृंदावन की गोपियों, विशेष रूप से राधा के बीच के संबंधों पर केंद्रित है।"
        }
    }
];
