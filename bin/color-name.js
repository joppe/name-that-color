#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const dir = path.join(path.dirname(fs.realpathSync(__filename)), '../');

require(`${dir}index.js`);
