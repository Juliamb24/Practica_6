import { IUser } from "./iuser.interface";

export interface Ipage {
    page: number;
    per_page: number;
    total_pages: number;
    results: IUser;
}
