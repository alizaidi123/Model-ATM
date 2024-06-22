import inquirer from "inquirer";
interface anstype {
    UserPin:number,
    AccountType: number,
    TypeofWithdrwal: string,
    Amount: number
}
let AccountBalance = Math.floor(Math.random()*10000)
console.log(AccountBalance);

const answer: anstype = await inquirer.prompt([
    
    { 
        type: "number",
        name: "UserPin",
        message: "Please Enter Your 4 Digit Pin Code.",
        validate(input){
            return input.toString().length === 4? true : "Please Enter Your 4 Digit Pin"
        }
    },
    
    { 
        type: "list",
        name: "AccountType",
        choices: [ "Saving", "Current"],
        message: "Please Select Your Account Type."
    },
    
    { 
        type: "list",
        name: "TypeofWithdrwal",
        choices: [ "Fast Cash", "Withdraw"],
        message: "Please Select Your Desired Option.",
        when(answer) {
            return answer.AccountType
        },
    },
    
    { 
        type: "list",
        name: "Amount",
        choices: [ "500", "1000", "2000","3000","4000","5000"],
        message: "Please Select Your Desired Option.",
        when(answer) {
            return answer.TypeofWithdrwal == "Fast Cash"
        },
    },

    { 
        type: "number",
        name: "Amount",
        message: "Please Enter Your Amount.",
        when(answer) {
            return answer.TypeofWithdrwal == "Withdraw"
        },
    }

])


if (answer.TypeofWithdrwal){
    let remBalance  = AccountBalance - answer.Amount
    if (answer.Amount <= AccountBalance)
    console.log("Your Remaining Balance is ", remBalance);
else { console.log("You Have Insuficient Balance");
}    
}

