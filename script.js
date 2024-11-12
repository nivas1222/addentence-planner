function calculateAttendance() {
  const totalHours = parseFloat(document.getElementById('totalHours').value);
  const attendedHours = parseFloat(document.getElementById('attendedHours').value);
  const plannedAbsences = parseFloat(document.getElementById('plannedAbsences').value);

  // Check if any of the inputs are invalid (NaN)
  if (isNaN(totalHours) || isNaN(attendedHours) || isNaN(plannedAbsences)) {
      document.getElementById('result').textContent = "Please fill in all fields with valid numbers.";
      return;
  }

  // Adjust total hours based on planned absences
  const adjustedTotal = totalHours + plannedAbsences;
  // Calculate the current attendance percentage
  const currentAttendance = (attendedHours / adjustedTotal) * 100;

  // Define the minimum required attendance
  const requiredAttendance = 75;

  // If current attendance is already 75% or higher, show the message
  if (currentAttendance >= requiredAttendance) {
      document.getElementById('result').textContent = `Your current attendance is ${currentAttendance.toFixed(2)}%. You have met the minimum requirement!`;
  } else {
      // Use the while loop approach to find the number of hours required to meet 75%
      let i = 0;
      let targetAttendance = currentAttendance;
      while (targetAttendance < requiredAttendance) {
          i += 1;  // Increment attended hours
          targetAttendance = ((attendedHours + i) / (adjustedTotal + i)) * 100;  // Recalculate attendance percentage
      }

      // Display the result with the number of additional hours needed
      document.getElementById('result').textContent = `Your attendance after taking leave is ${currentAttendance.toFixed(2)}%. You need to attend ${i} more hour(s) to reach 75%.`;
  }
}
