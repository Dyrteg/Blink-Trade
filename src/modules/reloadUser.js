import { renderUserItem } from "./renderUserItem";

export const reloadUser = () => {
 document.addEventListener('DOMContentLoaded', function () {
    const userBacks = document.querySelector('.user__money');
    const storedMoney = localStorage.getItem('userMoney');
    const storedAvatar = localStorage.getItem('userAvatar');
    const avatar = document.getElementById('avatar');
    userBacks.innerHTML = storedMoney + ' ₽';
    avatar.src = storedAvatar;
  const storedToken = localStorage.getItem('userToken');
  if (storedToken) {
      restoreSession(storedToken);
  }
 });
 
 function restoreSession(token) {
  const storedId = localStorage.getItem('userId');
  renderUserItem(parseInt(storedId));
 }
}