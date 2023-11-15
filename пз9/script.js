// Отримуємо елементи за їх id, класами, тегами та змінюємо їх властивості
var container = document.getElementById('container');
container.style.backgroundColor = '#eee';

var highlightedParagraph = document.querySelector('.highlight');
highlightedParagraph.textContent = 'This paragraph is now modified.';
highlightedParagraph.style.fontSize = '20px';

var listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
  item.style.border = '1px solid #ddd';
});

// Навігація по дереву DOM та виведення інформації
var linkElement = document.getElementById('link');
console.log('Parent of the link:', linkElement.parentElement);

var listItem = document.querySelector('li');
console.log('Children of the list item:', listItem.children);

// Додавання обробника подій для елементу
linkElement.addEventListener('click', function(event) {
  event.preventDefault();
  alert('Link clicked!');
});
