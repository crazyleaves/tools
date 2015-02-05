var page = new WebPage(), address, output, size,
    system = require('system');
// console.log(system.args[0])
if (system.args.length < 2 || system.args.length > 3){
  console.log('Usage: rasterize.js URL filename');
  phantom.exit();
} else {
  address = system.args[1];
  output = system.args[2];
  page.settings = {
    javascriptEnabled: true,
    loadImages: true
  };
  page.viewportSize = {
    width: 2000,
    height: 15000
  };
  page.open(address, function (status){
    if (status !== 'success'){
      console.log('Unable to load the address!');
      phantom.exit();
    } else {
      var obj = page.evaluate(function() {
        var v_w = window.screen.width,
            t = document.title,
            p_h = document.body.clientHeight,
            bg = document.getElementsByTagName("body")[0].style.backgroundColor || "#fff";
        document.getElementsByTagName("body")[0].style.backgroundColor = bg;
        var obj = {
          // bg : bg,
          title : t,
          h: p_h,
          w: v_w
        };
        return obj;
      });
      window.setTimeout(function (){
        // console.log(obj.bg)
        page.clipRect = {
          top: 0,
          left: (2000-obj.w)/2,
          width: obj.w,
          height: obj.h
        };
        page.render(obj.title+'.'+output);
        phantom.exit();
      }, 1000);
    }
  });
}
