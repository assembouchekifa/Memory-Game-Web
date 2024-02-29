let minut = 1,
  timden,
  timm = minut * 60;
let time = 1500;
let winn = 0;
let titr = document.getElementsByTagName("span");
let bloksCelictor = document.querySelector(".game");
let bloks = Array.from(bloksCelictor.children);
let ordarRang = [...Array(bloks.length).keys()];
shuffel(ordarRang);
bloks.forEach((blok, i) => {
  blok.style.order = ordarRang[i];
  blok.addEventListener("click", () => {
    flip(blok);
  });
});
function shuffel(array) {
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array[current];
}
function flip(celiktBlock) {
  celiktBlock.classList.add("is-flip");
  let allflip = bloks.filter((flipBlock) =>
    flipBlock.classList.contains("is-flip")
  );
  if (allflip.length === 2) {
    stopckik();
    setTimeout(() => {
      chekblok(allflip[0], allflip[1]);
    }, time);
  }
}
function stopckik() {
  bloksCelictor.classList.add("no-cklik");
  setTimeout(() => {
    bloksCelictor.classList.remove("no-cklik");
  }, time);
}
function chekblok(firsBlock, secandBlock) {
  if (firsBlock.innerHTML === secandBlock.innerHTML) {
    firsBlock.classList.remove("is-flip");
    secandBlock.classList.remove("is-flip");
    firsBlock.classList.add("win");
    secandBlock.classList.add("win");
    winn++;
    if (winn === 8) {
      console.log("a");
      win();
    }
  } else {
    firsBlock.classList.remove("is-flip");
    secandBlock.classList.remove("is-flip");
    timm -= 5;
    titr[1].classList.remove("hide");
    setTimeout(() => {
      titr[1].classList.add("hide");
    }, 500);
  }
}
bloksCelictor.addEventListener("click", () => {
  if (titr[0].innerHTML === "Memory Game") {
    firsmemory();
    timden = setInterval(() => {
      timer();
    }, 1000);
  }
});
function timer() {
  let min = Math.floor(timm / 60),
    sec = timm % 60;
  titr[0].innerHTML = min + ":" + sec;
  if (timm > 0) {
    timm--;
  } else {
    clearInterval(timden);
    gameOver();
  }
}
function gameOver() {
  bloksCelictor.classList.add("no-cklik");
  titr[0].innerHTML = "game over";
  setTimeout(() => {
    location.reload();
  }, 3000);
}

function win() {
  bloksCelictor.classList.add("no-cklik");
  document.getElementsByTagName("h3")[0].innerHTML = "winner";
  setTimeout(() => {
    location.reload();
  }, 3000);
}
function firsmemory() {
  bloks.forEach((element) => {
    element.classList.add("is-flip");
    setTimeout(() => {
      element.classList.remove("is-flip");
    }, 2000);
  });
}
