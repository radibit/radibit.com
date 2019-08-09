const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addPassthroughCopy('site/assets');

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'site',
      output: 'dist',
      includes: 'includes',
    },
  };
};
