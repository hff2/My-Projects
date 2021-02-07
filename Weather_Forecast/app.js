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

areaSelect.addEventListener("change", (e) => {
  areaIndex = e.target.value;
  selectArea(data, areaIndex);
});
