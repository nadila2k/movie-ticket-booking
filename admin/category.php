<?php include 'partials/header.php'; ?>




<div id="alert"></div>

<div class="container mt-4">

  <div class="mb-3  ">
    <button type="button" class="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#categoryAddModal">
      Add Category
    </button>
  </div>
  <h2>Category Table</h2>

  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody id="table_body">
    </tbody>
  </table>
</div>

<!-- Modal -->
<div class="modal fade" id="categoryAddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <input type="" id="category" class="form-control" />
            <label class="form-label" for="category">Category Name</label>
          </div>

          <!-- Submit button -->
          <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>

<script src="js/category.js"></script>

<?php include 'partials/footer.php'; ?>