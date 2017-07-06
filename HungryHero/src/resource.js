var res = {
		texturePlist : "res/graphics/texture.plist",
		texturePng   : "res/graphics/texture.png",
		bgLayer      : "res/graphics/bgLayer.jpg",
		bgWelcome    : "res/sounds/bgWelcome.mp3",
		bgGame       : "res/sounds/bgGame.mp3",
		eatEffect    : "res/sounds/eat.mp3",
		coffeeEffect : "res/sounds/coffee.mp3",
		mushEffect   : "res/sounds/mushroom.mp3",
		hitEffect    : "res/sounds/hit.mp3",
		hurtEffect   : "res/sounds/hurt.mp3",
		loseEffect   : "res/sounds/lose.mp3",
		Font         : "res/fonts/font.fnt"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}