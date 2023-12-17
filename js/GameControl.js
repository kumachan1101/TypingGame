
class GameControl {
	constructor(  ) {
	}

	update(){
	}

}



class Input {

	constructor() {
		this.clear();
	}

	clear(){
		this.up = false;
		this.left = false;
		this.down = false;
		this.right = false;
		this.enter = false;
		this.shift = false;
		this.push = "";
	}

    updatestate(key_code, bState){
		switch(key_code){
		case 37:
			this.left = bState;
			break;
		case 38:
			this.up = bState;
			break;
		case 39:
			this.right = bState;
			break;
		case 40:
			this.down = bState;
			break;
		case 13:
			this.enter = bState;
			break;
		case 16:
			this.shift = bState;
			break;
			}
	}
}


