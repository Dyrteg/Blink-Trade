export const search = () => {
 const searchInputs = document.querySelectorAll('.item__search-input');
    
    searchInputs.forEach(searchInput => {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const containerClass = searchInput.classList.contains('item__search-input-one') ? 'main__item-container-one' : 'main__item-container-two';

            const cards = document.querySelectorAll(`.${containerClass} .item__card`);

            cards.forEach(card => {
                const title = card.querySelector('.card__title').textContent.toLowerCase();

                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}