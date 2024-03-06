/*
[codePointAt()]

The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.

String.prototype.codePointAt()
*/

const icons = "☃★♲";

console.log(icons.codePointAt(1)); //9733
