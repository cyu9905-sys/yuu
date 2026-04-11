// [데이터 설정] 이미지 파일 이름과 스타일 이름을 정의합니다.
// GitHub 서버는 대소문자를 구분하므로 실제 파일명(jpg 또는 JPG)을 정확히 맞춰주세요.
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

// 페이지가 열리면 자동으로 리스트를 그립니다.
document.addEventListener('DOMContentLoaded', () => {
    renderStyles();
});

// 오른쪽 사이드바에 스타일 8개를 만드는 함수
function renderStyles() {
    const grid = document.getElementById('style-grid');
    if(!grid) return;

    grid.innerHTML = styleList.map(style => `
        <div class="style-item" id="item-${style.id}" onclick="changeStyle('${style.img}', ${style.id})">
            <img src="${style.thumb}" alt="${style.name}" onerror="this.src='https://via.placeholder.com/150?text=Check+Filename'">
            <span>${style.name}</span>
        </div>
    `).join('');
}

// 클릭 시 메인 아바타 이미지를 바꾸는 함수
function changeStyle(imagePath, id) {
    const mainAvatar = document.getElementById('current-avatar');
    if (!mainAvatar) return;

    // 선택된 항목 강조 표시
    document.querySelectorAll('.style-item').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`item-${id}`);
    if (target) target.classList.add('active');

    // 부드럽게 깜빡이며 변경
    mainAvatar.style.opacity = '0.3';
    
    setTimeout(() => {
        mainAvatar.src = imagePath;
        mainAvatar.onload = () => { mainAvatar.style.opacity = '1'; };
        
        // [중요] 만약 이미지가 안나오면 대문자(.JPG)로도 한번 더 찾아봅니다 (404 방지)
        mainAvatar.onerror = () => {
            if(imagePath.includes('.jpg')) {
                mainAvatar.src = imagePath.replace('.jpg', '.JPG');
            } else {
                mainAvatar.src = 'https://via.placeholder.com/500x700?text=404+Not+Found';
            }
            mainAvatar.style.opacity = '1';
        };
    }, 150);
}

// 적용 버튼 클릭 알림
function applySelection() {
    alert("사장님, 선택하신 스타일이 아바타에 성공적으로 적용되었습니다!");
}