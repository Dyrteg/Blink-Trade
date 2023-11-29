import { URL_USERITEMS } from "../index.js";

export const renderUserItem = ( userID) => {
    const mainItemWarning = document.getElementById('main__item-warning-container');
    const mainItemContainerOne = document.querySelector('.main__item-container-one');
    const headerButton = document.querySelector('.header__button');
    const headerUserInfo = document.querySelector('.header__user-info');

    headerButton.style.display = 'none';
    headerUserInfo.style.display = 'flex';

    mainItemContainerOne.style.display = 'flex';
    mainItemWarning.style.display = 'none';

    const cardsContainer = document.querySelector('.main__item-container-one');
    
        // Используйте fetch для получения данных из файла JSON
    // Загрузка данных о предметах
    // Загрузка данных о предметах для конкретного пользователя
    URL_USERITEMS
    .then(itemsData => {
        // Фильтрация предметов только для заданного пользователя
        const userItems = itemsData
            .filter(item => item.userId === userID)
            .map(item => ({
                id: item.id,
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
            users.forEach(cardData => {
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
            }
}