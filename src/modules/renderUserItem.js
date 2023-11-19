export const renderUserItem = (userID) => {
    const mainItemWarning = document.getElementById('main__item-warning-container');
    const mainItemContainerOne = document.querySelector('.main__item-container-one');

    mainItemContainerOne.style.display = 'flex';
    mainItemWarning.style.display = 'none';

    const cardsContainer = document.querySelector('.main__item-container-one');
    
        // Используйте fetch для получения данных из файла JSON
    // Загрузка данных о предметах
    fetch('../../json/items.json')
    .then(response => response.json())
    .then(itemsData => {
        // Загрузка данных о пользователях
        fetch('../../json/user.json')
            .then(response => response.json())
            .then(usersData => {
                // Объединение данных и рендеринг пользователей
                const usersWithItems = usersData.users.map(user => {
                    const userItems = user.itemIds.map(itemId => {
                        return itemsData.items.find(item => item.itemId === itemId);
                    });
                    return { ...user, items: userItems };
                });

                renderItems(usersWithItems);
            })

    })



    // Функция для рендеринга предметов пользователя
    function renderItems(users) {
        users.forEach(user => {
            if (user.id === userID) {
                user.items.forEach(cardData => {
                    // Создание элементов для каждой карточки
                const card = `
                <div class="item__card">
                    <div class="card__image">
                        <img src="${cardData.image}" alt="currier" class="card__picture">
                    </div>
                                
                    <div class="card__description">
                        <p class="card__title">${cardData.title}</p>
                        <p class="card__rarity">${cardData.rarity}</p>
                        <p class="card__price">${cardData.price}</p>
                        <button class="card__basket">
                            <img src="./img/basket.png" alt="basket" class="card__basket-picture">
                        </button>
                    </div>
                </div>
                `
                cardsContainer.insertAdjacentHTML('beforeend', card);
                });
            }
        });
    }
        
        

    
        // Функция для рендеринга карточек
    // function renderCards(data) {
    //     data.forEach(cardData => {

    //         console.log(cardData);
    //             // Создание элементов для каждой карточки
    //         const card = `
    //         <div class="item__card">
    //             <div class="card__image">
    //                 <img src="${cardData.image}" alt="currier" class="card__picture">
    //             </div>
                            
    //             <div class="card__description">
    //                 <p class="card__title">${cardData.title}</p>
    //                 <p class="card__rarity">${cardData.rarity}</p>
    //                 <p class="card__price">${cardData.price}</p>
    //                 <button class="card__basket">
    //                     <img src="./img/basket.png" alt="basket" class="card__basket-picture">
    //                 </button>
    //             </div>
    //         </div>
    //         `
    //         cardsContainer.insertAdjacentHTML('beforeend', card);
    //     });
    // }
};