let obj = {
    name:"Ashish",
    add: {
        country:"India",
        state:{ 
            code:"DL",
            pin:"111111"
        }
    }
}

let {name} = obj;

let {add:{country:abcd}} = obj

let {add:{state:{code:cd}}} = obj

console.log(cd)