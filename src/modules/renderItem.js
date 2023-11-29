import { URL_ITEMS } from "../index.js";

export const render = () => {
        const cardsContainer = document.querySelector('.main__item-container-two');
        const accordionPriceTwo = document.querySelector('.accordion-price-two');
        const accordionPriceOne = document.querySelector('.accordion-price-one');
        accordionPriceTwo.innerHTML = '0';
        accordionPriceOne.innerHTML = '0';
    
        // Используйте fetch для получения данных из файла JSON
        URL_ITEMS
            .then(data => {
                // Рендеринг карточек на основе полученных данных
                renderCards(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    
        // Функция для рендеринга карточек
        function renderCards(data) {
            data.forEach(cardData => {
                // Создание элементов для каждой карточки
                const card = `
                <div class="item__card">
                    <div class="card__image">
                        <img src="${cardData.image}" alt="currier" class="card__picture">
                    </div>
                    <div class="card__id">${cardData.id}</div>
                    <div class="card__description">
                        <p class="card__title">${cardData.title}</p>
                        <p class="card__rarity">${cardData.rarity}</p>
                        <p class="card__price">${cardData.price + '₽'}</p>
                        <div class="card__button">
                        <button class="card__basket">
                            <img src="./img/basket.png" alt="basket" class="card__basket-picture">
                        </button>
                        </div>
                    </div>
                </div>
                `
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        };
}