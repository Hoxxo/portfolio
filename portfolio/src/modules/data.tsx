import Markdown from 'react-markdown'

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
  
  I built my **first desktop computer at age 13**, and have been interested in computers, and IT systems since **elementary school**.
  I made my **first program in elementary school**, which was a simple text-based game programmed in bash, where the player chose from a list of options, and if they chose correctly they could advance to the next level.
  I **kept my interest** in IT technology and studied computer engineering for my bachelor studies. 

  My current interests are:
  - Digital communications
  - Error-correcting codes
  - Electronics
  - Next-generation modulation schemes
  - GoLang
  
  I'm currently **researching about polarization-adjusted convolutional (PAC) codes** under the supervision of Prof. .
  I studied from the ground-up on PAC codes in my bachelor years,
  and through **trial and error and sheer perseverance**, my research results were accepted for presentation at the flagship conference of the IEEE Communications Society, **IEEE Global Communications Conference** (GLOBECOM).
  `.trim();

export const content = {
  en: {
    name: (
      <>
      Hiroshi Angelo <br /> Fernandez
      </>
    ),
    title: "M2 Computer Science Student",
    tagline: "Digital Communications | Error-correcting Codes | Rust | IoT | Embedded Systems | Coffee and Music Enthusiast",
    about: "Researching PAC codes at the Chiba Institute of Technology. IEEE GLOBECOM presenter.",
    music: ["Aphex Twin", "Kessoku Band", "the cabs", "ZUTOMAYO", "Asian Kung-fu Generation", "Round Table feat. Nino", "Satellite Lovers"],
    books: ["The Art of Probability", "The Minto Pyramid Principle"],
    shows: ["The Sopranos", "Maquia: When the Promised Flower Blooms", "Yuru Camp", "Game of Thrones", "Full Metal Alchemist: Brotherhood"],
    games: [
      "Factorio", "Outer Wilds", "Bloodborne", "Return of the Obra Dinn", "Hollow Knight", "Hollow Knight: Silksong", "Persona 3", "Persona 4",
      "Persona 5", "Ultrakill", "Red Dead Redemption 2", "Balatro", "Prey", "Devil May Cry 5", "Resident Evil 4", "Team Fortress 2"
    ],
    mountains: "Summited Mt. Fuji & Mt. Nantai",
    licences: [
      "BSc. in Computer Engineering", "Working Toward MSc. in Computer Science", "TOEIC 930", "Eiken Test in Practical English Proficiency Grade 1", "Eiken Test in Practical English Proficiency Grade Pre-1", "2nd Class Qualified Electrician", "Hazardous Materials Handler of Class B Type 4", "Hazardous Materials Handler of Class B Type 2",
    ],
    aboutMe: (
      <>
        <div className="prose prose-slate prose-invert max-w-none prose-base">
          <Markdown>
            {markdownContentEn}
          </Markdown>
        </div>
      </>
    )
  },

  jp: {
    name: (
      <ruby>
        Fernandez <rt>フェルナンデス</rt>
        Hiroshi Angelo<rt>ヒロシアンジェロ</rt>
      </ruby>
    ),
    title: "情報科学専攻　修士2年",
    tagline: (
      <>
        ディジタル通信 | 誤り訂正符号 | Rust | IoT | <br/> 組み込みシステム | コーヒーと音楽の愛好家
      </>
    ),
    about: (
      <>
      千葉工業大学にてPAC符号の研究に従事．<br/>IEEE GLOBECOMで研究成果発表．
      </>
    ),
    music: ["Aphex Twin", "結束バンド", "the cabs", "ずっと真夜中でいいのに。", "Asian Kung-fu Generation", "Round Table feat. Nino", "Satellite Lovers"],
    books: ["The Art of Probability", "The Minto Pyramid Principle"],
    shows: ["ザ・ソプラノズ 哀愁のマフィア", "さよならの朝に約束の花をかざろう", "ゆるキャン△", "ゲーム・オブ・スローンズ", "鋼の錬金術師 FULLMETAL ALCHEMIST"],
    games: [
      "Factorio", "Outer Wilds", "Bloodborne", "Return of the Obra Dinn", "Hollow Knight", "Hollow Knight: Silksong", "ペルソナ 3", "ペルソナ 4",
      "ペルソナ 5", "Ultrakill", "Red Dead Redemption 2", "Balatro", "Prey", "Devil May Cry 5", "BIOHAZARD RE:4", "Team Fortress 2"
    ],
    mountains: "富士山と男体山を登頂",
    licences: ["学士（情報工学）", "修士（情報科学）のため勉励中", "TOEIC 930点", "実用英語技能検定1級", "実用英語技能検定準1級", "第二種電気工事士免状", "乙種第４類危険物取扱者免状", "乙種第２類危険物取扱者免状", ]
  }
}