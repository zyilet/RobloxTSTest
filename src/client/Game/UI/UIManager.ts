/*
 * @Author: zyilet zhaoyims@outlook.com
 * @Date: 2023-10-30 11:40:27
 * @LastEditors: zyilet zhaoyims@outlook.com
 * @LastEditTime: 2023-10-31 08:56:11
 * @FilePath: \RobloxTSTest\src\client\Game\UI\UIManager.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Players } from "@rbxts/services";
import { BasePanel } from "./BasePanel";
import Roact from "@rbxts/roact";
import { MainPanel } from "./MainPanel";

export class UIManager {

    private _panelStack: Array<BasePanel> = new Array<BasePanel>();
    private _panelsCache: Map<string, BasePanel> = new Map<string, BasePanel>();

    private _index = 0;
    /**
     * @description: 显示页面，入栈
     * @return {void}
     */
    public Show<TPanel extends BasePanel>(panel: { new(): TPanel }) {
        const panelInstance = new panel(); 
        this._panelStack = [...this._panelStack, panelInstance];
        panelInstance.Show(this._panelStack.size());
    }

    /**
     * @description: 隐藏当前栈顶页面，出栈 
     * @return {void}
     */
    public Hide() {
        if(this._panelStack.size() <= 0){
            return;
        }
        const panelInstance = this._panelStack.pop();
        panelInstance!.Hide();
    }

    private Push<BasePanel>() {

    }

    private Pop<BasePanel>() {

    }
}