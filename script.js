// Mở bánh khi nhấn vào hộp quà
document.getElementById('open-gift').addEventListener('click', () => {
    const greetingScreen = document.getElementById('greeting-screen');
    const cake = document.querySelector('.cake');
    const instructionText = document.querySelector('.instruction-text'); // Lấy phần chỉ dẫn

    // Phát nhạc khi nhấn vào hộp quà
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log("Lỗi khi phát nhạc: ", error);
    });
    
    greetingScreen.style.opacity = '0';
  
    setTimeout(() => {
        greetingScreen.style.display = 'none';
        cake.style.display = 'block';
        releaseBalloons();

        instructionText.style.display = 'none'; // Ẩn chỉ dẫn khi chuyển cảnh sang bánh
    }, 500);
});

// Thêm các sự kiện và kiểm tra như trước cho việc tắt lửa và hiển thị thiệp
document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', () => {
        flame.classList.add('extinguished');
        checkAllCandlesExtinguished();
    });
});

function checkAllCandlesExtinguished() {
    const flames = document.querySelectorAll('.flame');
    const extinguishedFlames = document.querySelectorAll('.flame.extinguished');
    
    if (flames.length === extinguishedFlames.length) {
        const birthdayCard = document.getElementById('birthday-card');
        birthdayCard.style.display = 'block';

        birthdayCard.classList.add('fadeIn');
    }
}



// Tạo trái tim rơi
const heartsContainer = document.querySelector('.falling-hearts');

function createHeart() {
  const heart = document.createElement('span');
  heart.innerText = '💕';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 3) + 's';
  heart.style.fontSize = (50 + Math.random() * 26) + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Tạo trái tim liên tục
setInterval(createHeart, 300);

function releaseBalloons() {
    const balloonContainer = document.querySelector('.balloon-release');
    const messages = ['🎉 Happy B-Day!', '🎈 Yêu nhiều lắm!', '🍉 Mạnh khỏe !', '🥳 Mừng tuổi mới!', '💖 Luôn là người đặc biệt!'];
    const colors = ['#ff4b91', '#ff9800', '#42a5f5', '#ab47bc', '#66bb6a', '#f06292'];
  
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerText = messages[Math.floor(Math.random() * messages.length)];
        balloon.style.left = Math.random() * 60 + 'vw';
        balloon.style.color = '#fff';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.fontSize = (25 + Math.random() * 8) + 'px';
        balloon.style.animationDuration = (7 + Math.random() * 2) + 's';
        balloon.style.letterSpacing = '10px';  // Chữ thưa ra
  
        balloonContainer.appendChild(balloon);
  
        setTimeout(() => {
          balloon.remove();
        }, 7000);
      }, i * 500); // Cách nhau 300ms
    }
  }
  
