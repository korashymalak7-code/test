
(async function getData() {
  let promise= await fetch(`https://malakkorashy23-source.github.io/movieAPI/AllMovies.json`),
      data= await promise.json();
  if(promise.status != "404"){
    Details(data);
  }else{
    console.log("error");
  }
}());

function Details(allData){
    let filmId=localStorage.getItem("FilmId"),
        filmData= allData.AllMovies.filter(film=>film.id==filmId)[0],
        container=document.querySelector("#Details"),
        popup=document.querySelector(".popup[data-popup-name='trailer']");
        
    if(container !=null){
        container.innerHTML= "";
        container.innerHTML+=`
            <div class="backGround">
                <img src="./images/${filmData.background}" class="img-fluid" alt="${filmData.title}">
            </div>
            <div class="container py-5">
                <div class="row part1">
                    <div class="col-lg-3">
                        <div class="item">
                            <img src="./images/${filmData.poster}" class="img-fluid" alt="${filmData.title}">
                        </div>
                    </div>
                    <div class="col-lg-8 body">
                        <img src="./images/${filmData.logo}" class="img-fluid mb-4 mt-4" alt="${filmData.title}">
                        <h3 class="mb-4">${filmData.title}</h3>
                        <p class="mb-4"><i class="fa-solid fa-star me-2"></i> ${filmData.evaluation}</p>
                        <p class="mb-4">${filmData.type}   |  ${filmData.year}</p>
                        <p class="mb-4">${filmData.description}</p>
                    </div>
                </div>

                <div class="buttons my-5">
                    <div class="row">
                        <div class="col-lg-2">
                            <p  onclick="openPopup('trailer')">Trailer</p >
                        </div>
                        <div class="col-lg-2">
                            <p>Watching Later + </p >
                        </div>
                        <div class="col-lg-2">
                            <p>Favorite</p >
                        </div>
                    </div>
                </div>

                <div class="part2 table-responsive">
                    <h2 class="mb-4">Reviews :</h2>
                    <div class="box ps-3 d-flex  align-items-center">
                        <div class="icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="row ms-4 flex-nowrap">
                            ${prepareReviews(filmData.reviews)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
     
    if(popup !=null){
        popup.innerHTML=`
            <i class="fa-solid fa-arrow-left closePopup" onclick="closePopup()"></i>
            <div class="box">
                <iframe src="https://www.youtube.com/embed/${filmData.trailer}"></iframe>
            </div>
        `;
    }
};

function prepareReviews(reviews){
  let elements="";
  reviews.forEach(function(review){
    elements+=`
      <div class="col-lg-4 spacialCard d-flex justify-content-center align-items-center">
          <div class="item p-3">
              <h5>${review.name}</h5>
              <span>${review.date}</span>
              <p class=mb-0>${review.content}</p>
          </div>
      </div>
    
    `;
  })
  return elements;
};