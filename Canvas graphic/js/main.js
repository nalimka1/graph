function f(x) {
    return Math.sin(x);
}
function g(x) {
    return Math.cos(x);
}


window.onload = function () {
    var WINDOW = {
        LEFT: -10,
        BOTTOM: -10,
        WIDTH: 20,
        HEIGHT: 20,
    };
    var graph = new Graph({
        id: 'canvas', width: 800, height: 800, WINDOW: WINDOW
    });

    function printOXY() {
        //OX
        graph.line(WINDOW.LEFT, 0, WINDOW.WIDTH + WINDOW.LEFT, 0, 'black', 1);
        //OY
        graph.line(0, WINDOW.BOTTOM, 0, WINDOW.HEIGHT + WINDOW.BOTTOM, 'black', 1)
        for (var i = 1; i < WINDOW.WIDTH + WINDOW.LEFT; i++) {
            graph.line(i, 0.2, i, -0.2, 'black', 4);
        };

        for (var i = 1; i > WINDOW.LEFT; i--) {
            graph.line(i, 0.2, i, -0.2, 'black', 4);
        };

        for (var i = 1; i < WINDOW.HEIGHT; i++) {
            graph.line(0.2, i, -0.2, i, 'black', 4);
        };

        for (var i = 1; i > WINDOW.BOTTOM; i--) {
            graph.line(0.2, i, -0.2, i, 'black', 4);
        }
        //стрелки ОХ
        for (var i = WINDOW.WIDTH + WINDOW.LEFT; i > WINDOW.WIDTH + WINDOW.LEFT - 0.5; i--) {
            graph.line(i, 0, WINDOW.WIDTH + WINDOW.LEFT - 0.5, 0.5, 'black', 4);
        };
        for (var i = WINDOW.WIDTH + WINDOW.LEFT; i > WINDOW.WIDTH + WINDOW.LEFT - 0.5; i--) {
            graph.line(i, 0, WINDOW.WIDTH + WINDOW.LEFT - 0.5, -0.5, 'black', 4);
        };
        //стрелки ОY
        for (var i = WINDOW.HEIGHT; i > WINDOW.HEIGHT - 1; i--) {
            graph.line(0, i, 0.5, WINDOW.HEIGHT-0.5 , 'black', 4);
        };

    }

    function printFunction(f) {
        var x = WINDOW.LEFT;
        var dx = WINDOW.WIDTH / 100;
        while (x < WINDOW.WIDTH + WINDOW.LEFT) {
            graph.line(x, f(x), x + dx, f(x + dx));
            x += dx;
        }
    };

    function render() {
        graph.clear();
        printFunction(f);
        printFunction(g);
        printOXY();
        graph.text(1,1,'help');
        graph.text(1,1,'help');
        graph.text(1,1,'help');
        graph.text(1,1,'help');
      
    
        
    };

    render();
};

