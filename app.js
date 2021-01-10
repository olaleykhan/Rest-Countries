// call the button for changeing the theme of the page in the DOM
const themeChanger= document.querySelector('#theme-btn');
// call all elements that contain the light-mode class
const modes =document.querySelectorAll('.mode');
// call the container of the countries from the dom so that the countries html can be inserted dynamically
const countriesContainer = document.querySelector('#insert-countries');

// instantiate the CountryApi class
let countryApi = new CountryApi;
// instantiate the UI class 
let ui = new UI;
// ************This calles the search input and puts in a variable
const searchInput = document.querySelector('#search-input');
// **************This calls the select input for filtering by regions and puts in a variable
const filter = document.querySelector('#filter');
// call the button that takes us back to the home page
const backToHomeBtn = document.querySelector('#back-btn');
// call the single country section in the dom
const singleCountrySection = document.querySelector('#single-country');
// Call the main section that displays all the countries
const mainSection = document.querySelector('#main-section');


// after  an individual country page is created, it will come with clickabke buttons that can take us
// to another page that displays the details of the border country. this line below calls it
const borderCountryBtn = document.querySelector('#border-country-btn');


function loadAllEventListeners(){

    // This event listerner changes the theme of the webpage between light and dark
    themeChanger.addEventListener('click', toggleTheme);
    // This event listerner is triggred when the search function of the DOm is used.
    searchInput.addEventListener('keyup', searchCountries);
    // This event listener is called when the region filter is used in the dom
    filter.addEventListener('change', getCountryByRegion);
    // Add event listener to the countries container so that it cant be transvered and used for dynamically added sectiond
    countriesContainer.addEventListener('click', getCountryByName);
    // add event listener to the back button so that it takes us from a signle country page to an home page
    backToHomeBtn.addEventListener('click', goBackHome);
    // this event listener is called when the buttons that are dynamically added to the single detailed country page
    // The function attached to it calls the function that fetches the API by country code
    // Note however, the buttons are not directly called, rather their parent element is, the countainer that is hard
    // coded into the html is called as that is the way the dom will be able to load the event listener
    singleCountrySection.addEventListener('click', getCountryByCode);

}

loadAllEventListeners()

// console.log(modes);


function toggleTheme(e){

    // call the body of the dom so that it's background color can be changed
    const body = document.querySelector('body');
    modes.forEach((mode)=>{
        mode.classList.toggle('dark-mode');
        mode.classList.toggle('light-mode');
        // console.log(mode);
    })
    
    body.classList.toggle('dark-body');
    body.classList.toggle('light-body');
    
}





// here is the code c=for calling the api class functions in the countryAPi class
// to get the data of countries and then do stuff with them


// load all the country data
countryApi.getCountryData('all')
.then((data)=>{
    // console.log(data[0])
    ui.renderCountries(data);
})



// this function is called when the search input is being Used
function searchCountries(e){
    
    const searchValue= e.target.value.toLowerCase();
    // countryApi.getCountryBySearch()
    console.log(searchValue);
    countryApi.getCountryData(`name/${searchValue}`)
    .then((data)=>{
        // console.log(data[0])
        ui.renderCountries(data);
    })
}

// This function is called when the filter button event listener is triggere

function getCountryByRegion(e){
    ;
    const filterValue= e.target.value.toLowerCase();
    console.log(filterValue)
    if(filterValue==='all'){
        countryApi.getCountryData('all')
        .then((data)=>{
            // console.log(data[0])
            ui.renderCountries(data);
        })
    }else{
        countryApi.getCountryData(`region/${filterValue}`)
        .then((data)=>{
            // console.log(data[0])
            ui.renderCountries(data);
        })
    }
  
}


// The function below is for calling the country button displayed in any country in the home page
//  and then calling the api with it's value
// because the button is dynamically added, the body tag is used and then transvered down to the html button itself

function getCountryByName(e){
    if(e.target.classList.contains('country-btn')){
        mainSection.style.display='none';
        singleCountrySection.style.display='block';

        const countryName = e.target.textContent.toLowerCase();
        countryApi.getCountryByName(countryName)
        .then((data)=>{
            // console.log(data)
            ui.renderSingleCountry(data[0]);
        })
    } else{
        console.log('try-again');
    }
   
}

// The function below is called when any of the border buttons that
//  comes with the single country 
// page is clicked . it takes us from a detailed page to the detailed 
// page of the border country clicked. 

function getCountryByCode(e){
    if(e.target.classList.contains('border-country-btn')){
        
            mainSection.style.display='none';
            singleCountrySection.style.display='block';
    
            const borderCountryName= e.target.textContent.toLowerCase();
            countryApi.getCountryData(`alpha/${borderCountryName}`)
            .then((data)=>{
                console.log(data)
                ui.renderSingleCountry(data);
            })
        }




        // https://restcountries.eu/rest/v2/alpha/col
    }



// This function takes us back to the home oage when the back button is triggered

function goBackHome(){
    console.log('clicked');
     // call the single country section in the dom
     mainSection.style.display='block';
     singleCountrySection.style.display='none';

}