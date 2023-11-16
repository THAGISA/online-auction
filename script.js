
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const optionMenu = document.querySelector('.select-menu'),
    selectBtn = optionMenu.querySelector('.select-btn'),
    options = optionMenu.querySelectorAll('option'),
    sBtn_text = optionMenu.querySelector('sBtn-text');

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {

    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})

