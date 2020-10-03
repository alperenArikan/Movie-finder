
document.addEventListener("DOMContentLoaded",addOptions);
const movieOrder = 0;
function addOptions(){
    let startingYear = 1900;
    let currentYear = new Date().getFullYear();
    for(i=startingYear; i<= currentYear; i++)
    {
        document.getElementById("movie-year").innerHTML+=
        `
        <option value="${i}">${i}</option>
        `;
    }
}


document.getElementById("movie-information").addEventListener("submit",function getMovieData(event){
    const movieYear = document.getElementById("movie-year").value;
    const movieTitle = document.getElementById("movie-title").value;
    const movieSeries = document.getElementById("movie-series").value;
    const title = movieTitle;
    const year = "&y="+movieYear;
    const type = "&type="+movieSeries;

    console.log(movieTitle);
fetch(`https://www.omdbapi.com/?apikey=1de2b15&s=${title}${year}${type}`)
.then(response =>{
    if(!response.ok){
        return;
    }
    console.log(response);
    return response.json();
})
.then(data =>{
    document.getElementById("movie-list").innerHTML="";

    for(i = movieOrder; i<movieOrder+10; i++){
        const titleData = data.Search[i].Title;
        const posterData = data.Search[i].Poster;
        const typeData = data.Search[i].Type;
        const yearData = data.Search[i].Year;

        console.log(titleData);
        document.getElementById("movie-list").innerHTML +=
        `
        
        <tr>
        <td><img src="${posterData}"/></td>
        <td>${titleData}</td>
        <td>${typeData}</td>
        <td>${yearData}</td>
      </tr>
        
        
        `
        }
    })
event.preventDefault();
});


