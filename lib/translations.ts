/* eslint-disable sort-keys */
export type Locale = "en" | "ja"

export const translations = {
  en: {
    hero: {
      tagline: "Naturalizing AI through Digital Olfaction",
    },
    nav: {
      ais: "Aroma Imaging Sensor",
      company: "Company",
      contact: "Contact",
      news: "News",
      platform: "Olfaction AI Platform",
      scentifai: "ScentifAI",
    },
    platform: {
      description:
        "ScentifAI® is the Digital Olfaction AI Platform, enabling Cross & Multi-modal Machine Learnings capabilities,\nincluding:",
      features: [
        "Sensor Dataset | Database Analysis",
        "Olfaction Classification Training /  Learning",
        "Customizable Ambient Sensing Applications/APIs",
      ],
      moreComing: "... & much more to come!",
      appDescription:
        "Suitable for various applications such as physical AI, robotics, autonomous driving & navigations, mobile & wearables, industrial IoTs, where augmenting unique ambient / olfaction perception data stack contributing to differentiated and efficient intelligent systems.",
      contactDetail: "for detail.",
      corporateOnly: "Currently available for corporate customers.",
      aromaSubheading: "Invisible World of Aroma.",
      aromaVisualized: "Visualized.",
      aromaDescription:
        "Ultra-high resolution, Realtime Lapse of Odor \u201cFingerprint Image Pattern\u201d upon pure chemicals gas exposure to sensor",
      aisTitle: "Aroma Imaging Sensor [AIS]",
      aisDescription:
        "Aroma Imaging Sensor converts analogue Smell/Odor Input as digital Video/Vision image pattern, similar to conventional vision image sensors or cameras on smartphone.",
      aisDescription2:
        "Aroma Imaging Sensor is the advanced e-nose sensor system platform, designed with standardized, compatible data format and architecture for scalable, standardized Olfaction machine learning for the first-time. Optimized to work with\u00a0ScentifAI\u00a0Olfaction AI Platform.",
      keySpecs: "Key Specifications",
      specs: [
        "Ultra-compact [1.2mm x 1.2mm sensor array area]",
        "Ultra-high resolution [57,000 px]",
        "High gas sensitivity [100ppb NH3 / 10 ppt Ethanol]",
        "High-performance, proprietary receptor membrane material portfolio",
        "Low-cost, silicon CMOS based chip [under $10/chip upon mass production]",
        "On-die ADC Circuitry & SPI Interface",
        "chip PKG w/ 20-pin Connector / LGA for CHIP PKG to Board connection",
      ],
      pocBadge: "AVAILABLE FOR POC",
      pocTitle: "[For POC]",
      pocDescription:
        "5C-SSM is easy-to-measure POC kit for customers who wish to try our CMOS e-nose systems to embed in their devices & systems.",
      contactEarlyAccess: "for early access and detail.",
      selectedOnly:
        "Currently Only Available for selected corporate customers.",
      odorItems: [
        { label: "Odor", sub: "[Ambient Chemical World]" },
        { label: "\u2192" },
        { label: "Odor Imaging Sensor", sub: "" },
        { label: "\u2192" },
        { label: "Vision Data", sub: "[Image Pattern]" },
        { label: "+" },
        { label: "AI / ML", sub: "" },
        { label: "\u2192" },
        { label: "Action / Reaction", sub: "" },
      ],
    },
    company: {
      missionTitle: "Mission",
      missionStatement:
        "ScentifAI is on a mission to Naturalize AI through Digital Olfaction innovation.",
      missionBody: [
        ["Ask:", "\u201cWhy Nature created Nose?\u201d"],
        [
          "Our Belief:",
          "Because Nose is Efficient & Critical-for-life & Valuable & Emotional! learning organ to understand ambient physical world.",
        ],
        ["Our Conclusion:", "Let us give the same sensory to AI."],
        [
          "Imagine:",
          "\u201cBehavior & reactions of humanoids: one with Nose vs. those without.\u201d",
        ],
      ],
      companyTitle: "Company",
      companySubtitle: "ScentifAI is Olfaction AI startup.",
      formerlyKnown: "formerly known as",
      teamDesc:
        "We are a team mixed of industry experts in diverse fields of science, technology and business, including: five-sense computing & cognitive science, chemical & material science, multi-modal solid state semiconductor sensors systems & electronics, full-stack AI Data engineers, global investments, business developments, working relentlessly to solve one of the biggest remaining technological challenge in the advent of Physical AI era:",
      digitization: "Digitization of Scent / Olfaction",
      lastSense: "The Last Missing Sense in the Physical AI era",
      beliefDetail:
        "We believe Olfaction AI uniquely addresses major pain points of Physical AI, including minimizing and improving the efficiency of ever-scarce computational resources, reducing the physical training costs to develop physical world foundation models, while enhancing data quality and diversity through the additional \u201cchemical perception\u201d input dimension to future devices and systems.",
      management: "Management",
      managements: [
        { name: "Shunichiro Kuroki", role: "Founder & CEO" },
        {
          name: "Kazuaki Sawada, Ph.D. \u2014 Toyohashi University of Technology",
          role: "CTO",
        },
        { name: "Kenichi Hashizume", role: "Technology Advisor & ex-CTO" },
      ],
      companyInfo: "Company Information",
      companyInfoRows: [
        ["Company Name", "ScentifAI, Inc."],
        ["Representative Director & CEO", "Shunichiro Kuroki"],
        ["Main Bank", "Sumitomo Mitsui Banking Corporation / Resona Bank"],
        [
          "Business Domain",
          "Development, Production and Sales of electronic equipments and systems including compact odor imaging sensors. Production, Development and Sales of innovative services using the Sensor products.",
        ],
      ] as [string, string][],
      access: "Access",
      headquarter: "\u25a0Headquarter",
      headquarterAddress: "Sagami Bldg. 2F, 7-13-6 Ginza, Chuo-ku, Tokyo",
      tel: "TEL. +81-3-4455-4609",
      numazuOffice: "\u25a0Numazu Office",
      numazuAddress: "18-9 Ichibacho, Numazu-shi, Shizuoka",
      partnersTitle: "Customers & Business Partners",
      partners: [
        "Anritsu Corporation",
        "Kyocera Corporation",
        "Sanyo Chemical Industries, Ltd.",
        "Sony Corporation",
        "DENTSU Inc.",
        "Toyota Boshoku Corporation",
        "West Japan Railway Company",
        "Japan Tobacco Inc.",
        "Panasonic Electric Works",
        "Meiji Holdings Co., Ltd",
        "Japan Manned Space Systems Corporation (JAMSS)",
        "LOTTE Co., Ltd",
      ],
      andMore:
        "Food and Beverages, Cosmetics, Fragrances, Daily necessities, Electronics and Home appliances, IT services, Automotive parts, Gas, Chemicals, Electronic components, Industrial machinery, Medical equipment, Paper manufacturing, Research and Development, University research institutions, Space-related industries, Government agencies, etc.​ and more\u2026",
    },
    news: {
      title: "News",
      noNews: "No news available.",
    },
    contact: {
      title: "Contact",
      description:
        "For inquiries about our products and services, please reach out using the form below, or email us directly at\u00a0",
      thankYou: "Thank you for your inquiry.",
      received:
        "We have received your message and will get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      submit: "Send Message",
    },
  },
  ja: {
    nav: {
      platform: "嗅覚AIプラットフォーム",
      scentifai: "ScentifAI",
      ais: "Aroma Imaging Sensor",
      company: "会社概要",
      news: "ニュース",
      contact: "お問い合わせ",
    },
    hero: {
      tagline: "デジタル嗅覚でAIを自然化する",
    },
    platform: {
      description:
        "ScentifAI®は、クロス・マルチモーダルな機械学習を実現するデジタル嗅覚AIプラットフォームです。独自の環境や嗅覚データスタックを強化し、高度な知能システムの構築を支援します。​",
      features: [
        "データ管理：センサーデータセットの作成・データベース分析​",
        "AI学習：ニオイデータの学習および分類トレーニング",
        "柔軟な実装：カスタマイズ可能な環境管理アプリ / API連携​",
      ],
      moreComing: "・・・今後、さらに多彩な機能を順次追加予定です。",
      appDescription:
        "産業用IoT、フィジカルAI、ロボティクス、自動運転・ナビゲーション、モバイル＆ウェアラブルなど、幅広いアプリケーションに最適化可能です。​",
      contactDetail:
        "​早期アクセスおよび詳細につきましては、下記までお問い合わせください。",
      corporateOnly:
        "誠に恐れ入りますが、現在ご利用いただけるのは法人のお客様のみです。​",
      aromaSubheading: "見環境イメージングセンサーで​香りの見えない世界を",
      aromaVisualized: "可視化。",
      aromaDescription:
        "超高解像度なセンサーによる、ガス曝露時のニオイ指紋変化（タイムラプス）です。​",
      aisTitle: "Aroma Imaging Sensor [AIS]",
      aisDescription:
        "ニオイイメージングセンサーは、曖昧なニオイ（匂い/臭い）をカメラのようにデジタル画像パターンへと変換する技術です。​",
      aisDescription2:
        "先進的なe-Nose（電子鼻）型センサーのプラットフォームとして、拡張性と標準化を両立。機械学習に最適なデータ構造で設計されており、嗅覚AIプラットフォーム「ScentifAI®」とのスムーズな連携が可能です。​",
      keySpecs: "主な仕様",
      specs: [
        "【極小・超高解像度】​\n超コンパクト設計：1.2mm × 1.2mm の極小センサーアレイ​\n超高解像度：57,000ピクセル（高密度な検知ポイント）​",
        "【圧倒的な感度と材料技術】​\n高いガス感度：アンモニア 100ppb / エタノール 10ppt の微量検知に対応​\n独自開発の受容体膜： 高性能な独自材料ポートフォリオによる幅広い検知能力​\n低コスト化を実現：シリコンCMOSベースのチップ（量産時10ドル以下を想定）​",
        "【インターフェース・実装】​\n信号処理： A/D変換回路（ADC）およびSPIインターフェースをチップ内に搭載​\nパッケージ： 20ピンコネクタ付きパッケージ、および基板実装用LGAに対応​",
      ],
      pocBadge: "ご利用いただけるPoCについて",
      pocTitle: "（5C-SSM）",
      pocDescription:
        "当社のCMOS型ニオイセンサーを、自社製品やシステムへ組込検討されているお客様向けに、容易に測定可能な5C-SSM評価用キットを販売中です。​",
      contactEarlyAccess:
        "早期アクセスおよび詳細につきましては、下記までお問い合わせください。",
      selectedOnly:
        "誠に恐れ入りますが、現在ご利用いただけるのは法人のお客様のみです。​",
      odorItems: [
        { label: "ニオイ", sub: "[環境化学物質の世界]" },
        { label: "\u2192" },
        { label: "ニオイイメージングセンサー​", sub: "" },
        { label: "\u2192" },
        { label: "視覚データ​", sub: "[画像パターン]" },
        { label: "+" },
        { label: "AI / ML（機械学習）​", sub: "" },
        { label: "\u2192" },
        { label: "行動 / 反応​", sub: "" },
      ],
    },
    company: {
      missionTitle: "Mission",
      missionStatement: "デジタル嗅覚で、AIに「生命の知能」を実装する。",
      missionBody: [
        [
          "",
          "鼻は単なる感覚器ではありません。周囲の世界を察知し、学習するための、極めて効率的でエモーショナルな生存戦略の要です。​私たちのミッションは、この「嗅覚」という知性をAIに授けること。鼻を持つロボットが、人間と同じように世界を感じ、反応する未来。​ScentifAIは、その未来を現実のものにします。",
        ],
      ],
      companyTitle: "会社概要",
      companySubtitle:
        "ScentifAIは、嗅覚AI（Olfaction AI）のスタートアップです",
      formerlyKnown: "旧社名：",
      teamDesc:
        "私たちは、サイエンス、テクノロジー、ビジネスの各分野で豊富な経験を持つエキスパート集団です。五感コンピューティングや認知科学、化学、材料科学、マルチモーダルな半導体センサーシステム、エレクトロニクス、そしてフルスタックのAIデータエンジニアから、グローバル投資や事業開発のプロフェッショナルまで、多様な才能が結集しています。\nフィジカルAI時代の到来に向け、人類に残された大きな技術的挑戦の一つである「嗅覚のデジタル化」の解決に、私たちは情熱を持って取り組んでいます。​",
      digitization: "嗅覚のデジタル化​",
      lastSense: "フィジカルAI時代における最後の感覚",
      beliefDetail:
        "私たちは「嗅覚AI」が、フィジカルAIの抱える主要な課題を解決する独自の鍵になると信じています。希少な計算リソースの最小化と効率向上、そして物理世界の基盤モデル構築における学習コストの削減。これらを未来のデバイスやシステムへ「化学的知覚」という新たな入力次元を加えることで実現します。​嗅覚データの活用は、データの質と多様性を飛躍的に高め、より高度な知能システムの構築に寄与します。",
      management: "経営陣",
      managements: [
        { name: "黒木 俊一郎", role: "代表取締役 & CEO" },
        {
          name: "澤田 和明, (Ph.D. \u2014 豊橋技術科学大学)",
          role: "CTO",
        },
        { name: "橋詰 健一", role: "技術顧問 兼 元CTO" },
      ],
      companyInfo: "会社情報",
      companyInfoRows: [
        ["会社名", "ScentifAI株式会社"],
        ["代表取締役 & CEO", "黒木 俊一郎"],
        ["主要銀行", "三井住友銀行 / りそな銀行"],
        [
          "事業内容",
          "小型ニオイイメージングセンサーを含む電子機器・システムの開発、製造、販売。​\nセンサー製品を活用した革新的サービスの製造、開発、販売。",
        ],
      ] as [string, string][],
      access: "アクセス",
      headquarter: "■本社",
      headquarterAddress: "東京都中央区銀座7-13-6 サガミビル2階",
      tel: "TEL. 03-4455-4609",
      numazuOffice: "■沼津オフィス",
      numazuAddress: "静岡県沼津市市場町18-9",
      partnersTitle: "お客様・ビジネスパートナー",
      partners: [
        "アンリツ株式会社",
        "京セラ株式会社",
        "三洋化成工業株式会社",
        "ソニーグループ株式会社",
        "株式会社電通",
        "トヨタ紡織株式会社",
        "西日本旅客鉄道株式会社",
        "日本たばこ産業株式会社",
        "パナソニック株式会社 エレクトリックワークス社",
        "明治ホールディングス株式会社",
        "有人宇宙システム株式会社",
        "株式会社ロッテ",
      ],
      andMore:
        "食品飲料、コスメ、香料、日用品、エレクトロニクス・家電、ITサービス、自動車部品、ガス、化学品、電子部品、産業機器、医療機器、製紙、研究開発、大学研究機関、宇宙関連 他多数…",
    },
    news: {
      title: "ニュース",
      noNews: "現在ニュースはありません。",
    },
    contact: {
      title: "お問い合わせ",
      description: "製品・サービスに関するお問い合わせは、下記フォームまたは",
      thankYou: "お問い合わせありがとうございます。",
      received: "メッセージを受信しました。できるだけ早くご連絡いたします。",
      name: "お名前",
      email: "メールアドレス",
      company: "会社名",
      message: "メッセージ",
      submit: "送信する",
    },
  },
} as const
