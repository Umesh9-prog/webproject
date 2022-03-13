const cityName=document.getElementById('cityName');
const submitBtn1=document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');

const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');

const getInfo=async (event)=>{
    event.preventDefault();
  
    let cityVal=cityName.value;
    
    
    if(cityVal===""){
      city_name.innerText=`plz write the name before search`;
      datahide.classList.add('data_hide');
    }else{
       try{ 
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=87a45635611a607a224a06a8f3424b9a`;
        let response1= await fetch(url);
        let data=  await response1.json();
        
        const arrData=[data];
        //console.log(arrData);
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=`${(arrData[0].main.temp-273.1).toFixed(2)}`;
        
        

        const tempMood=arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fa-solid fa-sun'></i>"
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud'></i>"
        }else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud-rain'></i>"
        }else{
            temp_status.innerHTML="<i class='fa-solid fa-cloud'></i>"
        }
        datahide.classList.remove('data_hide');

        
      
    }catch(error){
        
         city_name.innerText=`plz enter the city name properly `;
         datahide.classList.add('data_hide');

        }
    }

   
}

submitBtn1.addEventListener('click',getInfo);