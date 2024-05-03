/*21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items*/

interface itCourse{

    courseName:string ;
    location: string ;
    onsiteStudendts: number ;
}
let itCourse= {
    courseName: "Cloud applied generative AI",
    location: "governor house",
    onsiteStudents: 50000,
}
console.log(itCourse);