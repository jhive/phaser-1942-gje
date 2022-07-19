var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create,
						update: update
        }
    };

    var game = new Phaser.Game(config);
		var plane;

    function preload ()
    {
				this.load.spritesheet('plane', './assets/plane.png', {frameWidth:64, frameHeight:66, startFrame:0, endFrame:2})

    }

    function create ()
    {
        //this.add.image(400, 300, 'sky');

				plane = this.add.sprite(400,300, 'plane');

			this.anims.create({
				key: "fly",
				frameRate: 30,
				frames: this.anims.generateFrameNumbers("plane", {start: 0, end: 2}),
				repeat: -1
			});
				plane.play("fly");

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
		}
