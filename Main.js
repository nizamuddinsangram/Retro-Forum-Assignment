const loadAllPosts = async (categoryName) => {
  const toogeler = (document.getElementById("toogeler").style.display =
    "block");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  const data = await res.json();
  displayAllDataCard(data.posts);
};

const displayAllDataCard = (allCards) => {
  console.log(allCards);
  if (allCards.length > 0) {
    setTimeout(() => {
      document.getElementById("toogeler").style.display = "none";
    }, 2000);
  }
  const allCardShow = document.getElementById("all-card-show");
  allCardShow.innerHTML = "";
  allCards.forEach((card) => {
    console.log(card);

    const div = document.createElement("div");
    let badgeColor;
    if (card.isActive) {
      badgeColor = "badge-success";
    } else {
      badgeColor = "badge-secondary";
    }
    div.innerHTML = `
    <div class="p-10 ">
    <!-- Card -->
    <div class="bg-gray-200 p-10 rounded-lg shadow-md overflow-hidden  lg:flex">
      <!-- Left side: profile image -->
      <div class="w-20 indicator h-20 ml-10 rounded-lg mr-4  max-w-xs flex-shrink-0 ">
      <div class=" indicator-item badge badge-secondary ${badgeColor}"></div>

      <img
        class="w-full h-auto mx-auto relative"
          src="${card.image}"
          alt="Profile Image"
         
        />
      </div>

      <!-- Right side: content -->
      <div class="p-4 w-9/10">
        <!-- Category and author name row -->
        <div class="flex items-center  mb-2">
          <span class="text-lg	 lg:text-xl font-semibold mr-0	 lg:mr-2">#${card.category}</span>
          <span class="text-lg	 lg:text-xl font-semibold ml-4">Author : ${card.author.name}</span>
        </div>

        <!-- Heading -->
        <h2 class="text-lg lg:text-2xl my-2 lg:my-4 font-bold tracking-widest	 mb-2">
      
        ${card.title}
        </h2>

        <!-- Description -->
        <p class="text-gray-600 mt-3 lg:mt-6 text-xl tracking-normal	 lg:tracking-wides mb-4">${card.description}</p>

        <!-- Views, comments, watch time row -->
       <div class='grid   lg:flex lg:justify-between'>
       <div class="flex items-center">
       <span class="text-xl text-gray-500 mr-4 "><i class="fa-regular mx-2 fa-comment"></i>${card.comment_count}</span>
       <span class="text-xl text-gray-500 mr-4"><i class="fa-regular fa-eye mx-2"></i>${card.view_count}</span>
       <span class="text-xl text-gray-500"><i class="fa-regular fa-clock mx-2"></i>${card.posted_time} min</span>
     </div>
     <button  onclick="appendTitle('${card.title}',  '${card.view_count}')" class='btn bg-green-500 lg:mt-0 mt-4'><i class="fa-solid bg-white fa-message"></i></button>
       </div>
      </div>
    </div>
  </div>
    `;
    allCardShow.appendChild(div);
  });
  // togglerSpinner(false);
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
    <div class="w-full md:max-w-lg mx-auto">
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img class="p-8 rounded-t-lg " src="${card.cover_image}" alt="Shoes" />
      </figure>
      <div class="card-body text-left">
        <div class="flex items-center mb-4">
          <i class="fa-regular pr-4 fa-2x fa-calendar-days"></i>
          <h2 class="card-title text-gray-500">
            ${
              card.author.posted_date
                ? card.author.posted_date
                : "No publish date"
            }
          </h2>
        </div>
        <h1 class="text-lg lg:text-lg py-2 leading-normal font-extrabold">${
          card.description
        }</h1>
        <p class="text-lg font-normal pb-2">${card.title}</p>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full" src="${
            card.profile_image
          }" alt="Profile" />
          <div class="ml-4">
            <p class="font-bold text-xl">${card.author.name}</p>
            <p class="text-lg font-normal">${
              card.author.designation ? card.author.designation : "Unknown"
            }</p>
          </div>
        </div>
      </div>
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
  // togglerSpinner(true);
};
// loader data
// const togglerSpinner = (isLoading) => {
//   const toogeler = document.getElementById("toogeler");
//   if (isLoading) {
//     toogeler.classList.remove("hidden");
//     setTimeout(() => {
//       toogeler.classList.add("hidden");
//     }, 5000);
//   } else {
//     toogeler.classList.add("hidden");
//   }
// };
// const togglerSpinner = (isLoading) => {
//   const toogeler = document.getElementById("toogeler");
//   if (isLoading) {
//     toogeler.classList.remove("hidden");
//     setTimeout(() => {
//       toogeler.classList.add("hidden");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       toogeler.classList.add("hidden");
//     }, 5000);
//   }
// };

// const togglerSpinner = (isLoading) => {
//   const toogeler = document.getElementById("toogeler");
//   if (isLoading) {
//     toogeler.classList.remove("hidden");
//     setTimeout(() => {
//       toogeler.classList.add("hidden");
//       // loadAllPosts("");
//     }, 5000);
//   } else {
//     toogeler.classList.add("hidden");
//   }
// };

// append
let count = 0;
const appendTitle = (title, viewCount) => {
  const titleContainer = document.getElementById("appended-title");
  const mark = document.getElementById("mark-as-read");
  count = count + 1;
  mark.innerText = count;
  const div = document.createElement("div");
  div.classList.add("mystyle");
  div.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${title}</h2>
    
    <p class="text-gray-500 flex text-xl font-bold"><i class="fa-regular mx-2 fa-eye"></i> ${viewCount}</p>

  
  `;
  titleContainer.appendChild(div);
};
loadAllPosts("");
loadLatestPosts();
