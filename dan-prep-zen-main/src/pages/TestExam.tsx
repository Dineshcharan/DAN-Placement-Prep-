import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, LogOut, Clock } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { selectRandomQuestions } from '@/utils/questionHelpers';

// Question type with optional difficulty
type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  difficulty?: 'easy' | 'medium' | 'hard';
};

const testData: Record<string, Record<number, Question[]>> = {
  numerical: {
    1: [
      // EASY Questions
      { id: 1, question: 'What is 15% of 200?', options: ['25', '30', '35', '40'], correct: 1, difficulty: 'easy' },
      { id: 2, question: 'If a book costs $40, what is the price after a 10% discount?', options: ['$34', '$36', '$38', '$32'], correct: 1, difficulty: 'easy' },
      { id: 3, question: 'What is 25 + 37?', options: ['52', '62', '72', '82'], correct: 1, difficulty: 'easy' },
      { id: 4, question: 'A train travels 100 km in 2 hours. What is its speed?', options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'], correct: 1, difficulty: 'easy' },
      { id: 5, question: 'What is 3/4 as a percentage?', options: ['65%', '75%', '80%', '85%'], correct: 1, difficulty: 'easy' },
      { id: 6, question: 'If x = 5, what is 2x + 3?', options: ['10', '13', '15', '18'], correct: 1, difficulty: 'easy' },
      { id: 7, question: 'What is the average of 10, 20, 30?', options: ['15', '20', '25', '30'], correct: 1, difficulty: 'easy' },
      // MEDIUM Questions
      { id: 8, question: 'A shopkeeper marks up goods by 40% and gives 20% discount. What is profit%?', options: ['8%', '12%', '16%', '20%'], correct: 1, difficulty: 'medium' },
      { id: 9, question: 'If A:B = 3:4 and B:C = 5:6, find A:C', options: ['3:6', '5:8', '15:24', '4:5'], correct: 2, difficulty: 'medium' },
      { id: 10, question: 'A sum doubles in 8 years at simple interest. What is the rate?', options: ['10%', '12.5%', '15%', '20%'], correct: 1, difficulty: 'medium' },
      { id: 11, question: 'If 12 men do a job in 15 days, how many days for 20 men?', options: ['7', '8', '9', '10'], correct: 2, difficulty: 'medium' },
      { id: 12, question: 'CP of 15 items = SP of 12 items. Profit percentage is?', options: ['20%', '25%', '30%', '35%'], correct: 1, difficulty: 'medium' },
      { id: 13, question: 'A number increased by 25% and then decreased by 20%. Net change?', options: ['0%', '+5%', '-5%', '+10%'], correct: 0, difficulty: 'medium' },
      { id: 14, question: 'Compound interest on Rs.10000 at 10% for 2 years?', options: ['Rs.2000', 'Rs.2100', 'Rs.2200', 'Rs.2500'], correct: 1, difficulty: 'medium' },
      // HARD Questions
      { id: 15, question: 'A and B invest in ratio 3:5. A invests for 8 months, B for 12 months. Profit ratio?', options: ['1:2', '2:5', '3:8', '1:3'], correct: 1, difficulty: 'hard' },
      { id: 16, question: 'Two trains 200m and 150m long cross each other in 10s when moving opposite. If speeds are 54km/h and 72km/h, find the time if same direction.', options: ['60s', '70s', '80s', '90s'], correct: 1, difficulty: 'hard' },
      { id: 17, question: 'A can do 40% work in 12 days. B joins and they finish remaining in 6 days. B alone takes?', options: ['15 days', '18 days', '20 days', '24 days'], correct: 0, difficulty: 'hard' },
      { id: 18, question: 'Three pipes fill a tank. A fills in 6h, B in 8h, C empties in 12h. All opened, when full?', options: ['4h', '4.8h', '5h', '5.5h'], correct: 1, difficulty: 'hard' },
      { id: 19, question: 'A mixture has milk:water = 7:3. How much water to add to 40L to make ratio 3:2?', options: ['6L', '8L', '10L', '12L'], correct: 1, difficulty: 'hard' },
      { id: 20, question: 'Population increases 10% first year, decreases 10% second year. Net change on 10000?', options: ['9900', '9990', '10000', '10100'], correct: 0, difficulty: 'hard' }
    ],
    2: [
      { id: 1, question: 'What is 20% of 150?', options: ['25', '30', '35', '40'], correct: 1, difficulty: 'easy' },
      { id: 2, question: 'If 5 pens cost $25, what is the cost of 8 pens?', options: ['$35', '$40', '$45', '$50'], correct: 1, difficulty: 'easy' },
      { id: 3, question: 'What is 144 ÷ 12?', options: ['10', '12', '14', '16'], correct: 1, difficulty: 'easy' },
      { id: 4, question: 'Simple interest on $500 at 5% for 2 years?', options: ['$40', '$50', '$60', '$70'], correct: 1, difficulty: 'easy' },
      { id: 5, question: 'What is 0.25 as a fraction?', options: ['1/3', '1/4', '1/5', '1/6'], correct: 1, difficulty: 'easy' },
      { id: 6, question: 'Area of rectangle 8×5 cm?', options: ['35 cm²', '40 cm²', '45 cm²', '50 cm²'], correct: 1, difficulty: 'easy' },
      { id: 7, question: 'If y = 10, what is y² - 20?', options: ['70', '80', '90', '100'], correct: 1, difficulty: 'easy' },
      { id: 8, question: 'Two numbers in ratio 3:5 have sum 48. Find the larger number.', options: ['28', '30', '32', '34'], correct: 1, difficulty: 'medium' },
      { id: 9, question: 'A car travels at 60km/h for 2h and 80km/h for 3h. Average speed?', options: ['68 km/h', '70 km/h', '72 km/h', '74 km/h'], correct: 2, difficulty: 'medium' },
      { id: 10, question: 'After 20% discount, price is $640. Original price?', options: ['$750', '$800', '$850', '$900'], correct: 1, difficulty: 'medium' },
      { id: 11, question: 'LCM of 12, 18, and 24 is?', options: ['60', '72', '84', '96'], correct: 1, difficulty: 'medium' },
      { id: 12, question: 'A loses 10% by selling at $90. To gain 10%, SP should be?', options: ['$100', '$105', '$110', '$115'], correct: 2, difficulty: 'medium' },
      { id: 13, question: 'If P:Q = 2:3 and Q:R = 4:5, find P:Q:R', options: ['8:12:15', '6:9:10', '4:6:8', '2:3:4'], correct: 0, difficulty: 'medium' },
      { id: 14, question: 'Time for $8000 to become $10000 at 5% SI?', options: ['4 years', '5 years', '6 years', '8 years'], correct: 1, difficulty: 'medium' },
      { id: 15, question: 'A boat goes 24km downstream in 4h and returns in 6h. Speed of stream?', options: ['0.5 km/h', '1 km/h', '1.5 km/h', '2 km/h'], correct: 1, difficulty: 'hard' },
      { id: 16, question: 'In how many ways can 5 people sit in a row?', options: ['60', '100', '120', '150'], correct: 2, difficulty: 'hard' },
      { id: 17, question: 'Probability of getting sum 7 with two dice?', options: ['1/9', '1/6', '5/36', '7/36'], correct: 1, difficulty: 'hard' },
      { id: 18, question: 'A cistern filled by pipe A in 4h, B in 6h. A crack empties in 8h. Time to fill?', options: ['4.8h', '5h', '5.2h', '5.5h'], correct: 0, difficulty: 'hard' },
      { id: 19, question: 'Average of 11 numbers is 36. Average of first 6 is 32. Average of last 6 is?', options: ['38', '40', '42', '44'], correct: 1, difficulty: 'hard' },
      { id: 20, question: 'A and B start business with Rs.8000 and Rs.12000. A leaves after 6 months. Profit ratio at year end?', options: ['1:2', '2:3', '1:3', '3:4'], correct: 2, difficulty: 'hard' }
    ],
    3: [
      { id: 1, question: 'What is 12 × 15?', options: ['160', '170', '180', '190'], correct: 2, difficulty: 'easy' },
      { id: 2, question: 'Find 30% of 500', options: ['140', '150', '160', '170'], correct: 1, difficulty: 'easy' },
      { id: 3, question: 'If a = 8, what is 3a - 4?', options: ['18', '20', '22', '24'], correct: 1, difficulty: 'easy' },
      { id: 4, question: 'Perimeter of square with side 7cm?', options: ['24 cm', '28 cm', '32 cm', '36 cm'], correct: 1, difficulty: 'easy' },
      { id: 5, question: 'What is 125% as a decimal?', options: ['1.15', '1.25', '1.35', '1.45'], correct: 1, difficulty: 'easy' },
      { id: 6, question: 'HCF of 24 and 36?', options: ['8', '10', '12', '14'], correct: 2, difficulty: 'easy' },
      { id: 7, question: 'Average of first 5 even numbers?', options: ['4', '5', '6', '7'], correct: 2, difficulty: 'easy' },
      { id: 8, question: 'Marked price $500, discount 15%, then 10% more. Final price?', options: ['$382.50', '$385', '$387.50', '$390'], correct: 0, difficulty: 'medium' },
      { id: 9, question: 'A does work in 10 days, B in 15 days. Working together for 4 days, remaining work?', options: ['1/3', '2/5', '1/2', '3/5'], correct: 0, difficulty: 'medium' },
      { id: 10, question: 'Speed of train if it crosses 300m platform in 30s at 54km/h?', options: ['150m', '200m', '250m', '300m'], correct: 1, difficulty: 'medium' },
      { id: 11, question: 'Sum invested gives $120 SI in 3 years at 4%. Principal?', options: ['$800', '$900', '$1000', '$1100'], correct: 2, difficulty: 'medium' },
      { id: 12, question: 'Ratio of boys to girls is 3:2. If 10 more girls join, ratio becomes 3:3. Total initially?', options: ['40', '50', '60', '70'], correct: 1, difficulty: 'medium' },
      { id: 13, question: 'Cost of fencing rectangular field 80m×60m at $5/m?', options: ['$1200', '$1300', '$1400', '$1500'], correct: 2, difficulty: 'medium' },
      { id: 14, question: 'A mixture of 60L has milk:water = 2:1. Water to add for 1:1 ratio?', options: ['15L', '20L', '25L', '30L'], correct: 1, difficulty: 'medium' },
      { id: 15, question: 'Two taps fill tank in 6h and 8h. Drain empties in 10h. All opened, time to fill?', options: ['5.45h', '6h', '6.5h', '7h'], correct: 0, difficulty: 'hard' },
      { id: 16, question: 'A invests $6000 for 8 months, B $8000 for 6 months. Profit ratio?', options: ['1:1', '2:1', '1:2', '3:2'], correct: 0, difficulty: 'hard' },
      { id: 17, question: 'Train A at 60km/h, B at 80km/h start towards each other 280km apart. When meet?', options: ['1.5h', '2h', '2.5h', '3h'], correct: 1, difficulty: 'hard' },
      { id: 18, question: 'Selling at 2/3 of marked price gives 20% loss. Find markup%?', options: ['80%', '100%', '120%', '150%'], correct: 0, difficulty: 'hard' },
      { id: 19, question: 'Age ratio of A:B is 4:3. After 6 years it will be 5:4. Present ages sum?', options: ['42', '49', '56', '63'], correct: 0, difficulty: 'hard' },
      { id: 20, question: 'In a 100m race, A beats B by 10m and B beats C by 10m. A beats C by?', options: ['18m', '19m', '20m', '21m'], correct: 1, difficulty: 'hard' }
    ],
    4: [
      { id: 1, question: 'What is 18 + 27?', options: ['40', '45', '50', '55'], correct: 1, difficulty: 'easy' },
      { id: 2, question: '50% of 120 is?', options: ['50', '55', '60', '65'], correct: 2, difficulty: 'easy' },
      { id: 3, question: 'If m = 6, what is m² + 4?', options: ['36', '38', '40', '42'], correct: 2, difficulty: 'easy' },
      { id: 4, question: 'Volume of cube with side 5cm?', options: ['100 cm³', '125 cm³', '150 cm³', '175 cm³'], correct: 1, difficulty: 'easy' },
      { id: 5, question: 'What is 2/5 + 1/5?', options: ['2/5', '3/5', '4/5', '1'], correct: 1, difficulty: 'easy' },
      { id: 6, question: 'Speed = 40km/h, Time = 3h, Distance?', options: ['100 km', '110 km', '120 km', '130 km'], correct: 2, difficulty: 'easy' },
      { id: 7, question: 'Profit on $80 CP and $100 SP?', options: ['$15', '$20', '$25', '$30'], correct: 1, difficulty: 'easy' },
      { id: 8, question: 'Average of 5 numbers is 20. If one number removed, avg is 18. Removed number?', options: ['24', '26', '28', '30'], correct: 2, difficulty: 'medium' },
      { id: 9, question: 'CI on $1000 at 20% for 2 years compounded annually?', options: ['$400', '$420', '$440', '$460'], correct: 2, difficulty: 'medium' },
      { id: 10, question: 'A train 150m long crosses pole in 15s. Time to cross 350m platform?', options: ['40s', '45s', '50s', '55s'], correct: 2, difficulty: 'medium' },
      { id: 11, question: 'Ratio of income to expenditure is 5:4. Savings is $2000. Income?', options: ['$8000', '$10000', '$12000', '$14000'], correct: 1, difficulty: 'medium' },
      { id: 12, question: 'A pipe fills in 6h, another in 12h, third empties in 8h. Time to fill?', options: ['6h', '8h', '10h', '12h'], correct: 1, difficulty: 'medium' },
      { id: 13, question: 'Two dice rolled. Probability of getting 10?', options: ['1/9', '1/12', '1/18', '1/36'], correct: 1, difficulty: 'medium' },
      { id: 14, question: 'Man rows 18km downstream in 3h and back in 6h. Speed of current?', options: ['1 km/h', '1.5 km/h', '2 km/h', '2.5 km/h'], correct: 1, difficulty: 'medium' },
      { id: 15, question: 'A, B, C invest in ratio 2:3:4. B withdraws half after 6 months. Profit share of B in $2700 total profit?', options: ['$600', '$700', '$800', '$900'], correct: 2, difficulty: 'hard' },
      { id: 16, question: 'Two alloys have gold:silver as 3:7 and 2:3. Ratio to mix for 5:11?', options: ['2:3', '3:2', '4:5', '5:4'], correct: 0, difficulty: 'hard' },
      { id: 17, question: 'Sum of all angles of octagon?', options: ['900°', '1080°', '1260°', '1440°'], correct: 1, difficulty: 'hard' },
      { id: 18, question: 'A does 1/4 work in 3 days. B joins, they finish in 3 more days. B alone?', options: ['9 days', '12 days', '15 days', '18 days'], correct: 1, difficulty: 'hard' },
      { id: 19, question: 'Present worth of $1210 due in 2 years at 10% CI?', options: ['$900', '$1000', '$1100', '$1200'], correct: 1, difficulty: 'hard' },
      { id: 20, question: 'Area of triangle with sides 13, 14, 15 cm (Heron\'s)?', options: ['84 cm²', '86 cm²', '88 cm²', '90 cm²'], correct: 0, difficulty: 'hard' }
    ],
    5: [
      { id: 1, question: 'What is 8 × 9?', options: ['64', '72', '80', '88'], correct: 1, difficulty: 'easy' },
      { id: 2, question: '40% of 250?', options: ['90', '100', '110', '120'], correct: 1, difficulty: 'easy' },
      { id: 3, question: 'If n = 7, what is 2n + 1?', options: ['13', '14', '15', '16'], correct: 2, difficulty: 'easy' },
      { id: 4, question: 'Circumference of circle with r=7cm (π=22/7)?', options: ['40 cm', '42 cm', '44 cm', '46 cm'], correct: 2, difficulty: 'easy' },
      { id: 5, question: 'What is 3/8 as decimal?', options: ['0.350', '0.375', '0.400', '0.425'], correct: 1, difficulty: 'easy' },
      { id: 6, question: 'Loss% if CP=$50, SP=$40?', options: ['15%', '20%', '25%', '30%'], correct: 1, difficulty: 'easy' },
      { id: 7, question: 'Mean of 5, 10, 15, 20, 25?', options: ['12', '13', '14', '15'], correct: 3, difficulty: 'easy' },
      { id: 8, question: 'Train at 72km/h crosses 240m bridge in 20s. Length of train?', options: ['140m', '150m', '160m', '170m'], correct: 2, difficulty: 'medium' },
      { id: 9, question: 'A does half work in 10 days. B joins, remaining done in 5 days. B alone?', options: ['15 days', '20 days', '25 days', '30 days'], correct: 1, difficulty: 'medium' },
      { id: 10, question: 'Price increased by 25%, consumption reduced by 20%. Change in expenditure?', options: ['0%', '+5%', '-5%', '+10%'], correct: 0, difficulty: 'medium' },
      { id: 11, question: 'SI on $4000 for 3.5 years at 6%?', options: ['$780', '$800', '$820', '840'], correct: 3, difficulty: 'medium' },
      { id: 12, question: 'Ages ratio A:B = 5:3. After 4 years ratio = 3:2. Present age of B?', options: ['10', '12', '14', '16'], correct: 1, difficulty: 'medium' },
      { id: 13, question: 'In 40L milk, 10% water. Water to add for 20% water?', options: ['4L', '5L', '6L', '7L'], correct: 1, difficulty: 'medium' },
      { id: 14, question: 'Two numbers differ by 5. Their product is 336. Sum of numbers?', options: ['35', '37', '39', '41'], correct: 1, difficulty: 'medium' },
      { id: 15, question: 'A shopkeeper gives 2 successive discounts of 20% and 10%. Equivalent single discount?', options: ['27%', '28%', '29%', '30%'], correct: 1, difficulty: 'hard' },
      { id: 16, question: 'In how many ways can word INDIA be arranged?', options: ['30', '60', '90', '120'], correct: 1, difficulty: 'hard' },
      { id: 17, question: 'A man travels 12km at 3km/h and 12km at 4km/h. Average speed?', options: ['3.33 km/h', '3.43 km/h', '3.5 km/h', '3.6 km/h'], correct: 1, difficulty: 'hard' },
      { id: 18, question: 'Surface area of hemisphere with r=7cm?', options: ['308 cm²', '462 cm²', '616 cm²', '770 cm²'], correct: 1, difficulty: 'hard' },
      { id: 19, question: '3 men or 5 women do work in 20 days. 2 men and 3 women in?', options: ['18 days', '20 days', '22 days', '24 days'], correct: 1, difficulty: 'hard' },
      { id: 20, question: 'A card drawn from pack. Probability of king or heart?', options: ['4/13', '7/26', '17/52', '16/52'], correct: 0, difficulty: 'hard' }
    ]
  },
  reasoning: {
    1: [
      { id: 1, question: 'If A is the father of B, and B is the father of C, what is C to A?', options: ['Son', 'Grandson', 'Brother', 'Uncle'], correct: 1 },
      { id: 2, question: 'In a certain code, CAT is written as DBU. How is DOG written?', options: ['EPH', 'DPH', 'EPG', 'FPH'], correct: 0 },
      { id: 3, question: 'Find the next number: 2, 6, 12, 20, 30, ?', options: ['40', '42', '44', '46'], correct: 1 },
      { id: 4, question: 'All roses are flowers. Some flowers are red. Therefore:', options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'], correct: 3 },
      { id: 5, question: 'A man walks 5 km north, then 3 km east. How far is he from the starting point?', options: ['4.2 km', '5.0 km', '5.8 km', '8.0 km'], correct: 2 },
      { id: 6, question: 'If FRIEND is coded as HUMJTK, how is MOTHER coded?', options: ['OQVJGT', 'ORVJGT', 'PQVJGT', 'PRVJGT'], correct: 0 },
      { id: 7, question: 'Which one is different? Dog, Cat, Lion, Chair', options: ['Dog', 'Cat', 'Lion', 'Chair'], correct: 3 },
      { id: 8, question: 'Complete the series: 3, 9, 27, 81, ?', options: ['162', '216', '243', '324'], correct: 2 },
      { id: 9, question: 'If today is Monday, what day will it be 100 days from now?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correct: 2 },
      { id: 10, question: 'A is taller than B. C is shorter than B. Who is the tallest?', options: ['A', 'B', 'C', 'Cannot determine'], correct: 0 },
      { id: 11, question: 'Find the odd one: 2, 5, 10, 17, 26, 37, 48', options: ['10', '17', '26', '48'], correct: 3 },
      { id: 12, question: 'If BOOK is CPPL, then DESK is?', options: ['EFTL', 'EFTK', 'DFTL', 'EFTM'], correct: 0 },
      { id: 13, question: 'In a row, A is 7th from left and 12th from right. How many people are there?', options: ['17', '18', '19', '20'], correct: 1 },
      { id: 14, question: 'Find the missing number: 5, 11, 23, 47, ?', options: ['71', '85', '95', '105'], correct: 2 },
      { id: 15, question: 'A person walks 10m south, then 10m east, then 10m north, then 10m west. Where is he?', options: ['At starting point', '10m east', '10m south', '10m north'], correct: 0 },
      { id: 16, question: 'If CAR is 3-1-18, what is DOG?', options: ['4-15-7', '4-14-7', '3-15-7', '4-15-8'], correct: 0 },
      { id: 17, question: 'Choose the odd one: Square, Rectangle, Triangle, Circle, Cube', options: ['Square', 'Rectangle', 'Circle', 'Cube'], correct: 3 },
      { id: 18, question: 'Complete: 1, 4, 9, 16, 25, ?', options: ['30', '32', '36', '40'], correct: 2 },
      { id: 19, question: 'If APPLE is BQQMF, then MANGO is?', options: ['NBOHP', 'NBOHO', 'MBOHO', 'NBOHQ'], correct: 0 },
      { id: 20, question: 'A clock shows 3:15. What is the angle between hour and minute hands?', options: ['0°', '7.5°', '15°', '22.5°'], correct: 1 }
    ],
    2: [
      { id: 1, question: 'If mother\'s brother is uncle, what is father\'s sister?', options: ['Aunt', 'Sister', 'Niece', 'Cousin'], correct: 0 },
      { id: 2, question: 'In code, RAIN is SBJO. What is SNOW?', options: ['TOPX', 'TNPX', 'TOPW', 'TNOW'], correct: 0 },
      { id: 3, question: 'Find next: 5, 10, 20, 40, 80, ?', options: ['120', '140', '160', '180'], correct: 2 },
      { id: 4, question: 'All birds have wings. Penguin is a bird. Therefore:', options: ['Penguin can fly', 'Penguin has wings', 'Penguin lives in water', 'None'], correct: 1 },
      { id: 5, question: 'A man faces north, turns 90° clockwise, then 180° anticlockwise. Which direction now?', options: ['North', 'South', 'East', 'West'], correct: 3 },
      { id: 6, question: 'If TIGER is UJHFS, what is LION?', options: ['MJPO', 'MJPN', 'MKPO', 'LIPO'], correct: 0 },
      { id: 7, question: 'Odd one out: Mercury, Venus, Earth, Mars, Sun', options: ['Mercury', 'Venus', 'Mars', 'Sun'], correct: 3 },
      { id: 8, question: 'Series: 4, 16, 64, 256, ?', options: ['512', '768', '1024', '1536'], correct: 2 },
      { id: 9, question: 'If yesterday was Friday, what will be the day after tomorrow?', options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'], correct: 1 },
      { id: 10, question: 'P is younger than Q. R is older than Q. Who is youngest?', options: ['P', 'Q', 'R', 'Cannot determine'], correct: 0 },
      { id: 11, question: 'Find odd: 7, 14, 21, 28, 34, 42', options: ['14', '21', '28', '34'], correct: 3 },
      { id: 12, question: 'If WATER is XBUFS, what is EARTH?', options: ['FBSUI', 'FBSTH', 'EASUI', 'FBRTI'], correct: 0 },
      { id: 13, question: 'In a queue, John is 5th from front and 8th from back. Total people?', options: ['11', '12', '13', '14'], correct: 1 },
      { id: 14, question: 'Missing number: 3, 7, 15, 31, ?', options: ['47', '55', '63', '71'], correct: 2 },
      { id: 15, question: 'Walk 15m north, 20m west, 15m south. Distance from start?', options: ['15m', '20m', '25m', '35m'], correct: 1 },
      { id: 16, question: 'If PEN is 16-5-14, what is INK?', options: ['9-14-11', '9-13-11', '8-14-11', '9-14-10'], correct: 0 },
      { id: 17, question: 'Odd one: Apple, Banana, Carrot, Mango, Orange', options: ['Apple', 'Banana', 'Carrot', 'Mango'], correct: 2 },
      { id: 18, question: 'Complete: 2, 5, 11, 23, 47, ?', options: ['71', '83', '95', '107'], correct: 2 },
      { id: 19, question: 'If CHAIR is DIBJS, what is TABLE?', options: ['UBCMF', 'UBCME', 'TACMF', 'UACMF'], correct: 0 },
      { id: 20, question: 'Clock shows 6:00. Angle between hands?', options: ['0°', '90°', '180°', '270°'], correct: 2 }
    ],
    3: [
      { id: 1, question: 'Brother\'s wife is called?', options: ['Sister', 'Sister-in-law', 'Cousin', 'Aunt'], correct: 1 },
      { id: 2, question: 'If BLUE is CMVF, what is GREEN?', options: ['HSFFO', 'HSFEO', 'GSFFO', 'HSFON'], correct: 0 },
      { id: 3, question: 'Next in series: 1, 1, 2, 6, 24, ?', options: ['48', '72', '96', '120'], correct: 3 },
      { id: 4, question: 'Some cats are animals. All animals have life. Therefore:', options: ['Some cats have life', 'All cats have life', 'No cats have life', 'Cannot say'], correct: 1 },
      { id: 5, question: 'Face east, turn 270° clockwise. Which direction?', options: ['North', 'South', 'East', 'West'], correct: 0 },
      { id: 6, question: 'If CLOUD is DMPVE, what is STORM?', options: ['TUPSN', 'TUPSO', 'STPSN', 'TUQSN'], correct: 0 },
      { id: 7, question: 'Different one: Red, Blue, Green, Yellow, Round', options: ['Red', 'Blue', 'Green', 'Round'], correct: 3 },
      { id: 8, question: 'Series: 1, 2, 4, 7, 11, 16, ?', options: ['20', '21', '22', '23'], correct: 2 },
      { id: 9, question: 'If March 1 is Monday, what day is March 15?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correct: 0 },
      { id: 10, question: 'A > B > C in age. Who is oldest?', options: ['A', 'B', 'C', 'Equal'], correct: 0 },
      { id: 11, question: 'Odd number: 11, 13, 17, 19, 21, 23', options: ['11', '13', '17', '21'], correct: 3 },
      { id: 12, question: 'If HOUSE is IPVTF, what is MOUSE?', options: ['NPVTF', 'NPvtf', 'MOUSE', 'NPUSF'], correct: 0 },
      { id: 13, question: 'Row of 20 people. A is 8th from left. Position from right?', options: ['11', '12', '13', '14'], correct: 2 },
      { id: 14, question: 'Find next: 2, 3, 5, 8, 12, 17, ?', options: ['21', '22', '23', '24'], correct: 2 },
      { id: 15, question: 'Go 8m east, 6m north, 8m west. Distance from start?', options: ['4m', '6m', '8m', '10m'], correct: 1 },
      { id: 16, question: 'If SUN is 19-21-14, what is MOON?', options: ['13-15-15-14', '13-14-14-13', '12-15-15-14', '13-15-14-14'], correct: 0 },
      { id: 17, question: 'Odd: Rose, Lotus, Lily, Tulip, Potato', options: ['Rose', 'Lotus', 'Tulip', 'Potato'], correct: 3 },
      { id: 18, question: 'Complete: 3, 6, 12, 24, 48, ?', options: ['72', '84', '96', '108'], correct: 2 },
      { id: 19, question: 'If PHONE is QIPOF, what is WATCH?', options: ['XBUDI', 'XBUDH', 'WBUDI', 'XATDI'], correct: 0 },
      { id: 20, question: 'Clock at 9:00. Angle between hands?', options: ['45°', '60°', '75°', '90°'], correct: 3 }
    ],
    4: [
      { id: 1, question: 'Father\'s father is called?', options: ['Uncle', 'Grandfather', 'Brother', 'Cousin'], correct: 1 },
      { id: 2, question: 'If NIGHT is OJHIU, what is LIGHT?', options: ['MJHIU', 'MJHIT', 'LIHIU', 'MJGIU'], correct: 0 },
      { id: 3, question: 'Next: 0, 1, 1, 2, 3, 5, 8, ?', options: ['11', '12', '13', '14'], correct: 2 },
      { id: 4, question: 'All metals conduct electricity. Copper is metal. Therefore:', options: ['Copper is hard', 'Copper conducts', 'Copper is heavy', 'None'], correct: 1 },
      { id: 5, question: 'Face west, 90° anticlockwise. Direction?', options: ['North', 'South', 'East', 'West'], correct: 1 },
      { id: 6, question: 'If PLANT is QMBOU, what is GRASS?', options: ['HSBTT', 'HSBTS', 'GRAAS', 'HSATT'], correct: 0 },
      { id: 7, question: 'Different: January, March, May, July, September, November', options: ['January', 'March', 'July', 'September'], correct: 3 },
      { id: 8, question: 'Series: 5, 15, 45, 135, ?', options: ['270', '315', '405', '540'], correct: 2 },
      { id: 9, question: 'Today is Wednesday. What was 3 days ago?', options: ['Sunday', 'Monday', 'Tuesday', 'Thursday'], correct: 0 },
      { id: 10, question: 'X is heavier than Y. Z is lighter than Y. Heaviest?', options: ['X', 'Y', 'Z', 'Equal'], correct: 0 },
      { id: 11, question: 'Odd: 3, 6, 9, 12, 14, 18', options: ['6', '9', '12', '14'], correct: 3 },
      { id: 12, question: 'If WINTER is XJOUFS, what is SUMMER?', options: ['TVNNFS', 'TVNNFR', 'SUNNFS', 'TVMMFS'], correct: 0 },
      { id: 13, question: '15 students in class. Ravi is 6th from top. Rank from bottom?', options: ['8', '9', '10', '11'], correct: 2 },
      { id: 14, question: 'Find: 10, 12, 16, 22, 30, ?', options: ['38', '40', '42', '44'], correct: 1 },
      { id: 15, question: 'Walk 12m south, 9m west, 12m north. Distance?', options: ['6m', '9m', '12m', '15m'], correct: 1 },
      { id: 16, question: 'If STAR is 19-20-1-18, what is MOON?', options: ['13-15-15-14', '13-14-14-13', '12-15-15-13', '13-15-14-13'], correct: 0 },
      { id: 17, question: 'Odd: Cow, Goat, Sheep, Lion, Buffalo', options: ['Cow', 'Goat', 'Sheep', 'Lion'], correct: 3 },
      { id: 18, question: 'Complete: 7, 14, 28, 56, 112, ?', options: ['168', '196', '224', '252'], correct: 2 },
      { id: 19, question: 'If PAPER is QBQFS, what is PENCIL?', options: ['QFODJM', 'QFODIM', 'PENDJM', 'QFODJL'], correct: 0 },
      { id: 20, question: 'Clock at 12:30. Angle?', options: ['150°', '165°', '175°', '180°'], correct: 1 }
    ],
    5: [
      { id: 1, question: 'Mother\'s mother is called?', options: ['Aunt', 'Grandmother', 'Sister', 'Niece'], correct: 1 },
      { id: 2, question: 'If ROYAL is SPZBM, what is QUEEN?', options: ['RVFFO', 'RVFEO', 'QUFFO', 'RVFFN'], correct: 0 },
      { id: 3, question: 'Next: 100, 50, 25, 12.5, ?', options: ['5', '6.25', '7.5', '10'], correct: 1 },
      { id: 4, question: 'Some flowers smell good. Rose is a flower. Therefore:', options: ['Rose smells good', 'Rose may smell good', 'Rose doesn\'t smell', 'None'], correct: 1 },
      { id: 5, question: 'Face south, 180° clockwise. Direction?', options: ['North', 'South', 'East', 'West'], correct: 0 },
      { id: 6, question: 'If OCEAN is PDFBO, what is RIVER?', options: ['SJWFS', 'SJVFS', 'RJWFS', 'SJWES'], correct: 0 },
      { id: 7, question: 'Different: Triangle, Square, Pentagon, Hexagon, Circle, Octagon', options: ['Triangle', 'Square', 'Circle', 'Hexagon'], correct: 2 },
      { id: 8, question: 'Series: 2, 6, 18, 54, 162, ?', options: ['324', '432', '486', '540'], correct: 2 },
      { id: 9, question: 'If today is Saturday, what will be 10 days later?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correct: 0 },
      { id: 10, question: 'A is faster than B. C is slower than B. Slowest?', options: ['A', 'B', 'C', 'Equal'], correct: 2 },
      { id: 11, question: 'Odd: 5, 10, 15, 20, 23, 30', options: ['10', '15', '20', '23'], correct: 3 },
      { id: 12, question: 'If SPRING is TQSJOH, what is AUTUMN?', options: ['BVUVNO', 'BVUVNN', 'AUTUNO', 'BVTUNO'], correct: 0 },
      { id: 13, question: '25 people in line. Sara is 10th from front. Position from back?', options: ['14', '15', '16', '17'], correct: 2 },
      { id: 14, question: 'Find: 4, 9, 19, 39, 79, ?', options: ['119', '139', '159', '179'], correct: 2 },
      { id: 15, question: 'Go 20m north, 15m east, 20m south, 15m west. Final position?', options: ['Start', '15m east', '20m north', '15m west'], correct: 0 },
      { id: 16, question: 'If EARTH is 5-1-18-20-8, what is VENUS?', options: ['22-5-14-21-19', '22-5-13-21-19', '21-5-14-21-19', '22-5-14-20-19'], correct: 0 },
      { id: 17, question: 'Odd: Sparrow, Eagle, Crow, Bat, Parrot', options: ['Sparrow', 'Eagle', 'Crow', 'Bat'], correct: 3 },
      { id: 18, question: 'Complete: 1, 8, 27, 64, 125, ?', options: ['180', '196', '216', '225'], correct: 2 },
      { id: 19, question: 'If ORANGE is PSBOHF, what is PURPLE?', options: ['QVSQMF', 'QVSQME', 'PURSME', 'QVSPMF'], correct: 0 },
      { id: 20, question: 'Clock at 3:30. Angle between hands?', options: ['60°', '65°', '70°', '75°'], correct: 3 }
    ]
  },
  technical: {
    1: [
      { id: 1, question: 'What is polymorphism in OOP?', options: ['Multiple forms', 'Data hiding', 'Code reuse', 'Object creation'], correct: 0 },
      { id: 2, question: 'Which SQL command is used to retrieve data?', options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'], correct: 1 },
      { id: 3, question: 'What is a process in OS?', options: ['Program in execution', 'Static program', 'Memory unit', 'CPU register'], correct: 0 },
      { id: 4, question: 'Which protocol is used for email?', options: ['HTTP', 'FTP', 'SMTP', 'TCP'], correct: 2 },
      { id: 5, question: 'What is encapsulation?', options: ['Wrapping data and methods', 'Inheritance', 'Polymorphism', 'Abstraction'], correct: 0 },
      { id: 6, question: 'What is a primary key?', options: ['Unique identifier', 'Foreign key', 'Index', 'Constraint'], correct: 0 },
      { id: 7, question: 'What is deadlock in OS?', options: ['Process waiting forever', 'Process termination', 'Memory leak', 'CPU overload'], correct: 0 },
      { id: 8, question: 'What layer is HTTP in OSI model?', options: ['Network', 'Transport', 'Application', 'Session'], correct: 2 },
      { id: 9, question: 'What is inheritance?', options: ['Acquiring properties', 'Data hiding', 'Creating objects', 'Method overloading'], correct: 0 },
      { id: 10, question: 'What is normalization?', options: ['Organizing data', 'Creating tables', 'Adding indexes', 'Deleting data'], correct: 0 },
      { id: 11, question: 'What is thrashing?', options: ['Excessive paging', 'CPU idle', 'Fast execution', 'Memory full'], correct: 0 },
      { id: 12, question: 'What is TCP?', options: ['Connection-oriented', 'Connectionless', 'Application layer', 'Physical layer'], correct: 0 },
      { id: 13, question: 'What is abstraction?', options: ['Hiding complexity', 'Showing details', 'Code duplication', 'Object deletion'], correct: 0 },
      { id: 14, question: 'What is JOIN in SQL?', options: ['Combine tables', 'Delete rows', 'Update records', 'Create table'], correct: 0 },
      { id: 15, question: 'What is paging?', options: ['Memory management', 'Disk management', 'CPU scheduling', 'File system'], correct: 0 },
      { id: 16, question: 'What is DNS?', options: ['Domain Name System', 'Data Network System', 'Digital Name Server', 'Dynamic Network Service'], correct: 0 },
      { id: 17, question: 'What is constructor?', options: ['Initialize object', 'Destroy object', 'Copy object', 'Compare object'], correct: 0 },
      { id: 18, question: 'What is ACID in DBMS?', options: ['Transaction properties', 'Data types', 'Table constraints', 'Query optimization'], correct: 0 },
      { id: 19, question: 'What is context switching?', options: ['Switching between processes', 'Memory swap', 'Thread creation', 'CPU reset'], correct: 0 },
      { id: 20, question: 'What port does HTTP use?', options: ['21', '25', '80', '443'], correct: 2 }
    ],
    2: [
      { id: 1, question: 'What is method overloading?', options: ['Same name different params', 'Different name same params', 'Inheritance', 'Polymorphism'], correct: 0 },
      { id: 2, question: 'What is DDL?', options: ['Data Definition Language', 'Data Description Language', 'Database Definition Language', 'Data Display Language'], correct: 0 },
      { id: 3, question: 'What is scheduling in OS?', options: ['Process execution order', 'Memory allocation', 'File management', 'Device control'], correct: 0 },
      { id: 4, question: 'What is IP address?', options: ['Unique identifier', 'Protocol name', 'Port number', 'MAC address'], correct: 0 },
      { id: 5, question: 'What is interface in OOP?', options: ['Contract for classes', 'Data structure', 'Access modifier', 'Loop construct'], correct: 0 },
      { id: 6, question: 'What is foreign key?', options: ['References primary key', 'Unique column', 'Index type', 'Data type'], correct: 0 },
      { id: 7, question: 'What is virtual memory?', options: ['Extended RAM using disk', 'Physical RAM', 'Cache memory', 'ROM'], correct: 0 },
      { id: 8, question: 'What is subnet mask?', options: ['Network identifier', 'IP address', 'MAC address', 'Port number'], correct: 0 },
      { id: 9, question: 'What is destructor?', options: ['Cleanup resources', 'Create object', 'Initialize variables', 'Copy data'], correct: 0 },
      { id: 10, question: 'What is indexing?', options: ['Speed up queries', 'Store data', 'Delete records', 'Backup data'], correct: 0 },
      { id: 11, question: 'What is semaphore?', options: ['Synchronization tool', 'Memory unit', 'CPU register', 'File type'], correct: 0 },
      { id: 12, question: 'What is UDP?', options: ['Connectionless protocol', 'Connection-oriented', 'Application layer', 'Data link'], correct: 0 },
      { id: 13, question: 'What is static method?', options: ['Class-level method', 'Object method', 'Private method', 'Protected method'], correct: 0 },
      { id: 14, question: 'What is transaction?', options: ['Unit of work', 'Table type', 'Query type', 'Database type'], correct: 0 },
      { id: 15, question: 'What is FCFS?', options: ['First Come First Serve', 'Fast CPU Fetch System', 'File Control File System', 'First Create First Store'], correct: 0 },
      { id: 16, question: 'What is router?', options: ['Forwards packets', 'Stores data', 'Displays web', 'Encrypts data'], correct: 0 },
      { id: 17, question: 'What is overriding?', options: ['Redefine parent method', 'Multiple methods', 'Create object', 'Delete method'], correct: 0 },
      { id: 18, question: 'What is view in SQL?', options: ['Virtual table', 'Physical table', 'Index', 'Constraint'], correct: 0 },
      { id: 19, question: 'What is mutex?', options: ['Mutual exclusion', 'Memory unit', 'Thread type', 'Process state'], correct: 0 },
      { id: 20, question: 'What is HTTPS port?', options: ['21', '80', '443', '8080'], correct: 2 }
    ],
    3: [
      { id: 1, question: 'What is multiple inheritance?', options: ['Inherit from multiple classes', 'Single parent', 'No inheritance', 'Interface only'], correct: 0 },
      { id: 2, question: 'What is DML?', options: ['Data Manipulation Language', 'Data Management Language', 'Database Manipulation Language', 'Data Model Language'], correct: 0 },
      { id: 3, question: 'What is Round Robin?', options: ['Time quantum scheduling', 'FCFS algorithm', 'Priority scheduling', 'Shortest job first'], correct: 0 },
      { id: 4, question: 'What is MAC address?', options: ['Hardware address', 'IP address', 'Port number', 'Protocol'], correct: 0 },
      { id: 5, question: 'What is abstract class?', options: ['Cannot instantiate', 'Can instantiate', 'No methods', 'Final class'], correct: 0 },
      { id: 6, question: 'What is trigger?', options: ['Auto-execute on event', 'Manual query', 'Table type', 'Index type'], correct: 0 },
      { id: 7, question: 'What is SJF?', options: ['Shortest Job First', 'Simple Job Function', 'System Job File', 'Scheduled Job Format'], correct: 0 },
      { id: 8, question: 'What is FTP port?', options: ['20', '21', '22', '23'], correct: 1 },
      { id: 9, question: 'What is final keyword?', options: ['Cannot change', 'Can change', 'Private access', 'Public access'], correct: 0 },
      { id: 10, question: 'What is stored procedure?', options: ['Saved SQL code', 'Table structure', 'Database backup', 'Index type'], correct: 0 },
      { id: 11, question: 'What is priority scheduling?', options: ['Based on priority', 'Based on time', 'Random order', 'FCFS'], correct: 0 },
      { id: 12, question: 'What is gateway?', options: ['Network connector', 'Web server', 'Database', 'File system'], correct: 0 },
      { id: 13, question: 'What is this keyword?', options: ['Current object', 'Parent object', 'Static variable', 'Global variable'], correct: 0 },
      { id: 14, question: 'What is cursor?', options: ['Iterator for records', 'Table pointer', 'Index type', 'Constraint'], correct: 0 },
      { id: 15, question: 'What is spooling?', options: ['Simultaneous peripheral operations', 'CPU scheduling', 'Memory management', 'File compression'], correct: 0 },
      { id: 16, question: 'What is ARP?', options: ['Address Resolution Protocol', 'Automatic Routing Protocol', 'Advanced Router Protocol', 'Application Response Protocol'], correct: 0 },
      { id: 17, question: 'What is super keyword?', options: ['Parent class reference', 'Current class', 'Static reference', 'Global reference'], correct: 0 },
      { id: 18, question: 'What is aggregation?', options: ['Group function', 'Join type', 'Table creation', 'Index type'], correct: 0 },
      { id: 19, question: 'What is fragmentation?', options: ['Wasted memory', 'Memory allocation', 'Disk storage', 'CPU usage'], correct: 0 },
      { id: 20, question: 'What is SSH port?', options: ['20', '21', '22', '23'], correct: 2 }
    ],
    4: [
      { id: 1, question: 'What is composition in OOP?', options: ['Has-a relationship', 'Is-a relationship', 'No relationship', 'Multiple inheritance'], correct: 0 },
      { id: 2, question: 'What is DCL?', options: ['Data Control Language', 'Data Create Language', 'Database Control Language', 'Data Constraint Language'], correct: 0 },
      { id: 3, question: 'What is critical section?', options: ['Shared resource code', 'Private code', 'Initialization code', 'Termination code'], correct: 0 },
      { id: 4, question: 'What is ICMP?', options: ['Internet Control Message Protocol', 'Internet Connection Management Protocol', 'Internal Control Message Protocol', 'Internet Configuration Message Protocol'], correct: 0 },
      { id: 5, question: 'What is singleton pattern?', options: ['One instance only', 'Multiple instances', 'No instances', 'Factory pattern'], correct: 0 },
      { id: 6, question: 'What is BCNF?', options: ['Boyce-Codd Normal Form', 'Basic Column Normal Form', 'Binary Constraint Normal Form', 'Base Create Normal Form'], correct: 0 },
      { id: 7, question: 'What is starvation?', options: ['Process never executes', 'Process executes fast', 'Memory overflow', 'CPU idle'], correct: 0 },
      { id: 8, question: 'What is NAT?', options: ['Network Address Translation', 'Network Access Tool', 'Node Address Table', 'Network Authentication Token'], correct: 0 },
      { id: 9, question: 'What is garbage collection?', options: ['Auto memory cleanup', 'Manual cleanup', 'Disk cleanup', 'Cache cleanup'], correct: 0 },
      { id: 10, question: 'What is atomicity?', options: ['All or nothing', 'Partial execution', 'Sequential execution', 'Parallel execution'], correct: 0 },
      { id: 11, question: 'What is aging?', options: ['Increase priority over time', 'Decrease priority', 'Remove process', 'Create process'], correct: 0 },
      { id: 12, question: 'What is DHCP?', options: ['Dynamic Host Configuration Protocol', 'Data Host Control Protocol', 'Domain Host Connection Protocol', 'Digital Host Configuration Protocol'], correct: 0 },
      { id: 13, question: 'What is package?', options: ['Group of classes', 'Single class', 'Method group', 'Variable group'], correct: 0 },
      { id: 14, question: 'What is consistency in ACID?', options: ['Valid state transition', 'Concurrent access', 'Data isolation', 'Transaction durability'], correct: 0 },
      { id: 15, question: 'What is swapping?', options: ['Move process to disk', 'Move to RAM', 'CPU switching', 'Thread creation'], correct: 0 },
      { id: 16, question: 'What OSI layer is TCP?', options: ['Network', 'Transport', 'Application', 'Session'], correct: 1 },
      { id: 17, question: 'What is immutable object?', options: ['Cannot change state', 'Can change state', 'No state', 'Multiple states'], correct: 0 },
      { id: 18, question: 'What is isolation in ACID?', options: ['Concurrent transactions separate', 'Transactions merged', 'No concurrency', 'Serial execution'], correct: 0 },
      { id: 19, question: 'What is belady anomaly?', options: ['More frames, more faults', 'Less frames, more faults', 'No relation', 'Linear relation'], correct: 0 },
      { id: 20, question: 'What is proxy server?', options: ['Intermediary server', 'Main server', 'Database server', 'File server'], correct: 0 }
    ],
    5: [
      { id: 1, question: 'What is dependency injection?', options: ['Pass dependencies', 'Create dependencies', 'Delete dependencies', 'Hide dependencies'], correct: 0 },
      { id: 2, question: 'What is durability in ACID?', options: ['Permanent changes', 'Temporary changes', 'Rollback changes', 'No changes'], correct: 0 },
      { id: 3, question: 'What is convoy effect?', options: ['Short processes wait for long', 'Long processes wait', 'No waiting', 'Equal waiting'], correct: 0 },
      { id: 4, question: 'What is firewall?', options: ['Security barrier', 'Network cable', 'Server type', 'Protocol'], correct: 0 },
      { id: 5, question: 'What is reflection?', options: ['Runtime type inspection', 'Compile time check', 'Code optimization', 'Memory management'], correct: 0 },
      { id: 6, question: 'What is denormalization?', options: ['Add redundancy for speed', 'Remove redundancy', 'Normalize further', 'Delete tables'], correct: 0 },
      { id: 7, question: 'What is race condition?', options: ['Multiple processes access shared data', 'Single process', 'No shared data', 'Sequential access'], correct: 0 },
      { id: 8, question: 'What is VPN?', options: ['Virtual Private Network', 'Virtual Public Network', 'Verified Private Network', 'Virtual Protocol Network'], correct: 0 },
      { id: 9, question: 'What is serialization?', options: ['Object to byte stream', 'Byte to object', 'Object copy', 'Object delete'], correct: 0 },
      { id: 10, question: 'What is deadlock prevention?', options: ['Stop deadlock before it happens', 'Detect and recover', 'Ignore deadlock', 'Accept deadlock'], correct: 0 },
      { id: 11, question: 'What is banker algorithm?', options: ['Deadlock avoidance', 'Scheduling', 'Memory management', 'File system'], correct: 0 },
      { id: 12, question: 'What is three-way handshake?', options: ['TCP connection setup', 'UDP connection', 'HTTP request', 'FTP transfer'], correct: 0 },
      { id: 13, question: 'What is exception handling?', options: ['Handle runtime errors', 'Compile errors', 'Logical errors', 'Syntax errors'], correct: 0 },
      { id: 14, question: 'What is sharding?', options: ['Horizontal partitioning', 'Vertical partitioning', 'No partitioning', 'Index partitioning'], correct: 0 },
      { id: 15, question: 'What is thrashing solution?', options: ['Reduce multiprogramming', 'Increase multiprogramming', 'Add more processes', 'Remove memory'], correct: 0 },
      { id: 16, question: 'What is CDN?', options: ['Content Delivery Network', 'Central Data Network', 'Content Database Network', 'Cloud Delivery Network'], correct: 0 },
      { id: 17, question: 'What is polymorphic behavior?', options: ['Same interface different implementations', 'Same implementation', 'No interface', 'Multiple interfaces'], correct: 0 },
      { id: 18, question: 'What is CAP theorem?', options: ['Consistency Availability Partition', 'Create Access Process', 'Central Application Protocol', 'Cache Access Pattern'], correct: 0 },
      { id: 19, question: 'What is demand paging?', options: ['Load page when needed', 'Load all pages', 'No paging', 'Random paging'], correct: 0 },
      { id: 20, question: 'What is load balancer?', options: ['Distribute traffic', 'Store data', 'Encrypt data', 'Delete traffic'], correct: 0 }
    ]
  },
  verbal: {
    1: [
      { id: 1, question: 'Choose the word closest in meaning to "Ephemeral":', options: ['Permanent', 'Temporary', 'Eternal', 'Solid'], correct: 1 },
      { id: 2, question: 'Select the correctly spelled word:', options: ['Occurence', 'Occurrence', 'Ocurrence', 'Occurance'], correct: 1 },
      { id: 3, question: 'Find the antonym of "Abundant":', options: ['Plentiful', 'Scarce', 'Ample', 'Copious'], correct: 1 },
      { id: 4, question: 'Complete the analogy: Book : Pages :: Tree : ?', options: ['Roots', 'Branches', 'Leaves', 'Trunk'], correct: 2 },
      { id: 5, question: 'Identify the error: "Neither of the students were present."', options: ['Neither', 'students', 'were', 'No error'], correct: 2 },
      { id: 6, question: 'Choose the word closest in meaning to "Pristine":', options: ['Dirty', 'Ancient', 'Pure', 'Modern'], correct: 2 },
      { id: 7, question: 'Select the correct sentence:', options: ['She don\'t like coffee', 'She doesn\'t likes coffee', 'She doesn\'t like coffee', 'She don\'t likes coffee'], correct: 2 },
      { id: 8, question: 'Find the synonym of "Eloquent":', options: ['Articulate', 'Silent', 'Rude', 'Awkward'], correct: 0 },
      { id: 9, question: 'Complete: "A stitch in time saves ____"', options: ['seven', 'eight', 'nine', 'ten'], correct: 2 },
      { id: 10, question: 'Choose the correctly punctuated sentence:', options: ['Lets eat grandma', 'Let\'s eat, grandma', 'Lets eat, grandma', 'Let\'s eat grandma'], correct: 1 },
      { id: 11, question: 'What does "Break the ice" mean?', options: ['Destroy something', 'Start a conversation', 'Feel cold', 'Make ice'], correct: 1 },
      { id: 12, question: 'Find the antonym of "Courage":', options: ['Bravery', 'Cowardice', 'Boldness', 'Valor'], correct: 1 },
      { id: 13, question: 'Choose the word closest in meaning to "Verbose":', options: ['Brief', 'Wordy', 'Silent', 'Clear'], correct: 1 },
      { id: 14, question: 'Identify the part of speech: "Quickly" in "She ran quickly"', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correct: 3 },
      { id: 15, question: 'Select the correct preposition: "She is good ____ mathematics"', options: ['in', 'at', 'on', 'with'], correct: 1 },
      { id: 16, question: 'Find the synonym of "Arduous":', options: ['Easy', 'Difficult', 'Simple', 'Pleasant'], correct: 1 },
      { id: 17, question: 'Choose the correct form: "I have ____ this book before"', options: ['saw', 'seen', 'see', 'seeing'], correct: 1 },
      { id: 18, question: 'What does "Piece of cake" mean?', options: ['Difficult task', 'Easy task', 'Dessert', 'Celebration'], correct: 1 },
      { id: 19, question: 'Find the antonym of "Expand":', options: ['Grow', 'Contract', 'Increase', 'Spread'], correct: 1 },
      { id: 20, question: 'Choose the correctly spelled word:', options: ['Recieve', 'Receive', 'Receve', 'Receeve'], correct: 1 }
    ],
    2: [
      { id: 1, question: 'Choose the word closest in meaning to "Benevolent":', options: ['Cruel', 'Kind', 'Angry', 'Selfish'], correct: 1 },
      { id: 2, question: 'Select the correct article: "____ university has strict rules"', options: ['A', 'An', 'The', 'No article'], correct: 0 },
      { id: 3, question: 'Find the antonym of "Optimistic":', options: ['Hopeful', 'Pessimistic', 'Positive', 'Cheerful'], correct: 1 },
      { id: 4, question: 'Complete the analogy: Doctor : Patient :: Teacher : ?', options: ['School', 'Student', 'Book', 'Classroom'], correct: 1 },
      { id: 5, question: 'Identify the error: "Each of the girls have their own room."', options: ['Each', 'girls', 'have', 'No error'], correct: 2 },
      { id: 6, question: 'Choose the word closest in meaning to "Ambiguous":', options: ['Clear', 'Vague', 'Certain', 'Definite'], correct: 1 },
      { id: 7, question: 'Select the correct tense: "By next year, I ____ my degree"', options: ['complete', 'will complete', 'will have completed', 'completed'], correct: 2 },
      { id: 8, question: 'Find the synonym of "Meticulous":', options: ['Careless', 'Careful', 'Lazy', 'Random'], correct: 1 },
      { id: 9, question: 'What does "Spill the beans" mean?', options: ['Make a mess', 'Reveal a secret', 'Cook food', 'Plant seeds'], correct: 1 },
      { id: 10, question: 'Choose the correct pronoun: "Between you and ____"', options: ['I', 'me', 'myself', 'mine'], correct: 1 },
      { id: 11, question: 'Find the antonym of "Ancient":', options: ['Old', 'Modern', 'Historic', 'Traditional'], correct: 1 },
      { id: 12, question: 'Choose the word closest in meaning to "Frugal":', options: ['Wasteful', 'Economical', 'Generous', 'Careless'], correct: 1 },
      { id: 13, question: 'Select the correctly spelled word:', options: ['Accomodate', 'Accommodate', 'Acomodate', 'Acommodate'], correct: 1 },
      { id: 14, question: 'Identify the subject: "The cat chased the mouse"', options: ['The', 'cat', 'chased', 'mouse'], correct: 1 },
      { id: 15, question: 'Choose the correct conjunction: "Study hard ____ you will fail"', options: ['and', 'but', 'or', 'so'], correct: 2 },
      { id: 16, question: 'Find the synonym of "Diligent":', options: ['Lazy', 'Hardworking', 'Careless', 'Slow'], correct: 1 },
      { id: 17, question: 'What does "Hit the nail on the head" mean?', options: ['Hurt yourself', 'Exactly right', 'Make a mistake', 'Build something'], correct: 1 },
      { id: 18, question: 'Choose the correct form: "If I ____ you, I would study more"', options: ['am', 'was', 'were', 'be'], correct: 2 },
      { id: 19, question: 'Find the antonym of "Transparent":', options: ['Clear', 'Opaque', 'Visible', 'Bright'], correct: 1 },
      { id: 20, question: 'Select the correct preposition: "She is afraid ____ spiders"', options: ['from', 'with', 'of', 'at'], correct: 2 }
    ],
    3: [
      { id: 1, question: 'Choose the word closest in meaning to "Candid":', options: ['Dishonest', 'Frank', 'Secretive', 'Shy'], correct: 1 },
      { id: 2, question: 'Select the passive voice: "The teacher praised the student"', options: ['The student praised the teacher', 'The student was praised by the teacher', 'The teacher was praised', 'The student praises'], correct: 1 },
      { id: 3, question: 'Find the antonym of "Genuine":', options: ['Real', 'Fake', 'Authentic', 'True'], correct: 1 },
      { id: 4, question: 'Complete the analogy: Pen : Write :: Knife : ?', options: ['Sharp', 'Cut', 'Metal', 'Kitchen'], correct: 1 },
      { id: 5, question: 'Identify the error: "The news are very disturbing."', options: ['news', 'are', 'very', 'No error'], correct: 1 },
      { id: 6, question: 'Choose the word closest in meaning to "Resilient":', options: ['Weak', 'Adaptable', 'Rigid', 'Fragile'], correct: 1 },
      { id: 7, question: 'Select the correct modifier: "She sang ____"', options: ['beautiful', 'beautifully', 'beauty', 'beautify'], correct: 1 },
      { id: 8, question: 'Find the synonym of "Tranquil":', options: ['Chaotic', 'Peaceful', 'Noisy', 'Active'], correct: 1 },
      { id: 9, question: 'What does "Burn the midnight oil" mean?', options: ['Stay up late working', 'Waste fuel', 'Light a fire', 'Sleep early'], correct: 0 },
      { id: 10, question: 'Choose the correct comparison: "She is ____ than her sister"', options: ['more tall', 'taller', 'tallest', 'most tall'], correct: 1 },
      { id: 11, question: 'Find the antonym of "Humble":', options: ['Modest', 'Arrogant', 'Simple', 'Meek'], correct: 1 },
      { id: 12, question: 'Choose the word closest in meaning to "Pragmatic":', options: ['Impractical', 'Practical', 'Idealistic', 'Theoretical'], correct: 1 },
      { id: 13, question: 'Select the correctly spelled word:', options: ['Occassion', 'Occasion', 'Ocasion', 'Occation'], correct: 1 },
      { id: 14, question: 'Identify the object: "He threw the ball"', options: ['He', 'threw', 'the', 'ball'], correct: 3 },
      { id: 15, question: 'Choose the correct article: "____ hour ago"', options: ['A', 'An', 'The', 'No article'], correct: 1 },
      { id: 16, question: 'Find the synonym of "Tenacious":', options: ['Weak', 'Persistent', 'Lazy', 'Giving up'], correct: 1 },
      { id: 17, question: 'What does "Under the weather" mean?', options: ['Outside', 'Feeling ill', 'Happy', 'Raining'], correct: 1 },
      { id: 18, question: 'Choose the correct form: "I wish I ____ taller"', options: ['am', 'was', 'were', 'be'], correct: 2 },
      { id: 19, question: 'Find the antonym of "Mandatory":', options: ['Required', 'Optional', 'Necessary', 'Essential'], correct: 1 },
      { id: 20, question: 'Select the correct preposition: "She is interested ____ music"', options: ['at', 'in', 'on', 'with'], correct: 1 }
    ],
    4: [
      { id: 1, question: 'Choose the word closest in meaning to "Eloquent":', options: ['Inarticulate', 'Expressive', 'Silent', 'Awkward'], correct: 1 },
      { id: 2, question: 'Select the correct clause: "I know ____ she lives"', options: ['where', 'were', 'wear', 'ware'], correct: 0 },
      { id: 3, question: 'Find the antonym of "Zealous":', options: ['Enthusiastic', 'Apathetic', 'Passionate', 'Eager'], correct: 1 },
      { id: 4, question: 'Complete the analogy: Chapter : Book :: Verse : ?', options: ['Music', 'Poem', 'Page', 'Story'], correct: 1 },
      { id: 5, question: 'Identify the error: "One of my friend is coming."', options: ['One', 'friend', 'is', 'No error'], correct: 1 },
      { id: 6, question: 'Choose the word closest in meaning to "Vindicate":', options: ['Blame', 'Justify', 'Accuse', 'Condemn'], correct: 1 },
      { id: 7, question: 'Select the correct voice: "Let the work be done"', options: ['Active', 'Passive', 'Both', 'Neither'], correct: 1 },
      { id: 8, question: 'Find the synonym of "Precarious":', options: ['Safe', 'Risky', 'Secure', 'Stable'], correct: 1 },
      { id: 9, question: 'What does "Bite off more than you can chew" mean?', options: ['Eat a lot', 'Take on too much', 'Be hungry', 'Share food'], correct: 1 },
      { id: 10, question: 'Choose the correct determiner: "____ information is confidential"', options: ['This', 'These', 'Those', 'Them'], correct: 0 },
      { id: 11, question: 'Find the antonym of "Lucid":', options: ['Clear', 'Confusing', 'Bright', 'Simple'], correct: 1 },
      { id: 12, question: 'Choose the word closest in meaning to "Tenuous":', options: ['Strong', 'Weak', 'Solid', 'Thick'], correct: 1 },
      { id: 13, question: 'Select the correctly spelled word:', options: ['Embarass', 'Embarrass', 'Embarras', 'Embbarrass'], correct: 1 },
      { id: 14, question: 'Identify the complement: "She became a doctor"', options: ['She', 'became', 'a', 'doctor'], correct: 3 },
      { id: 15, question: 'Choose the correct conjunction: "I like tea ____ coffee"', options: ['but', 'and', 'or', 'so'], correct: 1 },
      { id: 16, question: 'Find the synonym of "Verbose":', options: ['Concise', 'Wordy', 'Brief', 'Short'], correct: 1 },
      { id: 17, question: 'What does "Cost an arm and a leg" mean?', options: ['Free', 'Very expensive', 'Dangerous', 'Painful'], correct: 1 },
      { id: 18, question: 'Choose the correct form: "She ____ here for three years"', options: ['works', 'is working', 'has been working', 'worked'], correct: 2 },
      { id: 19, question: 'Find the antonym of "Novice":', options: ['Beginner', 'Expert', 'Amateur', 'Learner'], correct: 1 },
      { id: 20, question: 'Select the correct preposition: "He is superior ____ me"', options: ['than', 'from', 'to', 'over'], correct: 2 }
    ],
    5: [
      { id: 1, question: 'Choose the word closest in meaning to "Pernicious":', options: ['Beneficial', 'Harmful', 'Helpful', 'Kind'], correct: 1 },
      { id: 2, question: 'Select the reported speech: He said, "I am busy"', options: ['He said he is busy', 'He said he was busy', 'He says he is busy', 'He said I am busy'], correct: 1 },
      { id: 3, question: 'Find the antonym of "Esoteric":', options: ['Obscure', 'Common', 'Mysterious', 'Complex'], correct: 1 },
      { id: 4, question: 'Complete the analogy: Sculptor : Statue :: Painter : ?', options: ['Brush', 'Canvas', 'Painting', 'Color'], correct: 2 },
      { id: 5, question: 'Identify the error: "The committee have made their decision."', options: ['committee', 'have', 'their', 'No error'], correct: 1 },
      { id: 6, question: 'Choose the word closest in meaning to "Gregarious":', options: ['Shy', 'Sociable', 'Lonely', 'Reserved'], correct: 1 },
      { id: 7, question: 'Select the correct participle: "The ____ child cried loudly"', options: ['frighten', 'frightens', 'frightened', 'frightening'], correct: 2 },
      { id: 8, question: 'Find the synonym of "Ubiquitous":', options: ['Rare', 'Omnipresent', 'Scarce', 'Limited'], correct: 1 },
      { id: 9, question: 'What does "The ball is in your court" mean?', options: ['Play sports', 'It\'s your decision', 'You lost', 'Game over'], correct: 1 },
      { id: 10, question: 'Choose the correct infinitive: "She wants ____ a doctor"', options: ['be', 'to be', 'being', 'been'], correct: 1 },
      { id: 11, question: 'Find the antonym of "Prodigal":', options: ['Wasteful', 'Thrifty', 'Lavish', 'Extravagant'], correct: 1 },
      { id: 12, question: 'Choose the word closest in meaning to "Alacrity":', options: ['Slowness', 'Eagerness', 'Reluctance', 'Delay'], correct: 1 },
      { id: 13, question: 'Select the correctly spelled word:', options: ['Mischievous', 'Mischevious', 'Mischeivous', 'Mischevous'], correct: 0 },
      { id: 14, question: 'Identify the adverbial phrase: "She danced with grace"', options: ['She', 'danced', 'with grace', 'grace'], correct: 2 },
      { id: 15, question: 'Choose the correct modal: "You ____ see a doctor"', options: ['can', 'should', 'may', 'will'], correct: 1 },
      { id: 16, question: 'Find the synonym of "Enigmatic":', options: ['Clear', 'Mysterious', 'Obvious', 'Simple'], correct: 1 },
      { id: 17, question: 'What does "Let the cat out of the bag" mean?', options: ['Free an animal', 'Reveal a secret', 'Make noise', 'Open a package'], correct: 1 },
      { id: 18, question: 'Choose the correct form: "I would rather ____ at home"', options: ['stay', 'to stay', 'staying', 'stayed'], correct: 0 },
      { id: 19, question: 'Find the antonym of "Loquacious":', options: ['Talkative', 'Taciturn', 'Chatty', 'Verbose'], correct: 1 },
      { id: 20, question: 'Select the correct preposition: "She has been working ____ morning"', options: ['from', 'since', 'for', 'at'], correct: 1 }
    ]
  },
  pseudocode: {
    1: [
      { id: 1, question: 'What does linear search return if element not found?', options: ['-1', '0', 'null', 'exception'], correct: 0 },
      { id: 2, question: 'Time complexity of linear search?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 0 },
      { id: 3, question: 'Can linear search work on unsorted arrays?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 4, question: 'Best case time complexity of linear search?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], correct: 0 },
      { id: 5, question: 'Space complexity of linear search?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], correct: 0 },
      { id: 6, question: 'What is checked in each iteration of linear search?', options: ['Current element', 'All elements', 'First element', 'Last element'], correct: 0 },
      { id: 7, question: 'Linear search is also known as?', options: ['Sequential search', 'Binary search', 'Jump search', 'Quick search'], correct: 0 },
      { id: 8, question: 'Is linear search stable?', options: ['Yes', 'No', 'Sometimes', 'Depends'], correct: 0 },
      { id: 9, question: 'Linear search works best when?', options: ['Small arrays', 'Large arrays', 'Sorted arrays', 'Binary arrays'], correct: 0 },
      { id: 10, question: 'What does loop counter start from in linear search?', options: ['0', '1', 'n-1', 'n'], correct: 0 },
      { id: 11, question: 'Average case complexity of linear search?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 0 },
      { id: 12, question: 'Is linear search recursive?', options: ['Can be both', 'Only iterative', 'Only recursive', 'Neither'], correct: 0 },
      { id: 13, question: 'Which data structure works with linear search?', options: ['Arrays and Lists', 'Only arrays', 'Only lists', 'Trees'], correct: 0 },
      { id: 14, question: 'How many comparisons in worst case for n elements?', options: ['n', 'n-1', 'n+1', 'n/2'], correct: 0 },
      { id: 15, question: 'Can linear search find multiple occurrences?', options: ['Yes, with modification', 'No', 'Always', 'Never'], correct: 0 },
      { id: 16, question: 'Is linear search in-place?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 17, question: 'Does linear search require sorted data?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 18, question: 'What happens after element is found?', options: ['Return index', 'Continue search', 'Return element', 'Exit program'], correct: 0 },
      { id: 19, question: 'Linear search efficiency compared to binary?', options: ['Less efficient', 'More efficient', 'Same', 'Depends'], correct: 0 },
      { id: 20, question: 'Is linear search adaptive?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 }
    ],
    2: [
      { id: 1, question: 'Binary search requires array to be?', options: ['Sorted', 'Unsorted', 'Random', 'Reversed'], correct: 0 },
      { id: 2, question: 'Time complexity of binary search?', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'], correct: 0 },
      { id: 3, question: 'How is mid calculated?', options: ['(left + right) / 2', 'left + right', 'left / 2', 'right / 2'], correct: 0 },
      { id: 4, question: 'Best case time complexity of binary search?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], correct: 0 },
      { id: 5, question: 'Space complexity of iterative binary search?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], correct: 0 },
      { id: 6, question: 'When to move left pointer right?', options: ['Target > mid', 'Target < mid', 'Always', 'Never'], correct: 0 },
      { id: 7, question: 'Binary search uses which technique?', options: ['Divide and conquer', 'Dynamic programming', 'Greedy', 'Backtracking'], correct: 0 },
      { id: 8, question: 'Space complexity of recursive binary search?', options: ['O(log n)', 'O(1)', 'O(n)', 'O(n²)'], correct: 0 },
      { id: 9, question: 'When does binary search stop?', options: ['left > right', 'left < right', 'left = right', 'Never'], correct: 0 },
      { id: 10, question: 'Can binary search work on linked lists efficiently?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 11, question: 'Average case complexity of binary search?', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'], correct: 0 },
      { id: 12, question: 'What happens if element not found?', options: ['Return -1', 'Return 0', 'Exception', 'Continue'], correct: 0 },
      { id: 13, question: 'Binary search divides search space by?', options: ['Half', 'Third', 'Quarter', 'Double'], correct: 0 },
      { id: 14, question: 'Is binary search stable?', options: ['Not applicable', 'Yes', 'No', 'Sometimes'], correct: 0 },
      { id: 15, question: 'Maximum comparisons for 1000 elements?', options: ['~10', '~100', '~1000', '~10000'], correct: 0 },
      { id: 16, question: 'When target < mid, update?', options: ['right = mid - 1', 'left = mid + 1', 'right = mid', 'left = mid'], correct: 0 },
      { id: 17, question: 'Is binary search in-place?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 18, question: 'Binary search on rotated array?', options: ['Modified version', 'Direct', 'Not possible', 'Same'], correct: 0 },
      { id: 19, question: 'Which is faster: binary or linear search?', options: ['Binary for large sorted', 'Linear always', 'Same', 'Depends'], correct: 0 },
      { id: 20, question: 'Can binary search find first occurrence?', options: ['Yes, with modification', 'No', 'Always', 'Never'], correct: 0 }
    ],
    3: [
      { id: 1, question: 'Worst case time complexity of bubble sort?', options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 2, question: 'Best case time complexity of bubble sort?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 0 },
      { id: 3, question: 'Is bubble sort stable?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 4, question: 'Space complexity of bubble sort?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], correct: 0 },
      { id: 5, question: 'What happens in each pass?', options: ['Largest bubbles to end', 'Smallest to start', 'Random swap', 'No change'], correct: 0 },
      { id: 6, question: 'How many passes for n elements?', options: ['n-1', 'n', 'n+1', 'n/2'], correct: 0 },
      { id: 7, question: 'Is bubble sort in-place?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 8, question: 'When to stop if already sorted?', options: ['No swaps in pass', 'After first pass', 'Never', 'Always'], correct: 0 },
      { id: 9, question: 'Average case complexity?', options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 10, question: 'Bubble sort is also called?', options: ['Sinking sort', 'Quick sort', 'Merge sort', 'Heap sort'], correct: 0 },
      { id: 11, question: 'Comparisons in first pass?', options: ['n-1', 'n', 'n-2', 'n/2'], correct: 0 },
      { id: 12, question: 'Is bubble sort adaptive?', options: ['Yes, with flag', 'No', 'Always', 'Never'], correct: 0 },
      { id: 13, question: 'Total comparisons in worst case?', options: ['n(n-1)/2', 'n²', 'n', 'n log n'], correct: 0 },
      { id: 14, question: 'When is bubble sort efficient?', options: ['Small or nearly sorted', 'Large arrays', 'Random arrays', 'Never'], correct: 0 },
      { id: 15, question: 'Does bubble sort use recursion?', options: ['Usually iterative', 'Always recursive', 'Never recursive', 'Both'], correct: 0 },
      { id: 16, question: 'After pass i, how many elements sorted?', options: ['i', 'i+1', 'i-1', 'n-i'], correct: 0 },
      { id: 17, question: 'Is bubble sort online?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 18, question: 'Can optimize by reducing?', options: ['Comparisons in each pass', 'Passes', 'Space', 'Nothing'], correct: 0 },
      { id: 19, question: 'Bubble sort compared to insertion sort?', options: ['Similar complexity', 'Much faster', 'Much slower', 'Same'], correct: 0 },
      { id: 20, question: 'Is bubble sort practical for large data?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 }
    ],
    4: [
      { id: 1, question: 'Time complexity of merge sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 2, question: 'Space complexity of merge sort?', options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'], correct: 0 },
      { id: 3, question: 'Is merge sort stable?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 4, question: 'Merge sort uses which technique?', options: ['Divide and conquer', 'Greedy', 'Dynamic programming', 'Backtracking'], correct: 0 },
      { id: 5, question: 'Best case complexity of merge sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(1)'], correct: 0 },
      { id: 6, question: 'Worst case complexity of merge sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 7, question: 'Is merge sort in-place?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 8, question: 'How many parts does merge sort divide?', options: ['Two', 'Three', 'Four', 'Multiple'], correct: 0 },
      { id: 9, question: 'Is merge sort adaptive?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 10, question: 'When is merge operation performed?', options: ['After dividing', 'Before dividing', 'During dividing', 'Never'], correct: 0 },
      { id: 11, question: 'Merge sort is suitable for?', options: ['Large datasets', 'Small datasets', 'Nearly sorted', 'Never useful'], correct: 0 },
      { id: 12, question: 'What is auxiliary space used for?', options: ['Temporary storage', 'Sorting', 'Comparison', 'Nothing'], correct: 0 },
      { id: 13, question: 'Can merge sort be parallelized?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 14, question: 'Merge sort vs quick sort stability?', options: ['Merge stable', 'Quick stable', 'Both stable', 'Neither stable'], correct: 0 },
      { id: 15, question: 'Number of recursive calls?', options: ['2', '1', '3', 'n'], correct: 0 },
      { id: 16, question: 'Height of recursion tree?', options: ['log n', 'n', 'n²', 'n log n'], correct: 0 },
      { id: 17, question: 'Is merge sort practical?', options: ['Yes, for large data', 'No', 'Only small data', 'Never'], correct: 0 },
      { id: 18, question: 'Merge two sorted arrays complexity?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 0 },
      { id: 19, question: 'Does merge sort use extra space?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 20, question: 'Is merge sort comparison based?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 }
    ],
    5: [
      { id: 1, question: 'Average time complexity of quick sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 2, question: 'Worst case time complexity of quick sort?', options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'], correct: 0 },
      { id: 3, question: 'Space complexity of quick sort?', options: ['O(log n)', 'O(1)', 'O(n)', 'O(n²)'], correct: 0 },
      { id: 4, question: 'Is quick sort stable?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 5, question: 'Quick sort uses which technique?', options: ['Divide and conquer', 'Greedy', 'Dynamic programming', 'Backtracking'], correct: 0 },
      { id: 6, question: 'What is pivot?', options: ['Partitioning element', 'First element', 'Last element', 'Middle element'], correct: 0 },
      { id: 7, question: 'Is quick sort in-place?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 8, question: 'Best case complexity of quick sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(1)'], correct: 0 },
      { id: 9, question: 'When does worst case occur?', options: ['Already sorted', 'Random', 'Reverse sorted', 'Both A and C'], correct: 3 },
      { id: 10, question: 'Is quick sort adaptive?', options: ['No', 'Yes', 'Sometimes', 'Always'], correct: 0 },
      { id: 11, question: 'Quick sort partition does what?', options: ['Rearrange around pivot', 'Sort completely', 'Merge arrays', 'Search element'], correct: 0 },
      { id: 12, question: 'Average vs merge sort?', options: ['Both O(n log n)', 'Quick faster', 'Merge faster', 'Different'], correct: 0 },
      { id: 13, question: 'Can quick sort be parallelized?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 14, question: 'How to choose good pivot?', options: ['Random or median', 'Always first', 'Always last', 'No choice'], correct: 0 },
      { id: 15, question: 'Quick sort practical?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 },
      { id: 16, question: 'Elements smaller than pivot go?', options: ['Left', 'Right', 'Anywhere', 'Nowhere'], correct: 0 },
      { id: 17, question: 'Elements larger than pivot go?', options: ['Right', 'Left', 'Anywhere', 'Nowhere'], correct: 0 },
      { id: 18, question: 'Quick sort cache performance?', options: ['Good', 'Bad', 'Average', 'Worst'], correct: 0 },
      { id: 19, question: 'Recursion depth in average case?', options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], correct: 0 },
      { id: 20, question: 'Is quick sort comparison based?', options: ['Yes', 'No', 'Sometimes', 'Never'], correct: 0 }
    ]
  }
};

export default function TestExam() {
  const { category, testId } = useParams();
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'easy';
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(20).fill(null));
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);

  // Filter and randomize questions based on difficulty
  const questions = useMemo(() => {
    const allQuestions = testData[category || '']?.[Number(testId)] || [];
    // Filter by difficulty if questions have difficulty property
    const filteredQuestions = allQuestions.filter((q: Question) => 
      !q.difficulty || q.difficulty === difficulty
    );
    // If not enough questions for selected difficulty, use all questions
    const questionsToUse = filteredQuestions.length >= 20 ? filteredQuestions : allQuestions;
    return selectRandomQuestions(questionsToUse, 20);
  }, [category, testId, difficulty]) as Question[];

  useEffect(() => {
    if (!isSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (!isSubmitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[questionIndex] = answerIndex;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q: any, i: number) => {
      if (selectedAnswers[i] === q.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsSubmitted(true);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!questions || questions.length === 0) {
    return <div>Test not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/tests')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto\" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {category?.charAt(0).toUpperCase() + category?.slice(1)} Test {testId}
            </h1>
            <span className={`text-xs font-semibold px-2 py-1 rounded capitalize ${
              difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
              difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
              'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
            }`}>
              {difficulty}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    {minutes}:{seconds.toString().padStart(2, '0')}
                  </span>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleSubmit}
                >
                  End Test
                </Button>
              </>
            )}
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {!isSubmitted ? (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Question {currentQuestion + 1} of {questions.length}
                </h3>
                <span className="text-sm text-muted-foreground">
                  Answered: {selectedAnswers.filter(a => a !== null).length}/{questions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option: string, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleAnswerSelect(currentQuestion, index)}
                    >
                      <p className="font-medium">{option}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  {currentQuestion === questions.length - 1 ? (
                    <Button onClick={handleSubmit} className="flex-1">
                      Submit Test
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                      className="flex-1"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-10 gap-2">
              {questions.map((_: any, i: number) => (
                <Button
                  key={i}
                  variant={currentQuestion === i ? 'default' : selectedAnswers[i] !== null ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentQuestion(i)}
                  className="aspect-square"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Test Completed!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">
                    {score}/{questions.length}
                  </div>
                  <p className="text-xl text-muted-foreground">
                    You scored {((score / questions.length) * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant={showAnswers ? "secondary" : "default"}
                    onClick={() => setShowAnswers(!showAnswers)} 
                    className="flex-1"
                  >
                    {showAnswers ? "Hide Answers" : "Check Answers"}
                  </Button>
                  <Button onClick={() => navigate('/tests')} variant="outline" className="flex-1">
                    Back to Tests
                  </Button>
                </div>
              </CardContent>
            </Card>

            {showAnswers && (
              <div className="space-y-4">
                {questions.map((q: any, i: number) => (
                  <Card key={i} className={selectedAnswers[i] === q.correct ? 'border-green-500' : 'border-red-500'}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>Question {i + 1}</span>
                        {selectedAnswers[i] === q.correct ? (
                          <span className="text-green-500 text-sm">✓ Correct</span>
                        ) : (
                          <span className="text-red-500 text-sm">✗ Wrong</span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-medium">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option: string, optIndex: number) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg border-2 ${
                              optIndex === q.correct
                                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                : selectedAnswers[i] === optIndex
                                ? 'border-red-500 bg-red-50 dark:bg-red-950'
                                : 'border-border'
                            }`}
                          >
                            <p className="flex items-center gap-2">
                              {optIndex === q.correct && <span className="text-green-500">✓</span>}
                              {selectedAnswers[i] === optIndex && optIndex !== q.correct && <span className="text-red-500">✗</span>}
                              {option}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}