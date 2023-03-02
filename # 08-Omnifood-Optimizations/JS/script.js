// ! Copyright Year 
const yearNumber =document.querySelector(".year")
const currentYear =new Date().getFullYear();
yearNumber.textContent=currentYear

// ! Nav List
// nav-open
// btn-mobile
const headerClass=document.querySelector('.header');
const btnNav=document.querySelector('.btn-mobile');
btnNav.addEventListener('click',function(){
  headerClass.classList.toggle('nav-open')
});

// ! Smooth Scrolling
const links=document.querySelectorAll('a:link');
links.forEach(function(link){
  link.addEventListener('click',function(event){
    const href=link.getAttribute("href");
    console.log(href);

    //* Scroll Back
    if(href==="#") window.scrollTo ({
      top:0,
      behavior:"smooth",
    })

    if (href!=="#" && href.startsWith("#"))
    {
      const sectionEl=document.querySelector(href);
      sectionEl.scrollIntoView({behavior:"smooth"});
    }

    // Mobile Nav close
    if(link.classList.contains("header-link"))
    {
      headerClass.classList.toggle("nav-open");
    }
  });
});

// ! Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/
