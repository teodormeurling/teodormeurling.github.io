var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : 'kg'
};
		var demo = new CountUp("count", 0, 45000000, 0, 10, options);
		demo.start();
