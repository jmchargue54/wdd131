
const student1 = {
    firstName: 'Jim',
    lastName: 'Halpert',
    iNumber: '123-45-6789',
    age: 20, 
};
const student2 = {
    firstName: 'Pam',
    lastName: 'Beesly',
    iNumber: '987-65-4321',
    age: 30, 
};
const student3 = {
    firstName: 'Dwight',
    lastName: 'Schrute',
    iNumber: '987-34-123',
    age: 40, 
};

const students = [student1, student2, student3];

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


