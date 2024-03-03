const loadAllPosts = async (categoryName) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  const data = await res.json();
  displayAllDataCard(data.posts);
};

const displayAllDataCard = (allCards) => {
  // console.log(allCards);
  const allCardShow = document.getElementById("all-card-show");
  allCardShow.innerHTML = "";
  allCards.forEach((card) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="p-10 ">
    <!-- Card -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden flex">
      <!-- Left side: profile image -->
      <div class="w-20 h-20  max-w-xs flex-shrink-0 ">
        <img
          src="${card.image}"
          alt="Profile Image"
          class="w-full h-auto"
        />
      </div>

      <!-- Right side: content -->
      <div class="p-4 w-9/10">
        <!-- Category and author name row -->
        <div class="flex items-center mb-2">
          <span class="text-sm text-gray-500 mr-2">${card.category}</span>
          <span class="text-sm text-gray-500">${card.author.name}</span>
        </div>

        <!-- Heading -->
        <h2 class="text-xl font-bold mb-2">
      
        ${card.title}
        </h2>

        <!-- Description -->
        <p class="text-gray-600 mb-4">${card.description}</p>

        <!-- Views, comments, watch time row -->
       <div class='flex justify-between'>
       <div class="flex items-center">
       <span class="text-sm text-gray-500 mr-4">${card.comment_count}</span>
       <span class="text-sm text-gray-500 mr-4">${card.view_count}</span>
       <span class="text-sm text-gray-500">${card.posted_time} min</span>
     </div>
     <button class='btn '><i class="fa-solid fa-message"></i></button>
       </div>
      </div>
    </div>
  </div>
    `;
    allCardShow.appendChild(div);
  });
  togglerSpinner(false);
};

// card data load api
const loadLatestPosts = async () => {
  const res = await fetch(
    " https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  displayCard(data);
};
const displayCard = (cards) => {
  const cardContainer = document.getElementById("card-container");
  cards.forEach((card) => {
    // console.log(card);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                class="p-8 rounded-lg"
                src="${card.cover_image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body text-left">
              <h2 class="card-title">${
                card.author.posted_date
                  ? card.author.posted_date
                  : "No publish date"
              }</h2>
              <h1>
              ${card.description}
              </h1>
              <p>${card.title}</p>
              <img class='w-10 h-10 rounded-full' src="${card.profile_image}" />
              <p>${card.author.name}</p>
             <p>'${
               card.author.designation ? card.author.designation : "Unknown"
             }'</p>
            </div>
          </div>
    `;
    cardContainer.appendChild(div);
  });
};
// search function add
const handleSearch = () => {
  const inputValue = document.getElementById("search-input").value;
  loadAllPosts(inputValue);
  togglerSpinner(true);
};
// loader data
const togglerSpinner = (isLoading) => {
  const toogeler = document.getElementById("toogeler");
  if (isLoading) {
    toogeler.classList.remove("hidden");
  } else {
    toogeler.classList.add("hidden");
  }
};

loadAllPosts("");
loadLatestPosts();
