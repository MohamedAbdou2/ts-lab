// task1
let nums = [1, 2, 3];
//task2
let arr;
arr = [1, 'a', 2, 'b'];
//?task3/////////////
let x;
x = 20;
x = "a";
//^ task4/////////
function sumi(A = 0, B = 0) {
    return A + B;
}
sumi();
function add(z1, z2) {
    if (z1 !== undefined && z2 !== undefined) {
        return z1 + z2;
    }
    else if (z1 !== undefined) {
        return z1;
    }
    else if (z2 !== undefined) {
        return z2;
    }
    return;
}
add();
class Employee {
    constructor(employee, username) {
        this.id = employee.id;
        this.name = employee.name;
        this.email = employee.email;
        this.address = employee.address;
        this.username = username || 'default name';
    }
}
//! task 6
class Manager extends Employee {
    constructor(employee) {
        super(employee);
    }
    viewAddress() {
        console.log(this.address);
    }
}
class Account {
    constructor(Acc_no, Balance, Date_of_opening) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        console.log("Added");
    }
    removeCustomer() {
        console.log("removed");
    }
}
class Saving_Account extends Account {
    constructor(Acc_no, Balance, min_balance, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.min_balance = min_balance;
    }
    debitAmount() {
        return 500;
    }
    CreditAmount() {
        return 100;
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    constructor(Acc_no, Balance, Interest_rate, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.Interest_rate = Interest_rate;
    }
    debitAmount() {
        return 500;
    }
    CreditAmount() {
        return 100;
    }
    getBalance() {
        return this.Balance;
    }
}
