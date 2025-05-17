
const userTableBody = document.querySelector("#userDataTable tbody");
var usersData = [
  {
    userId: 1,
    fullName: "user full name",
    position: "Administrator",
    password: "1234",
    editable: true,
  },
  {
    userId: 2,
    fullName: "user full name",
    position: "Receptionist",
    password: "1234",
    editable: true,
  },
  {
    userId: 3,
    fullName: "user full name",
    position: "Receptionist",
    password: "1234",
    editable: true,
  },
  {
    userId: 4,
    fullName: "user full name",
    position: "Manager",
    password: "1234",
    editable: false,
  },
];

const CleanUsers = () => {
  if (userTableBody) {
    userTableBody.innerHTML = '';
  }
}

const ListUsers = () => {
  CleanUsers();
  postRequest('/user/delete', '')
    .then(result => console.log(result))
    .catch(err => console.warn('POST Error:', err));

  for (let i = 1; i <= usersData.length; i++) {
    const row = `
      <tr>
        <td>${usersData[i - 1].fullName}</td>
        <td>${usersData[i - 1].position}</td>
        <td>${userManagement(usersData[i - 1], i)}</td>
      </tr>
    `;
    userTableBody.innerHTML += row;
  }
}

const saveNewUsers = () => {
  const data = {
    name: document.getElementById('username').value,
    password: document.getElementById('password').value,
    position: document.getElementById('position').value,
  };
  postRequest('/user/new', data)
    .then(result => console.log('Result:', result))
    .catch(err => console.warn('POST Error:', err));

  ListUsers();
}

const deleteTheUser = (i) => {
  const data = {
    id: i
  }
  postRequest('/user/delete', data)
    .then(result => console.log('Result:', result))
    .catch(err => console.warn('POST Error:', err));

  ListUsers();
}

const userManagement = (usrDta, i) => {
  // if (usrDta.position == 'Manager') {
  // return "<button class='btn btn-sm btn-secondary' disabled>Cannot Delet</button>";
  // } else{
  return `<button  onclick='deleteTheUser(${i})' class='btn btn-sm btn-danger'>Delete</button>`;
  // }
};
