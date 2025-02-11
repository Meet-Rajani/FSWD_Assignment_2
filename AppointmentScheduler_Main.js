import { addAppointment, getUpcomingAppointments, scheduleReminders } from "./AppointmentScheduler.js";

addAppointment("Meet Rajani", new Date(Date.now() + 30 * 60000), "Consultation");
addAppointment("Dhaval Ahir", new Date(Date.now() + 90 * 60000), "Follow-up");
addAppointment("Yash Bhalodiya", new Date(Date.now() + 45 * 60000), "Check-up");

let upcoming = getUpcomingAppointments();
console.log("Upcoming Appointments:");
console.log(upcoming);

scheduleReminders();
