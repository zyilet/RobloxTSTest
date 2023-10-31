/*
 * @Author: zyilet zhaoyims@outlook.com
 * @Date: 2023-10-30 10:42:09
 * @LastEditors: zyilet zhaoyims@outlook.com
 * @LastEditTime: 2023-10-30 17:04:23
 * @FilePath: \RobloxTSTest\src\client\Game\UI\MainPanel.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { BasePanel } from "./BasePanel";

interface MainPanelProps {
    displayOrder: number,
    onClick: () => void,
}

class MainPanelComponent extends Roact.Component<MainPanelProps> {

    public render(): Roact.Element | undefined {
        return (
            <screengui
                DisplayOrder={this.props.displayOrder}
            >
                <frame
                    Size={new UDim2(0.25, 0, 0.33, 0)}
                    AnchorPoint={new Vector2(0, 0.5)}
                    Position={new UDim2(0, 0, 0.5, 0)}
                    BorderSizePixel={0}
                >
                    <uilistlayout
                        VerticalAlignment={Enum.VerticalAlignment.Top}
                    />
                    <frame>
                        <uilistlayout
                            HorizontalAlignment={Enum.HorizontalAlignment.Left}
                        />
                        <imagebutton
                            Size={new UDim2(0, 50, 0, 50)}
                            Image={"rbxassetid://12647790175"}
                        />
                        <imagebutton
                            Size={new UDim2(0, 50, 0, 50)}
                            Image={"rbxassetid://12647790175"}
                        />
                    </frame>
                </frame>
            </screengui>
        )
    }
}

export class MainPanel extends BasePanel {

    private _uiHandle: Roact.Tree | undefined = undefined

    Name(): string {
        return "MainPanel"
    }

    Show(displayOrder: number): void {

        const element = <MainPanelComponent onClick={this.OnClick()} displayOrder={displayOrder} />
        const playerGui = this.PlayerGui();
        this._uiHandle = Roact.mount(element, playerGui, "MainPanel")
    }
    Hide(): void {
        Roact.unmount(this._uiHandle!);
    }

    private OnClick() {
        return () => {
            print("点击按钮")
        }
    }
}