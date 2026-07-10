import Markdown from 'react-markdown';
import type { Photo } from './customTypes';

const markdownContentEn = `
  Hello! My name is **Hiroshi Angelo Fernandez**.
  I'm currently in my 2nd year of studies as a graduate student of Computer Science at the Chiba institute of Technology in Japan.
  As a graduate of the Faculty of Computer Engineering at the same institute, I have basic knowledge of:
  - Networks
  - Computer architecture
  - Operating systems
  - Compilers
  - Signal processing
  - Low-level systems
  - Electronics

  and much more.

  I built my **first desktop computer at age 13**, and have been interested in computers, and IT systems since **elementary school**.
  I made my **first program in elementary school**, which was a simple text-based game programmed in bash, where the player chose from a list of options, and if they chose correctly they could advance to the next level.
  I **kept my interest** in IT technology and studied computer engineering for my bachelor studies.

  My current interests are:
  - Digital communications
  - Error-correcting codes
  - Next-generation modulation schemes
  - Learning GoLang

  I'm currently **researching about polarization-adjusted convolutional (PAC) codes** under the supervision of Prof. Takahiko Saba.
  I studied from the ground-up on PAC codes in my bachelor years,
  and through **trial and error and sheer perseverance**, my research results were accepted for presentation at the flagship conference of the IEEE Communications Society, **IEEE Global Communications Conference** (GLOBECOM).
  `.trim();

const markdownContentJp = `
  はじめまして。**フェルナンデス・ヒロシアンジェロ**と申します。
  現在、千葉工業大学大学院にて情報科学を専攻する修士2年生です。
  同大学の情報通信工学科を卒業しており、以下の分野について基礎知識を有しています。
  - ネットワーク
  - コンピュータアーキテクチャ
  - オペレーティングシステム
  - コンパイラ
  - 信号処理
  - 低レイヤシステム
  - 電子工学

  など多岐にわたります。

  **13歳のときに自作PCを初めて組み立て**、小学生の頃からコンピュータやIT技術に強い関心を持っていました。
  **小学生の時に初めて作ったプログラム**は、bashで組んだ簡単なテキストベースのゲームで、プレイヤーが選択肢を選び、正解すると次のレベルに進めるというものでした。
  その興味を持ち続け、学部では情報通信工学を専攻しました。

  現在の関心分野は以下の通りです。
  - ディジタル通信
  - 誤り訂正符号
  - 次世代変調方式
  - GoLangの学習

  現在は佐波孝彦教授の指導のもと、**PAC（Polarization-Adjusted Convolutional）符号**の研究に取り組んでいます。
  学部生の頃からPAC符号についてゼロから学び、**試行錯誤と粘り強い努力の末**、IEEE Communications Societyの旗艦国際会議である**IEEE Global Communications Conference（GLOBECOM）**での発表に採択されました。
  `.trim();

export const gameImageData = [
  {
    id: 1,
    name: 'Outer Wilds',
    imageId: 'co65ac',
  },
  {
    id: 2,
    name: 'Bloodborne',
    imageId: 'cob99l',
  },
  {
    id: 3,
    name: 'Hollow Knight: Silksong',
    imageId: 'cobebu',
  },
  {
    id: 4,
    name: 'Disco Elysium',
    imageId: 'co1sfj',
  },
];

export const albumImageData = [
  {
    id: 1,
    name: '潜潜話',
    imageId: 'afa0b2a6-8384-44d4-a907-76da213ca24f/25740026489',
    artist: 'ずっと真夜中でいいのに。',
  },
  {
    id: 2,
    name: '結束バンド',
    imageId: 'c988920d-4b43-4399-a6e6-c9e551cf2f4c/34437814072',
    artist: '結束バンド',
  },
  {
    id: 3,
    name: '一番はじめの出来事',
    imageId: 'b8e8f347-ef41-4e0f-9086-e1d53b55789d/39382543240',
    artist: 'the cabs',
  },
  {
    id: 4,
    name: 'OK Computer',
    imageId: '0b6b4ba0-d36f-47bd-b4ea-6a5b91842d29/3537819129',
    artist: 'Radiohead',
  },
];

export const bookImageData = [
  {
    id: 1,
    name: '薬屋のひとりごと',
    author: '日向夏',
    imageID: '1508432170i/36441259',
  },
  {
    id: 2,
    name: 'Meditations',
    author: 'Marcus Aurelius',
    imageID: '1750554861i/233411514',
  },
];

// Drop image files into public/images/hiking/ and add an entry below,
// e.g. { id: 1, src: '/images/hiking/fuji-summit.jpg', caption: 'Mt. Fuji summit, Aug 2024' }.
export const hikingPhotos: Photo[] = [];

// Drop image files into public/images/globecom/ and add an entry below,
// e.g. { id: 1, src: '/images/globecom/podium.jpg', caption: 'Presenting at GLOBECOM 2024, Cape Town' }.
export const globecomPhotos: Photo[] = [];

