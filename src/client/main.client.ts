import { KnitClient as Knit } from "@rbxts/knit";
import { Component } from "@rbxts/knit"

Knit.AddControllers(script.Parent!.FindFirstChild("Controllers") as Folder);
Component.Auto(script.Parent!.FindFirstChild("Components") as Folder);

Knit.Start()
    .andThen(() => {
        print("Clinet Started");
    })
    .catch(warn)