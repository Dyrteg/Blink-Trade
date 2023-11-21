export const addBasket = () => {
    window.addEventListener('click', ({target}) => {
        if(target.classList.contains('card__basket')) {
            const item = target.closest('.item__card');
            const cardId = item.querySelector('.card__id').innerHTML;
            const mainItemContainer = target.closest('.main__item-container');
            const accordionContainerContentTwo = document.querySelector('.accordion-container-content-two');
            const accordionContainerContentOne = document.querySelector('.accordion-container-content-one');
            
            fetch('../../json/items.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Разрешение Promise с данными JSON
                })
                .then(data => {
                    // Рендеринг карточек на основе полученных данных
                    renderBasket(data.items)
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });

            function renderBasket(data) {
                data.forEach(e => {
                    if(e.itemId === parseInt(cardId)) {
                        if (item.closest('.scroll').classList.contains('main__item-container')){
                            if(mainItemContainer.classList.contains('main__item-container-two')) {
                                if(item.classList.contains('basket')){
                                    item.classList.remove('basket');
                                    const itemInAccordion = accordionContainerContentTwo.querySelectorAll('.item__card');
                                    itemInAccordion.forEach(item => {
                                        if (cardId === (item.querySelector('.card__id').innerHTML)) {
                                            totalPriceTwo(item);
                                            item.remove();
                                        }
                                    })
                                } else {
                                    item.classList.add('basket');
                                    const card = `
                                    <div class="item__card basket">
                                        <div class="card__image">
                                            <img src="${e.image}" alt="currier" class="card__picture">
                                        </div>
                                        <div class="card__id">${e.itemId}</div>
                                        <div class="card__description">
                                            <p class="card__title">${e.title}</p>
                                            <p class="card__rarity">${e.rarity}</p>
                                            <p class="card__price">${e.price}</p>
                                            <div class="card__button">
                                            <button class="card__basket">
                                                <img src="./img/basket.png" alt="basket" class="card__basket-picture">
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    `
        
                                    accordionContainerContentTwo.insertAdjacentHTML('beforeend', card);
                                    totalPriceTwoSum();
                                }
                            }
                        }
                    }
                }
            )};

            fetch('../../json/useritems.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                        return response.json(); // Разрешение Promise с данными JSON
                })
                .then(data => {
                    // Рендеринг карточек на основе полученных данных
                    renderUserBasket(data.items)
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });

            function renderUserBasket(data) {
                data.forEach(e => {
                    if(e.itemId === parseInt(cardId)) {
                        if (item.closest('.scroll').classList.contains('main__item-container')){
                            if (mainItemContainer.classList.contains('main__item-container-one')) {
                                if(item.classList.contains('basket')){
                                    item.classList.remove('basket');
                                    const itemInAccordion = accordionContainerContentOne.querySelectorAll('.item__card');
                                    itemInAccordion.forEach(item => {
                                        if (cardId === (item.querySelector('.card__id').innerHTML)) {
                                            totalPriceOne(item);
                                            item.remove();
                                        }
                                    })
                                } else {
                                    item.classList.add('basket');
                                    const card = `
                                    <div class="item__card basket">
                                        <div class="card__image">
                                            <img src="${e.image}" alt="currier" class="card__picture">
                                        </div>
                                        <div class="card__id">${e.itemId}</div>
                                        <div class="card__description">
                                            <p class="card__title">${e.title}</p>
                                            <p class="card__rarity">${e.rarity}</p>
                                            <p class="card__price">${e.price}</p>
                                            <div class="card__button">
                                            <button class="card__basket">
                                                <img src="./img/basket.png" alt="basket" class="card__basket-picture">
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    `
                
                                    accordionContainerContentOne.insertAdjacentHTML('beforeend', card);
                                    totalPriceOneSum();
                                }
                            }
                    } else {
                        if (item.closest('.accordion-content').classList.contains('accordion-content-two')) {
                            const mainItemContainerTwo = document.querySelector('.main__item-container-two');
                            mainItemContainerTwo.querySelectorAll('.item__card').forEach(item => {
                                if(item.classList.contains('basket')) {
                                    if (cardId === (item.querySelector('.card__id').innerHTML)) {
                                        item.classList.remove('basket');
                                    }
                                        
                                };
                            })
                            totalPriceTwo(item);
                            item.remove()
                                
                        } else if(item.closest('.accordion-content').classList.contains('accordion-content-one')) {
                            const mainItemContainerOne = document.querySelector('.main__item-container-one');
                            mainItemContainerOne.querySelectorAll('.item__card').forEach(item => {
                                if(item.classList.contains('basket')) {
                                    if (cardId === (item.querySelector('.card__id').innerHTML))
                                    item.classList.remove('basket');
                                };
                            })
                            totalPriceOne(item);
                            item.remove()
                        }
                    }
                }
            }); 
            }
        };
        
        function totalPriceTwoSum () {
            const accordionContainerContentTwo = document.querySelector('.accordion-container-content-two');
            const accordionPriceTwo = document.querySelector('.accordion-price-two');
            let accordionPriceTotalTwo = document.querySelector('.accordion-price-two').innerHTML;
            const accordionContainsTwo = accordionContainerContentTwo.querySelectorAll('.item__card');
            accordionContainsTwo.forEach(e => {
                e.querySelectorAll('.card__price').forEach(price => {
                    let accordionPriceTotalSum = parseFloat(accordionPriceTotalTwo) + parseFloat(price.innerHTML.replaceAll(' ', ''));
                    accordionPriceTwo.innerHTML = `${accordionPriceTotalSum.toFixed(2)}`;
                })
            })
        }
        
        function totalPriceTwo (item) {
            const accordionPriceTwo = document.querySelector('.accordion-price-two');
            let accordionPriceTotalTwo = document.querySelector('.accordion-price-two').innerHTML;
            let accordionPriceTotalSum = parseFloat(accordionPriceTotalTwo) - parseFloat(item.querySelector('.card__price').innerHTML.replaceAll(' ', ''));
            accordionPriceTwo.innerHTML = `${accordionPriceTotalSum.toFixed(2)}`;
        }

        function totalPriceOneSum () {
            const accordionContainerContentOne = document.querySelector('.accordion-container-content-one');
            const accordionPriceOne = document.querySelector('.accordion-price-one');
            let accordionPriceTotalOne = document.querySelector('.accordion-price-one').innerHTML;
            const accordionContainsOne = accordionContainerContentOne.querySelectorAll('.item__card');

            accordionContainsOne.forEach(e => {
                e.querySelectorAll('.card__price').forEach(price => {
                    let accordionPriceTotalSum = parseFloat(accordionPriceTotalOne) + parseFloat(price.innerHTML.replaceAll(' ', ''));
                    accordionPriceOne.innerHTML = `${accordionPriceTotalSum.toFixed(2)}`;
                })
            })
        }

        function totalPriceOne (item) {
            const accordionPriceOne = document.querySelector('.accordion-price-one');
            let accordionPriceTotalOne = document.querySelector('.accordion-price-one').innerHTML;
            let accordionPriceTotalSum = parseFloat(accordionPriceTotalOne) - parseFloat(item.querySelector('.card__price').innerHTML.replaceAll(' ', ''));
            accordionPriceOne.innerHTML = `${accordionPriceTotalSum.toFixed(2)}`;
        }
    })
}   