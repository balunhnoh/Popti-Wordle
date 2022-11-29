import { CONFIG } from './config'

export const WORDS = [
"AB'LE'",
"AHB'EH",
"AHMUL",
"AHNOQ'",
"AHTX'OTX'",
"AKTE'",
"ALB'EN",
"ALIB'E",
"ALKAL",
"ANAB'E"
"ANHLOM",
"ANMAH",
"ANREY",
"ANTIL",
"ANTUN",
"AXHNAH",
"AXHNOJ",
"B'AB'EL",
"B'AJAL",
"B'ALAM",
"B'AQ'INH",
"B'AT'UX",
"B'UXUB'",
"CHAKUN",
"CH'EYA'",
"CHINHAX",
"CHIYOH",
"CH'OB'AN",
"CHOK'AN",
"CH'OKAN",
"CHUMAN",
"ECHELE",
"ENHELE",
"ENHLE'",
"EXHTEP",
"HAB'IL",
"HAB'IL",
"HANIK'",
"HEKAL",
"HESUS",
"HINHAT",
"HOB'IX",
"HOK'ONH",
"HOKOX",
"HOSEH",
"HOWEB'",
"HOYOM",
"HUB'AL",
"HUCHAN",
"HUJEB'",
"HUNAY",
"HUNEK",
"HUNEP",
"HUNXA",
"HUSEP",
"IJQ'ON",
"IK'TI'",
"ILB'EH",
"ILB'IL",
"IMTE'",
"ISPAT",
"IXLOM",
"IXNAM",
"IXPIX",
"JAHAN",
"JAHAW",
"JICHE'",
"KAB'EB'",
"KALAB'",
"KAMOJ",
"KANHAL",
"KANHEB'",
"KANHK'ONH",
"KAQ'AL",
"KAQ'EQ'",
"KATAL",
"KATIN",
"KAWIL",
"KAXHAH",
"K'AYAL",
"K'OLAN",
"KOLEH",
"K'OLICH",
"KOMAM",
"KOMES",
"KOMON",
"KONHOB'",
"KOSON",
"K'ULNHE",
"KULUS",
"KUMAN",
"KUYUM",
"LAB'AH",
"LAMUN",
"LAMUXH",
"LAQ'A'",
"LAWEH",
"LAWUXH",
"LEKAQ'",
"LEMAN",
"LIJOH",
"LIMAH",
"LINHAN",
"LOHOM",
"LOLO'",
"LOQ'OJ",
"LUJU'",
"LUJUM",
"MACHIT",
"MACHTO",
"MAJAN",
"MAMA'",
"MAMIN",
"MANEL",
"MATAN",
"MAXIL",
"MAYAB'",
"MAYA'",
"MEB'A'",
"MELSEL",
"METZ'AN",
"MEXHAH",
"MIKIN",
"MIMI'",
"MIYAY",
"MOHAN",
"MOHON",
"MOLAQ'",
"MOTZAJ",
"MOYAN",
"MUJAN",
"MULIS",
"MULUH",
"MUNIL",
"MUTZ'AN",
"NAHAT",
"NIMAN",
"NINOJ",
"OHOB'E",
"OXHIMI",
"OXK'ONH",
"OXWANH",
"PAHAW",
"PAJOJ",
"PAK'AN",
"PALAS",
"PALEH",
"PAMA'",
"PANHAN",
"PATAN",
"PAT'UX",
"PATXO'",
"PAWAN",
"PAYIL",
"PAYTZE",
"PEB'AN",
"PEB'IL",
"PELAN",
"PELIP",
"PETAN",
"PETUL",
"PEXAN",
"PITZIN",
"PIXHIXH",
"POHOW",
"POJOJ",
"PONHAN",
"PONHOM",
"PUNHAN",
"Q'ALEM",
"Q'ALEM",
"Q'ALOM",
"Q'ANA'",
"Q'ANIL",
"Q'AXEP",
"Q'INAL",
"Q'OPOH",
"Q'UXEW",
"RAMON",
"REPAN",
"RETET",
"RINHAN",
"SAJACH",
"SALAP",
"SALIK'",
"SANIK",
"SANTAH",
"SAWEN",
"SELAN",
"SEMAB'",
"SETAN",
"SIHOM",
"SLAHUNH",
"SOMAN",
"SOPAN",
"SOQ'OM",
"T'EB'AN",
"TELAJ",
"TINAB'",
"TI'NANH",
"T'INHAN",
"TONIK'",
"T'UHAN",
"TUMAXH",
"TUNHAN",
"T'UNHAN",
"TUNUK",
"TUXIB'",
"TX'AB'IN",
"TX'EKEM",
"TX'IHAL",
"TX'IHAL",
"TXITAM",
"TXULIK",
"TX'UMEL",
"TZAB'AN",
"TZAB'AN",
"TZ'AYIK",
"TZEB'ANH",
"TZEB'OJ",
"TZEB'OJ",
"TZ'IB'INH",
"TZ'IKIN",
"TZIMAH",
"TZ'ISA'",
"TZ'ISIS",
"TZOJOY",
"TZOTI'",
"TZ'OTZ'EW",
"TZUJAN",
"TZ'ULIK",
"TZ'UNUN",
"UCHWEN",
"UNINE",
"USMIJ",
"WAJEB'",
"WAK'AM",
"WAKAX",
"WALE'",
"WA'OJ",
"WATANH",
"WAYANH",
"WAYIK",
"WAYIL",
"WICH'EN",
"WIK'UH",
"WIXAJ",
"WOHIX",
"XEWOJ",
"XHALUH",
"XHILAH",
"XHUWAN",
"XUMAK",
"XUWIN",
"YAB'IL",
"YALANH",
"YALIL",
"YALIL",
"YANHAL",
"YAWUB'",
"YECHEL",
"YEWAL",
"YIB'ANH",
"YULA'",
"YUMAL"
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
