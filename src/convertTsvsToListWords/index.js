const convertTsvsToListWords = (tsvs) => {
  if (!tsvs) {
    return
  }
  const listWordsInBook = {}
  const listWordsInChapter = {}

  Object.entries(tsvs).forEach(([num, chapters]) => {
    const chaptersWords = {}
    Object.entries(chapters).forEach(([_, verses]) => {
      verses.forEach((verse) => {
        if (!Object.keys(listWordsInBook).includes(verse.TWLink)) {
          listWordsInBook[verse.TWLink] = [verse.Reference]
        }

        if (!listWordsInBook[verse.TWLink].includes(verse.Reference)) {
          listWordsInBook[verse.TWLink].push(verse.Reference)
        }

        if (!Object.keys(chaptersWords).includes(verse.TWLink)) {
          chaptersWords[verse.TWLink] = verse.Reference.split(':')[1]
        }
      })
    })
    listWordsInChapter[num] = chaptersWords
  })

  return { listWordsInChapter, listWordsInBook }
}

module.exports = { convertTsvsToListWords }
