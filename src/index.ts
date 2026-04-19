const helloString = "Hello from crankscript";
const [width, height] = playdate.graphics.getTextSize(helloString);

playdate.update = () => {
    playdate.graphics.clear(playdate.graphics.kColorBlack);
    playdate.graphics.setFont(
        playdate.graphics.getSystemFont(playdate.graphics.font.kVariantBold),
    );
    playdate.graphics.setImageDrawMode(playdate.graphics.kDrawModeFillWhite);
    playdate.graphics.drawText(
        helloString,
        (400 - width) / 2,
        (240 - height) / 2,
    );
};
