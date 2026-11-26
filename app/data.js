// Indonesia in Numbers — every figure on the site lives here, each with the source and year it was published.
// Sources are cited as text (BPS = Statistics Indonesia, World Bank, APJII, UNDP, FAO, Kemenkes, Kemendikbud,
// KLHK, ITU); nothing is fetched, so the site works fully offline.

export const sections = [
  {
    slug: 'population',
    name: 'Population',
    tagline: '283 million people across 38 provinces',
    intro:
      'Indonesia is the fourth most populous country on Earth. About 58 percent of its people now live in cities, the median age is around 30, and Java — home to well over half the population — is one of the most densely settled large islands in the world.',
    kpis: [
      { label: 'Total population', value: '283.5 million', source: 'World Bank', year: 2024 },
      { label: 'Population growth', value: '0.8% a year', source: 'BPS', year: 2024 },
      { label: 'Living in cities', value: '58% of people', source: 'World Bank', year: 2023 },
      { label: 'Population density', value: '147 people per km²', source: 'World Bank', year: 2023 },
      { label: 'Median age', value: 'About 30 years', source: 'UN Population Division', year: 2024 },
      { label: 'Provinces', value: '38', source: 'Government of Indonesia', year: 2022 },
    ],
    series: ['population', 'urban'],
    facts: [
      'The 2020 census counted 270.2 million people; the population has grown by roughly 13 million since (BPS, 2020).',
      'West Java alone, with about 50 million people, would rank among the 30 most populous countries in the world (BPS, 2024).',
      'Indonesia has more than 17,000 islands, of which around 7,000 are inhabited (BPS).',
      'Jakarta, the capital, is home to about 10.7 million people inside the city and over 30 million in the wider metro area (BPS, 2024).',
    ],
  },
  {
    slug: 'economy',
    name: 'Economy',
    tagline: 'A US$1.4 trillion economy growing at about 5 percent',
    intro:
      'Indonesia has Southeast Asia’s largest economy. Growth has held near 5 percent for a decade outside the pandemic year, inflation is low, and both poverty and open unemployment fell to their lowest recorded levels in 2024.',
    kpis: [
      { label: 'GDP', value: 'US$1.37 trillion', source: 'World Bank', year: 2024 },
      { label: 'GDP per person', value: 'About US$4,900', source: 'World Bank', year: 2024 },
      { label: 'GDP growth', value: '5.03%', source: 'BPS', year: 2024 },
      { label: 'Inflation', value: '1.57% a year', source: 'BPS, December', year: 2024 },
      { label: 'People in poverty', value: '8.57%', source: 'BPS, September', year: 2024 },
      { label: 'Open unemployment', value: '4.91%', source: 'BPS, August', year: 2024 },
    ],
    series: ['gdpGrowth', 'poverty'],
    facts: [
      'Manufacturing is the largest single sector, at about 19 percent of GDP, followed by trade and agriculture (BPS, 2024).',
      'Poverty fell below 9 percent for the first time on record in September 2024, to 8.57 percent (BPS, 2024).',
      'The economy shrank 2.07 percent in 2020 during the pandemic, then grew 3.70 percent in 2021 and 5.31 percent in 2022 (BPS).',
      'Inflation peaked at 5.51 percent in December 2022 as fuel prices rose, and was back to 1.57 percent by December 2024 (BPS).',
    ],
  },
  {
    slug: 'health',
    name: 'Health',
    tagline: 'Longer lives, fewer child deaths',
    intro:
      'Life expectancy has climbed past 72 years, child mortality has fallen steadily for three decades, and a national health insurance scheme (JKN) now covers more than 270 million people — one of the largest single-payer systems in the world.',
    kpis: [
      { label: 'Life expectancy', value: '72.4 years', source: 'World Bank', year: 2023 },
      { label: 'Infant mortality', value: '19 per 1,000 births', source: 'World Bank', year: 2022 },
      { label: 'Under-5 mortality', value: '23 per 1,000 births', source: 'World Bank', year: 2022 },
      { label: 'Child stunting', value: '21.5% of under-5s', source: 'Kemenkes SSGI', year: 2023 },
      { label: 'Health insurance (JKN)', value: 'Over 270 million members', source: 'BPJS Kesehatan', year: 2024 },
      { label: 'Physicians', value: 'About 0.7 per 1,000 people', source: 'World Bank', year: 2021 },
    ],
    series: ['lifeExpectancy', 'infantMortality'],
    facts: [
      'Stunting fell from 30.8 percent in 2018 to 21.5 percent in 2023, though it remains a national priority (Kemenkes SSGI).',
      'Life expectancy rose from about 66 years in 2000 to 72.4 years in 2023 (World Bank).',
      'The JKN national health insurance scheme, launched in 2014, covered over 270 million people by 2024 (BPJS Kesehatan).',
      'Indonesia runs one of the world’s largest community health post networks, with over 300,000 posyandu posts (Kemenkes).',
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    tagline: 'Near-universal literacy, 52 million students',
    intro:
      'Almost every Indonesian adult can read and write, and about 52 million students study in more than 200,000 schools. Twelve years of schooling are compulsory, and a child starting school today can expect about 13 years in education.',
    kpis: [
      { label: 'Adult literacy', value: 'About 96%', source: 'BPS', year: 2023 },
      { label: 'Expected years of schooling', value: '13.0 years', source: 'UNDP', year: 2022 },
      { label: 'Mean years of schooling', value: '8.6 years', source: 'UNDP', year: 2022 },
      { label: 'Students', value: 'About 52 million', source: 'Kemendikbud', year: 2023 },
      { label: 'Schools', value: 'Over 200,000', source: 'Kemendikbud', year: 2023 },
      { label: 'Compulsory schooling', value: '12 years', source: 'Government of Indonesia', year: 2015 },
    ],
    series: ['literacy', 'schooling'],
    facts: [
      'Literacy among 15–24 year olds is close to 100 percent, while the rate for the whole adult population is about 96 percent (BPS, 2023).',
      'Indonesia has over 4,000 higher-education institutions and about 9 million university students (Kemendikbud, 2023).',
      'Bahasa Indonesia is the language of instruction, in a country with more than 700 living languages (BPS).',
      'The Merdeka Belajar (Freedom to Learn) reforms, begun in 2019, rewrote the national curriculum around projects and character (Kemendikbud).',
    ],
  },
  {
    slug: 'environment',
    name: 'Environment',
    tagline: 'Half the land is forest, the world’s largest mangroves',
    intro:
      'Indonesia holds the third-largest rainforest on Earth, the largest mangrove forests of any country, and a fifth of the world’s coral reefs. About half its land is still forest, and emissions per person remain well below the global average.',
    kpis: [
      { label: 'Forest cover', value: 'About 49% of land', source: 'FAO', year: 2020 },
      { label: 'Mangrove area', value: 'About 3.3 million hectares', source: 'KLHK', year: 2023 },
      { label: 'CO₂ per person', value: 'About 2.3 tonnes a year', source: 'World Bank', year: 2022 },
      { label: 'Renewable electricity', value: 'About 15% of supply', source: 'ESDM', year: 2023 },
      { label: 'Islands', value: 'Over 17,000', source: 'BPS', year: 2023 },
      { label: 'Coral reef share', value: 'About 18% of the world’s reefs', source: 'KKP', year: 2022 },
    ],
    series: ['forest', 'co2'],
    facts: [
      'Indonesia’s mangroves cover about 3.3 million hectares — more than any other country (KLHK, 2023).',
      'Deforestation slowed to about 104,000 hectares in 2022, the lowest rate in decades (KLHK).',
      'The country sits on the Ring of Fire, with more than 120 active volcanoes (PVMBG).',
      'Raja Ampat in West Papua holds about 75 percent of the world’s known coral species (KKP).',
    ],
  },
  {
    slug: 'technology',
    name: 'Technology',
    tagline: '221 million people online',
    intro:
      'Four out of five Indonesians are online, mostly by phone. Indonesia is one of the world’s largest markets for social media and e-commerce, and its digital economy is among the biggest in Southeast Asia.',
    kpis: [
      { label: 'Internet penetration', value: '79.5% of people', source: 'APJII', year: 2024 },
      { label: 'Internet users', value: '221 million', source: 'APJII', year: 2024 },
      { label: 'Mobile subscriptions', value: 'About 353 million', source: 'ITU', year: 2023 },
      { label: 'E-commerce users', value: 'About 65 million', source: 'Bank Indonesia', year: 2024 },
      { label: 'Digital economy', value: 'About US$90 billion', source: 'Google, Temasek, Bain', year: 2024 },
      { label: 'Unicorn startups', value: 'Over 10', source: 'CB Insights', year: 2024 },
    ],
    series: ['internet', 'mobile'],
    facts: [
      'Internet penetration rose from 64.8 percent in 2018 to 79.5 percent in 2024 (APJII).',
      'Almost all internet users go online by smartphone; fixed broadband reaches only a minority of homes (APJII, 2024).',
      'Indonesia has more mobile subscriptions than people — about 353 million for 283 million people (ITU, 2023).',
      'Jakarta hosts one of the largest ride-hailing and delivery markets in the world, built on motorcycle taxis (ojek).',
    ],
  },
];

export const series = {
  population: {
    title: 'Population, millions of people',
    source: 'World Bank',
    kind: 'line',
    unit: 'million',
    points: [
      [2015, 255.6], [2016, 258.7], [2017, 261.9], [2018, 264.2], [2019, 266.9],
      [2020, 270.2], [2021, 272.7], [2022, 275.8], [2023, 278.7], [2024, 283.5],
    ],
  },
  urban: {
    title: 'People living in cities, percent',
    source: 'World Bank',
    kind: 'line',
    unit: '%',
    points: [
      [2015, 53.3], [2016, 54.0], [2017, 54.7], [2018, 55.3], [2019, 56.0],
      [2020, 56.6], [2021, 57.1], [2022, 57.5], [2023, 57.9],
    ],
  },
  gdpGrowth: {
    title: 'GDP growth, percent a year',
    source: 'BPS',
    kind: 'bar',
    unit: '%',
    points: [
      [2015, 4.88], [2016, 5.03], [2017, 5.07], [2018, 5.17], [2019, 5.02],
      [2020, -2.07], [2021, 3.7], [2022, 5.31], [2023, 5.05], [2024, 5.03],
    ],
  },
  poverty: {
    title: 'People in poverty, percent (September)',
    source: 'BPS',
    kind: 'line',
    unit: '%',
    points: [
      [2015, 11.13], [2016, 10.7], [2017, 10.12], [2018, 9.66], [2019, 9.22],
      [2020, 10.19], [2021, 9.71], [2022, 9.54], [2023, 9.36], [2024, 8.57],
    ],
  },
  lifeExpectancy: {
    title: 'Life expectancy at birth, years',
    source: 'World Bank',
    kind: 'line',
    unit: 'years',
    points: [
      [2015, 71.1], [2016, 71.2], [2017, 71.4], [2018, 71.6], [2019, 71.7],
      [2020, 71.7], [2021, 71.9], [2022, 72.1], [2023, 72.4],
    ],
  },
  infantMortality: {
    title: 'Infant deaths per 1,000 live births',
    source: 'World Bank',
    kind: 'line',
    unit: 'per 1,000',
    points: [
      [2015, 24], [2016, 23], [2017, 22], [2018, 22], [2019, 21],
      [2020, 20], [2021, 20], [2022, 19],
    ],
  },
  literacy: {
    title: 'Adult literacy rate, percent',
    source: 'BPS',
    kind: 'line',
    unit: '%',
    points: [
      [2015, 95.1], [2016, 95.4], [2017, 95.7], [2018, 95.7], [2019, 96.0],
      [2020, 96.0], [2021, 96.0], [2022, 96.0], [2023, 96.1],
    ],
  },
  schooling: {
    title: 'Mean years of schooling, years',
    source: 'UNDP',
    kind: 'line',
    unit: 'years',
    points: [
      [2015, 7.9], [2016, 8.0], [2017, 8.1], [2018, 8.2], [2019, 8.3],
      [2020, 8.4], [2021, 8.5], [2022, 8.6],
    ],
  },
  forest: {
    title: 'Forest area, percent of land',
    source: 'FAO',
    kind: 'line',
    unit: '%',
    points: [
      [2000, 52.0], [2005, 51.1], [2010, 50.2], [2015, 49.6], [2020, 49.1],
    ],
  },
  co2: {
    title: 'CO₂ emissions per person, tonnes',
    source: 'World Bank',
    kind: 'bar',
    unit: 'tonnes',
    points: [
      [2015, 1.9], [2016, 2.0], [2017, 2.1], [2018, 2.2], [2019, 2.3],
      [2020, 2.1], [2021, 2.2], [2022, 2.3],
    ],
  },
  internet: {
    title: 'Internet users, percent of people',
    source: 'APJII',
    kind: 'line',
    unit: '%',
    points: [
      [2018, 64.8], [2019, 73.7], [2021, 77.0], [2023, 78.2], [2024, 79.5],
    ],
  },
  mobile: {
    title: 'Mobile subscriptions, millions',
    source: 'ITU',
    kind: 'bar',
    unit: 'million',
    points: [
      [2015, 338], [2016, 386], [2017, 435], [2018, 319], [2019, 338],
      [2020, 345], [2021, 356], [2022, 354], [2023, 353],
    ],
  },
};

export const sectors = {
  title: 'GDP by sector, 2024',
  source: 'BPS',
  slices: [
    ['Manufacturing', 18.9],
    ['Trade', 12.8],
    ['Agriculture', 12.6],
    ['Construction', 10.1],
    ['Mining', 10.5],
    ['Everything else', 35.1],
  ],
};

export const provinces = [
  { name: 'West Java', capital: 'Bandung', population: 50.3, area: 35378 },
  { name: 'East Java', capital: 'Surabaya', population: 41.8, area: 47799 },
  { name: 'Central Java', capital: 'Semarang', population: 37.9, area: 32801 },
  { name: 'North Sumatra', capital: 'Medan', population: 15.6, area: 72981 },
  { name: 'Banten', capital: 'Serang', population: 12.4, area: 9663 },
  { name: 'Jakarta', capital: 'Jakarta', population: 10.7, area: 664 },
  { name: 'South Sulawesi', capital: 'Makassar', population: 9.5, area: 46717 },
  { name: 'Lampung', capital: 'Bandar Lampung', population: 9.4, area: 34624 },
  { name: 'South Sumatra', capital: 'Palembang', population: 8.8, area: 91592 },
  { name: 'Riau', capital: 'Pekanbaru', population: 6.9, area: 87024 },
  { name: 'Aceh', capital: 'Banda Aceh', population: 5.6, area: 57956 },
  { name: 'West Sumatra', capital: 'Padang', population: 5.8, area: 42012 },
  { name: 'Bali', capital: 'Denpasar', population: 4.4, area: 5780 },
  { name: 'East Kalimantan', capital: 'Samarinda', population: 4.1, area: 129067 },
  { name: 'Yogyakarta', capital: 'Yogyakarta', population: 3.7, area: 3133 },
  { name: 'Papua', capital: 'Jayapura', population: 1.1, area: 82568 },
];

export const indicators = [
  { name: 'Total population', category: 'Population', value: '283.5 million', year: 2024, source: 'World Bank' },
  { name: 'Population growth rate', category: 'Population', value: '0.8% a year', year: 2024, source: 'BPS' },
  { name: 'Urban population share', category: 'Population', value: '58%', year: 2023, source: 'World Bank' },
  { name: 'Population density', category: 'Population', value: '147 per km²', year: 2023, source: 'World Bank' },
  { name: 'Median age', category: 'Population', value: 'About 30 years', year: 2024, source: 'UN Population Division' },
  { name: 'Number of provinces', category: 'Population', value: '38', year: 2022, source: 'Government of Indonesia' },
  { name: 'Fertility rate', category: 'Population', value: 'About 2.1 children per woman', year: 2023, source: 'World Bank' },
  { name: 'GDP (current US$)', category: 'Economy', value: 'US$1.37 trillion', year: 2024, source: 'World Bank' },
  { name: 'GDP per capita', category: 'Economy', value: 'About US$4,900', year: 2024, source: 'World Bank' },
  { name: 'GDP growth', category: 'Economy', value: '5.03%', year: 2024, source: 'BPS' },
  { name: 'Inflation (December, year on year)', category: 'Economy', value: '1.57%', year: 2024, source: 'BPS' },
  { name: 'Poverty rate (September)', category: 'Economy', value: '8.57%', year: 2024, source: 'BPS' },
  { name: 'Open unemployment (August)', category: 'Economy', value: '4.91%', year: 2024, source: 'BPS' },
  { name: 'Manufacturing share of GDP', category: 'Economy', value: '18.9%', year: 2024, source: 'BPS' },
  { name: 'Life expectancy at birth', category: 'Health', value: '72.4 years', year: 2023, source: 'World Bank' },
  { name: 'Infant mortality rate', category: 'Health', value: '19 per 1,000 births', year: 2022, source: 'World Bank' },
  { name: 'Under-5 mortality rate', category: 'Health', value: '23 per 1,000 births', year: 2022, source: 'World Bank' },
  { name: 'Child stunting prevalence', category: 'Health', value: '21.5%', year: 2023, source: 'Kemenkes SSGI' },
  { name: 'National health insurance members', category: 'Health', value: 'Over 270 million', year: 2024, source: 'BPJS Kesehatan' },
  { name: 'Physicians per 1,000 people', category: 'Health', value: 'About 0.7', year: 2021, source: 'World Bank' },
  { name: 'Adult literacy rate', category: 'Education', value: 'About 96%', year: 2023, source: 'BPS' },
  { name: 'Expected years of schooling', category: 'Education', value: '13.0 years', year: 2022, source: 'UNDP' },
  { name: 'Mean years of schooling', category: 'Education', value: '8.6 years', year: 2022, source: 'UNDP' },
  { name: 'Students in formal education', category: 'Education', value: 'About 52 million', year: 2023, source: 'Kemendikbud' },
  { name: 'Schools', category: 'Education', value: 'Over 200,000', year: 2023, source: 'Kemendikbud' },
  { name: 'Higher-education institutions', category: 'Education', value: 'Over 4,000', year: 2023, source: 'Kemendikbud' },
  { name: 'Forest area share of land', category: 'Environment', value: 'About 49%', year: 2020, source: 'FAO' },
  { name: 'Mangrove area', category: 'Environment', value: 'About 3.3 million hectares', year: 2023, source: 'KLHK' },
  { name: 'CO₂ emissions per capita', category: 'Environment', value: 'About 2.3 tonnes', year: 2022, source: 'World Bank' },
  { name: 'Renewable share of electricity', category: 'Environment', value: 'About 15%', year: 2023, source: 'ESDM' },
  { name: 'Active volcanoes', category: 'Environment', value: 'Over 120', year: 2023, source: 'PVMBG' },
  { name: 'Internet penetration', category: 'Technology', value: '79.5%', year: 2024, source: 'APJII' },
  { name: 'Internet users', category: 'Technology', value: '221 million', year: 2024, source: 'APJII' },
  { name: 'Mobile subscriptions', category: 'Technology', value: 'About 353 million', year: 2023, source: 'ITU' },
  { name: 'E-commerce users', category: 'Technology', value: 'About 65 million', year: 2024, source: 'Bank Indonesia' },
  { name: 'Digital economy size', category: 'Technology', value: 'About US$90 billion', year: 2024, source: 'Google, Temasek, Bain' },
];
