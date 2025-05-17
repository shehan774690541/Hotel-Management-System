const roomsTableBody = document.querySelector("#roomsTable tbody");
const roomsData = [
  {
    roomId: 1,
    available: "available",
    price: 150,
    type: "Single"
  },
  {
    roomId: 2,
    available: "Occupied",
    price: 150,
    type: "Double"
  },
  {
    roomId: 3,
    available: "available",
    price: 150,
    type: "Suite"
  },
  {
    roomId: 4,
    available: "available",
    price: 150,
    type: "Double"
  },
];

const CleanRoomsTable = () => {
  if (roomsData) {
    roomsData.innerHTML = '';
  }
}

const ListTheRoom = () => {
  for (let i = 1; i <= roomsData.length; i++) {
    const row = `
      <tr>
        <td>${roomsData[i - 1].roomId}</td>
        <td>${roomsData[i - 1].available}</td>
        <td>${roomsData[i - 1].price}</td>
        <td>${roomsData[i - 1].type}</td>
        <td>
          <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
              data-bs-target="#editRoomModal" onclick='RoomsEditFormFill(${roomsData[i - 1].roomId}, "${roomsData[i - 1].available}", ${roomsData[i - 1].price}, "${roomsData[i - 1].type}")'>
              <i class="bi bi-pencil"></i> Edit
          </button>
          <button class="btn btn-sm btn-danger">
              <i class="bi bi-trash"></i> Delete
          </button>
        </td>
      </tr>
    `;
    roomsTableBody.innerHTML += row;
  }
}

const AddTheRoom = () => {
  const data = {
    roomId: document.getElementById("roomNumber").value,
    available: document.getElementById("roomType").value,
    price: document.getElementById("roomPrice").value,
    type: document.getElementById("roomStatus").value,
  }

  postRequest('/', data)
    .then(result => console.log('Result:', result))
    .catch(err => console.warn('POST Error:', err));

}

const EditTheRoom = () => {

}

const DeleteTheRoom = () => {

}

const RoomsEditFormFill = (roomNo, avilable, price, type) => {
  document.getElementById("editRoomNumber").value = roomNo;
  document.getElementById("editRoomType").value = avilable;
  document.getElementById("editRoomPrice").value = price;
  document.getElementById("editRoomType").value = type;
};

const regectz = (i) => {
  alert("regect" + i);
};


