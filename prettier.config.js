module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  trailingComma: 'all',
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
};
