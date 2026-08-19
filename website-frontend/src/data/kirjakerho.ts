// Kirjakerho: "Sadan vuoden yksinäisyys" -persoonallisuustesti.
// Sisältö on suomeksi, koska sivu on kirjakerhoa varten.

export type CharacterId =
  | "jose-arcadio-buendia"
  | "ursula"
  | "aureliano"
  | "jose-arcadio"
  | "amaranta"
  | "rebeca"
  | "remedios"
  | "aureliano-segundo"
  | "fernanda"
  | "pilar-ternera"
  | "melquiades"
  | "aureliano-babilonia"

export type Character = {
  id: CharacterId
  name: string
  epithet: string
  monogram: string
  summary: string
  strengths: string[]
  shadow: string
}

export type Option = {
  text: string
  weights: Partial<Record<CharacterId, number>>
}

export type Question = {
  id: number
  question: string
  options: Option[]
}

export const characters: Character[] = [
  {
    id: "jose-arcadio-buendia",
    name: "José Arcadio Buendía",
    epithet: "Perustaja",
    monogram: "JB",
    summary:
      "Sinä olet se, joka lähtee liikkeelle ennen kuin kartta on valmis. Innostut jokaisesta uudesta ajatuksesta kuin se olisi maailman ensimmäinen, suljet itsesi työhuoneeseen ja unohdat syödä. Sinun ympärillesi syntyy asioita, joita ei ollut olemassa ennen sinua — kyliä, projekteja, teorioita, sotkuja.",
    strengths: ["Mielikuvitus", "Rohkeus aloittaa", "Ehtymätön uteliaisuus"],
    shadow:
      "Innostus vie kauemmas kuin kestät. Kun kukaan ei enää seuraa perässä, jäät yksin sen kanssa mitä keksit.",
  },
  {
    id: "ursula",
    name: "Úrsula Iguarán",
    epithet: "Suvun selkäranka",
    monogram: "ÚI",
    summary:
      "Kun kaikki muut näkevät näkyjä, sinä avaat ikkunat ja laitat ruoan tulelle. Sinä olet se, jonka varassa talo pysyy pystyssä vuosikymmenestä toiseen — et siksi että haluaisit valtaa, vaan siksi että joku on tehtävä se. Näet ihmiset sellaisina kuin he ovat, etkä silti lakkaa rakastamasta heitä.",
    strengths: ["Käytännöllisyys", "Sitkeys", "Muisti pitkälle taaksepäin"],
    shadow:
      "Kannat kaikkien taakat etkä myönnä väsymystäsi kenellekään. Salaat oman heikkoutesi viimeiseen asti.",
  },
  {
    id: "aureliano",
    name: "Eversti Aureliano Buendía",
    epithet: "Yksinäinen sotilas",
    monogram: "AB",
    summary:
      "Sinä aavistat asiat ennen kuin ne tapahtuvat, ja vaikenet niistä. Kun jokin on väärin, lähdet liikkeelle etkä katso taakse — vaikka tietäisit jo lähtiessäsi, miten käy. Kun kaikki on ohi, palaat pöydän ääreen ja teet käsilläsi jotain pientä ja tarkkaa, yhä uudelleen, koska se on ainoa asia joka pysyy hallinnassa.",
    strengths: ["Periaatteellisuus", "Kylmä pää kriisissä", "Vaisto"],
    shadow:
      "Vedät ympärillesi kolmen metrin ympyrän, jonka sisään kukaan ei pääse. Lopulta huomaat, ettet muista miten sieltä tullaan ulos.",
  },
  {
    id: "jose-arcadio",
    name: "José Arcadio",
    epithet: "Maailmalle karannut",
    monogram: "JA",
    summary:
      "Sinä otat maailman kiinni ruumiillasi, et ajatuksillasi. Lähdet yöllä ilman viestiä, palaat vuosien päästä tarinat ihon alla ja tilaa vievänä. Et selitä itseäsi, koska et koe olevasi kenellekään selitystä velkaa — ja jostain syystä ihmiset antavat sen sinulle anteeksi.",
    strengths: ["Peloton", "Elinvoima", "Läsnäolo joka täyttää huoneen"],
    shadow:
      "Otat ensin ja mietit sitten. Jälkesi jää ihmisiä, jotka jäivät odottamaan sinua turhaan.",
  },
  {
    id: "amaranta",
    name: "Amaranta",
    epithet: "Katkera kutoja",
    monogram: "AM",
    summary:
      "Sinä osaat rakastaa, mutta et anna itsesi. Kun se, mitä olet odottanut vuosia, vihdoin seisoo edessäsi, käännyt pois — ja jäät sitten suremaan sitä loppuelämäksesi. Sinulla on tarkka muisti kaikesta, mitä sinulle on tehty, ja sinä työstät sitä käsilläsi hiljaa, päivä toisensa jälkeen.",
    strengths: ["Uskollisuus", "Kärsivällisyys", "Rehellisyys itselle"],
    shadow:
      "Ylpeys naamioituu suojaksi. Kudot käärinliinaa, jonka purat joka ilta, ettei mikään koskaan tulisi valmiiksi.",
  },
  {
    id: "rebeca",
    name: "Rebeca",
    epithet: "Multaa syönyt",
    monogram: "RB",
    summary:
      "Sinä tulit muualta ja toit mukanasi jotain, mitä muut eivät ymmärrä. Kun on paha olla, teet asioita joita et osaa selittää kenellekään. Sinä rakastat rajusti ja kokonaan, ja kun se loppuu, suljet oven, lukitset sen ja opettelet elämään yksin talossa, jonka annat kasvaa umpeen.",
    strengths: ["Intohimo", "Selviytymiskyky", "Ei teeskentele"],
    shadow:
      "Vetäydyt niin täydellisesti, että ihmiset lakkaavat kysymästä perääsi. Yksinäisyydestä tulee tapa, ei valinta.",
  },
  {
    id: "remedios",
    name: "Kaunis Remedios",
    epithet: "Maailman ulkopuolinen",
    monogram: "KR",
    summary:
      "Sinä et yksinkertaisesti ole kiinnostunut siitä, mitä muut pitävät tärkeänä. Säännöt, säädyllisyys, kilpailu, maine — ne menevät ohitsesi kuin toisella kielellä puhuttu uutinen. Ihmiset lukevat sinuun syvällisyyttä tai julmuutta, vaikka olet vain täysin ja häiritsevän suoraviivainen.",
    strengths: ["Vapaus muiden mielipiteistä", "Suoruus", "Aito läsnäolo"],
    shadow:
      "Et huomaa mitä ympärilläsi tapahtuu ihmisille. Jonain päivänä lähdet kesken lakanoiden ripustamisen, etkä katso alas.",
  },
  {
    id: "aureliano-segundo",
    name: "Aureliano Segundo",
    epithet: "Juhlien kuningas",
    monogram: "A2",
    summary:
      "Missä sinä olet, siellä on ruokaa, ääntä ja liikaa ihmisiä. Sinä uskot että elämä on tarkoitettu käytettäväksi, ei säästettäväksi, ja kun onni käy, jaat sen ympärillesi kunnes sitä ei enää ole. Sinulla on kyky saada muut tuntemaan olonsa tervetulleiksi kahdessa minuutissa.",
    strengths: ["Anteliaisuus", "Elämänilo", "Ihmiset rakastavat sinua"],
    shadow:
      "Juhla peittää alleen kysymyksen, jota et halua kysyä itseltäsi. Kun musiikki loppuu, huone on hiljainen.",
  },
  {
    id: "fernanda",
    name: "Fernanda del Carpio",
    epithet: "Sääntöjen vartija",
    monogram: "FC",
    summary:
      "Sinut kasvatettiin uskomaan, että on olemassa oikea tapa tehdä asiat, ja sinä puolustat sitä tapaa vaikka talo palaisi ympäriltä. Sinulla on järjestys, aikataulu ja arvokkuus — ja niiden takana kaipaus maailmaan, joka ehkä ei koskaan ollut olemassa sellaisena kuin muistat sen.",
    strengths: ["Kuri", "Periksiantamattomuus", "Uskollisuus arvoille"],
    shadow:
      "Muoto syö sisällön. Kirjoitat kirjeitä osoitteeseen, jota ei ole, ja kutsut sitä velvollisuudeksi.",
  },
  {
    id: "pilar-ternera",
    name: "Pilar Ternera",
    epithet: "Korttien lukija",
    monogram: "PT",
    summary:
      "Sinä näet ihmisten läpi ilman että sinun tarvitsee tuomita heitä. Ihmiset kertovat sinulle asioita, joita eivät kerro kenellekään muulle, koska sinä naurat niille oikealla tavalla. Elät pitkään, muistat kaikki ja tiedät että sama tarina toistuu sukupolvesta toiseen — mutta annat jokaisen elää sen itse.",
    strengths: ["Ihmistuntemus", "Lämpö ilman tuomiota", "Huumori"],
    shadow:
      "Autat kaikkia muita järjestämään elämänsä. Omasi jää aina huomiseksi.",
  },
  {
    id: "melquiades",
    name: "Melquíades",
    epithet: "Tietäjä ja kulkija",
    monogram: "MQ",
    summary:
      "Sinä tuot ihmisille asioita, joita he eivät osanneet kaivata: uuden ajatuksen, oudon laitteen, kysymyksen joka ei jätä rauhaan. Liikut sisään ja ulos muiden elämästä etkä kuulu oikeastaan mihinkään paikkaan. Kirjoitat muistiin sen, mitä muut ehtivät jo unohtaa — vaikka kukaan ei vielä osaa lukea sitä.",
    strengths: ["Tieto", "Näkökulman laajuus", "Kyky nähdä pitkälle"],
    shadow:
      "Tiedät liikaa etkä kuulu kenellekään. Sinun kotisi on huone, johon muut menevät vain kun tarvitsevat jotain.",
  },
  {
    id: "aureliano-babilonia",
    name: "Aureliano Babilonia",
    epithet: "Viimeinen lukija",
    monogram: "AB",
    summary:
      "Sinä opit maailman kirjoista ennen kuin näit sitä. Sinulla on hämmästyttävä kyky yhdistää asioita, joita kukaan muu ei pane merkille, ja kun tartut kysymykseen, et päästä irti ennen kuin se on ratkaistu. Lopulta sinä olet se, joka tajuaa mistä koko tarinassa oli kyse — usein juuri vähän liian myöhään.",
    strengths: ["Älyllinen sitkeys", "Hahmontunnistus", "Syvä keskittyminen"],
    shadow:
      "Ymmärrys ei pelasta sinua. Luet oman elämäsi kuin tekstiä, ja huomaat olevasi siinä vain sivuhenkilö.",
  },
]

