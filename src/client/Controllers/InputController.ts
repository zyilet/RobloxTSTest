import { KnitClient as Knit } from "@rbxts/knit";
import { RunService, UserInputService } from "@rbxts/services";

declare global {
    interface KnitControllers {
        InputController: typeof InputController;
    }
}

enum EInputStatus {
    None,
    Down,
    Hold,
    Up,
}

const InputController = Knit.CreateController({
    Name: "InputController",
    PreKeyStatus: new Map<Enum.UserInputType, EInputStatus>(),
    CurKeyStatus: new Map<Enum.UserInputType, EInputStatus>(),

    KnitInit() {

        UserInputService.InputBegan.Connect((inputObject, ProcessedEvent) => {
            this.CurKeyStatus.set(inputObject.UserInputType, EInputStatus.Down);
        });

        UserInputService.InputEnded.Connect((inputObject, ProcessedEvent) => {
            this.CurKeyStatus.set(inputObject.UserInputType, EInputStatus.Up);
        });

        RunService.Heartbeat.Connect(dt => {
            this.PreKeyStatus.forEach((v, k) => {
                if (v === EInputStatus.Down) {
                    this.CurKeyStatus.set(k, EInputStatus.Hold);
                }
                if (v === EInputStatus.Up) {
                    this.CurKeyStatus.set(k, EInputStatus.None);
                }
            })

            this.PreKeyStatus = this.CurKeyStatus;
        });
    },

    KnitStart() {

    },

    KeyDown(key: Enum.UserInputType) {
        if (this.CurKeyStatus.has(key)) {
            return this.CurKeyStatus.get(key) === EInputStatus.Down;
        }
        return false;
    },

    KeyHold(key: Enum.UserInputType) {
        if (this.CurKeyStatus.has(key)) {
            return this.CurKeyStatus.get(key) === EInputStatus.Hold;
        }
        return false;
    },

    KeyUp(key: Enum.UserInputType) {
        if (this.CurKeyStatus.has(key)) {
            return this.CurKeyStatus.get(key) === EInputStatus.Up;
        }
        return false;
    },

    KeyNone(key: Enum.UserInputType) {
        if (this.CurKeyStatus.has(key)) {
            return this.CurKeyStatus.get(key) === EInputStatus.None;
        }
        return false;
    },
});

export = InputController;