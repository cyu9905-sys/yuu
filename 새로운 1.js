// 스타일 데이터 정의
const styleList = [
    { id: 1, name: "미니멀 룩", img: "style1.jpg", thumb: "style1_thumb.jpg" },
    { id: 2, name: "어반 스타일", img: "style2.jpg", thumb: "style2_thumb.jpg" },
    { id: 3, name: "오피스 룩", img: "office_full.jpg", thumb: "office_thumb.jpg" },
    { id: 4, name: "캐주얼 룩", img: "casual_full.jpg", thumb: "casual_thumb.jpg" },
    { id: 5, name: "스트릿 패션", img: "street_full.jpg", thumb: "street_thumb.jpg" },
    { id: 6, name: "모던 클래식", img: "modern_full.jpg", thumb: "modern_thumb.jpg" },
    { id: 7, name: "스포티 룩", img: "sporty_full.jpg", thumb: "sporty_thumb.jpg" },
    { id: 8, name: "데일리 룩", img: "daily_full.jpg", thumb: "daily_thumb.jpg" }
];

// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
    renderStyles();
});

// 사이드바 리스트 생성 함수
function renderStyles() {
    const grid = document.getElementById('style-grid');
    if(!grid) return;

    grid.innerHTML = styleList.map(style => `
        <div class="style-item" id="item-${style.id}" onclick="changeStyle('${style.img}', ${style.id})">
            <img src="${style.thumb}" alt="${style.name}" onerror="this.src='https://via.placeholder.com/150?text=Image'">
            <span>${style.name}</span>
        </div>
    `).join('');
}

// 메인 이미지 변경 함수
function changeStyle(imagePath, id) {
    const mainAvatar = document.getElementById('current-avatar');
    if (!mainAvatar) return;

    // 선택 효과 적용
    document.querySelectorAll('.style-item').forEach(el => el.classList.remove('active'));
    const targetItem = document.getElementById(`item-${id}`);
    if (targetItem) targetItem.classList.add('active');

    // 부드러운 전환 효과
    mainAvatar.style.opacity = '0.3';
    
    setTimeout(() => {
        mainAvatar.src = imagePath;
        mainAvatar.onload = () => { mainAvatar.style.opacity = '1'; };
        mainAvatar.onerror = () => { 
            mainAvatar.src = 'https://via.placeholder.com/500x700?text=Image+Not+Found';
            mainAvatar.style.opacity = '1';
        };
    }, 150);
}

// 최종 적용 버튼
function applySelection() {
    alert("사장님, 선택하신 스타일이 시스템에 최종 적용되었습니다!");
}