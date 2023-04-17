const data = [
  {
    Date: "Saturday 24 December 2022",
    Location: "Mum's",
    Events: "Christmas Eve",
    Advent: "",
    votd: "",
  },
  {
    Date: "Sunday 25 December 2022",
    Location: "Dad's",
    Events: "Christmas Day",
    Advent: 6,
    votd: "",
  },
  {
    Date: "Monday 26 December 2022",
    Location: "Dad's",
    Events: "Boxing Day",
    Advent: 7,
    votd: "",
  },
];
var myCalender = "";

function getLongDateString(date) {
  // const date = new Date();
  const day = weekday[date.getDay()];
  const dateString =
    day +
    ", " +
    date.toLocaleDateString("en-AU", { day: "numeric" }) +
    " " +
    date.toLocaleDateString("en-AU", { month: "long" }) +
    " " +
    date.toLocaleDateString("en-AU", { year: "numeric" });
  return dateString;
}

data.forEach((element) => {
  myCalender += `
    <tr class="rowStyle">
      <td class="columnStyle">${element.Date}</td>
      <td class="columnStyle">${element.Location}</td>
      <td class="columnStyle">${element.Events}</td>
      <td class="columnStyle">${element.Advent}</td>
    </tr>`;
});

document.getElementById("rows").innerHTML = myCalender;

document.getElementById("footer").innerHTML =
  "Mitchell Mechatronics Co &copy 2022";
