// 현재 활성화된 카드의 인덱스를 추적합니다.
let currentCardIndex = 1;

// 페이지 로드시 초기화 함수를 실행합니다.
document.addEventListener('DOMContentLoaded', function() {
  // 첫 번째 카드를 제외한 모든 카드를 숨깁니다.
  hideAllCardsExceptFirst();
  // 모든 'Next' 버튼에 이벤트 리스너를 추가합니다. -- 아래내용 필요없음. html에서 버튼 호출해주기때문)
//  const nextButtons = document.querySelectorAll('.next-button');
//  nextButtons.forEach(button => {
//    button.addEventListener('click', showNextCard);
//  });

});

function hideAllCardsExceptFirst() {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach((card, index) => {
    if (index !== 0) { // 첫 번째 카드(index 0)를 제외하고 숨깁니다.
      card.style.display = 'none';
    }
  });
}



function showNextCard() {
  console.log("현재 카드 인덱스 (함수 시작):", currentCardIndex);
  var currentCard = document.getElementById('card' + currentCardIndex);

  if (currentCard) {
    currentCard.style.display = 'none';
    console.log("카드 숨김:", 'card' + currentCardIndex);
  }

  currentCardIndex++;
  console.log("다음 카드 인덱스:", currentCardIndex);

  var nextCard = document.getElementById('card' + currentCardIndex);

  if (nextCard) {
    nextCard.style.display = 'block';
    console.log("카드 표시:", 'card' + currentCardIndex);
  } else {
    alert('더 이상 카드가 없습니다.');
    console.log("더 이상 카드가 없음");
  }
}