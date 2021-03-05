  $(function() {
      setInterval( function() {
        var color = 75;
        var seconds = new Date().getSeconds();
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var sdegree = seconds * 6;
        var mdegree = mins * 6;
        var hdegree = hours * 30
        var srotate = "rotate(" + sdegree + "deg)";
        var mrotate = "rotate(" + mdegree + "deg)";
        var hrotate = "rotate(" + hdegree + "deg)";
        
        if(color < 808080){
          color = seconds * 2 + color;
        } else {
          color = 0;
        }
        
        $("#sec").css({ "transform": srotate });
        $("#min").css({ "transform": mrotate });
        $("#hour").css({ "transform": hrotate });
        $("body").css({ "background-color": "rgba( 99990,"+color+",50, 1)" });

      }, 1000 );
  });
  
function showTime(){
  var date = new Date ();
  var h = date.getHours();  //0-23
  var m = date.getMinutes(); //0-59
  var s = date.getSeconds(); //0-59
  var ampm = "";
  
  if (h==0) {
    h = 24;
  }
  if (h>24) {
    h = h-24;
    ampm = "";
  }
  
  var time = h + ":" + m + ":" + s + " " + ampm;
  document.getElementById("clockDisplay").innerText = time;
  document.getElementById("clockDisplay").textContent = time;


setTimeout(showTime, 1000);
}

showTime();