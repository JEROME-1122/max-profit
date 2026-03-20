function calculateProfit() {
  //validation
  const n = parseInt(document.getElementById("time").value);
  if (!n || n <= 0) {
    alert("Please enter a valid time unit.");
    return;
  }

  const buildings = [
    { name: "T", buildTime: 5, earnPerUnit: 1500 },
    { name: "P", buildTime: 4, earnPerUnit: 1000 },
    { name: "C", buildTime: 10, earnPerUnit: 2000 },
  ];
}
