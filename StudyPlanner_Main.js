import { addSession, listTodaysSessions, sessionCountdown, fetchStudyMaterials } from "./StudyPlanner.js";

addSession("Math", new Date(), 10);
addSession("Science", new Date(Date.now() + 2 * 60 * 60 * 1000), 15);
addSession("History", new Date(Date.now() + 24 * 60 * 60 * 1000), 25);

console.log("Today's Study Sessions:");
console.log(listTodaysSessions());

sessionCountdown();

fetchStudyMaterials("Math")
    .then(function (materials) {
        console.log(materials);
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
