const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('g-list');


addBtn.addEventListener('click', () => {
  const itemText = input.value.trim();
  if (itemText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="item-text">${itemText}</span>
    <button class="bought-btn">✓</button>
    <button class="edit-btn">✏️</button>
    <button class="delete-btn">🗑️</button>
  `;
  list.appendChild(li);
  input.value = '';
});


list.addEventListener('click', (e) => {
  const li = e.target.parentElement;

  
  if (e.target.classList.contains('delete-btn')) {
    li.remove();
  }

  
  if (e.target.classList.contains('bought-btn')) {
    const span = li.querySelector('.item-text');
    span.style.textDecoration = 'line-through';
    span.style.color = 'green';
    span.style.fontWeight = 'bold';
  }

  
  if (e.target.classList.contains('edit-btn')) {
    const span = li.querySelector('.item-text');
    const newItem = prompt('Edit your item:', span.textContent);
    if (newItem !== null && newItem.trim() !== '') {
      span.textContent = newItem.trim();
    }
  }
});
