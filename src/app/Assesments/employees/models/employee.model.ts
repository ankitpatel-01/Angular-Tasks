export class Employee {
    id!: number;
    name: string;
    email: string;
    mobile: number;
    city: string;
    gender: number;
    department: number;
    hireDate: string;
    isPermanent: boolean;

    constructor(name: string,
        email: string,
        mobile: number,
        city: string,
        gender: number,
        department: number,
        hireDate: string,
        isPermanent: boolean,id: number ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.city = city;
        this.gender = gender
        this.department = department;
        this.hireDate = hireDate;
        this.isPermanent = isPermanent
    }
}