import { KnitClient } from "@rbxts/knit";
import { RunService } from "@rbxts/services";

export class GameCtorHelper {

    private readonly _animCtor;
    private readonly _gameCtor;

    constructor() {
        this._animCtor = KnitClient.GetController("AnimationController");
        this._gameCtor = KnitClient.GetController("GameController");
    }

    public Init(){

    }

    public Run(){
        RunService.Heartbeat.Connect(dt=>this.Update(dt));
    }

    private Update(dt:number){

    }
}