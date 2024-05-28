async function getAllCategory() {
  const response = await fetch(
    "http://localhost:3000/admin/controller/getCategory.php"
  );
  const data = await response.json();
  console.log(data);

  let htmlStr = "";

  const tableBody = document.getElementById("table_body");
  let index = 0;
  data.forEach(function (el) {
    index++;
    htmlStr += `<tr>
           <td>${index}</td>
           <td>${el.name}</td>
           <td>
             <button type="button" class="btn btn-primary" onclick="deleteUser(${el.id})">Delete</button>
             <button class="btn btn-primary">Edit</button>
         </td>`;
  });

  tableBody.innerHTML = htmlStr;
}

async function deleteUser(id) {
  const catid = id;

  const categoryID = {
    catID: id,
  };

  const response = await fetch(
    "http://localhost:3000/admin/controller/deleteCategory.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryID),
    }
  );

  const responseData = await response.json();

  if (responseData.status == true) {
    getAllCategory();
    // Display delete successful message
    alertMessage("Delete successful");
  } else {
    alertMessage("Delete failed");
  }
}

function alertMessage(message, timeout = 3000) {
  const alert = document.getElementById("alert");

  alert.innerHTML = `
      <div class="alert alert-success" id="alert">
          <strong>Success!</strong> ${message}.
      </div>
  `;

  setTimeout(() => {
    alert.innerHTML = "";
  }, timeout);
}

document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  let category = document.getElementById("category").value;

  const data = {
    name: category,
  };
  console.log(data);

  // Make fetch request
  const response = await fetch(
    "http://localhost:3000/admin/controller/addCategory.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();
  if (responseData.status == true) {
    getAllCategory();
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  console.log("helth ok");
  getAllCategory();
});
