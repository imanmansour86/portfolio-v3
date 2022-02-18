var projects = document.getElementById("projects");
fetch(`/projects`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let html = ``;
    for (i = 0; i < response.length; i++) {
      const item = response[i];
      html += `<div class="col-md-4">
        <img
          src="/images/${item.project_image}"
          class="card-img"
          alt="get moving image"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> ${item.title}</h5>
          <p class="card-text"> ${item.description}</p>
          <p class="card-text">
            <div class="links">
              <a
                target="blank"
                class="project-link"
                href="${item.repo_url}"
              >Repo</a>
              <a
                target="blank"
                class="project-link"
                href="${item.deployed_url}"
              >Deployed</a>
            </div></p>
        </div>
      </div>`;
    }
    projects.innerHTML = html;
  });
