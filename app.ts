var a = 10;
console.log('working');
const b = "check"
let arr = [1,2,3,"digvijay", {name: "Digvijay Desai"}, {age: 24}];
// let strictArr : number[] = [1,2,3,4,"string is not allowed"]
let strictArr : number[] = [1,2,3,4]
let Tupples : [string, number, object] = ["Digvijay", 24, {name: "digvijay", age: 24}];

enum userModel {
    name = "Digvijay Jayant Desai",
    age = "24",
    admin = "True"
}
enum domain {
    Dev = "Software Developer",
    TechStack = "Full Stack Dev Python ML"
}
userModel.name;
userModel.age;
userModel.admin;

domain.Dev;
domain.TechStack;

function NumberVoid(): number{
    return 24
}

function StringVoid(): string{
    return "Digvijay"
}
function BooleanVoid(): boolean{
    return true
}

interface user {
    name:string,
    email:string,
    password:string
}
function objPass(obj: user){
    
    console.log("passing through interface \n",obj);
};
objPass({
    name: "Digvijay Desai",
    email: "demo@gmail.com",
    password: "12345678"
})
