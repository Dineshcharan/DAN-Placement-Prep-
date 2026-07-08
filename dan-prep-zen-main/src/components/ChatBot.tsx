import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Trash2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { getChatbotResponse } from '@/lib/chatbotResponses';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const CHAT_URL = "/api/website-assistant";

const STORAGE_KEY_PREFIX = 'dan-chatbot-history';

const getStorageKey = (userId?: string) => userId ? `${STORAGE_KEY_PREFIX}-${userId}` : `${STORAGE_KEY_PREFIX}-guest`;

// Routes where chatbot should be hidden (test pages)
const isTestRoute = (pathname: string) => {
  const testRoutes = [
    '/numerical-ability',
    '/reasoning',
    '/verbal-ability',
    '/coding-round',
    '/technical-questions',
    '/pseudocodes',
    '/hr-interview',
    '/test-exam',
    '/tests'
  ];
  return testRoutes.some(route => pathname.startsWith(route));
};

const getDefaultMessage = (userName?: string): Message => ({
  role: 'assistant',
  content: userName 
    ? `Hello ${userName}! 👋 I'm the DAN Placement Prep Assistant. I'm delighted to help you navigate the platform and answer any questions about our placement preparation resources. How may I assist you today?`
    : "Hello! 👋 I'm the DAN Placement Prep Assistant. I'm here to help you navigate the platform and answer any questions about our placement preparation resources. How can I assist you today?"
});

const loadChatHistory = (storageKey: string, userName?: string): Message[] => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const firstMessage = parsed[0] as Message;
        const shouldResetGreeting = !userName && firstMessage.role === 'assistant' && /^Hello\s+[A-Za-z]+/.test(firstMessage.content);
        return shouldResetGreeting ? [getDefaultMessage()] : parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load chat history:', e);
  }
  return [getDefaultMessage(userName)];
};

