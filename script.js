const scope = document.querySelectorAll(".scope");
const pwd = document.querySelectorAll(".password");
const phone = document.querySelector("#phone");
const hidden = document.querySelectorAll(".scopelabel");
const pwdconfirm = document.querySelector("#passwordconfirm");
const email = document.querySelector("#email");

let phoneNumber = "";

// phone placeholder 처리
phone.addEventListener("focus", () => {
    phone.setAttribute("placeholder", "xxx-xxxx-xxxx");
})
phone.addEventListener("blur", () => {
    phone.setAttribute("placeholder", "phone number");
})

// password scope시 label, password 표시 기능 처리
Array.from(scope).forEach(function (item, index, Array) {
    item.addEventListener("mousedown", () => {
        pwd[index].type = "text";
        pwd[index].setAttribute("style", `padding:30px 15px 15px 15px`);
        if (pwd[index].validity.valid) {
            pwd[index].classList.add("valid")
        }
        if (pwd[index].validity.valueMissing) {
            pwd[index].classList.add("invalid")
        }
    });
    item.addEventListener("mouseup", () => {
        pwd[index].type = "password";
        pwd[index].removeAttribute("style");
    });
    item.addEventListener("mouseleave", (event) => {
        pwd[index].type = "password";
        if (event.button == 0) {
            pwd[index].removeAttribute("style");
        }
    });
    //password confirm이랑 일치하는지 처리 사용자 정의 validation

})
//phonenumber에서 placeholder가 고정되게 만듬.
//숫자 치면 x가 사라지고, -가 있을때 -를 치거나 그냥 숫자를 치면 -가 사라진다.
//text와 opacity가 일치해야 한다.
phone.addEventListener("keydown", (event) => {
    const n = event.key;
    const arrValue = Array.from(phone.value)
    if (event.key === "Backspace" || event.key === "Delete") {
    } else {
        if (arrValue.length == 3) {
            arrValue.splice(arrValue.length, 0, '-');
        } else if (phone.value.length == 8) {
            arrValue.splice(arrValue.length, 0, '-');
        }
        phone.value = arrValue.join("");
    }
});

//오류 메세지 하나씩 만들기.email, phone number, password 일치하는지 함수
// password confirm : setCustomValidity("비밀번호가 일치해야 합니다.")
pwdconfirm.addEventListener("input", () => {
    if (pwd[0].validity.valueMissing || pwd[0].value !== pwdconfirm.value) {
        pwdconfirm.setCustomValidity("비밀번호와 일치해야 합니다.")
    } else {
        pwdconfirm.setCustomValidity("")
    }
})

// email : patternMismatch, valueMissing
// phone number : typeMismatch, valueMissing, patternMismatch
email.setCustomValidity("email은 꼭 적어야 합니다.")
email.addEventListener("input", () => {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("example1@example.example 같은 패턴과 일치해야 합니다.")
    }
    else if (email.validity.valueMissing) {
        email.setCustomValidity("email은 꼭 적어야 합니다.")
    } else {
        email.setCustomValidity("")
    }
})

phone.setCustomValidity("phoneNumber를 작성하세요.")
phone.addEventListener("input", () => {
    if (phone.validity.typeMismatch) {
        phone.setCustomValidity("숫자만 입력하세요. 공백이나 '-'은 괜찮습니다.");
    }
    else if (phone.validity.valueMissing) {
        phone.setCustomValidity("phone를 작성하세요.");
    }
    else if (phone.validity.patternMismatch) {
        phone.setCustomValidity("형식과 맞추세요. 공백이나 '-'은 괜찮습니다.");
    } else {
        phone.setCustomValidity("");
    }
})
// 페이지 로딩시작할 때 form부터 안 뜨고 자연스럽게 한번에 나오도록 설계
// DOMContentLoaded 이벤트 이용, display를 이용해서 width, height 100%인 친구를 화면으로 꺼냄.

// window.addEventListener("load",()=>{loading.setAttribute("style","display:none");})
window.onload = setTimeout(() => { loading.setAttribute("style", "display:none") }, 3000);