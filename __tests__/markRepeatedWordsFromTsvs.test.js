const { markRepeatedWordsFromTsvs } = require('../src/markRepeatedWordsFromTsvs/index')
const { tsvs } = require('../mocks/mocks')
const { describe, expect, test } = require('@jest/globals')

const shortItems = tsvs[2][6].map((item) => ({
  Reference: item.Reference,
  TWLink: item.TWLink,
}))
const shortItems2 = tsvs[1][2].map((item) => ({
  Reference: item.Reference,
  TWLink: item.TWLink,
}))

describe('verse module', () => {
  test('try to mark in verse', () => {
    expect(markRepeatedWordsFromTsvs(tsvs[2][6])).toEqual([
      {
        Reference: '2:6',
        ID: 'zesu',
        Tags: 'name',
        OrigWords: 'Βηθλέεμ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/bethlehem',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
      {
        Reference: '2:6',
        ID: 'kpwh',
        Tags: 'name',
        OrigWords: 'Ἰούδα',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/judah',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
      {
        Reference: '2:6',
        ID: 'qrzw',
        Tags: '',
        OrigWords: 'ἡγεμόσιν',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/governor',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
      {
        Reference: '2:6',
        ID: 'mkb3',
        Tags: 'name',
        OrigWords: 'Ἰούδα',
        Occurrence: '2',
        TWLink: 'rc://*/tw/dict/bible/names/judah',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: true,
      },
      {
        Reference: '2:6',
        ID: 'rs89',
        Tags: '',
        OrigWords: 'ποιμανεῖ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/shepherd',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
      {
        Reference: '2:6',
        ID: 'jam5',
        Tags: '',
        OrigWords: 'λαόν',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/peoplegroup',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
      {
        Reference: '2:6',
        ID: 'sw34',
        Tags: 'keyterm',
        OrigWords: 'λαόν μου τὸν Ἰσραήλ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/kt/israel',
        Chapter: '2',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
      },
    ])
  })
})
describe('chapter module', () => {
  test('try to mark in chapter', () => {
    expect(markRepeatedWordsFromTsvs(tsvs[1][6], tsvs, 'chapter')).toEqual([
      {
        Reference: '1:6',
        ID: 'w69k',
        Tags: 'name',
        OrigWords: 'Ἰεσσαὶ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/jesse',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: true,
      },
      {
        Reference: '1:6',
        ID: 'ajce',
        Tags: 'name',
        OrigWords: 'Δαυεὶδ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/david',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: true,
      },
      {
        Reference: '1:6',
        ID: 'scsw',
        Tags: '',
        OrigWords: 'βασιλέα',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/king',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: false,
      },
      {
        Reference: '1:6',
        ID: 'h4zv',
        Tags: 'name',
        OrigWords: 'Δαυεὶδ',
        Occurrence: '2',
        TWLink: 'rc://*/tw/dict/bible/names/david',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: true,
      },
      {
        Reference: '1:6',
        ID: 'ngza',
        Tags: 'name',
        OrigWords: 'Σολομῶνα',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/solomon',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: false,
      },
      {
        Reference: '1:6',
        ID: 'mwpa',
        Tags: 'name',
        OrigWords: 'Οὐρίου',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/uriah',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInChapter: false,
      },
    ])
  })
})
describe('book module', () => {
  test('1 try to mark in book', () => {
    expect(markRepeatedWordsFromTsvs(shortItems, tsvs, 'book')).toEqual([
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/names/bethlehem',
        isRepeatedInBook: true,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/names/judah',
        isRepeatedInBook: true,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/other/governor',
        isRepeatedInBook: false,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/names/judah',
        isRepeatedInBook: true,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/other/shepherd',
        isRepeatedInBook: false,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/other/peoplegroup',
        isRepeatedInBook: true,
      },
      {
        Reference: '2:6',
        TWLink: 'rc://*/tw/dict/bible/kt/israel',
        isRepeatedInBook: false,
      },
    ])
  })
  test('2 try to mark in book', () => {
    expect(markRepeatedWordsFromTsvs(shortItems2, tsvs, 'book')).toEqual([
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/abraham',
        isRepeatedInBook: true,
      },
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/isaac',
        isRepeatedInBook: false,
      },
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/isaac',
        isRepeatedInBook: true,
      },
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/jacob',
        isRepeatedInBook: false,
      },
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/jacob',
        isRepeatedInBook: true,
      },
      {
        Reference: '1:2',
        TWLink: 'rc://*/tw/dict/bible/names/judah',
        isRepeatedInBook: false,
      },
    ])
  })
})
describe('all module', () => {
  test('try to mark in book, chapter and verse', () => {
    expect(markRepeatedWordsFromTsvs(tsvs[1][6], tsvs, 'all')).toEqual([
      {
        Reference: '1:6',
        ID: 'w69k',
        Tags: 'name',
        OrigWords: 'Ἰεσσαὶ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/jesse',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
        isRepeatedInChapter: true,
        isRepeatedInBook: true,
      },
      {
        Reference: '1:6',
        ID: 'ajce',
        Tags: 'name',
        OrigWords: 'Δαυεὶδ',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/david',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
        isRepeatedInChapter: true,
        isRepeatedInBook: true,
      },
      {
        Reference: '1:6',
        ID: 'scsw',
        Tags: '',
        OrigWords: 'βασιλέα',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/other/king',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
        isRepeatedInChapter: false,
        isRepeatedInBook: false,
      },
      {
        Reference: '1:6',
        ID: 'h4zv',
        Tags: 'name',
        OrigWords: 'Δαυεὶδ',
        Occurrence: '2',
        TWLink: 'rc://*/tw/dict/bible/names/david',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: true,
        isRepeatedInChapter: true,
        isRepeatedInBook: true,
      },
      {
        Reference: '1:6',
        ID: 'ngza',
        Tags: 'name',
        OrigWords: 'Σολομῶνα',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/solomon',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
        isRepeatedInChapter: false,
        isRepeatedInBook: false,
      },
      {
        Reference: '1:6',
        ID: 'mwpa',
        Tags: 'name',
        OrigWords: 'Οὐρίου',
        Occurrence: '1',
        TWLink: 'rc://*/tw/dict/bible/names/uriah',
        Chapter: '1',
        Verse: '6',
        Book: 'mat',
        isRepeatedInVerse: false,
        isRepeatedInChapter: false,
        isRepeatedInBook: false,
      },
    ])
  })
})
