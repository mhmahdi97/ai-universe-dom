// fetching data from server
const loadItems = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayItems(data.data.tools);
};

const displayItems = (items) => {
  console.log(items);

  const itemsContainer = document.getElementById("cards-container");
  itemsContainer.textContent = "";

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
            <p>${item.features[0]}</p>
            <p>${item.features[1]}</p>
            <p>${item.features[2]}</p>
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
              <div class="bg-red-200 rounded-full p-3 cursor-pointer">
                <label for="my-modal-5" class="text-[#EB5757]">
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
  
};


loadItems();
