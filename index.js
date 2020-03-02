let logger = require("./logger");
const os = require('os');
const path = require('path');
const fs = require('fs');
const EventEmiter = require("events");
const  events = new EventEmiter();


//console.log(global);
//console.log(module);
//logger.User("Nahid Fatima");
//logger.User1("Asra");

//let totalmemory = os.totalmem();
//let freememory = os.freemem();
//let cpus = os.cpus();
//console.log(`total memory ${totalmemory}`);
//console.log(`free memory ${freememory}`);
//console.log(`${cpus[0].model}`);

//let pathRef = path.parse(__filename);
//console.log(pathRef);

//fs.readdir("./",(error,files)=>{
//  if(error){
//      console.log(error)
//   }
//   else{
//       console.log(files);
// }
//})




//Hold the Event(First Call)

//event.on("messageme", (arg)=>{
    //console.log("hello user");
    //console.log(arg);
//})



//Raise the Event(second call) 

//events.emit("messageme",  {  id:1, name:nahid  }  );

let http = require("http");
let server = http.createServer((req,  res) =>{
     if(req.url === "/api"){
         res.write("hello user");
         res.end();
     }
     if(req.url === "/api/courses"){
        res.write(JSON.stringify(["angular", "reactjs", "nodejs"]));
        res.end();
     }
      
});

server.listen(4600);
console.log(`port working om 4600`);



