import { User } from './user';
import { Animal } from './animal';

export interface Meetup {
   meetupID: number;
   date: Date;
   animal: Animal;
   user: User;
   meetupStatus: string;
}