export let appointments = [];

export function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        if (!clientName || !(appointmentTime instanceof Date) || isNaN(appointmentTime)) {
            throw new Error("Invalid input! Please enter a valid client name and appointment date.");
        }

        let appointment = {
            clientName: clientName,
            appointmentTime: appointmentTime,
            serviceType: serviceType
        };

        appointments.push(appointment);
        console.log("Added appointment for " + clientName + " at " + appointmentTime);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

export function getUpcomingAppointments() {
    let now = new Date();
    let oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

    let upcoming = [];

    for (let i = 0; i < appointments.length; i++) {
        if (appointments[i].appointmentTime >= now && appointments[i].appointmentTime <= oneHourLater) {
            upcoming.push(appointments[i]);
        }
    }

    return upcoming;
}

export function scheduleReminders() {
    for (let i = 0; i < appointments.length; i++) {
        let app = appointments[i];
        let delay = app.appointmentTime - new Date();

        if (delay > 0) {
            setTimeout(function () {
                console.log("Reminder: " + app.serviceType + " appointment with " + app.clientName + " at " + app.appointmentTime);
            }, delay);
        }
    }
}
