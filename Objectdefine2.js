


let obj=
{
    name:"Ghatge",
    email:"Student@gmail.com",
    package:"24 lpa"
}



Object.defineProperty(obj,"location",
    {
     value:"Pune",
     enumerable:true,
     writable:false,
     configurable:true
    }
)

// console.log(obj);


// obj.location="Mumbai";

//console.log(obj.location);

// for(let k in obj)
// {
//     console.log(k);
    
// }

// console.log("after setting the location to mumbai:");

// console.log(obj);


// delete obj.name;
// console.log("after deleting the name :");
// console.log(obj);

// delete obj.location;
// console.log("after deleting the location:");
// console.log(obj);



console.log(Object.getOwnPropertyDescriptor(obj,"location"));