$(function () {
    Chart.defaults.font.size = 16;
    Chart.defaults.font.weight = 500;

    var ctx = document.getElementById("chart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
            datasets: [
                {
                    label: "USA",
                    data: [28, 22, 17, 23, 16, 12, 18, 20, 15, 24, 15, 18, 13, 19, 23, 20, 22, 29, 31, 21, 36, 45, 78],
                    fill: false,
                    borderColor: "rgb(117, 163, 58)",
                    tension: 0.1,
                },
                {
                    label: "Russia",
                    data: [35, 23, 25, 21, 22, 26, 25, 26, 26, 30, 31, 33, 26, 33, 36, 29, 19, 20, 20, 24, 16, 25, 22],
                    fill: false,
                    borderColor: "rgb(244, 193, 142)",
                    tension: 0.1,
                },
                {
                    label: "China",
                    data: [5, 1, 5, 7, 8, 5, 6, 9, 11, 6, 0, 19, 19, 15, 16, 19, 22, 18, 39, 34, 39, 56, 61],
                    fill: false,
                    borderColor: "rgb(230, 103, 107)",
                    tension: 0.1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
            scales: {
                y: {
                    ticks: {
                        display: false,
                        // Include a percentage sign in the ticks
                        // callback: function (value, index, values) {
                        //    return value + "%";
                        //},
                    },
                },
            },
        },
    });
});
