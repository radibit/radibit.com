(function() {
  // 1. Define Config
  var config = {
    colors: {
      a1: '#e65b2f', a2: '#f5ead4', a3: '#5fb287', a4: '#5cb2d3',
      b1: '#ffffff', b2: '#002d37'
    },
    ptsNum: 500
  }

  // 1. Define Space and Form
  var space = new Pt.CanvasSpace('space-dots').setup( {bgcolor: config.colors.b2} );
  var form = new Pt.Form( space );

  // 2. Create Elements
  var mouse = new Pt.Circle( space.size.x / 2, 60 ).setRadius(200);
  var pts = [];
  for (var i = 0; i < config.ptsNum; i++) {
    pts.push( space.size.$multiply( Math.random(), Math.random()) );
  }

  // 3. Visualize, Animate, Interact
  space.add({
    animate: function(time, fps, context) {

      // change mouse radius
      mouse.setRadius( mouse.y/space.size.y * 100 + 60 );
      form.stroke(false);

      // go through each point
      for (var i=0; i<pts.length; i++) {

        var size = 0.5;
        var _p = pts[i].clone();

        // if intersecting with mouse circle, change its size and scale from mouse anchor point
        if (mouse.intersectPoint( pts[i]) ) {
          var dist =  (mouse.radius - pts[i].distance( mouse )) / mouse.radius;
          size = dist * 15;
          form.fill( config.colors['a'+(i%4+1)] );
          _p.scale2D( 1+dist, 1+dist, mouse );

        } else {
          form.fill( config.colors.b1 );
        }

        // draw points
        form.point( _p, size, true );
      }
    },

    onMouseAction: function(type, x, y, evt) {
      if (type=='move') {
        mouse.set(x,y);
      }
    },

    onTouchAction: function(type, x, y, evt) {
      this.onMouseAction( type, x, y );
    },

    onSpaceResize: function(x, y, evt) {
      config.ptsNum = x > 500 ? 500 : ~~(x / 2) + 25;

      pts = [];
      for (var i = 0; i < config.ptsNum; i++) {
        pts.push( space.size.$multiply( Math.random(), Math.random()) );
      }
    }
  });


  // 4. Start playing
  space.bindMouse();
  space.bindTouch();
  space.play();
}());
