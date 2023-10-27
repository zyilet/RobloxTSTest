import { KnitClient as Knit } from "@rbxts/knit";
import { RunService } from "@rbxts/services";
import { GameCtorHelper } from "client/Helper/GameCtorHelper";
import { EDefaultAnim } from "shared/EDefaultAnim";

declare global {
    interface KnitControllers {
        GameController: typeof GameController;
    }
}

const GameController = Knit.CreateController({
    Name: "GameController",
    GameCtorHelper: new GameCtorHelper(),

    KnitInit() {

    },

    KnitStart() {
        
    },
});

export = GameController;