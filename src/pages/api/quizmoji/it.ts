import { NextApiResponse } from "next";

const quizes = [
  {
    id: 1,
    question: "🍎",
    description: null,
    answers: {
      answer_a: "apple",
      answer_b: "peach",
      answer_c: "strawberry",
      answer_d: "grape",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "it",
    difficulty: "easy",
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end(JSON.stringify(quizes));
};
