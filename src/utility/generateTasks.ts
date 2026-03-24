interface Task {
title : string,
assignes : string,
tag : string,
status : string,
dateStart : Date,
dateEnd : Date
}


const assigns = ["rahul", "shirish", "girish", "kavya", "malati", "akshay"];
const tags = ["frontend", "backend", "bug", "quick fix", "feature"];
const status = ["to-do", "in-progress", "in-review", "done"];
const startDate1  = new Date(2026, 3, 1).getTime();
const startDate2  = new Date(2026, 3, 7).getTime();
const endDate1  = new Date(2026, 3, 9).getTime();
const endDate2  = new Date(2026, 3, 15).getTime();

export function generateTasks (NoOfTasks : number): Array<Task> {
    const tasks: any = [];

    console.log("a", Math.random() * 6)

    for(let i = 1; i<= NoOfTasks; i++) {
        tasks.push({
            title : `Task ${i}`,
            assigns : assigns[Math.floor((Math.random() *  6))],
            tag : tags[Math.floor((Math.random() * 5))],
            status : status[Math.floor((Math.random() * 4))],
            dateStart : new Date(+startDate1 + Math.random() * (startDate2 - startDate1) ),
            endStart : new Date(+endDate1 + Math.random() * (endDate2 - endDate1) )
        })
    }

    return tasks;
}

export const a = generateTasks(5);

console.log(a);
