export interface ITodo {
  id: string;
  title: string;
  description: string;
  priority: number;
}

export interface IEditableTodo {
  todo: ITodo;
  update: (todo: ITodo) => void;
  remove: (id: string) => void;
}

export interface IEditableTodoList {
  todos: ITodo[];
  update: (todo: ITodo) => void;
  remove: (id: string) => void;
}

export interface IFormData {
  title: string;
  description: string;
  priority: number;
}

export interface IFormProp {
  handleSave: (formData: IFormData) => void;
  initialFormData?: IFormData;
}

export interface IQuote {
  text: string;
  author: string;
}

export interface IQuoteDisplay {
  getQuote: () => void;
  quote: IQuote | null;
}
