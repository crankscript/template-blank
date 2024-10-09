import {
    PlaydateColor,
    PlaydateDrawMode,
    PlaydateFontVariant,
} from "@crankscript/core";

const helloString = "Hello from crankscript";
const [width, height] = playdate.graphics.getTextSize(helloString);

playdate.update = () => {
    playdate.graphics.clear(PlaydateColor.Black);
    playdate.graphics.setFont(
        playdate.graphics.getSystemFont(PlaydateFontVariant.Bold),
    );
    playdate.graphics.setImageDrawMode(PlaydateDrawMode.FillWhite);
    playdate.graphics.drawText(
        helloString,
        (400 - width) / 2,
        (240 - height) / 2,
    );
};
