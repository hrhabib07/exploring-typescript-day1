const bros1: string[] = ["sakib", "tamim", "mushi"];
const bros2:string[] = ['santo', 'tawhid', 'rabbi'];
bros1.push(...bros2)

const instructors = {
    ielts:'habib',
    spoken: 'jamal',
    english:'kuddus'
}
const nextLevel = {
    grammar:'salman',
    basic:'sajid'
}

const allInstructor = {...instructors, ...nextLevel}