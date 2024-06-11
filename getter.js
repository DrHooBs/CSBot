import { StudentClient } from "classcharts-api";

// Get today's date
function todayIs() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); // +1 as January = 0
    let yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}


// Get next week's date
function nextWeekIs() {
    let nextWeek = new Date();
    nextWeek.setDate(new Date().getDate() + 7);
    let dd = String(nextWeek.getDate()).padStart(2, "0");
    let mm = String(nextWeek.getMonth() + 1).padStart(2, "0"); // +1 as January = 0
    let yyyy = nextWeek.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}

export async function getHomeworks ( id, dob ) {
    //Create client instance with access code and date of birth
    const client = new StudentClient(id, dob);
    await client.login();

    var today = todayIs();
    var nextWeek = nextWeekIs();

    //Request homework data between today and next week. Returns an object with the homework data
    const homeworks = await client.getHomeworks({
        from: today,
        to: nextWeek,
        isplayDate: 'due_date' // Can be 'due_date' or 'issue_date'
    });

    //Initialise an array to store the relevant assignment details
    let assignmentDetails = [];

    //Iterate through the homework data and push the relevant details to the array. 
    for (const key in homeworks.data) {
        assignmentDetails.push({
            title: homeworks.data[key].title,
            due_date: new Date(homeworks.data[key].due_date),
            teacher: homeworks.data[key].teacher,
            description: String(homeworks.data[key].description).replace(/(<([^>]+)>|&nbsp;)/ig, "").replace(/^\n*/, '')

        })
    }
    return assignmentDetails;

}