const getFallbackAssistantResponse = (userQuery: string, userName?: string | null) => {
  let response = '';

  const lowerQuery = userQuery.toLowerCase();

  if (/(\bhi\b|\bhello\b|\bhey\b|\bhiya\b|\bgood morning\b|\bgood afternoon\b|\bgood evening\b|\bgreetings\b)/.test(lowerQuery)) {
    response = userName
      ? `Hello ${userName}! 👋 I'm so glad you're here. How can I help you with your placement preparation today?`
      : "Hello there! 👋 I'm so glad you're here. How can I help you with your placement preparation today?";
  } else if (lowerQuery.includes('what is dan') || lowerQuery.includes('about dan') || lowerQuery.includes('dan mean')) {
    response = "What a great question! 😊 DAN stands for Dinesh, Anil, and Nandini — our three wonderful founders! It's your complete placement preparation companion with everything you need to succeed. Would you like to know about any specific section?";
  } else if (lowerQuery.includes('founder') || lowerQuery.includes('who created') || lowerQuery.includes('who made')) {
    response = "I'm delighted to introduce you to our amazing founders! 😊 Tarigonda Dinesh Krishna Chaitanya, Mandapalli Deva Sai Nandini, and Devarinti Anil Kumar — the DAN behind DAN Placement Prep! Their vision and hard work have created this wonderful platform just for you.";
  } else if (lowerQuery.includes('sections') || lowerQuery.includes('features') || lowerQuery.includes('what do you have') || lowerQuery.includes('modules')) {
    response = "I'm so glad you asked! 🎯 We have Numerical Ability, Reasoning, Verbal Ability, Coding Round (100 problems), Blind 75 (75 DSA problems), Company Questions (15 companies × 15 unique problems each), Technical Questions, Pseudocodes, Practice Tests, and HR Interview prep. Which one interests you the most?";
  } else if (lowerQuery.includes('sign up') || lowerQuery.includes('register') || lowerQuery.includes('create account') || lowerQuery.includes('join')) {
    response = "I'd love to help you get started! 🚀 Just head to /auth — you can sign up with your email and a secure password, or use our OTP login for quick access! Welcome to the DAN family!";
  } else if (lowerQuery.includes('login') || lowerQuery.includes('sign in') || lowerQuery.includes('authenticate')) {
    response = "Welcome back! 🔐 You can sign in with your email and password, or use our convenient OTP login. If you forgot your password, just click 'Forgot password?' and we'll send you a reset link right away!";
  } else if (lowerQuery.includes('company questions') || lowerQuery.includes('company based') || lowerQuery.includes('company specific')) {
    response = "Wonderful choice! 🏢 Our Company Based Questions section features 15 top companies like TCS, Infosys, Amazon, Google, and more — each with 15 unique, previously asked coding problems and complete solutions in C++, Java, and Python. Head to Dashboard → Company Questions to start practicing!";
  } else if (lowerQuery.includes('numerical') || lowerQuery.includes('aptitude') || lowerQuery.includes('math')) {
    response = "Our Numerical Ability section features company-level quantitative aptitude questions — not basic textbook problems! 💪 These are designed to match the difficulty of real placement tests from companies like TCS, Infosys, and Wipro. Plus, every question comes with a detailed step-by-step explanation after you submit your answer, so you can learn the approach! 📚";
  } else if (lowerQuery.includes('reasoning') || lowerQuery.includes('logical') || lowerQuery.includes('puzzles')) {
    response = "Our Reasoning section is fantastic for building logical thinking skills! 🧠 We have advanced, company-level questions in Blood Relations, Coding-Decoding, Puzzles, Syllogisms, and more. Each question comes with detailed explanations to help you master these important concepts!";
  } else if (lowerQuery.includes('verbal') || lowerQuery.includes('english') || lowerQuery.includes('grammar')) {
    response = "Our Verbal Ability section will help you excel in English language skills! 📖 We cover Reading Comprehension, Vocabulary, Grammar, and more. These are essential for most placement tests and will give you that extra edge!";
  } else if (lowerQuery.includes('coding round') || lowerQuery.includes('programming') || lowerQuery.includes('code')) {
    response = "Our Coding Round has 100 practice problems with a built-in Code Playground! You can write and run code directly in your browser — no setup needed. Solutions are available in C++, Java, and Python! 🚀";
  } else if (lowerQuery.includes('blind 75') || lowerQuery.includes('dsa') || lowerQuery.includes('data structures')) {
    response = "The Blind 75 section is truly fantastic for interview prep! It contains 75 carefully curated DSA problems across 10 categories, each with complete solutions. You can find it at Dashboard → Blind 75! 💪";
  } else if (lowerQuery.includes('technical questions') || lowerQuery.includes('oops') || lowerQuery.includes('dbms') || lowerQuery.includes('os') || lowerQuery.includes('system design')) {
    response = "Our Technical Questions section is fantastic for interview preparation! We have 50 unique, interview-level questions each for OOPS, DBMS, OS, Networks, and Cloud Computing — that's 250+ questions total! Each question comes with detailed explanations commonly asked in real company interviews. 🎯";
  } else if (lowerQuery.includes('hr interview') || lowerQuery.includes('hr round') || lowerQuery.includes('behavioral')) {
    response = "Our HR Interview section is perfect for preparing for the final round! We cover common questions like 'Tell me about yourself', 'Why should we hire you?', 'Strengths and weaknesses', and many more, with detailed tips and example answers. 💼";
  } else if (lowerQuery.includes('practice tests') || lowerQuery.includes('mock tests') || lowerQuery.includes('exam')) {
    response = "Our Practice Tests are excellent for evaluating your skills! We have 5 comprehensive tests each for Numerical Ability, Reasoning, and Technical questions — that's 15 tests total, each with 20 questions and a 30-minute duration. 📊";
  } else if (lowerQuery.includes('pseudocode') || lowerQuery.includes('pseudo')) {
    response = "Our Pseudocodes section is great for learning algorithmic thinking! We have problems in algorithm-based pseudocodes and general logic problems. Perfect for building your problem-solving foundation! 🧩";
  } else if (lowerQuery.includes('dashboard') || lowerQuery.includes('home')) {
    response = "The Dashboard is your central hub! 📊 From there, you can access all our practice sections, view your progress, manage your profile, and start your placement preparation journey. It's designed to be your one-stop solution for everything!";
  } else if (lowerQuery.includes('profile') || lowerQuery.includes('account') || lowerQuery.includes('settings')) {
    response = "Your Profile page is where you can manage your account details! 👤 You can update your information, upload a profile photo, change your theme preference, and track your readiness score. It's all about personalizing your learning experience!";
  } else if (lowerQuery.includes('theme') || lowerQuery.includes('dark mode') || lowerQuery.includes('light mode')) {
    response = "We have a beautiful theme toggle feature! 🌙 You can switch between light and dark modes to match your preference. Just look for the theme toggle button in your profile or dashboard!";
  } else if (lowerQuery.includes('help') || lowerQuery.includes('support') || lowerQuery.includes('contact')) {
    response = "I'm here to help you with anything related to DAN Placement Prep! 😊 Whether you need guidance on using the platform, understanding questions, or navigating sections, I'm delighted to assist. What can I help you with today?";
  } else if (lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('built') || lowerQuery.includes('framework') || lowerQuery.includes('ai model') || lowerQuery.includes('what powers') || lowerQuery.includes('backend') || lowerQuery.includes('database')) {
    response = "I truly appreciate your curiosity! 😊 However, I'm not able to share technical details about how this platform was built. That information is kept confidential. My heart is in helping you ace your placements! Is there anything about our practice sections or features I can help you with?";
  } else if (lowerQuery.includes('how to') || lowerQuery.includes('tutorial') || lowerQuery.includes('guide')) {
    response = "I'd be happy to guide you! 📚 For getting started: 1) Sign up at /auth, 2) Complete your profile, 3) Visit the Dashboard, 4) Choose any section to start practicing! Each section has detailed instructions. What would you like to learn first?";
  } else if (lowerQuery.includes('difficult') || lowerQuery.includes('hard') || lowerQuery.includes('level')) {
    response = "Our questions are designed to match real company placement test difficulty! 💪 They're not basic textbook problems — they're the actual level you'll face in TCS, Infosys, Wipro, and other companies. But don't worry, every question comes with detailed explanations to help you learn! 📚";
  } else if (lowerQuery.includes('free') || lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('paid')) {
    response = "I'm delighted that you're interested in DAN Placement Prep! 🎉 We offer comprehensive placement preparation with all the features I mentioned. For pricing details, please check our website or contact our team. We're here to support your placement journey!";
  } else if (lowerQuery.includes('thank') || lowerQuery.includes('thanks')) {
    response = "You're so welcome! 😊 I'm absolutely delighted to help you on your placement preparation journey. Remember, consistent practice and the right guidance are key to success. You've got this! 💪";
  } else if (lowerQuery.includes('bye') || lowerQuery.includes('goodbye') || lowerQuery.includes('see you')) {
    response = "Goodbye! 👋 It was wonderful chatting with you. Keep practicing and remember — you're capable of achieving great things in your placement journey. Come back anytime! 🌟";
  } else {
    response = getClarifyingResponse();
  }

  if (userName && !response.includes(userName)) {
    response = `Hello ${userName}! ` + response;
  }

  return response;
};

