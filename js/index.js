var tl = new TimelineMax({repeat:-1, yoyo:true});

tl.to(".clip-text", 4, { css:{"background-position": "800px"} , ease:Quad.easeInOut });
