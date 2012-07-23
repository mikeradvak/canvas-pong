function CanvasController (canvas_element, height, width) {
	this.canvas_element     = canvas_element;
	this.canvas_context_tmp = null;
	this.canvas_tmp         = null;
	this.font               = '10pt Helvetica';
	this.height             = height;
	this.width              = width;
}

CanvasController.prototype = {
	// Clear the context.
	clear: function () {
		this.canvas_context_tmp.clearRect(0, 0, width , height);
	},
	
	// Draw the canvas_tmp to the canvas.
	drawCanvas: function () {
		// TODO: Remove the two lines below, just leaving as an example.
		// Draw the background image.
		// this.canvas_context_tmp.drawImage(this.background_image, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
		// Set the canvas from the tmp image.
		this.canvas_context.drawImage(this.canvas_tmp, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
	},

	// Draw an image on to the canvas_tmp.
	drawCanvasTmp: function (image, source_x, source_y, source_width, source_height, destination_x, destination_y, destination_width, destination_height) {
		this.canvas_context_tmp.drawImage(image, source_x, source_y, source_width, source_height, destination_x, destination_y, destination_width, destination_height);
	},

	// Draw a filled rectangle to the screen.
	drawCanvasTmpRect: function (x, y, width, height, color) {
		this.canvas_context_tmp.fillStyle = color;
		this.canvas_context_tmp.fillRect(x, y, width, height);
	},

	// Draw text to the screen.
	drawCanvasTmpText: function (x, y, color, message) {
		this.canvas_context_tmp.font      = this.font;
		this.canvas_context_tmp.fillStyle = color;
		this.canvas_context_tmp.fillText(message, x, y);
	},

	// Initialize game attributes, start the game.
	initialize: function () {
		// Check whether browser supports getting canvas context.
		if (this.canvas_element && this.canvas_element.getContext) {
			// Set the main object to this.
			//cthis.main_object     = this;
			// Set the context as 2D.
			this.canvas_context     = this.canvas_element.getContext('2d');
			// Create a off-screen canvas to draw on.
			this.canvas_tmp         = document.createElement('canvas');
			this.canvas_tmp.width   = this.width;
			this.canvas_tmp.height  = this.height;
			this.canvas_context_tmp = this.canvas_tmp.getContext('2d');
		}
	},

	// Update between frames.
	update: function () {
		// Do nothing, for now.
	}
}