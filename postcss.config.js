const posthtml = require('posthtml');
const { posthtmlExternalLink } = require('posthtml-external-link');

module.exports = {
    plugins: [
        'posthtml-include': {
            root:'src/',
            encoding:'utf-8',
        },
        content: ['index.html', '**/*.js', '**/*.html'],
        tailwindcss: { config: './tailwindcss-config.js' },
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    posthtml([[ include({ encoding: 'utf8' }) ]
    .process(html)
    .then((result) => console.log(result.html)),
    postHtmlExternalLink({
      @import 'fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap',
      @import './tailwind_conf.css'
  }),
	require('posthtml-alt-always')({ img })
]).process(source *.html)
  .then(result => console.log(result.html))
}