# textkit-lite

A lightweight, zero-dependency Node.js string utility package built with CommonJS. Provides simple, fast, and reliable text transformations.

## Features

- ⚡ **Zero dependencies**: Pure JavaScript using Node.js standard runtime.
- 📦 **CommonJS compatible**: Works seamlessly with standard `require`.
- 🧪 **Built-in test suite**: Uses Node's native `node:test` runner.
- 🛡️ **Edge-case friendly**: Safe handling of empty, null, or undefined values.

---

## Install

Install via npm:

```bash
npm install textkit-lite
```

---

## Usage

You can import the entire suite or destructure individual utilities:

```javascript
const {
  slugify,
  capitalize,
  truncate,
  wordCount,
  isPalindrome
} = require('textkit-lite');

// Slugify
console.log(slugify('Hello World! 2026')); // "hello-world-2026"

// Capitalize
console.log(capitalize('hello world')); // "Hello world"

// Truncate
console.log(truncate('The quick brown fox jumps over the lazy dog', 20)); // "The quick brown f..."

// Word Count
console.log(wordCount('Count words easily in this sentence.')); // 6

// Palindrome check
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
```

You can also import functions individually from `src/`:

```javascript
const slugify = require('textkit-lite/src/slugify');
```

---

## API

### `slugify(str, [options])`

Converts a string into a clean, URL-friendly slug. Removes accents/diacritics and replaces non-alphanumeric characters with a separator.

- **Parameters**:
  - `str` (*string*): The string to convert.
  - `options` (*Object*, optional):
    - `separator` (*string*, default: `'-'`): Character used to join words.
    - `lowercase` (*boolean*, default: `true`): Whether to convert output to lowercase.
- **Returns**: `string` - The slugified string (or `""` if input is invalid).

```javascript
slugify('Crème Brûlée & Apple Pie');
// Output: "creme-brulee-apple-pie"

slugify('Hello World', { separator: '_' });
// Output: "hello_world"

slugify('Hello World', { lowercase: false });
// Output: "Hello-World"
```

---

### `capitalize(str, [options])`

Capitalizes the first character of a string.

- **Parameters**:
  - `str` (*string*): The string to capitalize.
  - `options` (*Object | boolean*, optional):
    - `lowerRest` (*boolean*, default: `false`): If `true`, transforms remaining characters to lowercase. Can also be passed as a boolean directly.
- **Returns**: `string` - The capitalized string (or `""` if input is invalid).

```javascript
capitalize('hello world');
// Output: "Hello world"

capitalize('hELLO WORLD', { lowerRest: true });
// Output: "Hello world"
```

---

### `truncate(str, [length], [options])`

Truncates a string if it exceeds a specified length, appending an omission indicator.

- **Parameters**:
  - `str` (*string*): The string to truncate.
  - `length` (*number | Object*, default: `30`): Maximum length of the output string (including omission), or options object.
  - `options` (*Object | string*, optional):
    - `omission` (*string*, default: `'...'`): Indicator appended to truncated strings. Can also be passed as a string directly.
- **Returns**: `string` - The truncated string.

```javascript
truncate('Hello World!', 8);
// Output: "Hello..."

truncate('Hello World!', 8, '[..]');
// Output: "Hell[..]"

truncate('Hello World!', { length: 10, omission: '…' });
// Output: "Hello Wor…"
```

---

### `wordCount(str)`

Counts the number of words separated by whitespace in a string.

- **Parameters**:
  - `str` (*string*): The string to count words in.
- **Returns**: `number` - Number of words.

```javascript
wordCount('The quick brown fox');
// Output: 4

wordCount('   Multiple    spaces and \n newlines   ');
// Output: 5

wordCount('');
// Output: 0
```

---

### `isPalindrome(str, [options])`

Checks whether a string reads the same forwards and backwards. By default, it ignores casing, whitespace, and punctuation.

- **Parameters**:
  - `str` (*string*): The string to check.
  - `options` (*Object*, optional):
    - `caseSensitive` (*boolean*, default: `false`): Whether case matters.
    - `ignoreWhitespace` (*boolean*, default: `true`): Whether whitespace is ignored.
    - `ignorePunctuation` (*boolean*, default: `true`): Whether punctuation and symbols are ignored.
- **Returns**: `boolean` - `true` if palindrome, `false` otherwise.

```javascript
isPalindrome('racecar');
// Output: true

isPalindrome('A man, a plan, a canal: Panama');
// Output: true

isPalindrome('Racecar', { caseSensitive: true });
// Output: false

isPalindrome('race car', { ignoreWhitespace: false });
// Output: false
```

---

## Testing

Run tests with Node.js built-in test runner:

```bash
npm test
```

---

## License

[MIT](LICENSE) © 2026 Shravani
