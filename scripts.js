const form = document.querySelector('form')
const input = document.querySelector('#email-input')


form.addEventListener('submit', () => {
    console.log(input.value)
    if (input.value === '')
        alert('O E-MAIL precisa ser preenchido.')
    else
        alert('PARABÉNS! Você assinou a nossa newsletter.')
        
})