// task1
let nums : number[] = [1,2,3];


//task2
let arr : (number|string)[];
arr = [1,'a',2,'b'];

//?task3/////////////

let x : number|string;
x = 20;
x="a"

//^ task4/////////

function sumi(A:number=0,B:number=0):number{
    return A+B;
}

sumi();

function add(z1?:number,z2?:number):any{
    if(z1 !== undefined && z2 !== undefined){return z1+z2;}
    else if( z1!==undefined){return z1;}
    else if (z2 !== undefined){return z2;}
     return;
}

add();

//! task 5

interface IEmployee {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

class Employee implements IEmployee {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

    private username: string;

    constructor(employee: IEmployee,username?: string) {
        this.id = employee.id;
        this.name = employee.name;
        this.email = employee.email;
        this.address = employee.address;
        this.username = username || 'default name'; 
    }
}

//! task 6

class Manager extends Employee {
    constructor(employee: IEmployee) {
        super(employee);
    }

    viewAddress(): void {
        console.log(this.address);
    }
}

//? task 7

interface IAccount {
    Date_of_opening: String;
    addCustomer: () => void;
    removeCustomer: () => void;
  }
  
  abstract class Account implements IAccount {
    Acc_no: number;
    Balance: number;
    Date_of_opening: String;
  
    constructor(Acc_no: number, Balance: number, Date_of_opening: string) {
      this.Acc_no = Acc_no;
      this.Balance = Balance;
      this.Date_of_opening = Date_of_opening;
    }
  
    addCustomer(): void {
      console.log("Added");
    }
  
    removeCustomer(): void {
      console.log("removed");
    }
  
    abstract debitAmount(): number;
    abstract CreditAmount(): number;
    abstract getBalance(): number;
  }
  
  class Saving_Account extends Account {
    min_balance: number;
    constructor(Acc_no: number, Balance: number, min_balance: number, Date_of_opening: string) {
      super(Acc_no, Balance, Date_of_opening);
      this.min_balance = min_balance;
    }
  
    debitAmount(): number {
      return 500;
    }
  
    CreditAmount(): number {
      return 100;
    }
  
    getBalance(): number {
      return this.Balance;
    }
  }
  class Current_Account extends Account {
 
    Interest_rate: number;
  
    constructor(Acc_no: number, Balance: number, Interest_rate: number, Date_of_opening: string) {
      super(Acc_no, Balance, Date_of_opening);
      this.Interest_rate = Interest_rate;
    }
  
    debitAmount(): number {
      return 500;
    }
  
    CreditAmount(): number {
      return 100;
    }
  
    getBalance(): number {
      return this.Balance;
    }
  }