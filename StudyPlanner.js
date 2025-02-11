export let studySessions = [];

export function addSession(topic, sessionTime, duration) {
    try {
        if (!topic || !(sessionTime instanceof Date) || isNaN(sessionTime) || typeof duration !== "number" || duration <= 0) {
            throw new Error("Invalid session details! Make sure topic is not empty, sessionTime is a valid date, and duration is a positive number.");
        }

        let session = {
            topic: topic,
            sessionTime: sessionTime,
            duration: duration
        };

        studySessions.push(session);
        console.log("Study session added: " + topic + " at " + sessionTime);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

export function listTodaysSessions() {
    let today = new Date();
    let todaySessions = [];

    for (let i = 0; i < studySessions.length; i++) {
        let sessionDate = studySessions[i].sessionTime;
        
        if (sessionDate.toDateString() === today.toDateString()) {
            todaySessions.push(studySessions[i]);
        }
    }

    return todaySessions;
}

export function sessionCountdown() {
    for (let i = 0; i < studySessions.length; i++) {
        let session = studySessions[i];
        let delay = session.sessionTime - new Date();

        if (delay > 0) {
            setTimeout(function () {
                console.log("Reminder: Your study session on " + session.topic + " starts now!");
            }, delay);
        }
    }
}

export function fetchStudyMaterials(topic) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (topic) {
                resolve("Study materials for " + topic + " have been fetched.");
            } else {
                reject("No topic provided!");
            }
        }, 2000);
    });
}
