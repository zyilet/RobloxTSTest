/*
 * @Author: zyilet zhaoyims@outlook.com
 * @Date: 2023-10-30 11:41:12
 * @LastEditors: zyilet zhaoyims@outlook.com
 * @LastEditTime: 2023-10-30 14:43:41
 * @FilePath: \RobloxTSTest\src\client\Game\UI\BasePanel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";

export abstract class BasePanel {

    abstract Show(displayOrder: number): void;
    abstract Hide(): void;
    abstract Name(): string;

    protected PlayerGui() {
        return Players.LocalPlayer.WaitForChild("PlayerGui");
    }
}