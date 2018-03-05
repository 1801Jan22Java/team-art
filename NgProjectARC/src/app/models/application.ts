import { User } from './user';
import { Animal } from './animal';

export class Application {
    applicationID: number;
    address: string;
    phone: string;
    profession: string;
    date: Date;
    housetype: string;
    appStatus: string;
    animal: Animal;
    user: User;

    constructor(applicationID:number, address: string, phone: string, profession: string,
        date: Date, housetype: string, appStatus: string, animal: Animal, user: User) {
        this.applicationID = applicationID;
        this.address = address;
        this.phone = phone;
        this.profession = profession;
        this.date = date;
        this.housetype = housetype;
        this.appStatus = appStatus;
        this.animal = animal;
        this.user = user;
    }
}
