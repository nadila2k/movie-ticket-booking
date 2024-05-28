document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("category", document.getElementById("category").value);
  formData.append("available", document.querySelector('input[name="available"]:checked').value);
  formData.append("image", document.getElementById("image").files[0]);
  
  const response = await fetch(
    "http://localhost:3000/admin/controller/addMovie.php",
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (result.status == true) {
    getAllMovie();
  }
  
});

document.addEventListener("DOMContentLoaded", async function () {
  console.log("helth ok");
  getAllMovie();
  getAllCategory();
});

async function getAllMovie() {
  const response = await fetch(
    "http://localhost:3000/admin/controller/getMovie.php"
  );

  const data = await response.json();

  let htmlStr = "";

  const tableBody = document.getElementById("table_body");
  let index = 0;
  data.forEach(function (el) {
    index++;
    htmlStr += `<tr>
           <td>${index}</td>
           <td>${el.name}</td>
           <td>RS ${el.price}.00</td>
           <td><img src="../../uploads/${el.image}" alt=""style="width: 150px; height: 150px;"></td>
           <td>${el.category}</td>
           <td>${el.description}</td>
           <td>${el.available}</td>

           <td>
             <button type="button" class="btn btn-primary" onclick="deleteUser(${el.id}, '${el.image}')">Delete</button>
             <button class="btn btn-primary">Edit</button>
         </td>`;
  });

  tableBody.innerHTML = htmlStr;
}
async function getAllCategory() {
  const response = await fetch(
    "http://localhost:3000/admin/controller/getCategory.php"
  );
  const data = await response.json();

  let htmlStr = "";

  const category = document.getElementById("category");
  data.forEach(function (el) {
    htmlStr += `<option value="${el.id}">${el.name}</option>`;
  });

  category.innerHTML = htmlStr;
}

async function deleteUser(id, image) {
  const movieData = {
    movieid: id,
    imageName: image,
  };

  const response = await fetch(
    "http://localhost:3000/admin/controller/deleteMovie.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    }
  );

  const responseData = await response.json();

  if (responseData.status == true) {
    getAllMovie();
  }
}
