const cityData = require('./data/CityData.js')

const districtData = require('./data//DistrictData.js')

const villageData = require('./data/VillageData.js')

let cityName = "";
let districtName = "";
let villageName = "MERKEZ-SUSUZ";

function getResult(fn,name){
   console.log(fn(name))
}

function getDistrictName(name)
{
    let districtList = [];
    let cityId = 0;
    for(let i = 0;i<cityData.length;i++){
        if(cityData[i].name == name){
            cityId = cityData[i].id
            break;
        }
    }
    if (cityId == 0) {
        return "Girilen Şehir Bulunamadı"
    }
    
    for(let i = 0; i<districtData.length;i++){
        if(districtData[i].il_id == cityId){
            districtList.push(districtData[i].name)
        }
    }
    return `Girilen Şehrin İlçeleri:  ${districtList}`
}

function getCityName(name) {
    let cityId = 0;
    let cityName = "";
    for(let i =0;i<districtData.length;i++){
        if (districtData[i].name == name) {
            cityId = districtData[i].il_id
        }
    }
    if (cityId == 0) {
        return "Girilen İlçe Bulunamadı"
    }
    for(let i =0;i<cityData.length;i++){
        if (cityData[i].id == cityId) {
            cityName = cityData[i].name
            break;
        }
    }
    return `Girilen İlçenin Bulunduğu İl : ${cityName}`
}

function getCityAndDistrictName(name) {
    let districtName = "";
    let cityName = "";
    let districtId = 0;
    let cityId = 0;

    for(let i = 0;i<villageData.length;i++){
        if (villageData[i].name == name) {
            districtId = villageData[i].ilce_id
            break;
        }
    }

    for(let i = 0;i<districtData.length;i++)
        {
            if (districtData[i].id == districtId) {
                districtName = districtData[i].name
                cityId = districtData[i].il_id
                 break;
            }
        }
        for(let i = 0;i<cityData.length;i++) {
            if (cityData[i].id == cityId) {
                cityName = cityData[i].name
                break;
            }
        }

        return `Girilen Bölgenin Bağlı Olduğu İl ve İlçe: ${cityName}-${districtName}`
}

if (cityName != "") {
    getResult(getDistrictName,cityName)
}
else if (districtName != ""){
    getResult(getCityName,districtName)
}
else if (villageName != ""){
    getResult(getCityAndDistrictName,villageName)
}
else{
    console.log("Lütfen Bir Değer Gİriniz")
}