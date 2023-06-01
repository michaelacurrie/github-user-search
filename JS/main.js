const URL = "https://api.github.com";

const searchBox = document.querySelector(".search");
const userImg = document.querySelector(".userinfo__img");
const userName = document.querySelector(".userinfo__name");
const userJoin = document.querySelector(".userinfo__join");
const userBio = document.querySelector(".userinfo__bio");
const formButton = document.querySelector(".form__btn");
const userRepos = document.querySelector(".userinfo__repos");
const userFollowers = document.querySelector(".userinfo__followers");
const userFollowing = document.querySelector(".userinfo__following");
const userLocation = document.querySelector(".userinfo__location");
const userTwitter = document.querySelector(".userinfo__twitter");
const userCompany = document.querySelector(".userinfo__company");
const userBlog = document.querySelector(".userinfo__blog");

//functio declaration
function random(day, month) {
  console.log(`The day is ${day} of the month of ${month}`);
}

const currentDay = "Wednesday"; //assume this is from an api
//calling on the function
// random(currentDay, "July");

// API Section
// If i am not using .then & .catch I can use async + await with Axios. Axios is a function that returns a promise.

//get value from searchBox
//make api call when searchButton is clicked
//Inject the necessary HtMl into the browser with te data from the API

// function removeElements() {
//   const elementsToRemove = document.querySelectorAll(".new__element");
//   console.log(elementsToRemove);
//   elementsToRemove.forEach((element) =>
//     element.parentNode.removeChild(element)
//   ); //loop through all the elements and remove
// }

function constructHTML(textValue, element, elementTag = "span") {
  const createdElement = document.createElement(elementTag); //create Element
  createdElement.classList.add("new__element"); //add a new class to the created element
  const text = document.createTextNode(textValue); //createText
  createdElement.append(text); //<span>randomne string</span>
  console.log(element.children);
  console.log(Array.isArray(Array.from(element.children))); //false
  console.log(Array.isArray([])); //true
  Array.from(element.children).forEach((item) => {
    if (item.classList.contains("new__element")) {
      item.remove(); //remove the element
    }
  });
  element.append(createdElement);
}
// constructHTML("randomne string 1", userBlog); //<span>randomne string 1</span>
// constructHTML("randomne string 2", userCompany, "div");//<span>randomne string 2</span>
// constructHTML("randomne string 3", userTwitter, "p");//<p>randomne string 3</p>

// test()

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  const serchBoxValue = searchBox.value;
  axios
    .get(`https://api.github.com/users/${serchBoxValue}`)
    .then((res) => {
      console.log(res);

      // const repoSpan = document.createElement("span"); //create Element
      // const reposText = document.createTextNode(res.data.public_repos); //createText
      // repoSpan.append(reposText); //<span>16</span>
      // userRepos.append(repoSpan);
      // constructHTML(28, userRepos);
      constructHTML(res.data.public_repos, userRepos, "p");
      constructHTML(res.data.followers, userFollowers, "p");
      constructHTML(res.data.following, userFollowing, "p");
      constructHTML(res.data.bio, userBio, "div");
      constructHTML(res.data.created_at, userJoin);
      constructHTML(res.data.name, userName);
      constructHTML(res.data.location, userLocation);
      // constructHTML(res.data.following, userFollowing);
      // constructHTML(res.data.following, userFollowing);
      // constructHTML(res.data.following, userFollowing);
      constructHTML(res.data.twitter_username, userTwitter);
      constructHTML(res.data.company, userCompany);
      constructHTML(res.data.blog, userBlog);
      // constructHTML(res.data.avatar_url, userImg);

      // const followerSpan = document.createElement("span"); //create Element
      // const followersText = document.createTextNode(res.data.followers); //createText
      // followerSpan.append(followersText);
      // userFollowers.append(followerSpan)
    })
    .catch((err) => console.log(err));
});
