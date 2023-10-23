document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const designArea = document.querySelector('.design-area');

    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const elementType = element.getAttribute('data-type');
            const newElement = document.createElement('div');
            newElement.className = 'design-element draggable';
            newElement.style.left = '10px';
            newElement.style.top = '10px';
            newElement.contentEditable = true;

            if (elementType === 'textbox') {
                newElement.innerHTML = '<input type="textbox" class="editable" />textbox';
            } else if (elementType === 'button') {
                newElement.innerHTML = '<input type="button" class="editable"/>Button';
            } else if (elementType === 'label') {
                newElement.textContent = 'Label';
                newElement.contentEditable = true;
            } else if (elementType === 'radio') {
                newElement.innerHTML = '<input type="radio" class="editable" />Radiobutton';
            } else if (elementType === 'checkbox') {
                newElement.innerHTML = '<input type="checkbox" class="editable" /> Checkbox';
            } else if (elementType === 'image') {
                newElement.innerHTML = '<img src="image.jpg" alt="Image" class="editable" />';
            } else if (elementType === 'navigation') {
                newElement.innerHTML = '<a href="https://example.com" class="editable">Navigation</a>';
            } else if (elementType === 'textbox') {
                newElement.innerHTML = '<input type="text" class="editable" />';
            } else if (elementType === 'dropdown') {
                newElement.innerHTML = '<select class="editable"><option>Option 1</option><option>Option 2</option></select>';
            } else if (elementType === 'table') {
                newElement.innerHTML = '<table class="editable"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>';
            }
            else if (elementType === 'layout') {
                newElement.innerHTML = '<div class="grid-layout">Grid Layout</div>';
            }
            // Add more conditions for other elements as needed

            newElement.addEventListener('mousedown', (e) => {
                if (e.target.classList.contains('draggable')) {
                    activeElement = e.target;
                    activeElement.style.zIndex = 1000;
                }
            });

            document.addEventListener('mousemove', (e) => {
                if (activeElement) {
                    const x = e.clientX;
                    const y = e.clientY;
                    activeElement.style.left = x - activeElement.offsetWidth / 2 + 'px';
                    activeElement.style.top = y - activeElement.offsetHeight / 2 + 'px';
                }
            });

            document.addEventListener('mouseup', () => {
                activeElement = null;
            });

            designArea.appendChild(newElement);
        });
    });

    let activeElement = null;
});