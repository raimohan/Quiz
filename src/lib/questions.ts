export type Question = {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
};

const allGkQuestions: Question[] = [
    {
        "question": "India observes National Sports Day on whose birth anniversary?",
        "options": ["Milkha Singh", "Mansoor Ali Khan Pataudi", "Dhyan Chand", "Michael Ferreira"],
        "answer": 2,
        "explanation": "National Sports Day is celebrated on August 29th, the birthday of hockey legend Major Dhyan Chand, who is widely regarded as the greatest hockey player of all time."
    },
    {
        "question": "Which country is called the “Sugar Bowl of the World”?",
        "options": ["Cuba", "Italy", "India", "Japan"],
        "answer": 0,
        "explanation": "Cuba earned the nickname 'Sugar Bowl of the World' because, for a long period, it was the largest producer and exporter of sugar globally, with its economy heavily reliant on it."
    },
    {
        "question": "Avani Lekhara is famed for which sport?",
        "options": ["Table Tennis", "Cycling", "Shooting", "Boxing"],
        "answer": 2,
        "explanation": "Avani Lekhara is a celebrated Indian Paralympian who competes in rifle shooting. She made history by winning a gold medal at the Tokyo 2020 Paralympics."
    },
    {
        "question": "Which port is known as the “Gateway of Eastern India”?",
        "options": ["Kolkata Port", "Visakhapatnam Port", "Port Blair", "Paradip Port"],
        "answer": 0,
        "explanation": "The Kolkata Port (Syama Prasad Mookerjee Port) is called the 'Gateway of Eastern India' as it's a major riverine port serving the vast economic hinterland of eastern and north-eastern India."
    },
    {
        "question": "A major classical dance of Andhra Pradesh is:",
        "options": ["Kuchipudi", "Bharatanatyam", "Raaslila", "Bihu"],
        "answer": 0,
        "explanation": "Kuchipudi is a renowned classical dance form that originated in a village named Kuchipudi in the Krishna district of Andhra Pradesh, India."
    },
    {
        "question": "Which inspiring slogan is attributed to Subhas Chandra Bose?",
        "options": ["“Live as if you were to die tomorrow…”", "“Lose yourself in service…”", "“Give me blood and I will give you freedom.”", "“First they ignore you…”"],
        "answer": 2,
        "explanation": "“Give me blood and I will give you freedom” (Tum Mujhe Khoon Do, Main Tumhe Azadi Dunga) was a powerful slogan used by Subhas Chandra Bose to motivate the soldiers of the Indian National Army (INA)."
    },
    {
        "question": "The Swadeshi Movement began in response to the…",
        "options": ["Partition of Bengal", "Khilafat Movement", "Formation of Muslim League", "Non-cooperation Movement"],
        "answer": 0,
        "explanation": "The Swadeshi Movement was a major pre-independence movement started in 1905 as a direct protest against the British decision to partition Bengal."
    },
    {
        "question": "How many Tirthankaras are there in Jainism?",
        "options": ["12", "15", "24", "26"],
        "answer": 2,
        "explanation": "In Jainism, there are 24 Tirthankaras (spiritual teachers) in each half of the cosmic time cycle. Lord Mahavira was the 24th and last Tirthankara of the current era."
    },
    {
        "question": "The Suez Canal connects which bodies of water?",
        "options": ["Mediterranean & Red Sea", "Caspian & Aral Seas", "Red Sea & Nile River", "None of the above"],
        "answer": 0,
        "explanation": "The Suez Canal is a crucial artificial sea-level waterway in Egypt that connects the Mediterranean Sea to the Red Sea, significantly shortening trade routes between Europe and Asia."
    },
    {
        "question": "BrahMos is a type of…",
        "options": ["Short-range supersonic cruise missile", "Air‑defence gun", "Military satellite", "Multiple rocket launcher"],
        "answer": 0,
        "explanation": "BrahMos is a supersonic cruise missile developed as a joint venture between India's DRDO and Russia's NPO Mashinostroyeniya. It can be launched from submarines, ships, aircraft, or land."
    },
    {
        "question": "The term “Breaststroke” is used in which sport?",
        "options": ["Football", "Swimming", "Cricket", "Lawn Tennis"],
        "answer": 1,
        "explanation": "Breaststroke is one of the four main competitive swimming styles, characterized by the swimmer's chest being on the water and not rotated."
    },
    {
        "question": "Who founded the Brahmo Samaj?",
        "options": ["Keshab Chandra Sen", "Raja Rammohan Roy", "Devendranath Tagore", "Dayananda Saraswati"],
        "answer": 1,
        "explanation": "The Brahmo Samaj, a pivotal socio-religious reform movement, was founded in Calcutta in 1828 by Raja Rammohan Roy, a key figure in the Bengal Renaissance."
    },
    {
        "question": "The Widow Remarriage Act (1856) was passed during the tenure of?",
        "options": ["Lord Canning", "Lord Ripon", "Lord William Bentinck", "Lord Dalhousie"],
        "answer": 3,
        "explanation": "The Hindu Widows' Remarriage Act, 1856, was drafted during the tenure of Lord Dalhousie and was passed by his successor, Lord Canning."
    },
    {
        "question": "In which year was the Suez Canal officially opened?",
        "options": ["1856", "1869", "1875", "1882"],
        "answer": 1,
        "explanation": "After a decade of construction, the Suez Canal was officially opened for navigation on November 17, 1869."
    },
    {
        "question": "Which river names inspired the name “BrahMos”?",
        "options": ["Brahmaputra & Moskva", "Brahmaputra & Sewaro", "Brahmaputra & Oswego", "Brahmaputra & Moreau"],
        "answer": 0,
        "explanation": "The name BrahMos is a portmanteau formed from the names of two rivers: the Brahmaputra of India and the Moskva of Russia."
    },
    {
        "question": "“Give me blood…” message was given in which region?",
        "options": ["Tokyo", "Burma", "China", "London"],
        "answer": 1,
        "explanation": "Subhas Chandra Bose delivered this famous speech in 1944 in Burma (present-day Myanmar) to motivate the troops of the Indian National Army."
    },
    {
        "question": "Who scored India’s first gold in Paralympics?",
        "options": ["Deepa Malik", "Avani Lekhara", "Murlikant Petkar", "Devendra Jhajharia"],
        "answer": 2,
        "explanation": "While Avani Lekhara was the first Indian woman to win Paralympic gold, the first-ever Paralympic gold for India was won by Murlikant Petkar in swimming at the 1972 Heidelberg Games."
    },
    {
        "question": "Who is known as the “Wizard of Hockey”?",
        "options": ["Balbir Singh", "Dhanraj Pillay", "Major Dhyan Chand", "Hemanta Lakra"],
        "answer": 2,
        "explanation": "Major Dhyan Chand was nicknamed 'The Wizard' or 'The Magician' of hockey for his superb ball control and goal-scoring feats."
    },
    {
        "question": "Who was the first Indian woman to win an individual Olympic medal?",
        "options": ["Karnam Malleswari", "Saina Nehwal", "P.V. Sindhu", "Sakshi Malik"],
        "answer": 0,
        "explanation": "Karnam Malleswari created history by winning a bronze medal in weightlifting at the 2000 Sydney Olympics, becoming the first Indian woman to win an Olympic medal."
    },
    {
        "question": "What is the full form of DRDL?",
        "options": ["Differential Research & Documentation Lab", "Defence Research and Development Laboratory", "Department of Research & Development Lab", "None of the above"],
        "answer": 1,
        "explanation": "DRDL stands for Defence Research and Development Laboratory. It is a premier laboratory of DRDO located in Hyderabad, working on missile systems."
    },
    {
        "question": "Which country launched the world’s first 5G network?",
        "options": ["Japan", "China", "South Korea", "USA"],
        "answer": 2,
        "explanation": "In April 2019, South Korea became the first country in the world to launch a nationwide commercial 5G (fifth-generation) wireless network."
    },
    {
        "question": "What is the weak zone of the Earth's crust called?",
        "options": ["Seismic zone", "Cosmic zone", "Formic zone", "Anaemic zone"],
        "answer": 0,
        "explanation": "A seismic zone, or fault zone, is an area of the Earth's crust where tectonic plates meet. These zones are prone to earthquakes and other seismic activities."
    },
    {
        "question": "India’s first national museum of Indian cinema is located in:",
        "options": ["Delhi", "Hyderabad", "Rajasthan", "Mumbai"],
        "answer": 3,
        "explanation": "The National Museum of Indian Cinema (NMIC) is located in Mumbai, the city that is the heart of India's film industry, often known as Bollywood."
    },
    {
        "question": "Who was honoured with the Bharat Ratna in 2019?",
        "options": ["Lata Mangeshkar", "Asha Bhosle", "Bhupen Hazarika", "Manna Dey"],
        "answer": 2,
        "explanation": "In 2019, India's highest civilian award, the Bharat Ratna, was conferred upon social activist Nanaji Deshmukh (posthumously), singer-composer Bhupen Hazarika (posthumously), and former President Pranab Mukherjee."
    },
    {
        "question": "Which national leader edited the Marathi newspaper Kesari?",
        "options": ["Gopal Krishna Gokhale", "Dr. B.R. Ambedkar", "M.G. Ranade", "Bal Gangadhar Tilak"],
        "answer": 3,
        "explanation": "Kesari is a Marathi newspaper founded in 1881 by Lokmanya Bal Gangadhar Tilak, a prominent leader of the Indian Independence movement. He used it to voice nationalist sentiments."
    },
    {
        "question": "Which metal is extracted by smelting?",
        "options": ["Aluminium", "Magnesium", "Iron", "Silver"],
        "answer": 2,
        "explanation": "Smelting is a process of applying heat to an ore to extract a base metal. It is most prominently used to produce iron from its ore (iron oxide) in a blast furnace."
    },
    {
        "question": "What is the formula of calcium hydroxide?",
        "options": ["CaOH₂", "Ca₂OH", "Ca(OH)₂", "CaOH"],
        "answer": 2,
        "explanation": "The correct chemical formula for calcium hydroxide is Ca(OH)₂, representing one calcium ion (Ca²⁺) bonded to two hydroxide ions (OH⁻)."
    },
    {
        "question": "What is India’s ranking in the Global Firepower Index 2025?",
        "options": ["2nd", "3rd", "4th", "5th"],
        "answer": 2,
        "explanation": "India consistently ranks as the 4th most powerful military in the world according to the Global Firepower Index, which assesses military strength based on multiple factors."
    },
    {
        "question": "Where is the Army Airborne Training School located?",
        "options": ["Agra", "Mumbai", "Pune", "Nagpur"],
        "answer": 0,
        "explanation": "The Indian Army's Airborne Training School (AATS), which trains paratroopers, is located in Agra, Uttar Pradesh."
    },
    {
        "question": "Which country will become the 32nd NATO member?",
        "options": ["Qatar", "Oman", "Hungary", "Sweden"],
        "answer": 3,
        "explanation": "Sweden officially joined the North Atlantic Treaty Organization (NATO) in March 2024, becoming its 32nd member."
    },
    {
        "question": "What does INTERPOL stand for?",
        "options": ["International Criminal Pole", "International Create Police", "International Criminal Police Organization", "None"],
        "answer": 2,
        "explanation": "INTERPOL stands for the International Criminal Police Organization. It is an inter-governmental organization facilitating worldwide police cooperation."
    },
    {
        "question": "Ex ‘Varuna’ is a bilateral exercise between India and which country?",
        "options": ["Japan", "Sri Lanka", "France", "Australia"],
        "answer": 2,
        "explanation": "'Varuna' is the name of the long-standing bilateral naval exercise conducted between the Indian Navy and the French Navy."
    },
    {
        "question": "What does AEW&C stand for?",
        "options": ["Airborne Early Warning and Center System", "Airborne East Warning and Control System", "Airborne Early Warning and Control System", "None of the above"],
        "answer": 2,
        "explanation": "AEW&C stands for Airborne Early Warning and Control System. It is an airborne radar picket system designed to detect aircraft, ships and vehicles at long ranges."
    },
    {
        "question": "Which day is observed as Kokborok Day in Tripura?",
        "options": ["Jan 18", "Jan 19", "Jan 20", "Jan 21"],
        "answer": 1,
        "explanation": "Kokborok Day is observed in the state of Tripura on January 19th every year to celebrate the development of Kokborok as an official language."
    },
    {
        "question": "PM JANMAN scheme is associated with which group?",
        "options": ["MSME Owners", "Farmers", "Particularly Vulnerable Tribal Groups", "NRIs"],
        "answer": 2,
        "explanation": "The PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) scheme is a central government initiative aimed at the socio-economic development of Particularly Vulnerable Tribal Groups (PVTGs)."
    },
    {
        "question": "Which country pulled out of the Paris Climate Agreement?",
        "options": ["France", "Germany", "USA", "None"],
        "answer": 2,
        "explanation": "The United States, under the Trump administration, formally withdrew from the Paris Agreement on climate change in 2020. It has since rejoined."
    },
    {
        "question": "Which three states received full statehood on 21 Jan 1972?",
        "options": ["Nagaland, Manipur, Tripura", "Tripura, Manipur, Meghalaya", "Assam, Manipur, Mizoram", "Sikkim, Meghalaya, Tripura"],
        "answer": 1,
        "explanation": "On January 21, 1972, Tripura, Manipur, and Meghalaya became full-fledged states under the North Eastern Region (Re-organisation) Act, 1971."
    },
    {
        "question": "What weapon counters swarm drones?",
        "options": ["Bhargavastra", "Agni", "Vayu", "Saryu"],
        "answer": 0,
        "explanation": "Project Bhargavastra is reportedly an indigenous anti-drone system being developed by India's DRDO to detect, track, and neutralize hostile drone swarms."
    },
    {
        "question": "Which day is National Milk Day observed?",
        "options": ["Dec 25", "Dec 26", "Nov 26", "Nov 25"],
        "answer": 2,
        "explanation": "India celebrates National Milk Day on November 26th to commemorate the birth anniversary of Dr. Verghese Kurien, the 'Father of the White Revolution in India'."
    },
    {
        "question": "Who is called the ‘Father of Green Revolution in India’?",
        "options": ["M.S. Swaminathan", "Verghese Kurien", "Vikram Sarabhai", "Norman Borlaug"],
        "answer": 0,
        "explanation": "Dr. M.S. Swaminathan, an eminent agricultural scientist, is hailed as the 'Father of the Green Revolution in India' for his leadership in introducing high-yielding varieties of wheat and rice."
    },
    {
        "question": "Who founded the Indian National Army (INA)?",
        "options": ["Subhas Chandra Bose", "Rash Bihari Bose", "Capt Mohan Singh", "Major Fujiwara"],
        "answer": 2,
        "explanation": "The first Indian National Army (INA) was conceptualized and founded by Captain Mohan Singh in 1942 in Southeast Asia during WWII. It was later revived and led by Subhas Chandra Bose."
    },
    {
        "question": "What does the “Blue Revolution” refer to?",
        "options": ["Fish production", "Food grain production", "Oil production", "Milk production"],
        "answer": 0,
        "explanation": "The 'Blue Revolution' refers to the emergence of aquaculture as a significant and highly productive agricultural activity. It is focused on increasing fish production."
    },
    {
        "question": "The Territorial Army was established in which year?",
        "options": ["1962", "1949", "1920", "1953"],
        "answer": 1,
        "explanation": "The Territorial Army (TA), a second line of defence after the Regular Indian Army, was formally inaugurated by the first Indian Governor-General, C. Rajagopalachari, on October 9, 1949."
    },
    {
        "question": "How many Vedas are there in Hinduism?",
        "options": ["2", "3", "4", "5"],
        "answer": 2,
        "explanation": "There are four Vedas in Hinduism: the Rigveda, the Samaveda, the Yajurveda, and the Atharvaveda. They are the oldest scriptures of Hinduism."
    },
    {
        "question": "Where was Gautam Buddha born?",
        "options": ["Kushinagar", "Lumbini", "Bodh Gaya", "Sarnath"],
        "answer": 1,
        "explanation": "Gautam Buddha was born in Lumbini, which is located in modern-day Nepal. Bodh Gaya is where he attained enlightenment, and Sarnath is where he gave his first sermon."
    },
    {
        "question": "Who founded the Gupta dynasty?",
        "options": ["Samudragupta", "Chandragupta I", "Kumaragupta", "Skandagupta"],
        "answer": 1,
        "explanation": "The Gupta dynasty was founded by Chandragupta I, who established a powerful empire in ancient India. Samudragupta was his son and a great conqueror."
    },
    {
        "question": "What is the capital of Bhutan?",
        "options": ["Kathmandu", "Thimphu", "Dhaka", "Yangon"],
        "answer": 1,
        "explanation": "Thimphu is the capital and largest city of the Kingdom of Bhutan. Kathmandu is the capital of Nepal, and Dhaka is the capital of Bangladesh."
    },
    {
        "question": "Bhakra Nangal Dam is built on which river?",
        "options": ["Ganga", "Yamuna", "Sutlej", "Narmada"],
        "answer": 2,
        "explanation": "The Bhakra Nangal Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh. It forms the Gobind Sagar reservoir."
    },
    {
        "question": "Agriculture belongs to which sector of the economy?",
        "options": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "answer": 0,
        "explanation": "The primary sector of the economy involves the extraction and harvesting of natural products from the earth, such as agriculture, fishing, and mining."
    },
    {
        "question": "Who is the Chairman of NITI Aayog?",
        "options": ["President of India", "Vice President", "Prime Minister", "Finance Minister"],
        "answer": 2,
        "explanation": "The Prime Minister of India is the ex-officio Chairman of NITI Aayog (National Institution for Transforming India), which is the premier policy think tank of the Indian government."
    },
    {
        "question": "Who was the first Home Minister of India?",
        "options": ["Rajendra Prasad", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
        "answer": 1,
        "explanation": "Sardar Vallabhbhai Patel served as the first Deputy Prime Minister and the first Home Minister of independent India."
    },
    {
        "question": "From which country has India borrowed the concept of Fundamental Rights?",
        "options": ["USA", "UK", "Russia", "France"],
        "answer": 0,
        "explanation": "The concept of Fundamental Rights in the Indian Constitution was borrowed from the Constitution of the United States of America (Bill of Rights)."
    },
    {
        "question": "Who was the first woman IPS officer of India?",
        "options": ["Kiran Bedi", "Indira Gandhi", "Sarojini Naidu", "Aruna Asaf Ali"],
        "answer": 0,
        "explanation": "Kiran Bedi became the first woman Indian Police Service (IPS) officer in India in 1972 and served for 35 years."
    },
    {
        "question": "Where is the headquarters of the United Nations?",
        "options": ["Geneva", "Paris", "Washington D.C.", "New York"],
        "answer": 3,
        "explanation": "The headquarters of the United Nations is located in New York City, USA. Geneva hosts many UN offices but is not the main headquarters."
    },
    {
        "question": "Where is the Taj Mahal located?",
        "options": ["Delhi", "Jaipur", "Agra", "Varanasi"],
        "answer": 2,
        "explanation": "The Taj Mahal, a UNESCO World Heritage site, is located on the south bank of the Yamuna river in the Indian city of Agra."
    },
    {
        "question": "What is the title used for the head of the Indian Army?",
        "options": ["Field Marshal", "Commander-in-Chief", "Chief of the Army Staff", "General of India"],
        "answer": 2,
        "explanation": "The head of the Indian Army holds the rank of General and is known as the Chief of the Army Staff (COAS)."
    },
    {
        "question": "Who wrote 'Gitanjali'?",
        "options": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Subramania Bharati"],
        "answer": 1,
        "explanation": "'Gitanjali' (Song Offerings) is a collection of poems by Rabindranath Tagore, for which he won the Nobel Prize in Literature in 1913."
    },
    {
        "question": "The 'Harimau Shakti' military exercise is conducted between India and which country?",
        "options": ["Indonesia", "Malaysia", "Sri Lanka", "Myanmar"],
        "answer": 1,
        "explanation": "Exercise 'Harimau Shakti' is an annual joint military exercise between the Indian Army and the Malaysian Army to enhance interoperability."
    },
    {
        "question": "Lothal is located in which Indian state?",
        "options": ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
        "answer": 1,
        "explanation": "Lothal was one of the southernmost cities of the ancient Indus Valley Civilization and its archaeological site is located in the Bhal region of modern-day Gujarat."
    },
    {
        "question": "Who was the Viceroy of India during the Non-Cooperation Movement?",
        "options": ["Lord Irwin", "Lord Reading", "Lord Curzon", "Lord Mountbatten"],
        "answer": 1,
        "explanation": "The Non-Cooperation Movement took place from 1920 to 1922. Lord Reading served as the Viceroy of India during the later phase of this movement, from 1921 to 1926."
    },
    {
        "question": "What does 'MP' stand for in Indian Parliament?",
        "options": ["Minister of Parliament", "Member of Panchayat", "Member of Parliament", "Military Personnel"],
        "answer": 2,
        "explanation": "'MP' stands for Member of Parliament, which is a person elected to represent their constituency in the Parliament of India (either Lok Sabha or Rajya Sabha)."
    },
    {
        "question": "What is meant by 'Sex Ratio'?",
        "options": ["No. of children per family", "No. of males per 1000 females", "No. of females per 1000 males", "Population density"],
        "answer": 2,
        "explanation": "In India, the Sex Ratio is defined as the number of females per 1000 males in the population. It is an important social indicator."
    },
    {
        "question": "Which is the largest inland saline lake in India?",
        "options": ["Sambhar Lake", "Chilika Lake", "Pulicat Lake", "Wular Lake"],
        "answer": 0,
        "explanation": "Sambhar Salt Lake, located in Rajasthan, is India's largest inland saline water lake. Chilika Lake is the largest coastal lagoon (brackish water), not inland saline."
    },
    {
        "question": "On which river is Agra situated?",
        "options": ["Ganga", "Yamuna", "Chambal", "Betwa"],
        "answer": 1,
        "explanation": "The city of Agra, home to the Taj Mahal, is situated on the banks of the Yamuna River."
    },
    {
        "question": "Which scheme recruits youth into the Armed Forces?",
        "options": ["Make in India", "Skill India", "Agnipath Scheme", "Ayushman Bharat"],
        "answer": 2,
        "explanation": "The Agnipath Scheme is the recruitment process for individuals to serve in the Indian Armed Forces as 'Agniveers' for a period of four years."
    },
    {
        "question": "Who wrote the ancient play 'Mudrarakshasa'?",
        "options": ["Kalidasa", "Vishakhadatta", "Bhavabhuti", "Bhasa"],
        "answer": 1,
        "explanation": "'Mudrarakshasa' is a historical play in Sanskrit by the ancient Indian playwright Vishakhadatta that narrates the ascent of King Chandragupta Maurya to power."
    },
    {
        "question": "Where is the famous Somnath Temple located?",
        "options": ["Rajasthan", "Maharashtra", "Gujarat", "Madhya Pradesh"],
        "answer": 2,
        "explanation": "The Somnath Temple, one of the twelve jyotirlinga shrines of Lord Shiva, is located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat."
    },
    {
        "question": "Where was Saint Kabir born?",
        "options": ["Varanasi", "Ayodhya", "Haridwar", "Prayagraj"],
        "answer": 0,
        "explanation": "Saint Kabir, the 15th-century mystic poet, was born in the city of Varanasi (also known as Kashi), Uttar Pradesh."
    },
    {
        "question": "Who founded the Mughal Empire?",
        "options": ["Humayun", "Akbar", "Babur", "Aurangzeb"],
        "answer": 2,
        "explanation": "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi in the First Battle of Panipat."
    },
    {
        "question": "Who presided over the Lahore Congress session in 1929?",
        "options": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bal Gangadhar Tilak"],
        "answer": 0,
        "explanation": "Jawaharlal Nehru presided over the historic Lahore session of the Indian National Congress in 1929, where the resolution for 'Purna Swaraj' (complete independence) was passed."
    },
    {
        "question": "Who chaired the first meeting of the Indian National Congress?",
        "options": ["Mahatma Gandhi", "W.C. Bonnerjee", "Dadabhai Naoroji", "S.N. Banerjee"],
        "answer": 1,
        "explanation": "The first session of the Indian National Congress was held in Bombay in 1885 and was presided over by Womesh Chunder Bonnerjee."
    },
    {
        "question": "Who wrote 'Sare Jahan Se Accha'?",
        "options": ["Rabindranath Tagore", "Muhammad Iqbal", "Bankim Chandra Chattopadhyay", "Subramania Bharati"],
        "answer": 1,
        "explanation": "'Sare Jahan Se Accha,' formally known as 'Tarānah-e-Hindi', is an Urdu patriotic song written by the poet Muhammad Iqbal."
    },
    {
        "question": "Which Article allows joint sessions of Parliament?",
        "options": ["Article 352", "Article 370", "Article 108", "Article 80"],
        "answer": 2,
        "explanation": "Article 108 of the Indian Constitution provides for a joint sitting of both Houses of Parliament (Lok Sabha and Rajya Sabha) to resolve a deadlock on a bill."
    },
    {
        "question": "Who is known as the 'Missile Man of India'?",
        "options": ["Pranab Mukherjee", "A.P.J. Abdul Kalam", "Zakir Hussain", "R. Venkataraman"],
        "answer": 1,
        "explanation": "Dr. A.P.J. Abdul Kalam, the 11th President of India, is popularly known as the 'Missile Man of India' for his pivotal role in developing India's missile and nuclear weapons programs."
    },
    {
        "question": "What is the Upper House of India's Parliament called?",
        "options": ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "High Court"],
        "answer": 1,
        "explanation": "The Rajya Sabha (Council of States) is the Upper House of the Parliament of India. The Lok Sabha (House of the People) is the Lower House."
    },
    {
        "question": "Who was the first female judge of the Supreme Court of India?",
        "options": ["Ruma Pal", "Fatima Beevi", "Leila Seth", "Anna Chandy"],
        "answer": 1,
        "explanation": "Justice M. Fathima Beevi became the first female judge to be appointed to the Supreme Court of India in 1989. Leila Seth was the first female chief justice of a state high court."
    },
    {
        "question": "Who is often called the 'Napoleon of India' for his extensive military conquests?",
        "options": ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Harshavardhana"],
        "answer": 2,
        "explanation": "Samudragupta of the Gupta dynasty is renowned for his vast military campaigns, which are detailed in the Prayag Prashasti (Allahabad Pillar Inscription)."
    },
    {
        "question": "The 'Doctrine of Lapse' policy was most famously associated with which Governor-General?",
        "options": ["Lord Curzon", "Lord Dalhousie", "Lord Canning", "Lord William Bentinck"],
        "answer": 1,
        "explanation": "Lord Dalhousie widely implemented the Doctrine of Lapse, an annexation policy, to expand British territories in India."
    },
    {
        "question": "The famous slogan \"Swaraj is my birthright, and I shall have it!\" was given by whom?",
        "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Subhas Chandra Bose"],
        "answer": 2,
        "explanation": "This powerful slogan was coined by Bal Gangadhar Tilak, a key figure in India's independence movement, to inspire a sense of self-rule among Indians."
    },
    {
        "question": "Who was the first Indian to be elected to the British Parliament?",
        "options": ["W.C. Bonnerjee", "Dadabhai Naoroji", "Pherozeshah Mehta", "Surendranath Banerjee"],
        "answer": 1,
        "explanation": "Dadabhai Naoroji, known as the \"Grand Old Man of India,\" was the first Indian to be elected as a Member of Parliament in the British House of Commons in 1892."
    },
    {
        "question": "The Battle of Plassey in 1757 was fought between the British East India Company and whom?",
        "options": ["Mir Qasim", "Tipu Sultan", "Siraj-ud-Daulah", "The Marathas"],
        "answer": 2,
        "explanation": "The Battle of Plassey, a decisive victory for the British, was fought against Siraj-ud-Daulah, the Nawab of Bengal."
    },
    {
        "question": "Who founded the 'Forward Bloc' party after resigning from the Indian National Congress?",
        "options": ["Sardar Vallabhbhai Patel", "Dr. Rajendra Prasad", "Subhas Chandra Bose", "C. Rajagopalachari"],
        "answer": 2,
        "explanation": "After resigning as the President of the Indian National Congress in 1939, Subhas Chandra Bose formed his own party, the All India Forward Bloc."
    },
    {
        "question": "Who was the first Indian Governor-General of independent India?",
        "options": ["Lord Mountbatten", "Dr. Rajendra Prasad", "C. Rajagopalachari", "Jawaharlal Nehru"],
        "answer": 2,
        "explanation": "While Lord Mountbatten was the last Viceroy and first Governor-General of a newly independent India, C. Rajagopalachari was the first (and only) Indian to hold the position."
    },
    {
        "question": "The ancient city of 'Pataliputra' is the modern-day equivalent of which city?",
        "options": ["Varanasi", "Lucknow", "Patna", "Allahabad (Prayagraj)"],
        "answer": 2,
        "explanation": "Pataliputra, the capital of major empires like the Mauryan and Gupta, was located at the confluence of the Son and Ganges rivers, where modern-day Patna stands."
    },
    {
        "question": "Who was the author of the famous book 'Geet Govinda'?",
        "options": ["Kalidasa", "Tulsidas", "Jayadeva", "Valmiki"],
        "answer": 2,
        "explanation": "The 'Geet Govinda' is a celebrated 12th-century Sanskrit poem composed by Jayadeva, focusing on the relationship between Krishna and the gopis of Vrindavan, particularly Radha."
    },
    {
        "question": "The Jallianwala Bagh massacre took place in which city?",
        "options": ["Lahore", "Delhi", "Amritsar", "Jalandhar"],
        "answer": 2,
        "explanation": "The infamous Jallianwala Bagh massacre occurred on April 13, 1919, in Amritsar, Punjab, where British troops fired on a large crowd of unarmed Indians."
    },
    {
        "question": "Which Indian state has the longest coastline?",
        "options": ["Andhra Pradesh", "Tamil Nadu", "Maharashtra", "Gujarat"],
        "answer": 3,
        "explanation": "With a coastline of about 1,600 kilometers, Gujarat has the longest mainland coastline in India."
    },
    {
        "question": "The Sundarbans, the world's largest mangrove forest, is located in the delta of which two rivers?",
        "options": ["Godavari and Krishna", "Ganga and Brahmaputra", "Narmada and Tapti", "Mahanadi and Godavari"],
        "answer": 1,
        "explanation": "The Sundarbans delta is formed by the confluence of the Ganga, Brahmaputra, and Meghna Rivers in the Bay of Bengal."
    },
    {
        "question": "Which of the following is the longest river that flows entirely within India?",
        "options": ["Ganga", "Narmada", "Godavari", "Brahmaputra"],
        "answer": 2,
        "explanation": "While the Ganga is longer overall, a significant portion of it flows through Bangladesh. The Godavari is the longest river with its entire course within the borders of India."
    },
    {
        "question": "The Deccan Plateau is primarily made of what type of rock?",
        "options": ["Sandstone", "Limestone", "Granite", "Basalt"],
        "answer": 3,
        "explanation": "The Deccan Plateau is a large igneous province, meaning it is composed of solidified volcanic lava, which is basaltic rock."
    },
    {
        "question": "Which Indian state is known as the 'Spice Garden of India'?",
        "options": ["Karnataka", "Kerala", "Tamil Nadu", "Assam"],
        "answer": 1,
        "explanation": "Kerala's unique climate and geography make it ideal for growing a wide variety of spices like pepper, cardamom, cloves, and nutmeg, earning it this title."
    },
    {
        "question": "The Booker Prize is awarded in the field of:",
        "options": ["Science", "Fiction Literature", "Journalism", "Social Service"],
        "answer": 1,
        "explanation": "The Booker Prize is a prestigious literary award conferred each year for the best novel written in English and published in the UK or Ireland."
    },
    {
        "question": "Who is the author of the book \"Wings of Fire\"?",
        "options": ["Jawaharlal Nehru", "Mahatma Gandhi", "A.P.J. Abdul Kalam", "Vikram Seth"],
        "answer": 2,
        "explanation": "Wings of Fire is the autobiography of Dr. A.P.J. Abdul Kalam, former President of India."
    },
    {
        "question": "The Pulitzer Prize is primarily associated with which field?",
        "options": ["Music", "Film", "Sports", "Journalism"],
        "answer": 3,
        "explanation": "The Pulitzer Prize is an award for achievements in newspaper, magazine, and online journalism, literature, and musical composition within the United States."
    },
    {
        "question": "Who was the first Indian to receive the Nobel Prize?",
        "options": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
        "answer": 1,
        "explanation": "Rabindranath Tagore was the first Indian (and the first non-European) to be awarded the Nobel Prize in Literature in 1913 for his work 'Gitanjali'."
    },
    {
        "question": "The \"Saraswati Samman\" is an annual award for outstanding prose or poetry in which languages?",
        "options": ["Only Hindi", "Any of the 22 languages of India listed in Schedule VIII of the Constitution", "Only Sanskrit", "English and Hindi"],
        "answer": 1,
        "explanation": "It is an annual award for outstanding literary work in any of the 22 languages of India listed in Schedule VIII of the Constitution."
    },
    {
        "question": "Who is known as the father of Economics?",
        "options": ["John Maynard Keynes", "Karl Marx", "Adam Smith", "Amartya Sen"],
        "answer": 2,
        "explanation": "Adam Smith, a Scottish economist and philosopher, is widely regarded as the father of modern economics for his work \"The Wealth of Nations\"."
    },
    {
        "question": "The Goods and Services Tax (GST) in India was introduced by which constitutional amendment?",
        "options": ["100th Amendment Act", "101st Amendment Act", "102nd Amendment Act", "99th Amendment Act"],
        "answer": 1,
        "explanation": "The 101st Constitutional Amendment Act, 2016, paved the way for the introduction of the Goods and Services Tax in India."
    },
    {
        "question": "Which body is responsible for regulating the insurance sector in India?",
        "options": ["RBI (Reserve Bank of India)", "SEBI (Securities and Exchange Board of India)", "IRDAI (Insurance Regulatory and Development Authority of India)", "PFRDA (Pension Fund Regulatory and Development Authority)"],
        "answer": 2,
        "explanation": "IRDAI is the autonomous, statutory body tasked with regulating and promoting the insurance and re-insurance industries in India."
    },
    {
        "question": "The power of the President of India to grant pardons is specified under which Article?",
        "options": ["Article 61", "Article 72", "Article 76", "Article 123"],
        "answer": 1,
        "explanation": "Article 72 of the Indian Constitution empowers the President to grant pardons, reprieves, respites, or remissions of punishment."
    },
    {
        "question": "Who was the first Finance Minister of Independent India?",
        "options": ["C.D. Deshmukh", "John Mathai", "Liaquat Ali Khan", "R. K. Shanmukham Chetty"],
        "answer": 3,
        "explanation": "R. K. Shanmukham Chetty presented the first budget of independent India on November 26, 1947."
    },
    {
        "question": "The concept of 'Concurrent List' in the Indian Constitution was borrowed from which country?",
        "options": ["Canada", "Australia", "Germany", "Ireland"],
        "answer": 1,
        "explanation": "The provision for the 'Concurrent List', where both Union and State governments can make laws, was adopted from the Constitution of Australia."
    },
    {
        "question": "What is the main objective of the 'UDAN' scheme launched by the Government of India?",
        "options": ["To provide electricity to all villages", "To make air travel affordable for the common citizen", "To provide digital literacy", "To build national highways"],
        "answer": 1,
        "explanation": "UDAN (Ude Desh ka Aam Naagrik) is a regional connectivity scheme aimed at developing regional airports and making air travel accessible."
    },
    {
        "question": "Who administers the oath of office to the Governor of a state?",
        "options": ["The President of India", "The Chief Minister of the state", "The Chief Justice of the concerned State High Court", "The Vice President of India"],
        "answer": 2,
        "explanation": "The oath to the Governor is administered by the Chief Justice of the High Court of that state, or in their absence, the senior-most judge available."
    },
    {
        "question": "The term 'Fiscal Deficit' means:",
        "options": ["Total revenue minus total expenditure", "The government's total borrowings", "Revenue deficit plus capital expenditure", "The difference between what the government earns and its total expenditure"],
        "answer": 1,
        "explanation": "Fiscal deficit is the difference between the government's total expenditure and its total receipts (excluding borrowings), indicating the total amount of borrowing required."
    },
    {
        "question": "The National Flag of India was adopted by the Constituent Assembly on:",
        "options": ["August 15, 1947", "January 26, 1950", "July 22, 1947", "August 9, 1946"],
        "answer": 2,
        "explanation": "The design of the National Flag of India was adopted by the Constituent Assembly of India on 22 July 1947."
    },
    {
        "question": "Who built the famous 'Hawa Mahal' in Jaipur?",
        "options": ["Maharaja Jai Singh", "Maharaja Man Singh", "Maharaja Sawai Pratap Singh", "Maharaja Ram Singh"],
        "answer": 2,
        "explanation": "The Hawa Mahal was built in 1799 by Maharaja Sawai Pratap Singh to enable the royal women to observe street festivities unseen."
    },
    {
        "question": "The Battle of Haldighati was fought between Maharana Pratap and the forces of which Mughal emperor?",
        "options": ["Babur", "Humayun", "Akbar", "Jahangir"],
        "answer": 2,
        "explanation": "The Battle of Haldighati was fought on 18 June 1576 between the cavalry and archers supporting the Rana of Mewar, Maharana Pratap, and the Mughal emperor Akbar's forces."
    },
    {
        "question": "The 'Sun Temple' at Konark is located in which state?",
        "options": ["Tamil Nadu", "Odisha", "Andhra Pradesh", "Karnataka"],
        "answer": 1,
        "explanation": "The Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India."
    },
    {
        "question": "Who was the founder of the 'Saka Era' which is used in the Indian national calendar?",
        "options": ["Ashoka", "Vikramaditya", "Kanishka", "Chandragupta I"],
        "answer": 2,
        "explanation": "The Saka era is believed to have been founded by King Kanishka of the Kushan dynasty in 78 AD."
    },
    {
        "question": "The famous classical dance form 'Mohiniyattam' originated from which state?",
        "options": ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
        "answer": 2,
        "explanation": "Mohiniyattam is a graceful classical dance form from Kerala, traditionally performed by women."
    },
    {
        "question": "Who wrote the famous Sanskrit play 'Shakuntala'?",
        "options": ["Tulsidas", "Valmiki", "Kalidasa", "Vishakhadatta"],
        "answer": 2,
        "explanation": "'Abhijnanasakuntalam', popularly known as 'Shakuntala', is a renowned Sanskrit play by the ancient Indian poet Kalidasa."
    },
    {
        "question": "The 'Vijay Stambha' (Tower of Victory) is located in which fort?",
        "options": ["Mehrangarh Fort", "Chittorgarh Fort", "Amer Fort", "Gwalior Fort"],
        "answer": 1,
        "explanation": "The Vijay Stambha is an imposing victory monument located within Chittor Fort in Chittorgarh, Rajasthan, built by Rana Kumbha to commemorate his victory over Mahmud Khilji."
    },
    {
        "question": "The 'Simon Commission' was boycotted by Indians because:",
        "options": ["It was appointed before the stipulated time", "It did not include any Indian member", "It proposed the partition of India", "It was against granting any reforms"],
        "answer": 1,
        "explanation": "The Simon Commission was boycotted because it was an all-British commission with no Indian representation, which was seen as an insult to India's self-respect."
    },
    {
        "question": "The ancient site of 'Kalibangan', known for its Indus Valley Civilization remains, is in which state?",
        "options": ["Gujarat", "Punjab", "Haryana", "Rajasthan"],
        "answer": 3,
        "explanation": "Kalibangan is an archaeological site in the Hanumangarh district of Rajasthan, where remains of both Pre-Harappan and Harappan settlements have been found."
    },
    {
        "question": "Who was the first Tirthankara of Jainism?",
        "options": ["Mahavira", "Parshvanatha", "Rishabhanatha (Adinatha)", "Ajitanatha"],
        "answer": 2,
        "explanation": "Rishabhanatha, also known as Adinatha, is considered the first of the 24 Tirthankaras in the Jain tradition."
    },
    {
        "question": "Which city is known as the 'Manchester of India'?",
        "options": ["Mumbai", "Surat", "Ahmedabad", "Kanpur"],
        "answer": 2,
        "explanation": "Ahmedabad was historically known as the 'Manchester of India' due to its flourishing cotton textile industry, similar to Manchester in England."
    },
    {
        "question": "The 'Kanchenjunga' peak, the third highest in the world, is located in which state?",
        "options": ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
        "answer": 2,
        "explanation": "Kanchenjunga lies on the border between Sikkim state, northeastern India, and eastern Nepal."
    },
    {
        "question": "Which river originates from the Amarkantak Plateau?",
        "options": ["Mahanadi", "Godavari", "Narmada", "Krishna"],
        "answer": 2,
        "explanation": "The Narmada River, along with the Son and Johila rivers, originates from the Amarkantak Plateau in Madhya Pradesh."
    },
    {
        "question": "The 'Sariska Tiger Reserve' is located in which state?",
        "options": ["Madhya Pradesh", "Rajasthan", "Uttarakhand", "Maharashtra"],
        "answer": 1,
        "explanation": "Sariska Tiger Reserve is a national park and tiger reserve located in the Alwar district of the state of Rajasthan, India."
    },
    {
        "question": "Which of the following cities is NOT located on the banks of the river Ganga?",
        "options": ["Kanpur", "Patna", "Varanasi", "Lucknow"],
        "answer": 3,
        "explanation": "Lucknow is situated on the banks of the Gomti River, while Kanpur, Patna, and Varanasi are major cities located on the Ganga."
    },
    {
        "question": "The 'Dhuandhar Falls' are formed by which river?",
        "options": ["Tapti", "Chambal", "Narmada", "Sabarmati"],
        "answer": 2,
        "explanation": "The Dhuandhar Falls are located on the Narmada River in Bhedaghat, Jabalpur district, Madhya Pradesh."
    },
    {
        "question": "What is the name of the strait that separates the Andaman and Nicobar Islands?",
        "options": ["Palk Strait", "Duncan Passage", "Ten Degree Channel", "Eight Degree Channel"],
        "answer": 2,
        "explanation": "The Ten Degree Channel separates the Andaman Islands and the Nicobar Islands from each other in the Bay of Bengal."
    },
    {
        "question": "Which state in India has the highest forest cover as a percentage of its total geographical area?",
        "options": ["Arunachal Pradesh", "Mizoram", "Madhya Pradesh", "Nagaland"],
        "answer": 1,
        "explanation": "According to the India State of Forest Report (ISFR) 2021, Mizoram has the highest forest cover as a percentage of its area (over 84%)."
    },
    {
        "question": "The 'Nathula Pass' connects India with which neighboring country?",
        "options": ["Nepal", "Bhutan", "Myanmar", "China (Tibet Autonomous Region)"],
        "answer": 3,
        "explanation": "Nathu La is a mountain pass in the Dongkya Range of the Himalayas between Sikkim in India and the Tibet Autonomous Region of China."
    },
    {
        "question": "Which is the southernmost point of the Indian mainland?",
        "options": ["Indira Point", "Kanyakumari (Cape Comorin)", "Rameswaram", "Point Calimere"],
        "answer": 1,
        "explanation": "Kanyakumari is the southernmost tip of the Indian peninsula, while Indira Point in the Nicobar Islands is the southernmost point of Indian territory overall."
    },
    {
        "question": "What is the name of India's first nuclear-powered ballistic missile submarine?",
        "options": ["INS Chakra", "INS Arihant", "INS Vikrant", "INS Kalvari"],
        "answer": 1,
        "explanation": "INS Arihant is the lead ship of India's Arihant class of nuclear-powered ballistic missile submarines."
    },
    {
        "question": "The military exercise 'Garuda Shakti' is conducted between India and which country?",
        "options": ["France", "Sri Lanka", "Indonesia", "Malaysia"],
        "answer": 2,
        "explanation": "Garuda Shakti is a joint military exercise between the special forces of the Indian and Indonesian armies."
    },
    {
        "question": "The 'National War Memorial' of India is located in which city?",
        "options": ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
        "answer": 3,
        "explanation": "The National War Memorial is located near India Gate in New Delhi and honors the soldiers of the Indian Armed Forces who fought in armed conflicts."
    },
    {
        "question": "The term 'Pinaka' in the Indian defence context refers to a:",
        "options": ["Fighter jet", "Submarine", "Battle Tank", "Multi-barrel rocket launcher"],
        "answer": 3,
        "explanation": "The Pinaka is a multiple rocket launcher produced in India and developed by the Defence Research and Development Organisation (DRDO) for the Indian Army."
    },
    {
        "question": "The 'Officers Training Academy' (OTA) for Short Service Commission officers is located in:",
        "options": ["Dehradun", "Gaya", "Pune", "Chennai"],
        "answer": 3,
        "explanation": "The OTA in Chennai is a premier training establishment of the Indian Army that trains officers for the Short Service Commission."
    },
    {
        "question": "The 'Cheetah' and 'Chetak' are types of what used by the Indian Armed Forces?",
        "options": ["Artillery Guns", "Helicopters", "Armoured Personnel Carriers", "Sniper Rifles"],
        "answer": 1,
        "explanation": "The HAL Cheetah and HAL Chetak are utility helicopters manufactured by Hindustan Aeronautics Limited (HAL)."
    },
    {
        "question": "The 'SLINEX' is a bilateral maritime exercise between India and:",
        "options": ["Singapore", "Sri Lanka", "Seychelles", "South Africa"],
        "answer": 1,
        "explanation": "SLINEX stands for Sri Lanka-India Naval Exercise."
    },
    {
        "question": "Who was the first woman defence minister of India (full time)?",
        "options": ["Sushma Swaraj", "Pratibha Patil", "Nirmala Sitharaman", "Indira Gandhi"],
        "answer": 2,
        "explanation": "While Indira Gandhi held the portfolio as Prime Minister, Nirmala Sitharaman was the first full-time woman Defence Minister of India."
    },
    {
        "question": "The 'Gagan Shakti' is a major exercise conducted by the:",
        "options": ["Indian Army", "Indian Navy", "Indian Air Force", "Indian Coast Guard"],
        "answer": 2,
        "explanation": "Gagan Shakti is one of the largest exercises conducted by the Indian Air Force to showcase its air dominance over the entire extended area of the Indian Ocean Region."
    },
    {
        "question": "The 'INS Baaz' naval air station is located in:",
        "options": ["Lakshadweep Islands", "Goa", "Andaman & Nicobar Islands", "Visakhapatnam"],
        "answer": 2,
        "explanation": "INS Baaz is an Indian naval air station located at Campbell Bay on Great Nicobar island, serving as a strategic outpost."
    },
    {
        "question": "Who was the Chief Guest at the Republic Day Parade in New Delhi in 2024?",
        "options": ["Joe Biden (USA President)", "Rishi Sunak (UK Prime Minister)", "Emmanuel Macron (French President)", "Abdel Fattah el-Sisi (Egyptian President)"],
        "answer": 2,
        "explanation": "French President Emmanuel Macron was the chief guest for India's 75th Republic Day celebrations in 2024."
    },
    {
        "question": "The \"Pradhan Mantri Surya Ghar: Muft Bijli Yojana\" scheme is aimed at:",
        "options": ["Providing free electricity to farmers", "Promoting rooftop solar installations", "Electrifying rural villages", "Replacing old power lines"],
        "answer": 1,
        "explanation": "This scheme aims to provide free electricity by promoting solar power installations on the roofs of houses."
    },
    {
        "question": "Which film won the 'Best Feature Film' award at the 69th National Film Awards?",
        "options": ["RRR", "Gangubai Kathiawadi", "Rocketry: The Nambi Effect", "Pushpa: The Rise"],
        "answer": 2,
        "explanation": "R. Madhavan's directorial debut \"Rocketry: The Nambi Effect\" won the Best Feature Film award."
    },
    {
        "question": "Which Indian city was declared the cleanest city for the 7th consecutive time in the Swachh Survekshan Awards 2023?",
        "options": ["Surat", "Navi Mumbai", "Indore", "Vijayawada"],
        "answer": 2,
        "explanation": "Indore and Surat were jointly awarded the cleanest city title, but for Indore, it was the seventh time in a row."
    },
    {
        "question": "Who was recently appointed as the new Chief of Naval Staff of the Indian Navy in 2024?",
        "options": ["Admiral R. Hari Kumar", "Admiral Karambir Singh", "Admiral Dinesh K. Tripathi", "Admiral Sunil Lanba"],
        "answer": 2,
        "explanation": "Admiral Dinesh K. Tripathi took over as the 26th Chief of the Naval Staff on April 30, 2024."
    },
    {
        "question": "What is the name of the new criminal law code that replaced the Indian Penal Code, 1860?",
        "options": ["Bharatiya Nyaya Sanhita, 2023", "Bharatiya Nagarik Suraksha Sanhita, 2023", "Bharatiya Sakshya Adhiniyam, 2023", "Indian Justice Code, 2023"],
        "answer": 0,
        "explanation": "The Bharatiya Nyaya Sanhita, 2023 replaced the IPC as the principal law on criminal offences in India."
    },
    {
        "question": "The 'Hoysala Temples', which recently became a UNESCO World Heritage Site, are located in which state?",
        "options": ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
        "answer": 2,
        "explanation": "The Sacred Ensembles of the Hoysalas, located in Belur, Halebidu, and Somanathapura in Karnataka, were inscribed on the UNESCO World Heritage list."
    },
    {
        "question": "Which team won the inaugural Women's Premier League (WPL) in 2023?",
        "options": ["Delhi Capitals", "Mumbai Indians", "UP Warriorz", "Royal Challengers Bangalore"],
        "answer": 1,
        "explanation": "Mumbai Indians defeated Delhi Capitals in the final to win the first-ever Women's Premier League title."
    },
    {
        "question": "'Operation Ajay' was launched by the Indian government to evacuate citizens from which country?",
        "options": ["Sudan", "Ukraine", "Israel", "Afghanistan"],
        "answer": 2,
        "explanation": "'Operation Ajay' was launched in October 2023 to facilitate the return of Indian citizens from Israel amid the escalating conflict with Hamas."
    },
    {
        "question": "Who was awarded the Dadasaheb Phalke Lifetime Achievement Award for the year 2021 (presented in 2023)?",
        "options": ["Rajinikanth", "Asha Parekh", "Waheeda Rehman", "Amitabh Bachchan"],
        "answer": 2,
        "explanation": "Veteran actress Waheeda Rehman was honored with the Dadasaheb Phalke Award for her immense contribution to Indian cinema."
    },
    {
        question: "What is the term length for a member of the Rajya Sabha?",
        options: ["4 years", "5 years", "6 years", "No fixed term"],
        answer: 2,
        explanation: "Members of the Rajya Sabha are elected for a term of six years, with one-third of the members retiring every two years."
    },
    {
        question: "Who appoints the Chief Election Commissioner of India?",
        options: ["The Prime Minister", "The Chief Justice of India", "The President of India", "The Parliament"],
        answer: 2,
        explanation: "The President of India appoints the Chief Election Commissioner, who heads the Election Commission of India."
    },
    {
        question: "The 'Zero Hour' in the Indian Parliament refers to:",
        options: ["The last hour of the session", "The first hour of the session", "The time immediately following the Question Hour", "The time when the budget is presented"],
        answer: 2,
        explanation: "Zero Hour is the time when Members of Parliament can raise issues of urgent public importance without any prior notice."
    },
    {
        question: "Which of the following is not a fundamental right in the Indian Constitution?",
        options: ["Right to Equality", "Right to Freedom of Religion", "Right to Property", "Right against Exploitation"],
        answer: 2,
        explanation: "The Right to Property was removed from the list of Fundamental Rights by the 44th Amendment Act in 1978 and is now a legal right under Article 300-A."
    },
    {
        question: "The first session of the Indian Constituent Assembly was held on:",
        options: ["August 15, 1947", "January 26, 1950", "December 9, 1946", "August 9, 1942"],
        answer: 2,
        explanation: "The Constituent Assembly met for the first time in New Delhi on 9 December 1946 in the Constitution Hall which is now known as the Central Hall of Parliament House."
    },
    {
        question: "On which date is the National Youth Day celebrated in India, marking the birth anniversary of Swami Vivekananda?",
        options: ["January 23", "January 12", "January 26", "January 30"],
        answer: 1,
        explanation: "National Youth Day is celebrated on 12th January to honor the birth anniversary of Swami Vivekananda."
    },
    {
        question: "World Environment Day is observed globally on:",
        options: ["April 22", "June 5", "September 16", "October 24"],
        answer: 1,
        explanation: "World Environment Day, established by the UN, is celebrated on June 5th each year to encourage awareness and action for the protection of our environment."
    },
    {
        question: "National Science Day in India is celebrated to commemorate:",
        options: ["The launch of Aryabhata satellite", "The discovery of the 'Raman Effect' by C.V. Raman", "The birth anniversary of Homi J. Bhabha", "The Pokhran nuclear test"],
        answer: 1,
        explanation: "It is celebrated on 28th February each year to mark the discovery of the Raman Effect by Indian physicist Sir C. V. Raman."
    },
    {
        question: "International Yoga Day is celebrated on:",
        options: ["May 21", "June 21", "July 21", "August 21"],
        answer: 1,
        explanation: "International Yoga Day is celebrated annually on June 21 since its inception in 2015."
    },
    {
        question: "Pravasi Bharatiya Divas (Non-Resident Indian Day) is celebrated on:",
        options: ["January 9", "February 9", "March 9", "April 9"],
        answer: 0,
        explanation: "It is celebrated on 9 January to mark the contribution of the overseas Indian community towards the development of India."
    },
    {
        question: "Where is the headquarters of the International Monetary Fund (IMF) located?",
        options: ["Geneva, Switzerland", "New York, USA", "Washington D.C., USA", "Paris, France"],
        answer: 2,
        explanation: "The IMF is headquartered in Washington, D.C., United States."
    },
    {
        question: "Which of the following is NOT a member of SAARC?",
        options: ["Bhutan", "Nepal", "Myanmar", "Afghanistan"],
        answer: 2,
        explanation: "The members of SAARC are Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka. Myanmar is a member of ASEAN."
    },
    {
        question: "The headquarters of the World Trade Organization (WTO) is located in:",
        options: ["Vienna, Austria", "Brussels, Belgium", "Geneva, Switzerland", "London, UK"],
        answer: 2,
        explanation: "The WTO is headquartered in Geneva, Switzerland."
    },
    {
        question: "ASEAN (Association of Southeast Asian Nations) was established in which year?",
        options: ["1957", "1967", "1977", "1987"],
        answer: 1,
        explanation: "ASEAN was established on 8 August 1967 in Bangkok, Thailand."
    },
    {
        question: "The headquarters of UNESCO is located in:",
        options: ["Rome, Italy", "Paris, France", "New York, USA", "Berlin, Germany"],
        answer: 1,
        explanation: "The United Nations Educational, Scientific and Cultural Organization (UNESCO) is headquartered in Paris, France."
    },
    {
        question: "The term 'Ashes' is associated with which sport?",
        options: ["Football", "Hockey", "Cricket", "Tennis"],
        answer: 2,
        explanation: "The Ashes is a Test cricket series played between England and Australia."
    },
    {
        question: "The Ryder Cup is a famous tournament in which sport?",
        options: ["Golf", "Tennis", "Badminton", "Table Tennis"],
        answer: 0,
        explanation: "The Ryder Cup is a biennial men's golf competition between teams from Europe and the United States."
    },
    {
        question: "How many players are there on each side in a game of basketball?",
        options: ["4", "5", "6", "7"],
        answer: 1,
        explanation: "A standard basketball team has five players on the court at any one time."
    },
    {
        question: "The term 'Grand Slam' is associated with:",
        options: ["Billiards", "Chess", "Bridge", "Tennis"],
        answer: 3,
        explanation: "In tennis, the Grand Slam refers to the accomplishment of winning all four major championships in the same calendar year."
    },
    {
        question: "Neeraj Chopra is associated with which sport?",
        options: ["Shooting", "Wrestling", "Javelin Throw", "Boxing"],
        answer: 2,
        explanation: "Neeraj Chopra is an Indian track and field athlete who competes in the javelin throw and is an Olympic gold medalist."
    },
    {
        question: "The 'Green Revolution' in India was primarily focused on increasing the production of:",
        options: ["Milk", "Pulses", "Wheat and Rice", "Oilseeds"],
        answer: 2,
        explanation: "The Green Revolution led to a significant increase in the production of food grains, particularly wheat and rice."
    },
    {
        question: "What is the name of the oldest mountain range in India?",
        options: ["Himalayas", "Vindhyas", "Aravalli Range", "Satpuras"],
        answer: 2,
        explanation: "The Aravalli Range in Northwestern India is one of the oldest fold mountain ranges in the world."
    },
    {
        question: "The famous 'Dilwara Temples' are located in which state?",
        options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
        answer: 1,
        explanation: "The Dilwara Temples are a group of Svetambara Jain temples located near the hill station of Mount Abu in Rajasthan."
    },
    {
        question: "Which river is known as the 'Sorrow of Bengal'?",
        options: ["Ganga", "Hooghly", "Damodar", "Brahmaputra"],
        answer: 2,
        explanation: "The Damodar River was known as the 'Sorrow of Bengal' because of its devastating floods in the plains of West Bengal."
    },
    {
        question: "'Kuchipudi' is a classical dance form that originated in which state?",
        options: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka"],
        answer: 2,
        explanation: "Kuchipudi is one of the eleven major Indian classical dances, originating from a village named Kuchipudi in Andhra Pradesh."
    },
    {
        question: "The first Five-Year Plan in India was launched in which year?",
        options: ["1947", "1950", "1951", "1956"],
        answer: 2,
        explanation: "The first Five-Year Plan was launched in 1951, focusing primarily on the development of the primary sector."
    },
    {
        question: "The 'Gobi Desert' is located primarily in:",
        options: ["India and Pakistan", "China and Mongolia", "Russia and Kazakhstan", "Iran and Iraq"],
        answer: 1,
        explanation: "The Gobi Desert is a large desert region in Northern China and Southern Mongolia."
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
        answer: 3,
        explanation: "Dr. B.R. Ambedkar was the chairman of the drafting committee of the Constitution and is widely revered as its chief architect."
    },
    {
        question: "The 'Tattvabodhini Sabha' was founded by:",
        options: ["Raja Ram Mohan Roy", "Keshab Chandra Sen", "Debendranath Tagore", "Swami Vivekananda"],
        answer: 2,
        "explanation": "The Tattvabodhini Sabha was founded by Debendranath Tagore in 1839 as a splinter group of the Brahmo Samaj."
    },
    {
        "question": "The currency of Japan is:",
        "options": ["Yuan", "Won", "Yen", "Ringgit"],
        "answer": 2,
        "explanation": "The Japanese Yen is the official currency of Japan."
    },
    {
        "question": "Which of the following is the largest gland in the human body?",
        "options": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "answer": 1,
        "explanation": "The liver is the largest internal organ and the largest gland in the human body."
    },
    {
        "question": "The 'Kyoto Protocol' is an international treaty related to:",
        "options": ["Nuclear disarmament", "Protection of the ozone layer", "Climate change and greenhouse gas emissions", "Conservation of biodiversity"],
        "answer": 2,
        "explanation": "The Kyoto Protocol commits state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring."
    },
    {
        "question": "The instrument used to measure atmospheric pressure is the:",
        "options": ["Altimeter", "Hydrometer", "Barometer", "Manometer"],
        "answer": 2,
        "explanation": "A barometer is a scientific instrument that is used to measure air pressure in a certain environment."
    },
    {
        "question": "The 'Sanchi Stupa' was built by which emperor?",
        "options": ["Chandragupta Maurya", "Ashoka", "Kanishka", "Harshavardhana"],
        "answer": 1,
        "explanation": "The Great Stupa at Sanchi was originally commissioned by the Mauryan emperor Ashoka in the 3rd century BCE."
    },
    {
        "question": "Who was the first woman President of the Indian National Congress?",
        "options": ["Sarojini Naidu", "Annie Besant", "Nellie Sengupta", "Indira Gandhi"],
        "answer": 1,
        "explanation": "Annie Besant was the first woman President of the Indian National Congress, presiding over the 1917 Calcutta session."
    },
    {
        "question": "The 'Valley of Flowers' National Park is located in:",
        "options": ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Sikkim"],
        "answer": 1,
        "explanation": "The Valley of Flowers National Park is an Indian national park, located in North Chamoli, in the state of Uttarakhand."
    },
    {
        "question": "The \"Make in India\" initiative was launched in which year?",
        "options": ["2012", "2014", "2016", "2018"],
        "answer": 1,
        "explanation": "The 'Make in India' initiative was launched by the Government of India in September 2014 to encourage companies to manufacture their products in India."
    },
    {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "options": ["China", "South Korea", "Japan", "Thailand"],
        "answer": 2,
        "explanation": "Japan is often called the 'Land of the Rising Sun' because its name in Japanese translates to 'sun-origin'."
    },
    {
        "question": "The Ajanta and Ellora caves are located in which state?",
        "options": ["Karnataka", "Madhya Pradesh", "Maharashtra", "Gujarat"],
        "answer": 2,
        "explanation": "The Ajanta and Ellora caves are UNESCO World Heritage sites located in the Aurangabad district of Maharashtra."
    },
    {
        "question": "What is the name of the operation launched by India to evacuate its citizens from Ukraine in 2022?",
        "options": ["Operation Ganga", "Operation Devi Shakti", "Operation Vande Bharat", "Operation Samudra Setu"],
        "answer": 0,
        "explanation": "Operation Ganga was an evacuation mission by the Indian government to rescue its citizens stranded in neighboring countries of Ukraine."
    },
    {
        "question": "The Durand Cup is associated with which sport?",
        "options": ["Cricket", "Hockey", "Football", "Tennis"],
        "answer": 2,
        "explanation": "The Durand Cup is the oldest football tournament in Asia, held annually in India."
    },
    {
        "question": "Who was the first Indian to go into space?",
        "options": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Ravish Malhotra"],
        "answer": 2,
        "explanation": "Rakesh Sharma, a former Indian Air Force pilot, flew aboard Soyuz T-11 in 1984, becoming the first Indian citizen to travel to space."
    },
    {
        "question": "The 'Ghadar Party' was founded in which city?",
        "options": ["London", "Berlin", "San Francisco", "Tokyo"],
        "answer": 2,
        "explanation": "The Ghadar Party was an international political movement founded by expatriate Indians in San Francisco, USA, in 1913."
    },
    {
        "question": "The 'Beti Bachao, Beti Padhao' scheme was launched from which state?",
        "options": ["Uttar Pradesh", "Rajasthan", "Haryana", "Bihar"],
        "answer": 2,
        "explanation": "The scheme was launched by the Prime Minister on 22 January 2015 at Panipat, Haryana."
    },
    {
        "question": "Which is the largest river basin in India?",
        "options": ["Godavari Basin", "Narmada Basin", "Ganga Basin", "Krishna Basin"],
        "answer": 2,
        "explanation": "The Ganga basin is the largest river basin in India, covering about a quarter of the country's total area."
    },
    {
        question: "Which Article of the Constitution grants special status to Jammu & Kashmir (now abrogated)?",
        options: ["Article 352", "Article 370", "Article 356", "Article 244"],
        answer: 1,
        explanation: "Article 370 of the Indian Constitution gave special status to Jammu and Kashmir, a provision that was abrogated in 2019."
    },
    {
        question: "The Comptroller and Auditor General (CAG) of India is appointed by the:",
        options: ["Prime Minister", "Parliament", "President", "Finance Minister"],
        answer: 2,
        explanation: "The CAG of India is appointed by the President of India and holds a rank equivalent to a judge of the Supreme Court."
    },
    {
        question: "The first linguistic state to be created in India was:",
        options: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
        answer: 2,
        explanation: "Andhra Pradesh was the first state to be formed on a linguistic basis in 1953, for the Telugu-speaking population."
    },
    {
        question: "The 'Contingency Fund of India' is placed at the disposal of:",
        options: ["The Parliament", "The Prime Minister", "The Finance Minister", "The President"],
        answer: 3,
        explanation: "The Contingency Fund of India is held by the President on behalf of the nation to meet unforeseen expenditure."
    },
    {
        question: "Which part of the Indian Constitution deals with 'Citizenship'?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: 1,
        explanation: "Part II of the Indian Constitution, from Articles 5 to 11, deals with the subject of citizenship."
    },
    {
        question: "The famous 'Brihadeshwara Temple' at Thanjavur was built by which Chola ruler?",
        options: ["Rajendra Chola I", "Karikala Chola", "Rajaraja Chola I", "Vijayalaya Chola"],
        answer: 2,
        explanation: "The Brihadeshwara Temple, a UNESCO World Heritage Site, was built by the great Chola emperor Rajaraja Chola I."
    },
    {
        question: "Who was the court poet of Emperor Samudragupta?",
        options: ["Banabhatta", "Harisena", "Kalidasa", "Asvaghosa"],
        answer: 1,
        explanation: "Harisena was the court poet of Samudragupta, and his famous Allahabad Pillar inscription (Prayag Prashasti) details the emperor's conquests."
    },
    {
        question: "The 'Third Battle of Panipat' was fought in 1761 between:",
        options: ["The Marathas and the British", "The Mughals and the Sikhs", "The Marathas and Ahmad Shah Abdali", "The British and the French"],
        answer: 2,
        explanation: "The Third Battle of Panipat was fought between the Maratha Empire and the invading Afghan army of Ahmad Shah Abdali."
    },
    {
        question: "'Bihu' is a traditional folk dance of which state?",
        options: ["West Bengal", "Odisha", "Bihar", "Assam"],
        answer: 3,
        explanation: "Bihu is a set of three important festivals and a vibrant folk dance from the state of Assam."
    },
    {
        question: "The ancient text 'Arthashastra' is attributed to:",
        options: ["Patanjali", "Kautilya (Chanakya)", "Manu", "Panini"],
        answer: 1,
        explanation: "The Arthashastra, an ancient Indian treatise on statecraft and economic policy, is traditionally credited to Kautilya, also known as Chanakya."
    },
    {
        question: "Which state is the largest producer of tea in India?",
        options: ["West Bengal", "Assam", "Karnataka", "Kerala"],
        answer: 1,
        explanation: "Assam is the largest tea-producing state in India, famous for its strong, malty black teas."
    },
    {
        question: "The 'Jog Falls', one of the highest waterfalls in India, is located on which river?",
        options: ["Kaveri", "Sharavathi", "Krishna", "Godavari"],
        answer: 1,
        explanation: "Jog Falls is created by the Sharavathi River in the Shivamogga district of Karnataka."
    },
    {
        question: "Which is the largest Union Territory of India by area?",
        options: ["Puducherry", "Ladakh", "Andaman & Nicobar Islands", "Jammu & Kashmir"],
        answer: 1,
        explanation: "After the reorganization of Jammu & Kashmir in 2019, Ladakh became the largest Union Territory of India in terms of area."
    },
    {
        question: "The 'Cardamom Hills' are located in which part of India?",
        options: ["Eastern Ghats", "Western Ghats", "Aravalli Range", "Himalayas"],
        answer: 1,
        explanation: "The Cardamom Hills are part of the southern Western Ghats mountain range in southeast Kerala and southwest Tamil Nadu."
    },
    {
        question: "Which is the only active volcano in India?",
        options: ["Narcondam Island", "Barren Island", "Baratang Island", "Deccan Traps"],
        answer: 1,
        explanation: "Barren Island, located in the Andaman Sea, is the only confirmed active volcano in the Indian subcontinent."
    },
    {
        question: "The 'High Altitude Warfare School' (HAWS) of the Indian Army is located in:",
        options: ["Siachen", "Leh", "Gulmarg", "Dehradun"],
        answer: 2,
        explanation: "HAWS, a premier training establishment of the Indian Army, is located in Gulmarg, Jammu and Kashmir."
    },
    {
        question: "What is 'INS Kalvari', which was recently in the news?",
        options: ["An aircraft carrier", "A destroyer", "A submarine", "A frigate"],
        answer: 2,
        explanation: "INS Kalvari is the first of the six Scorpène-class submarines built for the Indian Navy under Project 75."
    },
    {
        question: "The rank of 'Field Marshal' in the Indian Army is a:",
        options: ["Two-star rank", "Three-star rank", "Four-star rank", "Five-star rank"],
        answer: 3,
        explanation: "Field Marshal is a five-star rank, the highest attainable rank in the Indian Army. It is a ceremonial/wartime rank."
    },
    {
        question: "The 'College of Military Engineering' is located in:",
        options: ["Mumbai", "Pune", "Dehradun", "Secunderabad"],
        answer: 1,
        explanation: "The College of Military Engineering (CME) is located at Dapodi, Pune, and trains officers of the Corps of Engineers."
    },
    {
        question: "The joint military exercise 'Dharma Guardian' is conducted between India and:",
        options: ["Thailand", "Vietnam", "South Korea", "Japan"],
        answer: 3,
        explanation: "'Dharma Guardian' is an annual joint military exercise between the Indian Army and the Japan Ground Self-Defense Force."
    },
    {
        question: "'Brexit' movement was associated with which country leaving the European Union?",
        options: ["France", "Germany", "Italy", "United Kingdom"],
        answer: 3,
        explanation: "Brexit was the withdrawal of the United Kingdom (UK) from the European Union (EU)."
    },
    {
        question: "The headquarters of the 'International Atomic Energy Agency' (IAEA) is in:",
        options: ["Vienna, Austria", "Geneva, Switzerland", "Paris, France", "New York, USA"],
        answer: 0,
        explanation: "The IAEA is headquartered in Vienna, Austria, and is the world's central intergovernmental forum for scientific and technical co-operation in the nuclear field."
    },
    {
        question: "Which country is the newest member of the United Nations?",
        options: ["Kosovo", "Taiwan", "Palestine", "South Sudan"],
        answer: 3,
        explanation: "South Sudan joined the United Nations on July 14, 2011, becoming its 193rd and newest member state."
    },
    {
        question: "The 'World Economic Forum' holds its annual meeting in which city?",
        options: ["Zurich", "Geneva", "Davos", "Bern"],
        answer: 2,
        explanation: "The World Economic Forum's annual meeting of global leaders in business, politics, and academia is held in Davos, Switzerland."
    },
    {
        question: "The 'International Day of Non-Violence' is observed on the birth anniversary of:",
        options: ["Nelson Mandela", "Martin Luther King Jr.", "Mahatma Gandhi", "Dalai Lama"],
        answer: 2,
        explanation: "The International Day of Non-Violence is observed on October 2nd, the birthday of Mahatma Gandhi, leader of the Indian independence movement."
    },
    {
        question: "The 'Jnanpith Award' is given for outstanding contribution to:",
        options: ["Science", "Music", "Literature", "Journalism"],
        answer: 2,
        explanation: "The Jnanpith Award is India's highest literary award, presented annually by the Bharatiya Jnanpith to an author for their outstanding contribution towards literature."
    },
    {
        question: "Who was the first musician to be awarded the Bharat Ratna?",
        options: ["Lata Mangeshkar", "Bismillah Khan", "M.S. Subbulakshmi", "Ravi Shankar"],
        answer: 2,
        explanation: "Carnatic vocalist M. S. Subbulakshmi was the first musician ever to be awarded the Bharat Ratna, India's highest civilian honour, in 1998."
    },
    {
        question: "The 'Dronacharya Award' is given to:",
        options: ["Outstanding sportspersons", "Outstanding coaches in sports", "Umpires and referees", "Sports journalists"],
        answer: 1,
        explanation: "The Dronacharya Award is presented by the Indian government for excellence in sports coaching."
    },
    {
        question: "The 'Ramon Magsaysay Award' is named after the former president of which country?",
        options: ["Indonesia", "Malaysia", "Philippines", "Thailand"],
        answer: 2,
        explanation: "Often called the 'Nobel Prize of Asia', the Ramon Magsaysay Award is named after the seventh president of the Philippines."
    },
    {
        question: "Who was the first posthumous recipient of the Bharat Ratna?",
        options: ["Sardar Patel", "Lal Bahadur Shastri", "K. Kamaraj", "M.G. Ramachandran"],
        answer: 1,
        explanation: "Lal Bahadur Shastri, India's second Prime Minister, was the first individual to be posthumously awarded the Bharat Ratna in 1966."
    },
    {
        question: "The 'Ajrakh' block printing is a traditional art form from which state?",
        options: ["Rajasthan", "Gujarat", "Uttar Pradesh", "Madhya Pradesh"],
        answer: 1,
        explanation: "Ajrakh is a unique form of block printing found in Sindh, Pakistan; and Ajrakhpur, Kutch district, Gujarat in India."
    },
    {
        question: "What is the name of the boundary line between India and Pakistan?",
        options: ["Durand Line", "McMahon Line", "Radcliffe Line", "Line of Control"],
        answer: 2,
        explanation: "The Radcliffe Line was the boundary demarcation line between the Indian and Pakistani portions of the Punjab and Bengal provinces of British India."
    },
    {
        question: "The 'Buland Darwaza' is located in which city?",
        options: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur"],
        answer: 2,
        explanation: "The Buland Darwaza, or the 'Gate of Magnificence', was built by Mughal emperor Akbar to commemorate his victory over Gujarat. It is located in Fatehpur Sikri."
    },
    {
        question: "Which state is the leading producer of coffee in India?",
        options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
        answer: 2,
        explanation: "Karnataka is the largest coffee-producing state in India, accounting for a majority of the country's total coffee production."
    },
    {
        question: "The first Indian Institute of Technology (IIT) was established in:",
        options: ["Delhi", "Bombay (Mumbai)", "Madras (Chennai)", "Kharagpur"],
        answer: 3,
        explanation: "The first IIT was founded in Kharagpur in 1951, followed by IIT Bombay, Madras, Kanpur, and Delhi."
    },
    {
        question: "The 'Indravati National Park' is located in which state?",
        options: ["Odisha", "Chhattisgarh", "Jharkhand", "Telangana"],
        answer: 1,
        explanation: "Indravati National Park, a famous tiger reserve, is located in the Bijapur district of Chhattisgarh state."
    },
    {
        question: "The 'Official Secrets Act' was first enacted in India in which year?",
        options: ["1905", "1919", "1923", "1935"],
        answer: 2,
        explanation: "The Indian Official Secrets Act of 1923 replaced an earlier act and was enacted to counter espionage and unauthorized disclosure of official information."
    },
    {
        question: "Who is the author of the book 'The God of Small Things'?",
        options: ["Jhumpa Lahiri", "Kiran Desai", "Arundhati Roy", "Anita Desai"],
        answer: 2,
        explanation: "Arundhati Roy won the Booker Prize in 1997 for her debut novel, 'The God of Small Things'."
    },
    {
        question: "The 'Bandipur National Park' is located in which state?",
        options: ["Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka"],
        answer: 3,
        explanation: "Bandipur National Park, a prominent tiger reserve, is located in the state of Karnataka."
    },
    {
        question: "The 'Tehri Dam' is built on which river?",
        options: ["Alaknanda", "Bhagirathi", "Yamuna", "Ramganga"],
        answer: 1,
        explanation: "The Tehri Dam is the tallest dam in India, built on the Bhagirathi River near Tehri in Uttarakhand."
    },
    {
        question: "Which city is known as the 'Electronic City of India'?",
        options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
        answer: 2,
        explanation: "Bengaluru (Bangalore) is known as the 'Electronic City' or 'Silicon Valley of India' due to its role as the nation's leading information technology exporter."
    },
    {
        question: "The famous 'Charminar' is located in which city?",
        options: ["Delhi", "Agra", "Hyderabad", "Aurangabad"],
        answer: 2,
        explanation: "The Charminar is a monumental mosque located in Hyderabad, Telangana, India. It was built in 1591 by Muhammad Quli Qutb Shah."
    },
    {
        question: "The 'National Stock Exchange' (NSE) of India is located in:",
        options: ["New Delhi", "Kolkata", "Mumbai", "Ahmedabad"],
        answer: 2,
        explanation: "The NSE, India's leading stock exchange, is headquartered in Mumbai, Maharashtra."
    },
    {
        question: "'Kathakali' is a classical dance form that originated from which state?",
        options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
        answer: 2,
        explanation: "Kathakali is a major form of classical Indian dance characterized by its elaborate makeup, costumes, and intricate gestures, originating from Kerala."
    },
    {
        question: "Who was the first woman Chief Minister of an Indian state?",
        options: ["Sarojini Naidu", "Sucheta Kripalani", "Jayalalithaa", "Mamata Banerjee"],
        answer: 1,
        explanation: "Sucheta Kripalani of the Indian National Congress became the first woman to hold the position of Chief Minister in India, serving Uttar Pradesh."
    },
    {
        question: "The 'Chilika Lake', Asia's largest brackish water lagoon, is in which state?",
        options: ["Andhra Pradesh", "West Bengal", "Odisha", "Tamil Nadu"],
        answer: 2,
        explanation: "Chilika Lake is a brackish water lagoon, spread over the Puri, Khurda and Ganjam districts of Odisha state."
    },
    {
        question: "The 'Indian Institute of Science' (IISc) is located in:",
        options: ["Chennai", "Mumbai", "Delhi", "Bengaluru"],
        answer: 3,
        explanation: "The prestigious Indian Institute of Science (IISc) is a public university for scientific research and higher education located in Bengaluru."
    },
    {
        question: "'Bhoodan Movement' was initiated by:",
        options: ["Mahatma Gandhi", "Jayaprakash Narayan", "Vinoba Bhave", "Sardar Patel"],
        answer: 2,
        explanation: "The Bhoodan Movement, or the Land Gift Movement, was a voluntary land reform movement in India initiated by Acharya Vinoba Bhave in 1951."
    },
    {
        question: "The 'Salal Project' is constructed on which river?",
        options: ["Jhelum", "Ravi", "Sutlej", "Chenab"],
        answer: 3,
        explanation: "The Salal Hydroelectric Power Station is a run-of-the-river power project on the Chenab River in the Reasi district of Jammu and Kashmir."
    },
    {
        question: "The first metro rail service in India was started in which city?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: 3,
        explanation: "The Kolkata Metro is the first planned and operational rapid transit system in India. It started operations in 1984."
    }
];

const uniqueQuestionsMap = new Map<string, Question>();
allGkQuestions.forEach(q => {
    uniqueQuestionsMap.set(q.question.trim(), q);
});

const uniqueQuestions = Array.from(uniqueQuestionsMap.values());

export const gkTest1Questions = uniqueQuestions.slice(0, 50);
export const gkTest2Questions = uniqueQuestions.slice(50, 100);
export const gkTest3Questions = uniqueQuestions.slice(100, 150);
export const gkTest4Questions = uniqueQuestions.slice(150, 200);
export const gkTest5Questions = uniqueQuestions.slice(200, 250);
export const gkTest6Questions = uniqueQuestions.slice(250);

    
