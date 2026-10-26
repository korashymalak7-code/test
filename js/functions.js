// -------------------------------------  functions of local storage  -------------------------------------

function setInLocalStorage(name, value) {
  localStorage.setItem(name, value);
};

function getFromLocalStorage(name) {
  console.log(name);
  if (localStorage.getItem(name) != null) {
    return localStorage.getItem(name); // if not found data in local storage this function return undefined to variables so variables didn't have default value from  css
  } else {
    return ""; // solution to previous error
  }
};

// ------------------------------------- function get API -------------------------------------

async function getData(urlID,functionRun,type="") {
  let promise= await fetch(`https://malakkorashy23-source.github.io/movieAPI/${urlID}.json`);
  let data= await promise.json();
  if(promise.status != "404"){
    (type=="")? functionRun(data):functionRun(data,type);
  }else{
    console.log("error");
  }
};

// -------------------------------------  function  -------------------------------------

// function set film id in local storage when click in details button of specific film to be get in another function (details)
function showDetails(filmId,anchor){
  setInLocalStorage("FilmId",filmId);
  anchor.setAttribute("href","./details.html")
};

// -------------------------------------  functions of popup  -------------------------------------

function openPopup(popupName){
    let currentPopup=document.querySelector(`.popup[data-popup-name="${popupName}"]`),
        popupBox=currentPopup.querySelector(".box");
    currentPopup.classList.add("active");
    $("body").css("overflow-y","hidden");
    setTimeout(function(){
        currentPopup.classList.add("show");
    },0)
    popupBox.addEventListener("click",function(e){
        e.stopPropagation();
    })
};

function closePopup(){
    let currentPopup=document.querySelector(".popup.active");
    currentPopup.classList.remove("show");
    $("body").css("overflow-y","auto");
    setTimeout(function(){
         currentPopup.classList.remove("active");
    },0)
};
