# marked-twemoji
A simple plugin to add [twemoji](https://github.com/twitter/twemoji) for [marked](https://github.com/markedjs/marked)

## How to use

```js
const { marked } = require('marked');
const { markedTwemoji } = require('marked-twemoji');

marked.use({ extensions: [markedTwemoji] });

marked(':heart:') // <p><img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/v/14.0.2/svg/2764.svg"/></p>
```

The stylesheet `style.css` is a recommended style for `.emoji` class, but feel free to define yourself
```css
.emoji {
  background: transparent;
  height: 1em;
  margin: 0 0.05em 0 0.1em !important;
  vertical-align: -0.1em;
  width: 1em;
}
```

### Md-to-pdf

It is possible to use `marked-twemoji` with [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf/#twemoji) project by creating a custom config.
* Create a `config.js` file:
```js
const { markedTwemoji } = require('marked-twemoji');

module.exports = {
  css: `
    .emoji {
            background: transparent;
            height: 1em;
            margin: 0 0.05em 0 0.1em !important;
            vertical-align: -0.1em;
            width: 1em;
    }
  `,
  marked_extensions: [markedTwemoji],
};
```
* Use md-to-pdf with config file `md-to-pdf --config-file config.js example.md`

## How does it work
Based on [this issue](https://github.com/markedjs/marked/issues/233) and [twemoji](https://github.com/twitter/twemoji), I added a custom `marked` extension to convert emojis.
Basically it looks for `:abc:` pattern, and use twemoji to replace it with an `<img>`

## Contributing
Please feel free to contribute

* To run unit tests
```
npm test
```

* Format code
```
npm run fmt
```

## Credits
Special thanks to:
* [simonhaenisch](https://github.com/simonhaenisch) for helping me creating this plugin and how to include it into [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf)

## License
[MIT](./LICENSE)
