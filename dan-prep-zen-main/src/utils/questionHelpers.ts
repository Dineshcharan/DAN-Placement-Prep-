// Helper functions for randomizing test questions

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function selectRandomQuestions<T>(questions: T[], count: number): T[] {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
