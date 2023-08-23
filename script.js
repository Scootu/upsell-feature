let CARTFEATURE = [
  {
    id: "e1",
    title: "Email Distribution",
    price: "$7",
    features: ["unlimited emailLists", "Auto-updates"],
  },
  {
    id: "e2",
    title: "Analytics",
    price: "$5",
    features: ["Detailed analytics and stats of your lists"],
  },
];
let CartSlices = [
  {
    id: "ed1",
    title: "Email Distribution analysic",
    price: "$12",
  },
  {
    id: "ed2",
    title: "Review tracker",
    price: "$8",
  },
  {
    id: "ed3",
    title: "Similarity Matching",
    price: "$12",
  },
  {
    id: "ed4",
    title: "Saving Pack",
    price: "$25",
  },
];

const cartContainerSLice = document.querySelector(".cart-container-slide");
const cartContainerItems = document.querySelector(".cart-container-items");

// function renderCartSlice() {
//   CARTFEATURE.forEach((item) => {
//     let divContainer = document.createElement("div");
//     divContainer.classList.add("cart");
//     let divContent = document.createElement("div");
//     divContent.classList.add("content");
//     divContainer.appendChild(divContent);
//     let pDivContentTitle = document.createElement("p");
//     pDivContentTitle.textContent = item.title;
//     divContent.appendChild(pDivContentTitle);
//     // append
//     let priceElement = document.createElement("div");
//     priceElement.classList.add("price");
//     let pPriceElement = document.createElement("p");
//     pPriceElement.textContent = item.price;
//     let spanPrice = document.createElement("span");
//     spanPrice.textContent = "per month";
//     priceElement.appendChild(pPriceElement);
//     priceElement.appendChild(spanPrice);
//     //append
//     divContent.appendChild(priceElement);
//     let ulContent = document.createElement("ul");
//     ulContent.classList.add("features-list");
//     item.features.forEach((item) => {
//       const liTag = document.createElement("li");
//       liTag.textContent = item;
//       ulContent.appendChild(liTag);
//     });
//     divContainer.appendChild(ulContent);
//     const priceBtn = document.querySelector('button');
//     priceBtn.classList.add('price-btn');
//     priceBtn.textContent = 'Add to Cart';
//     divContainer.appendChild(priceBtn);
//     cartContainerSLice.appendChild(divContainer);
//   });
// }
function renderCartSlice() {
  let tagElement = "";
  console.log(CARTFEATURE);
  CARTFEATURE.forEach((item) => {
    let tag = `<div class="cart">
                    <div class="content">
                        <p>${item.title}</p>
                        <div class="price">
                            <p>${item.price}</p>
                            <span>per month</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        ${item.features.map((item) => {
                          return <li>${item}</li>;
                        })}
                    </ul>
                    <button class="price-btn">Add to Cart</button>
                </div>
            </div>`;
    console.log(item);        
    tagElement += tag;
  });
  cartContainerSLice.appendChild(tagElement);
}
renderCartSlice();
