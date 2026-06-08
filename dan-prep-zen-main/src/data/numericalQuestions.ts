import { profitLossQuestions } from './numerical/profitLossQuestions';
import { timeWorkQuestions } from './numerical/timeWorkQuestions';
import { averagesQuestions } from './numerical/averagesQuestions';
import { ratiosQuestions } from './numerical/ratiosQuestions';
import { percentagesQuestions } from './numerical/percentagesQuestions';
import { simpleInterestQuestions } from './numerical/simpleInterestQuestions';
import { compoundInterestQuestions } from './numerical/compoundInterestQuestions';
import { timeSpeedDistanceQuestions } from './numerical/timeSpeedDistanceQuestions';
import { probabilityQuestions } from './numerical/probabilityQuestions';
import { permutationCombinationQuestions } from './numerical/permutationCombinationQuestions';
import { pipesCisternsQuestions } from './numerical/pipesCisternsQuestions';
import { boatsStreamsQuestions } from './numerical/boatsStreamsQuestions';
import { alligationMixtureQuestions } from './numerical/alligationMixtureQuestions';
import { calendarQuestions } from './numerical/calendarQuestions';
import { clocksQuestions } from './numerical/clocksQuestions';

// Numerical Ability questions data - Company Aptitude Level
export const numericalTopics: Record<string, { title: string; questions: any[] }> = {
  'profit-loss': { title: 'Profit & Loss', questions: profitLossQuestions },
  'time-work': { title: 'Time & Work', questions: timeWorkQuestions },
  'averages': { title: 'Averages', questions: averagesQuestions },
  'ratios': { title: 'Ratios & Proportions', questions: ratiosQuestions },
  'percentages': { title: 'Percentages', questions: percentagesQuestions },
  'simple-interest': { title: 'Simple Interest', questions: simpleInterestQuestions },
  'compound-interest': { title: 'Compound Interest', questions: compoundInterestQuestions },
  'time-speed-distance': { title: 'Time, Speed & Distance', questions: timeSpeedDistanceQuestions },
  'probability': { title: 'Probability', questions: probabilityQuestions },
  'permutation-combination': { title: 'Permutation & Combination', questions: permutationCombinationQuestions },
  'pipes-cisterns': { title: 'Pipes & Cisterns', questions: pipesCisternsQuestions },
  'boats-streams': { title: 'Boats & Streams', questions: boatsStreamsQuestions },
  'alligation-mixture': { title: 'Alligation & Mixture', questions: alligationMixtureQuestions },
  'calendar': { title: 'Calendar', questions: calendarQuestions },
  'clocks': { title: 'Clocks', questions: clocksQuestions },
};
