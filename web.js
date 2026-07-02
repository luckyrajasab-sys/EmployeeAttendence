function addAttendance(){

  let empId =
    document.getElementById("empId").value;

  let empName =
    document.getElementById("empName").value;

  let department =
    document.getElementById("department").value;

  let workingDays =
    parseInt(document.getElementById("workingDays").value);

  let presentDays =
    parseInt(document.getElementById("presentDays").value);

  let leaveDays =
    parseInt(document.getElementById("leaveDays").value);

  // Validation

  if(
    empId === "" ||
    empName === "" ||
    department === "" ||
    isNaN(workingDays) ||
    isNaN(presentDays) ||
    isNaN(leaveDays)
  ){
    alert("Please fill all fields");
    return;
  }

  if(presentDays > workingDays){
    alert("Present Days cannot exceed Working Days");
    return;
  }

  if(leaveDays > workingDays){
    alert("Leave Days cannot exceed Working Days");
    return;
  }

  // Attendance %

  let attendance =
    ((presentDays / workingDays) * 100).toFixed(0);

  // Status

  let status = "";
  let badgeClass = "";

  if(attendance >= 90){
    status = "Excellent";
    badgeClass = "excellent";
  }

  else if(attendance >= 75){
    status = "Good";
    badgeClass = "good";
  }

  else if(attendance >= 50){
    status = "Average";
    badgeClass = "average";
  }

  else{
    status = "Poor";
    badgeClass = "poor";
  }

  // Add Table Row

  let row = `
    <tr>
      <td>${empId}</td>
      <td>${empName}</td>
      <td>${department}</td>
      <td>${workingDays}</td>
      <td>${presentDays}</td>
      <td>${leaveDays}</td>
      <td>${attendance}%</td>
      <td>
        <span class="badge ${badgeClass}">
          ${status}
        </span>
      </td>
    </tr>
  `;

  document.getElementById("attendanceTable")
    .innerHTML += row;

  // Clear Form

  document.getElementById("empId").value = "";
  document.getElementById("empName").value = "";
  document.getElementById("department").value = "";
  document.getElementById("workingDays").value = "";
  document.getElementById("presentDays").value = "";
  document.getElementById("leaveDays").value = "";

}