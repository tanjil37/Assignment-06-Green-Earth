const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json) =>displayCategories(json.categories))
}

const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
  .then((res)=> res.json())
  .then((json)=> displayAllPlants(json.plants))

}

const displayAllPlants = (plants) => {
  const plantsContainer  = document.getElementById("plants-container")
  for(let plant of plants){
    const cardDiv = document.createElement("div")
    cardDiv.innerHTML = `
    <!-- Card  -->
                <div class="bg-white shadow-xl p-4 rounded-xl grid h-[420px]">
                  <img
                    class="w-[310px] h-[190px]"
                    src='${plant.image}'
                    alt=""
                  />
                  <div class="space-y-2 mt-2">
                    <h2 class="text-sm font-semibold">${plant.name}</h2>
                    <p class="text-xs font-normal">
                     ${plant.description}
                    </p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <button class="bg-sky-100 rounded-full text-green-700 px-2">
                      ${plant.category}
                    </button>
                    <span class="text-black font-semibold">৳${plant.price}</span>
                  </div>
                  <div>
                    <button
                      class="mt-2 w-full px-3 py-2 bg-[#15803D] text-xs text-white rounded-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
    
    `
    plantsContainer.append(cardDiv)
  }

}
//end

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plants-container").classList.add("hidden");
  } else {
    document.getElementById("plants-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};
const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".categorie-btn")
    lessonButtons.forEach((btn)=>btn.classList.remove("active"))
}
const loadPlantCategories = (id) =>{
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        removeActive();
        const clickBtn = document.getElementById(`categorie-btn-${id}`);
        clickBtn.classList.add("active")
        displayAllPlantCategorie(data.plants);
    });
}
const loadPlantDetails = async (id) => {
 
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlanDetails(details.plants);
};
const priceCount = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  priceCountShow(details.plants)
};
const priceCountShow = (plants) =>{
  alert(`${plants.name} has been added to cart`)
  const cartContainer = document.getElementById("add-cart-container")
  const cartDiv = document.createElement("div")
  cartDiv.id = `cart-item-${plants.id}`
  cartDiv.innerHTML= 
  `
             <!-- price -->
                <div
                  class="flex items-center bg-sky-50 justify-between p-2 my-2 rounded-lg"
                >
                  <div class="space-y-2">
                    <h2>${plants.name}</h2>
                    <p>৳${plants.price} </p>
                  </div>
                  <div>
                    <i onclick="removeItem(${plants.id}, ${plants.price})"  class="fa-solid fa-xmark"></i>
                  </div>
                </div>
  `  
  cartContainer.append(cartDiv)
  let total = parseInt(document.getElementById("total").innerText)
  let finalTotal = total + plants.price;
  document.getElementById("total").innerText = finalTotal
}
function removeItem(id, price) {
  const item = document.getElementById(`cart-item-${id}`);
  if (item) {
    item.remove();
  }
  let total = parseInt(document.getElementById("total").innerText);
  let finalTotal = total - price;
  document.getElementById("total").innerText = finalTotal;
}

const displayPlanDetails = (plants) =>{
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML =`
            <div class="">
              <h2 class="font-semibold text-2xl">${plants.name}</h2>
             <img
                    class=""
                    src='${plants.image}'
                    alt=""
                  />
              <div class="space-y-2">
                <h2><span class="font-bold">Category</span>:  ${plants.category} </h2>
                <p><span class="font-bold">Price</span>:৳ ${plants.price}</p>
                <p><span class="font-bold">Description</span>: ${plants.description} </p>
              </div>
            </div>
  `;
  document.getElementById("plant_modal").showModal() 
}
const displayAllPlantCategorie = (plants) => {
  //console.log(plants)
  const plantsContainer  = document.getElementById("plants-container")
  plantsContainer.innerHTML = " ";
  for(let plant of plants){
    const cardDiv = document.createElement("div")
    cardDiv.innerHTML = `
    <!-- Card  -->
                <div class="bg-white shadow-xl p-4 rounded-xl grid h-[420px]">
                  <img
                    class="w-[310px] h-[190px]"
                    src='${plant.image}'
                    alt=""
                  />
                  <div class="space-y-2 mt-2">
                    <h2 onclick="loadPlantDetails(${plant.id})" class="text-sm font-semibold add-cart-btn-${plant.id}">${plant.name}</h2>
                    <p class="text-xs font-normal">
                     ${plant.description}
                    </p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <button class="bg-sky-100 rounded-full text-green-700 px-2">
                      ${plant.category}
                    </button>
                    <span class="text-black font-semibold">৳${plant.price}</span>
                  </div>
                  <div>
                    <button onclick="priceCount(${plant.id})"
                      class="mt-2 w-full px-3 py-2 bg-[#15803D] text-xs text-white rounded-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
    `
    plantsContainer.append(cardDiv)
    manageSpinner(false);
     
  }
}
const displayCategories = (categories) =>{
  const categoriesContainer =  document.getElementById('categories-container')
  categoriesContainer.innerHTML = "";
    for(let categorie of categories){
         const btnDiv  = document.createElement("div")
         btnDiv.innerHTML = `
                         <button id="categorie-btn-${categorie.id}" onclick="loadPlantCategories(${categorie.id})"  class="btn btn-soft btn-success categorie-btn">${categorie.category_name}</button>
         `
         categoriesContainer.append(btnDiv)
    }
}

loadAllPlants();
loadCategories();