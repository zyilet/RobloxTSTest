import { KnitClient as Knit } from "@rbxts/knit";
import { Component } from "@rbxts/knit"
import { GameRunner } from "./Game/GameRunner";

Knit.AddControllers(script.Parent!.FindFirstChild("Controllers") as Folder);
Component.Auto(script.Parent!.FindFirstChild("Components") as Folder);

Knit.Start()
    .andThen(() => {

        print("Clinet Started");

        //启动游戏
        new GameRunner().Run()
    })
    .catch(warn)