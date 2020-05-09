class CountryApi{
    constructor(){

    }


    async getCountryData(url){
        const countryData = await fetch(`https://restcountries.eu/rest/v2/${url}`);
        const data = await countryData.json();
        return data        
    }



    async getCountryByName(url){
        const countryData = await fetch(`https://restcountries.eu/rest/v2/name/${url}?fullText=true`);
        const data = await countryData.json();
        return data 
    }
}