export const questions: Question[] = [
  {
    id: 1,
    question: "Kylään saapuu kaupustelija ja hänellä on esine, jollaista kukaan ei ole ennen nähnyt. Mitä teet?",
    options: [
      {
        text: "Ostan sen heti, vaikka rahat menisivät, ja suljen itseni huoneeseen selvittämään miten se toimii.",
        weights: { "jose-arcadio-buendia": 3, "melquiades": 1 },
      },
      {
        text: "Kysyn paljonko se maksoi ja mitä hyötyä siitä muka on.",
        weights: { "ursula": 3, "fernanda": 1 },
      },
      {
        text: "En oikeastaan huomaa koko juttua.",
        weights: { "remedios": 3, "aureliano": 1 },
      },
      {
        text: "Järjestän sen ympärille illanvieton ja kutsun koko kylän katsomaan.",
        weights: { "aureliano-segundo": 3, "pilar-ternera": 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Rakkaus. Mikä lause on lähinnä sinua?",
    options: [
      {
        text: "Se on ainoa asia, jota en ole koskaan oppinut.",
        weights: { "aureliano": 3, "amaranta": 1 },
      },
      {
        text: "Odotin sitä vuosia ja käännyin pois juuri kun se tuli.",
        weights: { "amaranta": 3, "rebeca": 1 },
      },
      {
        text: "Otan sen heti, kokonaan ja koko ruumiillani.",
        weights: { "jose-arcadio": 3, "aureliano-segundo": 1 },
      },
      {
        text: "Rakkaus on ennen kaikkea velvollisuus ja sopivuus, ei tunne.",
        weights: { "fernanda": 3, "ursula": 1 },
      },
    ],
  },
  {
    id: 3,
    question: "Talo on täynnä ihmisiä, kaikki puhuvat päälle eikä kukaan tiedä mitä pitäisi tehdä. Mitä teet?",
    options: [
      {
        text: "Laitat kaikki töihin ja avaat ikkunat.",
        weights: { "ursula": 3 },
      },
      {
        text: "Vetäydyt omaan huoneeseesi ja suljet oven.",
        weights: { "amaranta": 2, "rebeca": 2, "aureliano": 1 },
      },
      {
        text: "Alat kertoa tarinaa, ja huone hiljenee.",
        weights: { "melquiades": 2, "pilar-ternera": 2 },
      },
      {
        text: "Tilaat lisää ruokaa ja viiniä.",
        weights: { "aureliano-segundo": 3 },
      },
    ],
  },
  {
    id: 4,
    question: "Mikä pelottaa sinua eniten?",
    options: [
      {
        text: "Unohtaminen — että kaikki katoaa eikä kukaan enää muista.",
        weights: { "melquiades": 2, "aureliano-babilonia": 2, "ursula": 1 },
      },
      {
        text: "Yksin jääminen.",
        weights: { "amaranta": 2, "rebeca": 1, "jose-arcadio-buendia": 1 },
      },
      {
        text: "Häpeä — se, mitä muut ajattelevat minusta.",
        weights: { "fernanda": 3 },
      },
      {
        text: "Ei mikään. En oikeastaan pelkää.",
        weights: { "remedios": 2, "jose-arcadio": 2 },
      },
    ],
  },
  {
    id: 5,
    question: "Alkaa sataa, eikä se lopu neljään vuoteen. Miten vietät sen ajan?",
    options: [
      {
        text: "Luen kaiken mitä talosta löytyy ja kirjoitan muistiinpanoja.",
        weights: { "aureliano-babilonia": 3, "melquiades": 1 },
      },
      {
        text: "Teen käsilläni samaa pientä asiaa yhä uudelleen, aamusta iltaan.",
        weights: { "aureliano": 3, "amaranta": 1 },
      },
      {
        text: "Makaan riippumatossa ja odotan että se menee ohi.",
        weights: { "aureliano-segundo": 2, "jose-arcadio": 1 },
      },
      {
        text: "Korjaan kattoa ja seiniä, ettei koko talo hajoa käsiin.",
        weights: { "ursula": 3 },
      },
    ],
  },
  {
    id: 6,
    question: "Joku ehdottaa, että lähdet pois Macondosta etkä palaa. Mitä teet?",
    options: [
      {
        text: "Lähden samana yönä. En jätä viestiä.",
        weights: { "jose-arcadio": 3 },
      },
      {
        text: "En lähde. Täällä ovat minun kuolleeni.",
        weights: { "ursula": 2, "amaranta": 1, "fernanda": 1, "rebeca": 1 },
      },
      {
        text: "Lähden, mutta palaan aina ennemmin tai myöhemmin takaisin.",
        weights: { "melquiades": 2, "aureliano": 1 },
      },
      {
        text: "Kysyn ensin tarkasti, mikä siellä on toisin kuin täällä.",
        weights: { "aureliano-babilonia": 2, "jose-arcadio-buendia": 1 },
      },
    ],
  },
  {
    id: 7,
    question: "Miten teet päätöksiä?",
    options: [
      {
        text: "Aavistan lopputuloksen etukäteen ja toimin sen mukaan.",
        weights: { "aureliano": 3, "pilar-ternera": 1 },
      },
      {
        text: "Luotan merkkeihin, korttiin, vaistoon — johonkin mitä en osaa perustella.",
        weights: { "pilar-ternera": 3 },
      },
      {
        text: "On olemassa oikea tapa tehdä asiat, ja minä teen sen niin.",
        weights: { "fernanda": 3 },
      },
      {
        text: "Kokeilen ja katson mitä tapahtuu.",
        weights: { "jose-arcadio-buendia": 2, "aureliano-segundo": 1 },
      },
    ],
  },
  {
    id: 8,
    question: "Sinulle annetaan valtaa. Mitä teet sillä?",
    options: [
      {
        text: "Aloitan sodan, jonka tiedän jo aloittaessani häviäväni.",
        weights: { "aureliano": 3 },
      },
      {
        text: "Jaan sen pois — juhlissa, lahjoina, kaikille jotka sattuvat paikalle.",
        weights: { "aureliano-segundo": 3 },
      },
      {
        text: "En halua sitä. Valta on likaista ja tylsää.",
        weights: { "remedios": 2, "amaranta": 1, "aureliano-babilonia": 1 },
      },
      {
        text: "Käytän sen suvun turvaamiseen, hiljaa ja tehokkaasti.",
        weights: { "ursula": 3, "fernanda": 1 },
      },
    ],
  },
  {
    id: 9,
    question: "Mitä kätesi tekevät, kun mietit jotain vaikeaa?",
    options: [
      {
        text: "Rakentavat pieniä tarkkoja esineitä, jotka puran heti uudestaan.",
        weights: { "aureliano": 3 },
      },
      {
        text: "Ompelevat tai kutovat jotain, mikä ei tule koskaan valmiiksi.",
        weights: { "amaranta": 3 },
      },
      {
        text: "Piirtävät karttoja, kaavioita ja laskelmia.",
        weights: { "jose-arcadio-buendia": 3, "melquiades": 1 },
      },
      {
        text: "Sekoittavat korttipakkaa.",
        weights: { "pilar-ternera": 3 },
      },
    ],
  },
  {
    id: 10,
    question: "Mikä on suhteesi ruokaan ja nautintoon?",
    options: [
      {
        text: "Syön enemmän kuin kukaan muu ja nauran sille.",
        weights: { "aureliano-segundo": 3, "jose-arcadio": 1 },
      },
      {
        text: "Kaipaan välillä jotain outoa, mitä en osaa selittää edes itselleni.",
        weights: { "rebeca": 3 },
      },
      {
        text: "Syön kohtuudella, säädyllisesti ja oikeaan aikaan.",
        weights: { "fernanda": 3, "ursula": 1 },
      },
      {
        text: "Unohdan syödä kokonaan, kun olen kiinni jossakin.",
        weights: { "aureliano-babilonia": 2, "jose-arcadio-buendia": 2 },
      },
    ],
  },
  {
    id: 11,
    question: "Miten muut kuvailisivat sinua selkäsi takana?",
    options: [
      {
        text: "”Hän ei väsy koskaan.”",
        weights: { "ursula": 3 },
      },
      {
        text: "”Kukaan ei tiedä, mitä hän oikeasti ajattelee.”",
        weights: { "aureliano": 3, "remedios": 1 },
      },
      {
        text: "”Hänen kanssaan on hauskaa, mutta hän katoaa aina.”",
        weights: { "jose-arcadio": 2, "aureliano-segundo": 2 },
      },
      {
        text: "”Hän on jotenkin liian kaunis ja liian outo tähän maailmaan.”",
        weights: { "remedios": 3 },
      },
    ],
  },
  {
    id: 12,
    question: "Miten muistat menneen?",
    options: [
      {
        text: "Liian tarkasti. Kaikki on läsnä yhtä aikaa.",
        weights: { "melquiades": 2, "aureliano-babilonia": 2 },
      },
      {
        text: "Muistan loukkaukset. Jokaisen.",
        weights: { "amaranta": 3, "rebeca": 1 },
      },
      {
        text: "En juuri muista, ja se on helpotus.",
        weights: { "remedios": 2, "jose-arcadio": 1 },
      },
      {
        text: "Muistan ihmiset, en tapahtumia.",
        weights: { "pilar-ternera": 2, "ursula": 1 },
      },
    ],
  },
  {
    id: 13,
    question: "Millainen on sinun yksinäisyytesi muoto?",
    options: [
      {
        text: "Työhuone, johon kukaan ei saa tulla sisään.",
        weights: { "jose-arcadio-buendia": 2, "aureliano": 2 },
      },
      {
        text: "Työ käsissä, jota en aio koskaan saada valmiiksi.",
        weights: { "amaranta": 3 },
      },
      {
        text: "Väkijoukon keskellä, kesken juhlien.",
        weights: { "aureliano-segundo": 2, "pilar-ternera": 1 },
      },
      {
        text: "Suljettu talo, lukitut ovet ja hiljaisuus.",
        weights: { "rebeca": 3, "fernanda": 2 },
      },
    ],
  },
  {
    id: 14,
    question: "Joku, jota rakastit, kääntyy pois sinusta. Mitä teet?",
    options: [
      {
        text: "Suljen oven enkä puhu enää kenellekään siitä.",
        weights: { "rebeca": 3, "fernanda": 1 },
      },
      {
        text: "En anna anteeksi. En koskaan.",
        weights: { "amaranta": 3 },
      },
      {
        text: "Lähden sotaan tai matkalle — kunhan pääsen pois.",
        weights: { "aureliano": 2, "jose-arcadio": 2 },
      },
      {
        text: "Etsin seuraa jo saman viikon aikana.",
        weights: { "pilar-ternera": 2, "aureliano-segundo": 2 },
      },
    ],
  },
  {
    id: 15,
    question: "Mitä haluat jättää jälkeesi?",
    options: [
      {
        text: "Käsikirjoituksen, jota kukaan ei vielä osaa lukea.",
        weights: { "melquiades": 3, "aureliano-babilonia": 1 },
      },
      {
        text: "Talon, jossa on elämää vielä pitkään minun jälkeeni.",
        weights: { "ursula": 3 },
      },
      {
        text: "Sukunimen ja kunnollisuuden, joka kestää katsoa.",
        weights: { "fernanda": 3 },
      },
      {
        text: "Tarinan, jota kerrotaan vielä kauan väärin.",
        weights: { "jose-arcadio": 2, "aureliano-segundo": 1, "pilar-ternera": 1 },
      },
    ],
  },
  {
    id: 16,
    question: "Onko sinulla...? ༼ ͡° ͜ʖ ͡°༽",
    options: [
      {
        text: "...mitä?",
        weights: { "aureliano-segundo": 1, "aureliano-babilonia": 1, "ursula": 3 },
      },
      {
        text: "On.",
        weights: { "jose-arcadio-buendia": 3, "jose-arcadio": 3, "pilar-ternera": 2 },
      },
      {
        text: "Totta kai on.",
        weights: { "jose-arcadio-buendia": 3, "jose-arcadio": 3, "pilar-ternera": 2 },
      },
      {
        text: "On ༼ ͡° ͜ʖ ͡°༽",
        weights: { "jose-arcadio": 10 },
      },
    ],
  },
]

export type Result = {
  character: Character
  score: number
  /** Osuvuus 0–1: hahmon pisteet suhteessa hahmon omaan maksimiin. Ratkaisee järjestyksen. */
  match: number
  /** Näytettävä prosentti suhteessa voittajaan: voittaja on aina 100. */
  percent: number
}

// Jokaisen hahmon teoreettinen maksimipistemäärä. Hahmoilla on eri määrä
// vastausvaihtoehtoja, joten raakapisteet suosisivat "leveitä" hahmoja kuten
// Úrsulaa. Siksi tulos lasketaan osuutena hahmon omasta maksimista.
const maxScores = new Map<CharacterId, number>(
  characters.map((c) => [
    c.id,
    questions.reduce(
      (sum, q) => sum + Math.max(...q.options.map((o) => o.weights[c.id] ?? 0)),
      0
    ),
  ])
)

export function scoreAnswers(answers: (number | null)[]): Result[] {
  const totals = new Map<CharacterId, number>(characters.map((c) => [c.id, 0]))

  questions.forEach((question, i) => {
    const choice = answers[i]
    if (choice == null) return
    const option = question.options[choice]
    if (!option) return
    for (const [id, weight] of Object.entries(option.weights)) {
      const key = id as CharacterId
      totals.set(key, (totals.get(key) ?? 0) + (weight ?? 0))
    }
  })

  const matches = new Map<CharacterId, number>(
    characters.map((c) => [c.id, (totals.get(c.id) ?? 0) / (maxScores.get(c.id) ?? 1)])
  )
  // Prosentit näytetään suhteessa voittajaan, jotta palkit kertovat "kuinka
  // lähellä" kukin hahmo on — ei absoluuttista osumaprosenttia.
  const bestMatch = Math.max(0.0001, ...matches.values())

  return characters
    .map((character) => {
      const match = matches.get(character.id) ?? 0
      return {
        character,
        score: totals.get(character.id) ?? 0,
        match,
        percent: Math.round((match / bestMatch) * 100),
      }
    })
    .sort((a, b) => {
      if (b.match !== a.match) return b.match - a.match
      // Tasatilanteessa harvinaisempi hahmo (pienempi maksimi) voittaa.
      const maxA = maxScores.get(a.character.id) ?? 0
      const maxB = maxScores.get(b.character.id) ?? 0
      if (maxA !== maxB) return maxA - maxB
      return a.character.name.localeCompare(b.character.name, "fi")
    })
}
