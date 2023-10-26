import { KnitServer as knit } from "@rbxts/knit";
import { Component } from "@rbxts/knit";

knit.AddServices(script.Parent!.FindFirstChild('Services') as Folder)
Component.Auto(script.Parent!.FindFirstChild("Components") as Folder)

knit.Start()
    .andThen(() => {
        print("Server Start")
    })
    .catch(warn)