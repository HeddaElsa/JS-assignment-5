let exit = true;

const yourAccount = {
    firstName: "",
    lastName: "",
    balance: 1000000,
    wdAmount: 0,
    deposit: 0,
    getTheBalance: function() {
        if (this.wdAmount > 0) {
        this.balance -= this.wdAmount;
        this.wdAmount = 0;
        return this.balance;
        } else { 
        this.balance +=  this.deposit;
        this.deposit = 0;
        return this.balance;
        }
    },
    doDeposit: function() {
        this.deposit = parseFloat(prompt("How much would you like to deposit?"))
        alert(`You have now deposited ${this.deposit}SEK`); 
        this.getTheBalance();
    },
    doWithdrawal: function() {
        this.wdAmount = parseFloat(prompt("How much would you like to withdrawl?"))
        if (this.wdAmount <= this.balance && !isNaN(this.wdAmount)) {
        alert(`you have now withdrawled ${this.wdAmount}SEK`); 
        this.getTheBalance();
        } else {
            alert(`You do not suffishant funds on your account, please check your balance. Or you have not entered a number.`);
        }
    },
    getAccountName: function() {
        alert(`The holder of the account is ${this.firstName} ${this.lastName}`)
    },

}

function atmOuter() {
    yourAccount.firstName = prompt("What is your first name?");
    yourAccount.lastName = prompt("What is your last name?");
    atm();

}

function atm() {

    while (exit) {
    const message = parseFloat(
        prompt(
            "select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    if (message == 1 || message == 2 || message == 3 || message == 4 || message == 5) {
        switch (message) {
                case 1: 
                alert(`Your balance is ${yourAccount.balance}SEK`);
                yourAccount.getTheBalance();
                break;

                case 2:
                yourAccount.doDeposit();
                break;

                case 3: 
                yourAccount.doWithdrawal();
                break;

                case 4: 
                yourAccount.getAccountName()
                break;

                case 5:  
                exit = false;
                alert("Thank you! You have now exited. Enjoy your day!")
                break;
            }
        } else {
            alert("Your have to give stricly a number from 1 to 5");
        }
}

}

atmOuter()
