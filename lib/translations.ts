export type Locale = "en" | "ja"

export const translations = {
  en: {
    nav: {
      platform: "Olfaction AI Platform",
      scentifai: "ScentifAI",
      ais: "Aroma Imaging Sensor",
      company: "Company",
      news: "News",
      contact: "Contact",
    },
    hero: {
      tagline: "Naturalizing AI through Digital Olfaction",
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
        'Ultra-high resolution, Realtime Lapse of Odor \u201cFingerprint Image Pattern\u201d upon pure chemicals gas exposure to sensor',
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
      selectedOnly: "Currently Only Available for selected corporate customers.",
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
      ask: "Ask:",
      askContent: "\u201cWhy Nature created Nose?\u201d",
      belief: "Our Belief:",
      beliefContent:
        "Because Nose is Efficient & Critical-for-life & Valuable & Emotional! learning organ to understand ambient physical world.",
      conclusion: "Our Conclusion:",
      conclusionContent: "Let us give the same sensory to AI.",
      imagine: "Imagine:",
      imagineContent:
        "\u201cBehavior & reactions of humanoids: one with Nose vs. those without.\u201d",
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
      andMore: "and more\u2026",
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
        "ScentifAI®はデジタル嗅覚AIプラットフォームです。クロス＆マルチモーダル機械学習機能を提供します。\n含む：",
      features: [
        "センサーデータセット | データベース分析",
        "嗅覚分類トレーニング / 学習",
        "カスタマイズ可能なアンビエントセンシングアプリケーション/API",
      ],
      moreComing: "...さらに多くの機能が近日公開予定！",
      appDescription:
        "フィジカルAI、ロボティクス、自動運転・ナビゲーション、モバイル・ウェアラブル、産業用IoTなど、ユニークなアンビエント/嗅覚知覚データスタックを付加し、差別化された効率的なインテリジェントシステムに貢献するさまざまなアプリケーションに適しています。",
      contactDetail: "まで詳細をお問い合わせください。",
      corporateOnly: "現在、法人のお客様向けにのみ提供しています。",
      aromaSubheading: "見えない香りの世界。",
      aromaVisualized: "可視化。",
      aromaDescription:
        "純粋な化学ガスをセンサーに暴露した際の、超高解像度・リアルタイムの臭気「フィンガープリントイメージパターン」の経時変化",
      aisTitle: "Aroma Imaging Sensor [AIS]",
      aisDescription:
        "Aroma Imaging Sensorは、スマートフォンの従来のビジョン画像センサーやカメラと同様に、アナログの臭い/香りの入力をデジタルビデオ/ビジョン画像パターンに変換します。",
      aisDescription2:
        "Aroma Imaging Sensorは高度な電子鼻センサーシステムプラットフォームです。スケーラブルで標準化された嗅覚機械学習のための、標準化・互換性のあるデータフォーマットとアーキテクチャで設計されています。\u00a0ScentifAI\u00a0嗅覚AIプラットフォームとの連携に最適化されています。",
      keySpecs: "主な仕様",
      specs: [
        "超小型 [1.2mm x 1.2mm センサーアレイ面積]",
        "超高解像度 [57,000 px]",
        "高ガス感度 [100ppb NH3 / 10 ppt エタノール]",
        "高性能・独自受容体膜材料ポートフォリオ",
        "低コストシリコンCMOSベースチップ [量産時 $10/chip 以下]",
        "オンダイADC回路 & SPIインターフェース",
        "20ピンコネクタ付きチップPKG / ボード接続用LGA",
      ],
      pocBadge: "POC受付中",
      pocTitle: "[POC用]",
      pocDescription:
        "5C-SSMは、CMOSイーノーズシステムをデバイスやシステムに組み込みたいお客様向けの、簡単計測POCキットです。",
      contactEarlyAccess: "まで早期アクセスや詳細についてお問い合わせください。",
      selectedOnly: "現在、選定された法人のお客様のみへのご提供となっています。",
      odorItems: [
        { label: "臭気", sub: "[アンビエント化学物質の世界]" },
        { label: "\u2192" },
        { label: "臭気イメージングセンサー", sub: "" },
        { label: "\u2192" },
        { label: "ビジョンデータ", sub: "[画像パターン]" },
        { label: "+" },
        { label: "AI / ML", sub: "" },
        { label: "\u2192" },
        { label: "アクション / リアクション", sub: "" },
      ],
    },
    company: {
      missionTitle: "ミッション",
      missionStatement:
        "ScentifAIはデジタル嗅覚イノベーションでAIを自然化するミッションを持っています。",
      ask: "問い：",
      askContent: "「なぜ自然は鼻を創ったのか？」",
      belief: "私たちの信念：",
      beliefContent:
        "鼻は効率的で・生命に不可欠で・価値があり・感情的な！周囲の物理世界を理解するための学習器官だからです。",
      conclusion: "私たちの結論：",
      conclusionContent: "同じ感覚をAIにも与えましょう。",
      imagine: "想像してください：",
      imagineContent:
        "「ヒューマノイドの行動と反応：鼻がある場合とない場合。」",
      companyTitle: "会社概要",
      companySubtitle: "ScentifAIは嗅覚AIスタートアップです。",
      formerlyKnown: "旧社名：",
      teamDesc:
        "私たちは、五感コンピューティング＆認知科学、化学・材料科学、マルチモーダル固体半導体センサーシステム＆エレクトロニクス、フルスタックAIデータエンジニア、グローバル投資、事業開発など多様な分野の業界専門家チームです。フィジカルAI時代における最大の技術的課題の一つを解決すべく懸命に取り組んでいます：",
      digitization: "スメル / 嗅覚のデジタル化",
      lastSense: "フィジカルAI時代に欠けている最後の感覚",
      beliefDetail:
        "嗅覚AIはフィジカルAIの主要な課題に独自に対応すると考えています。貴重な計算リソースの最小化・効率化、物理世界基盤モデルの開発に要するトレーニングコストの削減、将来のデバイスやシステムへの追加「化学知覚」入力次元を通じたデータ品質と多様性の向上などです。",
      management: "経営陣",
      companyInfo: "会社情報",
      companyInfoRows: [
        ["会社名", "ScentifAI株式会社"],
        ["代表取締役 & CEO", "黒木 俊一郎"],
        ["主要銀行", "三井住友銀行 / りそな銀行"],
        [
          "事業内容",
          "コンパクト臭気イメージングセンサーを含む電子機器・システムの開発、製造、販売。センサー製品を活用した革新的サービスの製造、開発、販売。",
        ],
      ] as [string, string][],
      access: "アクセス",
      headquarter: "■本社",
      headquarterAddress: "東京都中央区銀座7-13-6 相模ビル2F",
      tel: "TEL. +81-3-4455-4609",
      numazuOffice: "■沼津オフィス",
      numazuAddress: "静岡県沼津市市場町18-9",
      partnersTitle: "お客様・ビジネスパートナー",
      andMore: "他多数…",
    },
    news: {
      title: "ニュース",
      noNews: "現在ニュースはありません。",
    },
    contact: {
      title: "お問い合わせ",
      description: "製品・サービスに関するお問い合わせは、下記フォームまたは\u00a0",
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
