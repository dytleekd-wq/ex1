// Data & Script for Discover Andong Foreigner & Local Travel Guide

let currentLang = localStorage.getItem('andong_lang') || 'en';

const DESTINATIONS = [
  {
    id: "hahoe-village",
    titleEn: "Andong Hahoe Folk Village",
    titleKo: "안동 하회마을",
    krName: "안동 하회마을 (UNESCO World Heritage)",
    category: "heritage",
    categoryLabelEn: "UNESCO World Heritage",
    categoryLabelKo: "유네스코 세계유산",
    image: "./andong_hahoe_hero_1787965970599.jpg",
    rating: "4.9",
    reviews: 2450,
    descEn: "A living historic village preserved since the Joseon Dynasty. Famous for traditional hanok architecture, thatch-roof houses, and the century-old Hahoe Mask Dance Drama (Talchum).",
    descKo: "조선시대 전통 주거문화와 양반문화가 잘 보존된 살아있는 한옥 마을입니다. 유네스코 세계유산으로 지정되어 있으며 전통 하회탈춤 공연이 유명합니다.",
    hoursEn: "09:00 - 18:00 (Summer) / 09:00 - 17:00 (Winter)",
    hoursKo: "09:00 - 18:00 (하절기) / 09:00 - 17:00 (동절기)",
    admissionEn: "5,000 KRW (Adults) / 2,500 KRW (Youth)",
    admissionKo: "성인 5,000원 / 청소년 2,500원",
    address: "40 Hahoenam-gil, Pungcheon-myeon, Andong-si, Gyeongsangbuk-do",
    krAddress: "경상북도 안동시 풍천면 하회남길 40 (하회마을 매표소)",
    busInfoEn: "Bus #210 from Andong Station / Bus Terminal (approx. 45 mins)",
    busInfoKo: "안동역/버스터미널에서 210번 버스 탑승 (약 45분 소요)",
    taxiTip: "기사님, 안동 하회마을 매표소로 가주세요.",
    highlightsEn: ["Hanok Stay Experience", "Hahoe Mask Dance Performance (14:00 weekends)", "Buyongdae Cliff Overlook via Ferry"],
    highlightsKo: ["고택/한옥 체험", "하회별신굿탈놀이 상설공연", "나룻배 타고 부용대 올라가기"]
  },
  {
    id: "wolyeonggyo-bridge",
    titleEn: "Wolyeonggyo Wooden Bridge",
    titleKo: "월영교 (달빛 목책교)",
    krName: "월영교 (Moonlight Bridge)",
    category: "night",
    categoryLabelEn: "Night View & Nature",
    categoryLabelKo: "야경 & 자연",
    image: "./wolyeonggyo_night_1787965983693.jpg",
    rating: "4.8",
    reviews: 1890,
    descEn: "Korea's longest wooden footbridge spanning 387 meters across Nakdong River. Magnificent night lighting, fountain shows, and romantic 'Moon Boat' rides on the tranquil water.",
    descKo: "낙동강을橫斷하는 길이 387m의 국내 최장 목책 인도교입니다. 아름다운 야간 조명, 분수쇼, 낙동강 위에서 즐기는 문보트가 인기가 높습니다.",
    hoursEn: "Open 24 Hours (Fountain: Apr-Oct 12:00, 14:00, 18:00, 20:00)",
    hoursKo: "24시간 개방 (분수가동: 4~10월 12:00, 14:00, 18:00, 20:00)",
    admissionEn: "Free Admission (Moon Boat rental: ~28,000 KRW / boat)",
    admissionKo: "입장료 무료 (문보트 대여료: 대당 약 28,000원)",
    address: "384 Sannok-seo-gil, Andong-si, Gyeongsangbuk-do",
    krAddress: "경상북도 안동시 산록서길 384 (월영교 주차장)",
    busInfoEn: "Bus #112 or short 10-min taxi from Andong Downtown",
    busInfoKo: "시내에서 112번 버스 또는 택시 10분 소요",
    taxiTip: "기사님, 월영교 주차장으로 가주세요.",
    highlightsEn: ["Night lantern illumination", "Moon Boat & Donut Boat rentals", "Wolyeong Park Walkway"],
    highlightsKo: ["낭만적인 환상적인 야경 조명", "문보트 & 도넛보트 체험", "월영공원 수변 산책로"]
  },
  {
    id: "dosan-seowon",
    titleEn: "Dosan Seowon Academy",
    titleKo: "도산서원",
    krName: "도산서원 (Neo-Confucian Academy)",
    category: "heritage",
    categoryLabelEn: "UNESCO World Heritage",
    categoryLabelKo: "유네스코 세계유산",
    image: "./dosan_seowon_academy.jpg",
    rating: "4.7",
    reviews: 1120,
    descEn: "Established in 1574 to honor Yi Hwang (Toegye), one of Korea's premier Confucian scholars (featured on the 1,000 KRW bill). Serene timber halls overlooking the river.",
    descKo: "퇴계 이황 선생의 학문과 덕행을 추모하기 위해 1574년에 건립된 서원입니다. 1,000원 화폐의 배경이기도 하며 유교 문화의 고즈넉함을 느낄 수 있습니다.",
    hoursEn: "09:00 - 18:00 (Mar-Oct) / 09:00 - 17:00 (Nov-Feb)",
    hoursKo: "09:00 - 18:00 (3~10월) / 09:00 - 17:00 (11~2월)",
    admissionEn: "2,000 KRW (Adults)",
    admissionKo: "성인 2,000원",
    address: "154 Dosanseowon-gil, Dosan-myeon, Andong-si, Gyeongsangbuk-do",
    krAddress: "경상북도 안동시 도산면 도산서원길 154",
    busInfoEn: "Bus #567 from Andong Station (approx. 40 mins)",
    busInfoKo: "안동역에서 567번 버스 탑승 (약 40분 소요)",
    taxiTip: "기사님, 도산서원 입구로 가주세요.",
    highlightsEn: ["Jeongyodang Main Lecture Hall", "Toegye Memorial Museum", "Sisadane River Island Pavilion"],
    highlightsKo: ["보물 제210호 전교당", "옥진각 (퇴계선생 유물전시관)", "낙동강 비경 속 시사단"]
  },
  {
    id: "andong-jjimdak-street",
    titleEn: "Andong Jjimdak Market Alley",
    titleKo: "안동 찜닭 골목 (구시장)",
    krName: "안동 찜닭 골목 (Gu-Sijang Market)",
    category: "food",
    categoryLabelEn: "Culinary Delight",
    categoryLabelKo: "대표 먹거리",
    image: "./andong_jjimdak_food_1787965998159.jpg",
    rating: "4.9",
    reviews: 3100,
    descEn: "The birthplace of Andong Jjimdak—savory, spicy braised chicken with sweet potato glass noodles, potatoes, carrots, and soy garlic sauce. Servings are generous for sharing!",
    descKo: "안동 대표 먹거리인 찜닭의 원조 골목입니다. 매콤달콤한 간장 양념에 쫄깃한 당면과 닭고기, 채소가 어우러진 푸짐한 양을 자랑합니다.",
    hoursEn: "10:00 - 22:00 (Daily)",
    hoursKo: "10:00 - 22:00 (매일)",
    admissionEn: "Platter for 2-3 people: ~32,000 KRW - 35,000 KRW",
    admissionKo: "안동찜닭 (2~3인분 기준): 약 32,000원 ~ 35,000원",
    address: "Central Market (Gu-Sijang), Seobu-dong, Andong-si",
    krAddress: "경상북도 안동시 번영1길 47 (안동 구시장 찜닭골목)",
    busInfoEn: "Located right in Andong Downtown, 10 mins walk from Andong Station",
    busInfoKo: "안동 시내 위치 (구 안동역에서 도보 10분)",
    taxiTip: "기사님, 안동 구시장 찜닭골목으로 가주세요.",
    highlightsEn: ["Juicy braised chicken with chewy glass noodles", "Pair with fresh Andong Soju (45% or 22% ABV)", "Traditional market browsing"],
    highlightsKo: ["원조 안동찜닭의 깊은 감칠맛", "전통 안동소주 반주 추천", "전통시장 온누리상품권/구경거리"]
  },
  {
    id: "byeongsan-seowon",
    titleEn: "Byeongsan Seowon Academy",
    titleKo: "병산서원",
    krName: "병산서원 (UNESCO World Heritage)",
    category: "heritage",
    categoryLabelEn: "UNESCO World Heritage",
    categoryLabelKo: "유네스코 세계유산",
    image: "./byeongsan_seowon_academy.jpg",
    rating: "4.9",
    reviews: 980,
    descEn: "Acclaimed as a masterpiece of Korean pavilion architecture. Mantaeru Pavilion frames the stunning Byeongsan Cliff and Nakdong River in an open-air natural panorama.",
    descKo: "한국 서원 건축의 최고 걸작으로 손꼽힙니다. 7칸 크기의 만대루에 오르면 병산의 절벽과 낙동강 물줄기가 마치 한 폭의 병풍처럼 펼쳐집니다.",
    hoursEn: "09:00 - 18:00 (Mar-Oct)",
    hoursKo: "09:00 - 18:00 (3~10월)",
    admissionEn: "Free Admission",
    admissionKo: "입장료 무료",
    address: "Byeongsan-ri, Pungcheon-myeon, Andong-si",
    krAddress: "경상북도 안동시 풍천면 병산길 386 (병산서원)",
    busInfoEn: "Bus #210 (runs 3 times a day direct from Hahoe Village)",
    busInfoKo: "하회마을에서 210번 버스 이용 (일 3회 운행)",
    taxiTip: "기사님, 병산서원으로 가주세요.",
    highlightsEn: ["Mantaeru Pavilion 7-bay open wooden floor", "Crepe Myrtle trees in bloom (July-August)", "Quiet peaceful contemplation spot"],
    highlightsKo: ["만대루에서 바라보는 낙동강 백사장", "7~8월 배롱나무(목백일홍) 꽃궐", "자연과 호흡하는 서원 고즈넉함"]
  },
  {
    id: "mammoth-bakery",
    titleEn: "Mammoth Bakery (Michelin Guide)",
    titleKo: "맘모스베이커리 (미슐랭 가이드)",
    krName: "맘모스베이커리 (Cream Cheese Bread)",
    category: "food",
    categoryLabelEn: "Culinary Delight",
    categoryLabelKo: "대표 먹거리",
    image: "./mammoth_bakery.jpg",
    rating: "4.7",
    reviews: 4200,
    descEn: "One of Korea's top famous bakeries featured in Michelin Green Guide. World-renowned for its warm, gooey, chewy Cream Cheese Bread (크림치즈빵) and Yuzu tart.",
    descKo: "미슐랭 그린가이드에 등재된 대한민국 3대 제과점 중 하나입니다. 부드럽고 진한 크림치즈빵과 유자 타르트가 대표 시그니처 메뉴입니다.",
    hoursEn: "08:30 - 19:00 (Daily)",
    hoursKo: "08:30 - 19:00 (매일)",
    admissionEn: "Cream Cheese Bread: 3,000 KRW",
    admissionKo: "크림치즈빵: 3,000원",
    address: "34 Munhwa-gil, Andong-si, Gyeongsangbuk-do",
    krAddress: "경상북도 안동시 문화길 34 (맘모스베이커리 본점)",
    busInfoEn: "5 mins walk from Andong Old Market in Downtown",
    busInfoKo: "안동 구시장/시내 중심가 도보 5분",
    taxiTip: "기사님, 안동 시내 맘모스베이커리로 가주세요.",
    highlightsEn: ["Famous Cream Cheese Bread", "Yuzu Tart & European Pastries", "Cozy Coffee Lounge"],
    highlightsKo: ["전국구 시그니처 크림치즈빵", "상큼함이 일품인 유자 타르트", "깔끔한 내부 카페 라운지"]
  }
];

