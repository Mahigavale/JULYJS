
let Profile=
{
    name:"Abc",
    email:"Abc@gmail.com"
}


 console.log(Object.keys(Profile));
//Object.freeze(Profile);

if(Object.isFrozen(Profile)==true)
    {
 console.log("I won't be able to do anything..");
 
    }

    else
    {
        Profile.name="IJK";
    }

   console.log("Profile:",Profile);
    