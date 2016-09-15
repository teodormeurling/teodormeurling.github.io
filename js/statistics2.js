var data2 = {
    labels: ["Offenders", "Offences"],
    datasets: [
        {
            label: "Offences",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65]
        },
        {
            label: "Offenders",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28]
        },
    ]
};

// --------------------

var options = {
  legend: false,
  tooltips: {
    enabled: false,
  },
  animation: {
    duration: 1000,
    easing: 'easeOutQuart'
  },
  scales: {
    xAxes: [{
      stacked: true,
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      stacked: true,
      gridLines: {
        display: false
      },
      scaleLabel: {
        display: false
      },
      ticks: {
        fontColor: '#a9acb8',
        callback: function(value, index, values) {
          return value === 0 || value === Math.max.apply(null, values) ?
            value : null;
        }
      }
    }]
  }
}

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var bar = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
};
