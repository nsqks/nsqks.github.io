var MenuScene = cc.Scene.extend({
	volume : 0.3,
	ctor : function(){
		this._super();
		
		var layer = new cc.Layer();
		this.addChild(layer);
		
		var winSize      = cc.director.getWinSize();
		var bgWelcome = new cc.Sprite("res/graphics/bgWelcome.jpg");
		bgWelcome.x   = winSize.width  / 2;
		bgWelcome.y   = winSize.height / 2;
		layer.addChild(bgWelcome);
		
		var title = new cc.Sprite("#welcome_title.png");
		title.x   = 800;
		title.y   = 555;
		layer.addChild(title);
		
		this._hero   = new cc.Sprite("#welcome_hero.png");
		this._hero.x = this._hero.width / 2 - 300;
		this._hero.y = 400;
		layer.addChild(this._hero);
		
		var move = cc.moveTo(1, cc.p(this._hero.width / 2, this._hero.y)).easing(cc.easeOut(2));
		this._hero.runAction(move);
		
		this._playBtn    = new cc.MenuItemImage("#welcome_playButton.png", "#welcome_playButton.png", this._play.bind(this));
		this._playBtn.x  = 700;
		this._playBtn.y  = 350;
		this._aboutBtn   = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about);
		this._aboutBtn.x = 500;
		this._aboutBtn.y = 250;
		
		var soundButton  = SoundButton.sound(this.changeVolume.bind(this));
		soundButton.x    = 45;
		soundButton.y    = winSize.height - 45;
		
		var menu = new cc.Menu(this._playBtn, this._aboutBtn, soundButton);
		layer.addChild(menu);
		menu.x = 0;
		menu.y = 0;
		this.scheduleUpdate();
		Sound.playMenuBgMusic();
		return true;
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
		var currentDate  = new Date();
		this._hero.y     = 400 + (Math.cos(currentDate.getTime() * 0.002)) * 25;
		this._playBtn.y  = 350 + (Math.cos(currentDate.getTime() * 0.002)) * 10;
		this._aboutBtn.y = 250 + (Math.cos(currentDate.getTime() * 0.002)) * 10;
	},
	
	_play : function(){
		cc.log("【程序】点击play按钮");
		Sound.playCoffee();
		cc.director.runScene(new GameScene());
	},
	
	_about : function(){
		cc.log("【程序】点击about按钮");
		Sound.playCoffee();
		cc.director.runScene(new AboutScene());
	}
});