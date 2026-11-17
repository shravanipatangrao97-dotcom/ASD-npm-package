# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-17

### Added
- Initial release of `textkit-lite`.
- Core text manipulation utilities in `src/`:
  - `slugify`: Converts strings into clean, URL-friendly slugs with configurable separator and casing.
  - `capitalize`: Capitalizes the first letter of a string with option to lowercase remaining letters.
  - `truncate`: Truncates a string to a given length with custom omission indicators.
  - `wordCount`: Accurately counts the number of words in a string.
  - `isPalindrome`: Checks if a string is a palindrome with options for case sensitivity, whitespace, and punctuation.
- Full unit test coverage in `test/` using Node.js built-in `node:test` and `node:assert`.
- Zero external runtime dependencies.
- CommonJS module exports.
