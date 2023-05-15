// fetching data from server
const loadItems = async (dataLimit) => {
  // start spinner before data load
  toggleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayItems(data.data.tools, dataLimit);
};



const displayItems = (items, dataLimit) => {
  
  const itemsContainer = document.getElementById("cards-container");
  
  // display 6 items only
  
  const showAll = document.getElementById("show-all");
  
  if (dataLimit && items.length > 6) {
    items = items.slice(0, 6);
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    
    itemDiv.innerHTML = `
      <div class="card w-full bg-base-100 shadow-xl">
          <figure>
            <img class="w-full h-64" src="${item.image}" alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">Features</h2>
            <!-- Features list here -->
             <ol class="list-decimal ml-5">
              <li>${item.features[0]}</li>
              <li>${item.features[1]}</li>
              <li>${item.features[2]}</li>
            </ol>
            <hr class="border"/>

            <h1 class="text-xl font-bold">"${item.name}"</h1>
            <div class="flex justify-between">  
              <div class="flex">
                <span class="mr-1">              
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </span>
                <p>${item.published_in}</p>
  
              </div>
              <div onclick="loadItemDetails('${item.id}')" class="bg-red-200 rounded-full p-3 cursor-pointer">
                <label class="cursor-pointer" for="my-modal-5" class="text-[#EB5757]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </label>
              </div>
            </div>

           
          </div>
        </div>
         `;
    itemsContainer.appendChild(itemDiv);
  });
  // stop spinner after data load
  toggleSpinner(false);
  
};


const btnShowAll = document.getElementById("show-all")
btnShowAll.addEventListener("click", function () {
    toggleSpinner(true);
    loadItems();
    console.log('button clicked')
  })



// function for showing spinner
const toggleSpinner = (isLoading) => {
  const spinnerSection = document.getElementById("spinner");
  if (isLoading) {
    spinnerSection.classList.remove("hidden");
  } else {
    spinnerSection.classList.add("hidden");
  }
};


loadItems(6);


// load item details for moadal
const loadItemDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayItemDetails(data.data);
  console.log(id);

};

const displayItemDetails = item => {
  console.log(item.description)

  const itemDetails = document.getElementById("item-details")

  itemDetails.innerHTML = `
  
      <div class="modal-box w-11/12 max-w-5xl ">
        
        <div class="card lg:card-side bg-base-100">
         
          <div class="card-body w-2/5 rounded-xl border-2 border-error mr-3 bg-red-50">
            <h2 class="card-title mb-6">${item.description}</h2>

            <div class=" mb-6">
              <span class="rounded-lg bg-slate-300 font-bold p-2 mr-2">
                ${item.pricing[0].price !== '0' ? item.pricing[0].price : "Free of Cost"}
              </span>
              <span class="rounded-lg bg-slate-300 font-bold p-2 mr-2">
                ${item.pricing[1].price !== '0' ? item.pricing[1].price : "Free of Cost"}
              </span>
              <span class="rounded-lg bg-slate-300 font-bold p-2 mr-2">
                ${item.pricing[2].price !== '0' ? item.pricing[2].price : "Free of Cost"}
              </span>
            </div>
              

            <div class="flex justify-between">
              <div>
                <h2 class="text-3xl font-bold mb-4">Features</h2>
                <ul class="list-decimal ml-4">
                  <li>${item.features[1].feature_name}</li>
                  <li>${item.features[2].feature_name}</li>
                  <li>${item.features[3].feature_name}</li>
                  <li>${item.features[4]?.feature_name ? item.features[4].feature_name : 'features unavailable'}</li>
                 
                </ul>
              </div>
              <div>
                <h2 class="text-3xl font-bold mb-4">Integrations</h2>
                <ul class="list-decimal ml-4">
                  <li>${item?.integrations[0] ? item.integrations[0] : 'No data found'}</li>
                  <li>${item?.integrations[1] ? item.integrations[1] : 'No data found'}</li>
                  <li>${item?.integrations[2] ? item.integrations[2] : 'No data found'}</li>
                  <li>${item?.integrations[3] ? item.integrations[3] : 'No data found'}</li>
                  <li>${item?.integrations[4] ? item.integrations[4] : 'No data found'}</li>

                </ul>
              </div>
            </div>


          </div>
           
          <div class="w-2/5 rounded-xl border-2 p-6">
            <div class="w-full relative mb-6">
              <img class="w-full rounded-xl h-64" src="https://www.datanami.com/wp-content/uploads/2023/01/chat_gpt_shutterstock_Ebru-Omer.jpg" alt="Album"/>
              <span class="py-1 mt-1 mr-1 w-28 text-white text-center font-semibold bg-red-500 rounded-lg absolute right-0 top-0">94% accuracy</span>
            </div>
            <h1 class="text-2xl font-bold text-center mb-4" >Hi, how are you doing today?</h1>
            <p class="text-center">I'm doing well, thank you for asking. How can I assist you today?</p>
          </div>
        
        </div>
        
        <div class="modal-action">
          <label for="my-modal-5" class="btn">Close!</label>
        </div>
      
      </div>
  `






}

