const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
// }
// process.stdout.write('\n');

let delay = 0;
for (const char of sentence) {
setTimeout(() => {
    process.stdout.write(char);
  }, delay)
delay +=50;
}
setTimeout(() =>{
  process.stdout.write('\n');
}, 2000); // 2000> 50*char.length， that's the reasonable for change new line.
