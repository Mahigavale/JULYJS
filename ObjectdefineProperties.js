


let Cricketer = {};

Object.defineProperty(Cricketer, "name",
    {
        value: "MSD",
        enumerable: true
    }
)

Object.defineProperties(Cricketer, {
    "team":
    {
        value: "CSK",
        enumerable: false
    }
    ,
    "age":
    {
        value: 35,
        enumerable: true
    }
}
)


console.log(Object.getOwnPropertyDescriptor(Cricketer,"age"));
console.log(Object.getOwnPropertyDescriptors(Cricketer));
