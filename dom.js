//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
//PARENTNODE
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNodes//
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild//
console.log(itemList.firstChild);

//firstEALEMENTCHILD//
console.log(itemList.firstElmentChild);
itemList.firstElementChild.textContent ='Hello 1';

//lastChild//
console.log(itemList.lastChild);
//lastelementchild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='Hello 4';

//Sibling

console.log(itemList.nextSibling);
//nextElementSibling

console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='green';
//CreateElement

//create a div
var newDiv = document.createElement('div');

//add Class

newDiv.className = 'hello';

//add attr

newDiv.setAttribute('title','Hello Div');

//create text node

var newDivText = document.createTextNode('Hello World');
//add text to div

newDiv.appendChild(newDivText);
console.log(newDiv);

container.insertBefore(newDiv, h1);
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

