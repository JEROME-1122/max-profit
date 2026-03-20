function calculateProfit() {
  //validation
  const n = parseInt(document.getElementById("time").value);
  if (!n || n <= 0) {
    alert("Please enter a valid time unit.");
    return;
  }
}
