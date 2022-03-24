export class User {
    firstname: string;
    lastname: string;
    email: string;
    phoneNo: number;
    gender: string;
    department: number;
    doj: string;
    id: number;
    isPermanent:boolean;
    isMarried:boolean;
    isAvailable:boolean;

    constructor(firstname: string, lastname: string, email: string, phoneNo: number, gender: string, department: number, doj: string, id: number,isPermanent:boolean,isMarried:boolean,isAvailable:boolean) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNo = phoneNo;
        this.gender = gender;
        this.department = department;
        this.doj = doj;
        this.id = id;
        this.isPermanent = isPermanent;
        this.isMarried = isMarried;
        this.isAvailable = isAvailable;
    }

    // public getFullName(): string {
    //     return this.firstname.concat(" ", this.lastname);
    // }
}


export class Filters{
    gender: string;
    isPermanent:boolean;
    isMarried:boolean;
    isAvailable:boolean;
}