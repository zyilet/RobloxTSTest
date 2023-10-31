/*
 * @Author: zyilet zhaoyims@outlook.com
 * @Date: 2023-10-30 09:28:34
 * @LastEditors: zyilet zhaoyims@outlook.com
 * @LastEditTime: 2023-10-30 12:56:34
 * @FilePath: \RobloxTSTest\src\client\Controllers\UIController.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { KnitClient as Knit } from "@rbxts/knit";
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
// import { MainPanel } from "client/Game/UI/MainPanel";

declare global {
    interface KnitControllers {
        UIController: typeof UIController;
    }
}

let Tree: any;

const UIController = Knit.CreateController({
    Name: "UIController",

    KnitInit() {
    },

    KnitStart() {
    },

    async Show() {
        // const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");
        // Tree = Roact.mount(Roact.createElement(MainPanel), playerGui, "测试UI")

        // await Promise.delay(5);
        // print("销毁UI")
        // Roact.unmount(Tree);
    },

    Hide() {
        Roact.unmount(Tree)
    }


});

export = UIController;