const api = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-9374D590-DA77-47DF-B677-81B70B7016E6`;
$.ajax({
  url: api,
  method: "GET",
  dataType: "json",
  success: function (res) {
    data = res.records.locations[0];
  },
});

function selectArea(data, areaIndex) {
  let area = data.location;
  let areaName = area[areaIndex].locationName;
  $(".header").html(`<h1>${areaName}</h1>`);
}

function showWeatherInfo(data, areaIndex) {
  area = data.location;
  let areaTemp =
    area[areaIndex].weatherElement[1].time[0].elementValue[0].value;
  let areaDesc =
    area[areaIndex].weatherElement[6].time[0].elementValue[0].value;
  let areaTempH =
    area[areaIndex].weatherElement[5].time[0].elementValue[0].value;
  let areaTempL =
    area[areaIndex].weatherElement[11].time[0].elementValue[0].value;
  let areaIcon = setIcon(areaDesc);
  $("#new_area").html(`
  <div class="now_weather">
  <div class="showIcons">${areaIcon}</div>
    <h2>現在天氣</h2>
    <h3>${areaDesc}</h3>
    <p>均溫: ${areaTemp} °C</p>
    <p class="temp">${areaTempL}°C / ${areaTempH}°C</p>
  </div>
    <div id="future_weather"></div>
    `);

  for (let i = 3; i < 14; i += 2) {
    let timeIndex = i;
    let FutureTime =
      area[areaIndex].weatherElement[1].time[timeIndex].startTime;
    let FutureTimeSubstr = FutureTime.substr(5, 5);
    let FutureTemp =
      area[areaIndex].weatherElement[1].time[timeIndex].elementValue[0].value;
    let FutureDesc =
      area[areaIndex].weatherElement[6].time[timeIndex].elementValue[0].value;
    let FutureTempH =
      area[areaIndex].weatherElement[5].time[timeIndex].elementValue[0].value;
    let FutureTempL =
      area[areaIndex].weatherElement[11].time[timeIndex].elementValue[0].value;
    let icon = setIcon(FutureDesc);
    $("#future_weather").append(`
    <div class="eachInfo">
      <h1>${FutureTimeSubstr}</h1>
      <div class="showIcons">${icon}</div>
      <h3>${FutureDesc}</h3>
      <p>均溫: ${FutureTemp} °C</p>
      <p>${FutureTempL}°C / ${FutureTempH}°C</p>
    </div> 
  `);
  }
}

function setIcon(WeatherInfo) {
  if (WeatherInfo == "晴時多雲" || WeatherInfo == "多雲時晴") {
    return "<img src='img/cloudy.svg'>";
  } else if (
    WeatherInfo == "多雲短暫雨" ||
    WeatherInfo == "陰時多雲短暫雨" ||
    WeatherInfo == "陰短暫雨" ||
    WeatherInfo == "多雲短暫陣雨" ||
    WeatherInfo == "陰短暫陣雨"
  ) {
    return "<img src='img/rainy.svg'>";
  } else if (
    WeatherInfo == "多雲時陰" ||
    WeatherInfo == "多雲" ||
    WeatherInfo == "陰時多雲" ||
    WeatherInfo == "多雲時陰短暫雨" ||
    WeatherInfo == "多雲時陰短暫陣雨" ||
    WeatherInfo == "陰天" ||
    WeatherInfo == "陰時多雲短暫陣雨"
  ) {
    return "<img src='img/cloud.svg'>";
  } else if (
    WeatherInfo == "多雲短暫陣雨或雷雨" ||
    WeatherInfo == "陰短暫陣雨或雷雨" ||
    WeatherInfo == "陰時多雲短暫陣雨或雷雨" ||
    WeatherInfo == "多雲時陰短暫陣雨或雷雨"
  ) {
    return "<img src='img/thunder.svg'>";
  }
}

areaSelect.addEventListener("change", (e) => {
  areaIndex = e.target.value;
  showWeatherInfo(data, areaIndex);
  selectArea(data, areaIndex);
});
