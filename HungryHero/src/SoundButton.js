///**
// * 该方法未生效，暂时不用
// * **/
//
//var SoundButton = cc.MenuItemToggle.extend({
//	ctor : function(){
//		var sprite = new cc.Sprite("#soundOn0000.png");
//		var animation = new cc.Animation();
//		animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));
//		animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));
//		animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));
//		
//		animation.setDelayPerUnit(1/3);
//		
//		var action = cc.animate(animation).repeatForever();
//		
//		sprite.runAction(action);
//		
//		this._super(new cc.MenuItemSprite(sprite, null, null), new cc.MenuItemImage("#soundOff.png"));
//		
//		this.setCallback(this._soundOnOff, this);
//		
//		return true;
//	},
//	
//	_soundOnOff : function(){
//		Sound.toggleOnOff();
//	}
//});

var SoundButton = {
		sound : function(func){
			var sound1       = new cc.MenuItemImage("#soundOn0000.png");
			var sound2       = new cc.MenuItemImage("#soundOn0001.png");
			var sound3       = new cc.MenuItemImage("#soundOn0002.png");
			var soundOff     = new cc.MenuItemImage("#soundOff.png");
			var soundButton  = new cc.MenuItemToggle(sound1, sound2, sound3, soundOff, func, this);
			return soundButton;
		}
}