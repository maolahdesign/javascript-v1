//https://opendata.cwa.gov.tw/dataset/observation/O-A0003-001


fetch('hello.json')
  .then(response => response.json())
  .then(data => {
//    console.log(data.cwaopendata.dataset.Station[0]);
    console.log(data.cwaopendata.dataset.Station[62]);
  })
  .catch(error => {
    console.error('Error:', error);
  });
