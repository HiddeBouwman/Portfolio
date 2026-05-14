export type ImageItem = { src: string; caption?: string };

export type Project = {
  title: string;
  description: string;
  href: string;
  technologies: string[];
  image?: string;
  slug: string;
  fullDescription: string;
  role: string;
  endDate?: string;
  duration?: string;
  tasks?: string;
  process?: string;
  descriptionImages?: ImageItem[];
  tasksImages?: ImageItem[];
  processImages?: ImageItem[];
};

export const SITE = {
  name: "Hidde Bouwman",
  about: `Ik ben Hidde Bouwman. Ik studeer CMGT op de Hogeschool Rotterdam, waar ik op het moment van schrijven in mijn tweede jaar zit. Hier houd ik mij bezig met mijn interesse voor het creëren van gebruiksvriendelijke applicaties die door iedereen gebruikt kan worden. Naast dat vindt ik het ook leuk om te knutselen aan allerlei andere projecten, zoals foto's, video's en muziek maken en bewerken, maar ook met de handen werken zeg ik zeker geen nee tegen. Buiten dit om houd ik ook heel erg van sporten, eten koken (en eten eten), en reizen. Ik ben ook altijd in voor een praatje, dus als je gewoon een keer wilt kletsen, stuur me dan een berichtje! `,
  projects: [
    {
      title: "StageLink (front-end)",
      description:
        "Front-end voor het StageLink project, wat studenten, bedrijven en coordinatoren verbindt voor het stageproces.",
      href: "https://github.com/TLE-3-Stage-Matching/Front-End-4B",
      technologies: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Zod",
        "Zustand",
        "ShadCN UI",
        "TanStack Router",
        "TanStack Query",
        "TanStack Form",
      ],
      duration: "5 weken",
      endDate: "Maart 2026",
      slug: "stagelink-frontend",
      fullDescription:
        "Met StageLink willen wij studenten, bedrijven en coordinatoren samenbrengen in een gebruiksvriendelijk platform dat het hele stageproces ondersteunt. Mijn rol als front-end developer was om een toegankelijke gebruikersinterface te creëren die naadloos integreert met de van tevoren goed uitgedachte back-end API. ",
      tasks:
        "Dit project is gemaakt met drie front-end developers en een gedeelde back-end. Binnen het team legde ik het grondwerk voor de gebruikersinterface, en implementeerde ik verschillende functies, verdeeld over de drie verschillende rollen binnen het platform.",
      process:
        "We begonnen met ontwerpen, verdiepten in AI-geletterdheid, en hebben een prototype gemaakt in figma. We legden als front-end heel erg de nadruk op WCAG (niveau AA) toegankelijkheid, en een goede user experience. Het koppelen van de API van onze back-end duurde iets langer dan gehoopt, wat kwam doordat we een gigantische casus hadden, en het onszelf zeker ook niet makkelijk maakte. Uiteindelijk hebben we keuzes moeten maken, en hebben we een minimale viable product opgeleverd, waar we nog steeds erg trots op zijn.",
      descriptionImages: [
        {
          src: "/images/Stagelink-Aanbevolen-Stageopdrachten.png",
          caption: "Studenten zien met welke stages zij het beste matchen",
        },
      ],
      tasksImages: [
        {
          src: "/images/Stagelink-Schets.png",
          caption:
            "Een figma schets van het studentenprofiel pagina, gemaakt voordat we begonnen met ontwikkelen",
        },
        {
          src: "/images/Stagelink-Bedrijfsprofiel.png",
          caption: "Het bedrijfsprofiel in een wat vroeger stadium",
        },
      ],
      processImages: [],
      role: "Front-end Developer",
      image: "/images/Stagelink-Home.png",
    },
    {
      title: "Ecoreeks",
      description:
        "Webapp rond feitjes over natuur en biodiversiteit, in opdracht van IO en Natuurmonumenten.",
      href: "https://github.com/HiddeBouwman/TLE2",
      technologies: ["Laravel", "Tailwind CSS", "JavaScript"],
      endDate: "December 2025",
      duration: "5 weken",
      slug: "ecoreeks",
      fullDescription:
        "Wij willen Natuurmonumenten helpen om jongeren van 18 tot 21 jaar de deur uit te krijgen, en met plezier te leren over de natuur. Met mijn rol als Full-stack Developer heb ik met mijn team van vijf een webapplicatie ontwikkeld, waarbij gebruikers iedere dag een weetje krijgen, en hier vervolgens op moeten handelen in de vorm van een vraag of een uitdaging.",
      tasks:
        "Ik heb bijgedragen aan zowel de front-end als back-end van de applicatie, waarbij ik vooral het voortouw nam met alles opzetten, zoals de codebase (waaronder laravel), de figma en planningstools. Ook heb ik het algemene idee voor het ontwerp en vormgeving bepaald van de applicatie. Naast dit heb ik meegeholpen aan het online krijgen van het project op de webserver.",
      process:
        "We begonnen gelijk met het uitwerken van een prototype in Figma, waarbij ik de nadruk heb gelegd dat we veel aandacht moesten besteden aan de flow en UX van de applicatie. Dit prototype hebben we laten zien aan de klant, die het idee wel zagen zitten. Vervolgens hebben we een Laravel back-end opgezet, en een Tailwind CSS front-end, en hebben het prototype uitgewerkt en verbeterd waar wij dat nodig zagen. Na iedere demonstratie van ons product aan de klant hebben wij ook telkens weer verder geitereerd, en ideeën (her)overwogen. Ook hebben we afbeeldingen gegenereerd door kunstmatige intelligentie voor de verandering nuttig in weten te zetten, door dystopische scenario's te schetsen die pasten bij de uitdaging van het dagelijkse feitje. We hebben uiteindelijk een werkend product opgeleverd en gepresenteerd bij IO, waar we trots op zijn.",
      descriptionImages: [],
      tasksImages: [
        {
          src: "/images/Ecoreeks-Reeks.png",
          caption:
            "Figma schets. Mijn idee voor hoe we de reeks konden uitbeelden.",
        },
      ],
      processImages: [
        {
          src: "/images/Ecoreeks-Schets.png",
          caption:
            "Figma schets. Opties wanneer je een juist antwoord in hebt gevuld.",
        },
        {
          src: "/images/Ecoreeks-Feitje-Plaatje.png",
          caption:
            "Een telefoonversie voor wat de eindgebruiker ziet als diegene voor het eerst de applicatie gebruikt.",
        },
        {
          src: "/images/Ecoreeks-Feitje-Feit.png",
          caption:
            "De gebruiker krijgt iedere dag een verschillend feitje te zien. Hier zie je een voorbeeld van zo'n feitje.",
        },
      ],
      role: "Full-stack Developer, Motivator (?)",
      image: "/images/Ecoreeks-Eekhoorn.png",
    },
  ] as Project[],
  social: {
    email: "mailto:bouwmanhidde@gmail.com",
    instagram: "https://www.instagram.com/hidde_vol.2/",
    github: "https://github.com/HiddeBouwman",
    linkedin: "https://www.linkedin.com/in/hidde-bouwman-1170793a0/",
  },
  cvHref: "/cv/Hidde-Bouwman-CV.pdf",
} as const;
