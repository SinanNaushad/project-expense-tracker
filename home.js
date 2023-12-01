function myFunction(x) {
    x.classList.toggle("change");
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      main.style.marginLeft = "0";
    } else {
      sidebar.style.width = "250px";
      main.style.marginLeft = "250px";
    }
  }
 

  const mygraph = document.getElementById('my-graph');

  new Chart(mygraph, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




  const pieData = {
    labels: ["Python", "Java", "JavaScript", "C#", "Others"],
    data: [30, 17, 10, 7, 36],
  };
  
  const mypie = document.querySelector(".my-pie");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(mypie, {
    type: "doughnut",
    data: {
      labels: pieData.labels,
      datasets: [
        {
          label: "Language Popularity",
          data: pieData.data,
        },
      ],
    },
    options: {
      borderWidth:0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    pieData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${pieData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
 

