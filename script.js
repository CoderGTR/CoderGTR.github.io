let btnDoc = document.querySelectorAll('.popup-link');
let popup = document.querySelector('.popup');
let popClose = document.querySelector('.popup__close');
let popBtn = document.querySelector('.popup__btn');
let success = document.querySelector('.success');

btnDoc.forEach(function (el) {
    el.addEventListener('click', function (e) {
        popup.classList.add('open');
    })
})

popClose.addEventListener('click',function (e) {
    popup.classList.remove('open');
})

popBtn.addEventListener('click',function (e) {
    popup.classList.remove('open');
    success.classList.add('open');
})
