<div id="top"></div>

[![Contributors](https://img.shields.io/github/contributors/texttree/translation-words-helpers.svg?style=for-the-badge)](https://github.com/texttree/translation-words-helpers/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/texttree/translation-words-helpers.svg?style=for-the-badge)](https://github.com/texttree/translation-words-helpers/network/members)
[![Stargazers](https://img.shields.io/github/stars/texttree/translation-words-helpers.svg?style=for-the-badge)](https://github.com/texttree/translation-words-helpers/stargazers)
[![Issues](https://img.shields.io/github/issues/texttree/translation-words-helpers.svg?style=for-the-badge)](https://github.com/texttree/translation-words-helpers/issues)
[![MIT License](https://img.shields.io/github/license/texttree/translation-words-helpers.svg?style=for-the-badge)](https://github.com/texttree/translation-words-helpers/blob/master/LICENSE)

<div align="center">
  <a href="https://github.com/texttree/translation-words-helpers">
    <img src="images/logo.png" alt="Logo" width="256" height="256">
  </a>
</div>

<h2><div align="center">translation-words-helpers</div></h2>
<br />

<br />
<center>
  <a href="https://github.com/texttree/translation-words-helpers/issues">Report Bug · </a>
  <a href="https://github.com/texttree/translation-words-helpers/issues">Request Feature</a>
</center>

<br />
<br />
<details>
  <summary>TABLE OF CONTENTS ↧</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The library allows you to mark repeated words in TSV Translation Words Links and TSV OBS Translation Words Links from git.door43 in your app.

**Purpose**
- mark repeated words in in TSV Translation Words Links and TSV OBS Translation Words Links for filtering

**Problem**
- in some verses there a many repeated words

**Scope**
- the library helps to mark and filter words for traslators in apps

**Background**


<a style="text-align: right; display: block" href="#top">(back to top)</a>

### Built With

- JavaScript
- [Webpack](https://webpack.js.org/)

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Add the library to your app

- yarn

```bash
yarn add @texttree/translation-words-helpers
```

- npm

```bash
npm install @texttree/translation-words-helpers
```

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- USAGE EXAMPLES -->

## Usage

Example of usage

```
const { data } = await axios(
    'https://git.door43.org/unfoldingWord/en_obs-twl/raw/branch/master/twl_OBS.tsv'
  )
const json = tsvToJson(data)
const markedWords = markRepeatedWords(json)
```
json will have this structure:

```
[
  {
    Reference: '1:1',
    ID: 'aoaa',
    Tags: 'keyterm',
    OrigWords: 'God',
    Occurrence: '1',
    TWLink: 'rc://*/tw/dict/bible/kt/god'
  },...
]
```
and markedWords:

```
[
  {
    Reference: '1:1',
    ID: 'aoaa',
    Tags: 'keyterm',
    OrigWords: 'God',
    Occurrence: '1',
    TWLink: 'rc://*/tw/dict/bible/kt/god',
    isRepeatedInVerse: false
  },
```
At default this function add mark just in verse, but you can change it if you add type ('chapter', 'book', 'all').
For example:
```
const markedWords = markRepeatedWords(json, 'all')
```
returns
```
[...
  {
    Reference: '4:4',
    ID: 'o16m',
    Tags: 'keyterm',
    OrigWords: 'bless',
    Occurrence: '1',
    TWLink: 'rc://*/tw/dict/bible/kt/bless',
    isRepeatedInVerse: false,
    isRepeatedInChapter: false,
    isRepeatedInBook: true
  },...
]
```
More examples you can get from [tests](https://github.com/texttree/translation-words-helpers/tree/master/__tests__).

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/texttree/translation-words-helpers/issues) for a full list of proposed features (and known issues).

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. [Guidelines for external contributions.](https://forum.door43.org)

You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

If you would like to fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/texttree/translation-words-helpers/blob/master/LICENSE) for more information.

<a style="text-align: right; display: block" href="#top">(back to top)</a>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/texttree/translation-words-helpers](https://github.com/texttree/translation-words-helpers)

<a style="text-align: right; display: block" href="#top">(back to top)</a>
# translation-words-helpers
