const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

User.findByIdAndDelete("65097440ac0d1d37f3b268a4").then ((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
;






// User.updateOne({name:"Adam"},{age:1000}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

// User.find({age:{$gt:35}})
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com",age:33},
//     {name:"samu", email:"samu@gmail.com", age: 33}
// ]).then(res=>{console.log(res)});


// const Employee=mongoose.model("Employee",userSchema);

// const user2=new User({
//     name:"santosh",
//     email:"santoshdahake73@gmail.com",
//     age:21,
// });

// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });