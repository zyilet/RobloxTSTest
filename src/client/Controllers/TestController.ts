import { KnitClient as knit } from "@rbxts/knit"

declare global {
    interface KnitControllers {
        TestController: typeof TestController;
    }
}

const TestController = knit.CreateController({
    Name: "TestController",

    KnitInit() {

    },

    KnitStart() {

        const PointService = knit.GetService("PointsService");

        function PointsChanged(points: number) {
            print("My points:", points);
        }

        const initialPoints = PointService.GetPoints();
        PointsChanged(initialPoints);
        PointService.PointsChanged.Connect(PointsChanged)

        PointService.GiveMePoints.Fire();

        let mostPoints = PointService.MostPoints.Get();

        PointService.MostPoints.Changed.Connect(newValue => {
            mostPoints = newValue;
        })

        // Advanced example, using promises to get points:
        PointService.GetPointsPromise().then(points => {
            print("Got points:", points);
        });
    },
});