document.addEventListener("DOMContentLoaded", function(event) {

    document.querySelector('.js-btn-share-link').addEventListener('click', function (){
        if (!document.querySelector('.js-share-link--modal').classList.contains('active')) {
            document.querySelector('.js-share-link--modal').classList.add('active')
        } else {
            document.querySelector('.js-share-link--modal').classList.remove('active')
            document.querySelector('.js-copy-url').innerText = 'Скопировать ссылку'
        }
    })

    document.querySelector('.js-booked-object-toggle').addEventListener('click', function (){
        if (!document.querySelector('.js-booked-object').classList.contains('active')) {
            document.querySelector('.js-booked-object').classList.add('active')
        } else {
            document.querySelector('.js-booked-object').classList.remove('active')
        }
    })

    document.querySelector('.js-payment-coupon-toggle').addEventListener('click', function (){
        if (!document.querySelector('.js-payment-coupon').classList.contains('active')) {
            document.querySelector('.js-payment-coupon').classList.add('active')
        } else {
            document.querySelector('.js-payment-coupon').classList.remove('active')
        }
    })

    document.querySelector('.js-copy-url').addEventListener('click', function (){
        const copyText = document.createElement("input")
        copyText.classList.add('copy-input')
        copyText.value = window.location.href
        document.body.appendChild(copyText)
        copyText.select()
        document.execCommand("copy")
        this.innerText = 'Ссылка скопирована'
    })









});
