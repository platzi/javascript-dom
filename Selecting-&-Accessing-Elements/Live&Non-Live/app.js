// const list = document.getElementById("myList");
// const liveChildren = list.children;

// console.log(liveChildren.length);

// const newElement = document.createElement("li");

// newElement.textContent = "Item 3";
// list.appendChild(newElement);

// console.log(liveChildren.length);

const div = document.getElementById("myDiv");

const firstNonLiveChild = div.firstElementChild;

console.log(firstNonLiveChild.textContent);

const newElement = document.createElement("span");

newElement.textContent = "Element C";
div.insertBefore(newElement, firstNonLiveChild);

console.log(firstNonLiveChild.textContent);
