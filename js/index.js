function calculateProfit() {
  //validation
  const n = parseInt(document.getElementById("time").value);
  if (!n || n <= 0) {
    alert("Please enter a valid time unit.");
    return;
  }
  const T = { time: 5, earn: 1500 };
  const P = { time: 4, earn: 1000 };
  const C = { time: 10, earn: 2000 };
  let best = { T: 0, P: 0, C: 0, earnings: 0 };

  for (let t = 0; t <= Math.min(10, n); t++) {
    for (let p = 0; p <= Math.min(10, n); p++) {
      for (let c = 0; c <= Math.min(10, n); c++) {
        const totalBuildTime = t * T.time + p * P.time + c * C.time;
        if (totalBuildTime > n) continue;

        // After building, each building earns for (n - build finish time)
        let tE = 0,
          pE = 0,
          cE = 0;
        let time = 0;

        // Build Theatres first
        time += t * T.time;
        if (time <= n) {
          tE = t * T.earn * Math.max(0, n - time);
        }

        // Build Pubs
        time += p * P.time;
        if (time <= n) {
          pE = p * P.earn * Math.max(0, n - time);
        }

        // Build Commercial Parks
        time += c * C.time;
        if (time <= n) {
          cE = c * C.earn * Math.max(0, n - time);
        }

        const total = tE + pE + cE;
        if (total > best.earnings) {
          best = { T: t, P: p, C: c, earnings: total };
        }
      }
    }
  }

  document.getElementById("result").innerHTML = `
        <strong>Input:</strong> n = ${n} units<br>
        <strong>Output:</strong> T:${best.T} P:${best.P} C:${best.C}<br>
        <strong>Earnings:</strong> $${best.earnings.toLocaleString()}
      `;
}
