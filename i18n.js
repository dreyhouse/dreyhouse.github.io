/* ============================================================
   SYSTÈME MULTILANGUE + MULTIDEVISE — FASTBOOLA (v2, corrigé)
   ============================================================ */













const TRANSLATIONS = {
  fr: {
    nav_cta:"TEST GRATUIT",
    hero_eyebrow:"UN TEST GRATUIT DE 24H POUR TESTER LA STABILITÉ DES ABONNEMENTS",
    hero_title:'ABONNEZ-VOUS <em>à VOTRE RYTHME,</em> à VOTRE BUDGET.',
    hero_lead:"Choisissez votre abonnement et souscrivez directement sur WhatsApp, en un clic.",
    hero_btn:"Voir les abonnements ↓",
    cat_eyebrow:"Catalogue", cat_title:"Choisissez votre abonnement",
    cat_desc:"Cliquez sur \"Contacter\" pour être redirigé directement vers WhatsApp avec votre choix déjà indiqué.",
    cta_abonner:"Contacter",
    footer:"© {year} FASTBOOLA. Abonnements disponibles par WhatsApp.",
    duree:{1:"1 Mois",3:"3 Mois",6:"6 Mois",12:"12 Mois"},
    wa_message:"Bonjour ! Je souhaite souscrire à l'abonnement {duree} à {prix}.",
    wa_trial_message:"Bonjour ! Je souhaite souscrire à l'abonnement Essai Gratuit.",
    feat_channels:"+38,000 chaînes de télévision", feat_movies:"+ 222,000 Films & +48,000 Séries",
    feat_quality:"4K, UHD, FHD, HD, Chaînes", feat_epg:"Guide TV (EPG)",
    feat_stable:"Rapide et stable", feat_test:"Test gratuit pour tester la stabilité avant paiement"
  },
  en: {
    nav_cta:"FREE TRIAL",
    hero_eyebrow:"A FREE 24H TRIAL TO TEST SUBSCRIPTION STABILITY",
    hero_title:'SUBSCRIBE <em>at your own pace,</em> on your own budget.',
    hero_lead:"Choose your subscription and sign up directly on WhatsApp, in one click.",
    hero_btn:"View subscriptions ↓",
    cat_eyebrow:"Catalog", cat_title:"Choose your subscription",
    cat_desc:"Click \"Contact\" to be redirected straight to WhatsApp with your choice already filled in.",
    cta_abonner:"Contact",
    footer:"© {year} FASTBOOLA. Subscriptions available via WhatsApp.",
    duree:{1:"1 Month",3:"3 Months",6:"6 Months",12:"12 Months"},
    wa_message:"Hello! I would like to subscribe to the {duree} plan at {prix}.",
    wa_trial_message:"Hello! I would like to sign up for the Free Trial.",
    feat_channels:"+38,000 TV channels", feat_movies:"+ 222,000 Movies & +48,000 Series",
    feat_quality:"4K, UHD, FHD, HD channels", feat_epg:"TV Guide (EPG)",
    feat_stable:"Fast and stable", feat_test:"Free trial to test stability before payment"
  },
  es: {
    nav_cta:"PRUEBA GRATIS",
    hero_eyebrow:"UNA PRUEBA GRATIS DE 24H PARA PROBAR LA ESTABILIDAD",
    hero_title:'SUSCRÍBETE <em>a tu propio ritmo,</em> a tu propio presupuesto.',
    hero_lead:"Elige tu suscripción y regístrate directamente por WhatsApp, en un clic.",
    hero_btn:"Ver suscripciones ↓",
    cat_eyebrow:"Catálogo", cat_title:"Elige tu suscripción",
    cat_desc:"Haz clic en \"Contactar\" para ir directo a WhatsApp con tu elección ya lista.",
    cta_abonner:"Contactar",
    footer:"© {year} FASTBOOLA. Suscripciones disponibles por WhatsApp.",
    duree:{1:"1 Mes",3:"3 Meses",6:"6 Meses",12:"12 Meses"},
    wa_message:"¡Hola! Quiero suscribirme al plan de {duree} por {prix}.",
    wa_trial_message:"¡Hola! Quiero registrarme en la Prueba Gratis.",
    feat_channels:"+38,000 canales de televisión", feat_movies:"+ 222,000 Películas y +48,000 Series",
    feat_quality:"4K, UHD, FHD, HD, Canales", feat_epg:"Guía de TV (EPG)",
    feat_stable:"Rápido y estable", feat_test:"Prueba gratis para probar la estabilidad antes de pagar"
  },
  pt: {
    nav_cta:"TESTE GRÁTIS",
    hero_eyebrow:"UM TESTE GRÁTIS DE 24H PARA TESTAR A ESTABILIDADE",
    hero_title:'ASSINE <em>no seu próprio ritmo,</em> no seu orçamento.',
    hero_lead:"Escolha sua assinatura e inscreva-se diretamente pelo WhatsApp, em um clique.",
    hero_btn:"Ver assinaturas ↓",
    cat_eyebrow:"Catálogo", cat_title:"Escolha sua assinatura",
    cat_desc:"Clique em \"Contatar\" para ser redirecionado direto ao WhatsApp com sua escolha já pronta.",
    cta_abonner:"Contatar",
    footer:"© {year} FASTBOOLA. Assinaturas disponíveis via WhatsApp.",
    duree:{1:"1 Mês",3:"3 Meses",6:"6 Meses",12:"12 Meses"},
    wa_message:"Olá! Quero assinar o plano de {duree} por {prix}.",
    wa_trial_message:"Olá! Quero me inscrever no Teste Grátis.",
    feat_channels:"+38,000 canais de TV", feat_movies:"+ 222,000 Filmes e +48,000 Séries",
    feat_quality:"4K, UHD, FHD, HD, Canais", feat_epg:"Guia de TV (EPG)",
    feat_stable:"Rápido e estável", feat_test:"Teste grátis para testar a estabilidade antes de pagar"
  },
  ar: {
    nav_cta:"تجربة مجانية",
    hero_eyebrow:"تجربة مجانية لمدة 24 ساعة لاختبار استقرار الاشتراكات",
    hero_title:'اشترك <em>بالسرعة التي تناسبك،</em> وبالميزانية التي تناسبك.',
    hero_lead:"اختر اشتراكك واشترك مباشرة عبر واتساب، بنقرة واحدة.",
    hero_btn:"عرض الاشتراكات ↓",
    cat_eyebrow:"الكتالوج", cat_title:"اختر اشتراكك",
    cat_desc:"انقر على \"تواصل\" لتتم إعادة توجيهك مباشرة إلى واتساب مع اختيارك جاهزًا.",
    cta_abonner:"تواصل",
    footer:"© {year} FASTBOOLA. الاشتراكات متاحة عبر واتساب.",
    duree:{1:"شهر واحد",3:"3 أشهر",6:"6 أشهر",12:"12 شهرًا"},
    wa_message:"مرحبًا! أرغب في الاشتراك في خطة {duree} مقابل {prix}.",
    wa_trial_message:"مرحبًا! أرغب في التسجيل في التجربة المجانية.",
    feat_channels:"+38,000 قناة تلفزيونية", feat_movies:"+ 222,000 فيلم و +48,000 مسلسل",
    feat_quality:"4K, UHD, FHD, HD", feat_epg:"دليل القنوات (EPG)",
    feat_stable:"سريع ومستقر", feat_test:"تجربة مجانية لاختبار الاستقرار قبل الدفع"
  },
  tr: {
    nav_cta:"ÜCRETSİZ DENEME",
    hero_eyebrow:"ABONELİK KARARLILIĞINI TEST ETMEK İÇİN 24 SAATLİK ÜCRETSİZ DENEME",
    hero_title:'KENDİ HIZINDA <em>abone ol,</em> kendi bütçenle.',
    hero_lead:"Aboneliğinizi seçin ve doğrudan WhatsApp üzerinden tek tıkla kaydolun.",
    hero_btn:"Abonelikleri gör ↓",
    cat_eyebrow:"Katalog", cat_title:"Aboneliğinizi seçin",
    cat_desc:"Seçiminiz hazır şekilde doğrudan WhatsApp'a yönlendirilmek için \"İletişime geç\"e tıklayın.",
    cta_abonner:"İletişime geç",
    footer:"© {year} FASTBOOLA. Abonelikler WhatsApp üzerinden mevcuttur.",
    duree:{1:"1 Ay",3:"3 Ay",6:"6 Ay",12:"12 Ay"},
    wa_message:"Merhaba! {duree} planına {prix} karşılığında abone olmak istiyorum.",
    wa_trial_message:"Merhaba! Ücretsiz Deneme'ye kaydolmak istiyorum.",
    feat_channels:"+38,000 TV kanalı", feat_movies:"+ 222,000 Film ve +48,000 Dizi",
    feat_quality:"4K, UHD, FHD, HD kanallar", feat_epg:"TV Rehberi (EPG)",
    feat_stable:"Hızlı ve stabil", feat_test:"Ödeme öncesi kararlılığı test etmek için ücretsiz deneme"
  },
  zh: {
    nav_cta:"免费试用",
    hero_eyebrow:"24小时免费试用，测试订阅稳定性",
    hero_title:'按自己的节奏 <em>订阅，</em> 按自己的预算。',
    hero_lead:"选择您的订阅计划，直接通过WhatsApp一键注册。",
    hero_btn:"查看订阅 ↓",
    cat_eyebrow:"目录", cat_title:"选择您的订阅",
    cat_desc:"点击“联系”即可直接跳转到WhatsApp，您的选择已自动填好。",
    cta_abonner:"联系",
    footer:"© {year} FASTBOOLA。订阅可通过WhatsApp获取。",
    duree:{1:"1个月",3:"3个月",6:"6个月",12:"12个月"},
    wa_message:"您好！我想订阅{duree}套餐，价格为{prix}。",
    wa_trial_message:"您好！我想注册免费试用。",
    feat_channels:"+38,000个电视频道", feat_movies:"+222,000部电影和+48,000部剧集",
    feat_quality:"4K、UHD、FHD、HD频道", feat_epg:"电视指南（EPG）",
    feat_stable:"快速稳定", feat_test:"付款前可免费试用以测试稳定性"
  },
  de: {
    nav_cta:"KOSTENLOSER TEST",
    hero_eyebrow:"EIN KOSTENLOSER 24-STUNDEN-TEST, UM DIE STABILITÄT DER ABOS ZU TESTEN",
    hero_title:'ABONNIEREN SIE <em>in Ihrem eigenen Tempo,</em> nach Ihrem eigenen Budget.',
    hero_lead:"Wählen Sie Ihr Abo und melden Sie sich direkt über WhatsApp an, mit einem Klick.",
    hero_btn:"Abos ansehen ↓",
    cat_eyebrow:"Katalog", cat_title:"Wählen Sie Ihr Abo",
    cat_desc:"Klicken Sie auf \"Kontaktieren\", um direkt zu WhatsApp weitergeleitet zu werden, mit Ihrer Auswahl bereits ausgefüllt.",
    cta_abonner:"Kontaktieren",
    footer:"© {year} FASTBOOLA. Abos verfügbar über WhatsApp.",
    duree:{1:"1 Monat",3:"3 Monate",6:"6 Monate",12:"12 Monate"},
    wa_message:"Hallo! Ich möchte das {duree}-Abo für {prix} abonnieren.",
    wa_trial_message:"Hallo! Ich möchte mich für die kostenlose Testversion anmelden.",
    feat_channels:"+38.000 TV-Sender", feat_movies:"+ 222.000 Filme & +48.000 Serien",
    feat_quality:"4K, UHD, FHD, HD-Sender", feat_epg:"TV-Guide (EPG)",
    feat_stable:"Schnell und stabil", feat_test:"Kostenloser Test zur Stabilitätsprüfung vor der Zahlung"
  },
  hi: {
    nav_cta:"मुफ्त ट्रायल",
    hero_eyebrow:"सदस्यता स्थिरता जांचने के लिए 24 घंटे का मुफ्त ट्रायल",
    hero_title:'अपनी गति से <em>सदस्यता लें,</em> अपने बजट में।',
    hero_lead:"अपनी सदस्यता चुनें और सीधे WhatsApp पर एक क्लिक में साइन अप करें।",
    hero_btn:"सदस्यताएं देखें ↓",
    cat_eyebrow:"कैटलॉग", cat_title:"अपनी सदस्यता चुनें",
    cat_desc:"सीधे WhatsApp पर भेजे जाने के लिए \"संपर्क करें\" पर क्लिक करें, आपकी पसंद पहले से भरी हुई।",
    cta_abonner:"संपर्क करें",
    footer:"© {year} FASTBOOLA. सदस्यताएं WhatsApp के माध्यम से उपलब्ध हैं।",
    duree:{1:"1 महीना",3:"3 महीने",6:"6 महीने",12:"12 महीने"},
    wa_message:"नमस्ते! मैं {duree} योजना की सदस्यता {prix} में लेना चाहता/चाहती हूं।",
    wa_trial_message:"नमस्ते! मैं मुफ्त ट्रायल के लिए साइन अप करना चाहता/चाहती हूं।",
    feat_channels:"+38,000 टीवी चैनल", feat_movies:"+ 222,000 फिल्में और +48,000 सीरीज",
    feat_quality:"4K, UHD, FHD, HD चैनल", feat_epg:"टीवी गाइड (EPG)",
    feat_stable:"तेज़ और स्थिर", feat_test:"भुगतान से पहले स्थिरता जांचने के लिए मुफ्त ट्रायल"
  },
  vi: {
    nav_cta:"DÙNG THỬ MIỄN PHÍ",
    hero_eyebrow:"DÙNG THỬ MIỄN PHÍ 24H ĐỂ KIỂM TRA ĐỘ ỔN ĐỊNH CỦA GÓI ĐĂNG KÝ",
    hero_title:'ĐĂNG KÝ <em>theo nhịp độ của bạn,</em> theo ngân sách của bạn.',
    hero_lead:"Chọn gói đăng ký của bạn và đăng ký trực tiếp qua WhatsApp, chỉ với một cú nhấp chuột.",
    hero_btn:"Xem các gói đăng ký ↓",
    cat_eyebrow:"Danh mục", cat_title:"Chọn gói đăng ký của bạn",
    cat_desc:"Nhấp vào \"Liên hệ\" để được chuyển hướng trực tiếp đến WhatsApp với lựa chọn của bạn đã được điền sẵn.",
    cta_abonner:"Liên hệ",
    footer:"© {year} FASTBOOLA. Các gói đăng ký có sẵn qua WhatsApp.",
    duree:{1:"1 Tháng",3:"3 Tháng",6:"6 Tháng",12:"12 Tháng"},
    wa_message:"Xin chào! Tôi muốn đăng ký gói {duree} với giá {prix}.",
    wa_trial_message:"Xin chào! Tôi muốn đăng ký Dùng Thử Miễn Phí.",
    feat_channels:"+38.000 kênh truyền hình", feat_movies:"+ 222.000 Phim & +48.000 Series",
    feat_quality:"Kênh 4K, UHD, FHD, HD", feat_epg:"Hướng dẫn TV (EPG)",
    feat_stable:"Nhanh và ổn định", feat_test:"Dùng thử miễn phí để kiểm tra độ ổn định trước khi thanh toán"
  },
  ru: {
    nav_cta:"БЕСПЛАТНЫЙ ТЕСТ",
    hero_eyebrow:"БЕСПЛАТНЫЙ 24-ЧАСОВОЙ ТЕСТ ДЛЯ ПРОВЕРКИ СТАБИЛЬНОСТИ ПОДПИСКИ",
    hero_title:'ПОДПИШИТЕСЬ <em>в своём темпе,</em> в своём бюджете.',
    hero_lead:"Выберите подписку и зарегистрируйтесь прямо через WhatsApp в один клик.",
    hero_btn:"Смотреть подписки ↓",
    cat_eyebrow:"Каталог", cat_title:"Выберите подписку",
    cat_desc:"Нажмите «Связаться», чтобы перейти прямо в WhatsApp с уже готовым выбором.",
    cta_abonner:"Связаться",
    footer:"© {year} FASTBOOLA. Подписки доступны через WhatsApp.",
    duree:{1:"1 месяц",3:"3 месяца",6:"6 месяцев",12:"12 месяцев"},
    wa_message:"Здравствуйте! Я хочу оформить подписку {duree} за {prix}.",
    wa_trial_message:"Здравствуйте! Я хочу оформить бесплатный пробный период.",
    feat_channels:"+38 000 ТВ-каналов", feat_movies:"+ 222 000 фильмов и +48 000 сериалов",
    feat_quality:"Каналы 4K, UHD, FHD, HD", feat_epg:"ТВ-гид (EPG)",
    feat_stable:"Быстро и стабильно", feat_test:"Бесплатный тест для проверки стабильности перед оплатой"
  },
  ja: {
    nav_cta:"無料トライアル",
    hero_eyebrow:"サブスクリプションの安定性を試す24時間無料トライアル",
    hero_title:'<em>自分のペースで、</em>自分の予算でサブスク登録。',
    hero_lead:"サブスクを選んで、WhatsAppでワンクリックで直接登録できます。",
    hero_btn:"サブスクを見る ↓",
    cat_eyebrow:"カタログ", cat_title:"サブスクを選んでください",
    cat_desc:"「連絡する」をクリックすると、選択内容が入力された状態でWhatsAppに移動します。",
    cta_abonner:"連絡する",
    footer:"© {year} FASTBOOLA。サブスクはWhatsAppで利用可能です。",
    duree:{1:"1ヶ月",3:"3ヶ月",6:"6ヶ月",12:"12ヶ月"},
    wa_message:"こんにちは！{duree}プランを{prix}で申し込みたいです。",
    wa_trial_message:"こんにちは！無料トライアルに登録したいです。",
    feat_channels:"+38,000のテレビチャンネル", feat_movies:"+222,000本の映画と+48,000本のシリーズ",
    feat_quality:"4K、UHD、FHD、HDチャンネル", feat_epg:"番組ガイド（EPG）",
    feat_stable:"高速で安定", feat_test:"支払い前に安定性を確認できる無料トライアル"
  },
  ko: {
    nav_cta:"무료 체험",
    hero_eyebrow:"구독 안정성을 테스트하는 24시간 무료 체험",
    hero_title:'<em>당신의 속도로,</em> 당신의 예산으로 구독하세요.',
    hero_lead:"구독을 선택하고 WhatsApp에서 클릭 한 번으로 직접 신청하세요.",
    hero_btn:"구독 보기 ↓",
    cat_eyebrow:"카탈로그", cat_title:"구독을 선택하세요",
    cat_desc:"\"문의하기\"를 클릭하면 선택한 내용이 채워진 채로 WhatsApp으로 바로 이동합니다.",
    cta_abonner:"문의하기",
    footer:"© {year} FASTBOOLA. 구독은 WhatsApp을 통해 이용 가능합니다.",
    duree:{1:"1개월",3:"3개월",6:"6개월",12:"12개월"},
    wa_message:"안녕하세요! {duree} 요금제를 {prix}에 구독하고 싶습니다.",
    wa_trial_message:"안녕하세요! 무료 체험을 신청하고 싶습니다.",
    feat_channels:"+38,000개의 TV 채널", feat_movies:"+222,000편의 영화 및 +48,000편의 시리즈",
    feat_quality:"4K, UHD, FHD, HD 채널", feat_epg:"TV 가이드(EPG)",
    feat_stable:"빠르고 안정적", feat_test:"결제 전 안정성을 테스트할 수 있는 무료 체험"
  },
  it: {
    nav_cta:"PROVA GRATUITA",
    hero_eyebrow:"UNA PROVA GRATUITA DI 24 ORE PER TESTARE LA STABILITÀ DEGLI ABBONAMENTI",
    hero_title:'ABBONATI <em>al tuo ritmo,</em> al tuo budget.',
    hero_lead:"Scegli il tuo abbonamento e iscriviti direttamente su WhatsApp, con un clic.",
    hero_btn:"Vedi gli abbonamenti ↓",
    cat_eyebrow:"Catalogo", cat_title:"Scegli il tuo abbonamento",
    cat_desc:"Clicca su \"Contatta\" per essere reindirizzato direttamente a WhatsApp con la tua scelta già inserita.",
    cta_abonner:"Contatta",
    footer:"© {year} FASTBOOLA. Abbonamenti disponibili su WhatsApp.",
    duree:{1:"1 Mese",3:"3 Mesi",6:"6 Mesi",12:"12 Mesi"},
    wa_message:"Ciao! Vorrei abbonarmi al piano {duree} a {prix}.",
    wa_trial_message:"Ciao! Vorrei iscrivermi alla Prova Gratuita.",
    feat_channels:"+38.000 canali TV", feat_movies:"+ 222.000 Film e +48.000 Serie",
    feat_quality:"Canali 4K, UHD, FHD, HD", feat_epg:"Guida TV (EPG)",
    feat_stable:"Veloce e stabile", feat_test:"Prova gratuita per testare la stabilità prima del pagamento"
  },
  nl: {
    nav_cta:"GRATIS PROEFPERIODE",
    hero_eyebrow:"EEN GRATIS PROEFPERIODE VAN 24 UUR OM DE STABILITEIT VAN ABONNEMENTEN TE TESTEN",
    hero_title:'ABONNEER JE <em>op je eigen tempo,</em> binnen je eigen budget.',
    hero_lead:"Kies je abonnement en meld je direct aan via WhatsApp, met één klik.",
    hero_btn:"Bekijk abonnementen ↓",
    cat_eyebrow:"Catalogus", cat_title:"Kies je abonnement",
    cat_desc:"Klik op \"Contact\" om direct doorgestuurd te worden naar WhatsApp met je keuze al ingevuld.",
    cta_abonner:"Contact",
    footer:"© {year} FASTBOOLA. Abonnementen beschikbaar via WhatsApp.",
    duree:{1:"1 Maand",3:"3 Maanden",6:"6 Maanden",12:"12 Maanden"},
    wa_message:"Hallo! Ik wil me abonneren op het {duree} plan voor {prix}.",
    wa_trial_message:"Hallo! Ik wil me aanmelden voor de gratis proefperiode.",
    feat_channels:"+38.000 tv-zenders", feat_movies:"+ 222.000 Films & +48.000 Series",
    feat_quality:"4K, UHD, FHD, HD zenders", feat_epg:"TV-gids (EPG)",
    feat_stable:"Snel en stabiel", feat_test:"Gratis proefperiode om de stabiliteit te testen vóór betaling"
  }
};

