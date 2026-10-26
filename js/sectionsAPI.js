 
getData("latest",showLatest);

getData("top10",showTop10);

getData("AllMovies",allMovies);

// ---------------------------------------------- Trending pag  ----------------------------------------------
  
function showTop10(data){
let container=document.querySelector("#Trending .owl-carousel");

if(container !=null){
  data.top10.forEach(function(film){
    container.innerHTML+=`
    <div class="imageTrend">
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
    `;
  });

  // push the code html in window then run the owl-carousel plugin 
  $(document).ready(function(){
    $("#Trending .owl-carousel").owlCarousel({
      items:5,
      margin:20,
      nav:true,
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
          items:3
        },
        1250 :{
          items:5
        }
      }
    });
  });
}
};

// ----------------------------------------------  Latest pag  ----------------------------------------------

function showLatest(data){
let container1=document.querySelector("#Latest .owl-carousel.part1"),
    container2=document.querySelector("#Latest .owl-carousel.part2");

//__________________________________________ part1

if(container1 !=null){
  data.latest.forEach(function(film){
    container1.innerHTML+=`
    <div class="imageLat">
        <img src="./images/${film.poster}" class="img-fluid" alt="${film.title}">
        <a class="me-3" onclick="showDetails(${film.id},this)">See More..</a>
    </div>
    `;
  });

  $(document).ready(function(){
    $("#Latest .part1.owl-carousel").owlCarousel({
      items:5,
      margin:20,
      loop:true ,
      nav:true,
      autoplay :true ,
      autoplayTimeout :1000,
      autoplayHoverPause :true ,
      slideBy:1,
      smartSpeed:2000,
      rtl:false,
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
          items:4
        },
        1250 :{
          items:5
        }
      }
    });
  });
}
//__________________________________________ part2

if(container2 !=null){
  data.latest.forEach(function(film){
    container2.innerHTML+=`
    <div class="imageLat">
        <img src="./images/${film.poster}" class="img-fluid" alt="${film.title}">
        <a class="me-3" onclick="showDetails(${film.id},this)">..See More</a>
    </div>
    `;
  });

  $(document).ready(function(){
    $("#Latest .part2.owl-carousel").owlCarousel({
      items:5,
      margin:20,
      loop:true ,
      nav:true,
      autoplay :true ,
      autoplayTimeout :1000,
      autoplayHoverPause :true ,
      slideBy:1,
      smartSpeed:2000,
      rtl:true,
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
          items:4
        },
        1250 :{
          items:5
        }
      }
    });
  });
}

};

// ----------------------------------------------   All movies page  ----------------------------------------------

function allMovies(data,type=""){

  let container=document.querySelector("#Movies .body .row");

  if(container !=null){
    if(type==""){
      container.innerHTML="";
      allData=data;
      showAllMovies(data.AllMovies);

    }
    else{
      container.innerHTML="";

      let partOfData=[];

      data.AllMovies.filter(function(movie){
        if(movie.type==type){
          partOfData.push(movie);
        }
      });

      showAllMovies(partOfData);
    }
  }
};

function showAllMovies(data){
  let container=document.querySelector("#Movies .body .row");

  if(container !=null){
    data.forEach(function(film){
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
  });
  }
};
