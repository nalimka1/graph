function Graph(options) {
    options = options || {};
    var id = options.id;
    var width = options.width || 300;
    var height = options.height || 300;
    var WINDOW = options.WINDOW || {};
    var canvas;
    if (id) {
        canvas = document.getElementById(id);
    } else {
        canvas = document.createElement('canvas');
        document.querySelector('body').appendChild(canvas);
    }
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');

    function xs(x) {
        return (x - WINDOW.LEFT) / WINDOW.WIDTH * canvas.width;
    }

    function ys(y) {
        return canvas.height - (y - WINDOW.BOTTOM) / WINDOW.HEIGHT * canvas.height;
    }

    this.clear = function () {
        context.fillStyle = '#eee';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    this.line = function (x1, y1, x2, y2, color, width) {
        context.beginPath();
        context.strokeStyle = color || '#0f0';
        context.lineWidth = width || 2;
        context.moveTo(xs(x1), ys(y1));
        context.lineTo(xs(x2), ys(y2));
        context.stroke();
    };

    /* this.line = function (OX, bottom,  color, width) {
         context.beginPath();
         context.strokeStyle = color || '#ffe';
         context.lineWidth = width || 2;
         context.moveTo(xs(OX), ys(0));
         context.lineTo(xs(OX), ys(bottom));
         context.stroke();
     }
     this.line = function (OY, right_border,  color, width) {
         context.beginPath();
         context.strokeStyle = color || '#ffe';
         context.lineWidth = width || 2;
         context.moveTo(xs(0), ys(OY));
         context.lineTo(xs(right_border), ys(OY));
         context.stroke();
     }
     */
    this.text= function(x,y,text){
        context.fillStyle= 'red';
        context.font= 'bold 24pt Arial';
        context.fillText(text, xs(x),ys(y))
    }
}