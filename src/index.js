const fs = require('fs');

const repetir = 82;
let temperaturas = '';

for (let index = 0; index < repetir; index++) {
  const temp = `${Math.floor(Math.random() * (1100 - 1010)) + 1010} ${new Date().toISOString()}\n`
  temperaturas =  temperaturas.concat(temp);
  
}

fs.writeFile('temperaturas.txt', temperaturas, (err) => {
  if (err) throw err;
console.log('O arquivo foi criado!');
});