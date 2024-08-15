export interface Forms {
  questionText: string;
  difficulty: string;
  choices: {
    choice: string;
    isCorrect: boolean;
  }[];
}
