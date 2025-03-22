export interface IBook {
    id: number;
    name: string;
    author: string;
    genre: string;
    publication?: string;
    publishedYear: number;
  }
  
  export interface BookState {
    books: IBook[];
    loading: boolean;
    error: string | null;
  }
  