const TAXI_CARDS = [
  {
    titleEn: "Take me to Andong Station (KTX)",
    titleKo: "안동역 (KTX) 가기",
    kr: "기사님, 안동역(KTX)으로 가주세요.",
    phonetic: "Gi-sa-nim, An-dong-yeok-eu-ro ga-ju-se-yo.",
    descEn: "For catching the KTX-Eum high speed train back to Seoul/Cheongnyangni.",
    descKo: "서울(청량리) 방면 KTX-이음 열차 탑승 시 기사님께 제시하세요."
  },
  {
    titleEn: "Take me to Hahoe Folk Village",
    titleKo: "하회마을 매표소 가기",
    kr: "기사님, 안동 하회마을 매표소로 가주세요.",
    phonetic: "Gi-sa-nim, Hahoe-maeul mae-pyo-so-ro ga-ju-se-yo.",
    descEn: "Main ticket office entrance for Hahoe Village.",
    descKo: "하회마을 입구 매표소 주소 안내 문구입니다."
  },
  {
    titleEn: "Take me to Wolyeonggyo Bridge",
    titleKo: "월영교 주차장 가기",
    kr: "기사님, 월영교 주차장으로 가주세요.",
    phonetic: "Gi-sa-nim, Wol-yeong-gyo ju-cha-jang-eu-ro ga-ju-se-yo.",
    descEn: "Parking lot near Wolyeonggyo bridge entrance.",
    descKo: "월영교 야경 및 입구 주차장으로 이동할 때 보여주세요."
  },
  {
    titleEn: "Take me to Jjimdak Alley Market",
    titleKo: "안동 찜닭골목 가기",
    kr: "기사님, 안동 구시장 찜닭골목으로 가주세요.",
    phonetic: "Gi-sa-nim, An-dong Gu-si-jang Jjim-dak-gol-mok-eu-ro ga-ju-se-yo.",
    descEn: "Downtown Jjimdak market alley entrance.",
    descKo: "안동 구시장 내부 찜닭골목 위치 안내 문구입니다."
  }
];