export const content = {
  en: {
    name: (
      <>
        Hiroshi Angelo <br /> Fernandez
      </>
    ),
    title: 'M2 Computer Science Student',
    badge: 'Open to Research & New-Grad Opportunities',
    about:
      'Researching PAC codes at the Chiba Institute of Technology. IEEE GLOBECOM presenter.',
    tagline:
      'Graduate researcher designing next-generation error-correcting codes for digital communications.',
    skills: [
      'Digital Communications',
      'Error-Correcting Codes',
      'Rust',
      'IoT',
      'Embedded Systems',
      'GoLang',
    ],
    ctaPrimary: 'Get in Touch',
    ctaSecondary: 'View GitHub',
    nav: {
      about: 'About',
      research: 'Research',
      credentials: 'Credentials',
      favorites: 'Favorites',
      hiking: 'Adventures',
      globecom: 'GLOBECOM',
      contact: 'Contact',
    },
    aboutHeading: 'About Me',
    aboutMe: (
      <div className="prose max-w-none prose-base">
        <Markdown>{markdownContentEn}</Markdown>
      </div>
    ),
    favoriteQuote: {
      quote:
        'The only man who never makes mistakes is the man who never does anything',
      by: 'Theodore Roosevelt',
    },
    research: {
      heading: 'Research Focus',
      intro:
        "I'm researching polarization-adjusted convolutional (PAC) codes under Prof. Takahiko Saba, exploring how next-generation error-correcting codes and modulation schemes can push digital communications closer to the theoretical limit. My results were accepted for presentation at IEEE GLOBECOM, the flagship conference of the IEEE Communications Society.",
      tags: [
        'PAC Codes',
        'Digital Communications',
        'Error-Correcting Codes',
        'Modulation Schemes',
      ],
    },
    credentials: {
      heading: 'Credentials & Licenses',
      licences: [
        'BSc. in Computer Engineering',
        'Pursuing MSc. in Computer Science',
        'TOEIC 960',
        'Eiken Test in Practical English Proficiency Grade 1',
        'Eiken Test in Practical English Proficiency Grade Pre-1',
        '2nd Class Qualified Electrician',
        'Hazardous Materials Handler of Class B Type 4',
        'Hazardous Materials Handler of Class B Type 2',
        'Kyudo Grade-1',
      ],
    },
    favorites: {
      heading: 'Personal Favorites',
      intro: "A few things I enjoy outside of research and code.",
      gamesLabel: 'Games',
      albumsLabel: 'Albums & EPs',
      booksLabel: 'Books & Novels',
      showsLabel: 'Shows & Films',
      alsoLabel: 'Also enjoy:',
      games: [
        'Factorio',
        'Outer Wilds',
        'Bloodborne',
        'Return of the Obra Dinn',
        'Hollow Knight',
        'Hollow Knight: Silksong',
        'Persona 3',
        'Persona 4',
        'Persona 5',
        'Ultrakill',
        'Red Dead Redemption 2',
        'Balatro',
        'Prey',
        'Devil May Cry 5',
        'Resident Evil 4',
        'Team Fortress 2',
      ],
      music: [
        'Aphex Twin',
        'Kessoku Band',
        'the cabs',
        'ZUTOMAYO',
        'Asian Kung-fu Generation',
        'Round Table feat. Nino',
        'Satellite Lovers',
      ],
      books: ['The Art of Probability', 'The Minto Pyramid Principle'],
      shows: [
        'The Sopranos',
        'Maquia: When the Promised Flower Blooms',
        'Yuru Camp',
        'Game of Thrones',
        'Full Metal Alchemist: Brotherhood',
      ],
      credits:
        'Cover art courtesy of IGDB (games), the Cover Art Archive by MusicBrainz (albums), and Goodreads (books).',
    },
    hiking: {
      heading: 'Mountain Adventures',
      subtitle: 'Summited Mt. Fuji & Mt. Nantai',
      body: 'When I step away from the lab, I like to put that same perseverance into the mountains — one slow, deliberate step at a time.',
      empty:
        "Photo gallery coming soon — check back after my next summit.",
    },
    globecom: {
      heading: 'IEEE GLOBECOM',
      subtitle: 'Presenting PAC Code Research on the World Stage',
      body: 'My research on polarization-adjusted convolutional (PAC) codes, developed under the supervision of Prof. Takahiko Saba, was accepted for presentation at IEEE GLOBECOM — the flagship conference of the IEEE Communications Society.',
      empty: 'Conference photos coming soon.',
    },
    contact: {
      heading: "Let's Connect",
      body: "I'm actively looking for research and new-grad opportunities in digital communications, embedded systems, and beyond. Feel free to reach out.",
      emailLabel: 'Email',
      revealLabel: 'Click to reveal',
    },
    footer: {
      note: 'Built with React, TypeScript & Tailwind CSS.',
    },
  },

  jp: {
    name: (
      <ruby>
        Fernandez <rt>フェルナンデス</rt>
        Hiroshi Angelo<rt>ヒロシアンジェロ</rt>
      </ruby>
    ),
    title: '情報科学専攻　修士2年',
    badge: '研究職・新卒採用のご相談を歓迎します',
    about: (
      <>
        千葉工業大学にてPAC符号の研究に従事．
        <br />
        IEEE GLOBECOMで研究成果発表．
      </>
    ),
    tagline: 'ディジタル通信における次世代誤り訂正符号を研究する大学院生です。',
    skills: [
      'ディジタル通信',
      '誤り訂正符号',
      'Rust',
      'IoT',
      '組み込みシステム',
      'GoLang',
    ],
    ctaPrimary: '連絡する',
    ctaSecondary: 'GitHubを見る',
    nav: {
      about: '私について',
      research: '研究',
      credentials: '資格',
      favorites: 'お気に入り',
      hiking: 'アウトドア',
      globecom: 'GLOBECOM',
      contact: '連絡先',
    },
    aboutHeading: '私について',
    aboutMe: (
      <div className="prose max-w-none prose-base">
        <Markdown>{markdownContentJp}</Markdown>
      </div>
    ),
    favoriteQuote: {
      quote:
        'The only man who never makes mistakes is the man who never does anything',
      by: 'Theodore Roosevelt',
    },
    research: {
      heading: '研究内容',
      intro:
        '佐波孝彦教授の指導のもと、PAC（Polarization-Adjusted Convolutional）符号の研究に取り組んでいます。次世代の誤り訂正符号や変調方式が、ディジタル通信を理論限界にどこまで近づけられるかを探求しています。研究成果はIEEE Communications Societyの旗艦国際会議であるIEEE GLOBECOMでの発表に採択されました。',
      tags: ['PAC符号', 'ディジタル通信', '誤り訂正符号', '変調方式'],
    },
    credentials: {
      heading: '資格・学位',
      licences: [
        '学士（情報工学）',
        '修士（情報科学）取得のため勉励中',
        'TOEIC 960点',
        '実用英語技能検定1級',
        '実用英語技能検定準1級',
        '第二種電気工事士免状',
        '乙種第４類危険物取扱者免状',
        '乙種第２類危険物取扱者免状',
        '弓道1級',
      ],
    },
    favorites: {
      heading: 'お気に入り',
      intro: '研究やコーディング以外で楽しんでいるものをいくつか紹介します。',
      gamesLabel: 'ゲーム',
      albumsLabel: 'アルバム・EP',
      booksLabel: '本・小説',
      showsLabel: 'ドラマ・映画',
      alsoLabel: 'その他のお気に入り：',
      games: [
        'Factorio',
        'Outer Wilds',
        'Bloodborne',
        'Return of the Obra Dinn',
        'Hollow Knight',
        'Hollow Knight: Silksong',
        'ペルソナ 3',
        'ペルソナ 4',
        'ペルソナ 5',
        'Ultrakill',
        'Red Dead Redemption 2',
        'Balatro',
        'Prey',
        'Devil May Cry 5',
        'BIOHAZARD RE:4',
        'Team Fortress 2',
      ],
      music: [
        'Aphex Twin',
        '結束バンド',
        'the cabs',
        'ずっと真夜中でいいのに。',
        'Asian Kung-fu Generation',
        'Round Table feat. Nino',
        'Satellite Lovers',
      ],
      books: ['The Art of Probability', 'The Minto Pyramid Principle'],
      shows: [
        'ザ・ソプラノズ 哀愁のマフィア',
        'さよならの朝に約束の花をかざろう',
        'ゆるキャン△',
        'ゲーム・オブ・スローンズ',
        '鋼の錬金術師 FULLMETAL ALCHEMIST',
      ],
      credits:
        'カバーアートは IGDB（ゲーム）、Cover Art Archive by MusicBrainz（アルバム）、Goodreads（書籍）の各データベースを利用しています。',
    },
    hiking: {
      heading: '登山記録',
      subtitle: '富士山と男体山を登頂',
      body: '研究室を離れるときは、山の中でも同じ粘り強さを一歩一歩に込めています。',
      empty: '写真は準備中です。次の登頂後に追加予定です。',
    },
    globecom: {
      heading: 'IEEE GLOBECOM',
      subtitle: '国際会議でのPAC符号研究発表',
      body: '佐波孝彦教授の指導のもと取り組んだPAC（Polarization-Adjusted Convolutional）符号の研究成果が、IEEE Communications Societyの旗艦国際会議であるIEEE GLOBECOMでの発表に採択されました。',
      empty: '会議の写真は準備中です。',
    },
    contact: {
      heading: '連絡先',
      body: 'ディジタル通信や組み込みシステムを中心に、研究職・新卒採用のご相談を積極的にお待ちしております。お気軽にご連絡ください。',
      emailLabel: 'メール',
      revealLabel: 'クリックして表示',
    },
    footer: {
      note: 'React、TypeScript、Tailwind CSSで構築。',
    },
  },
};
