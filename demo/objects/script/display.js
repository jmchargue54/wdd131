import { addStudent, students } from "./students";

students.forEach((student) => {
    const article = document.createElement('article');
    
    const firstName = document.createElement('p');
    firstName.textContent = student.firstName
    
    const lastName = document.createElement('p');
    lastName.textContent = student.lastName
    
    const iNumber = document.createElement('p');
    iNumber.textContent = student.iNumber
    
    const age = document.createElement('p');
    age.textContent = student.age

    // const image = document.createElement('img');
    // image.setAttribute('src', student.image)
    
    article.append(firstName, lastName, iNumber, age);
    document.querySelector('section').append(article);

});

// goes stright to textbox
document.querySelector('#firstname').focus();


