const marketInput = document.querySelector('.input');
const submitButton = document.querySelector('.button');
const marketBox = document.querySelector('.market-box');
const basketBox = document.querySelector('.basket-box');

let marketItems = [];

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const value = marketInput.value;

  if(!!value.trim()) {
   marketBox.textContent = '';
    const newItem = {
      name: value,
      isBasket: false,
    }
    marketItems.push(newItem);

    marketInput.value = '';
    renderItems();
  }
})

marketBox.addEventListener('click',(event) =>{
  const element = event.target;
  if(element.classList.contains('item')) {
    marketItems = marketItems.filter((item) => item.name !== element.textContent.trim());
    const changedItem = {
      name:element.textContent,
      isBasket:true,
    }
    marketItems.push(changedItem);
    renderItems();
  }
})

basketBox.addEventListener('click',(event) =>{
  const element = event.target;
  if(element.classList.contains('item')) {
    marketItems = marketItems.filter((item) => item.name !== element.textContent.trim());
    renderItems();
  }
})

function renderItems(){
  marketBox.textContent = '';
  basketBox.textContent = '';
  marketItems.forEach((item) => {
    const newElement = document.createElement('div');
    newElement.textContent = item.name;
    newElement.className = 'item';
    if(item.isBasket) {
      newElement.classList.add('basket');
      basketBox.prepend(newElement);
    } else {
      marketBox.prepend(newElement);
    }
  })
}

