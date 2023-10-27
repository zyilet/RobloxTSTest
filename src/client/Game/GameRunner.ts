import { KnitClient } from "@rbxts/knit";
import { Players, RunService } from "@rbxts/services";
import { EDefaultAnim } from "shared/EDefaultAnim";

export class GameRunner {

    private readonly _animationCtor = KnitClient.GetController("AnimationController");
    private readonly _inputCtor = KnitClient.GetController("InputController");

    public Run() {
        print("Game Run")
    }
}