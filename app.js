document.addEventListener('DOMContentLoaded', () => {
  // --- Language Toggle Handler ---
  const langToggleBtn = document.getElementById('lang-toggle');
  
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = langToggleBtn.getAttribute('data-lang');
      if (currentLang === 'en') {
        document.body.classList.add('ko-active');
        langToggleBtn.setAttribute('data-lang', 'ko');
        langToggleBtn.innerHTML = '🇺🇸 EN';
        showToast("한국어로 변경되었습니다.");
      } else {
        document.body.classList.remove('ko-active');
        langToggleBtn.setAttribute('data-lang', 'en');
        langToggleBtn.innerHTML = '🇰🇷 KO';
        showToast("Switched to English.");
      }
      // Update dynamic parts immediately
      updateWoryeonggyoBadge();
      updateTimeline();
    });
  }

  // --- Header Scroll Effect ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Woryeonggyo Bridge Night Mode Toggle ---
  const woryeonggyoCard = document.getElementById('woryeonggyo-card');
  const toggleNightBtn = document.getElementById('toggle-night');
  const woryeonggyoBadge = document.getElementById('woryeonggyo-badge');

  if (toggleNightBtn && woryeonggyoCard) {
    toggleNightBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      woryeonggyoCard.classList.toggle('night-mode');
      
      const isNight = woryeonggyoCard.classList.contains('night-mode');
      const isKo = document.body.classList.contains('ko-active');

      if (isNight) {
        toggleNightBtn.innerHTML = '☀️';
        toggleNightBtn.title = isKo ? '낮 뷰로 변경' : 'Switch to Day View';
        showToast(isKo ? "월영교 야경 뷰로 전환되었습니다!" : "Switched Woryeonggyo Bridge to Night View!");
      } else {
        toggleNightBtn.innerHTML = '🌙';
        toggleNightBtn.title = isKo ? '야경 뷰로 변경' : 'Switch to Night View';
        showToast(isKo ? "월영교 낮 뷰로 전환되었습니다!" : "Switched Woryeonggyo Bridge to Day View!");
      }
      updateWoryeonggyoBadge();
    });
  }

  function updateWoryeonggyoBadge() {
    if (!woryeonggyoBadge || !woryeonggyoCard) return;
    const isNight = woryeonggyoCard.classList.contains('night-mode');
    const isKo = document.body.classList.contains('ko-active');
    
    if (isNight) {
      woryeonggyoBadge.textContent = isKo ? '환상적인 야경 뷰' : 'Stunning Night View';
    } else {
      woryeonggyoBadge.textContent = isKo ? '아름다운 강변 교량' : 'Scenic River Bridge';
    }
  }

  // --- Culture Showcase Tabs ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Update buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update contents
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${targetTab}-tab`) {
          content.classList.add('active');
        }
      });
    });
  });

  // --- Custom Route Builder Data & Logic ---
  const attractionsData = [
    { id: 'hahoe', nameEn: 'Hahoe Folk Village', nameKo: '하회마을', duration: 180, timeStrEn: '3 hrs', timeStrKo: '3시간', icon: '🛖' },
    { id: 'woryeonggyo', nameEn: 'Woryeonggyo Bridge', nameKo: '월영교', duration: 60, timeStrEn: '1 hr', timeStrKo: '1시간', icon: '🌉' },
    { id: 'dosan', nameEn: 'Dosanseowon Academy', nameKo: '도산서원', duration: 90, timeStrEn: '1.5 hrs', timeStrKo: '1.5시간', icon: '🏫' },
    { id: 'byeongsan', nameEn: 'Byeongsanseowon Academy', nameKo: '병산서원', duration: 90, timeStrEn: '1.5 hrs', timeStrKo: '1.5시간', icon: '🏞️' },
    { id: 'bongjeongsa', nameEn: 'Bongjeongsa Temple', nameKo: '봉정사', duration: 90, timeStrEn: '1.5 hrs', timeStrKo: '1.5시간', icon: '🏯' }
  ];

  let selectedRouteIds = [];

  const pickerItems = document.querySelectorAll('.picker-item');
  const timelinePlaceholder = document.getElementById('timeline-placeholder');
  const timelineList = document.getElementById('timeline-list');
  const totalDurationEl = document.getElementById('total-duration');
  const transitTimeEl = document.getElementById('transit-time');
  const travelTipsEl = document.getElementById('travel-tips');
  const exportRouteBtn = document.getElementById('export-route');

  pickerItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const index = selectedRouteIds.indexOf(id);

      if (index === -1) {
        selectedRouteIds.push(id);
        item.classList.add('selected');
        item.querySelector('.picker-action').textContent = '×';
      } else {
        selectedRouteIds.splice(index, 1);
        item.classList.remove('selected');
        item.querySelector('.picker-action').textContent = '+';
      }

      updateTimeline();
    });
  });

  function updateTimeline() {
    const isKo = document.body.classList.contains('ko-active');

    if (selectedRouteIds.length === 0) {
      timelinePlaceholder.style.display = 'flex';
      timelineList.style.display = 'none';
      if (exportRouteBtn) exportRouteBtn.style.display = 'none';
      totalDurationEl.textContent = isKo ? '0시간' : '0 hrs';
      transitTimeEl.textContent = isKo ? '0분' : '0 mins';
      travelTipsEl.textContent = isKo ? '일정을 작성하려면 왼편에서 관광지를 선택해 주세요!' : 'Add some attractions to plan your day!';
      return;
    }

    timelinePlaceholder.style.display = 'none';
    timelineList.style.display = 'flex';
    if (exportRouteBtn) exportRouteBtn.style.display = 'inline-flex';
    timelineList.innerHTML = '';

    let totalMinutes = 0;
    let transitMinutes = 0;
    const transitOffset = 40; // 40 mins transit

    selectedRouteIds.forEach((id, index) => {
      const attraction = attractionsData.find(a => a.id === id);
      if (!attraction) return;

      totalMinutes += attraction.duration;

      const node = document.createElement('div');
      node.className = `timeline-node ${index === 0 ? 'start' : ''}`;
      
      const startTime = new Date(2026, 0, 1, 9, 0);
      const nodeStartTime = new Date(startTime.getTime() + (totalMinutes - attraction.duration + transitMinutes) * 60 * 1000);
      const nodeEndTime = new Date(nodeStartTime.getTime() + attraction.duration * 60 * 1000);
      
      const formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;
        if (isKo) {
          const ampm = hours >= 12 ? '오후' : '오전';
          hours = hours % 12;
          hours = hours ? hours : 12;
          return `${ampm} ${hours}:${minutes}`;
        } else {
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          return `${hours}:${minutes} ${ampm}`;
        }
      };

      const timeRangeString = `${formatTime(nodeStartTime)} - ${formatTime(nodeEndTime)}`;
      const timeStr = isKo ? attraction.timeStrKo : attraction.timeStrEn;
      const attractionName = isKo ? attraction.nameKo : attraction.nameEn;

      let transitMarkup = '';
      if (index < selectedRouteIds.length - 1) {
        transitMinutes += transitOffset;
        transitMarkup = `
          <div class="timeline-transit">
            <span>🚗</span> ${isKo ? `다음 목적지까지 ${transitOffset}분 이동` : `${transitOffset} mins transit to next destination`}
          </div>
        `;
      }

      node.innerHTML = `
        <div class="timeline-card">
          <div class="timeline-time">${timeRangeString} (${timeStr})</div>
          <div class="timeline-title">${attraction.icon} ${attractionName}</div>
          ${transitMarkup}
        </div>
      `;
      timelineList.appendChild(node);
    });

    const totalHours = ((totalMinutes + transitMinutes) / 60).toFixed(1);
    totalDurationEl.textContent = isKo ? `${totalHours}시간` : `${totalHours} hrs`;
    transitTimeEl.textContent = isKo ? `${transitMinutes}분` : `${transitMinutes} mins`;

    // Dynamic travel tips recommendations
    if (totalHours > 10) {
      travelTipsEl.textContent = isKo 
        ? "⚠️ 일정이 매우 빽빽합니다! 역사를 충분히 즐기시려면 2일 코스로 나누거나 개인 택시 가이드를 예약하는 것을 추천합니다."
        : "⚠️ This is a very packed schedule! We recommend breaking this into a 2-day trip to fully enjoy the history, or booking a private taxi guide.";
    } else if (selectedRouteIds.includes('hahoe') && selectedRouteIds.includes('woryeonggyo')) {
      travelTipsEl.textContent = isKo
        ? "💡 탁월한 선택입니다! 하회마을은 오후 전통 공연 시간에 방문하고, 저녁 황혼 무렵에 월영교 야경을 감상하는 코스가 가장 좋습니다."
        : "💡 Excellent choice! Hahoe is best visited in the afternoon for the traditional performances, followed by Woryeonggyo for the evening twilight views.";
    } else {
      travelTipsEl.textContent = isKo
        ? "💡 팁: 렌터카를 이용하지 않는 경우 버스 시간표를 꼭 확인하세요. 안동의 관광지들은 서로 멀리 떨어져 있습니다."
        : "💡 Tip: Make sure to check bus timetables if you aren't renting a car. Andong attractions are spread out across the region.";
    }
  }

  // Export Route Checklist
  if (exportRouteBtn) {
    exportRouteBtn.addEventListener('click', () => {
      const isKo = document.body.classList.contains('ko-active');
      let routeText = isKo ? `--- 나의 안동 일정표 ---\n\n` : `--- MY ANDONG ITINERARY ---\n\n`;
      let totalMinutes = 0;
      let transitMinutes = 0;
      const transitOffset = 40;

      selectedRouteIds.forEach((id, index) => {
        const attraction = attractionsData.find(a => a.id === id);
        if (!attraction) return;

        totalMinutes += attraction.duration;
        const startTime = new Date(2026, 0, 1, 9, 0);
        const nodeStartTime = new Date(startTime.getTime() + (totalMinutes - attraction.duration + transitMinutes) * 60 * 1000);
        const nodeEndTime = new Date(nodeStartTime.getTime() + attraction.duration * 60 * 1000);

        const formatTime = (date) => {
          let hours = date.getHours();
          let minutes = date.getMinutes();
          minutes = minutes < 10 ? '0'+minutes : minutes;
          if (isKo) {
            const ampm = hours >= 12 ? '오후' : '오전';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return `${ampm} ${hours}:${minutes}`;
          } else {
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return `${hours}:${minutes} ${ampm}`;
          }
        };

        const attractionName = isKo ? attraction.nameKo : attraction.nameEn;
        const timeStr = isKo ? attraction.timeStrKo : attraction.timeStrEn;

        routeText += `${index + 1}. [${formatTime(nodeStartTime)} - ${formatTime(nodeEndTime)}] ${attractionName} (${timeStr})\n`;
        
        if (index < selectedRouteIds.length - 1) {
          transitMinutes += transitOffset;
          routeText += isKo ? `   >> 이동 시간: 40분\n` : `   >> Transit: 40 mins\n`;
        }
      });

      const totalHours = ((totalMinutes + transitMinutes) / 60).toFixed(1);
      routeText += isKo 
        ? `\n총 소요 시간: ${totalHours}시간\n안동에서 멋진 시간 보내세요!`
        : `\nTotal Estimated Time: ${totalHours} hours.\nEnjoy Andong!`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(routeText).then(() => {
        showToast(isKo ? "일정이 복사되었습니다! 메모장에 붙여넣으세요." : "Itinerary copied to clipboard! Paste it into your notes.");
      }).catch(err => {
        alert(routeText);
      });
    });
  }

  // --- TTS Phrasebook Speech Synthesis ---
  const phraseCards = document.querySelectorAll('.phrase-card');
  phraseCards.forEach(card => {
    card.addEventListener('click', () => {
      const koreanText = card.dataset.korean;
      speakKorean(koreanText);
    });
  });

  function speakKorean(text) {
    const isKo = document.body.classList.contains('ko-active');
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.85;
      
      const voices = window.speechSynthesis.getVoices();
      const koVoice = voices.find(voice => voice.lang.includes('ko'));
      if (koVoice) {
        utterance.voice = koVoice;
      }
      
      window.speechSynthesis.speak(utterance);
      showToast(isKo ? `발음 재생 중: "${text}"` : `Speaking: "${text}"`);
    } else {
      showToast(isKo ? "이 브라우저는 음성 재생을 지원하지 않습니다." : "Speech synthesis is not supported on this browser.");
    }
  }

  // --- Toast Notification helper ---
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastText) return;
    
    toastText.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Pre-load voices list
    };
  }
});
