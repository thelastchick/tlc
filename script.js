```javascript
const CONTRACT_ADDRESS = "0x04B757D7Cb621BFb846d47B161857D5E59F5D40C";

// ============================================================
// WALLETCONNECT / REOWN
// ============================================================
const WALLETCONNECT_PROJECT_ID = "b6b2c09a5c8ac5cb254ac684d7766a15";

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    nav_about: "About", nav_story: "Story", nav_token: "Token", nav_roadmap: "Roadmap",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "The last survivor.<br>The first legend.",
    hero_desc: "More than a meme coin — a community-driven Web3 movement built on hope, resilience and purpose.",
    btn_buy: "BUY TLC",
    about_title: "About The Last Chick",
    about_p1: "The Last Chick (TLC) is more than a meme coin — it is the beginning of a community-driven movement built on hope, resilience, and purpose.",
    about_p2: "Built on the Base network, TLC combines meme culture, NFTs and Web3 experiences into one growing ecosystem.",
    story_title: "The Story",
    story_p1: "The Last Chick represents the smallest light that refuses to disappear.",
    story_p2: "A symbol of hope, courage, resilience and new beginnings.",
    story_p3: "Sometimes the smallest light is the one that survives the darkness.",
    values_title: "Our Core Values",
    value1_title: "✨ Creativity", value1_desc: "Creating unique experiences and ideas beyond ordinary projects.",
    value2_title: "🤝 Community", value2_desc: "Growing together with supporters and believers.",
    value3_title: "❤️ Compassion", value3_desc: "Building something positive with real impact.",
    value4_title: "🚀 Development", value4_desc: "Creating a long-term ecosystem beyond hype.",
    gallery_title: "TLC Universe",
    token_title: "TLC Token", token_name: "Name:", token_symbol: "Symbol:", token_network: "Network:", token_contract: "Contract:",
    btn_copy: "COPY ADDRESS",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Network", tok2_desc: "Base Chain",
    tok3_title: "💎 Utility", tok3_desc: "Web3 Ecosystem + NFT + Games",
    tok4_title: "🤝 Community", tok4_desc: "Community Driven Growth",
    nft_title: "TLC Genesis NFT", nft_desc: "A digital collection inspired by the final light of hope in a dark world.",
    buy_title: "Buy The Last Chick (TLC)", buy_contract: "Contract Address:",
    roadmap_title: "Roadmap",
    phase1_title: "Phase 1", phase1_desc: "Birth of TLC",
    phase2_title: "Phase 2", phase2_desc: "Community Growth",
    phase3_title: "Phase 3", phase3_desc: "NFT & Web3 Expansion",
    phase4_title: "Phase 4", phase4_desc: "The Last Chick Ecosystem",
    community_title: "Join The Community",
    footer: "© The Last Chick (TLC)",
    copy_success: "Contract address copied!"
  },

  fa: {
    nav_about: "درباره ما", nav_story: "داستان", nav_token: "توکن", nav_roadmap: "نقشه راه",
    hero_title: "آخرین جوجه <span>(TLC)</span>",
    hero_subtitle: "آخرین بازمانده.<br>اولین افسانه.",
    hero_desc: "بیش از یک میم‌کوین — یک حرکت وب۳ جامعه‌محور که بر پایه امید، مقاومت و هدف ساخته شده است.",
    btn_buy: "خرید TLC",
    about_title: "درباره آخرین جوجه",
    about_p1: "آخرین جوجه (TLC) فقط یک میم‌کوین نیست — آغاز یک حرکت جامعه‌محور است که بر پایه امید، مقاومت و هدف ساخته شده.",
    about_p2: "ساخته‌شده روی شبکه Base، TLC فرهنگ میم، NFT و تجربیات وب۳ را در یک اکوسیستم در حال رشد ترکیب می‌کند.",
    story_title: "داستان",
    story_p1: "آخرین جوجه نماد کوچک‌ترین نوری است که حاضر نیست خاموش شود.",
    story_p2: "نمادی از امید، شجاعت، مقاومت و آغازهای تازه.",
    story_p3: "گاهی کوچک‌ترین نور، همان نوری است که تاریکی را شکست می‌دهد.",
    values_title: "ارزش‌های اصلی ما",
    value1_title: "✨ خلاقیت", value1_desc: "خلق تجربیات و ایده‌های منحصربه‌فرد فراتر از پروژه‌های معمولی.",
    value2_title: "🤝 جامعه", value2_desc: "رشد با هم و در کنار حامیان و باورمندان.",
    value3_title: "❤️ همدلی", value3_desc: "ساختن چیزی مثبت با تأثیر واقعی.",
    value4_title: "🚀 توسعه", value4_desc: "ایجاد یک اکوسیستم بلندمدت فراتر از هیجان موقت.",
    gallery_title: "جهان TLC",
    token_title: "توکن TLC", token_name: "نام:", token_symbol: "نماد:", token_network: "شبکه:", token_contract: "قرارداد:",
    btn_copy: "کپی آدرس",
    tokenomics_title: "توکنومیکس",
    tok1_title: "🐥 توکن", tok1_desc: "آخرین جوجه (TLC)",
    tok2_title: "🌐 شبکه", tok2_desc: "شبکه Base",
    tok3_title: "💎 کاربرد", tok3_desc: "اکوسیستم وب۳ + NFT + بازی",
    tok4_title: "🤝 جامعه", tok4_desc: "رشد مبتنی بر جامعه",
    nft_title: "NFT پیدایش TLC", nft_desc: "مجموعه‌ای دیجیتال الهام‌گرفته از آخرین نور امید در دنیای تاریک.",
    buy_title: "خرید آخرین جوجه (TLC)", buy_contract: "آدرس قرارداد:",
    roadmap_title: "نقشه راه",
    phase1_title: "فاز ۱", phase1_desc: "تولد TLC",
    phase2_title: "فاز ۲", phase2_desc: "رشد جامعه",
    phase3_title: "فاز ۳", phase3_desc: "گسترش NFT و وب۳",
    phase4_title: "فاز ۴", phase4_desc: "اکوسیستم آخرین جوجه",
    community_title: "به جامعه بپیوندید",
    footer: "© آخرین جوجه (TLC)",
    copy_success: "آدرس قرارداد کپی شد!"
  },

  ar: {
    nav_about: "من نحن", nav_story: "القصة", nav_token: "التوكن", nav_roadmap: "خارطة الطريق",
    hero_title: "آخر دجاجة <span>(TLC)</span>",
    hero_subtitle: "آخر الناجين.<br>أول أسطورة.",
    hero_desc: "أكثر من مجرد عملة ميم — حركة ويب3 يقودها المجتمع مبنية على الأمل والصمود والهدف.",
    btn_buy: "اشترِ TLC",
    about_title: "عن آخر دجاجة",
    about_p1: "آخر دجاجة (TLC) ليست مجرد عملة ميم — إنها بداية حركة يقودها المجتمع مبنية على الأمل والصمود والهدف.",
    about_p2: "مبنية على شبكة Base، تجمع TLC بين ثقافة الميم وNFTs وتجارب الويب3 في نظام بيئي متنامٍ.",
    story_title: "القصة",
    story_p1: "تمثل آخر دجاجة أصغر ضوء يرفض أن يختفي.",
    story_p2: "رمز للأمل والشجاعة والصمود والبدايات الجديدة.",
    story_p3: "أحيانًا يكون أصغر ضوء هو الذي ينجو من الظلام.",
    values_title: "قيمنا الأساسية",
    value1_title: "✨ الإبداع", value1_desc: "خلق تجارب وأفكار فريدة تتجاوز المشاريع العادية.",
    value2_title: "🤝 المجتمع", value2_desc: "النمو معًا مع الداعمين والمؤمنين.",
    value3_title: "❤️ التعاطف", value3_desc: "بناء شيء إيجابي له تأثير حقيقي.",
    value4_title: "🚀 التطوير", value4_desc: "إنشاء نظام بيئي طويل الأمد يتجاوز الضجيج المؤقت.",
    gallery_title: "عالم TLC",
    token_title: "توكن TLC", token_name: "الاسم:", token_symbol: "الرمز:", token_network: "الشبكة:", token_contract: "العقد:",
    btn_copy: "نسخ العنوان",
    tokenomics_title: "التوكنوميكس",
    tok1_title: "🐥 التوكن", tok1_desc: "آخر دجاجة (TLC)",
    tok2_title: "🌐 الشبكة", tok2_desc: "شبكة Base",
    tok3_title: "💎 الفائدة", tok3_desc: "نظام ويب3 + NFT + ألعاب",
    tok4_title: "🤝 المجتمع", tok4_desc: "نمو يقوده المجتمع",
    nft_title: "NFT نشأة TLC", nft_desc: "مجموعة رقمية مستوحاة من آخر ضوء للأمل في عالم مظلم.",
    buy_title: "اشترِ آخر دجاجة (TLC)", buy_contract: "عنوان العقد:",
    roadmap_title: "خارطة الطريق",
    phase1_title: "المرحلة ١", phase1_desc: "ولادة TLC",
    phase2_title: "المرحلة ٢", phase2_desc: "نمو المجتمع",
    phase3_title: "المرحلة ٣", phase3_desc: "توسع NFT والويب3",
    phase4_title: "المرحلة ٤", phase4_desc: "نظام آخر دجاجة البيئي",
    community_title: "انضم إلى المجتمع",
    footer: "© آخر دجاجة (TLC)",
    copy_success: "تم نسخ عنوان العقد!"
  },

  es: {
    nav_about: "Acerca de", nav_story: "Historia", nav_token: "Token", nav_roadmap: "Hoja de ruta",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "El último superviviente.<br>La primera leyenda.",
    hero_desc: "Más que una meme coin — un movimiento Web3 impulsado por la comunidad basado en la esperanza, la resiliencia y el propósito.",
    btn_buy: "COMPRAR TLC",
    about_title: "Sobre The Last Chick",
    about_p1: "The Last Chick (TLC) es más que una meme coin — es el comienzo de un movimiento impulsado por la comunidad basado en la esperanza, la resiliencia y el propósito.",
    about_p2: "Construido en la red Base, TLC combina la cultura meme, NFTs y experiencias Web3 en un ecosistema en crecimiento.",
    story_title: "La Historia",
    story_p1: "The Last Chick representa la luz más pequeña que se niega a desaparecer.",
    story_p2: "Un símbolo de esperanza, coraje, resiliencia y nuevos comienzos.",
    story_p3: "A veces la luz más pequeña es la que sobrevive a la oscuridad.",
    values_title: "Nuestros Valores Principales",
    value1_title: "✨ Creatividad", value1_desc: "Crear experiencias e ideas únicas más allá de los proyectos ordinarios.",
    value2_title: "🤝 Comunidad", value2_desc: "Crecer juntos con partidarios y creyentes.",
    value3_title: "❤️ Compasión", value3_desc: "Construir algo positivo con impacto real.",
    value4_title: "🚀 Desarrollo", value4_desc: "Crear un ecosistema a largo plazo más allá del hype.",
    gallery_title: "Universo TLC",
    token_title: "Token TLC", token_name: "Nombre:", token_symbol: "Símbolo:", token_network: "Red:", token_contract: "Contrato:",
    btn_copy: "COPIAR DIRECCIÓN",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Red", tok2_desc: "Base Chain",
    tok3_title: "💎 Utilidad", tok3_desc: "Ecosistema Web3 + NFT + Juegos",
    tok4_title: "🤝 Comunidad", tok4_desc: "Crecimiento impulsado por la comunidad",
    nft_title: "NFT Génesis TLC", nft_desc: "Una colección digital inspirada en la última luz de esperanza en un mundo oscuro.",
    buy_title: "Comprar The Last Chick (TLC)", buy_contract: "Dirección del contrato:",
    roadmap_title: "Hoja de ruta",
    phase1_title: "Fase 1", phase1_desc: "Nacimiento de TLC",
    phase2_title: "Fase 2", phase2_desc: "Crecimiento de la comunidad",
    phase3_title: "Fase 3", phase3_desc: "Expansión NFT y Web3",
    phase4_title: "Fase 4", phase4_desc: "Ecosistema The Last Chick",
    community_title: "Únete a la Comunidad",
    footer: "© The Last Chick (TLC)",
    copy_success: "¡Dirección del contrato copiada!"
  },

  fr: {
    nav_about: "À propos", nav_story: "Histoire", nav_token: "Token", nav_roadmap: "Feuille de route",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "Le dernier survivant.<br>La première légende.",
    hero_desc: "Plus qu'une meme coin — un mouvement Web3 communautaire basé sur l'espoir, la résilience et le but.",
    btn_buy: "ACHETER TLC",
    about_title: "À propos de The Last Chick",
    about_p1: "The Last Chick (TLC) est plus qu'une meme coin — c'est le début d'un mouvement communautaire basé sur l'espoir, la résilience et le but.",
    about_p2: "Construit sur le réseau Base, TLC combine la culture meme, les NFTs et les expériences Web3 en un écosystème en croissance.",
    story_title: "L'Histoire",
    story_p1: "The Last Chick représente la plus petite lumière qui refuse de disparaître.",
    story_p2: "Un symbole d'espoir, de courage, de résilience et de nouveaux commencements.",
    story_p3: "Parfois la plus petite lumière est celle qui survit à l'obscurité.",
    values_title: "Nos Valeurs Fondamentales",
    value1_title: "✨ Créativité", value1_desc: "Créer des expériences et des idées uniques au-delà des projets ordinaires.",
    value2_title: "🤝 Communauté", value2_desc: "Grandir ensemble avec les supporters et les croyants.",
    value3_title: "❤️ Compassion", value3_desc: "Construire quelque chose de positif avec un impact réel.",
    value4_title: "🚀 Développement", value4_desc: "Créer un écosystème à long terme au-delà du hype.",
    gallery_title: "Univers TLC",
    token_title: "Token TLC", token_name: "Nom:", token_symbol: "Symbole:", token_network: "Réseau:", token_contract: "Contrat:",
    btn_copy: "COPIER L'ADRESSE",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Réseau", tok2_desc: "Base Chain",
    tok3_title: "💎 Utilité", tok3_desc: "Écosystème Web3 + NFT + Jeux",
    tok4_title: "🤝 Communauté", tok4_desc: "Croissance menée par la communauté",
    nft_title: "NFT Genesis TLC", nft_desc: "Une collection numérique inspirée de la dernière lumière d'espoir dans un monde sombre.",
    buy_title: "Acheter The Last Chick (TLC)", buy_contract: "Adresse du contrat:",
    roadmap_title: "Feuille de route",
    phase1_title: "Phase 1", phase1_desc: "Naissance de TLC",
    phase2_title: "Phase 2", phase2_desc: "Croissance de la communauté",
    phase3_title: "Phase 3", phase3_desc: "Expansion NFT & Web3",
    phase4_title: "Phase 4", phase4_desc: "Écosystème The Last Chick",
    community_title: "Rejoignez la Communauté",
    footer: "© The Last Chick (TLC)",
    copy_success: "Adresse du contrat copiée !"
  },

  de: {
    nav_about: "Über uns", nav_story: "Geschichte", nav_token: "Token", nav_roadmap: "Roadmap",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "Der letzte Überlebende.<br>Die erste Legende.",
    hero_desc: "Mehr als eine Meme-Coin — eine community-getriebene Web3-Bewegung basierend auf Hoffnung, Resilienz und Zweck.",
    btn_buy: "TLC KAUFEN",
    about_title: "Über The Last Chick",
    about_p1: "The Last Chick (TLC) ist mehr als eine Meme-Coin — es ist der Beginn einer community-getriebenen Bewegung basierend auf Hoffnung, Resilienz und Zweck.",
    about_p2: "Auf dem Base-Netzwerk aufgebaut, kombiniert TLC Meme-Kultur, NFTs und Web3-Erlebnisse zu einem wachsenden Ökosystem.",
    story_title: "Die Geschichte",
    story_p1: "The Last Chick repräsentiert das kleinste Licht, das sich weigert zu verschwinden.",
    story_p2: "Ein Symbol für Hoffnung, Mut, Resilienz und neue Anfänge.",
    story_p3: "Manchmal ist das kleinste Licht dasjenige, das die Dunkelheit überlebt.",
    values_title: "Unsere Kernwerte",
    value1_title: "✨ Kreativität", value1_desc: "Einzigartige Erfahrungen und Ideen schaffen, die über gewöhnliche Projekte hinausgehen.",
    value2_title: "🤝 Community", value2_desc: "Gemeinsam mit Unterstützern und Gläubigen wachsen.",
    value3_title: "❤️ Mitgefühl", value3_desc: "Etwas Positives mit realer Wirkung aufbauen.",
    value4_title: "🚀 Entwicklung", value4_desc: "Ein langfristiges Ökosystem jenseits des Hypes schaffen.",
    gallery_title: "TLC Universum",
    token_title: "TLC Token", token_name: "Name:", token_symbol: "Symbol:", token_network: "Netzwerk:", token_contract: "Vertrag:",
    btn_copy: "ADRESSE KOPIEREN",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Netzwerk", tok2_desc: "Base Chain",
    tok3_title: "💎 Nutzen", tok3_desc: "Web3-Ökosystem + NFT + Spiele",
    tok4_title: "🤝 Community", tok4_desc: "Community-getriebenes Wachstum",
    nft_title: "TLC Genesis NFT", nft_desc: "Eine digitale Sammlung inspiriert vom letzten Licht der Hoffnung in einer dunklen Welt.",
    buy_title: "The Last Chick (TLC) kaufen", buy_contract: "Vertragsadresse:",
    roadmap_title: "Roadmap",
    phase1_title: "Phase 1", phase1_desc: "Geburt von TLC",
    phase2_title: "Phase 2", phase2_desc: "Community-Wachstum",
    phase3_title: "Phase 3", phase3_desc: "NFT & Web3 Expansion",
    phase4_title: "Phase 4", phase4_desc: "The Last Chick Ökosystem",
    community_title: "Tritt der Community bei",
    footer: "© The Last Chick (TLC)",
    copy_success: "Vertragsadresse kopiert!"
  },

  tr: {
    nav_about: "Hakkında", nav_story: "Hikaye", nav_token: "Token", nav_roadmap: "Yol Haritası",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "Son hayatta kalan.<br>İlk efsane.",
    hero_desc: "Bir meme coin'den daha fazlası — umut, dayanıklılık ve amaç üzerine kurulu topluluk odaklı bir Web3 hareketi.",
    btn_buy: "TLC SATIN AL",
    about_title: "The Last Chick Hakkında",
    about_p1: "The Last Chick (TLC) bir meme coin'den daha fazlasıdır — umut, dayanıklılık ve amaç üzerine kurulu topluluk odaklı bir hareketin başlangıcıdır.",
    about_p2: "Base ağı üzerinde inşa edilen TLC, meme kültürünü, NFT'leri ve Web3 deneyimlerini büyüyen bir ekosistemde birleştirir.",
    story_title: "Hikaye",
    story_p1: "The Last Chick, kaybolmayı reddeden en küçük ışığı temsil eder.",
    story_p2: "Umut, cesaret, dayanıklılık ve yeni başlangıçların sembolü.",
    story_p3: "Bazen en küçük ışık, karanlıktan sağ çıkan ışıktır.",
    values_title: "Temel Değerlerimiz",
    value1_title: "✨ Yaratıcılık", value1_desc: "Sıradan projelerin ötesinde benzersiz deneyimler ve fikirler yaratmak.",
    value2_title: "🤝 Topluluk", value2_desc: "Destekçiler ve inananlarla birlikte büyümek.",
    value3_title: "❤️ Şefkat", value3_desc: "Gerçek etkisi olan olumlu bir şey inşa etmek.",
    value4_title: "🚀 Gelişim", value4_desc: "Heyecanın ötesinde uzun vadeli bir ekosistem yaratmak.",
    gallery_title: "TLC Evreni",
    token_title: "TLC Token", token_name: "İsim:", token_symbol: "Sembol:", token_network: "Ağ:", token_contract: "Kontrat:",
    btn_copy: "ADRESİ KOPYALA",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Ağ", tok2_desc: "Base Chain",
    tok3_title: "💎 Kullanım", tok3_desc: "Web3 Ekosistemi + NFT + Oyunlar",
    tok4_title: "🤝 Topluluk", tok4_desc: "Topluluk odaklı büyüme",
    nft_title: "TLC Genesis NFT", nft_desc: "Karanlık bir dünyada umudun son ışığından ilham alan dijital bir koleksiyon.",
    buy_title: "The Last Chick (TLC) Satın Al", buy_contract: "Kontrat Adresi:",
    roadmap_title: "Yol Haritası",
    phase1_title: "Faz 1", phase1_desc: "TLC'nin Doğuşu",
    phase2_title: "Faz 2", phase2_desc: "Topluluk Büyümesi",
    phase3_title: "Faz 3", phase3_desc: "NFT & Web3 Genişlemesi",
    phase4_title: "Faz 4", phase4_desc: "The Last Chick Ekosistemi",
    community_title: "Topluluğa Katıl",
    footer: "© The Last Chick (TLC)",
    copy_success: "Kontrat adresi kopyalandı!"
  },

  pt: {
    nav_about: "Sobre", nav_story: "História", nav_token: "Token", nav_roadmap: "Roteiro",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "O último sobrevivente.<br>A primeira lenda.",
    hero_desc: "Mais do que uma meme coin — um movimento Web3 impulsionado pela comunidade baseado em esperança, resiliência e propósito.",
    btn_buy: "COMPRAR TLC",
    about_title: "Sobre The Last Chick",
    about_p1: "The Last Chick (TLC) é mais do que uma meme coin — é o início de um movimento impulsionado pela comunidade baseado em esperança, resiliência e propósito.",
    about_p2: "Construído na rede Base, o TLC combina cultura meme, NFTs e experiências Web3 em um ecossistema em crescimento.",
    story_title: "A História",
    story_p1: "The Last Chick representa a menor luz que se recusa a desaparecer.",
    story_p2: "Um símbolo de esperança, coragem, resiliência e novos começos.",
    story_p3: "Às vezes a menor luz é a que sobrevive à escuridão.",
    values_title: "Nossos Valores Principais",
    value1_title: "✨ Criatividade", value1_desc: "Criar experiências e ideias únicas além de projetos ordinários.",
    value2_title: "🤝 Comunidade", value2_desc: "Crescer juntos com apoiadores e crentes.",
    value3_title: "❤️ Compaixão", value3_desc: "Construir algo positivo com impacto real.",
    value4_title: "🚀 Desenvolvimento", value4_desc: "Criar um ecossistema de longo prazo além do hype.",
    gallery_title: "Universo TLC",
    token_title: "Token TLC", token_name: "Nome:", token_symbol: "Símbolo:", token_network: "Rede:", token_contract: "Contrato:",
    btn_copy: "COPIAR ENDEREÇO",
    tokenomics_title: "Tokenomics",
    tok1_title: "🐥 Token", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Rede", tok2_desc: "Base Chain",
    tok3_title: "💎 Utilidade", tok3_desc: "Ecossistema Web3 + NFT + Jogos",
    tok4_title: "🤝 Comunidade", tok4_desc: "Crescimento impulsionado pela comunidade",
    nft_title: "NFT Genesis TLC", nft_desc: "Uma coleção digital inspirada na última luz de esperança em um mundo escuro.",
    buy_title: "Comprar The Last Chick (TLC)", buy_contract: "Endereço do contrato:",
    roadmap_title: "Roteiro",
    phase1_title: "Fase 1", phase1_desc: "Nascimento do TLC",
    phase2_title: "Fase 2", phase2_desc: "Crescimento da comunidade",
    phase3_title: "Fase 3", phase3_desc: "Expansão NFT e Web3",
    phase4_title: "Fase 4", phase4_desc: "Ecossistema The Last Chick",
    community_title: "Junte-se à Comunidade",
    footer: "© The Last Chick (TLC)",
    copy_success: "Endereço do contrato copiado!"
  },

  ru: {
    nav_about: "О нас", nav_story: "История", nav_token: "Токен", nav_roadmap: "Дорожная карта",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "Последний выживший.<br>Первая легенда.",
    hero_desc: "Больше, чем мем-коин — движение Web3, управляемое сообществом, основанное на надежде, стойкости и цели.",
    btn_buy: "КУПИТЬ TLC",
    about_title: "О The Last Chick",
    about_p1: "The Last Chick (TLC) — это больше, чем мем-коин — это начало движения, управляемого сообществом, основанного на надежде, стойкости и цели.",
    about_p2: "Построенный на сети Base, TLC объединяет мем-культуру, NFT и Web3-опыт в растущую экосистему.",
    story_title: "История",
    story_p1: "The Last Chick представляет собой самый маленький свет, который отказывается исчезать.",
    story_p2: "Символ надежды, мужества, стойкости и новых начинаний.",
    story_p3: "Иногда самый маленький свет — это тот, который выживает во тьме.",
    values_title: "Наши Основные Ценности",
    value1_title: "✨ Креативность", value1_desc: "Создание уникального опыта и идей за пределами обычных проектов.",
    value2_title: "🤝 Сообщество", value2_desc: "Расти вместе со сторонниками и верующими.",
    value3_title: "❤️ Сострадание", value3_desc: "Создавать что-то позитивное с реальным воздействием.",
    value4_title: "🚀 Развитие", value4_desc: "Создание долгосрочной экосистемы за пределами хайпа.",
    gallery_title: "Вселенная TLC",
    token_title: "Токен TLC", token_name: "Название:", token_symbol: "Символ:", token_network: "Сеть:", token_contract: "Контракт:",
    btn_copy: "СКОПИРОВАТЬ АДРЕС",
    tokenomics_title: "Токеномика",
    tok1_title: "🐥 Токен", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 Сеть", tok2_desc: "Base Chain",
    tok3_title: "💎 Полезность", tok3_desc: "Экосистема Web3 + NFT + Игры",
    tok4_title: "🤝 Сообщество", tok4_desc: "Рост, управляемый сообществом",
    nft_title: "Genesis NFT TLC", nft_desc: "Цифровая коллекция, вдохновлённая последним светом надежды в тёмном мире.",
    buy_title: "Купить The Last Chick (TLC)", buy_contract: "Адрес контракта:",
    roadmap_title: "Дорожная карта",
    phase1_title: "Фаза 1", phase1_desc: "Рождение TLC",
    phase2_title: "Фаза 2", phase2_desc: "Рост сообщества",
    phase3_title: "Фаза 3", phase3_desc: "Расширение NFT и Web3",
    phase4_title: "Фаза 4", phase4_desc: "Экосистема The Last Chick",
    community_title: "Присоединяйтесь к сообществу",
    footer: "© The Last Chick (TLC)",
    copy_success: "Адрес контракта скопирован!"
  },

  zh: {
    nav_about: "关于", nav_story: "故事", nav_token: "代币", nav_roadmap: "路线图",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "最后的幸存者。<br>第一位传奇。",
    hero_desc: "不仅仅是迷因币 — 一个基于希望、韧性和目标的社区驱动的Web3运动。",
    btn_buy: "购买 TLC",
    about_title: "关于 The Last Chick",
    about_p1: "The Last Chick (TLC) 不仅仅是迷因币 — 它是一个基于希望、韧性和目标的社区驱动运动的开始。",
    about_p2: "建立在Base网络上，TLC将迷因文化、NFT和Web3体验结合成一个不断成长的生态系统。",
    story_title: "故事",
    story_p1: "The Last Chick 代表着拒绝消失的最小光芒。",
    story_p2: "希望、勇气、韧性和新开始的象征。",
    story_p3: "有时最小的光是在黑暗中幸存的那道光。",
    values_title: "我们的核心价值",
    value1_title: "✨ 创造力", value1_desc: "创造超越普通项目的独特体验和想法。",
    value2_title: "🤝 社区", value2_desc: "与支持者和信徒一起成长。",
    value3_title: "❤️ 同情心", value3_desc: "建立有真正影响的积极事物。",
    value4_title: "🚀 发展", value4_desc: "创建超越炒作的长期生态系统。",
    gallery_title: "TLC 宇宙",
    token_title: "TLC 代币", token_name: "名称:", token_symbol: "符号:", token_network: "网络:", token_contract: "合约:",
    btn_copy: "复制地址",
    tokenomics_title: "代币经济学",
    tok1_title: "🐥 代币", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 网络", tok2_desc: "Base Chain",
    tok3_title: "💎 效用", tok3_desc: "Web3生态系统 + NFT + 游戏",
    tok4_title: "🤝 社区", tok4_desc: "社区驱动增长",
    nft_title: "TLC 创世 NFT", nft_desc: "受黑暗世界中最后希望之光启发的数字收藏品。",
    buy_title: "购买 The Last Chick (TLC)", buy_contract: "合约地址:",
    roadmap_title: "路线图",
    phase1_title: "阶段 1", phase1_desc: "TLC 的诞生",
    phase2_title: "阶段 2", phase2_desc: "社区成长",
    phase3_title: "阶段 3", phase3_desc: "NFT 和 Web3 扩展",
    phase4_title: "阶段 4", phase4_desc: "The Last Chick 生态系统",
    community_title: "加入社区",
    footer: "© The Last Chick (TLC)",
    copy_success: "合约地址已复制！"
  },

  ja: {
    nav_about: "概要", nav_story: "ストーリー", nav_token: "トークン", nav_roadmap: "ロードマップ",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "最後の生存者。<br>最初の伝説。",
    hero_desc: "単なるミームコイン以上 — 希望、回復力、目的に基づいたコミュニティ主導のWeb3ムーブメント。",
    btn_buy: "TLCを購入",
    about_title: "The Last Chickについて",
    about_p1: "The Last Chick (TLC) は単なるミームコインではありません — 希望、回復力、目的に基づいたコミュニティ主導のムーブメントの始まりです。",
    about_p2: "Baseネットワーク上に構築され、TLCはミーム文化、NFT、Web3体験を成長するエコシステムに組み合わせます。",
    story_title: "ストーリー",
    story_p1: "The Last Chickは、消えることを拒否する最小の光を表しています。",
    story_p2: "希望、勇気、回復力、新しい始まりの象徴。",
    story_p3: "時には最小の光が暗闇を生き残る光です。",
    values_title: "私たちのコアバリュー",
    value1_title: "✨ 創造性", value1_desc: "通常のプロジェクトを超えたユニークな体験とアイデアを生み出す。",
    value2_title: "🤝 コミュニティ", value2_desc: "サポーターや信者と一緒に成長する。",
    value3_title: "❤️ 思いやり", value3_desc: "本物の影響を持つポジティブなものを構築する。",
    value4_title: "🚀 開発", value4_desc: "ハイプを超えた長期的なエコシステムを創る。",
    gallery_title: "TLCユニバース",
    token_title: "TLCトークン", token_name: "名前:", token_symbol: "シンボル:", token_network: "ネットワーク:", token_contract: "コントラクト:",
    btn_copy: "アドレスをコピー",
    tokenomics_title: "トークノミクス",
    tok1_title: "🐥 トークン", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 ネットワーク", tok2_desc: "Base Chain",
    tok3_title: "💎 ユーティリティ", tok3_desc: "Web3エコシステム + NFT + ゲーム",
    tok4_title: "🤝 コミュニティ", tok4_desc: "コミュニティ主導の成長",
    nft_title: "TLC Genesis NFT", nft_desc: "暗い世界における最後の希望の光にインスパイアされたデジタルコレクション。",
    buy_title: "The Last Chick (TLC) を購入", buy_contract: "コントラクトアドレス:",
    roadmap_title: "ロードマップ",
    phase1_title: "フェーズ 1", phase1_desc: "TLCの誕生",
    phase2_title: "フェーズ 2", phase2_desc: "コミュニティ成長",
    phase3_title: "フェーズ 3", phase3_desc: "NFT & Web3拡大",
    phase4_title: "フェーズ 4", phase4_desc: "The Last Chickエコシステム",
    community_title: "コミュニティに参加",
    footer: "© The Last Chick (TLC)",
    copy_success: "コントラクトアドレスをコピーしました！"
  },

  hi: {
    nav_about: "हमारे बारे में", nav_story: "कहानी", nav_token: "टोकन", nav_roadmap: "रोडमैप",
    hero_title: "THE LAST CHICK <span>(TLC)</span>",
    hero_subtitle: "आखिरी जीवित बचा।<br>पहला किंवदंती।",
    hero_desc: "सिर्फ एक मीम कॉइन से ज्यादा — आशा, लचीलापन और उद्देश्य पर आधारित समुदाय-संचालित Web3 आंदोलन।",
    btn_buy: "TLC खरीदें",
    about_title: "The Last Chick के बारे में",
    about_p1: "The Last Chick (TLC) सिर्फ एक मीम कॉइन नहीं है — यह आशा, लचीलापन और उद्देश्य पर आधारित समुदाय-संचालित आंदोलन की शुरुआत है।",
    about_p2: "Base नेटवर्क पर निर्मित, TLC मीम संस्कृति, NFT और Web3 अनुभवों को एक बढ़ते इकोसिस्टम में जोड़ता है।",
    story_title: "कहानी",
    story_p1: "The Last Chick सबसे छोटी रोशनी का प्रतिनिधित्व करता है जो गायब होने से इनकार करती है।",
    story_p2: "आशा, साहस, लचीलापन और नई शुरुआत का प्रतीक।",
    story_p3: "कभी-कभी सबसे छोटी रोशनी ही अंधेरे से बचने वाली रोशनी होती है।",
    values_title: "हमारे मूल मूल्य",
    value1_title: "✨ रचनात्मकता", value1_desc: "साधारण परियोजनाओं से परे अनूठे अनुभव और विचार बनाना।",
    value2_title: "🤝 समुदाय", value2_desc: "समर्थकों और विश्वासियों के साथ मिलकर बढ़ना।",
    value3_title: "❤️ करुणा", value3_desc: "वास्तविक प्रभाव के साथ कुछ सकारात्मक बनाना।",
    value4_title: "🚀 विकास", value4_desc: "हाइप से परे दीर्घकालिक इकोसिस्टम बनाना।",
    gallery_title: "TLC ब्रह्मांड",
    token_title: "TLC टोकन", token_name: "नाम:", token_symbol: "प्रतीक:", token_network: "नेटवर्क:", token_contract: "कॉन्ट्रैक्ट:",
    btn_copy: "पता कॉपी करें",
    tokenomics_title: "टोकनॉमिक्स",
    tok1_title: "🐥 टोकन", tok1_desc: "The Last Chick (TLC)",
    tok2_title: "🌐 नेटवर्क", tok2_desc: "Base Chain",
    tok3_title: "💎 उपयोगिता", tok3_desc: "Web3 इकोसिस्टम + NFT + गेम्स",
    tok4_title: "🤝 समुदाय", tok4_desc: "समुदाय-संचालित विकास",
    nft_title: "TLC Genesis NFT", nft_desc: "अंधेरी दुनिया में आशा की अंतिम रोशनी से प्रेरित एक डिजिटल संग्रह।",
    buy_title: "The Last Chick (TLC) खरीदें", buy_contract: "कॉन्ट्रैक्ट पता:",
    roadmap_title: "रोडमैप",
    phase1_title: "चरण 1", phase1_desc: "TLC का जन्म",
    phase2_title: "चरण 2", phase2_desc: "समुदाय विकास",
    phase3_title: "चरण 3", phase3_desc: "NFT और Web3 विस्तार",
    phase4_title: "चरण 4", phase4_desc: "The Last Chick इकोसिस्टम",
    community_title: "समुदाय से जुड़ें",
    footer: "© The Last Chick (TLC)",
    copy_success: "कॉन्ट्रैक्ट पता कॉपी हो गया!"
  }
};

// ============================================================
// LANGUAGE
// ============================================================
function setLanguage(lang) {
  const t = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.documentElement.dir =
    (lang === "fa" || lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(t, key)) {
      el.innerHTML = t[key];
    }
  });

  localStorage.setItem("tlc_lang", lang);
}

function initLanguage() {
  const languageSelect = document.getElementById("languageSelect");
  if (!languageSelect) return;

  const saved =
    localStorage.getItem("tlc_lang") || languageSelect.value || "en";

  languageSelect.value = translations[saved] ? saved : "en";
  setLanguage(languageSelect.value);

  languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

// ============================================================
// COPY CONTRACT
// ============================================================
async function copyContract() {
  const lang = document.documentElement.lang || "en";
  const msg =
    translations[lang]?.copy_success ||
    "Contract address copied!";

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    } else {
      const input = document.getElementById("contractInput");

      if (!input) throw new Error("Clipboard unavailable");

      input.focus();
      input.select();
      input.setSelectionRange(0, input.value.length);

      const ok = document.execCommand("copy");
      if (!ok) throw new Error("Copy failed");
    }

    alert(msg);
  } catch (err) {
    console.error("Copy failed:", err);
    alert(CONTRACT_ADDRESS);
  }
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// ============================================================
// LOADER
// ============================================================
function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      if (loader) loader.classList.add("hidden");
    }, 1800);
  });
}

// ============================================================
// SPARKLES
// ============================================================
function createSparkle(x, y) {
  const s = document.createElement("span");

  s.className = "sparkle";
  s.style.left = `${x}px`;
  s.style.top = `${y}px`;

  s.style.setProperty(
    "--x",
    `${Math.random() * 120 - 60}px`
  );

  s.style.setProperty(
    "--y",
    `${Math.random() * 120 - 60}px`
  );

  document.body.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 1000);
}

function initSparkles() {
  document.addEventListener("mousemove", (e) => {
    createSparkle(e.clientX, e.clientY);
  });

  document.addEventListener("click", (e) => {
    for (let i = 0; i < 15; i++) {
      createSparkle(e.clientX, e.clientY);
    }
  });
}

// ============================================================
// PRESALE
// ============================================================
const SALE_CONTRACT =
  "0xb7fD96B6800dbEFD6Ba97A5a3c58e4209D7FA73A";

const USDC_ADDRESS =
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

const TLC_ADDRESS =
  "0x04B757D7Cb621BFb846d47B161857D5E59F5D40C";

const BASE_CHAIN_ID = "0x2105";
const BASE_CHAIN_DECIMAL = 8453;

const USDC_ABI = [
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

const SALE_ABI = [
  "function buy(uint256 usdcAmount) external"
];

// ============================================================
// WALLET STATE
// ============================================================
let provider = null;
let signer = null;
let userAddress = null;

let ethereumProvider = null;
let wcProvider = null;

let usingWalletConnect = false;
let walletConnecting = false;

let injectedListenerProvider = null;
let walletConnectListenersAttached = false;

// ============================================================
// DOM
// ============================================================
const connectBtn = document.getElementById("connectBtn");
const buyForm = document.getElementById("buyForm");
const usdcInput = document.getElementById("usdcAmount");
const tlcInput = document.getElementById("tlcAmount");
const approveBtn = document.getElementById("approveBtn");
const buyBtn = document.getElementById("buyBtn");
const txStatus = document.getElementById("txStatus");

// ============================================================
// STATUS
// ============================================================
function setStatus(message) {
  if (txStatus) {
    txStatus.textContent = message || "";
  }
}

function getErrorMessage(err, fallback = "Unknown wallet error") {
  if (!err) return fallback;

  return (
    err.shortMessage ||
    err.reason ||
    err.info?.error?.message ||
    err.data?.message ||
    err.message ||
    fallback
  );
}

// ============================================================
// MOBILE DETECTION
// ============================================================
function isMobileBrowser() {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(
    navigator.userAgent || ""
  );
}

// ============================================================
// EIP-6963 WALLET DISCOVERY
// ============================================================
window.tlcAnnouncedProviders =
  window.tlcAnnouncedProviders || [];

window.addEventListener(
  "eip6963:announceProvider",
  (event) => {
    const detail = event.detail;

    if (!detail?.provider) return;

    const exists =
      window.tlcAnnouncedProviders.some(
        (p) =>
          p.info?.uuid &&
          detail.info?.uuid &&
          p.info.uuid === detail.info.uuid
      );

    if (!exists) {
      window.tlcAnnouncedProviders.push(detail);
    }
  }
);

window.dispatchEvent(
  new Event("eip6963:requestProvider")
);

// ============================================================
// GET INJECTED WALLET
// ============================================================
function getEthereumProvider() {
  const announced =
    window.tlcAnnouncedProviders || [];

  if (announced.length) {
    const metamask = announced.find((p) => {
      const rdns = String(p.info?.rdns || "").toLowerCase();
      const name = String(p.info?.name || "").toLowerCase();

      return (
        rdns === "io.metamask" ||
        name.includes("metamask")
      );
    });

    return (metamask || announced[0]).provider;
  }

  const ethereum = window.ethereum;

  if (!ethereum) return null;

  if (
    Array.isArray(ethereum.providers) &&
    ethereum.providers.length
  ) {
    return (
      ethereum.providers.find(
        (p) =>
          p.isMetaMask &&
          !p.isBraveWallet
      ) ||
      ethereum.providers[0]
    );
  }

  return ethereum;
}

// ============================================================
// RESET WALLET UI
// ============================================================
function resetConnection() {
  provider = null;
  signer = null;
  userAddress = null;

  ethereumProvider = null;
  usingWalletConnect = false;

  setStatus("");

  if (connectBtn) {
    connectBtn.style.display = "block";
    connectBtn.disabled = false;
    connectBtn.textContent = "CONNECT WALLET";
  }

  if (buyForm) {
    buyForm.style.display = "none";
  }

  const walletStatus =
    document.getElementById("walletStatus");

  if (walletStatus) {
    walletStatus.innerHTML = "";

    if (connectBtn) {
      walletStatus.appendChild(connectBtn);
    }
  }
}

// ============================================================
// CONNECTED UI
// ============================================================
function showConnected(address) {
  if (!address) return;

  if (connectBtn) {
    connectBtn.style.display = "none";
  }

  if (buyForm) {
    buyForm.style.display = "block";
  }

  const walletStatus =
    document.getElementById("walletStatus");

  if (walletStatus) {
    walletStatus.innerHTML = `
      <p style="
        color:#ffd700;
        font-size:14px;
        margin:8px 0;
        word-break:break-all;
      ">
        Connected: ${address.slice(0, 6)}...${address.slice(-4)}
      </p>

      <button
        type="button"
        id="disconnectBtn"
        class="buy-btn"
        style="
          margin-top:10px;
          background:#222;
          color:#ffd700;
          border:1px solid #ffd700;
        "
      >
        Disconnect
      </button>
    `;

    const disconnectBtn =
      document.getElementById("disconnectBtn");

    if (disconnectBtn) {
      disconnectBtn.addEventListener(
        "click",
        disconnectWallet
      );
    }
  }
}

// ============================================================
// DISCONNECT
// ============================================================
async function disconnectWallet() {
  try {
    if (
      usingWalletConnect &&
      wcProvider?.disconnect
    ) {
      await wcProvider.disconnect();
    }
  } catch (err) {
    console.warn("Wallet disconnect:", err);
  }

  wcProvider = null;
  walletConnectListenersAttached = false;

  resetConnection();
}

// ============================================================
// BASE NETWORK
// ============================================================
async function ensureBaseNetwork(walletProvider) {
  if (!walletProvider?.request) {
    throw new Error(
      "Wallet provider is unavailable."
    );
  }

  let chainId;

  try {
    chainId = await walletProvider.request({
      method: "eth_chainId"
    });
  } catch (err) {
    console.warn(
      "Could not read chain ID:",
      err
    );
  }

  if (
    String(chainId).toLowerCase() ===
    BASE_CHAIN_ID.toLowerCase()
  ) {
    return;
  }

  try {
    await walletProvider.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: BASE_CHAIN_ID
        }
      ]
    });

    return;
  } catch (switchError) {
    const code =
      switchError?.code;

    if (
      code !== 4902 &&
      code !== -32603
    ) {
      if (code === 4001) {
        throw new Error(
          "Please approve switching to the Base network."
        );
      }

      throw switchError;
    }
  }

  try {
    await walletProvider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: BASE_CHAIN_ID,
          chainName: "Base",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
          },
          rpcUrls: [
            "https://mainnet.base.org"
          ],
          blockExplorerUrls: [
            "https://basescan.org"
          ]
        }
      ]
    });
  } catch (addError) {
    if (addError?.code === 4001) {
      throw new Error(
        "Please approve adding the Base network."
      );
    }

    throw addError;
  }
}

// ============================================================
// INJECTED WALLET LISTENERS
// ============================================================
function attachInjectedListeners(ethereum) {
  if (!ethereum?.on) return;

  if (
    injectedListenerProvider &&
    injectedListenerProvider !== ethereum
  ) {
    try {
      injectedListenerProvider.removeListener?.(
        "accountsChanged",
        handleInjectedAccountsChanged
      );

      injectedListenerProvider.removeListener?.(
        "chainChanged",
        handleInjectedChainChanged
      );

      injectedListenerProvider.removeListener?.(
        "disconnect",
        handleInjectedDisconnect
      );
    } catch (_) {}
  }

  injectedListenerProvider = ethereum;

  ethereum.removeListener?.(
    "accountsChanged",
    handleInjectedAccountsChanged
  );

  ethereum.removeListener?.(
    "chainChanged",
    handleInjectedChainChanged
  );

  ethereum.removeListener?.(
    "disconnect",
    handleInjectedDisconnect
  );

  ethereum.on(
    "accountsChanged",
    handleInjectedAccountsChanged
  );

  ethereum.on(
    "chainChanged",
    handleInjectedChainChanged
  );

  ethereum.on(
    "disconnect",
    handleInjectedDisconnect
}

async function handleInjectedAccountsChanged(accounts) {
  if (!accounts || accounts.length === 0) {
    resetConnection();
    return;
  }

  try {
    if (!ethereumProvider) return;

    await ensureBaseNetwork(
      ethereumProvider
    );

    provider =
      new ethers.BrowserProvider(
        ethereumProvider
      );

    signer =
      await provider.getSigner(
        accounts[0]
      );

    userAddress =
      await signer.getAddress();

    usingWalletConnect = false;

    showConnected(userAddress);
  } catch (err) {
    console.error(
      "Account change failed:",
      err
    );

    resetConnection();
  }
}

function handleInjectedChainChanged() {
  // Re-read the network without destroying
  // the wallet session.
  setTimeout(async () => {
    try {
      if (!ethereumProvider) return;

      const chainId =
        await ethereumProvider.request({
          method: "eth_chainId"
        });

      if (
        String(chainId).toLowerCase() !==
        BASE_CHAIN_ID.toLowerCase()
      ) {
        setStatus(
          "Please switch your wallet to Base."
        );
      } else {
        setStatus("");
      }
    } catch (err) {
      console.warn(
        "Chain change handling failed:",
        err
      );
    }
  }, 300);
}

function handleInjectedDisconnect() {
  resetConnection();
}

// ============================================================
// CONNECT INJECTED WALLET
// ============================================================
async function connectInjected(ethereum) {
  if (!ethereum?.request) {
    throw new Error(
      "No compatible browser wallet was found."
    );
  }

  ethereumProvider = ethereum;

  attachInjectedListeners(ethereum);

  let accounts = [];

  try {
    accounts =
      await ethereum.request({
        method: "eth_accounts"
      });
  } catch (_) {
    accounts = [];
  }

  if (!accounts?.length) {
    accounts =
      await ethereum.request({
        method: "eth_requestAccounts"
      });
  }

  if (!accounts?.length) {
    throw new Error(
      "No wallet account is available. Unlock your wallet and select an account."
    );
  }

  await ensureBaseNetwork(
    ethereum
  );

  provider =
    new ethers.BrowserProvider(
      ethereum
    );

  signer =
    await provider.getSigner(
      accounts[0]
    );

  userAddress =
    await signer.getAddress();

  usingWalletConnect = false;

  setStatus("");
  showConnected(userAddress);
}

// ============================================================
// LOAD WALLETCONNECT
// ============================================================
async function loadWalletConnectProvider() {
  const urls = [
    "https://esm.sh/@walletconnect/ethereum-provider@2.21.1?bundle",
    "https://cdn.jsdelivr.net/npm/@walletconnect/ethereum-provider@2.21.1/+esm"
  ];

  let lastError = null;

  for (const url of urls) {
    try {
      const mod =
        await import(url);

      return (
        mod.EthereumProvider ||
        mod.default?.EthereumProvider ||
        mod.default
      );
    } catch (err) {
      console.warn(
        "WalletConnect loader failed:",
        url,
        err
      );

      lastError = err;
    }
  }

  throw (
    lastError ||
    new Error(
      "Could not load WalletConnect."
    )
  );
}

// ============================================================
// WALLETCONNECT LISTENERS
// ============================================================
function attachWalletConnectListeners() {
  if (
    !wcProvider ||
    walletConnectListenersAttached
  ) {
    return;
  }

  walletConnectListenersAttached = true;

  wcProvider.on?.(
    "accountsChanged",
    async (accounts) => {
      if (!accounts?.length) {
        resetConnection();
        return;
      }

      try {
        provider =
          new ethers.BrowserProvider(
            wcProvider
          );

        signer =
          await provider.getSigner(
            accounts[0]
          );

        userAddress =
          await signer.getAddress();

        showConnected(userAddress);
      } catch (err) {
        console.error(
          "WalletConnect account change:",
          err
        );

        resetConnection();
      }
    }
  );

  wcProvider.on?.(
    "chainChanged",
    (chainId) => {
      const normalized =
        String(chainId).toLowerCase();

      if (
        normalized !==
        BASE_CHAIN_ID.toLowerCase() &&
        normalized !== "8453"
      ) {
        setStatus(
          "Please switch your wallet to Base."
        );
      } else {
        setStatus("");
      }
    }
  );

  wcProvider.on?.(
    "disconnect",
    () => {
      wcProvider = null;
      walletConnectListenersAttached = false;
      resetConnection();
    }
  );
}

// ============================================================
// CONNECT WALLETCONNECT
// ============================================================
async function connectWalletConnect() {
  const projectId =
    String(
      WALLETCONNECT_PROJECT_ID || ""
    ).trim();

  if (
    !projectId ||
    projectId === "YOUR_PROJECT_ID"
  ) {
    throw new Error(
      "WalletConnect Project ID is missing."
    );
  }

  setStatus(
    "Opening wallet list..."
  );

  const EthereumProvider =
    await loadWalletConnectProvider();

  if (!EthereumProvider?.init) {
    throw new Error(
      "WalletConnect failed to load. Check your internet connection."
    );
  }

  if (!wcProvider) {
    wcProvider =
      await EthereumProvider.init({
        projectId,

        chains: [
          BASE_CHAIN_DECIMAL
        ],

        optionalChains: [
          BASE_CHAIN_DECIMAL,
          1
        ],

        showQrModal: true,

        methods: [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "personal_sign",
          "eth_signTypedData",
          "eth_signTypedData_v4",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain"
        ],

        events: [
          "chainChanged",
          "accountsChanged",
          "disconnect"
        ],

        rpcMap: {
          8453:
            "https://mainnet.base.org",
          1:
            "https://eth.llamarpc.com"
        },

        metadata: {
          name: "The Last Chick (TLC)",
          description:
            "TLC Public Presale on Base",
          url:
            window.location.origin,
          icons: [
            `${window.location.origin}/assets/tlc1.png`
          ]
        },

        qrModalOptions: {
          themeMode: "dark",

          themeVariables: {
            "--wcm-z-index": "100000",
            "--wcm-accent-color": "#ffd700"
          },

          explorerRecommendedWalletIds: [
            "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            "4622a2b2d6af1c9844944291e5e4951b405b5b8b460c2daec9c49536509c8ca3",
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3bfb9b4fe5083c256",
            "971e689d0a8cd342f627868cf8288c26d81ec19dc7ed7ff9bd4b9a245748f667",
            "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"
          ]
        }
      });
  }

  attachWalletConnectListeners();

  if (!wcProvider.session) {
    await wcProvider.connect();
  }

  const accounts =
    wcProvider.accounts || [];

  if (!accounts.length) {
    throw new Error(
      "No wallet account is available."
    );
  }

  ethereumProvider =
    wcProvider;

  provider =
    new ethers.BrowserProvider(
      wcProvider
    );

  signer =
    await provider.getSigner(
      accounts[0]
    );

  userAddress =
    await signer.getAddress();

  usingWalletConnect = true;

  setStatus("");
  showConnected(userAddress);
}

// ============================================================
// MAIN CONNECT FUNCTION
// ============================================================
async function connectWallet() {
  if (walletConnecting) return;

  walletConnecting = true;

  if (connectBtn) {
    connectBtn.disabled = true;
    connectBtn.textContent =
      "CONNECTING...";
  }

  try {
    const injected =
      getEthereumProvider();

    /*
     * IMPORTANT:
     * If a browser wallet extension exists,
     * use it first.
     *
     * On mobile browsers, WalletConnect is
     * preferred because most mobile wallets
     * do not inject window.ethereum into
     * normal Chrome/Safari tabs.
     */
    if (injected) {
      try {
        await connectInjected(
          injected
        );

        return;
      } catch (injectedError) {
        console.warn(
          "Injected wallet connection failed:",
          injectedError
        );

        /*
         * On desktop, if an injected wallet
         * exists but refuses the connection,
         * do not silently open another wallet.
         *
         * On mobile, continue to WalletConnect.
         */
        if (!isMobileBrowser()) {
          throw injectedError;
        }
      }
    }

    await connectWalletConnect();

  } catch (err) {
    console.error(
      "Wallet connection failed:",
      err
    );

    setStatus("");

    if (err?.code === 4001) {
      alert(
        "Connection was rejected in the wallet."
      );
      return;
    }

    const message =
      getErrorMessage(
        err,
        "Unable to connect wallet."
      );

    alert(
      "Connection failed:\n\n" +
      message
    );

  } finally {
    walletConnecting = false;

    if (connectBtn && !userAddress) {
      connectBtn.disabled = false;
      connectBtn.textContent =
        "CONNECT WALLET";
    }
  }
}

// ============================================================
// USDC AMOUNT
// ============================================================
function parseUsdcAmount() {
  const raw =
    String(
      usdcInput?.value || ""
    ).trim();

  if (!raw) {
    throw new Error(
      "Enter a USDC amount."
    );
  }

  const numeric =
    Number(raw);

  if (
    !Number.isFinite(numeric) ||
    numeric <= 0
  ) {
    throw new Error(
      "Enter a valid USDC amount."
    );
  }

  try {
    return ethers.parseUnits(
      raw,
      6
    );
  } catch (err) {
    throw new Error(
      "Invalid USDC amount. Use up to 6 decimal places."
    );
  }
}

// ============================================================
// APPROVE USDC
// ============================================================
async function approveUSDC(amount) {
  if (!signer) {
    throw new Error(
      "Please connect your wallet first."
    );
  }

  const usdc =
    new ethers.Contract(
      USDC_ADDRESS,
      USDC_ABI,
      signer
    );

  setStatus(
    "Approving USDC..."
  );

  const tx =
    await usdc.approve(
      SALE_CONTRACT,
      amount
    );

  setStatus(
    "Waiting for approval confirmation..."
  );

  await tx.wait();

  setStatus(
    "USDC approved. You can buy now."
  );

  return tx;
}

// ============================================================
// BUY TLC
// ============================================================
async function buyTLC() {
  try {
    if (!signer || !userAddress) {
      alert(
        "Please connect your wallet first."
      );
      return;
    }

    const amount =
      parseUsdcAmount();

    /*
     * Make sure wallet is still on Base
     * before sending the transaction.
     */
    if (ethereumProvider?.request) {
      await ensureBaseNetwork(
        ethereumProvider
      );
    }

    const usdc =
      new ethers.Contract(
        USDC_ADDRESS,
        USDC_ABI,
        signer
      );

    const sale =
      new ethers.Contract(
        SALE_CONTRACT,
        SALE_ABI,
        signer
      );

    const balance =
      await usdc.balanceOf(
        userAddress
      );

    if (balance < amount) {
      setStatus(
        "Not enough USDC in your wallet on Base."
      );
      return;
    }

    const allowance =
      await usdc.allowance(
        userAddress,
        SALE_CONTRACT
      );

    if (allowance < amount) {
      await approveUSDC(
        amount
      );
    }

    setStatus(
      "Buying TLC..."
    );

    const tx =
      await sale.buy(
        amount
      );

    setStatus(
      "Waiting for transaction confirmation..."
    );

    await tx.wait();

    setStatus(
      "Success! TLC purchased."
    );

    alert(
      "TLC purchase successful!"
    );

  } catch (err) {
    console.error(
      "Buy failed:",
      err
    );

    if (err?.code === 4001) {
      setStatus(
        "Transaction rejected in wallet."
      );
      return;
    }

    setStatus(
      "Error: " +
      getErrorMessage(
        err,
        "Buy failed."
      )
    );
  }
}

// ============================================================
// BUTTON EVENTS
// ============================================================
if (connectBtn) {
  connectBtn.addEventListener(
    "click",
    connectWallet
  );
}

if (approveBtn) {
  approveBtn.addEventListener(
    "click",
    async () => {
      try {
        if (!signer) {
          alert(
            "Please connect your wallet first."
          );
          return;
        }

        const amount =
          parseUsdcAmount();

        await approveUSDC(
          amount
        );

      } catch (err) {
        console.error(
          "Approval failed:",
          err
        );

        if (err?.code === 4001) {
          setStatus(
            "Approval rejected in wallet."
          );
          return;
        }

        setStatus(
          "Error: " +
          getErrorMessage(
            err,
            "Approval failed."
          )
        );
      }
    }
  );
}

if (buyBtn) {
  buyBtn.addEventListener(
    "click",
    buyTLC
  );
}

// ============================================================
// TLC CALCULATOR
// ============================================================
if (usdcInput) {
  usdcInput.addEventListener(
    "input",
    () => {
      const val =
        parseFloat(
          usdcInput.value
        ) || 0;

      if (tlcInput) {
        tlcInput.value =
          (val * 1000)
            .toLocaleString(
              undefined,
              {
                maximumFractionDigits: 6
              }
            );
      }
    }
  );
}

// ============================================================
// AUTO-RECONNECT EXISTING WALLET
// ============================================================
async function restoreWalletConnection() {
  try {
    const injected =
      getEthereumProvider();

    if (injected) {
      const accounts =
        await injected.request({
          method: "eth_accounts"
        });

      if (
        accounts &&
        accounts.length
      ) {
        await connectInjected(
          injected
        );

        return;
      }
    }
  } catch (err) {
    console.warn(
      "Injected wallet restore failed:",
      err
    );
  }

  /*
   * WalletConnect sessions can be restored
   * without opening the QR modal again.
   */
  try {
    if (
      wcProvider?.session &&
      wcProvider.accounts?.length
    ) {
      attachWalletConnectListeners();

      ethereumProvider =
        wcProvider;

      provider =
        new ethers.BrowserProvider(
          wcProvider
        );

      signer =
        await provider.getSigner(
          wcProvider.accounts[0]
        );

      userAddress =
        await signer.getAddress();

      usingWalletConnect = true;

      showConnected(
        userAddress
      );
    }
  } catch (err) {
    console.warn(
      "WalletConnect restore failed:",
      err
    );
  }
}

// ============================================================
// INITIALIZE
// ============================================================
function initTLC() {
  initLanguage();
  initMenu();
  initLoader();
  initSparkles();

  /*
   * Give EIP-6963 providers a moment to announce
   * themselves before trying to restore.
   */
  setTimeout(
    restoreWalletConnection,
    300
  );
}

if (
  document.readyState ===
  "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    initTLC
  );
} else {
  initTLC();
}
```
