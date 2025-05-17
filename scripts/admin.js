const guestsTableBody = document.querySelector("#guestsTable tbody");
const data = [
  {
    id: 1,
    name: "shehan rajapaksha",
    email: "shehan774690541@gmail.com",
    mobile: "+94774690541",
    roomNo: 101,
    checkIn: "2023-05-15 14:00",
    checkOut: "2023-05-20 12:00",
    type: "single",
    status: "checkIn",
  },
  {
    id: 1,
    name: "example Name",
    email: "shehan774690541@gmail.com",
    mobile: "+243244234323",
    roomNo: 102,
    checkIn: "2023-05-15 14:00",
    checkOut: "2023-05-20 12:00",
    type: "double",
    status: "checkout",
  },
  {
    id: 1,
    name: "User Name",
    email: "shehan774690541@gmail.com",
    mobile: "+344234232432",
    roomNo: 103,
    checkIn: "2023-05-15 14:00",
    checkOut: "2023-05-20 12:00",
    type: "family room",
    status: "waiting",
  },
  {
    id: 1,
    name: "My Name",
    email: "shehan774690541@gmail.com",
    mobile: "+211313232323",
    roomNo: 104,
    checkIn: "2023-05-15 14:00",
    checkOut: "2023-05-20 12:00",
    type: "double",
    status: "waiting",
  },
];

const approve = (i) =>{
  alert("approve"+  i)
}

const regect = (i) =>{
  alert("regect"+ i)
}

const userStatus = (status, i) => {
  if (status == "checkIn") {
    return "<button class='btn btn-sm btn-success'>Check In</button>";
  } else if (status == "checkout") {
    return "<button class='btn btn-sm btn-secondary'>Check Out</button>";
  }else if(status == "waiting"){
    return `<button onclick='approve(${i})' class='btn btn-sm btn-warning'>Approve</button> <button  onclick='regect(${i})' class='btn btn-sm btn-danger'>Regect</button>`;
  } else {
    return `<button onclick='approve(${i})' class='btn btn-sm btn-warning'>Approve</button> <button  onclick='regect(${i})' class='btn btn-sm btn-danger'>Regect</button>`;
  }
};

for (let i = 1; i <= data.length; i++) {
  const row = `
      <tr>
        <td>${data[i - 1].name}</td>
        <td>${data[i - 1].email}</td>
        <td>${data[i - 1].mobile}</td>
        <td>${data[i - 1].roomNo}</td>
        <td>${data[i - 1].checkIn}</td>
        <td>${data[i - 1].checkOut}</td>
        <td>${data[i - 1].type}</td>
        <td>${userStatus(data[i - 1].status, i)}</td>

      </tr>
    `;
  guestsTableBody.innerHTML += row;
}
