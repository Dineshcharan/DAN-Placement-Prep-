import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatBot } from "./components/ChatBot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NumericalAbility from "./pages/NumericalAbility";
import Reasoning from "./pages/Reasoning";
import VerbalAbility from "./pages/VerbalAbility";
import VerbalTopic from "./pages/topics/VerbalTopic";
import CodingRound from "./pages/CodingRound";
import TechnicalQuestions from "./pages/TechnicalQuestions";
import Pseudocodes from "./pages/Pseudocodes";
import PseudocodesAlgorithm from "./pages/PseudocodesAlgorithm";
import PseudocodesGeneral from "./pages/PseudocodesGeneral";
import Tests from "./pages/Tests";
import TestExam from "./pages/TestExam";
import HRInterview from "./pages/HRInterview";
import Blind75 from "./pages/Blind75";
import CompanyQuestions from "./pages/CompanyQuestions";
import CompanyTopic from "./pages/topics/CompanyTopic";
import Blind75Topic from "./pages/topics/Blind75Topic";
import Blind75Problem from "./pages/topics/Blind75Problem";
import NotFound from "./pages/NotFound";
import NumericalTopic from "./pages/topics/NumericalTopic";
import ReasoningTopic from "./pages/topics/ReasoningTopic";
import TechnicalTopic from "./pages/topics/TechnicalTopic";
import CodingTopic from "./pages/topics/CodingTopic";
import PseudocodeTopic from "./pages/topics/PseudocodeTopic";
import GeneralPseudocodeTopic from "./pages/topics/GeneralPseudocodeTopic";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ChatBot />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/numerical-ability" element={<ProtectedRoute><NumericalAbility /></ProtectedRoute>} />
              <Route path="/numerical-ability/:topicId" element={<ProtectedRoute><NumericalTopic /></ProtectedRoute>} />
              <Route path="/reasoning" element={<ProtectedRoute><Reasoning /></ProtectedRoute>} />
              <Route path="/reasoning/:topicId" element={<ProtectedRoute><ReasoningTopic /></ProtectedRoute>} />
              <Route path="/verbal-ability" element={<ProtectedRoute><VerbalAbility /></ProtectedRoute>} />
              <Route path="/verbal-ability/:topicId" element={<ProtectedRoute><VerbalTopic /></ProtectedRoute>} />
              <Route path="/coding-round" element={<ProtectedRoute><CodingRound /></ProtectedRoute>} />
              <Route path="/coding-round/:topicId" element={<ProtectedRoute><CodingTopic /></ProtectedRoute>} />
              <Route path="/technical-questions" element={<ProtectedRoute><TechnicalQuestions /></ProtectedRoute>} />
              <Route path="/technical-questions/:subjectId" element={<ProtectedRoute><TechnicalTopic /></ProtectedRoute>} />
              <Route path="/pseudocodes" element={<ProtectedRoute><Pseudocodes /></ProtectedRoute>} />
              <Route path="/pseudocodes-algorithm" element={<ProtectedRoute><PseudocodesAlgorithm /></ProtectedRoute>} />
              <Route path="/pseudocodes/:pseudocodeId" element={<ProtectedRoute><PseudocodeTopic /></ProtectedRoute>} />
              <Route path="/pseudocodes-general" element={<ProtectedRoute><PseudocodesGeneral /></ProtectedRoute>} />
              <Route path="/pseudocodes-general/:pseudocodeId" element={<ProtectedRoute><GeneralPseudocodeTopic /></ProtectedRoute>} />
              <Route path="/tests" element={<ProtectedRoute><Tests /></ProtectedRoute>} />
              <Route path="/tests/:category/:testId" element={<ProtectedRoute><TestExam /></ProtectedRoute>} />
              <Route path="/blind-75" element={<ProtectedRoute><Blind75 /></ProtectedRoute>} />
              <Route path="/blind-75/:categoryId" element={<ProtectedRoute><Blind75Topic /></ProtectedRoute>} />
              <Route path="/blind-75/:categoryId/:problemId" element={<ProtectedRoute><Blind75Problem /></ProtectedRoute>} />
              <Route path="/company-questions" element={<ProtectedRoute><CompanyQuestions /></ProtectedRoute>} />
              <Route path="/company-questions/:companyId" element={<ProtectedRoute><CompanyTopic /></ProtectedRoute>} />
              <Route path="/hr-interview" element={<ProtectedRoute><HRInterview /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
