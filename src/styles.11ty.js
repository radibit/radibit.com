const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

// the file name as an entry point for postcss compilation
// the output filename in the /styles folder
const fileName = 'main.css';

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `_includes/postcss/${fileName}`);
    return {
      permalink: `styles/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require('postcss-import'),
      require('postcss-mixins'),
      require('cssnano'),
    ])
      .process(rawCss, { from: rawFilepath })
      .then(result => result.css);
  }
};
