import { CONFIG } from './config'

export const WORDS = [
"konhob'",
"b'alam",
"anhlom",
"yawub'",
"anmah",
"munil",
"ab'le'",
"ahmul",
"ahnoq'",
"ahb'eh",
"akte'",
"alb'en",
"alib'e",
"chiyoh",
"b'alunh",
"lujum",
"maxil",
"molaq'",
"mulis",
"sanik",
"telaj",
"tunuk",
"tzimah",
"usmij",
"wakax",
"limah",
"wayanh",
"mexhah",
"anab'e"
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
