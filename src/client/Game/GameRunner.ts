/*
 * @Author: zyilet zhaoyims@outlook.com
 * @Date: 2023-10-27 10:58:30
 * @LastEditors: zyilet zhaoyims@outlook.com
 * @LastEditTime: 2023-10-30 16:39:11
 * @FilePath: \RobloxTSTest\src\client\Game\GameRunner.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { KnitClient, Timer } from "@rbxts/knit";
import { Players, RunService } from "@rbxts/services";
import { EDefaultAnim } from "shared/EDefaultAnim";
import { UIManager } from "./UI/UIManager";
import { MainPanel } from "./UI/MainPanel";

export class GameRunner {

    private readonly _animationCtor = KnitClient.GetController("AnimationController");
    private readonly _inputCtor = KnitClient.GetController("InputController");

    public async Run() {
        print("Game Run")

        const uiManager = new UIManager();
        uiManager.Show(MainPanel);
    }
}