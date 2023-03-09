//Menu

const selectingMenu = document.querySelector('[role="group"]');

if (selectingMenu) {
  selectingMenu['style'].flexDirection = 'row';
  selectingMenu['style'].gap = '4px';

  const allMenuButtons = Array.from(selectingMenu.children);
  allMenuButtons.map((buttons) => {
    buttons['style'].borderRadius = '5px';
    buttons['style'].minWidth = 'fit-content';
  });
}

//Header

const selectingHeader = document.querySelector('.jumbotron');

selectingHeader['style'].backgroundColor = '#6c757d';
selectingHeader['style'].color = '#fff';
selectingHeader['style'].textAlign = 'end';

const allHeaderElements = Array.from(selectingHeader.children);

const getButton = document.querySelector('[role="button"]');

getButton['style'].backgroundColor = '#28a745';
getButton['style'].borderColor = '#28a745';

//Card
const selectingCard = document.querySelectorAll('.row');

const allCard = Array.from(document.querySelectorAll('.col-lg-3'));

const cardElements = selectingCard[2];

allCard[0].lastElementChild.children[1].lastElementChild[
  'style'
].backgroundColor = '#28a745';
allCard[0].lastElementChild.children[1].lastElementChild['style'].borderColor =
  '#28a745';

cardElements.appendChild(allCard[3]);
cardElements.appendChild(allCard[0]);
cardElements.appendChild(allCard[2]);
cardElements.appendChild(allCard[1]);

//List
const selectingList = document.querySelector('.list-group');

selectingList.firstElementChild.classList.remove('active');

const liFourthItem = document.createElement('li');

const liFifthItem = document.createElement('li');

liFourthItem.className = 'list-group-item active';

liFifthItem.className = 'list-group-item';

const contentFourth = document.createTextNode('Quarto item');

const contentFifth = document.createTextNode('Quinto item');

liFourthItem.appendChild(contentFourth);
liFifthItem.appendChild(contentFifth);

selectingList.appendChild(liFourthItem);
selectingList.appendChild(liFifthItem);
