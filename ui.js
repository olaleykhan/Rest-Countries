class UI{
    constructor(){
       this.extractName= function(arrObject){
            let arr=[]
            arrObject.forEach(obj => {
                arr.push(obj.name)
            });
            return arr
        },

        // This function accepts an array and creates a button for each of the array, then 
        // displays it in the dom
        this.createBtn=  function(arr){
            let btn=``
            arr.forEach(borderCountry => {
            btn+=`<button class="btn border-country-btn my-btn ml-2 ">${borderCountry} </button>`
                
            });
            // document.querySelector('body').innerHTML=btn;
            return btn
        }

    

    }

    renderCountries(countries){
       

        let output =``
        countries.forEach(country => {
            // console.log(countries[1])
            output+= `
            <div style="border-radius: 15px;" class="mx-auto mb-5 col-12 col-lg-3 col-md-5 col-sm-8">
                    <div class="my-card mode light-mode">
                      <img src="${country.flag}" style="height:200px; border-radius:inherit" class="img-fluid" alt="...">
                    <div class="card-body ">
                        <h5 class=" my-btn font-weight-bold country-btn mb-3 ">${country.name}</h5>
                        <div class="">
                          <p><span class="font-weight-bold">Population: </span> ${country.population}</p>
                          <p><span class="font-weight-bold">Region: </span>${country.region}</p>
                          <p><span class="font-weight-bold">Capital: </span>${country.capital}</p>
                        </div>
                        <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                      </div>
                    </div>
                  </div>
            `
            
            
        });
        const insertCountries=document.querySelector('#insert-countries');
            insertCountries.innerHTML=output

    }

    renderSingleCountry(country){
        
        // let country = countryData[0];
        let output = `

            <div class="country-img col-12 col-md-5 mb-4">
            <img id=country-img src="${country.flag}" style="" class="" alt="...">
          </div>
          <div class="country-details col-12 col-lg-6">
            <h2 class="mb-4" >${country.name}</h2>
            <div class="tiny-details row justify-content-between">
              <div class="first-half col-12 col-md-5 mb-4">
                <p><span class="font-weight-bold">Native Name: </span> ${country.nativeName}</p>
                <p><span class="font-weight-bold">Population: </span>${country.population}</p>
                <p><span class="font-weight-bold">Region: </span>${country.region}</p>
                <p><span class="font-weight-bold">Sub Region: </span>${country.subregion}</p>
                <p><span class="font-weight-bold">Capital: </span>${country.capital}</p>
              </div>
              <div class="second-half col-12 col-md-5">
                <p><span class="font-weight-bold">Top Level Domain: </span> ${country.topLevelDomain}</p>
                <p><span class="font-weight-bold">Currencies: </span>${ this.extractName(country.currencies)}</p>
                <p><span class="font-weight-bold">Languages: </span>${this.extractName(country.languages)}</p>
              </div>
            </div>

            <div class="border-countries mt-4"><span class="font-weight-bold bc-ct-tx mr-3">Border Countries: </span> <p>${this.createBtn(country.borders)}
             
            </p>
            </div>

          </div>
        `;


        const insertCountry=document.querySelector('#insert-country');
        insertCountry.innerHTML=output;
    }


   
}