class Intern {
    public id: number;
   public name: string;
   public company:string;

   constructor(id:number,name:string,company:string){
       this.id = id;
       this.name = name;
       this.company = company;
   }
}

export const INTERNS: Intern[] = [
    {
        id:1,
        name:"Ankit Patel",
        company:"1Rivet"
    },
    {
        id:2,
        name:"Aman Patel",
        company:"1Rivet"
    },
    {
        id:3,
        name:"Jay Patel",
        company:"gcvlc"
    },
    {
        id:4,
        name:"Harsh Singh",
        company:"Enjay"
    },
    {
        id:5,
        name:"Amit",
        company:"google"
    },
];