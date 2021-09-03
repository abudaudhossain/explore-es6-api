class Support {
    name;
    designation = "Support web Dev";
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log(this.name, " Start a support section");
    }
}


const ammir = new Support("Ammir Khan");
const salman = new Support("Salman Khan");

console.log(ammir);
console.log(salman);
salman.startSession();
ammir.startSession();