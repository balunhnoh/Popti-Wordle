import { CONFIG } from './config'

export const VALIDGUESSES = [
"kaaky","nitky","kë'xp","wääjx","tiixy","käjpy","xejty","kutpy","ko'on","yuu'n","kujup","najan","kujan","kë'ëk","xuumy"
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
