document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử DOM cần thiết
  const startButton = document.querySelector(".start");
  const car1 = document.querySelector(".car-1");
  const car2 = document.querySelector(".car-2");
  const finishLine = document.querySelector(".finish");

  // Biến để kiểm soát trạng thái của trò chơi
  let gameStarted = false;

  // Hàm để tạo số ngẫu nhiên từ 1 đến 10 cho tốc độ xe
  function getRandomSpeed() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // Hàm để bắt đầu trò chơi khi click vào nút "Bắt đầu"
  function startGame() {
    if (!gameStarted) {
      gameStarted = true;

      // Lấy tốc độ ngẫu nhiên cho mỗi xe
      const speed1 = getRandomSpeed();
      const speed2 = getRandomSpeed();

      // Di chuyển xe và kiểm tra vị trí
      moveCar(car1, speed1);
      moveCar(car2, speed2);
    }
  }

  // Hàm để di chuyển xe và kiểm tra vị trí
  function moveCar(car, speed) {
    const intervalId = setInterval(function () {
      const currentPosition = car.offsetLeft;
      const newPosition = currentPosition + speed;

      car.style.left = newPosition + "px";

      // Kiểm tra nếu xe đã vượt qua vạch kết thúc
      if (newPosition >= finishLine.offsetLeft) {
        clearInterval(intervalId);
        finishGame(car);
      }
    }, 20);
  }

  // Hàm để kết thúc trò chơi khi một xe đến vạch kết thúc
  function finishGame(winningCar) {
    gameStarted = false;

    // Dừng xe của cả hai
    car1.style.transition = "none";
    car2.style.transition = "none";

    // Hiển thị thông báo về xe thắng
    alert(`Xe ${winningCar.className} thắng!`);

    // Thiết lập lại vị trí ban đầu của các xe
    car1.style.left = "0";
    car2.style.left = "0";

    // Bật lại transition
    setTimeout(function () {
      car1.style.transition = "left 2s linear";
      car2.style.transition = "left 2s linear";
    }, 100);
  }

  // Đăng ký sự kiện click cho nút "Bắt đầu"
  startButton.addEventListener("click", startGame);
});
