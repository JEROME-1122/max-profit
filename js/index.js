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
 

  let bestEarning = 0;
  let bestSolutions = [];

  for (let t = 0; t <= Math.min(10, n); t++) {
    for (let p = 0; p <= Math.min(10, n); p++) {
      for (let c = 0; c <= Math.min(10, n); c++) {
        const totalBuildTime = t * T.time + p * P.time + c * C.time;
        if (totalBuildTime > n) continue;

        let tE = 0;
        let time = 0;

        // Build Theatres first
        for (let i = 0; i < t; i++) {
          time += T.time;
          if (time <= n) {
            tE += T.earn * (0, n - time);
          }
        }

        // Build Pubs
        for (let i = 0; i < p; i++) {
          time += P.time;
          if (time <= n) {
            tE += P.earn * (0, n - time);
          }
        }

        // Build Commercial Parks
        for (let i = 0; i < c; i++) {
          time += C.time;
          if (time <= n) {
            tE += C.earn * (0, n - time);
          }
        }

        // const total = tE + pE + cE;
        // if (total > best.earnings) {
        //   best = { T: t, P: p, C: c, earnings: total };
        // }

        if (tE > bestEarning) {
          bestEarning = tE;
          bestSolutions = [{ T: t, P: p, C: c }];
        } else if (tE === bestEarning) {
          bestSolutions.push({ T: t, P: p, C: c });
        }
      }
    }
  }

  const unique = [];
  const seen = new Set();

  for (let sol of bestSolutions) {
    const key = `${sol.T}-${sol.P}-${sol.C}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(sol);
    }
  }

  let output = `
    <strong>Input:</strong> n = ${n} units<br>
    <strong>Earnings:</strong> $${bestEarning.toLocaleString()}<br>
    <strong>Solutions:</strong><br>
    `;

  unique.forEach((sol, i) => {
    output += `${i + 1}. T:${sol.T} P:${sol.P} C:${sol.C}<br>`;
  });

  document.getElementById("result").innerHTML = output;
}
