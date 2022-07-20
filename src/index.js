import player from "./player"

var config = {
	type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            preload: preload,
            create: create,
						update: update
        }
    };

var game = new Phaser.Game(config);
var cursors;


function preload () {
	console.log(this)
	player.preload(this);
}

function create () {
	player.create();
	//this.add.image(400, 300, 'sky');


	//var particles = this.add.particles('red');

	//var emitter = particles.createEmitter({
	//speed: 200,
	//scale: { start: 1, end: 0 },
	//blendMode: 'ADD'
	//});

	//logo = this.physics.add.image(400, 100, 'logo');

	//logo.setVelocity(0, 200);
	//logo.setBounce(1, 1);
	//logo.setCollideWorldBounds(true);

	//emitter.startFollow(logo);
}

function update(time, delta){
	player.update(time, delta);
}


