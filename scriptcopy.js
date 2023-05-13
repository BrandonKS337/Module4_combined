const data = [
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
];

const artists = [
  //second array set up to do part 3
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        alt: "selfie",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        alt: "scream",
      },
    ],
  },
];
///original work we did for placehodlder cards///
// function addCard(card) {
//   //need to "paramaterize our function" aka pass through something. card
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);
//   // console.log(document.getElementById("card-list"))                                   //trying to query the html for info during live server view
//   template.querySelector(".card-title").innerText = card.title;
//   template.querySelector(".card-text").innerText = card.content;
//   template.querySelector(".card-img").src = card.URL;
//   // template.querySelector('.card-alt').alt = card.alt;

//   document.querySelector("#card-list").appendChild(template);
// }

/////doing van gogh portion ///
// function addCard(item) {  //need to "paramaterize our function" aka pass through something. card
//     const artist = document.getElementById("artist-portfolio").content.cloneNode(true);
//     console.log(artist)
//     artist.querySelector('.artist-name').innerText = item.name
//     document.querySelector("#artist-list").appendChild(artist);
//     item.portfolio.map((itemPortfolio) => {
//       const template = document.getElementById("card-template").content.cloneNode(true);
//       console.log(document.getElementById("card-list"))
//       template.querySelector(".card-title").innerText = itemPortfolio.title;           //removed item.content line query selection. didnt have content to query
//       template.querySelector(".card-img").src = itemPortfolio.url;      //changed to itemportfoli at 1201 because relating to wrong item when calling originally
//       template.querySelector(".card-img").alt = itemPortfolio.alt;

//       document.querySelector("#card-list").appendChild(template);
//     })
//   }

//round 3 (functional)
function addCard(card) {
  //need to "paramaterize our function" aka pass through something. card
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // console.log(document.getElementById("card-list"))                                   //trying to query the html for info during live server view
  template.querySelector(".card-title").innerText = card.title;
  // template.querySelector(".card-text").innerText = card.body; //changed from content to body because content is in original version not this one
  template.querySelector(".card-text").innerText = card.content
  template.querySelector(".card-img").src = card.URL;
  // template.querySelector('.card-alt').alt = card.alt;

  document.querySelector("#card-list").appendChild(template);
}

if ("content" in document.createElement("template")) {
  //need to map over data set so included map function in if statement
  //   data.map((card) => {
  //arrow function to map over the input card information
  // addCard(card); //passing through our card funcation
  //   });
  // artists.map((item) => {
  //     addCard(item)
  // })
}

// const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]
let cardsData = [];
function getData() {
  //hits api in console on broser
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") // adding in ?_limit=10 sets max output at 10 response items
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      json.map((item) => {
        addCard(item);
      });
    }); //takes parsed response and assigns to json
}

// getData(); //calls function

setInterval(() => {      //manage data slide 57 to set a delay of 5seconds
  const list =   document.querySelector("#card-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
  } 
  console.log("pulling")      //console.log here to show function working inside the browser console.
  news.map((item)=>{
    addCard(item)
  });
}, 5000  )

let news = [            //local data object
  { id: 1, title: "News1", content: "bla",  URL: "http://via.placeholder.com/300x200"},
  { id: 2, title: "News2", content: "ble",  URL: "http://via.placeholder.com/300x200"},
  { id: 3, title: "News3", content: "blu",  URL: "http://via.placeholder.com/300x200" },
];

//function to make form submission do stuff

function submitButton (event) {                               /// this is a function to pull local data not from api
  // event.preventDefault()
  console.log("button clicked")
  const title = document.getElementById("news-title")
  const content = document.getElementById("news-content")
  const URL = document.getElementById("news-URL")
  // console.log(title.value) 
  // console.log(content.value) 
  // console.log(URL.value)   
  
  let newItems = {
    title: title.value,
    content: content.value,
    URL: URL.value,
  }
  news.push(newItems)
}


