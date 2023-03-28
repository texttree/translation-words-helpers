const { markRepeatedWordsInVerse } = require('../markRepeatedWords')
const { convertTsvsToListWords } = require('../convertTsvsToListWords')
const { tsvs } = require('../../mocks/mocks')
const markRepeatedWordsFromTsvs = (
  items,
  tsvs,
  type = 'verse',
  uniqueKey = 'TWLink',
  referenceKey = 'Reference'
) => {
  if (!items || !items.length) {
    return
  }
  const markedWordsInVerse = markRepeatedWordsInVerse(items)
  if (type === 'verse') {
    return markedWordsInVerse
  }
  if (!tsvs) {
    return
  }
  const { listWordsInChapter, listWordsInBook } = convertTsvsToListWords(tsvs)
  const markedWords = []
  markedWordsInVerse.forEach((item) => {
    const [chapter, verse] = item?.[referenceKey].split(':')
    let markedItem = {}

    const conditions = {
      chapter:
        listWordsInChapter?.[chapter]?.[item?.[uniqueKey]] !== verse ||
        item?.isRepeatedInVerse,
      book: listWordsInBook?.[item?.[uniqueKey]][0] !== item?.[referenceKey],
    }
    switch (type) {
      case 'chapter':
        delete item.isRepeatedInVerse
        markedItem = {
          ...item,
          isRepeatedInChapter: conditions['chapter'],
        }
        break
      case 'book':
        delete item.isRepeatedInVerse
        markedItem = {
          ...item,
          isRepeatedInBook: conditions['book'] || conditions['chapter'],
        }
        break
      case 'all':
        markedItem = {
          ...item,
          isRepeatedInChapter: conditions['chapter'],
          isRepeatedInBook: conditions['book'],
        }
        break
      default:
        break
    }
    markedWords.push(markedItem)
  })
  return markedWords
}

module.exports = { markRepeatedWordsFromTsvs }
