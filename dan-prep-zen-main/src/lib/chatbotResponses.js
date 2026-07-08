const normalizeQuery = (text) => text.trim().toLowerCase().replace(/[?!.]+$/g, '');

const queryMatches = (query, patterns) => patterns.some((pattern) => query.includes(pattern));

const getClarifyingResponse = (userName) => {
  const base = "I'm here to help you with DAN Placement Prep. Could you let me know whether your question is about login, a section, or your profile? I'll answer directly and politely.";
  return userName ? `Hello ${userName}! ${base}` : base;
};

export const getChatbotResponse = (userQuery, userName) => {
  const normalized = normalizeQuery(userQuery || '');

  if (queryMatches(normalized, ['hi', 'hello', 'hey', 'hiya', 'good morning', 'good afternoon', 'good evening', 'greetings'])) {
    return userName
      ? `Hello ${userName}! 👋 I'm so glad you're here. How can I help you with your placement preparation today?`
      : "Hello there! 👋 I'm so glad you're here. How can I help you with your placement preparation today?";
  }

  if (queryMatches(normalized, ['what is dan', 'about dan', 'dan mean'])) {
    return "What a great question! 😊 DAN stands for Dinesh, Anil, and Nandini — our three wonderful founders. It's your complete placement preparation companion with everything you need to succeed.";
  }

  if (queryMatches(normalized, ['founder', 'who created', 'who made', 'who started', 'who are the founders', 'who established', 'who designed', 'who developed'])) {
    return "I'm delighted to introduce you to our founders! 😊 Tarigonda Dinesh Krishna Chaitanya, Mandapalli Deva Sai Nandini, and Devarinti Anil Kumar created DAN Placement Prep to support your placement journey.";
  }

  if (queryMatches(normalized, ['sign up', 'register', 'create account', 'join', 'how do i sign up', 'how can i sign up'])) {
    return "I'd love to help you get started! 🚀 Please visit /auth to sign up with your email and password, or use OTP login for quick access.";
  }

  if (queryMatches(normalized, ['login', 'sign in', 'authenticate', 'signing in'])) {
    return "Welcome back! 🔐 You can sign in with your email and password, or use our OTP login. If you forgot your password, click 'Forgot password?' to receive a reset link.";
  }

  if (queryMatches(normalized, ['forgot password', 'reset password', 'password reset'])) {
    return "No worries! 😊 Use the 'Forgot password?' option on the login page, and we will send you a reset link right away.";
  }

  if (queryMatches(normalized, ['otp', 'one time password', 'one-time password', 'passwordless login'])) {
    return "You can use OTP login for a fast sign-in experience. Just enter your email or phone number, and we'll send a one-time code to help you log in securely.";
  }

  if (queryMatches(normalized, ['sections', 'features', 'what do you have', 'modules', 'what sections'])) {
    return "We have Numerical Ability, Reasoning, Verbal Ability, Coding Round, Blind 75, Company Questions, Technical Questions, Pseudocodes, Practice Tests, and HR Interview prep. Which one would you like to explore first?";
  }

  if (queryMatches(normalized, ['company questions', 'company based', 'company specific'])) {
    return "Wonderful choice! 🏢 Our Company Based Questions section features 15 top companies like TCS, Infosys, Amazon, Google, and more — each with 15 unique, previously asked coding problems and complete solutions in C++, Java, and Python. Head to Dashboard → Company Questions to start practicing!";
  }

  if (queryMatches(normalized, ['numerical', 'aptitude', 'math'])) {
    return "Our Numerical Ability section has company-level aptitude questions with step-by-step explanations, designed to prepare you for real placement tests.";
  }

  if (queryMatches(normalized, ['reasoning', 'logical', 'puzzles'])) {
    return "Our Reasoning section helps you build logical thinking with advanced questions in blood relations, coding-decoding, puzzles, syllogisms, and more.";
  }

  if (queryMatches(normalized, ['verbal', 'english', 'grammar'])) {
    return "Our Verbal Ability section covers reading comprehension, vocabulary, grammar, and sentence correction to strengthen your English skills.";
  }

  if (queryMatches(normalized, ['coding round', 'programming', 'code'])) {
    return "The Coding Round includes 100 practice problems and a built-in playground, so you can run code in your browser with support for C++, Java, and Python.";
  }

  if (queryMatches(normalized, ['how many coding problems', 'how many problems', 'coding problems'])) {
    return "We have 100 coding problems in total, split across Easy, Medium, and Hard levels with complete solutions in C++, Java, and Python.";
  }

  if (queryMatches(normalized, ['passing criteria', 'pass criteria', 'ultimate exam', '65%', '85 marks'])) {
    return "To pass the Ultimate Exam, you need 65% or above, which means 85 marks out of 130. The full exam lasts 180 minutes and covers 6 sections.";
  }

  if (queryMatches(normalized, ['blind 75', 'dsa', 'data structures'])) {
    return "Blind 75 offers 75 essential DSA problems across 10 categories, with full solutions to help you prepare for coding interviews.";
  }

  if (queryMatches(normalized, ['technical questions', 'oops', 'dbms', 'os', 'networks', 'system design', 'cloud'])) {
    return "Our Technical Questions section covers OOPS, DBMS, OS, Networks, and Cloud topics with interview-level questions and explanations.";
  }

  if (queryMatches(normalized, ['hr interview', 'hr round', 'behavioral'])) {
    return "The HR Interview section prepares you for common behavioral questions like 'Tell me about yourself' and 'Why should we hire you?' with helpful tips.";
  }

  if (queryMatches(normalized, ['practice tests', 'mock tests', 'exam'])) {
    return "Practice Tests let you evaluate your skills with 15 full-length tests across Numerical Ability, Reasoning, and Technical sections.";
  }

  if (queryMatches(normalized, ['pseudocode', 'pseudo'])) {
    return "Pseudocodes helps you practice algorithmic thinking with both general logic problems and algorithm-based pseudocode examples.";
  }

  if (queryMatches(normalized, ['dashboard', 'home'])) {
    return "The Dashboard is your home for accessing all sections, tracking your progress, and managing your preparation journey.";
  }

  if (queryMatches(normalized, ['profile', 'account', 'settings'])) {
    return "You can manage your profile information, upload a photo, and set your preferred theme on the Profile page.";
  }

  if (queryMatches(normalized, ['theme', 'dark mode', 'light mode'])) {
    return "You can switch between light and dark theme modes using the theme toggle in your profile or dashboard.";
  }

  if (queryMatches(normalized, ['help', 'support', 'contact'])) {
    return "I'm here to help with anything related to DAN Placement Prep. Please tell me whether you're asking about login, a section, or your profile so I can answer clearly.";
  }

  if (queryMatches(normalized, ['tech', 'stack', 'built', 'framework', 'ai model', 'what powers', 'backend', 'database'])) {
    return "I truly appreciate your curiosity! 😊 However, I'm not able to share technical details about how this platform was built. I'm here to help with your placement preparation instead.";
  }

  if (queryMatches(normalized, ['how to', 'tutorial', 'guide'])) {
    return "I'd be happy to guide you! 📚 For getting started: 1) Sign up at /auth, 2) Complete your profile, 3) Visit the Dashboard, 4) Choose any section to start practicing!";
  }

  if (queryMatches(normalized, ['thank', 'thanks'])) {
    return "You're so welcome! 😊 I'm absolutely delighted to help you on your placement preparation journey. You've got this! 💪";
  }

  if (queryMatches(normalized, ['bye', 'goodbye', 'see you'])) {
    return "Goodbye! 👋 It was wonderful chatting with you. Keep practicing and remember — you're capable of achieving great things in your placement journey. Come back anytime! 🌟";
  }

  if (/\b(how|what|why|where|when|which|could|can|should)\b/.test(normalized)) {
    return "That's a wonderful question! 😊 I'm here to help you with DAN Placement Prep. If you're asking about login, a section, or your account, please tell me and I'll answer clearly.";
  }

  return getClarifyingResponse(userName);
};
