import { URL_USERITEMS } from "../index.js";

export const renderUserItem = (userID) => {
    const mainItemWarning = document.getElementById('main__item-warning-container');
    const mainItemContainerOne = document.querySelector('.main__item-container-one');

    mainItemContainerOne.style.display = 'flex';
    mainItemWarning.style.display = 'none';

    const cardsContainer = document.querySelector('.main__item-container-one');
    
        // Используйте fetch для получения данных из файла JSON
    // Загрузка данных о предметах
    // Загрузка данных о предметах для конкретного пользователя
    fetch('http://localhost:3000/useritems')
    .then(itemsResponse => itemsResponse.json())
    .then(itemsData => {
        // Фильтрация предметов только для заданного пользователя
        const userItems = itemsData.items
            .filter(item => item.userId === userID)
            .map(item => ({
                itemId: item.itemId,
                title: item.title,
                price: item.price,
                image: item.image,
                rarity: item.rarity
            }));

        // Рендеринг предметов для конкретного пользователя
        renderItems(userItems);
    })
    .catch(error => console.error('Ошибка при загрузке данных о предметах:', error));



    // Функция для рендеринга предметов пользователя
    function renderItems(users) {
        console.log(users);
            users.forEach(cardData => {
                    // Создание элементов для каждой карточки
                const card = `
                <div class="item__card">
                    <div class="card__image">
                        <img src="${cardData.image}" alt="currier" class="card__picture">
                    </div>
                    <div class="card__id">${cardData.itemId}</div>
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
            }
}