const tsvToJson = (tsv) => {
  const result = []

  if (tsv) {
    const lines = tsv.trim().split('\n')
    const headers = lines[0].split('\t')
    for (let i = 1; i < lines.length; i++) {
      const obj = {}
      const currentline = lines[i].split('\t')
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j]
      }

      result.push(obj)
    }
  }

  return result
}

module.exports = { tsvToJson }