const TRANSLATIONS = {
  en: {
    navAttractions: "Attractions",
    navItinerary: "Itineraries",
    navTaxi: "Taxi Helper",
    navTransport: "Getting Here",
    navSaved: "⭐ My Saved Trip",
    navCityHall: "Andong City Hall",
    langBtnText: "한국어",
    heroPill: "🇰🇷 Korea's Capital of Spirit & Culture",
    heroTitle: "Experience the Living History of Andong",
    heroSubtitle: "Step back in time to UNESCO World Heritage villages, centuries-old Confucian academies, glowing moonlight bridges, and mouthwatering culinary traditions.",
    searchPlaceholder: "Search places, food (Jjimdak), heritage sites, night views...",
    searchBtn: "Search",
    chipAll: "🌟 All Spots",
    chipHeritage: "🏯 UNESCO Heritage",
    chipNight: "🌙 Night Views",
    chipFood: "🍗 Food & Markets",
    chipSaved: "⭐ My Saved Places",
    sectionTitleDestinations: "Must-Visit Destinations in Andong",
    sectionDescDestinations: "Hand-curated top attractions with essential info, English guides, and driver directions.",
    noPlacesFound: "No places found matching your search.",
    clearFilters: "Clear Filters",
    viewDetails: "View Details & Taxi Card",
    taxiBtn: "🚖 Taxi",
    taxiPill: "🚖 Foreigner Survival Tool",
    taxiTitle: "Taxi Driver Cards (Show to Driver)",
    taxiDesc: "Many Korean taxi drivers may not speak fluent English. Tap any phrase below to copy or present the exact Korean destination screen directly to your driver!",
    showToDriverBtn: "📋 Show / Copy to Driver",
    playVoiceBtn: "Play Voice",
    playVoiceModal: "Play Voice to Driver",
    itineraryTitle: "Recommended Tourist Itineraries",
    itineraryDesc: "Optimized routes designed for smooth transit and maximum cultural experience.",
    tab1Day: "⚡ 1-Day Express Essential",
    tab2Day: "🌿 2-Day Culture & Heritage Relax",
    transportTitle: "Getting to & Around Andong",
    transportDesc: "Simple directions from major cities like Seoul, Busan, and Daegu.",
    transportKtxTitle: "From Seoul via KTX-Eum",
    transportKtxDesc: "Board at <strong>Cheongnyangni Station (청량리역)</strong>. Travel time is just <strong>1 hour 50 minutes</strong> direct to KTX Andong Station.",
    transportBusTitle: "Express Bus (Seoul / Busan)",
    transportBusDesc: "From Seoul Express Bus Terminal or Busan Central Terminal to <strong>Andong Bus Terminal</strong> (approx. 2.5 hours).",
    transportAppsTitle: "Essential Apps in Korea",
    transportAppsDesc: "Use <strong>KakaoMap</strong> or <strong>Naver Map</strong> for bus routes. Use <strong>Kakao T</strong> for easy taxi hailing without speaking Korean.",
    footerCopy: "© Discover Andong Travel Guide for Foreign Visitors. Built with pure HTML/CSS/JS (Offline File Compatible).",
    footerHelpline: "Emergency Tourist Helpline: Call <strong>1330</strong> (24/7 English, Japanese, Chinese support).",
    // Modal
    modalTaxiTitle: "🚖 Taxi Driver Card (Show Your Driver)",
    copyKoreanPhrase: "📋 Copy Korean Phrase",
    hoursLabel: "⏰ Hours:",
    admissionLabel: "🎟️ Admission:",
    busLabel: "🚌 Bus Transit:",
    highlightsHeader: "✨ Top Visitor Highlights",
    // Toast
    toastRemovedSaved: "Removed from Saved Trip Planner",
    toastAddedSaved: "Saved to Your Travel Plan!",
    toastCopied: "Copied to clipboard!",
    toastLangChanged: "Language switched to English!"
  },
  ko: {
    navAttractions: "관광지",
    navItinerary: "추천 코스",
    navTaxi: "택시 도우미",
    navTransport: "교통 안내",
    navSaved: "⭐ 내가 담은 코스",
    navCityHall: "안동시청 바로가기",
    langBtnText: "English",
    heroPill: "🇰🇷 한국 정신문화의 수도, 안동",
    heroTitle: "살아있는 역사의 숨결, 안동을 만나다",
    heroSubtitle: "유네스코 세계유산 마을, 수백 년 전통의 서원, 아름다운 월영교 야경과 대표 먹거리까지 안동의 모든 것을 즐겨보세요.",
    searchPlaceholder: "관광지, 안동찜닭, 유네스코 유산, 야경 검색...",
    searchBtn: "검색",
    chipAll: "🌟 전체보기",
    chipHeritage: "🏯 유네스코 유산",
    chipNight: "🌙 야경 & 자연",
    chipFood: "🍗 대표 먹거리",
    chipSaved: "⭐ 내가 담은 장소",
    sectionTitleDestinations: "안동 필수 추천 명소",
    sectionDescDestinations: "안동의 대표 관광지 정보, 관람 안내 및 택시 기사용 주소 카드를 확인하세요.",
    noPlacesFound: "검색 조건에 맞는 장소를 찾을 수 없습니다.",
    clearFilters: "필터 초기화",
    viewDetails: "상세보기 & 택시 카드",
    taxiBtn: "🚖 택시",
    taxiPill: "🚖 외국인 & 여행자 택시 카드",
    taxiTitle: "택시 기사님 전달용 카드",
    taxiDesc: "목적지 카드를 누르면 음성이 재생되거나, 기사님께 화면을 그대로 보여드릴 수 있습니다.",
    showToDriverBtn: "📋 주소 복사",
    playVoiceBtn: "음성 들려주기",
    playVoiceModal: "음성 들려주기",
    itineraryTitle: "추천 여행 코스",
    itineraryDesc: "동선과 문화 체험을 고려한 최적의 당일/1박2일 추천 코스입니다.",
    tab1Day: "⚡ 당일치기 알짜 코스",
    tab2Day: "🌿 1박 2일 문화유산 힐링 코스",
    transportTitle: "안동 찾아오는 길 & 교통 Guide",
    transportDesc: "서울, 부산, 대구 등 주요 도시에서 안동까지 오시는 방법입니다.",
    transportKtxTitle: "서울에서 KTX-이음 이용",
    transportKtxDesc: "<strong>청량리역</strong>에서 탑승 시 <strong>KTX 안동역</strong>까지 직통으로 약 <strong>1시간 50분</strong> 소요됩니다.",
    transportBusTitle: "고속버스 이용 (서울 / 부산)",
    transportBusDesc: "서울경부/동서울/부산터미널에서 <strong>안동버스터미널</strong>까지 약 2시간 30분 소요됩니다.",
    transportAppsTitle: "유용한 여행 필수 앱",
    transportAppsDesc: "<strong>카카오맵</strong>이나 <strong>네이버지도</strong>로 버스 노선을 확인하고, <strong>카카오T</strong>로 쉽게 택시를 호출하세요.",
    footerCopy: "© Discover Andong 여행 가이드. 순수 HTML/CSS/JS로 제작되었습니다.",
    footerHelpline: "관광 안내 전화: <strong>1330</strong> (24시간 한국어/영어/일어/중국어 지원)",
    // Modal
    modalTaxiTitle: "🚖 택시 기사님 전달용 카드",
    copyKoreanPhrase: "📋 한국어 주소 문구 복사",
    hoursLabel: "⏰ 관람 시간:",
    admissionLabel: "🎟️ 입장료:",
    busLabel: "🚌 대중교통:",
    highlightsHeader: "✨ 주요 관람 포인트",
    // Toast
    toastRemovedSaved: "저장된 코스에서 삭제되었습니다.",
    toastAddedSaved: "내 여행 코스에 저장되었습니다!",
    toastCopied: "클립보드에 복사되었습니다!",
    toastLangChanged: "한국어로 변경되었습니다!"
  }
};

