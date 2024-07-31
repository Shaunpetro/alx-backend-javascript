interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience: number;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'Frank',
    lastName: 'Donald',
    fullTimeEmployee: true,
    location: 'New Jersey',
    contract: false,
}

console.log(teacher1);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Smith',
    location: 'America',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string):string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

int