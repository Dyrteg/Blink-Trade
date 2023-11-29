export const filterPrice = () => {
    const priceInputOne = document.getElementById('button-price__one');
    const priceInputTwo = document.getElementById('button-price__two');
    
    priceInputOne.addEventListener('input', () => {
        filterCardsByPrice(priceInputOne.value, 'main__item-container-one');
    });

    priceInputTwo.addEventListener('input', () => {
    filterCardsByPrice(priceInputTwo.value, 'main__item-container-two');
    });

    function filterCardsByPrice(targetPrice, containerClass) {
        const cards = document.querySelectorAll(`.${containerClass} .item__card`);

        cards.forEach(card => {
            const cardPriceText = card.querySelector('.card__price').textContent;
            const cardPrice = parseFloat(cardPriceText.replace(/[^\d.]/g, '')); // Извлекаем числовое значение из текста

            if (cardPrice <= parseFloat(targetPrice)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}