// State Management
let savedPlaces = JSON.parse(localStorage.getItem('andong_saved_trips') || '[]');

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  applyLanguageUI();
  renderCards(DESTINATIONS);
  renderTaxiCards();
  updateSavedCount();
  setupEvents();
});

// Toggle Language
function toggleLanguage() {
  currentLang = (currentLang === 'en') ? 'ko' : 'en';
  localStorage.setItem('andong_lang', currentLang);
  
  const t = TRANSLATIONS[currentLang];
  showToast(t.toastLangChanged);
  
  applyLanguageUI();
  
  // Re-render views with new language
  const activeChip = document.querySelector('.chip.active');
  const cat = activeChip ? activeChip.getAttribute('data-category') : 'all';
  if (cat === 'all') {
    renderCards(DESTINATIONS);
  } else if (cat === 'saved') {
    const savedItems = DESTINATIONS.filter(d => savedPlaces.includes(d.id));
    renderCards(savedItems);
  } else {
    const filtered = DESTINATIONS.filter(d => d.category === cat);
    renderCards(filtered);
  }
  
  renderTaxiCards();
  
  const activeTab = document.querySelector('.itinerary-tab.active');
  if (activeTab && activeTab.getAttribute('onclick') && activeTab.getAttribute('onclick').includes('2day')) {
    showItinerary('2day');
  } else {
    showItinerary('1day');
  }
}

