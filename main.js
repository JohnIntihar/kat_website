
// ********** Page Scroll ************

function startTopofScreen() {
  window.scroll(1,1); 
}
window.onload = startTopofScreen;

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  
  if (scrollHeight > 500) {
    topLink.classList.add("show-top-link");
  }
  else {
    topLink.classList.remove("show-top-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});


// ********** About Me ************

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach(function(article){
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// ********** Endorsements ************
const reviews = [
  {
    id: 1,
    name: "Guy#1",
    background: "Knows art stuff",
    img:
      "./img/lukasvanhouten.png",
    text:
      "Kat is super awesome",
  },

  {
    id: 2,
    name: "Guy#2",
    background: "Doesn't know art stuff but previous customer",
    img:
      "./img/michaelpritchard.png",
    text:
      "Kat is the best",
  },

  // {
  //   id: 3,
  //   name: "",
  //   background: "",
  //   img:
  //     "",
  //   text:
  //     "",
  // },

  // {
  //   id: 4,
  //   name: "",
  //   background: "",
  //   img:
  //     "",
  //   text:
  //     "",
  // },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem);
});

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

