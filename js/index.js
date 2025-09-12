const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json) =>displayCategories(json.categories))
}

// const loadAllPlants = () => {
//   fetch("https://openapi.programming-hero.com/api/plants")
//   .then((res)=> res.json())
//   .then((json)=> displayAllPlants(json.plants))

// }

// const displayAllPlants = (plants) => {
//   const plantsContainer  = document.getElementById("plants-container")
//   for(let plant of plants){
//     const cardDiv = document.createElement("div")
//     cardDiv.innerHTML = `
//     <!-- Card  -->
//                 <div class="bg-white shadow-xl p-4 rounded-xl grid h-[420px]">
//                   <img
//                     class="w-[310px] h-[190px]"
//                     src='${plant.image}'
//                     alt=""
//                   />
//                   <div class="space-y-2 mt-2">
//                     <h2 class="text-sm font-semibold">${plant.name}</h2>
//                     <p class="text-xs font-normal">
//                      ${plant.description}
//                     </p>
//                   </div>
//                   <div class="flex justify-between items-center mt-2">
//                     <button class="bg-sky-100 rounded-full text-green-700 px-2">
//                       ${plant.category}
//                     </button>
//                     <span class="text-black font-semibold">৳${plant.price}</span>
//                   </div>
//                   <div>
//                     <button
//                       class="mt-2 w-full px-3 py-2 bg-[#15803D] text-xs text-white rounded-full"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
    
//     `
//     plantsContainer.append(cardDiv)
//   }

// }



const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".categorie-btn")
    //console.log(lessonButtons)
    lessonButtons.forEach((btn)=>btn.classList.remove("active"))

}
const loadPlantCategories = (id) =>{
  //console.log(id);
  const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data)
        removeActive();
       
        const clickBtn = document.getElementById(`categorie-btn-${id}`);
        //console.log(clickBtn)
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
                    <h2 onclick="loadPlantDetails(${plant.id})" class="text-sm font-semibold">${plant.name}</h2>
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

  //  wordContainer.innerHTML = " ";
  //   if(words.length==0){
  //       wordContainer.innerHTML= `
  //       <div class="space-y-4 col-span-full text-center font-bangla">
  //           <img class="mx-auto" src="./assets/alert-error.png" alt="">
  //           <h2 class="font-normal text-sm text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>
  //           <p class="font-medium text-3xl text-[#292524]">নেক্সট Lesson এ যান</p>
  //       </div>  
  //       `;
  //   }
  //  words.forEach((word)=> {
  //   const card = document.createElement('div');
  //   card.innerHTML = `
  //      <div class="bg-white text-center p-10 rounded-xl">
  //       <h2 class="text-3xl font-bold">${word.word ? word.word : "কোন শব্দ পাওয়া যাই নি"}</h2>
  //       <p class="text-xl mt-2 mb-3">Meaning /Pronounciation</p>
  //       <div class="font-semibold text-3xl font-bangla">"${word.meaning ? word.meaning : "কোন অর্থ পাওয়া যাই নি"} / ${word.pronunciation ? word.pronunciation : "Pronounciation পাওয়া যাই নি"}"</div>
  //       <div class="flex justify-between mt-6">
  //         <button onclick="loadWordDetail(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
  //         <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
  //       </div>
  //     </div>
  //   `
  //   wordContainer.append(card)
  //  })
}



const displayCategories = (categories) =>{
  const categoriesContainer =  document.getElementById('categories-container')
  
  categoriesContainer.innerHTML = "";
    for(let categorie of categories){
        //console.log(categorie)
         const btnDiv  = document.createElement("div")
         btnDiv.innerHTML = `
                         <button id="categorie-btn-${categorie.id}" onclick="loadPlantCategories(${categorie.id})"  class="btn btn-soft btn-success categorie-btn">${categorie.category_name}</button>
         `
         categoriesContainer.append(btnDiv)
    }
}




//loadAllPlants();

loadCategories();