// Update Static HTML Elements based on current language
function applyLanguageUI() {
  const t = TRANSLATIONS[currentLang];

  // Navbar
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 4) {
    navLinks[0].innerText = t.navAttractions;
    navLinks[1].innerText = t.navItinerary;
    navLinks[2].innerText = t.navTaxi;
    navLinks[3].innerText = t.navTransport;
  }
  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) langBtnText.innerText = t.langBtnText;
  
  const navCityHallText = document.getElementById('navCityHallText');
  if (navCityHallText) navCityHallText.innerText = t.navCityHall;

  const navSavedText = document.getElementById('navSavedText');
  if (navSavedText) navSavedText.innerText = t.navSaved;

  // Hero
  const tagPill = document.querySelector('.tag-pill span');
  if (tagPill) tagPill.innerText = t.heroPill;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerText = t.heroTitle;

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) heroSubtitle.innerText = t.heroSubtitle;

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const searchBtn = document.querySelector('.hero-search-btn');
  if (searchBtn) searchBtn.innerText = t.searchBtn;

  // Chips
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    const cat = chip.getAttribute('data-category');
    if (cat === 'all') chip.innerText = t.chipAll;
    else if (cat === 'heritage') chip.innerText = t.chipHeritage;
    else if (cat === 'night') chip.innerText = t.chipNight;
    else if (cat === 'food') chip.innerText = t.chipFood;
    else if (cat === 'saved') chip.innerText = t.chipSaved;
  });

  // Section Header 1
  const secTitle1 = document.querySelector('#attractions .section-title');
  if (secTitle1) secTitle1.innerText = t.sectionTitleDestinations;

  const secDesc1 = document.querySelector('#attractions .section-desc');
  if (secDesc1) secDesc1.innerText = t.sectionDescDestinations;

  // Taxi Section
  const taxiPill = document.querySelector('#taxi-phrases span');
  if (taxiPill) taxiPill.innerText = t.taxiPill;

  const taxiTitle = document.querySelector('#taxi-phrases h2');
  if (taxiTitle) taxiTitle.innerText = t.taxiTitle;

  const taxiDesc = document.querySelector('#taxi-phrases p');
  if (taxiDesc) taxiDesc.innerText = t.taxiDesc;

  // Itinerary Section
  const itinTitle = document.querySelector('#itinerary .section-title');
  if (itinTitle) itinTitle.innerText = t.itineraryTitle;

  const itinDesc = document.querySelector('#itinerary .section-desc');
  if (itinDesc) itinDesc.innerText = t.itineraryDesc;

  const itinTabs = document.querySelectorAll('.itinerary-tab');
  if (itinTabs.length >= 2) {
    itinTabs[0].innerText = t.tab1Day;
    itinTabs[1].innerText = t.tab2Day;
  }

  // Transport Section
  const transTitle = document.querySelector('#transport .section-title');
  if (transTitle) transTitle.innerText = t.transportTitle;

  const transDesc = document.querySelector('#transport .section-desc');
  if (transDesc) transDesc.innerText = t.transportDesc;

  const transCards = document.querySelectorAll('.transport-card');
  if (transCards.length >= 3) {
    transCards[0].querySelector('h3').innerText = t.transportKtxTitle;
    transCards[0].querySelector('p').innerHTML = t.transportKtxDesc;

    transCards[1].querySelector('h3').innerText = t.transportBusTitle;
    transCards[1].querySelector('p').innerHTML = t.transportBusDesc;

    transCards[2].querySelector('h3').innerText = t.transportAppsTitle;
    transCards[2].querySelector('p').innerHTML = t.transportAppsDesc;
  }

  // Footer
  const footerParas = document.querySelectorAll('footer p');
  if (footerParas.length >= 2) {
    footerParas[0].innerText = t.footerCopy;
    footerParas[1].innerHTML = t.footerHelpline;
  }
}

