import { CONFIG } from './config'

export const VALIDGUESSES = [
"ab'le'",
"ahb'eh",
"ahmul",
"ahnoq'",
"ahtx'otx'",
"akte'",
"alb'en",
"alib'e",
"alkal",
"anab'e"
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
"kanhk'onh",
"kaq'al",
"kaq'eq'",
"katal",
"katin",
"kawil",
"kaxhah",
"k'ayal",
"k'olan",
"koleh",
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
"melsel",
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
"santah",
"sawen",
"selan",
"semab'",
"setan",
"sihom",
"slahunh",
"soman",
"sopan",
"soq'om",
"t'eb'an",
"telaj",
"tinab'",
"ti'nanh",
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
"yumal"
]
if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
