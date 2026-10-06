import { CaseStudyItem } from '../types';

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-dentascale',
    client: 'Boutique Fogászati Klinika Hálózat',
    industry: 'Egészségügy & Magánrendelés',
    challenge: 'A rendelőben a napi 60+ telefonhívás miatt a recepciósok túlterheltek voltak. Havi 18-22 pácienshívás elveszett csúcsidőben, a nem megjelenő páciensek aránya pedig elérte a 14%-ot.',
    solution: 'A Dentascale AI recepciós és automatizációs rendszerének bevezetése. 24/7 autonóm híváskezelés, közvetlen naptárintegráció és intelligens SMS emlékeztető-lánc.',
    results: [
      { metric: '0', label: 'Elveszített bejövő pácienshívás' },
      { metric: '+38%', label: 'Konzultációs foglalások aránya 90 nap alatt' },
      { metric: '2.1M Ft', label: 'Megtakarított havi kapacitásérték' }
    ],
    quote: {
      text: 'A Kairosz által szállított rendszer az első hónapban 43 olyan pácienst rögzített hétvégén és este, akik korábban a versenytársakhoz mentek volna.',
      author: 'Dr. Kovács Márton',
      role: 'Vezető főorvos & Tulajdonos'
    }
  },
  {
    id: 'case-logistics',
    client: 'Nexis Ipari Gyártó & Kereskedő Kft.',
    industry: 'Gyártás & B2B Kereskedelem',
    challenge: 'A rendeléskezelés 5 különböző Excel-táblázatban és elavult számlázóban zajlott. Az ajánlatkészítés 2-3 munkanapot vett igénybe, ami vevővesztést okozott.',
    solution: 'Egyedi vállalatirányítási (ERP) hub és ajánlatkészítő AI ügynök fejlesztése, amely a specifikációból 90 másodperc alatt kalkulál gyártási árat és küld PDF ajánlatot.',
    results: [
      { metric: '90 mp', label: 'Ajánlatkészítési idő 3 nap helyett' },
      { metric: '+64%', label: 'Ajánlat-elfogadási konverziós ráta' },
      { metric: '28 óra/hét', label: 'Felszabadított mérnöki munkaidő' }
    ],
    quote: {
      text: 'Nem egy nehezen betanulható monstrumot kaptunk, hanem pontosan azt a szoftvert, amire a csapatunknak szüksége volt. A reakcióidőnk lenyomta a piacot.',
      author: 'Balogh Zoltán',
      role: 'Operációs Igazgató'
    }
  },
  {
    id: 'case-lifestyle',
    client: 'Vanguard Luxury Bútor & Belsőépítészet',
    industry: 'Prémium Kereskedelem & Design',
    challenge: 'A prémium kollekció fotózása stúdióbérléssel és helyszíni stábbal darabonként hetekig tartott és milliókba került. A régi weboldal nem tükrözte a luxus minőséget.',
    solution: 'Cinesites filmszerű webes élmény készítése + Universy hibrid videógyártás: helyszíni filmes átadókamerázás vegyítve generatív AI virtuális szobaenteriőrökkel.',
    results: [
      { metric: '4.2x', label: 'Prémium megkeresések száma' },
      { metric: '-68%', label: 'Fotózási és produkciós költségcsökkentés' },
      { metric: '6.1 perc', label: 'Átlagos weboldal látogatási időtartam' }
    ],
    quote: {
      text: 'A weboldalunk megtekintése után az ügyfelek már eleve bizalommal és eldöntött vásárlási szándékkal hívnak fel minket.',
      author: 'Varga Eszter',
      role: 'Kreatív Igazgató'
    }
  }
];

export const FAQS = [
  {
    question: 'Kinek ajánlott a Kairosz vállalati korszerűsítési szolgáltatása?',
    answer:
      'Elsősorban olyan növekedésben lévő hazai és nemzetközi kis- és középvállalkozásoknak, valamint vállalatoknak, ahol a növekedést gátolja a manuális adminisztráció, az elavult vagy széteső szoftverkörnyezet, illetve a szakképzett munkaerő hiánya. Bármely szektorban (szolgáltatás, gyártás, egészségügy, kereskedelem) azonnali megtérülést hoz.'
  },
  {
    question: 'Mi a különbség egy dobozos szoftver és az Önök személyre szabott megoldása között?',
    answer:
      'A dobozos szoftverek (SaaS) arra kényszerítik az Ön cégét, hogy megváltoztassa a bevált folyamatait a szoftver korlátai miatt, miközben folyamatosan emelkedő havidíjakat számláznak felhasználónként. Mi az Ön meglévő üzleti logikájára szabjuk a rendszert, nincs felesleges funkció, nincs felhasználói korlát, és a rendszer az Ön cégének saját szellemi tulajdonává válik.'
  },
  {
    question: 'Hogyan működnek a gyakorlatban az AI munkatársak / AI ügynökök?',
    answer:
      'Az AI ügynök nem egy általános csevegőbot. Olyan dedikált digitális kolléga, amely hozzáfér az Ön belső rendszereihez (pl. CRM, levelezés, naptár, készletnyilvántartó). Képes egy beérkező e-mailből kinyerni az adatokat, megírni az ajánlatot, rögzíteni az ügyfelet a vállalatirányítási rendszerben, és feladatot delegálni az illetékes emberi kollégának.'
  },
  {
    question: 'Mennyi időt vesz igénybe egy korszerűsítési projekt megvalósítása?',
    answer:
      'Az első fázis egy 45 perces mélyreható folyamataudit. Ezután 10-14 munkanapon belül működő, tesztelhető prototípust mutatunk be a kulcsfontosságú szűk keresztmetszetre. A teljes rendszer élesítése és a csapat betanítása a komplexitástól függően tipikusan 3–6 hetet vesz igénybe.'
  },
  {
    question: 'Miért van a Kairosz alatt több különálló cég (Dentascale, Cinesites, Studio)?',
    answer:
      'A Kairosz az anyavállalat és stratégiai szoftverfejlesztő központ. Az ökoszisztémánkban működő dedikált márkák bizonyítják, hogy képesek vagyunk egy-egy vertikumot (mint a fogászat a Dentascale-lel, a filmes weboldalak a Cinesites-szel vagy a hibrid videómarketing az Universy-vel) mélyen megérteni és piacvezető szintre emelni.'
  },
  {
    question: 'Hogyan indul el az együttműködés?',
    answer:
      'Egy díjmentes, 30 perces Vállalati Korszerűsítési Konzultációval és Audittal indulunk. Átvilágítjuk a jelenlegi munkafolyamatokat, feltárjuk a legdrágább manuális szűk keresztmetszeteket, és konkrét ROI becslést adunk – bármilyen kötelezettség nélkül.'
  }
];
