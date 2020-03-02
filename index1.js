//console.log("first user");
//AddUser("Nahid", (arg)=> {
//    console.log(arg);
//    GithubUser(arg.name,  (data) =>{
//    console.log(data);
//    })
//}); 

AddUser("Nahid")
    .then(data =>data)
    .then(arg => GithubUser(arg.name))
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

AddUser("vipul")
.then(data =>{
    console.log(data)
     GithubUser(data.name)
     .then(item =>console.log(item))
}).catch(error => console.log(error.message));


//console.log(user);
console.log("third user");


/////////CALLBACK HELLLLLLLL
console.log("third user");

//function AddUser(name,callback){
//    setTimeout(() => { 
//        console.log("second user");
 //       callback ({name: name});
  //  },  2000);
    
//}

//function GithubUser(gitname ,callback){
//    setTimeout(()=>{
//        callback({gituser: gitname });
//
//    }, 3000);
//}






//*let user =function(a){
  //  return a;
//}
 
//user();

//let user = (a) => {
  //  return a;
//}
////////////////////////////////////////////


////PROMISES//////////
function AddUser(name){
      return new Promise((resolve, reject) =>{
        setTimeout(() => { 
         console,log("second user");
         resolve({ name: name });
         reject(new Error("something went wrong"));
        },  2000);
    });
});

function GithubUser(gitname){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>  {
           resolve({gituser: gitname});
           reject(new Error("something went wrong"));
        }, 3000);
    });   
});

//let p = new Promise ((resolve, reject) =>{
//    setTimeout(() => {
//        resolve("hello user");
//        reject(new Error("something went wrong"));
//    }, 1000);
//});

//p.then(data => console.log(data))
//  .catch(error => console.log(error.message));


function xyz(){
    try{let user = await AddUser("nahid");
    console.log(user);
    let githubuser = await GithubUser(user.name);
    console.log(githubuser);
    }
    catch(error){
        console.log(error.message);
    }
}

xyz();
