const { marked } = require('marked');
const { markedEmoji } = require('marked-emoji');

test('emoji :heart: should be interepreted and replaced with img', () => {
  marked.use({ extensions: [markedEmoji] });

  const output = marked(':heart:');
  const expected =
    '<p><img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/v/14.0.2/svg/2764.svg"/></p>\n';

  expect(output).toBe(expected);
});
