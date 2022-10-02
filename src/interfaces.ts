export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  priority: number;
}

export interface FormDataInterface {
  title: string;
  description: string;
  priority: number;
}

export interface QuoteInterface {
  text: string;
  author: string;
}

