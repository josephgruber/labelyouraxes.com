$(function () {
    Chart.defaults.font.size = 16;
    Chart.defaults.font.weight = 500;

    var ctx = document.getElementById("chart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                2000,
                2001,
                2002,
                2003,
                2004,
                2005,
                2006,
                2007,
                2008,
                2009,
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020,
            ],
            datasets: [
                {
                    label: "USA",
                    data: [
                        33,
                        37,
                        26,
                        38,
                        30,
                        22,
                        27,
                        29,
                        22,
                        31,
                        20,
                        21,
                        17,
                        23,
                        25,
                        23,
                        26,
                        32,
                        27,
                        20,
                        32,
                    ],
                    fill: false,
                    borderColor: "rgb(117, 163, 58)",
                    tension: 0.1,
                },
                {
                    label: "Russia",
                    data: [
                        42,
                        39,
                        38,
                        34,
                        41,
                        47,
                        38,
                        38,
                        38,
                        38,
                        42,
                        39,
                        33,
                        40,
                        39,
                        33,
                        22,
                        22,
                        18,
                        24,
                        14,
                    ],
                    fill: false,
                    borderColor: "rgb(244, 193, 142)",
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
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return value + "%";
                        },
                    },
                },
            },
        },
    });
});
