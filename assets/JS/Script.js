






let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});




let diagramma = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(diagramma, {
    type: 'line',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            ],
        datasets: [{
            data: [3200, 7000, 4000, 8000, 5000, 7000, 5000, 9000, 4500, 10000, 4440, 8000, 3100, ],
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
                    display: true
                }
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


// Selection lang 



let elDropdown = document.querySelector(".drop__down");
let langList = document.querySelector(".list-lang");
let elSelectImg = document.querySelector(".selectedImg");
let elSelected = document.querySelector(".selected");

elDropdown.addEventListener('click' , ()=>{
    langList.classList.toggle('show');
})

langList.addEventListener('click', (e) =>{
    const elImg =e.target.querySelector('.item__lang-img');
    const elText =e.target.querySelector('.text__lang');

    elSelectImg.src = elImg.src;
    elSelected.innerHTML = elText.innerHTML;

})