import { DonutItem, CoffeeItem, PairingItem } from '../types';

export const DONUTS_DATA: DonutItem[] = [
  {
    id: 'vanilla-bourbon',
    code: '#VN-01',
    nameHy: 'Վանիլային Բուրբոն և Մադագասկար',
    nameEn: 'Madagascar Bourbon Vanilla',
    category: 'glaze',
    price: 1200,
    rating: 4.9,
    reviewsCount: 124,
    descriptionHy: 'Բնական վանիլային թափանցիկ գլազուր, խրթխրթան կարամելի բյուրեղներ և ծովային աղ:',
    descriptionEn: 'Translucent natural Madagascar vanilla glaze, crisp salted caramel pearls, and Maldon flake sea salt.',
    badgeHy: 'Classic Glaze',
    badgeEn: 'Classic Glaze',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbhByJ_I8rl77fRMevN8VvNrX_xwIdIemGkmLpscnrAsyghfiEdxyOOoJbz9YNt4w30PmgacjgwsDWnqgCmmU55uWkogB30IT752c3jB1YysE-d_aDNb0x7QMXUk94HlfXgSJUVm5Pjvnj9vdsurKA-pX8eiHSoEKln3D4MSTSZdL4_HYhnv2UQ_l6YtBDyJpIvpuBLxva1eyoXxVZqgPyCiixZibvdKLHCGh37Hpc23uYLIS19JzdKg',
    altText: 'Artisanal brioche donut with natural golden Bourbon vanilla glaze and caramel flakes',
    ingredientsHy: ['48-ժամյա Բրիոշ խմոր', 'Մադագասկար վանիլի հատիկներ', 'Ֆրանսիական կարագ 82.5%', 'Մալդոն աղ', 'Եղեգնաշաքար'],
    ingredientsEn: ['48-hr Brioche Dough', 'Madagascar Vanilla Pods', '82.5% French Butter', 'Maldon Flake Salt', 'Cane Sugar'],
    allergensHy: ['Ցորենի ալյուր (գլյուտեն)', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Wheat Flour (Gluten)', 'Dairy', 'Eggs'],
    calories: 340,
    recommendedPairing: 'Oat Flat White կամ Chemex Pour Over'
  },
  {
    id: 'dark-chocolate',
    code: '#CH-02',
    nameHy: 'Բելգիական Մուգ Շոկոլադ և Ծովի Աղ',
    nameEn: 'Belgian Dark Chocolate & Sea Salt',
    category: 'cream',
    price: 1400,
    rating: 5.0,
    reviewsCount: 208,
    descriptionHy: '70% Valrhona մետաքսյա գանաշ միջուկ, խորը շոկոլադե շերտ և Մալդոնյան ծովի փաթիլներ:',
    descriptionEn: '70% Valrhona silky chocolate ganache center, obsidian glaze, and delicate Maldon sea salt crystals.',
    badgeHy: 'Valrhona 70%',
    badgeEn: 'Valrhona 70%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPl5lrW6u4kjmZ5x5MJVpjMLRSfoTR8_1mJMlF2V5SyznRzdPrv2ezc8NpoqepV0FVcvU4iFPs6varUzJS0JxDEuxshmu_spmHOtiiDnyH53fy0fPVpqkxl6mjSa1f4lrtrKsj6xX-4Mz4yAaoBNVvHi-m9xzNTWSYLmFsmeKrSVvQIK_Ke0tK5nHP9kn2rLHylU3Ckf2pj9eVMKbNnH63_5p84p2AFy1wuxqTO4jFAdCf9PbRzNBTw',
    altText: 'Dark Belgian chocolate ganache filled brioche donut with sea salt flakes',
    ingredientsHy: ['48-ժամյա Բրիոշ խմոր', 'Valrhona Guanaja 70% Շոկոլադ', 'Սերուցք 35%', 'Ծովի բնական աղ', 'Կակաո'],
    ingredientsEn: ['48-hr Brioche Dough', 'Valrhona Guanaja 70% Chocolate', 'Heavy Cream 35%', 'Flaky Sea Salt', 'Cocoa'],
    allergensHy: ['Գլյուտեն', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Gluten', 'Dairy', 'Eggs'],
    calories: 410,
    recommendedPairing: 'Դաբլ Էսպրեսո կամ Geisha Cold Brew'
  },
  {
    id: 'pistachio-mascarpone',
    code: '#PS-03',
    nameHy: 'Սիցիլիական Պիստակ և Մասկարպոնե',
    nameEn: 'Sicilian Pistachio & Mascarpone',
    category: 'cream',
    price: 1600,
    rating: 4.95,
    reviewsCount: 312,
    descriptionHy: 'Փարթամ բրոնտեական պիստակի կրեմ, թեթև մասկարպոնե և բովված պիստակի խռթխռթան հատիկներ:',
    descriptionEn: 'Rich Bronte pistachio praline creme, velvety Italian mascarpone, and roasted emerald pistachio crumb.',
    badgeHy: 'Bestseller',
    badgeEn: 'Bestseller',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiiEO2lI33YSFZXo-okw9rRJcTAWodxDQ31iZ409ElmK2Ka3EhZZCjBVXgFXVrDIuCH1S8gZ5oK0r6yXCXN9_LZrBGvIBk1ShOkDnwWMqY-9YYCPDAMvpz5J2-mKi-M0QQgDONOoQNAYuvXhBW8B0YPWkWL14nNn1raNrBykPrEa8LrmHI6qwT3lSSXMDbxJUasFRFBLTd8Uv7a9tz4PLpH003Aw4E8WqWNXMuHsXalaOECjG-VY7BCA',
    altText: 'Sicilian pistachio and mascarpone cream piped brioche donut',
    ingredientsHy: ['Բրիոշ խմոր', 'Սիցիլիական բնական պիստակ 100%', 'Մասկարպոնե պանիր', 'Օրգանական շաքար', 'Վանիլ'],
    ingredientsEn: ['Brioche Dough', '100% Sicilian Pistachio Paste', 'Italian Mascarpone', 'Organic Sugar', 'Vanilla'],
    allergensHy: ['Գլյուտեն', 'Ընկուզեղեն (Պիստակ)', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Gluten', 'Tree Nuts (Pistachio)', 'Dairy', 'Eggs'],
    calories: 430,
    recommendedPairing: 'Slow Cold Brew կամ Aeropress Kenya'
  },
  {
    id: 'yerevan-apricot',
    code: '#AP-04',
    nameHy: 'Երևանյան Ծիրան և Հիլ',
    nameEn: 'Yerevan Apricot & Cardamom',
    category: 'seasonal',
    price: 1400,
    rating: 4.88,
    reviewsCount: 95,
    descriptionHy: 'Արարատյան դաշտավայրի հյութեղ ծիրանի թարմ կոնֆիտյուր, բուրավետ հիլ և շաքարի փոշի:',
    descriptionEn: 'Ararat Valley sun-drenched apricot artisanal compote, green cardamom infusion, and fine sugar snow.',
    badgeHy: 'Local Heritage',
    badgeEn: 'Local Heritage',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHx5ZMo8TkY0V5fnTns5MTNLlHMDA0bRkpF8DeRVpKIrTH4BUSiC7g484KtIDQ9AhFI5BoSziR9Kclb06kcjcol48E2BUMQKTOlkqG65-XJmUBlcBvfs5bDcXIeSTtFgsLw9yLO3PvBY9IM_lF4PjG9IYQ06tm2kUoZKch0f6kNZKS3JqpLAzyYbQ65MMBxl5yK5PfUwGLoQD0EKsk6B8uv9CBJNOJzub8-MmVFYWVkU_519KxnbOkA',
    altText: 'Armenian apricot confiture filled brioche donut with crushed green cardamom',
    ingredientsHy: ['Բրիոշ խմոր', 'Արարատյան բնական ծիրան', 'Գվատեմալական հիլ', 'Լիմոնի թարմ հյութ', 'Շաքարի փոշի'],
    ingredientsEn: ['Brioche Dough', 'Armenian Apricots', 'Green Cardamom', 'Fresh Lemon Juice', 'Powdered Cane Sugar'],
    allergensHy: ['Գլյուտեն', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Gluten', 'Dairy', 'Eggs'],
    calories: 320,
    recommendedPairing: 'V60 Ethiopia Yirgacheffe'
  },
  {
    id: 'berries-patissiere',
    code: '#BP-05',
    nameHy: 'Վայրի Անտառային Հատապտուղներ',
    nameEn: 'Wild Forest Berries & Creme Patissiere',
    category: 'cream',
    price: 1500,
    rating: 4.92,
    reviewsCount: 142,
    descriptionHy: 'Մոշի, հապալասի և ելակի տնական կուլի, թավշյա վանիլային կրեմ պատիսիեր:',
    descriptionEn: 'Home-crafted wild blackberry, blueberry and alpine strawberry coulis with velvety creme patissiere.',
    badgeHy: 'Seasonal Batch',
    badgeEn: 'Seasonal Batch',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3pCJuZnmP6D7NB3hxzWQLYfed_6IAokptJQd7vbpWjvakMO3sOyRaAf6hMYtmHxsOvFSdZTGRkhlEp-khME0oTD0z5CO-nKiocfDjpEuUlGRvmLei6YRPkGNxxZ3lBW265P-KODOos1PYMC6oh2mC4SCDMXD3VEBMzxMVixh5X3dRy3ZnZj6d6os5xUeTPp0xCsnTdHZEVQ7rKjYu6T6aS0cVBnFgGRnoJJ_3qJeN1UNFRTOpo9UBxg',
    altText: 'Artisanal brioche donut cooling glazed with dark berry compote',
    ingredientsHy: ['Բրիոշ խմոր', 'Վայրի մոշ և հապալաս', 'Ֆերմերային կաթ', 'Վանիլ', 'Ձվի դեղնուց'],
    ingredientsEn: ['Brioche Dough', 'Wild Berries', 'Farm Whole Milk', 'Vanilla Bean', 'Egg Yolks'],
    allergensHy: ['Գլյուտեն', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Gluten', 'Dairy', 'Eggs'],
    calories: 360,
    recommendedPairing: 'Kenya Nyeri Aeropress'
  },
  {
    id: 'smoked-cheese-brioche',
    code: '#SB-06',
    nameHy: 'Ապխտած Գաուդա և Թարմ Ուրց (Աղի)',
    nameEn: 'Smoked Gouda & Wild Thyme (Savory)',
    category: 'savory',
    price: 1600,
    rating: 4.89,
    reviewsCount: 78,
    descriptionHy: 'Տաք խորովված բրիոշ՝ լցոնված հալված ապխտած գաուդա պանրով, կարամելացված սոխով և լեռնային ուրցով:',
    descriptionEn: 'Warm toasted savory brioche filled with melted smoked Gouda, slow-caramelized shallots, and mountain thyme.',
    badgeHy: 'Savory Special',
    badgeEn: 'Savory Special',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFVgAeyZr18P9jB7QsIm7AfZ7EBRXWCHsgpzWtVP38ZTZKmLs5szlhWddwx_w8kbopCmNFVrGj3OwGHwg4MrqTLlJRlen94kUjjZZ4crHptYTlfAoH4M-b3HfAzorf9ZZViFvnTPWU3DicUFTN-Gh8orAtO5OQL1L-HMSqTBeLt-NxPXa8gY2SfnhesxpJ4Dq-LvcA8YOkd412kxkmGkhyVxB263HUmLgKvOMfF02uSxhDjVaSAIV1Pg',
    altText: 'Gourmet artisanal savory brioche bun with herbs and smoked cheese',
    ingredientsHy: ['Բրիոշ խմոր', 'Ապխտած հոլանդական Գաուդա', 'Հայկական լեռնային ուրց', 'Կարամելացված սոխ', 'Սև պղպեղ'],
    ingredientsEn: ['Brioche Dough', 'Smoked Dutch Gouda', 'Armenian Wild Thyme', 'Caramelized Onion', 'Black Pepper'],
    allergensHy: ['Գլյուտեն', 'Կաթնամթերք', 'Ձու'],
    allergensEn: ['Gluten', 'Dairy', 'Eggs'],
    calories: 390,
    recommendedPairing: 'Colombia Geisha Pour Over'
  }
];

export const COFFEE_BEANS_DATA: CoffeeItem[] = [
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Yirgacheffe Gedeb',
    originHy: 'Եթովպիա • Յիրգաչեֆ',
    originEn: 'Ethiopia • Yirgacheffe',
    scaScore: 88.5,
    processHy: 'Washed (Լվացված)',
    processEn: 'Washed',
    altitudeHy: '1,950 – 2,200մ',
    altitudeEn: '1,950 – 2,200m',
    roastHy: 'Թեթև (Light Omni)',
    roastEn: 'Light Omni',
    acidity: 4.5,
    body: 3.5,
    notesHy: ['Ծաղկային', 'Բերգամոտ', 'Հասած Դեղձ'],
    notesEn: ['Jasmine Floral', 'Bergamot', 'Ripe Peach'],
    price: 1800,
    brewMethods: ['V60 Pour Over', 'Chemex'],
    descriptionHy: 'Եթովպիայի ամենահայտնի բարձրլեռնային միկրո-տարածաշրջանից: Աչքի է ընկնում ցիտրուսային և հասմիկի հստակ, թարմ նրբերանգներով:',
    descriptionEn: 'Sourced from the high plateaus of Gedeb, Yirgacheffe. Renowned for its tea-like delicate clarity, jasmine florals, and bergamot citrus sparkle.'
  },
  {
    id: 'colombia-huila-geisha',
    name: 'Huila Geisha Special',
    originHy: 'Կոլումբիա • Ուիլա',
    originEn: 'Colombia • Huila',
    scaScore: 90.0,
    processHy: 'Anaerobic Natural (Անաէրոբ)',
    processEn: 'Anaerobic Natural',
    altitudeHy: '1,800 – 2,050մ',
    altitudeEn: '1,800 – 2,050m',
    roastHy: 'Միջին-Թեթև (Filter Plus)',
    roastEn: 'Medium-Light (Filter Plus)',
    acidity: 4.0,
    body: 5.0,
    notesHy: ['Ազնվամորի', 'Վայրի Մեղր', 'Կակաո'],
    notesEn: ['Raspberry Jam', 'Wild Honey', 'Cacao Nibs'],
    price: 2400,
    brewMethods: ['Chemex', 'V60 Pour Over', 'Cold Brew'],
    descriptionHy: 'Բացառիկ Գեյշա տեսակ՝ 72 ժամյա անաէրոբ ֆերմենտացիայով: Խորը քաղցրություն, գինենման մարմին և հարուստ արևադարձային պրոֆիլ:',
    descriptionEn: 'Rare Geisha microlot subjected to 72 hours of temperature-controlled anaerobic tank fermentation. Explosive red berry fruit sweetness and silky mouthfeel.'
  },
  {
    id: 'kenya-nyeri-hill',
    name: 'Nyeri Hill Peaberry',
    originHy: 'Քենիա • Նյերի',
    originEn: 'Kenya • Nyeri',
    scaScore: 89.0,
    processHy: 'Double Fermented Washed',
    processEn: 'Double Fermented Washed',
    altitudeHy: '1,750 – 1,900մ',
    altitudeEn: '1,750 – 1,900m',
    roastHy: 'Միջին (Medium Roast)',
    roastEn: 'Medium Roast',
    acidity: 5.0,
    body: 4.0,
    notesHy: ['Սև Հաղարջ', 'Թուրինջ', 'Տրոպիկական Կարամել'],
    notesEn: ['Blackcurrant', 'Pink Grapefruit', 'Brown Sugar Caramel'],
    price: 1900,
    brewMethods: ['Aeropress', 'V60 Pour Over'],
    descriptionHy: 'Հատընտիր Փիբերի (սերմ-գնդիկ) հատիկներ Քենիայի հրաբխային հողերից: Համարձակ, փրփրուն թթվայնություն և հաղարջի ինտենսիվ բույր:',
    descriptionEn: 'Hand-selected peaberry mutation cultivated in mineral-rich volcanic red clay. Displays vibrant phosphoric acidity and signature blackcurrant juiciness.'
  }
];

export const PAIRINGS_DATA: PairingItem[] = [
  {
    id: 'pairing-01',
    number: '01',
    titleHy: 'Խորը և Հարուստ',
    titleEn: 'Deep & Rich',
    nameHy: 'Դաբլ Էսպրեսո + Բելգիական Շոկոլադ',
    nameEn: 'Double Espresso + Belgian Dark Chocolate',
    descHy: 'Կոլումբիական էսպրեսոյի ընկուզային կրեմային խտությունը կատարյալ հավասարակշռում է 70% մուգ շոկոլադի ինտենսիվությունը և ծովային աղի նոտան:',
    descEn: 'The dense nuttiness of our Colombian espresso crema harmonizes with the bittersweet 70% dark ganache and sea salt contrast.',
    price: 2300,
    donutNameHy: 'Բելգիական Մուգ Շոկոլադ',
    coffeeNameHy: 'Դաբլ Էսպրեսո'
  },
  {
    id: 'pairing-02',
    number: '02',
    titleHy: 'Մետաքսյա և Քնքուշ',
    titleEn: 'Silky & Tender',
    nameHy: 'Oat Flat White + Վանիլային Բուրբոն',
    nameEn: 'Oat Flat White + Vanilla Bourbon',
    descHy: 'Վարսակի կաթի մետաքսյա միկրոփրփուրը և բնական Մադագասկար վանիլի գլազուրը բացահայտում են քաղցր կարամելի և թխվածքաբլիթի նուրբ նրբերանգները:',
    descEn: 'Artisanal oat microfoam and aromatic Bourbon vanilla glaze unlock delicate notes of toffee, baked biscuit, and golden butter.',
    price: 2700,
    donutNameHy: 'Վանիլային Բուրբոն և Մադագասկար',
    coffeeNameHy: 'Oat Flat White'
  },
  {
    id: 'pairing-03',
    number: '03',
    titleHy: 'Թարմացնող և Էլեգանտ',
    titleEn: 'Refreshing & Elegant',
    nameHy: 'Slow Cold Brew + Սիցիլիական Պիստակ',
    nameEn: 'Slow Cold Brew + Sicilian Pistachio',
    descHy: '18 ժամ սառը թրմված եթովպական հատիկների գինենման մրգային բնույթը հրաշալիորեն մեղմացնում է պիստակի և մասկարպոնեի կրեմային խտությունը:',
    descEn: '18-hour cold steeped Geisha beans deliver winey stone fruit notes that gently elevate the lush pistachio-mascarpone creaminess.',
    price: 3100,
    donutNameHy: 'Սիցիլիական Պիստակ և Մասկարպոնե',
    coffeeNameHy: 'Geisha Slow Cold Brew'
  }
];

export const CAFE_METRICS = [
  { value: '48Ժ', labelHy: 'Դանդաղ սառը խմորում', labelEn: 'Slow Cold Fermentation' },
  { value: '86+', labelHy: 'SCA Cupping միավոր', labelEn: 'SCA Cupping Score' },
  { value: '100%', labelHy: 'Կարագ & Մադագասկար վանիլ', labelEn: 'Butter & Real Vanilla' }
];

export const HERO_FEATURED = {
  titleHy: 'Բրիոշ Փքաբլիթ & Geisha Cold Brew',
  titleEn: 'Brioche Donut & Geisha Cold Brew',
  tagHy: 'Հատուկ Առաջարկ',
  tagEn: 'Special Pairing',
  badgeHy: 'Սահմանափակ Խմբաքանակ',
  badgeEn: 'Limited Batch',
  price: 2600,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFVgAeyZr18P9jB7QsIm7AfZ7EBRXWCHsgpzWtVP38ZTZKmLs5szlhWddwx_w8kbopCmNFVrGj3OwGHwg4MrqTLlJRlen94kUjjZZ4crHptYTlfAoH4M-b3HfAzorf9ZZViFvnTPWU3DicUFTN-Gh8orAtO5OQL1L-HMSqTBeLt-NxPXa8gY2SfnhesxpJ4Dq-LvcA8YOkd412kxkmGkhyVxB263HUmLgKvOMfF02uSxhDjVaSAIV1Pg'
};

export const STORY_PHOTOS = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1Ndxc1VxgWdwI0Oa6nFg8xNCUyRyirrmO-_JDa86fNHJ7a57_u6KxKgdGesyvgKPJGyB7319tRm26vFV5aXkckrFJb0Co__LJBCIstWUIEsgXssqcggA58JfV_EdYxZawg-_mD7D24-agp1dsYPk4AzwQWeoGbG2bVGyymRr95PBj5hvhmv1OW6UIbp73z4o0ODW54fbJ8aUY_nc5KmLH7VvWMt8neJTMMjggvBV-6lL47tZiDYPW0Q',
    alt: 'Baker gently shaping French brioche dough with flour on dark slate bench',
    aspect: '3/4'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgHknZjV07rqtbQ-m0lT40pIb5XpRLsUvoz0QPtKVChdLNz64jtVcpAacYUb0ivKuidllKQMGb0DgKxEul6GEqpNNl3tQ3LgIwri3ovJarpTPLZkVrUs8tF_es9zSgoyj2A2pnBsQOZ53rxmqpSNVoO_vQu98CQ3w0pIMTUgOhP6yft-habDQCLQD8-P_xMJRU7o6BwHVyMnZTBpWnd9ZmbGbHHjLW0SWE7295zPelPX-sXjBdeztVSQ',
    alt: 'Architectural modern brutalist cafe interior in Yerevan with basalt stone and warm lighting',
    aspect: 'square'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIW1LOs07ebPJj9-QFFyFZysonJvhU-e8pn1WvjSYMUG_QSmxPcKEwZ5vq9hEe5uaIFhKpfiVKW4qKlv-Wh-BrWwZRQeP2ZVbPX_DZYaDERQL743NtO26BTkFUEqYVg-DWFKvgoz7TPeZ1DURjGcq-AhiEzf2c_VrZlIlFIr77mUyE-PQLy3wyXDrxHxfH81etET1vQve9_RnzsNMMutZnreG8xFkvsD8KnoJ_ILJWtvVeI9SoX0tU_w',
    alt: 'Barista performing V60 pour over into ceramic server with slow steam rising',
    aspect: 'square'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3pCJuZnmP6D7NB3hxzWQLYfed_6IAokptJQd7vbpWjvakMO3sOyRaAf6hMYtmHxsOvFSdZTGRkhlEp-khME0oTD0z5CO-nKiocfDjpEuUlGRvmLei6YRPkGNxxZ3lBW265P-KODOos1PYMC6oh2mC4SCDMXD3VEBMzxMVixh5X3dRy3ZnZj6d6os5xUeTPp0xCsnTdHZEVQ7rKjYu6T6aS0cVBnFgGRnoJJ_3qJeN1UNFRTOpo9UBxg',
    alt: 'Freshly glazed brioche donuts resting on cooling rack in bakery kitchen',
    aspect: '3/4'
  }
];

export const CAFE_INFO = {
  addressHy: 'Պուշկինի փողոց 24, Երևան 0002',
  addressEn: 'Pushkin Street 24, Yerevan 0002',
  landmarksHy: 'Սարյանի և Ղազար Փարպեցու փողոցների միջև',
  landmarksEn: 'Between Saryan & Ghazar Parpetsi streets',
  hoursWeekdayHy: 'Երկուշաբթի – Ուրբաթ՝ 08:30 – 21:00',
  hoursWeekendHy: 'Շաբաթ – Կիրակի՝ 09:00 – 22:00',
  hoursWeekdayEn: 'Monday – Friday: 08:30 – 21:00',
  hoursWeekendEn: 'Saturday – Sunday: 09:00 – 22:00',
  bakingBatchesHy: 'Թարմ թխվածք՝ օրական 2 անգամ (09:00 & 15:00)',
  bakingBatchesEn: 'Fresh batches baked twice daily (09:00 & 15:00)',
  phone: '+374 (10) 58-00-24',
  email: 'hello@donutsandcoffee.am',
  instagram: '@donutsandcoffee.am'
};
