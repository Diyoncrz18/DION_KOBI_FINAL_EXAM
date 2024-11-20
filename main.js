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
