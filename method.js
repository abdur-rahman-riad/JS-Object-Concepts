const student = {
    id: 101,
    name: 'Riad Abdur Rahman',
    major: 'Data Science',
    subject: ['Algorithm', 'Data Stucture', 'Statistics', 'Object Oriented Programming'],
    skills: {
        programming: {
            major: 'Javascript',
            nonMajor: 'python'
        },
        framework: 'React JS',
        database: 'MongoDB',
        extra: 'Graphics Design'
    },
    extraActivity: 'Club Member',
}

console.log(student?.skills?.programming?.nonMajor);