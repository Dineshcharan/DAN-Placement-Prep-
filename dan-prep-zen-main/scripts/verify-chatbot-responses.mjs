import assert from 'node:assert/strict';
import { getChatbotResponse } from '../src/lib/chatbotResponses.js';

const cases = [
  {
    query: 'Who are the founders of DAN?',
    expected: /Tarigonda Dinesh Krishna Chaitanya|Mandapalli Deva Sai Nandini|Devarinti Anil Kumar/
  },
  {
    query: 'How many coding problems do you have?',
    expected: /100/i
  },
  {
    query: 'What is the passing criteria for the ultimate exam?',
    expected: /65%|85 marks/i
  },
  {
    query: 'How do I sign up?',
    expected: /\/auth|sign up/i
  }
];

for (const testCase of cases) {
  const reply = getChatbotResponse(testCase.query, 'Asha');
  assert.match(reply, testCase.expected, `Unexpected reply for: ${testCase.query}\n${reply}`);
  console.log(`PASS: ${testCase.query}`);
}

console.log('All chatbot response checks passed.');
