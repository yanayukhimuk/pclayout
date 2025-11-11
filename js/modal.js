const modalBtn = document.querySelector('.modal__button')
const orderBtn = document.querySelector('.course__button')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})
orderBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})
closeModalBtn.addEventListener('click', () => {
    modal.style.display = ''
})
modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) {
        modal.style.display = ''
    }
})