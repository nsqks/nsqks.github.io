Sound = {
		silence    : false,
		_eatEffect : 0,
		playMenuBgMusic : function(){
			if(!Sound.silence){
				cc.audioEngine.playMusic(res.bgWelcome, true);
				cc.audioEngine.setMusicVolume(0.3);
			}
		},
		
		playGameBgMusic : function(){
			if(!Sound.silence){
				cc.audioEngine.playMusic(res.bgGame, true);
			}
		},
		
		playEat : function(){
			if(!Sound.silence){
				if(Sound._eatEffect){
					cc.audioEngine.stopEffect(Sound._eatEffect);
					Sound._eatEffect = cc.audioEngine.playEffect(res.eatEffect, false);
				}
			}
		},
		
		playCoffee : function(){
			if(!Sound.silence){
				cc.audioEngine.playEffect(res.coffeeEffect, false);
			}
		},
		
		playMushroom : function(){
			if(!Sound.silence){
				cc.audioEngine.playEffect(res.mushEffect, false);
			}
		},
		
		playHit : function(){
			if(!Sound.silence){
				cc.audioEngine.playEffect(res.hitEffect,false);
			}
		},
		
		playHurt : function(){
			if(!Sound.silence){
				cc.audioEngine.playEffect(res.hurtEffec, false);
			}
		},
		
		playLose : function(){
			if(!Sound.silence){
				cc.audioEngine.playEffect(res.loseEffect, false);
			}
		},
		
		stop : function(){
			cc.audioEngine.stopAllEffects();
			cc.audioEngine.stopMusic();
		},
		
		toggleOnOff : function(){
			if(Sound.silence){
				Sound.silence = false;
				cc.audioEngine.setEffectsVolume(1);
				cc.audioEngine.setMusicVolume(1);
			}
			else {
				Sound.silence = true;
				cc.audioEngine.setEffectsVolume(0);
				cc.audioEngine.setMusicVolume(0);
			}
		}
}