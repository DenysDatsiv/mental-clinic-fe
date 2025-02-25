export interface Question {
  question?: string;
  labelText: string[];
  example?: string;
  value: number[];
  name: string;
  _id: string;
}

export interface ResultInterpretation {
  range: [number, number | null];
  result: string;
  type?:string;
  name: string;
  questionIndex: [number, number | null],
  _id: string;
}

export interface Test {
  name?: string;
  type?: string;
  specialTest?: string
  description?: string;
  duration?: string;
  instructions?: string;
  whyTest?: string;
  pdfLink?: string;
  questions?: Question[];
  commonMessage?: string;
  resultInterpretation?: ResultInterpretation[];
  _id?: string;
  __v?: number;
}
