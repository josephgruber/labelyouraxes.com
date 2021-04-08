$(function () {
    Chart.defaults.font.size = 16;
    Chart.defaults.font.weight = 500;
    var ctx = document.getElementById("chart");
    var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "rgb(117, 163, 58)",
                    tension: 0.1,
                },
                {
                    data: [83, 96, 43, 21, 36, 95, 39],
                    fill: false,
                    borderColor: "rgb(244, 193, 142)",
                    tension: 0.1,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    color: "black",
                },
            },
        },
    });
});
