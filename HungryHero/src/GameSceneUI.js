var GameSceneUI = cc.Layer.extend({
	_lifeText     : null,
	_distanceText : null,
	_scoreText    : null,
	volume        : 0.3,
	ctor : function(){
		this._super();
		
		var size = cc.winSize;
		
		var lifeLabel = new cc.LabelBMFont("L I V E S", res.Font);
		this.addChild(lifeLabel);
		lifeLabel.x = 360;
		lifeLabel.y = size.height - 25;
		
		this._lifeText = new cc.LabelBMFont("0", res.Font);
		this.addChild(this._lifeText);
		this._lifeText.x = lifeLabel.x;
		this._lifeText.y = size.height - 60;
		
		var distanceLabel = new cc.LabelBMFont("D I S T A N C E", res.Font);
		this.addChild(distanceLabel);
		distanceLabel.x = 680;
		distanceLabel.y = lifeLabel.y;
		
		this._distanceText = new cc.LabelBMFont("0", res.Font);
		this.addChild(this._distanceText);
		this._distanceText.x = distanceLabel.x;
		this._distanceText.y = this._lifeText.y;
		
		var scoreLabel = new cc.LabelBMFont("S C O R E ", res.Font);
		this.addChild(scoreLabel);
		scoreLabel.x = 915;
		scoreLabel.y = lifeLabel.y;
		
		this._scoreText = new cc.LabelBMFont("0", res.Font);
		this.addChild(this._scoreText);
		this._scoreText.x = scoreLabel.x;
		this._scoreText.y = this._lifeText.y;
		
		var pauseButton = new cc.MenuItemImage("#pauseButton.png", "#pauseButton.png", this.pauseResume);
		var soundButton  = SoundButton.sound(this.changeVolume.bind(this));
		var menu = new cc.Menu(pauseButton, soundButton);
		menu.alignItemsHorizontallyWithPadding(30);
		menu.x = 80;
		menu.y = size.height - 45;
		this.addChild(menu);
		
		return true;
	},
	
	_pauseResume : function(){
		if(cc.director.isPaused()){
			cc.director.resume();
		}
		else {
			cc.director.pause();
		}
	},
	
	changeVolume : function(){

		this.volume += 0.3
		if(this.volume > 1){
			this.volume = 0;
		}
		cc.audioEngine.setEffectsVolume(this.volume);
		cc.audioEngine.setMusicVolume(this.volume);
	},
	
	update : function(){
		this._lifeText.setString(Game.user.lives.toString());
		this._distanceText.setString(parseInt(Game.user.distance).toString());
		this._scoreText.setString(Game.user.score.toString());
	}
});