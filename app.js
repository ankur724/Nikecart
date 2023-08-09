const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 10020,
    colors: [
      {
        code: "black",
        img: "./img/pngwing2.png",
      },
      
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 80000,
    colors: [
      {
        code: "lightgray",
        img: "./img/pngwing.com.png",
      },
     
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 8030,
    colors: [
      {
        code: "lightgray",
        img: "./img/pngwing3.png",
      },
     
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 9000,
    colors: [
      {
        code: "black",
        img: "./img/pngwing4.png",
      },
    
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 12000,
    colors: [
      {
        code: "gray",
        img: "./img/pngwing5.png",
      },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});





// search
const searchData = [
  { id: 1, name: "AIR FORCE" },
  { id: 2, name: "JORDAN" },
  { id: 3, name: "BLAZER" },
  { id: 4, name: "CRATER" },
  { id: 5, name: "HIPPIE" },
];


const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", updateSearchResults);
searchInput.addEventListener("input", updateSearchResults);

function updateSearchResults() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = searchData.filter(item => item.name.toLowerCase().includes(searchTerm));
  
  displayResults(filteredData);
}

function displayResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found.";
    searchResults.appendChild(li);
  } else {
    results.forEach(item => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = item.name;
      link.href = `#product`;
      li.appendChild(link);
      searchResults.appendChild(li);
    });
  }
}







