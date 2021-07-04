export function injectMakup(selector, markup) {
    let parentEl = document.querySelector(selector);

    parentEl.insertAdjacentHTML('beforeend', markup);
}

export function createCardMarkup({title, description, markup}) {
    return `<div class="column card">    
                <h3 class="subtitle">${title}</h3>
                <div class="description">${createDescriptionList(description)}</div>
                <hr />
                <div>${markup}</div>
            </div>`;
}

function createDescriptionList(description) {
    let listItems = '';

    description.forEach(item => { 
        listItems += `<li>${item}</li>`
    });

   return `<ul>${listItems}</ul>`;
}