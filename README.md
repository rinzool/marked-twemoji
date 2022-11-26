# marked-emoji
A simple plugin to add emojis for marked

## How to use

```js
const { marked } = require('marked');
const { markedEmoji } = require('marked-emoji');

marked.use({ extensions: [markedEmoji] });

marked(':heart:') // <p><img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/v/14.0.2/svg/2764.svg"/></p>
```

The stylesheet `style.css` is a recommended style for `.emoji` class, but feel free to define yourself

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
* [simonhaenisch](https://github.com/simonhaenisch) to create the plugin and include it into [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf)

## License
[MIT](./LICENSE)
