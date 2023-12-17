'use strict';

//ゲームオブジェクトの作成
let cGameControl = new GameControl();
let cSimuration = new Simuration();
let cStage = new Stage();

function main() {
	//cStage.update();
	//cHtmlControl.update();
	//cGameControl.update();
	cSimuration.update();
	requestAnimationFrame( main );
}
addEventListener('load', main(), false);
