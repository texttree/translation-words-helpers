const convertToTSV = (json, book = 'list') => {
  if (!json) {
    return
  }

  const tsvItems = Array.isArray(json) ? json : []
  const tn = {}

  for (let index = 0; index < tsvItems.length; index++) {
    const note = tsvItems[index]
    const referenceChunks = note?.Reference?.split(':')
    const Chapter = referenceChunks ? referenceChunks[0] : null
    const Verse = referenceChunks ? referenceChunks[1] : null

    if (Chapter && Verse && book) {
      note.Chapter = Chapter
      note.Verse = Verse
      note.Book = book
    }

    if (tn[book] && tn[book][note.Chapter] && tn[book][note.Chapter][note.Verse]) {
      tn[book][note.Chapter][note.Verse].push(note)
    } else if (tn[book] && tn[book][note.Chapter]) {
      tn[book][note.Chapter][note.Verse] = [note]
    } else if (tn[book]) {
      tn[book][note.Chapter] = {}
      tn[book][note.Chapter][note.Verse] = [note]
    } else {
      tn[book] = {}
      tn[book][note.Chapter] = {}
      tn[book][note.Chapter][note.Verse] = [note]
    }
  }
  return tn[book]
}
module.exports = { convertToTSV }
