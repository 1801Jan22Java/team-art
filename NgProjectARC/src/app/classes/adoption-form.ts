export class AdoptionForm {
    applicationId: number;
    animalName: string;
    applicantName: string;
    address: string;
    profession: string;
    phoneNumber: number;
    housingType: string;
    status: string;
    date: string;
    constructor(applicationId: number, animalName: string, applicantName: string, address: string,
        profession: string, phoneNumber: number, housingType: string, status: string, date: string) {
        this.applicationId = applicationId;
        this.animalName = animalName;
        this.applicantName = applicantName;
        this.address = address;
        this.profession = profession;
        this.phoneNumber = phoneNumber;
        this.housingType = housingType;
        this.status = status;
        this.date = date;
    }
}
