let listArray = [];

document.addEventListener("DOMContentLoaded", async function () {
    console.log("helt ok!");
    getMovieid();
    setSeat();
    getCheckBox()
    
  });

function  getMovieid(){
    const queryString = window.location.search;
   
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  
 return id;

}

function setSeat(){

  const Seat = document.getElementById('seat');
  let inHtml ="";
  let count = 0;
  for (let i = 0; i < 5; i++) {
    
    for (let j = 0; j < 5; j++) {
      count++;
      inHtml += `<input type="checkbox" value="${count}" class="btn-check" id="check${count}" >
      <label class="btn btn-primary" for="check${count}" style="width: 150px;">seat No:${count}</label>`;
      
    }
    inHtml +=`<br /> <br />` ;
  }

  Seat.innerHTML= inHtml;
}


document.addEventListener('submit',async function(e){
  e.preventDefault();

  let id = getMovieid(); 
  let listArray = getCheckBox();
  

  const data = {
    mId : id,
    seatNo : listArray
    }
    console.log(data)
    const response =await fetch('http://localhost:3000/client/controller/setBooking.php',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    const responseData = await response.json();
    )
});



function getCheckBox() {
  console.log("ok");

  let checkBoxes = document.querySelectorAll('.btn-check');

  for (let check of checkBoxes) {
      check.addEventListener('click', function () {
          if (this.checked == true) {
              listArray.push(this.value);
              
          } else {
              console.log("err")
          }
      })
  }

  return listArray;
}

