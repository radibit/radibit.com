const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  // Passthrough copy
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/images');

  return {
    templateFormats: ['md', 'njk', 'html', '11ty.js'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