// Render Destination Cards
function renderCards(items) {
  const container = document.getElementById('cardGrid');
  if (!container) return;
  const t = TRANSLATIONS[currentLang];

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">${t.noPlacesFound}</p>
        <button onclick="resetSearch()" class="btn btn-secondary">${t.clearFilters}</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => {
    const isSaved = savedPlaces.includes(item.id);
    const title = (currentLang === 'ko') ? item.titleKo : item.titleEn;
    const categoryLabel = (currentLang === 'ko') ? item.categoryLabelKo : item.categoryLabelEn;
    const desc = (currentLang === 'ko') ? item.descKo : item.descEn;
    const hours = (currentLang === 'ko') ? item.hoursKo : item.hoursEn;
    const admission = (currentLang === 'ko') ? item.admissionKo : item.admissionEn;

    return `
      <div class="card" data-id="${item.id}">
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${title}" class="card-img" loading="lazy">
          <span class="card-category">${categoryLabel}</span>
          <button class="card-bookmark-btn ${isSaved ? 'saved' : ''}" onclick="toggleBookmark('${item.id}', event)" title="Save to My Trip">
            ${isSaved ? '★' : '☆'}
          </button>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${title}</h3>
            <span style="color: var(--accent-gold); font-size: 0.9rem; font-weight: 700;">★ ${item.rating}</span>
          </div>
          <div class="card-kr-name">${item.krName}</div>
          <p class="card-desc">${desc}</p>
          <ul class="card-info-list">
            <li class="card-info-item">⏰ ${hours}</li>
            <li class="card-info-item">🎟️ ${admission}</li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" onclick="openDetailModal('${item.id}')">${t.viewDetails}</button>
          <button class="btn btn-secondary" onclick="copyTaxiCard('${item.id}')" title="Copy Taxi Address">${t.taxiBtn}</button>
        </div>
      </div>
    `;
  }).join('');
}

// Speech Synthesis (TTS) Voice Playback for Taxi Drivers
function speakText(text) {
  if (!text) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.85; // slightly slower for clear taxi playback
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KO'));
    if (koVoice) utterance.voice = koVoice;

    window.speechSynthesis.speak(utterance);
    
    const toastMsg = (currentLang === 'ko')
      ? '🔊 택시 기사님용 한국어 음성을 재생합니다.'
      : '🔊 Playing Korean voice for taxi driver!';
    showToast(toastMsg);
  } else {
    showToast(currentLang === 'ko' ? '이 브라우저는 음성 재생을 지원하지 않습니다.' : 'Speech synthesis is not supported on this browser.');
  }
}

// Render Taxi Flashcards
function renderTaxiCards() {
  const container = document.getElementById('taxiGrid');
  if (!container) return;
  const t = TRANSLATIONS[currentLang];

  container.innerHTML = TAXI_CARDS.map(card => {
    const title = (currentLang === 'ko') ? card.titleKo : card.titleEn;
    const desc = (currentLang === 'ko') ? card.descKo : card.descEn;

    return `
      <div class="phrase-card">
        <div onclick="speakText('${card.kr}')" style="cursor: pointer;" title="Tap to play voice">
          <div class="phrase-en">${title}</div>
          <div class="phrase-kr" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
            <span>${card.kr}</span>
            <span style="font-size: 1.3rem; color: var(--accent-gold); flex-shrink: 0;" title="Play voice">🔊</span>
          </div>
          <div class="phrase-phonetic">"${card.phonetic}"</div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.2rem;">${desc}</div>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <button class="copy-phrase-btn" style="flex: 1; background: var(--accent-gold); color: #000; font-weight: 700;" onclick="speakText('${card.kr}')">🔊 ${t.playVoiceBtn || 'Play Voice'}</button>
          <button class="copy-phrase-btn" style="flex: 1;" onclick="copyText('${card.kr}', '${t.toastCopied}')">${t.showToDriverBtn}</button>
        </div>
      </div>
    `;
  }).join('');
}

