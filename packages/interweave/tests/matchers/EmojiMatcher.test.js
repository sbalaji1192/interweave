import React from 'react';
import EMOJI_REGEX from 'emojibase-regex';
import EMOTICON_REGEX from 'emojibase-regex/emoticon';
import SHORTCODE_REGEX from 'emojibase-regex/shortcode';
import Parser from '../../src/Parser';
import Emoji from '../../src/components/Emoji';
import EmojiMatcher from '../../src/matchers/EmojiMatcher';
import EmojiData from '../../src/data/EmojiData';
import {
  VALID_EMOJIS,
  TOKEN_LOCATIONS,
  createExpectedToken,
  parentConfig,
} from '../mocks';

const INVALID_UNICODE = [
  '\u02A9',
  '\u03C6',
  '\u0544',
];
const INVALID_SHORTCODE = [
  ':no_ending',
  'no_beginning:',
  ':no spaces:',
  ':no#($*chars:',
];
const INVALID_EMOTICON = [
  '[:',
  '@=',
  '+[',
];
const MAN_EMOJI = '👨';

describe('matchers/EmojiMatcher', () => {
  let EMOJIS = {};
  let EMOTICON_TO_UNICODE = {};
  let SHORTCODE_TO_UNICODE = {};
  let VALID_UNICODE = [];
  let VALID_SHORTCODE = [];
  let VALID_EMOTICON = [];

  const matcher = new EmojiMatcher('emoji', {
    convertEmoticon: true,
    convertShortcode: true,
    convertUnicode: true,
  });
  const noConvertMatcher = new EmojiMatcher('emoji');
  const pattern = new RegExp(`^${EMOJI_REGEX.source}$`);
  const emoPattern = new RegExp(`^${EMOTICON_REGEX.source}$`);
  const shortPattern = new RegExp(`^${SHORTCODE_REGEX.source}$`);

  beforeEach(() => {
    const data = EmojiData.getInstance('en');

    ({
      EMOJIS,
      EMOTICON_TO_UNICODE,
      SHORTCODE_TO_UNICODE,
    } = data);

    VALID_UNICODE = Object.keys(EMOJIS);
    VALID_SHORTCODE = Object.keys(SHORTCODE_TO_UNICODE);
    VALID_EMOTICON = Object.keys(EMOTICON_TO_UNICODE);

    matcher.data = data;
  });

  describe('does match valid emoji', () => {
    VALID_UNICODE.forEach((unicode) => {
      // Emoji_Tag_Sequences currently do not work
      if (unicode === '🏴󠁧󠁢󠁥󠁮󠁧󠁿' || unicode === '🏴󠁧󠁢󠁳󠁣󠁴󠁿' || unicode === '🏴󠁧󠁢󠁷󠁬󠁳󠁿') {
        return;
      }

      it(`unicode: ${unicode}`, () => {
        expect(unicode.match(pattern)[0]).toBe(unicode);
      });
    });

    VALID_SHORTCODE.forEach((shortcode) => {
      it(`shortcode: ${shortcode}`, () => {
        expect(shortcode.match(shortPattern)[0]).toBe(shortcode);
      });
    });

    VALID_EMOTICON.forEach((emoticon) => {
      it(`emoticon: ${emoticon}`, () => {
        expect(emoticon.match(emoPattern)[0]).toBe(emoticon);
      });
    });
  });

  describe('doesnt match invalid emoji', () => {
    INVALID_UNICODE.forEach((unicode) => {
      it(`unicode: ${unicode}`, () => {
        expect(unicode.match(pattern)).toBe(null);
      });
    });

    INVALID_SHORTCODE.forEach((shortcode) => {
      it(`shortcode: ${shortcode}`, () => {
        expect(shortcode.match(shortPattern)).toBe(null);
      });
    });

    INVALID_EMOTICON.forEach((emoticon) => {
      it(`emoticon: ${emoticon}`, () => {
        expect(emoticon.match(emoPattern)).toBe(null);
      });
    });
  });

  describe('doesnt match unicode when `convertUnicode` is false', () => {
    VALID_UNICODE.forEach((unicode) => {
      it(`unicode: ${unicode}`, () => {
        expect(noConvertMatcher.match(unicode)).toBe(null);
      });
    });
  });

  describe('doesnt match shortcode when `convertShortcode` is false', () => {
    VALID_SHORTCODE.forEach((shortcode) => {
      it(`shortcode: ${shortcode}`, () => {
        expect(noConvertMatcher.match(shortcode)).toBe(null);
      });
    });
  });

  describe('doesnt match emoticon when `convertEmoticon` is false', () => {
    VALID_EMOTICON.forEach((emoticon) => {
      it(`emoticon: ${emoticon}`, () => {
        expect(noConvertMatcher.match(emoticon)).toBe(null);
      });
    });
  });

  describe('matches all emojis in a string', () => {
    const parser = new Parser('', {}, [matcher]);
    const createUnicode = (unicode, key) => matcher.replaceWith(unicode, { unicode, key });
    const createShort = (shortcode, key) => matcher.replaceWith(shortcode, {
      unicode: SHORTCODE_TO_UNICODE[shortcode],
      shortcode,
      key,
    });

    VALID_EMOJIS.forEach(([, unicode, shortcode]) => {
      TOKEN_LOCATIONS.forEach((location, i) => {
        it(`for: ${unicode} - ${location}`, () => {
          parser.keyIndex = -1; // Reset for easier testing

          const tokenString = location.replace(/\{token\}/g, unicode);
          const actual = parser.applyMatchers(tokenString, parentConfig);

          if (i === 0) {
            expect(actual).toBe(createExpectedToken(unicode, createUnicode, 0));
          } else {
            expect(actual).toEqual(createExpectedToken(unicode, createUnicode, i));
          }
        });

        it(`for: ${shortcode} - ${location}`, () => {
          parser.keyIndex = -1; // Reset for easier testing

          const tokenString = location.replace(/\{token\}/g, shortcode);
          const actual = parser.applyMatchers(tokenString, parentConfig);

          if (i === 0) {
            expect(actual).toBe(createExpectedToken(shortcode, createShort, 0));
          } else {
            expect(actual).toEqual(createExpectedToken(shortcode, createShort, i));
          }
        });
      });
    });
  });

  describe('match()', () => {
    it('returns null for invalid unicode match', () => {
      expect(matcher.match(INVALID_UNICODE[0])).toBe(null);
    });

    it('returns object for valid unicode match', () => {
      expect(matcher.match(MAN_EMOJI)).toEqual({
        match: MAN_EMOJI,
        unicode: MAN_EMOJI,
      });
    });

    it('returns null for invalid shortcode match', () => {
      expect(matcher.match(':invalid')).toBe(null);
    });

    it('returns object for valid shortcode match', () => {
      expect(matcher.match(':man:')).toEqual({
        match: ':man:',
        shortcode: ':man:',
        unicode: MAN_EMOJI,
      });
    });

    it('returns null for invalid emoticon match', () => {
      expect(matcher.match('?)')).toBe(null);
    });

    it('returns object for valid emoticon match', () => {
      expect(matcher.match(':)')).toEqual({
        match: ':)',
        emoticon: ':)',
        unicode: '🙂',
      });
    });
  });

  describe('replaceWith()', () => {
    VALID_EMOJIS.forEach(([, unicode, shortcode]) => {
      const uniMatcher = new EmojiMatcher('emoji', { renderUnicode: true });

      it(`returns the unicode as is when using \`renderUnicode\`: ${shortcode}`, () => {
        expect(uniMatcher.replaceWith(unicode, { unicode, shortcode })).toBe(unicode);
      });

      it(`returns the unicode when providing a shortcode using \`renderUnicode\`: ${shortcode}`, () => {
        expect(uniMatcher.replaceWith(shortcode, { unicode, shortcode })).toBe(unicode);
      });
    });
  });

  describe('onAfterParse', () => {
    it('enlarges a single <Emoji/>', () => {
      expect(matcher.onAfterParse([
        <Emoji key={0} shortcode=":cat:" />,
      ])).toEqual([
        <Emoji key={0} shortcode=":cat:" enlargeEmoji />,
      ]);
    });

    it('enlarges multiple <Emoji/>s when `enlargeThreshold` is set', () => {
      matcher.options.enlargeThreshold = 3;

      expect(matcher.onAfterParse([
        <Emoji key={0} shortcode=":cat:" />,
        <Emoji key={1} shortcode=":dog:" />,
        <Emoji key={2} shortcode=":man:" />,
      ])).toEqual([
        <Emoji key={0} shortcode=":cat:" enlargeEmoji />,
        <Emoji key={1} shortcode=":dog:" enlargeEmoji />,
        <Emoji key={2} shortcode=":man:" enlargeEmoji />,
      ]);
    });

    it('enlarge when <Emoji/> count is below `enlargeThreshold`', () => {
      matcher.options.enlargeThreshold = 3;

      expect(matcher.onAfterParse([
        <Emoji key={0} shortcode=":cat:" />,
        <Emoji key={1} shortcode=":man:" />,
      ])).toEqual([
        <Emoji key={0} shortcode=":cat:" enlargeEmoji />,
        <Emoji key={1} shortcode=":man:" enlargeEmoji />,
      ]);

      expect(matcher.onAfterParse([
        <Emoji key={0} shortcode=":cat:" />,
      ])).toEqual([
        <Emoji key={0} shortcode=":cat:" enlargeEmoji />,
      ]);
    });

    it('doesnt count whitespace in the threshold', () => {
      matcher.options.enlargeThreshold = 3;

      expect(matcher.onAfterParse([
        <Emoji key={0} shortcode=":cat:" />,
        ' ',
        <Emoji key={1} shortcode=":dog:" />,
        '\n',
        <Emoji key={2} shortcode=":man:" />,
      ])).toEqual([
        <Emoji key={0} shortcode=":cat:" enlargeEmoji />,
        ' ',
        <Emoji key={1} shortcode=":dog:" enlargeEmoji />,
        '\n',
        <Emoji key={2} shortcode=":man:" enlargeEmoji />,
      ]);
    });

    it('doesnt enlarge when too many <Emoji/>', () => {
      matcher.options.enlargeThreshold = 3;

      const nodes = [
        <Emoji key={0} shortcode=":cat:" />,
        <Emoji key={1} shortcode=":dog:" />,
        <Emoji key={2} shortcode=":man:" />,
        <Emoji key={3} shortcode=":woman:" />,
      ];

      expect(matcher.onAfterParse(nodes)).toEqual(nodes);
    });

    it('doesnt enlarge when strings are found', () => {
      matcher.options.enlargeThreshold = 3;

      const nodes = [
        <Emoji key={0} shortcode=":cat:" />,
        'Foo',
        <Emoji key={2} shortcode=":man:" />,
      ];

      expect(matcher.onAfterParse(nodes)).toEqual(nodes);
    });

    it('doesnt enlarge when non-<Emoji/> are found', () => {
      matcher.options.enlargeThreshold = 3;

      const nodes = [
        <Emoji key={0} shortcode=":cat:" />,
        <div key="foo">Foo</div>,
        <Emoji key={2} shortcode=":man:" />,
      ];

      expect(matcher.onAfterParse(nodes)).toEqual(nodes);
    });

    it('ignores non-<Emoji/>', () => {
      const nodes = [
        <div key="foo">Foo</div>,
      ];

      expect(matcher.onAfterParse(nodes)).toEqual(nodes);
    });

    it('ignores content longer than 1', () => {
      const nodes = [
        <div key="foo">Foo</div>,
        'Bar',
      ];

      expect(matcher.onAfterParse(nodes)).toEqual(nodes);
    });
  });
});
