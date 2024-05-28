
document.addEventListener("DOMContentLoaded", async function () {
  console.log("helt ok!");
  getMovie();
});

async function getMovie() {
  const response = await fetch(
    "http://localhost:3000/admin/controller/getMovie.php"
  );

  const data = await response.json();
  console.log(data);

  let htmlStr = "";
  let nowShowingHtml = "";
  const carouselBody = document.getElementById("coming-soon");
  const nowShowing = document.getElementById("nowShowing");

  data.forEach(function (el) {
    if (el.available === "No") {
      htmlStr += `<div class="carousel-item active" data-bs-interval="10000">
            <img src="../../uploads/${el.image}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${el.name}</h5>
                <p>${el.description}.</p>
            </div>
        </div>`;
    } else {
      nowShowingHtml += `<div class="col-md-4">
            <section class="card-custom mx-auto my-5">
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="../../uploads/${el.image}" class="img-fluid" style="width: 414px; height: 276px;">

                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold"><a>${el.name}</a></h5>
                  <ul class="list-unstyled list-inline mb-0">
                    <li class="list-inline-item me-0">
                      <i class="fas fa-star text-warning fa-xs"> </i>
                    </li>
                    <li class="list-inline-item me-0">
                      <i class="fas fa-star text-warning fa-xs"></i>
                    </li>
                    <li class="list-inline-item me-0">
                      <i class="fas fa-star text-warning fa-xs"></i>
                    </li>
                    <li class="list-inline-item me-0">
                      <i class="fas fa-star text-warning fa-xs"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star-half-alt text-warning fa-xs"></i>
                    </li>
                    <li class="list-inline-item">
                      <p class="text-muted">4.5 (413)</p>
                    </li>
                  </ul>
                  <p class="mb-2"> ${el.category}</p>
                  <p class="card-text">
                  ${el.description}.
                  </p>
                  <hr class="my-4" />
                  <p class="lead"><strong>Time Duration</strong></p>
                <form>
                  <ul class="list-unstyled list-inline d-flex justify-content-between">
                    <li class="list-inline-item me-0">
                      <div class="chip me-0">
                      <input type="radio" id="time9" name="time" value="9.00" />
                      <label for="time9">9.00AM</label>
                      </div>
                    </li>
                    <li class="list-inline-item me-0">
                      <div class="chip  me-0">
                      <input type="radio" id="time11" name="time" value="11.00" />
                      <label for="time11">11.00AM</label>
                      </div>
                    </li>
                    <li class="list-inline-item me-0">
                      <div class="chip me-0">
                      <input type="radio" id="time14" name="time" value="14.00" />
                      <label for="time14">14.00AM</label>
                      </div>
                    </li>
                    <li class="list-inline-item me-0">
                      <div class="chip me-0">
                      <input type="radio" id="time17" name="time" value="17.00" />
                      <label for="time17">${el.id}</label>
                      </div>
                    </li>
                  </ul>
                  <a href="booking.php?id=${el.id}"  class="btn btn-info p-md-1 mb-0"  >Button</a>


                  </form>
                </div>
              </div>
            </section>
          </div>`;
    }
  });
  carouselBody.innerHTML = htmlStr;
  nowShowing.innerHTML = nowShowingHtml;
}


