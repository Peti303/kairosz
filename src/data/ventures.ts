import { VentureItem } from '../types';

export const VENTURES: VentureItem[] = [
  {
    id: 'dentascale',
    name: 'Dentascale',
    category: 'Egészségügyi Technológia & Automatizáció',
    tagline: 'Fogorvosi recepció és páciensút teljes körű automatizálása',
    description:
      'A fogorvosi rendelők recepcióján a telefonhívások kezelése és az időpont-egyeztetés gyakran túlterheli a személyzetet. A Dentascale egy dedikált, személyre szabott szoftver és automatizációs rendszer, amely 24/7 intelligens recepciósként fogadja a bejövő hívásokat, szinkronizálja a kezelőorvosok naptárát, automatikus SMS emlékeztetőket küld, és visszahívja az elveszett érdeklődőket.',
    features: [
      '24/7 AI-vezérelt recepció és naptárkezelés',
      'Automatikus SMS megerősítés & emlékeztetők',
      'Páciens-visszahívó és lemondás-kezelő algoritmus',
      'Közvetlen integráció a meglévő fogorvosi szoftverekkel'
    ],
    metrics: [
      { label: 'Elveszített hívások aránya', value: '0%' },
      { label: 'Növekedés a lefoglalt időpontokban', value: '+34%' },
      { label: 'Recepciós adminisztrációs idő', value: '-65%' }
    ],
    image: '/src/assets/images/venture_dentascale_1791025018573.jpg',
    altText: 'Dentascale modern fogorvosi recepció és automatizációs felület',
    linkText: 'Dentascale esettanulmány megtekintése'
  },
  {
    id: 'cinesites',
    name: 'Cinesites',
    category: 'Cinematikus Digitális Élmények & Web',
    tagline: 'Filmszerű, animációkban gazdag presztízs weboldalak',
    description:
      'Amikor egy vállalkozásnak nem elég egy hagyományos weboldal: a Cinesites keretében olyan mélyen animált, cinematikus digitális élményeket építünk, amelyek szinte már filmszerű hatást keltenek. Nemzetközi szintű design, 60 FPS mikro-interakciók és magával ragadó vizuális történetmesélés a prémium kategóriás márkáknak.',
    features: [
      'Awwwards és FWA szintű interaktív webfejlesztés',
      'Filmszerű hangulat, egyedi tipográfia és dinamikus térhatás',
      'Webes hardveres gyorsítás és optimalizált sebesség',
      'Márkaidentitást formáló digitális presztízs felületek'
    ],
    metrics: [
      { label: 'Átlagos oldalon töltött idő', value: '4.8 perc' },
      { label: 'Márkaemlékezet növekedés', value: '3.2x' },
      { label: 'Vizuális presztízs hatás', value: '100%' }
    ],
    image: '/src/assets/images/venture_cinesites_1791025031652.jpg',
    altText: 'Cinesites filmszerű digitális élmény és design stúdió',
    linkText: 'Cinesites bemutató portfólió'
  },
  {
    id: 'universy',
    name: 'Universy',
    category: 'Hibrid Videógyártás & Generatív AI Reklámok',
    tagline: 'Filmes helyszíni kamerás forgatás összeolvasztva generatív AI tartalomgyártással',
    description:
      'A digitális figyelem megragadásának új modellje: az Universy keretében ötvözzük a valós, professzionális helyszíni videógyártást (pl. telephelyi kamerás, softboxos és gimbálos forgatások a cégvezetővel) a legmodernebb generatív AI kép- és videókészítéssel. Kérésre készítünk helyszíni social media kampányokat, illetve hiperrealisztikus AI reklámfilmeket, virtuális avatárokat és AI-alapú stúdió termékfotózást.',
    features: [
      'Helyszíni telephelyi forgatás: softboxok, derítőlap, gimbal és 4K kamera',
      'Generatív AI reklámvideók és koncepciófilmek',
      'AI-vezérelt virtuális termékfotózás és fotórealisztikus környezetek',
      'Teljes social media marketing stratégia és tartalomelosztás'
    ],
    metrics: [
      { label: 'Gyártási költségcsökkenés AI-jal', value: '-52%' },
      { label: 'Közösségi média átkattintási ráta', value: '+180%' },
      { label: 'Átfutási idő hetek helyett', value: '48 óra' }
    ],
    image: '/src/assets/images/universy_onsite_production_1791284043612.jpg',
    altText: 'Universy helyszíni forgatás kamerával, gimbállal, derítőlappal és softboxszal építőipari környezetben',
    linkText: 'Universy & AI Kampányok felfedezése'
  }
];
