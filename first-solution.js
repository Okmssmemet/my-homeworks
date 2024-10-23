const cityData = require('./data/CityData.js')

const districtData = require('./data//DistrictData.js')

const villageData = require('./data/VillageData.js')

let cityName = "İSTANBUL";
let districtName="AVCILAR";
let villageName = "MERKEZ-ADAKLI";
let locationId = 0;

function getResult(location) {
  let getName = "";
  let districtNames = [];
  if (!(location == "") && location == cityName) {
      for(let i=0;i<cityData.length;i++){
            if (cityData[i].name == location) {
              locationId = cityData[i].id 
            }
      }
      for(let i=0;i<districtData.length;i++){
        if (districtData[i].il_id == locationId){
          districtNames.push(districtData[i].name);
        }
      }

      return "Girilen İlin İlçeleri : " + districtNames;
  }

  else if(!(location == "") && location == districtName) {
      for(let i = 0;i<districtData.length;i++){
        if(districtData[i].name == location){
           locationId =districtData[i].il_id
        }
      }

      for(let i =0;i<cityData.length;i++){
        if (cityData[i].id == locationId) {
          getName = cityData[i].name
        }
      }
    return "Girilen İlçenin Şehiri : "+getName;
  }

  else if(!(location == "") && location == villageName) 
    {
      let getCityName="";
        for(let i =0;i<villageData.length;i++){
          if (villageData[i].name == location) {
              locationId = villageData[i].ilce_id
          }
        }

        for(let i =0;i<districtData.length;i++){
          if(districtData[i].id == locationId) {
            getName = districtData[i].name
          }
        }

        for(let i = 0;i<districtData.length;i++){
          if(districtData[i].name == getName){
             locationId =districtData[i].il_id
          }
        }
  
        for(let i =0;i<cityData.length;i++){
          if (cityData[i].id == locationId) {
            getCityName = cityData[i].name
          }
        }

        return "İl " + getCityName +" İlçe "+ getName;
      
    }
  return "Herhangi Bir Değer Gİrilmedi"
}


const result = getResult(villageName);
console.log(result);


