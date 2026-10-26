let testData;

(async function getData() {
  let promise= await fetch(`https://malakkorashy23-source.github.io/movieAPI/AllMovies.json`),
      data= await promise.json();
  if(promise.status != "404"){
    additionSection(data);
    testData=data;
  }
}());

let searchInput =document.querySelector("#Search form input"),
    regexSearchInput = /^(\s){0,}?[A-Za-z1-9]+( [A-Za-z1-9]+)*(\s){0,}?$/,
    searchForm =document.querySelector("form"),
    alertInput = document.querySelector("#Search .searchCont #notFound");

//_______________________________ if click in button search

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let result = regexSearchInput.test(searchInput.value);

    if(searchInput.value == "" || searchInput.value == " "){
        searchInput.classList.add("is-invalid");
    }
    else if (result == true) {
        searchInputValidation(searchInput.value.trim());
    }
    searchForm.reset();
});

//_______________________________ if blur from input

searchInput.addEventListener("blur", function () {
    let result = regexSearchInput.test(searchInput.value);

    if(searchInput.value == "" || searchInput.value == " " ){
        searchInput.classList.add("is-invalid");
    }
    else if (result == true) {
        searchInputValidation(searchInput.value.trim());
    }
});

function searchInputValidation(value){
    let filter = testData.AllMovies.filter(function (film) {
        return film.title.toLowerCase().includes(value.toLowerCase());
    });
    let container=document.querySelector(".row");

    searchInput.classList.remove("is-invalid");

    if (filter.length == 0) {
          container.innerHTML="";
          alertInput.classList.remove("d-none");
    } else {
        alertInput.classList.add("d-none");
        container.innerHTML="";
        filter.forEach(function (film) {
            container.innerHTML+=`
                <div class="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center"">
                    <div class="item imageTrend">
                        <img src="./images/${film.poster}" alt="${film.title}">
                        <div class="layout d-flex justify-content-start align-items-end p-3">
                            <div class="content">
                                <h4 class="mb-3">${film.title}</h4>
                                <p class="mb-3"><i class="fa-solid fa-star me-2"></i>${film.evaluation} </p>
                                <div class="buttons">
                                    <a class="me-3" onclick="showDetails(${film.id},this)">Details</a>
                                    <a>Watching Later</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
    }
};

//____________________________________ likes section

function additionSection(data){
let container=document.querySelector(".additionSection .owl-carousel");

if(container !=null){
  data.AllMovies.forEach(function(film){
    container.innerHTML+=`
    <div class="imageTrend">
        <a onclick="showDetails(${film.id},this)">
            <img src="./images/${film.poster}" alt="${film.title}">
        </a>
    </div>
    `;
  });
 
  $(document).ready(function(){
    $(".additionSection .owl-carousel").owlCarousel({
      items:8,
      margin:10,
      loop:true ,
      autoplay :true ,
      autoplayTimeout :3000,
      autoplayHoverPause :true ,
      slideBy:3,
      smartSpeed:1000,
      responsive :{
        0 :{
          items:1
        },
        450 :{
          items:2
        }
        ,
        650 :{
          items:3
        }
        ,
        1050 :{
          items:5
        },
        1250 :{
          items:8
        }
      }
    });
  });
}
};