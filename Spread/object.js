let myObj = {
    name: "ashish",
    add: {
        city: "Ottawa",
        country: "Canada"
    },
    job: "Software Developer"
}
let obj2 = {...myObj}; // spread operator for objects - SHALLOW COPY
let obj3 = {...myObj, add: {...obj2.add}} // spread operator for object inside Object - //DEEP COPY

obj2.name = "ashish2"
obj2.add.city = "Toronto"
obj3.name = "ashish3"
obj3.add.city = "Edmomnton"
 console.log(myObj);
 console.log(obj2);
 console.log(obj3);
