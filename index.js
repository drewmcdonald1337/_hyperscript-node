const _hsNode = require(`${__dirname}/lib/_hs-node.js`);

process.__dirname = __dirname

_hsNode(`${__dirname}/index._hs`, process, __dirname);
