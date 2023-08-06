const changeFocus1 = () => {
  let num1 = document.getElementById("num1").value;

  if (num1.length === 3) {
    document.getElementById("num2").focus();
  }
};

const changeFocus2 = () => {
  let num1 = document.getElementById("num2").value;

  if (num1.length === 4) {
    document.getElementById("num3").focus();
  }
};

const changeFocus3 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  if (num1.length === 3 && num2.length === 4 && num3.length === 4) {
    document.getElementById("sendBtn").disabled = false;
    document.getElementById("sendBtn").style = "cursor:pointer";
  } else {
    document.getElementById("sendBtn").disabled = true;
  }
};

let timer;

const sendCertification = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certiNum").innerText = token;

  let time = 180;

  timer = setInterval(function () {
    if (time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, "0");
      document.getElementById("timer").innerText = min + ":" + sec;
      document.getElementById("checkBtn").style = "cursor:pointer";
      document.getElementById("checkBtn").disabled = false;
      time = time - 1;
    } else {
      document.getElementById("checkBtn").disabled = true;
      document.getElementById("certiNum").innerText = "000000";
      document.getElementById("sendBtn").setAttribute("disabled", "true");
      document.getElementById("timer").innerText = "3:00";
      clearInterval(timer);
    }
  }, 1000);
};

const authenticationCompleted = () => {
  clearInterval(timer);
  document.getElementById("checkBtn").setAttribute("disabled", "true");
  document.getElementById("sendBtn").setAttribute("disabled", "true");
  document.getElementById("checkBtn").innerText = "인증 완료";
  document.getElementById("certiNum").innerText = "000000";
  document.getElementById("timer").innerText = "3:00";
  document.getElementById("checkBtn").style = "cursor:default";
  document.getElementById("sendBtn").style = "cursor:default";
  alert("인증이 완료되었습니다.");
};

const signUp = () => {
  const email = document.getElementById("input__email").value;
  const name = document.getElementById("input__name").value;
  const password1 = document.getElementById("input__password1").value;
  const password2 = document.getElementById("input__password2").value;
  const location = document.getElementById("location").value;
  const female = document.getElementById("female").checked;
  const male = document.getElementById("male").checked;

  let isValid = true;
  if (email.includes("@") === false) {
    document.getElementById("error__email").innerText =
      "이메일이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.getElementById("error__email").innerText = "";
  }

  if (name === "") {
    document.getElementById("error__name").innerText =
      "이름이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.getElementById("error__name").innerText = "";
  }

  if (password1 === "") {
    document.getElementById("error__password1").innerText =
      "비밀번호를 입력해주세요.";
    isValid = false;
  } else {
    document.getElementById("error__password1").innerText = "";
  }

  if (password1 !== password2) {
    document.getElementById("error__password1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.getElementById("error__password2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (location !== "서울" && location !== "경기" && location !== "인천") {
    document.getElementById("error__location").innerText =
      "지역을 선택해주세요.";
    isValid = false;
  } else {
    document.getElementById("error__location").innerText = "";
  }

  if (female === false && male === false) {
    document.getElementById("error__gender").innerText =
      "성별을 선택해 주세요.";
    isValid = false;
  } else {
    document.getElementById("error__gender").innerText = "";
  }

  if (isValid === true) {
    alert("코드캠프 가입을 축하합니다.");
  }
};
