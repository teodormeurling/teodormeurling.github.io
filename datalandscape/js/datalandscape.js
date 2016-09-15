// Initialize a Line chart in the container with the ID chart1
new Chartist.Line('#chart1', {
  labels: ['monday', 'tuesday', 'wednsday', 'thursday', 'friday'],
  series: [[100, 86, 40, 20, 25, 30]
  ]
  }, {
low: 0,
showArea: true
});
