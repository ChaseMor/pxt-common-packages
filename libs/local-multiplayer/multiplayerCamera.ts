namespace scene{

	export class MultiplayerCamera extends Camera {
		sprites: Sprite[];
		constructor(sprite1: Sprite, sprite2: Sprite) {
			super();
			this.sprites = [sprite1, sprite2];
			this.sprite = undefined;
		}

		update() {
            const scene = game.currentScene();
            
        	let midX = (this.sprites[0].x + this.sprites[1].x) / 2;
        	let midY = (this.sprites[0].y + this.sprites[1].y) / 2;
            this.offsetX = midX - (screen.width >> 1);
            this.offsetY = midY - (screen.height >> 1);

            super.update();
            
        }

	}

	/**
     * Set the camera to follow multiple sprites
     */
    //% weight=100
    //% blockId=local_followsprites block="camera follow $sprite1 and $sprite2"
    export function followSprites(sprite1: Sprite, sprite2: Sprite) {
    	let newCamera: MultiplayerCamera = new MultiplayerCamera(sprite1, sprite2);
        const scene = game.currentScene();
        scene.camera = newCamera;
        scene.background.camera = newCamera;
        console.log("Setting to new multiplayer camera");
    }
}