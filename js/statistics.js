  // Initialize a Line chart in the container with the ID chart1
  new Chartist.Line('#chart1', {
    labels: ['2014', '2013', '2012', '2011', '2010', '2009', '2008'],
    series: [
      [609, 460, 419, 351, 327, 307, 288],
      [33,	22,	29,	19,	52,	56, 94],
      [176, 201, 213, 197, 156, 175, 169]
    ]
    }, {
  low: 0,
  showArea: true
  });

  // Initialize a Line chart in the container with the ID chart2
  new Chartist.Bar('#chart2', {
    labels: ['2009'],
    series: [
      [25962],
      [82008]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  }).on('draw', function(data) {
    if(data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
