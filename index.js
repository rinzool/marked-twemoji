const twemoji = require('twemoji');
const emoji = require('node-emoji');

// Configure tewmoji
const twemojiParse = (content) =>
  twemoji.parse(content, {
    ext: `.svg`,
    size: 'svg',
  });

// Configure marked extension
const markedTwemoji = {
  name: 'twemoji',
  level: 'inline',
  start(src) {
    return src.indexOf(':');
  },
  tokenizer(src, _) {
    const rule = /^:(\w+):/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'twemoji',
        raw: match[0],
        emoji: match[1],
      };
    }
  },
  renderer(token) {
    return twemojiParse(emoji.emojify(token.raw));
  },
};

module.exports = { markedTwemoji };
