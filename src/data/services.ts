import { ServiceItem } from '../types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    index: '01',
    title: 'Személyre Szabott Szoftverek',
    subtitle: 'Vállalati célszoftverek kompromisszummentes felépítése',
    description:
      'A dobozos szoftverek havidíjai és merev korlátai helyett olyan dedikált platformokat és belső rendszereket fejlesztünk, amelyek 100%-ban az Ön vállalkozásának egyedi munkafolyamataihoz és logikájához igazodnak.',
    deliverables: [
      'Egyedi webes és felhőalapú belső céges rendszerek',
      'Ügyfélportálok és önkiszolgáló felületek',
      'API integrációk és meglévő adatbázisok összekötése',
      'Nagy biztonságú, skálázható architektúra'
    ],
    businessImpact: 'Megszünteti a harmadik féltől függő szoftverkorlátokat és 40%-kal csökkenti a havi SaaS licencköltségeket.',
    iconName: 'Code',
    badgeText: 'Bespoke Software'
  },
  {
    id: 'custom-automations',
    index: '02',
    title: 'Személyre Szabott Automatizmusok',
    subtitle: 'Keresztplatformos munkafolyamat- és adatfolyam-automatizálás',
    description:
      'Felszámoljuk a manuális adatmásolást, a csúszó jóváhagyásokat és az emberi hibákból eredő veszteségeket. Integráljuk meglévő CRM-jét, számlázóját, naptárát és kommunikációs csatornáit egy zökkenőmentes ökoszisztémába.',
    deliverables: [
      'Lead-feldolgozás és azonnali ajánlatkiküldés automatizálása',
      'Számlázási, naptár- és dokumentum-szinkronizáció',
      'Valós idejű hibajelzések és vezetői státuszfrissítések',
      'Emberi beavatkozást nem igénylő jóváhagyási láncok'
    ],
    businessImpact: 'Átlagosan heti 18–25 órát szabadít fel munkatársonként az ismétlődő adminisztratív terhek alól.',
    iconName: 'Workflow',
    badgeText: 'Workflow Engines'
  },
  {
    id: 'ai-agents',
    index: '03',
    title: 'AI Munkatársak & AI Ügynökök',
    subtitle: 'Önálló döntéshozatalra képes digitális kollégák a cégében',
    description:
      'Nem egyszerű chatbotokat építünk, hanem autonóm AI ügynököket, amelyek a vállalkozás szabályrendszere szerint olvasnak, értelmeznek, rendszereznek és műveleteket hajtanak végre a meglévő szoftvereiben – a nap 24 órájában, azonnali válaszidővel.',
    deliverables: [
      '24/7 autonóm ügyfélszolgálati és minősítő AI ágensek',
      'Dokumentum- és szerződésértelmező AI folyamatok',
      'Belső céges tudásbázisra épített asszisztensek a csapatnak',
      'Többlépcsős AI döntési fák és automatikus feladatkiosztás'
    ],
    businessImpact: 'Azonnali (<30 mp) ügyfélreakció-idő és 0 kiesett bejövő üzleti megkeresés még munkaidőn kívül is.',
    iconName: 'Bot',
    badgeText: 'Autonomous Agents'
  },
  {
    id: 'enterprise-erp',
    index: '04',
    title: 'Vállalatirányítási Rendszerek (ERP)',
    subtitle: 'Valós idejű központi operációs hub vezetőknek',
    description:
      'Modern, letisztult vállalatirányítási és operációs központok, ahol a pénzügyek, a készletnyilvántartás, a projektek és a csapatteljesítmény egyetlen átlátható, valós idejű vezetői felületen találkozik.',
    deliverables: [
      'Egyedi ERP architektúra a cég méretéhez szabva',
      'Készlet- és projektmenedzsment modulok',
      'Automatikus pénzügyi és cash flow előrejelzések',
      'Szerepkör-alapú jogosultságkezelés és auditnapló'
    ],
    businessImpact: '100%-os átláthatóság a cég teljes működéséről, késleltetett adatok és információs silók nélkül.',
    iconName: 'LayoutGrid',
    badgeText: 'Enterprise Operations'
  }
];
