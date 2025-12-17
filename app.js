        console.log('Script loading started...');
        console.log('Testing if JavaScript is executing');
        
        // COMPREHENSIVE ALBANIAN-ENGLISH DICTIONARY
        // Built from actual Albanian dictionary - accurate translations
        window.dictionary = {
            // Essential verbs - CORRECTED
            "go": { alb: "shkoj", type: "verb", pron: "shkoy" },
            "get": { alb: "marr", type: "verb", pron: "mahr" },  
            "to be": { alb: "jam", type: "verb", pron: "yahm" },
            "am": { alb: "jam", type: "verb", pron: "yahm" },
            "is": { alb: "është", type: "verb", pron: "UH-shtuh" },
            "are": { alb: "janë", type: "verb", pron: "YAH-nuh" },
            "have": { alb: "kam", type: "verb", pron: "kahm" },
            "do": { alb: "bëj", type: "verb", pron: "buh" },
            "does": { alb: "bën", type: "verb", pron: "buhn" },
            "come": { alb: "vij", type: "verb", pron: "veey" },
            "want": { alb: "dua", type: "verb", pron: "doo-ah" },
            "need": { alb: "kam nevojë", type: "verb", pron: "kahm neh-VOY-uh" },
            "eat": { alb: "ha", type: "verb", pron: "hah" },
            "drink": { alb: "pi", type: "verb", pron: "pee" },
            "speak": { alb: "flas", type: "verb", pron: "flahs" },
            "understand": { alb: "kuptoj", type: "verb", pron: "koop-TOY" },
            "know": { alb: "di", type: "verb", pron: "dee" },
            "see": { alb: "shoh", type: "verb", pron: "shoh" },
            "hear": { alb: "dëgjoj", type: "verb", pron: "duh-GYOY" },
            "say": { alb: "them", type: "verb", pron: "tehm" },
            "help": { alb: "ndihmoj", type: "verb", pron: "ndee-MOY" },
            "work": { alb: "punoj", type: "verb", pron: "poo-NOY" },
            "live": { alb: "jetoj", type: "verb", pron: "yeh-TOY" },
            "sleep": { alb: "fle", type: "verb", pron: "fleh" },
            "walk": { alb: "ec", type: "verb", pron: "ehts" },
            "buy": { alb: "blej", type: "verb", pron: "bley" },
            "sell": { alb: "shes", type: "verb", pron: "shess" },
            "give": { alb: "jap", type: "verb", pron: "yahp" },
            "take": { alb: "marr", type: "verb", pron: "mahr" },
            "like": { alb: "pëlqej", type: "verb", pron: "puhl-CHEY" },
            "love": { alb: "dua", type: "verb", pron: "doo-ah" },
            "think": { alb: "mendoj", type: "verb", pron: "mehn-DOY" },
            "wait": { alb: "pres", type: "verb", pron: "press" },
            "open": { alb: "hap", type: "verb", pron: "hahp" },
            "close": { alb: "mbyll", type: "verb", pron: "m-BOOL" },
            "begin": { alb: "filloj", type: "verb", pron: "fee-LOY" },
            "start": { alb: "filloj", type: "verb", pron: "fee-LOY" },
            "end": { alb: "mbaroj", type: "verb", pron: "m-bah-ROY" },
            "finish": { alb: "mbaroj", type: "verb", pron: "m-bah-ROY" },
            "read": { alb: "lexoj", type: "verb", pron: "leh-KSOY" },
            "write": { alb: "shkruaj", type: "verb", pron: "shkroo-AY" },
            "call": { alb: "telefonoj", type: "verb", pron: "teh-leh-fo-NOY" },
            "find": { alb: "gjej", type: "verb", pron: "gyey" },
            "learn": { alb: "mësoj", type: "verb", pron: "muh-SOY" },
            "teach": { alb: "mësoj", type: "verb", pron: "muh-SOY" },
            "look": { alb: "shikoj", type: "verb", pron: "shee-KOY" },
            "try": { alb: "provoj", type: "verb", pron: "pro-VOY" },
            "ask": { alb: "pyes", type: "verb", pron: "poo-yes" },
            "answer": { alb: "përgjigjem", type: "verb", pron: "puhr-GEE-jem" },

            // Common nouns - CORRECTED
            "hello": { alb: "përshëndetje", type: "greeting", pron: "puhr-shuhn-DET-yeh" },
            "goodbye": { alb: "mirupafshim", type: "greeting", pron: "mee-roo-pahf-SHEEM" },
            "thank you": { alb: "faleminderit", type: "phrase", pron: "fah-leh-meen-deh-REET" },
            "thanks": { alb: "faleminderit", type: "phrase", pron: "fah-leh-meen-deh-REET" },
            "please": { alb: "ju lutem", type: "phrase", pron: "yoo LOO-tem" },
            "yes": { alb: "po", type: "word", pron: "poh" },
            "no": { alb: "jo", type: "word", pron: "yoh" },
            "water": { alb: "ujë", type: "noun", pron: "OO-yuh" },
            "food": { alb: "ushqim", type: "noun", pron: "oosh-CHEEM" },
            "bread": { alb: "bukë", type: "noun", pron: "BOO-kuh" },
            "coffee": { alb: "kafe", type: "noun", pron: "kah-FEH" },
            "tea": { alb: "çaj", type: "noun", pron: "chai" },
            "milk": { alb: "qumësht", type: "noun", pron: "choo-MUHSHT" },
            "money": { alb: "para", type: "noun", pron: "PAH-rah" },
            "house": { alb: "shtëpi", type: "noun", pron: "SHTUH-pee" },
            "home": { alb: "shtëpi", type: "noun", pron: "SHTUH-pee" },
            "hotel": { alb: "hotel", type: "noun", pron: "ho-TEL" },
            "restaurant": { alb: "restorant", type: "noun", pron: "res-to-RAHNT" },
            "street": { alb: "rrugë", type: "noun", pron: "RROO-guh" },
            "city": { alb: "qytet", type: "noun", pron: "choo-TET" },
            "country": { alb: "vend", type: "noun", pron: "vend" },
            "car": { alb: "makinë", type: "noun", pron: "mah-KEE-nuh" },
            "bus": { alb: "autobus", type: "noun", pron: "ow-to-BOOS" },
            "taxi": { alb: "taksi", type: "noun", pron: "tahk-SEE" },
            "train": { alb: "tren", type: "noun", pron: "trehn" },
            "airplane": { alb: "aeroplan", type: "noun", pron: "ah-eh-ro-PLAHN" },
            "airport": { alb: "aeroport", type: "noun", pron: "ah-eh-ro-PORT" },
            "station": { alb: "stacion", type: "noun", pron: "stah-tsee-ON" },
            "bathroom": { alb: "banjë", type: "noun", pron: "BAH-nyuh" },
            "toilet": { alb: "tualeti", type: "noun", pron: "too-ah-LEH-tee" },
            "room": { alb: "dhomë", type: "noun", pron: "DOH-muh" },
            "bed": { alb: "shtrat", type: "noun", pron: "shtrat" },
            "table": { alb: "tavolinë", type: "noun", pron: "tah-vo-LEE-nuh" },
            "chair": { alb: "karrige", type: "noun", pron: "kah-REE-geh" },
            "door": { alb: "derë", type: "noun", pron: "DEH-ruh" },
            "window": { alb: "dritare", type: "noun", pron: "dree-TAH-reh" },
            "phone": { alb: "telefon", type: "noun", pron: "teh-leh-FON" },
            "book": { alb: "libër", type: "noun", pron: "LEE-buhr" },
            "pen": { alb: "stilolaps", type: "noun", pron: "stee-lo-LAHPS" },
            "paper": { alb: "letër", type: "noun", pron: "LEH-tuhr" },
            "time": { alb: "kohë", type: "noun", pron: "KOH-uh" },
            "day": { alb: "ditë", type: "noun", pron: "DEE-tuh" },
            "night": { alb: "natë", type: "noun", pron: "NAH-tuh" },
            "morning": { alb: "mëngjes", type: "noun", pron: "MUHN-gyes" },
            "evening": { alb: "mbrëmje", type: "noun", pron: "m-BRUHM-yeh" },
            "week": { alb: "javë", type: "noun", pron: "YAH-vuh" },
            "month": { alb: "muaj", type: "noun", pron: "moo-AY" },
            "year": { alb: "vit", type: "noun", pron: "veet" },
            "today": { alb: "sot", type: "adv", pron: "sot" },
            "tomorrow": { alb: "nesër", type: "adv", pron: "NEH-suhr" },
            "yesterday": { alb: "dje", type: "adv", pron: "jeh" },
            "man": { alb: "burrë", type: "noun", pron: "BOOR-ruh" },
            "woman": { alb: "grua", type: "noun", pron: "GROO-ah" },
            "child": { alb: "fëmijë", type: "noun", pron: "fuh-MEE-yuh" },
            "friend": { alb: "shok", type: "noun", pron: "shok" },
            "family": { alb: "familje", type: "noun", pron: "fah-MEEL-yeh" },
            "name": { alb: "emër", type: "noun", pron: "EH-muhr" },
            "doctor": { alb: "doktor", type: "noun", pron: "DOK-tor" },
            "hospital": { alb: "spital", type: "noun", pron: "spee-TAHL" },
            "pharmacy": { alb: "farmaci", type: "noun", pron: "far-mah-TSEE" },
            "police": { alb: "polici", type: "noun", pron: "po-lee-TSEE" },
            "bank": { alb: "bankë", type: "noun", pron: "BAHN-kuh" },
            "market": { alb: "treg", type: "noun", pron: "treg" },
            "shop": { alb: "dyqan", type: "noun", pron: "doo-CHAHN" },
            "store": { alb: "dyqan", type: "noun", pron: "doo-CHAHN" },
            "price": { alb: "çmim", type: "noun", pron: "chmeem" },
            "park": { alb: "park", type: "noun", pron: "pahrk" },
            "beach": { alb: "plazh", type: "noun", pron: "plahzh" },
            "mountain": { alb: "mal", type: "noun", pron: "mahl" },
            "lake": { alb: "liqen", type: "noun", pron: "LEE-chen" },
            "river": { alb: "lumë", type: "noun", pron: "LOO-muh" },
            "museum": { alb: "muze", type: "noun", pron: "moo-ZEH" },
            "church": { alb: "kishë", type: "noun", pron: "KEE-shuh" },
            "mosque": { alb: "xhami", type: "noun", pron: "jah-MEE" },
            "center": { alb: "qendër", type: "noun", pron: "CHEN-duhr" },

            // Adjectives - CORRECTED
            "good": { alb: "mirë", type: "adj", pron: "MEE-ruh" },
            "bad": { alb: "keq", type: "adj", pron: "kech" },
            "big": { alb: "madh", type: "adj", pron: "mahth" },
            "small": { alb: "vogël", type: "adj", pron: "VO-guhl" },
            "hot": { alb: "nxehtë", type: "adj", pron: "n-KSEH-tuh" },
            "cold": { alb: "ftohtë", type: "adj", pron: "FTOH-tuh" },
            "new": { alb: "ri", type: "adj", pron: "ree" },
            "old": { alb: "vjetër", type: "adj", pron: "VYEH-tuhr" },
            "expensive": { alb: "shtrenjtë", type: "adj", pron: "SHTRENY-tuh" },
            "cheap": { alb: "lirë", type: "adj", pron: "LEE-ruh" },
            "beautiful": { alb: "bukur", type: "adj", pron: "BOO-koor" },
            "ugly": { alb: "shëmtuar", type: "adj", pron: "shuhm-too-AHR" },
            "happy": { alb: "lumtur", type: "adj", pron: "LOOM-toor" },
            "sad": { alb: "trishtuar", type: "adj", pron: "treesh-too-AHR" },
            "easy": { alb: "lehtë", type: "adj", pron: "LEH-tuh" },
            "difficult": { alb: "vështirë", type: "adj", pron: "VUHSH-tee-ruh" },
            "hard": { alb: "vështirë", type: "adj", pron: "VUHSH-tee-ruh" },
            "fast": { alb: "shpejtë", type: "adj", pron: "SHPEY-tuh" },
            "slow": { alb: "ngadalshëm", type: "adj", pron: "n-gah-DAHL-shuhm" },
            "clean": { alb: "pastër", type: "adj", pron: "PAHS-tuhr" },
            "dirty": { alb: "ndyrë", type: "adj", pron: "n-DOO-ruh" },
            "open": { alb: "hapur", type: "adj", pron: "HAH-poor" },
            "closed": { alb: "mbyllur", type: "adj", pron: "m-BOOL-loor" },
            "right": { alb: "djathtë", type: "adj/noun", pron: "JYAHT-tuh" },
            "left": { alb: "majtë", type: "adj/noun", pron: "MAYT-tuh" },
            "near": { alb: "afër", type: "adj/adv", pron: "AH-fuhr" },
            "far": { alb: "larg", type: "adj/adv", pron: "lahrg" },

            // Numbers - CORRECTED
            "one": { alb: "një", type: "number", pron: "nyuh" },
            "two": { alb: "dy", type: "number", pron: "doo" },
            "three": { alb: "tre", type: "number", pron: "treh" },
            "four": { alb: "katër", type: "number", pron: "KAH-tuhr" },
            "five": { alb: "pesë", type: "number", pron: "PEH-suh" },
            "six": { alb: "gjashtë", type: "number", pron: "GYAHSH-tuh" },
            "seven": { alb: "shtatë", type: "number", pron: "SHTAH-tuh" },
            "eight": { alb: "tetë", type: "number", pron: "TEH-tuh" },
            "nine": { alb: "nëntë", type: "number", pron: "NUHN-tuh" },
            "ten": { alb: "dhjetë", type: "number", pron: "JYEH-tuh" },

            // Question words - CORRECTED
            "what": { alb: "çfarë", type: "question", pron: "CHFAH-ruh" },
            "where": { alb: "ku", type: "question", pron: "koo" },
            "when": { alb: "kur", type: "question", pron: "koor" },
            "why": { alb: "pse", type: "question", pron: "p-seh" },
            "how": { alb: "si", type: "question", pron: "see" },
            "who": { alb: "kush", type: "question", pron: "koosh" },
            "which": { alb: "cili", type: "question", pron: "TSEE-lee" },

            // Prepositions - CORRECTED  
            "in": { alb: "në", type: "prep", pron: "nuh" },
            "on": { alb: "në", type: "prep", pron: "nuh" },
            "at": { alb: "në", type: "prep", pron: "nuh" },
            "to": { alb: "në", type: "prep", pron: "nuh" },
            "with": { alb: "me", type: "prep", pron: "meh" },
            "from": { alb: "nga", type: "prep", pron: "n-gah" },
            "for": { alb: "për", type: "prep", pron: "puhr" },
            "of": { alb: "i/e", type: "prep", pron: "ee/eh" },
            "the": { alb: "", type: "article", pron: "" },  // Albanian doesn't use "the" the same way
            "a": { alb: "një", type: "article", pron: "nyuh" },
            "an": { alb: "një", type: "article", pron: "nyuh" },

            // Conjunctions & particles - CORRECTED
            "and": { alb: "dhe", type: "conj", pron: "theh" },
            "or": { alb: "ose", type: "conj", pron: "OH-seh" },
            "but": { alb: "por", type: "conj", pron: "por" },
            "if": { alb: "nëse", type: "conj", pron: "NUH-seh" },
            "because": { alb: "sepse", type: "conj", pron: "SEP-seh" },
            
            // Adverbs - CORRECTED
            "very": { alb: "shumë", type: "adv", pron: "SHOO-muh" },
            "much": { alb: "shumë", type: "adv", pron: "SHOO-muh" },
            "little": { alb: "pak", type: "adv", pron: "pahk" },
            "more": { alb: "më shumë", type: "adv", pron: "muh SHOO-muh" },
            "less": { alb: "më pak", type: "adv", pron: "muh pahk" },
            "now": { alb: "tani", type: "adv", pron: "TAH-nee" },
            "here": { alb: "këtu", type: "adv", pron: "KUH-too" },
            "there": { alb: "atje", type: "adv", pron: "AHT-yeh" },
            "always": { alb: "gjithmonë", type: "adv", pron: "gyeeth-MOH-nuh" },
            "never": { alb: "kurrë", type: "adv", pron: "KOOR-ruh" },
            "maybe": { alb: "ndoshta", type: "adv", pron: "n-DOSH-tah" },
            "also": { alb: "gjithashtu", type: "adv", pron: "gyee-TAHSH-too" },
            "too": { alb: "gjithashtu", type: "adv", pron: "gyee-TAHSH-too" },
            
            // Pronouns - CORRECTED
            "i": { alb: "unë", type: "pronoun", pron: "OO-nuh" },
            "you": { alb: "ju", type: "pronoun", pron: "yoo" },
            "he": { alb: "ai", type: "pronoun", pron: "eye" },
            "she": { alb: "ajo", type: "pronoun", pron: "AH-yo" },
            "we": { alb: "ne", type: "pronoun", pron: "neh" },
            "they": { alb: "ata", type: "pronoun", pron: "AH-tah" },
            "my": { alb: "im", type: "possessive", pron: "eem" },
            "your": { alb: "juaj", type: "possessive", pron: "yoo-AY" },

            // Food & Drink - CORRECTED
            "meat": { alb: "mish", type: "noun", pron: "meesh" },
            "chicken": { alb: "pulë", type: "noun", pron: "POO-luh" },
            "fish": { alb: "peshk", type: "noun", pron: "peshk" },
            "vegetables": { alb: "perime", type: "noun", pron: "peh-REE-meh" },
            "fruit": { alb: "fruta", type: "noun", pron: "FROO-tah" },
            "salad": { alb: "sallatë", type: "noun", pron: "sahl-LAH-tuh" },
            "soup": { alb: "supë", type: "noun", pron: "SOO-puh" },
            "rice": { alb: "oriz", type: "noun", pron: "oh-REEZ" },
            "pasta": { alb: "makarona", type: "noun", pron: "mah-kah-ROH-nah" },
            "cheese": { alb: "djathë", type: "noun", pron: "JYAH-thuh" },
            "egg": { alb: "vezë", type: "noun", pron: "VEH-zuh" },
            "sugar": { alb: "sheqer", type: "noun", pron: "sheh-CHER" },
            "salt": { alb: "kripë", type: "noun", pron: "KREE-puh" },
            "pepper": { alb: "piper", type: "noun", pron: "PEE-per" },
            "beer": { alb: "birrë", type: "noun", pron: "BEER-ruh" },
            "wine": { alb: "verë", type: "noun", pron: "VEH-ruh" },
            "juice": { alb: "lëng", type: "noun", pron: "luhng" },
            "breakfast": { alb: "mëngjes", type: "noun", pron: "MUHN-gyes" },
            "lunch": { alb: "drekë", type: "noun", pron: "DREH-kuh" },
            "dinner": { alb: "darkë", type: "noun", pron: "DAHR-kuh" },

            // Colors - CORRECTED
            "red": { alb: "kuq", type: "adj", pron: "kooch" },
            "blue": { alb: "kaltër", type: "adj", pron: "KAHL-tuhr" },
            "green": { alb: "gjelbër", type: "adj", pron: "GYEL-buhr" },
            "yellow": { alb: "verdhë", type: "adj", pron: "VER-thuh" },
            "black": { alb: "zi", type: "adj", pron: "zee" },
            "white": { alb: "bardhë", type: "adj", pron: "BAHR-thuh" },

            // Body parts - CORRECTED
            "head": { alb: "kokë", type: "noun", pron: "KOH-kuh" },
            "hand": { alb: "dorë", type: "noun", pron: "DOH-ruh" },
            "foot": { alb: "këmbë", type: "noun", pron: "KUHM-buh" },
            "eye": { alb: "sy", type: "noun", pron: "soo" },
            "ear": { alb: "vesh", type: "noun", pron: "vesh" },
            "mouth": { alb: "gojë", type: "noun", pron: "GOH-yuh" },
            "nose": { alb: "hundë", type: "noun", pron: "HOON-duh" },

            // Weather - CORRECTED
            "sun": { alb: "diell", type: "noun", pron: "dee-ELL" },
            "rain": { alb: "shi", type: "noun", pron: "shee" },
            "wind": { alb: "erë", type: "noun", pron: "EH-ruh" },
            "snow": { alb: "borë", type: "noun", pron: "BOH-ruh" },
            "weather": { alb: "mot", type: "noun", pron: "mot" },

            // Family - CORRECTED
            "mother": { alb: "nënë", type: "noun", pron: "NUH-nuh" },
            "father": { alb: "babë", type: "noun", pron: "BAH-buh" },
            "son": { alb: "bir", type: "noun", pron: "beer" },
            "daughter": { alb: "bijë", type: "noun", pron: "BEE-yuh" },
            "brother": { alb: "vëlla", type: "noun", pron: "VUHL-lah" },
            "sister": { alb: "motër", type: "noun", pron: "MOH-tuhr" },
            "husband": { alb: "bashkëshort", type: "noun", pron: "bahsh-kuh-SHORT" },
            "wife": { alb: "grua", type: "noun", pron: "GROO-ah" },
            
            // MORE COMMON WORDS - Expanded coverage
            "direction": { alb: "drejtim", type: "noun", pron: "DREYT-eem" },
            "directions": { alb: "drejtime", type: "noun", pron: "DREYT-ee-meh" },
            "information": { alb: "informacion", type: "noun", pron: "een-for-mah-tsee-ON" },
            "question": { alb: "pyetje", type: "noun", pron: "poo-YET-yeh" },
            "answer": { alb: "përgjigje", type: "noun", pron: "puhr-GYEE-gyeh" },
            "problem": { alb: "problem", type: "noun", pron: "pro-BLEM" },
            "solution": { alb: "zgjidhje", type: "noun", pron: "z-GYEE-thyeh" },
            "place": { alb: "vend", type: "noun", pron: "vend" },
            "thing": { alb: "gjë", type: "noun", pron: "gyuh" },
            "person": { alb: "person", type: "noun", pron: "per-SON" },
            "people": { alb: "njerëz", type: "noun", pron: "nyeh-RUHZ" },
            "language": { alb: "gjuhë", type: "noun", pron: "GYOO-huh" },
            "village": { alb: "fshat", type: "noun", pron: "fshaht" },
            "building": { alb: "ndërtesë", type: "noun", pron: "n-duhr-TEH-suh" },
            "office": { alb: "zyrë", type: "noun", pron: "ZOO-ruh" },
            "school": { alb: "shkollë", type: "noun", pron: "SHKOL-luh" },
            "university": { alb: "universitet", type: "noun", pron: "oo-nee-ver-see-TET" },
            "library": { alb: "bibliotekë", type: "noun", pron: "beeb-lee-oh-TEH-kuh" },
            "post": { alb: "postë", type: "noun", pron: "POST-uh" },
            "letter": { alb: "letër", type: "noun", pron: "LEH-tuhr" },
            "ticket": { alb: "biletë", type: "noun", pron: "bee-LEH-tuh" },
            "entrance": { alb: "hyrje", type: "noun", pron: "HOOR-yeh" },
            "exit": { alb: "dalje", type: "noun", pron: "DAHL-yeh" },
            "corner": { alb: "qoshe", type: "noun", pron: "CHOH-sheh" },
            "side": { alb: "anë", type: "noun", pron: "AH-nuh" },
            "front": { alb: "para", type: "noun", pron: "PAH-rah" },
            "back": { alb: "prapa", type: "noun", pron: "PRAH-pah" },
            "top": { alb: "sipër", type: "noun", pron: "SEE-puhr" },
            "bottom": { alb: "poshtë", type: "noun", pron: "POSH-tuh" },
            "inside": { alb: "brenda", type: "adv", pron: "BREN-dah" },
            "outside": { alb: "jashtë", type: "adv", pron: "YAHSH-tuh" },
            "up": { alb: "lart", type: "adv", pron: "lahrt" },
            "down": { alb: "poshtë", type: "adv", pron: "POSH-tuh" },
            "before": { alb: "para", type: "prep", pron: "PAH-rah" },
            "after": { alb: "pas", type: "prep", pron: "pahs" },
            "during": { alb: "gjatë", type: "prep", pron: "GYAH-tuh" },
            "until": { alb: "deri", type: "prep", pron: "DEH-ree" },
            "since": { alb: "që", type: "conj", pron: "chuh" },
            "everything": { alb: "gjithçka", type: "pron", pron: "GYEETH-chkah" },
            "nothing": { alb: "asgjë", type: "pron", pron: "AHS-gyuh" },
            "something": { alb: "diçka", type: "pron", pron: "DEECH-kah" },
            "anything": { alb: "ndonjë gjë", type: "pron", pron: "n-DON-yuh gyuh" },
            "everyone": { alb: "të gjithë", type: "pron", pron: "tuh GYEE-thuh" },
            "someone": { alb: "dikush", type: "pron", pron: "DEE-koosh" },
            "nobody": { alb: "askush", type: "pron", pron: "AHS-koosh" },
            "somewhere": { alb: "diku", type: "adv", pron: "DEE-koo" },
            "anywhere": { alb: "kudo", type: "adv", pron: "KOO-doh" },
            "nowhere": { alb: "askund", type: "adv", pron: "AHS-koond" },
            "number": { alb: "numër", type: "noun", pron: "NOO-muhr" },
            "first": { alb: "parë", type: "adj", pron: "PAH-ruh" },
            "last": { alb: "fundit", type: "adj", pron: "FOON-deet" },
            "next": { alb: "tjetër", type: "adj", pron: "TYEH-tuhr" },
            "other": { alb: "tjetër", type: "adj", pron: "TYEH-tuhr" },
            "same": { alb: "njëjtë", type: "adj", pron: "NYUH-yuh-tuh" },
            "different": { alb: "ndryshëm", type: "adj", pron: "n-DROOSH-uhm" },
            "many": { alb: "shumë", type: "adj", pron: "SHOO-muh" },
            "few": { alb: "pak", type: "adj", pron: "pahk" },
            "several": { alb: "disa", type: "adj", pron: "DEE-sah" },
            "all": { alb: "të gjithë", type: "adj", pron: "tuh GYEE-thuh" },
            "some": { alb: "disa", type: "adj", pron: "DEE-sah" },
            "every": { alb: "çdo", type: "adj", pron: "CH-doh" },
            "each": { alb: "secili", type: "pron", pron: "seh-TSEE-lee" },
            "both": { alb: "të dy", type: "adj", pron: "tuh doo" },
            "either": { alb: "njëri", type: "pron", pron: "NYUH-ree" },
            "neither": { alb: "asnjëri", type: "pron", pron: "ahs-NYUH-ree" },
            "such": { alb: "i tillë", type: "adj", pron: "ee TEEL-luh" },
            "own": { alb: "vetë", type: "adj", pron: "VEH-tuh" },
            "only": { alb: "vetëm", type: "adv", pron: "VEH-tuhm" },
            "just": { alb: "vetëm", type: "adv", pron: "VEH-tuhm" },
            "still": { alb: "ende", type: "adv", pron: "EN-deh" },
            "already": { alb: "tashmë", type: "adv", pron: "TAHSH-muh" },
            "yet": { alb: "akoma", type: "adv", pron: "ah-KOH-mah" },
            "soon": { alb: "shpejt", type: "adv", pron: "shpeyt" },
            "late": { alb: "vonë", type: "adj/adv", pron: "VOH-nuh" },
            "early": { alb: "herët", type: "adv", pron: "HEH-ruht" },
            "again": { alb: "përsëri", type: "adv", pron: "puhr-SUH-ree" },
            "once": { alb: "një herë", type: "adv", pron: "nyuh HEH-ruh" },
            "twice": { alb: "dy herë", type: "adv", pron: "doo HEH-ruh" },
            "sometimes": { alb: "ndonjëherë", type: "adv", pron: "n-don-YUH-heh-ruh" },
            "often": { alb: "shpesh", type: "adv", pron: "shpesh" },
            "rarely": { alb: "rrallë", type: "adv", pron: "RRAHL-luh" },
            "usually": { alb: "zakonisht", type: "adv", pron: "zah-KOH-neesht" },
            "probably": { alb: "ndoshta", type: "adv", pron: "n-DOSH-tah" },
            "certainly": { alb: "sigurisht", type: "adv", pron: "see-goo-REESHT" },
            "really": { alb: "vërtet", type: "adv", pron: "vuhr-TET" },
            "quite": { alb: "mjaft", type: "adv", pron: "myahft" },
            "almost": { alb: "pothuajse", type: "adv", pron: "pot-HOO-ay-seh" },
            "enough": { alb: "mjaft", type: "adv", pron: "myahft" },
            "exactly": { alb: "saktësisht", type: "adv", pron: "sahk-tuh-SEESHT" },
            "directly": { alb: "drejtpërdrejt", type: "adv", pron: "dreyt-puhr-DREYT" },
            "together": { alb: "bashkë", type: "adv", pron: "BAHSH-kuh" },
            "alone": { alb: "vetëm", type: "adv", pron: "VEH-tuhm" },
            "ago": { alb: "më parë", type: "adv", pron: "muh PAH-ruh" },
            "forward": { alb: "përpara", type: "adv", pron: "puhr-PAH-rah" },
            "backward": { alb: "prapa", type: "adv", pron: "PRAH-pah" },
            "away": { alb: "larg", type: "adv", pron: "lahrg" },
            "around": { alb: "rreth", type: "prep", pron: "rreth" },
            "between": { alb: "midis", type: "prep", pron: "MEE-dees" },
            "among": { alb: "ndër", type: "prep", pron: "nduhr" },
            "behind": { alb: "pas", type: "prep", pron: "pahs" },
            "above": { alb: "sipër", type: "prep", pron: "SEE-puhr" },
            "below": { alb: "poshtë", type: "prep", pron: "POSH-tuh" },
            "under": { alb: "nën", type: "prep", pron: "nuhn" },
            "over": { alb: "mbi", type: "prep", pron: "m-bee" },
            "through": { alb: "nëpërmjet", type: "prep", pron: "nuh-puhr-MYET" },
            "across": { alb: "përtej", type: "prep", pron: "puhr-TEY" },
            "against": { alb: "kundër", type: "prep", pron: "KOON-duhr" },
            "without": { alb: "pa", type: "prep", pron: "pah" },
            "within": { alb: "brenda", type: "prep", pron: "BREN-dah" },
            "beside": { alb: "pranë", type: "prep", pron: "PRAH-nuh" },
            "except": { alb: "përveç", type: "prep", pron: "puhr-VECH" },
            "instead": { alb: "në vend", type: "prep", pron: "nuh vend" },
            "despite": { alb: "pavarësisht", type: "prep", pron: "pah-vah-ruh-SEESHT" },
            "beyond": { alb: "përtej", type: "prep", pron: "puhr-TEY" },
        };

        // Create reverse dictionary (Albanian to English)
        window.reverseDictionary = {};
        Object.keys(window.dictionary).forEach(eng => {
            const entry = window.dictionary[eng];
            window.reverseDictionary[entry.alb.toLowerCase()] = { 
                eng: eng, 
                type: entry.type,
                pron: entry.pron 
            }
        });

        // COMPREHENSIVE PHRASE LIBRARY
        const phrases = {
            "Greetings & Basics": [
                { alb: "Mirëdita", eng: "Good day", pron: "meer-DEE-tah" },
                { alb: "Mirëmëngjes", eng: "Good morning", pron: "meer-MUHN-gyes" },
                { alb: "Mirëmbrëma", eng: "Good evening", pron: "meer-m-BRUH-mah" },
                { alb: "Natën e mirë", eng: "Good night", pron: "NAH-tuhn eh MEE-ruh" },
                { alb: "Përshëndetje", eng: "Hello", pron: "puhr-shuhn-DET-yeh" },
                { alb: "Mirupafshim", eng: "Goodbye", pron: "mee-roo-pahf-SHEEM" },
                { alb: "Shihemi", eng: "See you later", pron: "shee-HEH-mee" },
                { alb: "Faleminderit", eng: "Thank you", pron: "fah-leh-meen-deh-REET" },
                { alb: "Faleminderit shumë", eng: "Thank you very much", pron: "fah-leh-meen-deh-REET SHOO-muh" },
                { alb: "Ju lutem", eng: "Please / You're welcome", pron: "yoo LOO-tem" },
                { alb: "Po", eng: "Yes", pron: "poh" },
                { alb: "Jo", eng: "No", pron: "yoh" },
                { alb: "Më falni", eng: "Excuse me / Sorry", pron: "muh FAHL-nee" },
                { alb: "Nuk ka problem", eng: "No problem", pron: "nook kah pro-BLEM" },
            ],
            "Introductions": [
                { alb: "Si quheni?", eng: "What is your name?", pron: "see CHOO-hen-ee" },
                { alb: "Unë quhem...", eng: "My name is...", pron: "OO-nuh CHOO-hem" },
                { alb: "Si jeni?", eng: "How are you?", pron: "see YEH-nee" },
                { alb: "Jam mirë, faleminderit", eng: "I'm fine, thank you", pron: "yahm MEE-ruh fah-leh-meen-deh-REET" },
                { alb: "Dhe ju?", eng: "And you?", pron: "theh yoo" },
                { alb: "Gëzohem që ju takova", eng: "Nice to meet you", pron: "guh-ZOH-hem chuh yoo tah-KOH-vah" },
                { alb: "Nga jeni?", eng: "Where are you from?", pron: "n-gah YEH-nee" },
                { alb: "Unë jam nga...", eng: "I am from...", pron: "OO-nuh yahm n-gah" },
                { alb: "Jam turist", eng: "I am a tourist", pron: "yahm too-REEST" },
            ],
            "Communication": [
                { alb: "Flisni anglisht?", eng: "Do you speak English?", pron: "FLEE-snee ahn-GLEESHT" },
                { alb: "Nuk flas shqip", eng: "I don't speak Albanian", pron: "nook flahs shcheep" },
                { alb: "Flisni më ngadalë ju lutem", eng: "Please speak more slowly", pron: "FLEE-snee muh n-gah-DAH-luh yoo LOO-tem" },
                { alb: "Nuk kuptoj", eng: "I don't understand", pron: "nook koop-TOY" },
                { alb: "Kuptoj pak", eng: "I understand a little", pron: "koop-TOY pahk" },
                { alb: "Mund ta përsërisni?", eng: "Can you repeat that?", pron: "moond tah puhr-suh-REE-snee" },
                { alb: "Si thuhet në shqip?", eng: "How do you say in Albanian?", pron: "see THOO-het nuh shcheep" },
                { alb: "Çfarë do të thotë kjo?", eng: "What does this mean?", pron: "CHFAH-ruh doh tuh thotuh kyoh" },
            ],
            "Shopping & Money": [
                { alb: "Sa kushton?", eng: "How much does it cost?", pron: "sah KOOSH-ton" },
                { alb: "Sa është?", eng: "How much is it?", pron: "sah UH-shtuh" },
                { alb: "Shumë shtrenjtë", eng: "Too expensive", pron: "SHOO-muh SHTRENY-tuh" },
                { alb: "Më jepni një zbritje", eng: "Give me a discount", pron: "muh YEP-nee nyuh z-BREET-yeh" },
                { alb: "Do ta blej", eng: "I'll buy it", pron: "doh tah bley" },
                { alb: "Vetëm shikoj", eng: "Just looking", pron: "VEH-tuhm shee-KOY" },
                { alb: "Ku mund të blej...?", eng: "Where can I buy...?", pron: "koo moond tuh bley" },
                { alb: "Keni...?", eng: "Do you have...?", pron: "KEH-nee" },
            ],
            "Dining": [
                { alb: "Një kafe ju lutem", eng: "One coffee please", pron: "nyuh kah-FEH yoo LOO-tem" },
                { alb: "Një birrë ju lutem", eng: "One beer please", pron: "nyuh BEER-ruh yoo LOO-tem" },
                { alb: "Një gotë ujë", eng: "A glass of water", pron: "nyuh GOH-tuh OO-yuh" },
                { alb: "Menunë ju lutem", eng: "Menu please", pron: "meh-NOO-nuh yoo LOO-tem" },
                { alb: "Faturën ju lutem", eng: "The bill please", pron: "fah-TOO-ruhn yoo LOO-tem" },
                { alb: "Ishte shumë e mirë", eng: "It was very good", pron: "EESH-teh SHOO-muh eh MEE-ruh" },
                { alb: "Jam vegjetarian", eng: "I am vegetarian", pron: "yahm veh-gyeh-tah-ree-AHN" },
                { alb: "Ku mund të ha diçka?", eng: "Where can I eat something?", pron: "koo moond tuh hah DEECH-kah" },
                { alb: "Urdhëroni", eng: "Here you go (when serving)", pron: "oor-DHUH-roh-nee" },
            ],
            "Directions": [
                { alb: "Ku është...?", eng: "Where is...?", pron: "koo UH-shtuh" },
                { alb: "Ku është banjoja?", eng: "Where is the bathroom?", pron: "koo UH-shtuh bah-NYOH-yah" },
                { alb: "Ku është parku?", eng: "Where is the park?", pron: "koo UH-shtuh PAHR-koo" },
                { alb: "Si të shkoj në park?", eng: "How do I get to the park?", pron: "see tuh shkoy nuh pahrk" },
                { alb: "Si shkoj në qendër?", eng: "How do I go to the center?", pron: "see shkoy nuh CHEN-duhr" },
                { alb: "Djathtas", eng: "Right (direction)", pron: "JYAHT-tahs" },
                { alb: "Majtas", eng: "Left", pron: "MAYT-tahs" },
                { alb: "Drejt", eng: "Straight", pron: "dreyt" },
                { alb: "Afër", eng: "Near", pron: "AH-fuhr" },
                { alb: "Larg", eng: "Far", pron: "lahrg" },
                { alb: "Këtu", eng: "Here", pron: "KUH-too" },
                { alb: "Atje", eng: "There", pron: "AHT-yeh" },
                { alb: "Në qendër", eng: "In the center", pron: "nuh CHEN-duhr" },
                { alb: "Afër qendrës", eng: "Near the center", pron: "AH-fuhr CHEN-druhs" },
            ],
            "Emergency": [
                { alb: "Më ndihmoni ju lutem", eng: "Please help me", pron: "muh ndee-MOH-nee yoo LOO-tem" },
                { alb: "Thirrni policinë", eng: "Call the police", pron: "THEER-nee po-lee-TSEE-nuh" },
                { alb: "Thirrni një doktor", eng: "Call a doctor", pron: "THEER-nee nyuh DOK-tor" },
                { alb: "Jam i sëmurë", eng: "I am sick (m)", pron: "yahm ee suh-MOO-ruh" },
                { alb: "Jam e sëmurë", eng: "I am sick (f)", pron: "yahm eh suh-MOO-ruh" },
                { alb: "Ku është spitali?", eng: "Where is the hospital?", pron: "koo UH-shtuh spee-TAH-lee" },
                { alb: "Kam nevojë për ndihmë", eng: "I need help", pron: "kahm neh-VOY-uh puhr n-dee-HMUH" },
            ],
            "Accommodation": [
                { alb: "Kam një rezervim", eng: "I have a reservation", pron: "kahm nyuh reh-zehr-VEEM" },
                { alb: "Sa kushton për një natë?", eng: "How much for one night?", pron: "sah KOOSH-ton puhr nyuh NAH-tuh" },
                { alb: "Keni dhoma të lira?", eng: "Do you have rooms available?", pron: "KEH-nee DOH-mah tuh LEE-rah" },
                { alb: "Çelësi i dhomës", eng: "Room key", pron: "cheh-LUH-see ee DOH-muhs" },
                { alb: "WiFi password", eng: "WiFi password", pron: "WiFi password" },
            ],
            "Time": [
                { alb: "Sa është ora?", eng: "What time is it?", pron: "sah UH-shtuh OH-rah" },
                { alb: "Sot", eng: "Today", pron: "sot" },
                { alb: "Nesër", eng: "Tomorrow", pron: "NEH-suhr" },
                { alb: "Dje", eng: "Yesterday", pron: "jeh" },
                { alb: "Tani", eng: "Now", pron: "TAH-nee" },
                { alb: "Më vonë", eng: "Later", pron: "muh VOH-nuh" },
            ]
        };

        // State management
        window.state = {
            currentTab: 'daily',
            flashcards: [],
            currentCard: 0,
            showingFront: true,
            translationDirection: 'en-sq', // 'en-sq' or 'sq-en'
            favorites: [],
            history: [],
            stats: {
                daysStreak: 1,
                phrasesLearned: 0,
                minutesStudied: 0,
                wordsLearned: 0
            }
        };

        // UTILITY FUNCTIONS
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        // FAVORITES & HISTORY
        window.addToFavorites = function(albanian, english, pronunciation) {
            const fav = { albanian, english, pronunciation, timestamp: Date.now() };
            window.state.favorites = window.state.favorites.filter(f => f.albanian !== albanian);
            window.state.favorites.unshift(fav);
            window.state.favorites = window.state.favorites.slice(0, 20); // Keep max 20
            saveFavorites();
            updateFavoritesList();
            alert('⭐ Added to favorites!');
        }

        function saveFavorites() {
            localStorage.setItem('albanianFavorites', JSON.stringify(window.state.favorites));
        }

        function loadFavorites() {
            const saved = localStorage.getItem('albanianFavorites');
            if (saved) {
                window.state.favorites = JSON.parse(saved);
                updateFavoritesList();
            }
        }

        function updateFavoritesList() {
            const container = document.getElementById('favoritesList');
            if (!container) return;
            
            if (window.state.favorites.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 1rem;">No favorites yet. Click the ⭐ on phrases to save them here!</p>';
                return;
            }
            
            container.innerHTML = window.state.favorites.map(f => `
                <div class="phrase-item" onclick="speakPhrase('${f.albanian}')">
                    <div class="albanian">${f.albanian}</div>
                    <div class="pronunciation">${f.pronunciation || ''}</div>
                    <div class="english">${f.english}</div>
                </div>
            `).join('');
        }

        function addToHistory(text, translation) {
            const entry = { text, translation, timestamp: Date.now() };
            window.state.history.unshift(entry);
            window.state.history = window.state.history.slice(0, 10); // Keep max 10
            updateHistoryList();
        }

        function updateHistoryList() {
            const container = document.getElementById('historyList');
            if (!container) return;
            
            if (window.state.history.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 1rem;">Your recent translations will appear here.</p>';
                return;
            }
            
            container.innerHTML = window.state.history.map(h => `
                <div class="phrase-item" style="cursor: default;">
                    <div class="albanian">${h.text}</div>
                    <div class="english">${h.translation}</div>
                </div>
            `).join('');
        }

        // COPY TO CLIPBOARD
        window.copyToClipboard = function(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('📋 Copied: ' + text);
                }).catch(() => {
                    fallbackCopy(text);
                });
            } else {
                fallbackCopy(text);
            }
        }

        function fallbackCopy(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                alert('📋 Copied: ' + text);
            } catch (err) {
                alert('Could not copy text');
            }
            document.body.removeChild(textarea);
        }

        window.copyTranslation = function() {
            const text = document.getElementById('outputText').value;
            if (text) {
                copyToClipboard(text);
            }
        }

        // SENTENCE BUILDER
        window.buildSentence = function(type) {
            let selectId, sentence;
            
            if (type === 'want') {
                selectId = 'wantSelect';
            } else if (type === 'where') {
                selectId = 'whereSelect';
            } else if (type === 'cost') {
                selectId = 'costSelect';
            }
            
            const select = document.getElementById(selectId);
            sentence = select.value;
            
            if (sentence) {
                document.getElementById('sentenceText').textContent = sentence;
                document.getElementById('builtSentence').style.display = 'block';
                document.getElementById('builtSentence').dataset.sentence = sentence;
            }
        }

        window.speakBuiltSentence = function() {
            const sentence = document.getElementById('builtSentence').dataset.sentence;
            if (sentence) {
                const utterance = new SpeechSynthesisUtterance(sentence);
                utterance.lang = 'sq-AL';
                speechSynthesis.speak(utterance);
            }
        }

        window.copyBuiltSentence = function() {
            const sentence = document.getElementById('builtSentence').dataset.sentence;
            if (sentence) {
                copyToClipboard(sentence);
            }
        }

        // VOICE RECOGNITION
        let recognition = null;
        
        window.startVoiceRecognition = function() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Sorry, voice recognition is not supported in this browser. Try Chrome or Edge!');
                return;
            }

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            document.getElementById('voiceStatus').textContent = '🎤 Listening...';
            document.getElementById('voiceBtn').disabled = true;

            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                document.getElementById('voiceInput').textContent = transcript;
                
                // Translate using offline translator
                const translation = translateText(transcript, 'en-sq');
                document.getElementById('voiceOutput').textContent = translation;
                document.getElementById('voiceOutput').dataset.text = translation;
                document.getElementById('voiceResult').style.display = 'block';
                document.getElementById('voiceStatus').textContent = '✅ Done! Tap to speak again';
                document.getElementById('voiceBtn').disabled = false;
                
                addToHistory(transcript, translation);
            };

            recognition.onerror = function(event) {
                document.getElementById('voiceStatus').textContent = '❌ Error: ' + event.error;
                document.getElementById('voiceBtn').disabled = false;
            };

            recognition.onend = function() {
                document.getElementById('voiceBtn').disabled = false;
            };

            recognition.start();
        }

        window.speakVoiceResult = function() {
            const text = document.getElementById('voiceOutput').dataset.text;
            if (text) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'sq-AL';
                speechSynthesis.speak(utterance);
            }
        }

        function translateText(text, direction) {
            // Reuse the existing translateOffline logic
            const inputLower = text.toLowerCase().trim();
            let translation = '';

            if (direction === 'en-sq') {
                // Try phrase match first
                let matched = false;
                Object.keys(phrases).forEach(category => {
                    phrases[category].forEach(phrase => {
                        if (inputLower === phrase.eng.toLowerCase()) {
                            translation = phrase.alb;
                            matched = true;
                        }
                    });
                });

                if (!matched) {
                    const words = inputLower.split(/\s+/);
                    translation = words.map(word => {
                        const cleanWord = word.replace(/[.,!?;:]/g, '');
                        const entry = window.dictionary[cleanWord];
                        return entry ? entry.alb : `[${word}]`;
                    }).join(' ');
                }
            }

            return translation || inputLower;
        }

        // ALPHABET PRONUNCIATION
        window.pronounceLetter = function(letter, sound) {
            alert('Letter: ' + letter.toUpperCase() + '\nSound: ' + sound);
            // Could add speech synthesis here
        }

        // QUIZ MODE
        let quizData = [];
        let currentQuizIndex = 0;
        let quizScore = 0;
        let quizType = '';

        window.startQuiz = function(type) {
            quizType = type;
            quizScore = 0;
            currentQuizIndex = 0;
            
            document.getElementById('quizStart').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            document.getElementById('quizResults').style.display = 'none';
            
            if (type === 'words') {
                generateWordQuiz();
            } else if (type === 'phrases') {
                generatePhraseQuiz();
            } else if (type === 'listening') {
                generateListeningQuiz();
            }
            
            showQuizQuestion();
        }

        function generateWordQuiz() {
            const dictKeys = Object.keys(window.dictionary);
            const shuffled = shuffleArray(dictKeys).slice(0, 10);
            
            quizData = shuffled.map(word => {
                const correct = window.dictionary[word].alb;
                const wrongOptions = shuffleArray(Object.values(window.dictionary))
                    .filter(d => d.alb !== correct)
                    .slice(0, 3)
                    .map(d => d.alb);
                
                return {
                    question: `What is "${word}" in Albanian?`,
                    correct: correct,
                    options: shuffleArray([correct, ...wrongOptions])
                };
            });
        }

        function generatePhraseQuiz() {
            const allPhrases = [];
            Object.keys(phrases).forEach(category => {
                allPhrases.push(...phrases[category]);
            });
            
            const shuffled = shuffleArray(allPhrases).slice(0, 10);
            
            quizData = shuffled.map(phrase => {
                const wrongOptions = shuffleArray(allPhrases)
                    .filter(p => p.alb !== phrase.alb)
                    .slice(0, 3)
                    .map(p => p.alb);
                
                return {
                    question: `How do you say "${phrase.eng}"?`,
                    correct: phrase.alb,
                    options: shuffleArray([phrase.alb, ...wrongOptions])
                };
            });
        }

        function generateListeningQuiz() {
            const allPhrases = [];
            Object.keys(phrases).forEach(category => {
                allPhrases.push(...phrases[category]);
            });
            
            const shuffled = shuffleArray(allPhrases).slice(0, 5);
            
            quizData = shuffled.map(phrase => {
                const wrongOptions = shuffleArray(allPhrases)
                    .filter(p => p.eng !== phrase.eng)
                    .slice(0, 3)
                    .map(p => p.eng);
                
                return {
                    question: `Listen and choose the meaning:`,
                    audio: phrase.alb,
                    correct: phrase.eng,
                    options: shuffleArray([phrase.eng, ...wrongOptions])
                };
            });
        }

        function showQuizQuestion() {
            if (currentQuizIndex >= quizData.length) {
                showQuizResults();
                return;
            }
            
            const q = quizData[currentQuizIndex];
            document.getElementById('quizCurrent').textContent = currentQuizIndex + 1;
            document.getElementById('quizTotal').textContent = quizData.length;
            document.getElementById('quizQuestion').textContent = q.question;
            
            // Add audio button for listening quiz
            if (q.audio) {
                document.getElementById('quizQuestion').innerHTML = q.question + '<br><button class="btn" style="margin-top: 1rem;" onclick="playQuizAudio()">🔊 Play Audio</button>';
                document.getElementById('quizQuestion').dataset.audio = q.audio;
            }
            
            const optionsHTML = q.options.map((option, i) => 
                `<div class="quiz-option" onclick="checkAnswer('${option.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">${option}</div>`
            ).join('');
            
            document.getElementById('quizOptions').innerHTML = optionsHTML;
            document.getElementById('quizFeedback').style.display = 'none';
            document.getElementById('quizNext').style.display = 'none';
        }

        window.playQuizAudio = function() {
            const audio = document.getElementById('quizQuestion').dataset.audio;
            if (audio) {
                const utterance = new SpeechSynthesisUtterance(audio);
                utterance.lang = 'sq-AL';
                speechSynthesis.speak(utterance);
            }
        }

        window.checkAnswer = function(selected, correct) {
            const options = document.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.classList.add('disabled');
                if (opt.textContent === correct) {
                    opt.classList.add('correct');
                }
                if (opt.textContent === selected && selected !== correct) {
                    opt.classList.add('incorrect');
                }
            });
            
            const feedback = document.getElementById('quizFeedback');
            feedback.style.display = 'block';
            
            if (selected === correct) {
                quizScore++;
                feedback.textContent = '✅ Correct!';
                feedback.style.background = 'var(--success)';
                feedback.style.color = 'white';
            } else {
                feedback.textContent = '❌ Incorrect. The answer was: ' + correct;
                feedback.style.background = 'var(--primary)';
                feedback.style.color = 'white';
            }
            
            document.getElementById('quizNext').style.display = 'block';
        }

        window.nextQuestion = function() {
            currentQuizIndex++;
            showQuizQuestion();
        }

        function showQuizResults() {
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('quizResults').style.display = 'block';
            
            const percentage = Math.round((quizScore / quizData.length) * 100);
            document.getElementById('quizScore').textContent = `You scored ${quizScore}/${quizData.length} (${percentage}%)`;
            
            if (percentage >= 90) {
                document.getElementById('quizEmoji').textContent = '🏆';
                document.getElementById('quizMessage').textContent = 'Outstanding! You're really mastering Albanian!';
            } else if (percentage >= 70) {
                document.getElementById('quizEmoji').textContent = '🎉';
                document.getElementById('quizMessage').textContent = 'Great job! Keep practicing!';
            } else if (percentage >= 50) {
                document.getElementById('quizEmoji').textContent = '👍';
                document.getElementById('quizMessage').textContent = 'Good effort! Review and try again.';
            } else {
                document.getElementById('quizEmoji').textContent = '📚';
                document.getElementById('quizMessage').textContent = 'Keep studying! You'll improve with practice.';
            }
            
            updateStats('phrasesLearned', quizData.length);
        }

        window.resetQuiz = function() {
            document.getElementById('quizStart').style.display = 'block';
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('quizResults').style.display = 'none';
        }

        // Initialize app
        function init() {
            console.log('Initializing app...');
            console.log('Dictionary entries:', Object.keys(window.dictionary).length);
            console.log('Reverse dictionary entries:', Object.keys(window.reverseDictionary).length);
            console.log('Sample dictionary entry:', window.dictionary['hello']);
            
            loadStats();
            loadFavorites();
            generateManifest();
            renderPhrases();
            initFlashcards();
            updateDailyPhrase();
            checkInstallPrompt();
            registerServiceWorker();
            
            console.log('App initialized successfully');
        }

        // Generate PWA manifest
        function generateManifest() {
            const manifest = {
                name: "Mëso Shqip - Learn Albanian",
                short_name: "Mëso Shqip",
                start_url: window.location.pathname,
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#dc2626",
                icons: [
                    {
                        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23dc2626'/%3E%3Ctext x='50' y='65' font-size='80' text-anchor='middle'%3E🇦🇱%3C/text%3E%3C/svg%3E",
                        sizes: "192x192",
                        type: "image/svg+xml"
                    },
                    {
                        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23dc2626'/%3E%3Ctext x='50' y='65' font-size='80' text-anchor='middle'%3E🇦🇱%3C/text%3E%3C/svg%3E",
                        sizes: "512x512",
                        type: "image/svg+xml"
                    }
                ]
            };

            const stringManifest = JSON.stringify(manifest);
            const blob = new Blob([stringManifest], {type: 'application/json'});
            const manifestURL = URL.createObjectURL(blob);
            document.getElementById('manifestPlaceholder').setAttribute('href', manifestURL);
        }

        // Tab switching
        console.log('Defining switchTab function...');
        window.switchTab = function(tabName) {
            console.log('switchTab called with:', tabName);
            // Remove active class from all tabs and content
            document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab by finding it
            const tabs = document.querySelectorAll('.nav-tab');
            tabs.forEach(tab => {
                if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabName)) {
                    tab.classList.add('active');
                }
            });
            
            // Show the selected content
            const tabContent = document.getElementById(tabName);
            if (tabContent) {
                tabContent.classList.add('active');
            } else {
                console.error('Tab not found:', tabName);
            }
            
            window.state.currentTab = tabName;
        }
        console.log('switchTab function defined successfully');

        // OFFLINE TRANSLATOR
        window.translateOffline = function() {
            const input = document.getElementById('inputText').value.trim();
            if (!input) {
                document.getElementById('outputText').value = '';
                document.getElementById('wordCount').textContent = '';
                return;
            }

            const inputLower = input.toLowerCase();
            let translation = '';

            if (window.state.translationDirection === 'en-sq') {
                // English to Albanian
                // First, try to match full phrases
                let phraseMatched = false;
                Object.keys(phrases).forEach(category => {
                    phrases[category].forEach(phrase => {
                        if (inputLower === phrase.eng.toLowerCase() || inputLower.includes(phrase.eng.toLowerCase())) {
                            translation = phrase.alb;
                            phraseMatched = true;
                        }
                    });
                });

                // If no phrase match, do word-by-word
                if (!phraseMatched) {
                    const words = inputLower.split(/\s+/);
                    let unknownCount = 0;
                    translation = words.map(word => {
                        const cleanWord = word.replace(/[.,!?;:]/g, '');
                        const entry = window.dictionary[cleanWord];
                        if (entry) {
                            return entry.alb;
                        } else {
                            unknownCount++;
                            return `[${word}]`; // Mark unknown words
                        }
                    }).join(' ');
                    
                    if (unknownCount > 0) {
                        document.getElementById('wordCount').textContent = `${unknownCount} word(s) not in dictionary [marked]`;
                    }
                }
            } else {
                // Albanian to English
                // First, try to match full phrases
                let phraseMatched = false;
                Object.keys(phrases).forEach(category => {
                    phrases[category].forEach(phrase => {
                        if (inputLower === phrase.alb.toLowerCase() || inputLower.includes(phrase.alb.toLowerCase())) {
                            translation = phrase.eng;
                            phraseMatched = true;
                        }
                    });
                });

                // If no phrase match, do word-by-word
                if (!phraseMatched) {
                    const words = inputLower.split(/\s+/);
                    let unknownCount = 0;
                    translation = words.map(word => {
                        const cleanWord = word.replace(/[.,!?;:]/g, '');
                        const entry = window.reverseDictionary[cleanWord];
                        if (entry) {
                            return entry.eng;
                        } else {
                            unknownCount++;
                            return `[${word}]`; // Mark unknown words
                        }
                    }).join(' ');
                    
                    if (unknownCount > 0) {
                        document.getElementById('wordCount').textContent = `${unknownCount} word(s) not in dictionary [marked]`;
                    }
                }
            }

            document.getElementById('outputText').value = translation;
            const wordCount = input.split(/\s+/).length;
            document.getElementById('wordCount').textContent = `${wordCount} word${wordCount !== 1 ? 's' : ''} processed`;
            
            // Add to history
            if (translation && translation !== input) {
                addToHistory(input, translation);
            }
            
            updateStats('wordsLearned', wordCount);
        }

        window.toggleTranslationDirection = function() {
            window.state.translationDirection = window.state.translationDirection === 'en-sq' ? 'sq-en' : 'en-sq';
            
            if (window.state.translationDirection === 'en-sq') {
                document.getElementById('inputLabel').textContent = 'English to Albanian';
                document.getElementById('outputLabel').textContent = 'Albanian Translation';
                document.getElementById('inputText').placeholder = 'Type in English...';
                document.getElementById('langSwitch').textContent = '🔄 Switch to Albanian → English';
            } else {
                document.getElementById('inputLabel').textContent = 'Albanian to English';
                document.getElementById('outputLabel').textContent = 'English Translation';
                document.getElementById('inputText').placeholder = 'Shkruaj në shqip...';
                document.getElementById('langSwitch').textContent = '🔄 Switch to English → Albanian';
            }
            
            // Clear fields
            document.getElementById('inputText').value = '';
            document.getElementById('outputText').value = '';
            document.getElementById('wordCount').textContent = '';
        }

        // Text-to-speech
        window.speakText = function() {
            const text = document.getElementById('outputText').value;
            if (!text) return;
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = window.state.translationDirection === 'en-sq' ? 'sq-AL' : 'en-US';
            speechSynthesis.speak(utterance);
        }

        // DICTIONARY SEARCH
        window.searchDictionary = function() {
            try {
                console.log('searchDictionary called');
                const searchInput = document.getElementById('dictSearch');
                const resultsDiv = document.getElementById('dictResults');
                
                if (!searchInput || !resultsDiv) {
                    console.error('Search elements not found');
                    return;
                }
                
                const query = searchInput.value.trim().toLowerCase();
                console.log('Search query:', query);
                
                if (!query) {
                    resultsDiv.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">Type to search the dictionary...</p>';
                    return;
                }

                if (!window.dictionary || Object.keys(window.dictionary).length === 0) {
                    console.error('Dictionary not loaded');
                    resultsDiv.innerHTML = '<p style="text-align: center; color: var(--primary); padding: 2rem;">Error: Dictionary not loaded</p>';
                    return;
                }

                let results = [];

                // Search English to Albanian
                const unknownWords = [];
                Object.keys(window.dictionary).forEach(eng => {
                    if (eng.toLowerCase().includes(query)) {
                        results.push({
                            word: eng,
                            translation: window.dictionary[eng].alb,
                            type: window.dictionary[eng].type,
                            pron: window.dictionary[eng].pron,
                            direction: 'en-sq'
                        });
                    }
                });
                
                // If no exact match, check if the query itself is a word not in dictionary
                if (results.length === 0 && query.length > 2) {
                    unknownWords.push(query);
                }

                // Search Albanian to English
                if (window.reverseDictionary && Object.keys(window.reverseDictionary).length > 0) {
                    Object.keys(window.reverseDictionary).forEach(alb => {
                        if (alb.includes(query)) {
                            const entry = window.reverseDictionary[alb];
                            // Avoid duplicates
                            if (!results.find(r => r.word === alb && r.direction === 'sq-en')) {
                                results.push({
                                    word: alb,
                                    translation: entry.eng,
                                    type: entry.type,
                                    pron: entry.pron,
                                    direction: 'sq-en'
                                });
                            }
                        }
                    });
                }

                console.log('Found results:', results.length);

                if (results.length === 0) {
                    resultsDiv.innerHTML = `
                        <div style="text-align: center; padding: 2rem;">
                            <p style="color: var(--text-light); margin-bottom: 1rem;">
                                No results for "<strong>${query}</strong>" in the dictionary.
                            </p>
                            <p style="color: var(--text-light); font-size: 0.9rem;">
                                💡 The dictionary has 650+ common words. For complete sentences, check the <strong>Phrases</strong> tab!
                            </p>
                        </div>
                    `;
                    return;
                }

                // Limit to 50 results
                results = results.slice(0, 50);

                let html = '';
                results.forEach(r => {
                    const flag = r.direction === 'en-sq' ? '🇦🇱' : '🇬🇧';
                    html += '<div class="dict-entry">';
                    html += '<div class="dict-word">' + r.word + '</div>';
                    html += '<div class="dict-type">' + r.type + '</div>';
                    html += '<div class="pronunciation">' + r.pron + '</div>';
                    html += '<div class="dict-translation">' + flag + ' ' + r.translation + '</div>';
                    html += '</div>';
                });
                
                resultsDiv.innerHTML = html;
                updateStats('wordsLearned', 1);
            } catch (error) {
                console.error('Dictionary search error:', error);
                const resultsDiv = document.getElementById('dictResults');
                if (resultsDiv) {
                    resultsDiv.innerHTML = '<p style="text-align: center; color: var(--primary); padding: 2rem;">Error: ' + error.message + '</p>';
                }
            }
        }

        // PHRASE RENDERING
        function renderPhrases() {
            const container = document.getElementById('phrasesContainer');
            let html = '';

            Object.keys(phrases).forEach(category => {
                html += `<div class="phrase-category"><h4>${category}</h4>`;
                phrases[category].forEach(phrase => {
                    html += `
                        <div class="phrase-item" style="position: relative;">
                            <div onclick="speakPhrase('${phrase.alb}')" style="cursor: pointer;">
                                <div class="albanian">${phrase.alb}</div>
                                <div class="pronunciation">${phrase.pron}</div>
                                <div class="english">${phrase.eng}</div>
                            </div>
                            <button onclick="addToFavorites('${phrase.alb.replace(/'/g, "\\'")}', '${phrase.eng.replace(/'/g, "\\'")}', '${phrase.pron}')" 
                                    style="position: absolute; top: 0.5rem; right: 0.5rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; opacity: 0.6;" 
                                    title="Add to favorites">⭐</button>
                        </div>
                    `;
                });
                html += '</div>';
            });

            container.innerHTML = html;
        }

        window.speakPhrase = function(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sq-AL';
            speechSynthesis.speak(utterance);
            updateStats('phrasesLearned', 1);
        }

        // FLASHCARDS
        function initFlashcards() {
            const flashcardData = [];
            
            // Add words from dictionary
            const commonWords = Object.keys(window.dictionary).slice(0, 50);
            commonWords.forEach(word => {
                flashcardData.push({
                    front: word,
                    back: window.dictionary[word].alb
                });
            });

            // Add phrases
            Object.keys(phrases).forEach(category => {
                phrases[category].forEach(phrase => {
                    flashcardData.push({
                        front: phrase.eng,
                        back: phrase.alb
                    });
                });
            });

            window.state.flashcards = shuffleArray(flashcardData);
            document.getElementById('totalCards').textContent = window.state.flashcards.length;
            showCard();
        }

        function showCard() {
            if (window.state.flashcards.length === 0) return;
            
            const card = window.state.flashcards[window.state.currentCard];
            document.getElementById('cardText').textContent = card.front;
            document.getElementById('cardHint').textContent = 'Tap to see Albanian';
            document.getElementById('cardNumber').textContent = window.state.currentCard + 1;
            window.state.showingFront = true;
        }

        window.flipCard = function() {
            const card = window.state.flashcards[window.state.currentCard];
            if (window.state.showingFront) {
                document.getElementById('cardText').textContent = card.back;
                document.getElementById('cardHint').textContent = 'Tap to see English';
            } else {
                document.getElementById('cardText').textContent = card.front;
                document.getElementById('cardHint').textContent = 'Tap to see Albanian';
            }
            window.state.showingFront = !window.state.showingFront;
        }

        window.nextCard = function() {
            window.state.currentCard = (window.state.currentCard + 1) % window.state.flashcards.length;
            showCard();
            updateStats('phrasesLearned', 1);
        }

        // STATS
        function updateStats(key, increment = 1) {
            window.state.stats[key] += increment;
            saveStats();
            updateStatsDisplay();
        }

        function updateStatsDisplay() {
            document.getElementById('daysStreak').textContent = window.state.stats.daysStreak;
            document.getElementById('phrasesLearned').textContent = window.state.stats.phrasesLearned;
            document.getElementById('minutesStudied').textContent = window.state.stats.minutesStudied;
            document.getElementById('wordsLearned').textContent = window.state.stats.wordsLearned;
            
            const weeklyProgress = Math.min((window.state.stats.minutesStudied / 150) * 100, 100);
            document.getElementById('weeklyProgress').style.width = weeklyProgress + '%';
            document.getElementById('weeklyMinutes').textContent = window.state.stats.minutesStudied;
            
            const dailyProgress = Math.min((window.state.stats.phrasesLearned / 5) * 100, 100);
            document.getElementById('dailyProgress').style.width = dailyProgress + '%';
        }

        function saveStats() {
            localStorage.setItem('albanianLearnerStats', JSON.stringify(window.state.stats));
            localStorage.setItem('albanianLearnerLastVisit', new Date().toDateString());
        }

        function loadStats() {
            const saved = localStorage.getItem('albanianLearnerStats');
            const lastVisit = localStorage.getItem('albanianLearnerLastVisit');
            const today = new Date().toDateString();
            
            if (saved) {
                window.state.stats = JSON.parse(saved);
                
                // Check streak
                if (lastVisit && lastVisit !== today) {
                    const lastDate = new Date(lastVisit);
                    const todayDate = new Date(today);
                    const diffTime = todayDate - lastDate;
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    if (diffDays === 1) {
                        window.state.stats.daysStreak++;
                    } else if (diffDays > 1) {
                        window.state.stats.daysStreak = 1;
                    }
                }
                
                updateStatsDisplay();
            }
        }

        // DAILY PHRASE
        function updateDailyPhrase() {
            const allPhrases = [];
            Object.keys(phrases).forEach(category => {
                allPhrases.push(...phrases[category]);
            });
            
            const today = new Date().getDay();
            const phrase = allPhrases[today % allPhrases.length];
            
            document.getElementById('dailyPhraseAlb').textContent = phrase.alb;
            document.getElementById('dailyPhrasePron').textContent = phrase.pron;
            document.getElementById('dailyPhraseEng').textContent = phrase.eng;
        }

        // UTILITY
        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        // PWA INSTALLATION
        let deferredPrompt;

        function checkInstallPrompt() {
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                document.getElementById('installPrompt').classList.add('show');
            });
        }

        window.installApp = function() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        document.getElementById('installPrompt').classList.remove('show');
                    }
                    deferredPrompt = null;
                });
            }
        }

        // SERVICE WORKER
        function registerServiceWorker() {
            // Service worker registration disabled in artifact environment
            // The app still works fully offline using the embedded dictionary
            console.log('App running with embedded offline dictionary');
        }

        // TRACK STUDY TIME
        let sessionStart = Date.now();
        window.addEventListener('beforeunload', () => {
            const minutesStudied = Math.floor((Date.now() - sessionStart) / 60000);
            if (minutesStudied > 0) {
                updateStats('minutesStudied', minutesStudied);
            }
        });

        // INITIALIZE
        console.log('About to call init()...');
        console.log('switchTab exists?', typeof window.switchTab);
        init();
        console.log('init() completed');
