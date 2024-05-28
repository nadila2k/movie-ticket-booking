<?php include 'partials/header.php'; ?>
<div id="alert"></div>
<div class="container mt-3">
    <div class="mb-5 ">
        <button type="button" class="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#movieAddModal">
            Add Movie
        </button>
    </div>
    <h2>Movies</h2>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>id</th>
                <th>Movie Name</th>
                <th>price</th>
                <th>Image</th>
                <th>Category</th>
                <th>Description</th>
                <th>Availability</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody id="table_body">

        </tbody>
    </table>


    </body>

</div>



<div class="modal fade" id="movieAddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <form id="form">
                    <!-- Email input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="" id="name" class="form-control" />
                        <label class="form-label" for="name">Movie Name</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="" id="price" class="form-control" />
                        <label class="form-label" for="price">price</label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                        <textarea id="description" class="form-control"></textarea>
                        <label class="form-label" for="description">Description </label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <p>Now Showing?</p>
                        <input type="radio" id="availableYes" name="available" value="Yes" />
                        <label class="form-label" for="availableYes">Yes</label>
                        <input type="radio" id="availableNo" name="available" value="No" />
                        <label class="form-label" for="availableNo">No</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="category">Category Name :</label>
                        <select name="category" id="category">


                        </select>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="file" id="image" class="form-control" />
                        <label class="form-label" for="image">Image </label>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="js/dashbourd.js"></script>
<?php include 'partials/footer.php'; ?>