const { tsvToJson } = require('./tsvToJson/index.js')
const { markRepeatedWords } = require('./markRepeatedWords/index.js')
const { markRepeatedWordsFromTsvs } = require('./markRepeatedWordsFromTsvs/index.js')
const { convertToTsvs } = require('./convertToTsvs/index.js')
const { convertTsvsToListWords } = require('./convertTsvsToListWords/index.js')

module.exports = {
  tsvToJson,
  markRepeatedWords,
  markRepeatedWordsFromTsvs,
  convertToTsvs,
  convertTsvsToListWords,
}
