/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-useless-escape, max-len */

type FilterMap = { [key: string]: number };

export const HASHTAG_PATTERN: string = '#([a-z0-9-_]+)';

// https://blog.codinghorror.com/the-problem-with-urls/
export const URL_CHAR_PART: string = 'a-z0-9-._~%!$&\'()*+,;:@';
export const URL_SCHEME_PATTERN: string = '(https?://)?';
export const URL_TLD_PATTERN: string = '(\.[a-z]{2,63})';
export const URL_DOMAIN_PATTERN: string = `((?:www\.)?[-a-z0-9\.]*[-a-z0-9]+${URL_TLD_PATTERN})`;
export const URL_PATH_PATTERN: string = `(/[${URL_CHAR_PART}/]*)?`;
export const URL_QUERY_PATTERN: string = `(\?[${URL_CHAR_PART}=\[\]]*)?`;
export const URL_FRAGMENT_PATTERN: string = `(${HASHTAG_PATTERN})?`;
export const URL_PATTERN: string = `${URL_SCHEME_PATTERN}${URL_DOMAIN_PATTERN}${URL_PATH_PATTERN}${URL_QUERY_PATTERN}${URL_FRAGMENT_PATTERN}`;

// http://www.regular-expressions.info/email.html
export const EMAIL_CLASS_PART: string = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]';
export const EMAIL_USERNAME_PATTERN: string = `(${EMAIL_CLASS_PART}+(?:\.${EMAIL_CLASS_PART}+)*)`;
export const EMAIL_PATTERN: string = `${EMAIL_USERNAME_PATTERN}@${URL_DOMAIN_PATTERN}`;

// Filters to apply to tags and attributes
export const FILTER_ALLOW: number = 1;
export const FILTER_DENY: number = 2;
export const FILTER_PASS_THROUGH: number = 3;
export const FILTER_CAST_NUMBER: number = 4;
export const FILTER_CAST_BOOL: number = 5;

