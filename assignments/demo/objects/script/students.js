
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

export const students = [student1, student2, student3];

export function addStudent(firstName, lastName, iNumber, age, image){
    const newStudent = {
        firstName, 
        lastName, 
        iNumber, 
        age, 
        image, 
    };
}
students.push(newStudent);

