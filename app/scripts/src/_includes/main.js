document.addEventListener("DOMContentLoaded", function() {

    if (window.innerHeight >= 1000) {
        document.querySelector('.js-booked-object').classList.add('active')
    }

    // Поделиться ссылкой на оплату
    document.querySelector('.js-btn-share-link').addEventListener('click', () => {
        if (!document.querySelector('.js-share-link--modal').classList.contains('active')) {
            document.querySelector('.js-share-link--modal').classList.add('active')
        } else {
            document.querySelector('.js-share-link--modal').classList.remove('active')
            document.querySelector('.js-copy-url').innerText = 'Скопировать ссылку'
        }
    })

    // Объект бронирования
    document.querySelector('.js-booked-object-toggle').addEventListener('click', function (){
        if (!document.querySelector('.js-booked-object').classList.contains('active')) {
            document.querySelector('.js-booked-object').classList.add('active')
        } else {
            document.querySelector('.js-booked-object').classList.remove('active')
        }
    })

    // Промокод
    document.querySelector('.js-payment-coupon-toggle').addEventListener('click', function (){
        if (!document.querySelector('.js-payment-coupon').classList.contains('active')) {
            document.querySelector('.js-payment-coupon').classList.add('active')
        } else {
            document.querySelector('.js-payment-coupon').classList.remove('active')
        }
    })

    // Скопировать ссылку
    document.querySelectorAll('.js-copy-url').forEach(div => {
        div.addEventListener('click', () => {
            const copyText = document.createElement("input")
            copyText.classList.add('copy-input')
            copyText.value = window.location.href
            document.body.appendChild(copyText)
            copyText.select()
            document.execCommand("copy")
            div.innerText = 'Ссылка скопирована'
        });
    })

    // Отказаться от платежа, вызов модального окна
    document.querySelector('.js-refuse-pay').addEventListener('click', function (){
        document.querySelector('.js-refuse-pay-modal').classList.add('show')
    })

    // Отказаться от платежа, закрытие модального окна
    document.querySelectorAll('.js-refuse-pay-close-modal').forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector('.js-refuse-pay-modal').classList.remove('show')
        });
    })

    document.querySelector('.js-show-payment-methods').addEventListener('click', function (){
        if (!document.querySelector('.js-other-payment').classList.contains('show')) {
            document.querySelector('.js-other-payment').classList.add('show')
        } else {
            document.querySelector('.js-other-payment').classList.remove('show')

            let selectPayment = document.querySelector('input[name=payment_id]:checked').value
            if (selectPayment !== '1' && selectPayment !== '2' && selectPayment !== '3') {
                document.getElementById("payment_method_1").checked = true;
            }
        }
    })








});
