var fs = require('fs');
console.log(JSON.parse(fs.readFileSync('./swade-cn-compendium/module.json', 'utf8')).version);