function formatPrice(xof, currency) {
  const rate = currency === 'XOF' || currency === 'XAF' ? 655.957 : window.EXCHANGE_RATES.rates[currency];
  if (!Number.isFinite(Number(xof)) || !Number.isFinite(rate) || rate <= 0) throw new Error('Invalid price or rate');
  const formatter = new Intl.NumberFormat(window.CURRENT_LOCALE || 'fr-FR', {style:'currency', currency});
  const raw = Number(xof) / 655.957 * rate;
  // Preserve FCFA base prices and free offers; converted prices end in ,99.
  const decimals = formatter.resolvedOptions().maximumFractionDigits;
  const amount = raw === 0 || currency === 'XOF' || currency === 'XAF' ? raw
    : decimals === 0 ? Math.ceil(raw) : Math.floor(raw) + 0.99;
  return formatter.format(amount);
}

/* ============================================================
   Traductions additionnelles — captures, chaînes par pays
   ============================================================ */
const EXTRA_TRANSLATIONS = {
  fr: {
    screenshots_title:"Nos clients satisfaits", screenshots_subtitle:"Quelques retours reçus directement sur WhatsApp",
    channels_title:"Chaînes disponibles par pays", channels_subtitle:"Un aperçu des chaînes proposées, classées par pays"
  },
  en: {
    screenshots_title:"Happy customers", screenshots_subtitle:"A few messages received directly on WhatsApp",
    channels_title:"Channels available by country", channels_subtitle:"A preview of the channels offered, sorted by country"
  },
  es: {
    screenshots_title:"Clientes satisfechos", screenshots_subtitle:"Algunos mensajes recibidos directamente por WhatsApp",
    channels_title:"Canales disponibles por país", channels_subtitle:"Un vistazo de los canales ofrecidos, clasificados por país"
  },
  pt: {
    screenshots_title:"Clientes satisfeitos", screenshots_subtitle:"Algumas mensagens recebidas diretamente no WhatsApp",
    channels_title:"Canais disponíveis por país", channels_subtitle:"Uma prévia dos canais oferecidos, organizados por país"
  },
  ar: {
    screenshots_title:"عملاء راضون", screenshots_subtitle:"بعض الرسائل المستلمة مباشرة عبر واتساب",
    channels_title:"القنوات المتوفرة حسب البلد", channels_subtitle:"لمحة عن القنوات المتاحة، مصنفة حسب البلد"
  },
  tr: {
    screenshots_title:"Memnun müşteriler", screenshots_subtitle:"WhatsApp üzerinden alınan bazı mesajlar",
    channels_title:"Ülkeye göre mevcut kanallar", channels_subtitle:"Ülkeye göre sınıflandırılmış kanallara genel bakış"
  },
  zh: {
    screenshots_title:"满意的客户", screenshots_subtitle:"通过WhatsApp收到的一些反馈",
    channels_title:"按国家/地区提供的频道", channels_subtitle:"按国家/地区分类的频道预览"
  },
  de: {
    screenshots_title:"Zufriedene Kunden", screenshots_subtitle:"Einige Nachrichten direkt über WhatsApp erhalten",
    channels_title:"Verfügbare Sender nach Land", channels_subtitle:"Ein Überblick über die angebotenen Sender, nach Land sortiert"
  },
  hi: {
    screenshots_title:"संतुष्ट ग्राहक", screenshots_subtitle:"व्हाट्सएप पर सीधे प्राप्त कुछ संदेश",
    channels_title:"देश के अनुसार उपलब्ध चैनल", channels_subtitle:"देश के अनुसार वर्गीकृत चैनलों की झलक"
  },
  vi: {
    screenshots_title:"Khách hàng hài lòng", screenshots_subtitle:"Một số tin nhắn nhận được qua WhatsApp",
    channels_title:"Kênh có sẵn theo quốc gia", channels_subtitle:"Xem trước các kênh được cung cấp, phân loại theo quốc gia"
  },
  ru: {
    screenshots_title:"Довольные клиенты", screenshots_subtitle:"Некоторые сообщения, полученные в WhatsApp",
    channels_title:"Каналы по странам", channels_subtitle:"Обзор доступных каналов, отсортированных по странам"
  },
  ja: {
    screenshots_title:"満足したお客様", screenshots_subtitle:"WhatsAppで届いたメッセージの一部",
    channels_title:"国別のチャンネル", channels_subtitle:"国別に分類されたチャンネルのプレビュー"
  },
  ko: {
    screenshots_title:"만족한 고객들", screenshots_subtitle:"WhatsApp으로 받은 메시지 일부",
    channels_title:"국가별 이용 가능한 채널", channels_subtitle:"국가별로 정리된 채널 미리보기"
  },
  it: {
    screenshots_title:"Clienti soddisfatti", screenshots_subtitle:"Alcuni messaggi ricevuti direttamente su WhatsApp",
    channels_title:"Canali disponibili per paese", channels_subtitle:"Un'anteprima dei canali offerti, ordinati per paese"
  },
  nl: {
    screenshots_title:"Tevreden klanten", screenshots_subtitle:"Enkele berichten rechtstreeks via WhatsApp ontvangen",
    channels_title:"Beschikbare zenders per land", channels_subtitle:"Een overzicht van de aangeboden zenders, gesorteerd per land"
  }
};

