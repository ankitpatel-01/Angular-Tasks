export class User {
    firstname: string;
    lastname: string;
    email: string;
    phoneNo: number;
    gender: string;
    department: number;
    doj: string;
    id: string;

    constructor(firstname: string, lastname: string, email: string, phoneNo: number, gender: string, department: number, doj: string, id: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNo = phoneNo;
        this.gender = gender;
        this.department = department;
        this.doj = doj;
        this.id = id;
    }
}