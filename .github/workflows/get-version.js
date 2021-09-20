var fs = require('fs');
console.log(JSON.parse(fs.readFileSync('./swade_cn_compendium/module.json', 'utf8')).version);
