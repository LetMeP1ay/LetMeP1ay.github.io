document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "certificate.png";
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial, sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(document.getElementById("studentName").innerHTML, 190, 260);
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("get").click();
    }
});

function updateLabel() {
    var studentName = document.getElementById("studentName");
    var label = document.getElementById("label");
    label.style.top = "362px";
    label.style.fontSize = "12px";
    if (window.innerWidth >= 768) {
        label.style.top = "400px"
    }
};

function labelChecker() {
    if (studentName.value.length > 0 ) {
        if (window.innerWidth >= 768) {
            label.style.top = "400px"
        }
        if(window.innerWidth < 768) {
            label.style.top = "362px";
            label.style.fontSize = "12px";
        }
    }
    if (studentName.value.length === 0) {
        label.style.top = "";
        label.style.fontSize = "";
    }
}

function loadingScreen() {
    if (studentName.value.length === 0) {
        label.innerHTML = "Введите Ваше имя";
        label.style.color = "red";
    }

    if (studentName.value.length > 0) {
        updateName();
        const info = document.getElementById("info");
        label.innerHTML = "Имя и фамилия";
        label.style.color = "#DEF1FF";
        const loading = document.getElementById("loading");
        info.style.display = "none";
        loading.style.display = "flex";
        document.getElementById("loading-bar-fill").style.width = "100%";
        setTimeout(function() {
        const ready = document.getElementById("ready");
        const loading = document.getElementById("loading");
        loading.style.display = "none";
        ready.style.display = "flex";
        }, 4500);
    }
}

function updateName() {
    studentName.value;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "certificate.png";
    image.onload = function() {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font = "30px Arial, sans-serif";
      ctx.fillStyle = "white";
      ctx.fillText(studentName.value, 190, 260);
  };
};
function downloadPNG() {
      console.log(5 + 5);
      const link = document.createElement("a");
      link.download = "сертификат.png";
      link.href = canvas.toDataURL();
      link.click();
    };