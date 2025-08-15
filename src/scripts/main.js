'use strict';

// eslint-disable-next-line no-shadow
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => Number(b.dataset.salary) - Number(a.dataset.salary));

  items.forEach((item) => list.appendChild(item));
}

// eslint-disable-next-line no-shadow
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: Number(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Виклик функцій
const list = document.querySelector('[data-list]');

sortList(list);
getEmployees(list);
