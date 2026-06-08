// Verbal Ability questions data
export const verbalTopics: Record<string, { title: string; description: string; questions: any[] }> = {
  'reading-comprehension': {
    title: 'Reading Comprehension',
    description: 'Practice understanding and analyzing passages',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          passage: "Climate change is one of the most pressing issues of our time. Rising temperatures, melting ice caps, and extreme weather events are all symptoms of a warming planet. Scientists worldwide agree that human activities, particularly the burning of fossil fuels, are the primary cause of this phenomenon.",
          question: "What is identified as the primary cause of climate change?",
          options: ["Natural weather patterns", "Human activities and fossil fuels", "Solar radiation", "Ocean currents"],
          correctAnswer: 1,
          explanation: "The passage explicitly states that human activities, particularly the burning of fossil fuels, are the primary cause of climate change."
        },
        {
          passage: "Artificial Intelligence has revolutionized various industries, from healthcare to finance. Machine learning algorithms can now diagnose diseases, predict market trends, and even create art. However, concerns about job displacement and ethical implications remain significant challenges.",
          question: "According to the passage, what is a concern regarding AI?",
          options: ["Its inability to create art", "Job displacement and ethical issues", "Its limited applications", "High cost of implementation"],
          correctAnswer: 1,
          explanation: "The passage mentions that concerns about job displacement and ethical implications are significant challenges."
        },
        {
          passage: "The Renaissance period marked a cultural rebirth in Europe, characterized by renewed interest in classical learning and values. Artists like Leonardo da Vinci and Michelangelo created masterpieces that still inspire today. This era also saw significant advances in science, literature, and philosophy.",
          question: "What characterized the Renaissance period?",
          options: ["Industrial revolution", "Renewed interest in classical learning", "Religious reformation only", "Agricultural development"],
          correctAnswer: 1,
          explanation: "The passage clearly states that the Renaissance was characterized by renewed interest in classical learning and values."
        },
        {
          passage: "Biodiversity is crucial for ecosystem stability. Different species play unique roles in maintaining ecological balance. When species become extinct, it can trigger a cascade of negative effects throughout the food chain and habitat structure.",
          question: "Why is biodiversity important according to the passage?",
          options: ["For aesthetic purposes only", "For ecosystem stability and balance", "For human entertainment", "For economic gain"],
          correctAnswer: 1,
          explanation: "The passage emphasizes that biodiversity is crucial for ecosystem stability and maintaining ecological balance."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
  'sentence-correction': {
    title: 'Sentence Correction',
    description: 'Improve grammar and sentence structure skills',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          question: "Neither the students nor the teacher _____ present in the class.",
          options: ["were", "was", "are", "have been"],
          correctAnswer: 1,
          explanation: "When 'neither...nor' is used, the verb agrees with the subject closest to it. Here, 'teacher' is singular, so 'was' is correct."
        },
        {
          question: "The committee _____ decided to postpone the meeting.",
          options: ["have", "has", "are", "were"],
          correctAnswer: 1,
          explanation: "Collective nouns like 'committee' take singular verbs when acting as a unit. 'Has' is the correct singular form."
        },
        {
          question: "Each of the players _____ responsible for their equipment.",
          options: ["are", "were", "is", "have been"],
          correctAnswer: 2,
          explanation: "'Each' is always singular and takes a singular verb. 'Is' is the correct answer."
        },
        {
          question: "The news _____ not as bad as we expected.",
          options: ["were", "was", "are", "have been"],
          correctAnswer: 1,
          explanation: "'News' is singular despite ending in 's'. It takes a singular verb 'was'."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
  'vocabulary': {
    title: 'Vocabulary',
    description: 'Build and enhance your word knowledge',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          question: "The politician's speech was full of _____ statements designed to appeal to emotions.",
          options: ["pragmatic", "rhetorical", "literal", "mundane"],
          correctAnswer: 1,
          explanation: "Rhetorical statements are designed to persuade or appeal to emotions, making it the correct answer."
        },
        {
          question: "Her _____ nature made her the perfect candidate for the diplomatic position.",
          options: ["belligerent", "taciturn", "affable", "obstinate"],
          correctAnswer: 2,
          explanation: "Affable means friendly and easy to talk to, which is ideal for a diplomatic position."
        },
        {
          question: "The scientist's _____ research methods led to groundbreaking discoveries.",
          options: ["conventional", "innovative", "obsolete", "derivative"],
          correctAnswer: 1,
          explanation: "Innovative means introducing new ideas or methods, which leads to groundbreaking discoveries."
        },
        {
          question: "The manager's _____ approach to problem-solving frustrated the team.",
          options: ["systematic", "erratic", "methodical", "organized"],
          correctAnswer: 1,
          explanation: "Erratic means unpredictable and inconsistent, which would cause frustration in problem-solving."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
  'synonyms-antonyms': {
    title: 'Synonyms & Antonyms',
    description: 'Master word relationships and opposites',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          question: "Select the synonym of 'ABUNDANT':",
          options: ["Scarce", "Plentiful", "Meager", "Insufficient"],
          correctAnswer: 1,
          explanation: "Plentiful means existing in large quantities, which is a synonym of abundant."
        },
        {
          question: "Select the antonym of 'ARROGANT':",
          options: ["Proud", "Humble", "Conceited", "Haughty"],
          correctAnswer: 1,
          explanation: "Humble means having a modest view of one's importance, which is the opposite of arrogant."
        },
        {
          question: "Select the synonym of 'COHERENT':",
          options: ["Confused", "Logical", "Disjointed", "Chaotic"],
          correctAnswer: 1,
          explanation: "Logical means clear and well-organized, which is a synonym of coherent."
        },
        {
          question: "Select the antonym of 'DILIGENT':",
          options: ["Hardworking", "Lazy", "Persistent", "Dedicated"],
          correctAnswer: 1,
          explanation: "Lazy means unwilling to work, which is the opposite of diligent."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
  'para-jumbles': {
    title: 'Para Jumbles',
    description: 'Practice arranging sentences logically',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          question: "Arrange the sentences in correct order:\nA. However, it requires dedication and practice.\nB. Learning a new language can be rewarding.\nC. Many resources are available online.\nD. Start with basic vocabulary and grammar.",
          options: ["BADC", "BCAD", "BACD", "BDAC"],
          correctAnswer: 0,
          explanation: "The logical flow is: B (introduction) → A (contrasting point) → D (starting advice) → C (resources)."
        },
        {
          question: "Arrange the sentences in correct order:\nA. This leads to better decision-making.\nB. Critical thinking is essential in today's world.\nC. It involves analyzing information objectively.\nD. Students should develop this skill early.",
          options: ["BCAD", "CBAD", "BCDA", "DBCA"],
          correctAnswer: 0,
          explanation: "The logical flow is: B (main idea) → C (explanation) → A (benefit) → D (recommendation)."
        },
        {
          question: "Arrange the sentences in correct order:\nA. Regular exercise improves cardiovascular health.\nB. It also reduces stress and anxiety.\nC. Physical fitness is important for well-being.\nD. Aim for at least 30 minutes daily.",
          options: ["CABD", "ABCD", "CBAD", "DACB"],
          correctAnswer: 0,
          explanation: "The logical flow is: C (introduction) → A (first benefit) → B (second benefit) → D (recommendation)."
        },
        {
          question: "Arrange the sentences in correct order:\nA. They help preserve endangered species.\nB. Conservation efforts are crucial today.\nC. Habitats are being restored worldwide.\nD. Future generations will benefit.",
          options: ["BACD", "ABCD", "BCAD", "DBAC"],
          correctAnswer: 0,
          explanation: "The logical flow is: B (main idea) → A (benefit) → C (action) → D (future impact)."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
  'fill-blanks': {
    title: 'Fill in the Blanks',
    description: 'Complete sentences with appropriate words',
    questions: Array.from({ length: 100 }, (_, i) => {
      const baseQuestions = [
        {
          question: "The scientist's hypothesis was _____ by the experimental results.",
          options: ["refuted", "confirmed", "ignored", "questioned"],
          correctAnswer: 1,
          explanation: "Confirmed means proven to be true, which fits the context of experimental results supporting a hypothesis."
        },
        {
          question: "Despite facing numerous _____, she persevered and achieved her goal.",
          options: ["opportunities", "obstacles", "advantages", "rewards"],
          correctAnswer: 1,
          explanation: "Obstacles (challenges) makes sense with 'despite' and 'persevered', indicating she overcame difficulties."
        },
        {
          question: "The ancient ruins provide _____ evidence of the civilization's advanced technology.",
          options: ["dubious", "tangible", "questionable", "abstract"],
          correctAnswer: 1,
          explanation: "Tangible means concrete and touchable, which suits physical ruins as evidence."
        },
        {
          question: "His _____ explanation left everyone more confused than before.",
          options: ["clear", "convoluted", "simple", "straightforward"],
          correctAnswer: 1,
          explanation: "Convoluted means extremely complex and difficult to follow, which causes confusion."
        },
      ];
      return baseQuestions[i % baseQuestions.length];
    })
  },
};
