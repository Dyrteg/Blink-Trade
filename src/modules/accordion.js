export const accordion = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const accordionItems = document.querySelectorAll('.accordion-item');
        const mainItemBlockOne = document.getElementById('main__item-block-one');
        const mainItemBlockTwo = document.getElementById('main__item-block-two');
        const mainItemBlockOneContainer = document.getElementById('main__item-warning-container');
        
        
    
        accordionItems.forEach((item) => {
            const header = item.querySelector('.accordion-header');
            const contentOne = document.querySelector('.accordion-content-one');
            const contentTwo = document.querySelector('.accordion-content-two');
            const arrow = item.querySelector('.arrow'); // Получаем стрелку
    
            header.addEventListener('click', () => {
                contentOne.classList.toggle('active');
                contentTwo.classList.toggle('active');
                arrow.classList.toggle('active'); // Переключаем класс "active" для стрелки
                if (contentOne.classList.value === 'accordion-content-one active') {
                    mainItemBlockOne.style.height = "500px";
                    mainItemBlockTwo.style.height = "500px";
                    mainItemBlockOneContainer.style.height = "450px";
                } else {
                    mainItemBlockOne.style.height = "770px";
                    mainItemBlockTwo.style.height = "770px";
                    mainItemBlockOneContainer.style.height = "750px";
                }
                
            });
        });
    });
}