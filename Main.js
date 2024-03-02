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
    console.log(card);
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
loadLatestPosts();
