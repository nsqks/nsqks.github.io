var GameScene = cc.Scene.extend({
	_hero           : null,
	_ui             : null,
	_background     : null,
	itemBatchLayer  : null,
	_touchY         : 0,
	
	ctor : function(){
		this._super();
		
		var layer = new cc.Layer();
		this.addChild(layer);
		
		this._background = new GameBackground();
		layer.addChild(this._background);
		
		this._hero = new Hero();
		this.addChild(this._hero);
		
		this.itemBatchLayer = new cc.SpriteBatchNode(res.texturePng);
		this.addChild(this.itemBatchLayer);
		
		this._ui = new GameSceneUI();
		this.addChild(this._ui);
		this._ui.update();
		
		this.init();
		return true;
	},
	
	init : function(){
		Sound.stop();
		Sound.playGameBgMusic();
		var size = cc.winSize;
		Game.user.lives = GameConstants.HERO_LIVES;
		Game.user.score = Game.user.distance = 0;
		Game.gameState  = GameConstants.GAME_STATE_IDLE;
		Game.user.heroSpeed = this._background.speed = 0;
		
		this._hero.x = -size.width / 2;
		this._hero.y = size.height / 2; 
		
		if("touch" in cc.sys.capabilities){
			cc.eventManager.addListener({
				event : cc.EventListener.TOUCH_ALL_AT_ONCE,
				onTouchMoved : this._onTouchMoved.bind(this)
			}, this);
		}
		else {
			cc.eventManager.addListener({
				event : cc.EventListener.MOUSE,
				onMouseMove : this._onMouseMove.bind(this)
			}, this);
		}
		
		this.scheduleUpdate();
	},
	
	_onTouchMove : function(touches, event){
		if(Game.gameState != GameConstants.GAME_STATE_OVER){
			this._touchY = touches[0].getLocation().y;
		}
	},
	
	_onMouseMove : function(event){
		if(Game.gameState != GameConstants.GAME_STATE_OVER){
			this._touchY = event.getLocationY();
		}
	},
	update :function(elapsed){
		var size = cc.director.getWinSize();
		this._hero.y -= (this._hero.y - this._touchY) * 0.1;
		switch(Game.gameState){
			case GameConstants.GAME_STATE_IDLE :
				if(this._hero.x < size.width * 0.5 * 0.5){
					this._hero.x += ((size.width * 0.5 *0.5 + 10) - this._hero.x) * 0.05;
					Game.user.heroSpeed += (GameConstants.HERO_MIN_SPEED - Game.user.heroSpeed) * 0.05;
					this._background.speed = Game.user.heroSpeed * elapsed;
				}
				else {
					Game.gameState = GameConstants.GAME_STATE_FLYING;
					this._hero.state = GameConstants.HERO_STATE_FLYING;
				}
				this._ui.update();
				break;
		}
	},
	
	_handleHeroPose : function(){
		var size = cc.winSize;
		if(Math.abs(-(this._hero.y - this._touchY) * 0.2) < 30){
			this.hero.setRotation((this._hero.y - this._touchY) * 0.2);
		}
		if(this._hero.y  < this.hero.height * 0.5){
			this._hero.y = this._hero.height * 0.5;
			this._hero.setRotation(0);
		}
		if(this._hero.y > size.height - this._hero.height * 0.5){
			this._hero.y = size.height - this._hero.height * 0.5;
			this._hero.setRotation(0);
		}
		
		this._ui.update();
	}
});