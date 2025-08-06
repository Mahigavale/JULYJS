
let profile={
    id:1,
    eid:"123edf",
    salary:"1234343$",
    dept:"IT"
}

// Object.freeze(profile);
// console.log(Object.isFrozen(profile));

Object.seal(profile);
console.log(Object.isSealed(profile));


profile.id=2;
profile.city="Pune";

console.log(profile);


console.log("Entries....");


console.log(Object.entries(profile).flat(1));


