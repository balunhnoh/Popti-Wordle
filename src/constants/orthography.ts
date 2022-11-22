import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"a",
"b'",
"ch",
"ch'",
"e",
"h",
"i",
"j",
"k",
"k'",
"l",
"m",
"n",
"nh",
"o",
"p",
"q'",
"r",
"s",
"t",
"t'",
"tx",
"tx'",
"tz",
"tz'",
"u",
"w",
"x",
"xh",
"y",
"'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
