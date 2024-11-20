const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["USD", "JPY", "AUD", "EUR", "GBP", "CHF"],
    datasets: [
      {
        label: "Rp",
        data: [15845.35, 102.93, 10302.37, 16715.68, 20055.88, 17930.04],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});

/////////////////////////
// Chart 2

const chart2 = document.getElementById("myChart2");

new Chart(chart2, {
  type: "bar",
  data: {
    labels: ["USD", "JPY", "AUD", "EUR", "GBP", "CHF"],
    datasets: [
      {
        label: "Rp",
        data: [15845.35, 102.93, 10302.37, 16715.68, 20055.88, 17930.04],
        borderWidth: 1,
      },
    ],
  },
  options: {
    backgroundColor: "black",
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});
