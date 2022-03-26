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
}

export class Filters{
    gender: string;
    department: number;
    isPermanent:boolean;
    isMarried:boolean;
    isAvailable:boolean;
}