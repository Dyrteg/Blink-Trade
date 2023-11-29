import { URL_USER } from "../index.js";
import { renderUserItem } from "./renderUserItem";
import { trade } from "./trade.js";

export const auth = () => {
    const userMoney = document.querySelector('.user__money');
    const avatar = document.getElementById('avatar');
    const userMenu = document.getElementById('user-menu');
    const exitListItem = document.querySelector('#user-menu li');

    function openModal() {
        document.getElementById('modal').style.visibility = 'visible';
    }

    // Функция для закрытия модального окна
    function closeModal() {
        document.getElementById('modal').style.visibility = 'hidden';
    }

    // Обработчик события клика по кнопке "Войти"
    document.getElementById('open-modal-button').addEventListener('click', openModal);

    // Обработчик события отправки формы авторизации
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        URL_USER
            .then(data => {
                const users = data.users;
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    document.getElementById('message').textContent = 'Авторизация успешна!';
                    const storedToken = user.token;
                    const userID = user.id;
                    avatar.src = user.avatar;
                    userMoney.innerHTML = user.money + ' ₽';
                    localStorage.setItem('userToken', storedToken);
                    localStorage.setItem('userId', userID);
                    localStorage.setItem('userMoney', user.money);
                    localStorage.setItem('userAvatar', user.avatar)
                    closeModal(); // Закрыть модальное окно после успешной авторизации
                    renderUserItem(userID);
                    trade(userID)
                } else {
                    document.getElementById('message').textContent = 'Неправильное имя пользователя или пароль.';
                }
            })
            .catch(error => {
                console.error('Произошла ошибка при загрузке файла auth.json:', error);
            });
    });

    // Обработчик события клика вне модального окна
    window.addEventListener('click', function (event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Обработчик события клика на крестик
    window.addEventListener('click', function (event) {
        const modal = document.querySelector('.close-button');
        if (event.target === modal) {
            closeModal();
        }
    });

    

    avatar.addEventListener('click', function() {
        userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Закрытие меню при клике вне него
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#user-container')) {
            userMenu.style.display = 'none';
        }
    });
    
    exitListItem.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });

} 


