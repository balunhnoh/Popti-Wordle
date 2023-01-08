import { CONFIG } from './config'

export const WORDS = [
"ab'le'",
"ahb'eh",
"ahmul",
"ahnoq'",
"ahtx'otx'",
"akte'",
"alb'en",
"alib'e",
"alkal",
"anab'e",
"anhlom",
"anmah",
"anrey",
"antil",
"antun",
"axhnah",
"axhnoj",
"b'ab'el",
"b'ajal",
"b'alam",
"b'aq'inh",
"b'at'ux",
"b'uxub'",
"chakun",
"ch'eya'",
"chinhax",
"chiyoh",
"ch'ob'an",
"chok'an",
"ch'okan",
"chuman",
"echele",
"enhele",
"enhle'",
"exhtep",
"hab'il",
"hab'il",
"hanik'",
"hekal",
"hesus",
"hinhat",
"hob'ix",
"hok'onh",
"hokox",
"hoseh",
"howeb'",
"hoyom",
"hub'al",
"huchan",
"hujeb'",
"hunay",
"hunek",
"hunep",
"hunxa",
"husep",
"ijq'on",
"ik'ti'",
"ilb'eh",
"ilb'il",
"imte'",
"ispat",
"ixlom",
"ixnam",
"ixpix",
"jahan",
"jahaw",
"jiche'",
"kab'eb'",
"kalab'",
"kamoj",
"kanhal",
"kanheb'",
"kaq'al",
"kaq'eq'",
"katal",
"katin",
"kawil",
"kaxhah",
"k'ayal",
"k'olan",
"k'olich",
"komam",
"komes",
"komon",
"konhob'",
"koson",
"k'ulnhe",
"kulus",
"kuman",
"kuyum",
"lab'ah",
"lamun",
"lamuxh",
"laq'a'",
"laweh",
"lawuxh",
"leb'a'",
"lekaq'",
"leman",
"lijoh",
"limah",
"linhan",
"lohom",
"lolo'",
"loq'oj",
"luju'",
"lujum",
"machit",
"machto",
"majan",
"mama'",
"mamin",
"manel",
"matan",
"maxil",
"mayab'",
"maya'",
"meb'a'",
"metz'an",
"mexhah",
"mikin",
"mimi'",
"miyay",
"mohan",
"mohon",
"molaq'",
"motzaj",
"moyan",
"mujan",
"mulis",
"muluh",
"munil",
"mutz'an",
"nahat",
"niman",
"ninoj",
"ohob'e",
"oxhimi",
"oxk'onh",
"oxwanh",
"pahaw",
"pajoj",
"pak'an",
"palas",
"paleh",
"pama'",
"panhan",
"patan",
"pat'ux",
"patxo'",
"pawan",
"payat",
"payil",
"paytze",
"peb'an",
"peb'il",
"pelan",
"pelip",
"petan",
"petul",
"pexan",
"pitzin",
"pixhixh",
"pohow",
"pojoj",
"ponhan",
"ponhom",
"punhan",
"q'alem",
"q'alem",
"q'alom",
"q'ana'",
"q'anil",
"q'axep",
"q'inal",
"q'opoh",
"q'uxew",
"ramon",
"repan",
"retet",
"rinhan",
"sajach",
"salap",
"salik'",
"sanik",
"sawen",
"selan",
"semab'",
"setan",
"sihom",
"soman",
"sopan",
"soq'om",
"t'eb'an",
"telaj",
"tinab'",
"t'inhan",
"tonik'",
"t'uhan",
"tumaxh",
"tunhan",
"t'unhan",
"tunuk",
"tuxib'",
"tx'ab'in",
"tx'ekem",
"tx'ihal",
"tx'ihal",
"txitam",
"txulik",
"tx'umel",
"tzab'an",
"tzab'an",
"tz'ayik",
"tzeb'anh",
"tzeb'oj",
"tzeb'oj",
"tz'ib'inh",
"tz'ikin",
"tzimah",
"tz'isa'",
"tz'isis",
"tzojoy",
"tzoti'",
"tz'otz'ew",
"tzujan",
"tz'ulik",
"tz'unun",
"uchwen",
"unine",
"usmij",
"wajeb'",
"wak'am",
"wakax",
"wale'",
"wa'oj",
"watanh",
"wayanh",
"wayik",
"wayil",
"wich'en",
"wik'uh",
"wixaj",
"wohix",
"xewoj",
"xhaluh",
"xhilah",
"xhuwan",
"xumak",
"xuwin",
"yab'il",
"yalanh",
"yalil",
"yalil",
"yanhal",
"yawub'",
"yechel",
"yewal",
"yib'anh",
"yula'",
"yumal",
"naman",
"mok'an",
"malin",
"mik'in",
"b'iq'ich",
"b'aq'ich",
"pilal",
"chab'il",
"sipil",
"tilen",
"muyen",
"pehan",
"koyin",
"haman",
"sipan",
"sukal",
"sulan",
"sohan",
"sewan",
"sanhan",
"meles",
"nhewan",
"lewan",
"lehan",
"q'ehan",
"lenha'",
"leq'a'",
"letxa'",
"chela'",
"b'ela'",
"helan",
"k'enha'",
"lenha'",
"lek'a'",
"telan",
"somo'",
"seq'a'",
"maya'",
"sepan"
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
