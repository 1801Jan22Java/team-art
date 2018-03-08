import { User } from './user';
import { Animal } from './animal';

export interface Application {
    applicationID: number;
    address: string;
    phone: string;
    profession: string;
    date: Date;
    housetype: string;
    appStatus: string;
    animal: Animal;
    user: User;
}
