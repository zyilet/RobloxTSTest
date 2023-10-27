// 动画控制器
import { KnitClient as Knit } from "@rbxts/knit"
import { AnimationControllerHelper } from "client/Helper/AnimationCtorHelper";
import { EDefaultAnim } from "shared/EDefaultAnim";

declare global {
    interface KnitControllers {
        AnimationController: typeof AnimationController
    }
}

const AnimationController = Knit.CreateController({

    Name: "AnimationController",
    Helper: new AnimationControllerHelper(),

    //初始化依赖
    KnitInit() {

        this.Helper.WaitInit()
    },
    KnitStart() {

    },

    //替换默认动画
    ReplaceDefaultAnim(animType: EDefaultAnim, animId: string) {

        this.Helper.ReplaceDefaultAnim(animType, animId);
    },

    //播放动画
    Play(animId: string) {
        this.Helper.Play(animId);
    },

    Stop(animId: string) {
        this.Helper.Stop(animId);
    },

    IsPlaying(animId: string) {
        print(animId)
        return this.Helper.IsPlaying(animId);
    }
});

export = AnimationController;