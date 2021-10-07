//point to active projects window
const activeWindowUl = document
  .getElementById('active-projects')
  .querySelector('ul');

//point to finished projects window
const finishedWindowUl = document
  .getElementById('finished-projects')
  .querySelector('ul');

const buttonEvents = () => {
  document.querySelectorAll('.alt').forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(`the ${item.textContent} button was clicked on.`);
    });
  });
  document.querySelectorAll('.alt').forEach((item) => {
    item.nextElementSibling.addEventListener('click', () => {
      console.log(
        `the ${item.nextElementSibling.textContent} button was clicked on.`
      );
      if (item.nextElementSibling.textContent == 'Finish') {
        finishedWindowUl.appendChild(item.parentElement);
        item.nextElementSibling.textContent = 'Activate';
      } else if (item.nextElementSibling.textContent == 'Activate') {
        activeWindowUl.appendChild(item.parentElement);
        item.nextElementSibling.textContent = 'Finish';
      }
    });
  });
};

buttonEvents();
