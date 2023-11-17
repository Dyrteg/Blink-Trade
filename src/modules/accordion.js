export const accordion = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const accordionItems = document.querySelectorAll('.accordion-item');
        const mainItemBlockOne = document.getElementById('main__item-block-one');
        const mainItemBlockTwo = document.getElementById('main__item-block-two');
        
    
        accordionItems.forEach((item) => {
            const header = item.querySelector('.accordion-header');
            const contentOne = document.querySelector('.accordion-content-one');
            const contentTwo = document.querySelector('.accordion-content-two');
            const arrow = item.querySelector('.arrow'); // Получаем стрелку
    
            header.addEventListener('click', () => {
                contentOne.classList.toggle('active');
                contentTwo.classList.toggle('active');
                arrow.classList.toggle('active'); // Переключаем класс "active" для стрелки
                console.log(contentOne.classList.value);
                if (contentOne.classList.value === 'accordion-content-one active') {
                    mainItemBlockOne.style.height = "500px";
                    mainItemBlockTwo.style.height = "500px";
                } else {
                    mainItemBlockOne.style.height = "750px";
                    mainItemBlockTwo.style.height = "750px";
                }
                
            });
        });
    });
}