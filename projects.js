const projects = [

  // ----- PROJECT TABLEAU SYD -----
  {
    title: "Mapping Sydney's Data",
    img: "images/TableauSyd.JPG",
    content: `
      <p class="mb-4">As I continue learning Tableau, I’ve been diving into some cool new features like calculated fields, parameters, and parameter controls, which I have used to visualise data interactively. I also explored using Tableau for geographic data like shapefiles, creating detailed and dynamic maps.</p>
  <div class="flex justify-center">
    <div id="tableauViz1" class="tableauPlaceholder w-[800px] h-[600px] mb-6 rounded shadow border"></div>
  </div>
    `,
  },
];

// Populate the grid
const grid = document.getElementById("project-grid");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className =
    "cursor-pointer bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition h-96";
  card.onclick = () => openModal(project.title, project.content);
  card.innerHTML = `
    <img src="${project.img}" alt="${project.title}" class="w-full h-80 object-cover">
    <div class="p-4">
      <h2 class="text-xl font-semibold">${project.title}</h2>
      <p class="text-sm text-gray-600">Click to read more</p>
    </div>
  `;
  grid.appendChild(card);
});
// ###############################################################################

// Modal handlers
function openModal(title, htmlContent) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-content").innerHTML = htmlContent;
  document.getElementById("project-modal").classList.remove("hidden");

  // Handle Tableau embed if present
  if (htmlContent.includes("tableauViz1")) {
    setTimeout(() => {
      const containerDiv = document.getElementById("tableauViz1");
      const url =
        "https://public.tableau.com/views/Sydneyinnumbers/Dashboard12";
      const options = {
        hideTabs: true,
        hideToolbar: false,
        width: "100%",
        height: "600px",
      };
      new tableau.Viz(containerDiv, url, options);
    }, 100);
  }
}

function closeModal() {
  document.getElementById("project-modal").classList.add("hidden");
}

// ✅ Close modal when clicking outside modal box
document.getElementById("project-modal").addEventListener("click", (e) => {
  if (e.target.id === "project-modal") {
    closeModal();
  }
});
