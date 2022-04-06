var egg = new Egg();
egg
  .addCode("7,5,1,4,left,right", function() {
    jQuery(window.open(this.href="https://www.youtube.com/watch?v=Ud4HuAzHEUc")).fadeIn(500, function() {
      window.setTimeout(function() { jQuery(window.open(this.href="https://www.youtube.com/watch?v=Ud4HuAzHEUc")).hide(); }, 5000);
    }, "konami-code");
  })
  .addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  })
  .listen();

  