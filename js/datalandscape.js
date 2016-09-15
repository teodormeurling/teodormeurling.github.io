new Chartist.Line('.ct-chart', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});

new Chartist.Line('#chart1', {
  labels: ['monday', 'tuesday', 'wednsday', 'thursday', 'friday'],
  series: [[100, 86, 40, 20, 25, 30]
  ]
  }, {
low: 0,
showArea: true
});
