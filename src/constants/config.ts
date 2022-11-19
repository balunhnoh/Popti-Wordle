export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: 'Ayuujk', // This changes the display name for your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'lbalbuenag', // Put your name here so people know who made this Wordle!
  authorWebsite: 'http://ayuujkjaaky.tlahuitoltepec.com/', // Put a link to your website or social media here
  wordListSource: 'Appyuujk', // Describe the source material for your words here
  wordListSourceLink: 'http://ayuujkjaaky.tlahuitoltepec.com/ayuujk_assets/js/wordle.js', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: true, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'January 1, 2022 00:00:00', // what date and time to start your game from
  defaultLang: 'mx', // the default interface language
  availableLangs: ['mx', 'es','en', 'sw', 'zh'], // the options available to the user for translation languages
  escapeSpecialCharacters: true, // whether to escape all characters in the orthography.
}
