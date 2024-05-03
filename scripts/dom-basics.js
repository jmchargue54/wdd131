const fullName = 'Jenna McHargue';

// TEMP:
console.log(fullName);

const h1 = document.querySelector('h1');
// += adds to the string already there, = changes the string
// em italicizes the lettering
h1.innerHTML += '<em>' + fullName + '</em>';

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);

// creating section 3
// const section = document.createElement('section');
// const h2 = document.createElement('h2');
// h2.textContent = 'Section 3';
// const p = document.createElement('p');
// p.textContent = 'This is a paragraph in section 3';

// section.appendChild(h2);
// section.appendChild(p);
// document.body.appendChild(section);

// inserting an image
const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200');
newImage.setAttribute('alt', 'Random image from picsum.');
document.body.appendChild(newImage);

// const newDiv = document.createElement("div");
// newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// document.body.appendChild(newDiv);

// creating new section
const new_section = document.createElement('section');
const new_h2 = document.createElement('h2');
new_h2.innerText = 'DOM Basics';
new_section.appendChild(new_h2);
const new_p = document.createElement('p');
new_p.textContent = 'This was added through Javascript!';
new_section.appendChild(new_p);

document.body.appendChild(new_section)