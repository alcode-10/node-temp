const os =require('os');
//just write the name of built in module
//os.//way to acces multiple functionalities

//info about the current user
const user = os.userInfo();
console.log(user)

//method return system uptime
//Uptime is a measure of system reliability
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totolMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)