var rotation = function (){
   $("#chili").rotate({
      angle:0,
      animateTo:360,
      callback: rotation
   });
}
rotation();
