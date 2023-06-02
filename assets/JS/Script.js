
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});




let diagramma = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(diagramma, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
            '15', '16', '17', '18', '19', '20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            data: [5, 6, 7, 8, 9, 10, 11, 11, 10, 10, 9, 8, 7, 8, 10, 11, 12, 13, 14, 15, 15, 14, 13, 12, 11, 10, 9,8,10,11,12,13,15 ],
            backgroundColor: "#E0E4FF",
            borderColor: "#6576FF",
            borderWidth: 4,
            pointRadius: 0,
            tension: 0.5,  
        }]
    },
    options: {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 3,
                max: 20,
                ticks: {
                    stepSize: 3,
                    callback: (value) => '$' + value
                },
            },
        }
    }
});


let diagrammaUstun1 = document.getElementById('ChartBar1').getContext('2d');
let ChartBar1 = new Chart(diagrammaUstun1, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '','', '', '', '', '', ],
        datasets: [{
            data: [10, 7, 9, 6, 10, 20, 7, 12, 6, 10, 20, ],
            backgroundColor: "#E0E4FF",
            borderColor: "#6576FF",
            borderWidth: 1,
            pointRadius: 0,
            tension: 2,  
        }]
    },
    options: {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 20,
                ticks: {
                    stepSize: 3,
                    callback: (value) =>  value.none
                },
            },
        }
    }
});

let diagrammaUstun2 = document.getElementById('ChartBar2').getContext('2d');
let ChartBar2 = new Chart(diagrammaUstun2, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', ],
        datasets: [{
            data: [10, 7, 8, 20, 10, 20,    ],
            backgroundColor: "#E0E4FF",
            borderColor: "#6576FF",
            borderWidth: 1,
            pointRadius: 0,
            tension: 2,  
        }]
    },
    options: {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 20,
                ticks: {
                    stepSize: 3,
                    callback: (value) =>  value.none
                },
            },
        }
    }
});

let diagrammaUstun3 = document.getElementById('ChartBar3').getContext('2d');
let ChartBar3 = new Chart(diagrammaUstun3, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', ],
        datasets: [{
            data: [7, 9, 18, 6, 10, 18,    ],
            backgroundColor: "#E0E4FF",
            borderColor: "#6576FF",
            borderWidth: 1,
            pointRadius: 0,
            tension: 2,  
        }]
    },
    options: {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 20,
                ticks: {
                    stepSize: 3,
                    callback: (value) =>  value.none
                },
            },
        }
    }
});