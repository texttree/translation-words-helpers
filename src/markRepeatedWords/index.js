const markRepeatedWordsInVerseChapter = (
  wordObjects,
  type = 'verse',
  uniqueKey = 'TWLink',
  referenceKey = 'Reference'
) => {
  if (!wordObjects || !wordObjects?.length) {
    return
  }

  const markedWords = []
  let repeatedWords = {}

  wordObjects.forEach((wordObject) => {
    const [chapter] = wordObject[referenceKey].split(':')
    const typeRepeated = type === 'verse' ? wordObject[referenceKey] : chapter
    const keyRepeated = type === 'verse' ? 'isRepeatedInVerse' : 'isRepeatedInChapter'

    if (!repeatedWords[typeRepeated]?.includes(wordObject[uniqueKey])) {
      markedWords.push({ ...wordObject, [keyRepeated]: false })
      if (repeatedWords[typeRepeated]?.length) {
        repeatedWords[typeRepeated].push(wordObject[uniqueKey])
      } else {
        repeatedWords[typeRepeated] = [wordObject[uniqueKey]]
      }
    } else {
      markedWords.push({ ...wordObject, [keyRepeated]: true })
    }
  })

  return markedWords
}

const markRepeatedWordsInVerse = (wordObjects, uniqueKey, referenceKey) =>
  markRepeatedWordsInVerseChapter(wordObjects, 'verse', uniqueKey, referenceKey)

const markRepeatedWordsInChapter = (wordObjects, uniqueKey, referenceKey) =>
  markRepeatedWordsInVerseChapter(wordObjects, 'chapter', uniqueKey, referenceKey)

const markRepeatedWordsInBook = (wordObjects, uniqueKey = 'TWLink') => {
  if (!wordObjects || !wordObjects?.length) {
    return
  }

  const markedWords = []
  let repeatedWords = []

  wordObjects.forEach((wordObject) => {
    if (!repeatedWords.includes(wordObject[uniqueKey])) {
      markedWords.push({ ...wordObject, isRepeatedInBook: false })
      repeatedWords = Array.from(new Set([...repeatedWords, wordObject[uniqueKey]]))
    } else {
      markedWords.push({ ...wordObject, isRepeatedInBook: true })
    }
  })

  return markedWords
}

const markRepeatedWords = (wordObjects, type = 'verse', uniqueKey, referenceKey) => {
  if (!wordObjects || !wordObjects?.length) {
    return
  }

  switch (type) {
    case 'verse':
      return markRepeatedWordsInVerse(wordObjects, uniqueKey, referenceKey)
    case 'chapter':
      return markRepeatedWordsInChapter(wordObjects, uniqueKey, referenceKey)
    case 'book':
      return markRepeatedWordsInBook(wordObjects, uniqueKey)
    case 'all':
      return markRepeatedWordsInBook(
        markRepeatedWordsInChapter(
          markRepeatedWordsInVerse(wordObjects, uniqueKey, referenceKey),
          uniqueKey,
          referenceKey
        ),
        uniqueKey
      )
    default:
      return wordObjects
  }
}

module.exports = { markRepeatedWords, markRepeatedWordsInVerse }
