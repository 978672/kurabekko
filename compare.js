let kakaku1 = document.getElementById("kakaku1");
let capa1 = document.getElementById("capacity1");
let kakaku2 = document.getElementById("kakaku2");
let capa2 = document.getElementById("capacity2");


function calculateResult() {
  if(kakaku1.value === "" || kakaku2.value === ""){
    alert("どっちかの価格が空です");
    return;
  }else if(capa1.value === "" || capa2.value === ""){
    alert("どっちかの内容量が空です");
    return;
  }
  const res1 = Math.round((capa1.value / kakaku1.value) * 100000) / 100000;
  const res2 = Math.round((capa2.value / kakaku2.value) * 100000) / 100000;

  //取得
  let displayRes1 = document.getElementById("res1");
  displayRes1.textContent = res1;
  let displayRes2 = document.getElementById("res2");
  displayRes2.textContent = res2;
  let resLabel1 = document.getElementById("resLabel1");
  resLabel1.textContent = "result 1円あたり";
  let resLabel2 = document.getElementById("resLabel2");
  resLabel2.textContent = "result 1円あたり";

  let displayLeft = document.getElementById("left");
  let displayRight = document.getElementById("right");
  if (res1 < res2) {
    displayLeft.style.backgroundColor = "#C0C0C0";
    displayRight.style.backgroundColor = "#FFCCCC";
    let sign = document.getElementById("sign2");
    sign.textContent = "!!安い!!";
    sign.style.color = "red";
    let preSign = document.getElementById("sign1");
    preSign.textContent = "";
  } else {
    displayLeft.style.backgroundColor = "#FFCCCC";
    displayRight.style.backgroundColor = "#C0C0C0";
    let sign = document.getElementById("sign1");
    sign.textContent = "!!安い!!";
    sign.style.color = "red";
    let preSign = document.getElementById("sign2");
    preSign.textContent = "";
  }
}

function reset(element) {
  const inputs = element.querySelectorAll('input[type="tel"]');
  inputs.forEach((input) => (input.value = ""));
}
