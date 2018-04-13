import * as fs from 'fs';
import * as parser from 'subtitles-parser';
import * as _ from 'lodash';
import * as pos from 'pos';

let srt = fs.readFileSync('./data/test.srt', 'utf-8');
var data = parser.fromSrt(srt);
let text = _.join(_.map(data, 'text'), ' ');

let words = new pos.Lexer().lex(text);
let tagger = new pos.Tagger();
let taggedWords = tagger.tag(words);

// let u =
//   _.join(
//     _.map(
//       _.sortBy(
//         _.uniqBy(
//           taggedWords,
//           0
//         ),
//         0
//       ),
//       0
//     ),
//     ' '
// );

let u = _.chain(taggedWords)
  .map(0)
  .map(a => a.toLowerCase())
  .uniq()
  .sort()
  .chunk(10)
  .map((chunk) => _.join(chunk, ' '))
  .join('\n')
  .value();
console.log(u);
// for (let i in taggedWords) {
//   var taggedWord = taggedWords[i];
//   var word = taggedWord[0];
//   var tag = taggedWord[1];
//   console.log(word + " /" + tag);
// }
