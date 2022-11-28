module.exports = function (indexPath, args) {
  const _hyperscript = require(`${__dirname}/_hyperscript/node-hyperscript.js`);
  require(`${__dirname}/_hyperscript/hdb.js`)(_hyperscript);
  const fs = require("fs");
  const indexScript = fs.readFileSync(indexPath).toString();
  const context = _hyperscript.evaluate(indexScript);
  context.index(args || undefined);
};