// Filter & Search Handling
function setupEvents() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = DESTINATIONS.filter(d => 
        (d.titleEn && d.titleEn.toLowerCase().includes(query)) ||
        (d.titleKo && d.titleKo.toLowerCase().includes(query)) ||
        d.krName.toLowerCase().includes(query) ||
        (d.descEn && d.descEn.toLowerCase().includes(query)) ||
        (d.descKo && d.descKo.toLowerCase().includes(query))
      );
      renderCards(filtered);
    });
  }

  // Filter Chips
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-category');
      
      if (cat === 'all') {
        renderCards(DESTINATIONS);
      } else if (cat === 'saved') {
        const savedItems = DESTINATIONS.filter(d => savedPlaces.includes(d.id));
        renderCards(savedItems);
      } else {
        const filtered = DESTINATIONS.filter(d => d.category === cat);
        renderCards(filtered);
      }
    });
  });
}

function resetSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip[data-category="all"]').classList.add('active');
  renderCards(DESTINATIONS);
}

// Bookmark Saving
function toggleBookmark(id, event) {
  if (event) event.stopPropagation();
  const t = TRANSLATIONS[currentLang];
  
  if (savedPlaces.includes(id)) {
    savedPlaces = savedPlaces.filter(item => item !== id);
    showToast(t.toastRemovedSaved);
  } else {
    savedPlaces.push(id);
    showToast(t.toastAddedSaved);
  }
  
  localStorage.setItem('andong_saved_trips', JSON.stringify(savedPlaces));
  updateSavedCount();
  
  // Re-render currently active chip view or current filter
  const activeChip = document.querySelector('.chip.active');
  if (activeChip && activeChip.getAttribute('data-category') === 'saved') {
    const savedItems = DESTINATIONS.filter(d => savedPlaces.includes(d.id));
    renderCards(savedItems);
  } else {
    renderCards(DESTINATIONS);
  }
}

function updateSavedCount() {
  const badge = document.getElementById('savedCount');
  if (badge) badge.innerText = savedPlaces.length;
}

