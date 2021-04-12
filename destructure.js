const person = { name:"bonosree", age:25, job: "not employeed",address:"dhaka", phone: 01715445599, hobby: "cook"};

const{ name ,job,address, phone} = person;

//const job= person.job;
// const name = person.name;
 console.log(name,job,address,phone);
 console.log(name,job,address,phone);
 const friends = ["slman", "sayan", "samprita", "samantha", "suchi","suji"];
 const[ chotoFriend, ...oldF]=friends;
 console.log(oldF);

 const complexObject ={
     name:"tomato";
     info:{
         address:"hatir jhil",
         leader: "tger"
     }
     const{leader} = complexObject.info;


 }