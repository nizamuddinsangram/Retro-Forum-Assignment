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
    
    `;
    cardContainer.appendChild(div);
  });
};
loadLatestPosts();
