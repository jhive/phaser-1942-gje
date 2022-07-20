var context = "Helloj";
var cursors;
var plane;


function preload(scene){
	context = scene;

	context.load.spritesheet('plane', './assets/plane.png',
		{
			frameWidth:64,
			frameHeight:66,
			startFrame:0,
			endFrame:2
		});
}

function create(){
	setupPlayerSprite();
	s275564716110etupFlyingAnimation();

	cursors = context.input.keyboard.createCursorKeys();
}


function update(time, delta){
	var speed = 200 * (delta/1000);
	applyScreenTouchMovement(speed);
	applyKeyboardMovement(speed);
}


//**** HELPER METHODS **//
function setupPlayerSprite(){
	console.log(this.context);
	plane = context.physics.add.sprite(400,300, 'plane');
	plane.setCollideWorldBounds(true);
}
function setupFlyingAnimation(){
	context.anims.create({
		key: "fly",
		frameRate: 30,
		frames: context.anims.generateFrameNumbers("plane", {start: 0, end: 2}),
		repeat: -1
	});

	plane.play("fly");
}



var touchTarget = {x:0, y:0};
function applyScreenTouchMovement(speed){
	//Touch support
	pointer = context.input.activePointer;
	if(pointer.isDown){
		touchTarget = {x: pointer.x, y: pointer.y}
		context.physics.moveToObject(plane, touchTarget, 200);
	}

	var distance = Phaser.Math.Distance.Between(plane.x, plane.y, touchTarget.x, touchTarget.y);
	if(distance < 4){
		plane.body.stop();
	}
}

function applyKeyboardMovement(speed){
	if(cursors.left.isDown){
		plane.x -= speed;
	}

	if(cursors.right.isDown){
		plane.x += speed;
	}

	if(cursors.up.isDown){
		plane.y -= speed;
	}

	if(cursors.down.isDown){
		plane.y += speed;
	}
}

module.exports = {
	preload: preload,
	create: create,
	update: update
}
