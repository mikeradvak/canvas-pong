var canvas            = document.getElementById('canvas');
var height            = 448;
var width             = 512;
var update_interval   = 17; // 60 FPS, 16.667 FPMS
// Start the main loop.
var canvas_controller = new CanvasController(canvas, height, width);
var input_controller  = new InputController();
canvas_controller.initialize();
// Set the update interval and begin the main loop.
if (canvas && canvas.getContext) {
	document.onkeyup = input_controller.keyCheck;
	setInterval(runMainLoop, update_interval);
}
// The main loop, update, clear then draw.
function runMainLoop () {
	canvas_controller.clear();
	// canvas_controller.drawCanvasTmpRect(0, 0, canvas_controller.width, canvas_controller.height, '#000000');
	canvas_controller.drawCanvasTmpText(5, canvas_controller.height - 35, '#00FF00', 'Hello world!');
	canvas_controller.drawCanvas();
}