export const ChatBot = () => {
  const location = useLocation();
  const { profile, user, loading } = useAuth();
  const userName = profile?.first_name || undefined;
  const storageKey = getStorageKey(user?.id);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => loadChatHistory(storageKey, userName));
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const shouldHideChatbot = isTestRoute(location.pathname) || location.pathname === '/auth';
  const shouldShowChatbot = !shouldHideChatbot;

  // Update default message when user logs in
  useEffect(() => {
    if (userName && messages.length === 1 && messages[0].role === 'assistant') {
      const currentContent = messages[0].content;
      if (!currentContent.includes(userName)) {
        setMessages([getDefaultMessage(userName)]);
      }
    }
  }, [userName]);

  // Reset to a generic greeting when the user is not logged in
  useEffect(() => {
    if (!user && messages.length > 0) {
      const defaultMessage = getDefaultMessage();
      if (messages.length !== 1 || messages[0].content !== defaultMessage.content) {
        setMessages([defaultMessage]);
      }
    }
  }, [user]);

  useEffect(() => {
    if (storageKey && messages.length <= 1 && messages[0].role === 'assistant') {
      setMessages(loadChatHistory(storageKey, userName));
    }
  }, [storageKey, userName]);

  // Persist messages to localStorage per user
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }
  }, [messages, storageKey]);

  const clearHistory = () => {
    setMessages([getDefaultMessage(userName)]);
    localStorage.removeItem(storageKey);
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (import.meta.env.DEV) {
        const assistantContent = getChatbotResponse(userMessage.content, userName || null);
        setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
        setIsLoading(false);
        return;
      }

      const requestBody = {
        messages: [...messages, userMessage],
        userName: userName || null,
      };

      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Chat API error:', response.status, errorText);
        throw new Error('Failed to get response from chat API');
      }

      const json = await response.json();
      const assistantContent = typeof json.response === 'string'
        ? json.response
        : typeof json.data === 'string'
        ? json.data
        : '';

      if (!assistantContent.trim()) {
        throw new Error('No response received from chat API');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (chatError) {
      console.log('Chat API not available, using fallback responses...', chatError);

      // Remove any empty assistant message that might have been added during streaming attempt
      setMessages(prev => {
        if (prev.length > 0 && prev[prev.length - 1].role === 'assistant' && prev[prev.length - 1].content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });

      const assistantContent = getChatbotResponse(userMessage.content, userName || null);
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Don't render chatbot on test pages
  if (shouldHideChatbot || !shouldShowChatbot) {
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button with Label */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
          {/* Label above button */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg animate-bounce">
            How can I assist you..?
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "h-18 w-18 rounded-full shadow-2xl transition-all duration-300 hover:scale-110",
              "bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
              "flex items-center justify-center border-3 border-white/30 p-3"
            )}
          >
            <div className="relative flex items-center justify-center">
              {/* Man Avatar */}
              <div className="w-12 h-12 bg-white rounded-full relative overflow-hidden shadow-inner">
                {/* Hair */}
                <div className="absolute top-0 left-1 right-1 h-4 bg-amber-800 rounded-t-full" />
                {/* Face */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-7 bg-amber-200 rounded-full" />
                {/* Eyes */}
                <div className="absolute top-5 left-3 w-1.5 h-1.5 bg-amber-900 rounded-full" />
                <div className="absolute top-5 right-3 w-1.5 h-1.5 bg-amber-900 rounded-full" />
                {/* Smile */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-1.5 border-b-2 border-amber-900 rounded-b-full" />
                {/* Body/Shirt */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-orange-500 rounded-t-lg" />
              </div>
              {/* AI Badge */}
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-400 animate-pulse border-2 border-white flex items-center justify-center">
                <span className="text-[6px] font-bold text-green-900">AI</span>
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 w-[320px] max-w-[calc(100vw-32px)] rounded-2xl border bg-background shadow-2xl transition-all duration-300",
            "opacity-100 translate-y-0 scale-100"
          )}
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-3">
            <div className="flex items-center gap-2">
              {/* Man Avatar in header */}
              <div className="w-8 h-8 bg-white rounded-full relative overflow-hidden shadow-inner flex-shrink-0">
                <div className="absolute top-0 left-0.5 right-0.5 h-2.5 bg-amber-800 rounded-t-full" />
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-6 h-5 bg-amber-200 rounded-full" />
                <div className="absolute top-3 left-2 w-1 h-1 bg-amber-900 rounded-full" />
                <div className="absolute top-3 right-2 w-1 h-1 bg-amber-900 rounded-full" />
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-600 rounded-t-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">DAN Assistant</h3>
                <p className="text-[10px] text-white/80">AI-Powered Help</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearHistory}
                  className="h-7 w-7 text-white/80 hover:text-white hover:bg-white/20"
                  title="Clear chat history"
                  enableSound={false}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 text-white hover:text-white hover:bg-white/20 bg-white/10"
                title="Close chat"
                enableSound={false}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

        {/* Messages */}
        <ScrollArea className="h-[280px] p-3" ref={scrollRef}>
          <div className="flex flex-col gap-3">
            {messages
              .filter(message => message.content.trim() !== '' || message.role === 'user') // Filter out empty assistant messages
              .map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  message.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    message.role === 'user'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.role === 'user' ? (
                    <User className="h-3.5 w-3.5" />
                  ) : (
                    <Bot className="h-3.5 w-3.5" />
                  )}
                </div>
                <div
                  className={cn(
                    "rounded-2xl px-3 py-2 text-xs max-w-[200px]",
                    message.role === 'user'
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted rounded-tl-sm"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && messages.length > 0 && messages[messages.length - 1]?.role === 'assistant' && messages[messages.length - 1]?.content === '' && (
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t p-3">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 rounded-full border-muted-foreground/20 h-9 text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-9 w-9 rounded-full"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
            Powered by AI
          </p>
        </div>
        </div>
      )}
    </>
  );
};
