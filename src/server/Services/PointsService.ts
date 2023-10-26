import { RemoteProperty, RemoteSignal, Signal, KnitServer as knit } from "@rbxts/knit";
import { Player } from "@rbxts/knit/Knit/KnitClient";
import { Players } from "@rbxts/services";

declare global {
    interface KnitServices {
        PointsService: typeof PointsService;
    }
}

const PointsService = knit.CreateService({

    Name: "PointsService",

    PointsPerPlayer: new Map<Player, number>(),
    PointsChanged: new Signal<(player: Player, points: number) => void>(),

    Client: {
        PointsChanged: new RemoteSignal<(points: number) => void>(),
        GiveMePoints: new RemoteSignal<() => void>(),

        MostPoints: new RemoteProperty(0),

        GetPoints(player: Player) {
            return this.Server.GetPoints(player);
        }
    },

    AddPoints(player: Player, amount: number) {
        let points = this.GetPoints(player);
        points += amount;
        this.PointsPerPlayer.set(player, points);
        if (amount !== 0) {
            this.PointsChanged.Fire(player, points);
            this.Client.PointsChanged.Fire(player, points);
        }
        if (points > this.Client.MostPoints.Get()) {
            this.Client.MostPoints.Set(points)
        }
    },

    GetPoints(player: Player) {
        const points = this.PointsPerPlayer.get(player);
        return points ?? 0;
    },

    KnitInit() {
        const rng = new Random();

        this.Client.GiveMePoints.Connect(player => {
            const points = rng.NextInteger(0, 10);
            this.AddPoints(player, points);
            print(`Gave ${player.Name} ${points} points`);
        })

        Players.PlayerRemoving.Connect(player => {
            this.PointsPerPlayer.delete(player)
        })
    }
});

export = PointsService

