var GameOverUI = cc.Layer.extend({
	_distanceText : null,
	_scoreText    : null,
	ctor : function(gameScene){
		this._super();
		this._gameScene = gameScene;
		var size = cc.winSize;
		var bg = new cc.LayerColor(cc.p(0, 0, 0, 200), size.width, size.heihgt);
		this.addChild(bg);

		var title = new cc.LabelBMFont("HERO WAS KILLED! ", res.Font);
		this.addChild(title);
		title.setColor(cc.color(243, 231, 95));
		title.x = size.width  / 2;
		title.y = size.height / 2;

		this._distanceText = new cc.LabelBMFont("DISTANCE TRAVELLED: 0000000", res.Font);
		this.addChild(this._distanceText);
		this._distanceText.x = size.width  / 2;
		this._distanceText.y = size.height / 2 - 220;

		this._scoreText = new cc.LabelBMFont("SCORE: 0000000", res.Font);
		this.addChild(this._scoreText);
		this._scoreText.x = size.width  / 2;
		this._scoreText.y = size.height / 2 - 270;
		
		var replayBtn = new cc.MenuItemImage("#gameOver_playAgainButton.png", "#gameOver_playAgainButton.png", this._replay.bind(this));
		var aboutBtn  = new cc.MenuItemImage("#gameOver_aboutButton.png", "#gameOver_aboutButton.png", this._about);
		var main      = new cc.MenuItemImage("#gameOver_mainButton.png", "#gameOver_mainButton.png", this._return);
		
		var menu = new cc.Menu(replayBtn, aboutBtn, main);
		menu.alignItemsVertically();
		this.addChild(menu);
		menu.y = size.height / 2 - 100;;
	},
	
	init : function(){
		this._distanceText.setString("DISTANCE TRAVLLED: " + parseInt(Game.user.distance));
		this._scoreText.setString("SCORE: " + Game.user.score);
	},
	
	_replay : function(){
		this._gameScene.init();
	},
	_about : function(){
		cc.director.runScene(new AboutScene());
	},
	
	_return : function(){
		cc.director.runScene(new MenuScene());
	}
});