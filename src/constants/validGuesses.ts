import { CONFIG } from './config'

export const VALIDGUESSES = [
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
"mexhah",
"anab'e"
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
