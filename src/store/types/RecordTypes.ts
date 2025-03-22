export interface IRecord {
    id: number;
    userId: number;
    bookId: number;
    issueDate: string; 
    dueDate: string;
    status: RecordStatus | null; 
  }
  
  export enum RecordStatus {
    Borrowed = "Borrowed",
    Returned = "Returned",
    Overdue = "Overdue",
  }