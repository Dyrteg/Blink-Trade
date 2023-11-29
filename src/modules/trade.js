import { URL_USERITEMS, URL_ITEMS, URL_USER } from "../index.js";

export const trade = (userId) => { 
  const userMoney = document.querySelector('.user__money');
  
  const getItems = (targetSelectedCards) => {
    URL_ITEMS
    .then(data => {
      // Рендеринг карточек на основе полученных данных
      itemsUpdateUser(data, targetSelectedCards);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }

  const getUserItems = (userSelectedCards) => {
    URL_USERITEMS
    .then(data => {
      // Рендеринг карточек на основе полученных данных
      itemsUpdateItem(data, userSelectedCards);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }
  // Функция для отправки запроса
  async function sendRequest(url, method, body) {
    console.log(body);
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error in sendRequest for ${url}: ${errorMessage}`);
      throw new Error(`Error in sendRequest for ${url}`);
    }
  
    return response.json();
  }

  // Функция для выполнения обмена
  async function performTrade(userSelectedCards, targetSelectedCards) {
    if (userSelectedCards.length === 0 || targetSelectedCards.length === 0) {
      console.error('Выберите карточки для обмена.');
      return;
    }

    try {
      const result = await sendRequest('http://localhost:3000/trade', 'POST', {
        userSelectedCards,
        targetSelectedCards,
      });

      console.log(result);
      // Обработка результата, если нужно
    } catch (error) {
      console.error('Произошла ошибка при выполнении обмена:', error);
    }
  }
  // Функция для получения выбранных карточек из контейнера
  function getSelectedCards(containerId) {
    const container = document.getElementById(containerId);
    const selectedCards = container.querySelectorAll('.basket');

    return Array.from(selectedCards).map(card => card.querySelector('.card__id').textContent);
  }

  function getPriceCards(containerId) {
    const container = document.getElementById(containerId);
    const selectedCards = container.querySelectorAll('.basket');

    return Array.from(selectedCards).map(card => card.querySelector('.card__price').textContent);
  }

  // Назначаем обработчик события для кнопки обмена
  const tradeButton = document.getElementById('trade-button');
  tradeButton.addEventListener('click', (e) => {
    const userSelectedCards = getSelectedCards('user-cards-container');
    const targetSelectedCards = getSelectedCards('trade-cards-container');
    const userPriceCard = getPriceCards('user-cards-container');
    const targetPriceCard = getPriceCards('trade-cards-container');
    const priceUser = parseFloat(userPriceCard.pop()) - parseFloat(targetPriceCard.pop());
    const storedMoney = localStorage.getItem('userMoney');
    const resultMoney = (parseFloat(storedMoney) + priceUser);
    userMoney.innerHTML = resultMoney + ' ₽';
    localStorage.setItem('userMoney', resultMoney);
    performTrade(userSelectedCards, targetSelectedCards);
    getItems(targetSelectedCards);
    getUserItems(userSelectedCards);

    setInterval('window.location.reload()', 100);
  });

  // Обработчик запроса /trade
  async function itemsUpdateUser(data, targetSelectedCards) {
    var targetSelectedCardsInt = targetSelectedCards.map(function (x) {
      return parseInt(x, 10);
    });
  
    // Массив промисов для выполнения асинхронных операций
    const promises = [];
  
    data.forEach(itemData => {
      if (targetSelectedCardsInt.find(e => e === itemData.id)) {

        // Добавляем промис удаления элемента
        const deletePromise = sendRequest(`http://localhost:3000/items/${itemData.id}`, 'DELETE');
        promises.push(deletePromise);
  
        // Добавляем промис добавления элемента
        itemData['userId'] = parseInt(localStorage.getItem('userId'));
        const addPromise = sendRequest('http://localhost:4000/useritem', 'POST', itemData);
        promises.push(addPromise);
  
        // Добавляем обработчики для вывода отладочной информации
        deletePromise.then(() => console.log(`Item with id ${itemData.id} deleted successfully.`))
                    .catch(error => console.error(`Error deleting item with id ${itemData.id}:`, error));
        addPromise.then(() => console.log(`Item added to useritems successfully.`))
                  .catch(error => console.error(`Error adding item to useritems:`, error));
      }
    });
  
    try {
      // Ждем завершения всех асинхронных операций
      await Promise.all(promises);
      console.log('Trade completed successfully!');
    } catch (error) {
      console.error('Произошла ошибка при выполнении обмена:', error);
    }
  }

  async function itemsUpdateItem(data, userSelectedCards) {
    var userSelectedCardsInt = userSelectedCards.map(function (x) {
      return parseInt(x, 10);
    });
  
    // Массив промисов для выполнения асинхронных операций
    const promises = [];
  
    data.forEach(itemData => {
      if (userSelectedCardsInt.find(e => e === itemData.id)) {

        // Добавляем промис удаления элемента
        const deletePromise = sendRequest(`http://localhost:4000/useritem/${itemData.id}`, 'DELETE');
        promises.push(deletePromise);
  
        // Добавляем промис добавления элемента
        delete itemData.userId;
        const addPromise = sendRequest('http://localhost:3000/items', 'POST', itemData);
        promises.push(addPromise);
  
        // Добавляем обработчики для вывода отладочной информации
        deletePromise.then(() => console.log(`Item with id ${itemData.id} deleted successfully.`))
                    .catch(error => console.error(`Error deleting item with id ${itemData.id}:`, error));
        addPromise.then(() => console.log(`Item added to useritems successfully.`))
                  .catch(error => console.error(`Error adding item to useritems:`, error));
      }
    });
  
    try {
      // Ждем завершения всех асинхронных операций
      await Promise.all(promises);
      console.log('Trade completed successfully!');
    } catch (error) {
      console.error('Произошла ошибка при выполнении обмена:', error);
    }
  }
}