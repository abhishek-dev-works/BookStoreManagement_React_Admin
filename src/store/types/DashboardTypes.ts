import { IBook } from "./BookTypes";
import { RecordStatus, IRecord } from "./RecordTypes";
import { IUser } from "./UserTypes";

export interface dashboardInitialState {
    records: IRecord[];
    filters : {
        userFilter: IUser[];
        bookFilter: IBook[];
        statusFilter: RecordStatus | null;
        dateFilter: string;
    }
    loading: boolean;
    error: string | null;
    user?: IUser;
    book?: IBook;
    record?: IRecord;
  }