// Tags not listed here will be denied
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
export const TAGS: FilterMap = {
  a: FILTER_ALLOW,
  abbr: FILTER_ALLOW,
  acronym: FILTER_PASS_THROUGH,
  address: FILTER_ALLOW,
  applet: FILTER_DENY,
  area: FILTER_DENY,
  article: FILTER_ALLOW,
  aside: FILTER_ALLOW,
  audio: FILTER_ALLOW,
  b: FILTER_ALLOW,
  base: FILTER_DENY,
  basefont: FILTER_DENY,
  bdi: FILTER_ALLOW,
  bdo: FILTER_ALLOW,
  bgsound: FILTER_DENY,
  big: FILTER_PASS_THROUGH,
  blink: FILTER_DENY,
  blockquote: FILTER_ALLOW,
  body: FILTER_PASS_THROUGH,
  br: FILTER_ALLOW,
  button: FILTER_ALLOW,
  canvas: FILTER_DENY,
  caption: FILTER_ALLOW,
  center: FILTER_PASS_THROUGH,
  cite: FILTER_ALLOW,
  code: FILTER_ALLOW,
  col: FILTER_ALLOW,
  colgroup: FILTER_ALLOW,
  command: FILTER_DENY,
  content: FILTER_DENY,
  data: FILTER_DENY,
  datalist: FILTER_DENY,
  dd: FILTER_ALLOW,
  del: FILTER_ALLOW,
  details: FILTER_ALLOW,
  dfn: FILTER_ALLOW,
  dialog: FILTER_DENY,
  dir: FILTER_DENY,
  div: FILTER_ALLOW,
  dl: FILTER_ALLOW,
  dt: FILTER_ALLOW,
  element: FILTER_DENY,
  em: FILTER_ALLOW,
  embed: FILTER_DENY,
  fieldset: FILTER_ALLOW,
  figcaption: FILTER_ALLOW,
  figure: FILTER_ALLOW,
  font: FILTER_PASS_THROUGH,
  footer: FILTER_ALLOW,
  form: FILTER_PASS_THROUGH,
  frame: FILTER_DENY,
  frameset: FILTER_DENY,
  head: FILTER_DENY,
  header: FILTER_ALLOW,
  hgroup: FILTER_DENY,
  hr: FILTER_ALLOW,
  html: FILTER_DENY,
  i: FILTER_ALLOW,
  iframe: FILTER_DENY,
  image: FILTER_DENY,
  img: FILTER_ALLOW,
  input: FILTER_DENY,
  ins: FILTER_ALLOW,
  isindex: FILTER_DENY,
  kbd: FILTER_ALLOW,
  keygen: FILTER_DENY,
  label: FILTER_ALLOW,
  legend: FILTER_ALLOW,
  li: FILTER_ALLOW,
  link: FILTER_DENY,
  listing: FILTER_DENY,
  main: FILTER_ALLOW,
  map: FILTER_DENY,
  mark: FILTER_ALLOW,
  marquee: FILTER_DENY,
  menu: FILTER_DENY,
  menuitem: FILTER_DENY,
  meta: FILTER_DENY,
  meter: FILTER_DENY,
  multicol: FILTER_DENY,
  nav: FILTER_ALLOW,
  nobr: FILTER_DENY,
  noembed: FILTER_DENY,
  noframes: FILTER_DENY,
  noscript: FILTER_DENY,
  object: FILTER_DENY,
  ol: FILTER_ALLOW,
  optgroup: FILTER_DENY,
  option: FILTER_DENY,
  output: FILTER_ALLOW,
  p: FILTER_ALLOW,
  param: FILTER_DENY,
  picture: FILTER_ALLOW,
  plaintext: FILTER_DENY,
  pre: FILTER_ALLOW,
  progress: FILTER_DENY,
  q: FILTER_ALLOW,
  rp: FILTER_ALLOW,
  rt: FILTER_ALLOW,
  rtc: FILTER_ALLOW,
  ruby: FILTER_ALLOW,
  s: FILTER_ALLOW,
  samp: FILTER_ALLOW,
  script: FILTER_DENY,
  section: FILTER_ALLOW,
  select: FILTER_DENY,
  shadow: FILTER_DENY,
  small: FILTER_PASS_THROUGH,
  source: FILTER_ALLOW,
  spacer: FILTER_DENY,
  span: FILTER_ALLOW,
  strike: FILTER_DENY,
  strong: FILTER_ALLOW,
  style: FILTER_DENY,
  sub: FILTER_ALLOW,
  summary: FILTER_ALLOW,
  sup: FILTER_ALLOW,
  table: FILTER_ALLOW,
  tbody: FILTER_ALLOW,
  td: FILTER_ALLOW,
  template: FILTER_DENY,
  textarea: FILTER_DENY,
  tfoot: FILTER_ALLOW,
  th: FILTER_ALLOW,
  thead: FILTER_ALLOW,
  time: FILTER_ALLOW,
  tr: FILTER_ALLOW,
  track: FILTER_ALLOW,
  tt: FILTER_DENY,
  u: FILTER_ALLOW,
  ul: FILTER_ALLOW,
  var: FILTER_ALLOW,
  video: FILTER_ALLOW,
  wbr: FILTER_DENY,
  xmp: FILTER_DENY,
};

// Attributes not listed here will be denied
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
export const ATTRIBUTES: FilterMap = {
  alt: FILTER_ALLOW,
  cite: FILTER_ALLOW,
  class: FILTER_ALLOW,
  colspan: FILTER_CAST_NUMBER,
  controls: FILTER_CAST_BOOL,
  datetime: FILTER_ALLOW,
  default: FILTER_CAST_BOOL,
  disabled: FILTER_CAST_BOOL,
  dir: FILTER_ALLOW,
  height: FILTER_ALLOW,
  href: FILTER_ALLOW,
  id: FILTER_ALLOW,
  kind: FILTER_ALLOW,
  label: FILTER_ALLOW,
  lang: FILTER_ALLOW,
  loop: FILTER_CAST_BOOL,
  muted: FILTER_CAST_BOOL,
  poster: FILTER_ALLOW,
  role: FILTER_ALLOW,
  rowspan: FILTER_CAST_NUMBER,
  span: FILTER_CAST_NUMBER,
  src: FILTER_ALLOW,
  target: FILTER_ALLOW,
  title: FILTER_ALLOW,
  width: FILTER_ALLOW,
};

// Attributes to camel case for React props
export const ATTRIBUTES_TO_REACT: { [key: string]: string } = {
  class: 'className',
  colspan: 'colSpan',
  datetime: 'dateTime',
  rowspan: 'rowSpan',
};