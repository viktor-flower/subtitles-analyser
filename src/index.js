import * as fs from 'fs';
import * as parser from 'subtitles-parser';
import * as _ from 'lodash';
import * as pos from 'pos';

let srt = fs.readFileSync('./data/test.srt', 'utf-8');
var data = parser.fromSrt(srt);
let text = _.join(_.map(data, 'text'), ' ');

let words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.');
let tagger = new pos.Tagger();
let taggedWords = tagger.tag(words);
for (let i in taggedWords) {
  var taggedWord = taggedWords[i];
  var word = taggedWord[0];
  var tag = taggedWord[1];
  console.log(word + " /" + tag);
}
