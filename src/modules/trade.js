import { URL_USERITEMS } from "../index.js";

export const trade = () => {
    const tradeButton = document.querySelector('.main__button-trade');
    const accordionContainerContentTwo = document.querySelector('.accordion-container-content-two');
    const accordionContainerContentOne = document.querySelector('.accordion-container-content-one');

    const getData = async() => {
        const item = await fetch('../../json/items.json').then(response => response.json());
        const userItem = await fetch('../../json/useritems.json').then(response => response.json())
    
        return { item, userItem }
    }
    

    tradeButton.addEventListener('click', async() => {
        const data = await getData();
        console.log(data);

        const itemInAccordion = accordionContainerContentTwo.querySelectorAll('.item__card');
        itemInAccordion.forEach(item => {
            console.log(item.querySelector('.card__id').innerHTML);
        })

        const userItemInAccordion = accordionContainerContentOne.querySelectorAll('.item__card');
        userItemInAccordion.forEach(item => {
            console.log(item.querySelector('.card__id').innerHTML);
        })
    })
}


// const getData = async(url) => {
    
//     const data = fetch(url);
//     const result = await data.then(response => response.json())

//     return result
// }

    