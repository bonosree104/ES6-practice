class Parent{
    constructor(){
        this.fatherName = "Roy";

    }
}









class child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getfullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new child(" thomas");
const baby2 = new child("tom");
console.log(baby.getfullName());
console.log(baby2.getfullName());
