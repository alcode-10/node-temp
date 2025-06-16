//example of event looop in nodejs
const { readFile } = require('fs');

console.log('started a first task');//synchronus task

// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {//asynchronus task
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});

console.log('starting next task');//synchronus task
//example of event looop in nodejs