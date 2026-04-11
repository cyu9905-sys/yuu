// 스타일 변경 함수
function changeStyle(imagePath) {
    const mainAvatar = document.getElementById('current-avatar');
    
    // 페이드 효과와 함께 이미지 교체
    mainAvatar.style.opacity = 0.5;
    
    setTimeout(() => {
        mainAvatar.src = imagePath;
        mainAvatar.style.opacity = 1;
    }, 150);
}

// 8개 스타일 데이터를 배열로 관리하면 편리합니다
const styleList = [
    { id: 1, name: "오피스 룩", img: "office_full.jpg", thumb: "office_thumb.jpg" },
    { id: 2, name: "캐주얼 룩", img: "casual_full.jpg", thumb: "casual_thumb.jpg" },
    // 추가적인 8개 스타일 정의...
];