//https://opendata.cwa.gov.tw/dataset/observation/O-A0003-001

//fetch('js/weather.json')
fetch('https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0003-001?Authorization=CWA-B76D45A9-5F9A-4A6A-AC70-9309EA52CE79&downloadType=WEB&format=JSON')
  .then(response => response.json())
  .then(data => {
//    console.log(data.cwaopendata.dataset.Station[0]);
    console.log(data.cwaopendata.dataset.Station[62]);
  })
  .catch(error => {
    console.error('Error:', error);
  });
