'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}


function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab-item");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  // Update active tab button
  var tabs = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

// Set default tab
document.addEventListener("DOMContentLoaded", function() {
  openTab('about1');
});

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;
  var threshold = 200; // Adjust this value as needed

  if (scrollPosition > threshold) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});