// Detail Modal
function openDetailModal(id) {
  const place = DESTINATIONS.find(d => d.id === id);
  if (!place) return;

  const modal = document.getElementById('detailModal');
  const body = document.getElementById('modalContent');
  const t = TRANSLATIONS[currentLang];

  const title = (currentLang === 'ko') ? place.titleKo : place.titleEn;
  const desc = (currentLang === 'ko') ? place.descKo : place.descEn;
  const hours = (currentLang === 'ko') ? place.hoursKo : place.hoursEn;
  const admission = (currentLang === 'ko') ? place.admissionKo : place.admissionEn;
  const busInfo = (currentLang === 'ko') ? place.busInfoKo : place.busInfoEn;
  const highlights = (currentLang === 'ko') ? place.highlightsKo : place.highlightsEn;

  body.innerHTML = `
    <img src="${place.image}" alt="${title}" class="modal-header-img">
    <div class="modal-content-body">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <h2 style="font-size: 1.8rem; font-weight: 800;">${title}</h2>
        <span style="color: var(--accent-gold); font-size: 1.2rem; font-weight: 700;">★ ${place.rating} (${place.reviews})</span>
      </div>
      <div style="color: var(--accent-teal); font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem;">${place.krName}</div>

      <p style="color: var(--text-main); font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>

      <div class="show-driver-card">
        <div class="show-driver-title">${t.modalTaxiTitle}</div>
        <div class="show-driver-text" onclick="speakText('${place.taxiTip}')" style="cursor: pointer;" title="Tap to play voice">${place.taxiTip} 🔊</div>
        <div class="show-driver-subtext">Address: ${place.krAddress}</div>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem;">
          <button class="btn btn-primary" onclick="speakText('${place.taxiTip}')">🔊 ${t.playVoiceModal || 'Play Voice to Driver'}</button>
          <button class="btn btn-secondary" onclick="copyText('${place.taxiTip}', '${t.toastCopied}')">${t.copyKoreanPhrase}</button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem; background: rgba(0,0,0,0.2); padding: 1.25rem; border-radius: var(--radius-md);">
        <div><strong>${t.hoursLabel}</strong> ${hours}</div>
        <div><strong>${t.admissionLabel}</strong> ${admission}</div>
        <div style="grid-column: 1/-1;"><strong>${t.busLabel}</strong> ${busInfo}</div>
      </div>

      <div style="margin-top: 1.5rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--accent-gold);">${t.highlightsHeader}</h4>
        <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-muted);">
          ${highlights.map(h => `<li style="margin-bottom: 0.4rem;">${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.classList.remove('active');
}

// Copy Taxi Card Helper
function copyTaxiCard(id) {
  const place = DESTINATIONS.find(d => d.id === id);
  const t = TRANSLATIONS[currentLang];
  if (place) {
    copyText(place.taxiTip, `${t.toastCopied}`);
  }
}

// Copy Text Utilities
function copyText(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    // Fallback if clipboard API restricted in local context
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg);
  });
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Timeline Itinerary Tab Switcher
function showItinerary(type) {
  const container = document.getElementById('itineraryContent');
  const tabs = document.querySelectorAll('.itinerary-tab');
  tabs.forEach(t => t.classList.remove('active'));

  if (type === '1day') {
    document.querySelector('.itinerary-tab[onclick*="1day"]').classList.add('active');
    if (currentLang === 'ko') {
      container.innerHTML = `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">오전 09:00 - 09:45</div>
            <div class="timeline-title">🚄 KTX 안동역 도착</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">서울 청량리역에서 KTX-이음 탑승 (1시간 50분 소요). 안동역에서 210번 버스 또는 택시로 하회마을 이동.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">오전 10:30 - 오후 01:30</div>
            <div class="timeline-title">🏡 안동 하회마을 둘러보기</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">조선시대 한옥과 초가집 사이를 산책하고, 나룻배를 타고 부용대에 올라 하회마을 전체 전경을 감상하세요.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">오후 02:00 - 03:00</div>
            <div class="timeline-title">🎭 하회별신굿탈놀이 관람</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">하회탈춤 전수교육관에서 신명나는 전통 풍자와 해학의 탈춤 공연을 관람합니다.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">오후 05:30 - 07:00</div>
            <div class="timeline-title">🍲 안동 구시장 찜닭골목 저녁 식사</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">안동 시내 구시장에서 매콤달콤한 원조 안동찜닭과 안동소주 또는 시원한 맥주를 즐기세요.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">오후 07:30 - 09:00</div>
            <div class="timeline-title">🌙 월영교 야경 산책 & 문보트</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">국내 최장 목책교인 월영교의 야경을 감상하고, 낙동강 위에서 빛나는 초승달 모양 문보트를 타보세요!</p>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">09:00 AM - 09:45 AM</div>
            <div class="timeline-title">🚄 Arrival at KTX Andong Station</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Take KTX-Eum from Seoul Cheongnyangni (1 hr 50 mins). Take Bus #210 or Taxi to Hahoe Village.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">10:30 AM - 01:30 PM</div>
            <div class="timeline-title">🏡 Explore Andong Hahoe Folk Village</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Stroll among Joseon Dynasty hanok houses, visit Mansayeong, and cross river ferry to Buyongdae Cliff.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">02:00 PM - 03:00 PM</div>
            <div class="timeline-title">🎭 Catch Hahoe Mask Dance (Talchum) Performance</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Enjoy the live comedy & satire mask dance drama performance at Hahoe Performance Hall.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">05:30 PM - 07:00 PM</div>
            <div class="timeline-title">🍲 Feast on Andong Jjimdak at Gu-Sijang Market</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Head downtown for authentic spicy soy braised chicken with glass noodles & local cold beer or Andong Soju.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">07:30 PM - 09:00 PM</div>
            <div class="timeline-title">🌙 Romantic Night Walk at Wolyeonggyo Wooden Bridge</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Cross the glowing timber bridge, watch reflections on Nakdong river, and ride an illuminated Moon Boat!</p>
          </div>
        </div>
      `;
    }
  } else {
    document.querySelector('.itinerary-tab[onclick*="2day"]').classList.add('active');
    if (currentLang === 'ko') {
      container.innerHTML = `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">1일차 - 오전 & 오후</div>
            <div class="timeline-title">유네스코 세계유산: 하회마을 & 병산서원</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">하회마을에서 전통 문화에 젖어들고, 병산서원 만대루에서 낙동강 절경을 호흡합니다.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">1일차 - 저녁</div>
            <div class="timeline-title">월영교 환상 야경 & 헛제삿밥</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">월영교 부근에서 안동 전통 헛제삿밥으로 저녁을 먹고 호수 야간 산책과 문보트를 탑승합니다.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">2일차 - 오전</div>
            <div class="timeline-title">도산서원 유교 문화 탐방</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">퇴계 이황 선생의 선비 정신이 담긴 도산서원을 방문하여 울창한 솔숲과 낙동강을 감상합니다.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">2일차 - 오후</div>
            <div class="timeline-title">맘모스베이커리 & 전통 안동소주 쇼핑</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">안동 시내 맘모스베이커리에서 크림치즈빵을 맛보고 귀가 전 기념품으로 전통 안동소주를 구매합니다!</p>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">DAY 1 - Morning & Afternoon</div>
            <div class="timeline-title">UNESCO Heritage: Hahoe Village & Byeongsan Seowon</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Immerse in Joseon folklore at Hahoe Village, followed by Mantaeru Pavilion at Byeongsan Seowon Academy.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">DAY 1 - Evening</div>
            <div class="timeline-title">Wolyeonggyo Night Illumination & Moon Boat</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Dinner at Heotjesatbap (sacrificial rice set) near Wolyeonggyo bridge and night lake stroll.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">DAY 2 - Morning</div>
            <div class="timeline-title">Dosan Seowon Confucian Academy</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Visit Master Toegye's historic scholar academy surrounded by scenic pine forests.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">DAY 2 - Afternoon</div>
            <div class="timeline-title">Bakery Crawl & Craft Soju Shopping</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Pick up Cream Cheese Bread at Mammoth Bakery and shop for artisanal Andong Traditional Soju before heading home!</p>
          </div>
        </div>
      `;
    }
  }
}
