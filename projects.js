const projects = [
  // ----- PROJECT SCHEMAFIT -----
  {
    title: "SchemaFit",
    img: "images/schemafit/SchemaFit.JPG",
    content: `
      <p><em><a href="https://github.com/tdeenv/SchemaFit" target="_blank" class="underline text-blue-600 hover:text-blue-800">Check this project out on GitHub</a></em></p>
      <p class="mt-4">To evaluate how I am responding to my exercise routine, I needed an app that could collect both quantitative and qualitative data from each workout. I wanted a tracker that could collect information on:</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Measurements like weight</li>
        <li>What exercises I have done in each workout</li>
        <li>How many sets and reps per exercise</li>
        <li>Qualitative comments for each set</li>
      </ul>
      <p class="mt-4">I turned to Python to design a bespoke solution using SQLite and Flask. The form allows entering data, and the history tab visualises changes over time in measurements and estimated 1RM (using the Epley formula).</p>
      <h3 class="font-semibold mt-6 mb-2">The data entry page</h3>
      <img src="/images/schemafit/form.JPG" alt="Form" class="w-full mb-6 rounded shadow">

      <h3 class="font-semibold mt-6 mb-2">The history page</h3>
      <img src="/images/schemafit/history.JPG" alt="History" class="w-full mb-6 rounded shadow">

      <h3 class="font-semibold mt-6 mb-2">Future Features</h3>
      <ul class="list-disc ml-6">
        <li>An integrated timing function</li>
      </ul>
    `,
  },

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
