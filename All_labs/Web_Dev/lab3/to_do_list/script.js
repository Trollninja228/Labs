document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('Input');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('List');
  
    function createDeleteButton(li) {
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.className = 'deleteButton';
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
      return deleteButton;
    }
  
    function createCheckBox() {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          this.parentElement.classList.add('completed');
        } else {
          this.parentElement.classList.remove('completed');
        }
      });
      return checkbox;
    }
  
    addButton.addEventListener('click', function() {
      const taskText = input.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.appendChild(createCheckBox());
  
      const span = document.createElement('span');
      span.textContent = " " + taskText + " "; 
      li.appendChild(span);
  
      li.appendChild(createDeleteButton(li));
      list.appendChild(li);
      
      input.value = '';
    });
  
    
  });
  