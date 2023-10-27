import { EDefaultAnim } from "shared/EDefaultAnim"
import { Players } from "@rbxts/services"

export class AnimationControllerHelper {

    private _localPlayer: Player | undefined = undefined
    private _character: Model | undefined = undefined
    private _humanoid: Humanoid | undefined = undefined
    private _animator: Animator | undefined = undefined
    private _animate: LocalScript | undefined = undefined

    private _animTrackCache = new Map<string, AnimationTrack>()
    private _defaultAnimCache = new Map<EDefaultAnim, Animation>()

    public constructor() {

    }

    //等待所有组件下载完成
    public WaitInit() {

        this._localPlayer = Players.LocalPlayer
        this._character = this._localPlayer.CharacterAdded.Wait() as unknown as Model
        this._humanoid = this._character.WaitForChild("Humanoid") as Humanoid
        this._animator = this._humanoid.WaitForChild("Animator") as Animator
        this._animate = this._character.WaitForChild("Animate") as LocalScript
    }

    //替换默认动画
    public ReplaceDefaultAnim(animType: EDefaultAnim, animId: string) {

        this.GetDefaultAnimation(animType)!.AnimationId = this.ConvertId(animId);
    }

    public Play(animId: string) {
        const anim = new Instance("Animation");
        anim.AnimationId = this.ConvertId(animId);

        const animTrack = this._animator!.LoadAnimation(anim);
        this._animTrackCache.set(animId, animTrack);
        animTrack.Play()
        print("play" + animId);
    }

    public Stop(animId: string) {
        if (!this._animTrackCache.has(animId)) {
            return;
        }

        let track = this._animTrackCache.get(animId);
        track!.Stop();
    }

    public IsPlaying(animId: string) {
        print("检查是否存在对象"+animId)
        if (!this._animTrackCache.has(animId)) {
            print("不存在")
            return false;
        }
        print("存在")

        let track = this._animTrackCache.get(animId);
        return track!.IsPlaying;
    }



    //根据动画类型获取默认动画的Animation对象
    private GetDefaultAnimation(animType: EDefaultAnim) {

        if (animType === EDefaultAnim.Run) {
            return this._animate?.WaitForChild("run").WaitForChild("RunAnim") as Animation;
        }

        if (animType === EDefaultAnim.Idel1) {

        }
    }

    private ConvertId(animId: string) {
        return `rbxassetid://${animId}`;
    }
}