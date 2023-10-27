import { KnitClient } from "@rbxts/knit";
import { EDefaultAnim } from "shared/EDefaultAnim";


export class GameRunner {

    private readonly _animCtor = KnitClient.GetController("AnimationController");

    public Run() {
        print("Game Run")

        this._animCtor.ReplaceDefaultAnim(EDefaultAnim.Run, "15164517467");
    }
}