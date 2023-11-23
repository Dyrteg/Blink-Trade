import { URL_USER } from "../index.js";
import { renderUserItem } from "./renderUserItem";

export const auth = () => {
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
                    closeModal(); // Закрыть модальное окно после успешной авторизации
                    renderUserItem(user.id);
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
} 


