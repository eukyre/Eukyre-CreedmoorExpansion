import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

export class epicItemClass {

    private Instance: WTTInstanceManager = new WTTInstanceManager();

    public preSptLoad(Instance: WTTInstanceManager): void {
        this.Instance = Instance;
    }

    public postDBLoad(): void {

        this.epicEdits();
    }

    public epicEdits(): void {
        const db: IDatabaseTables = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            if (fileData._id === "5d25a6538abbc306c62e630d") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a4a98abbc30b917421a4") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a7b88abbc3054f3e60bc") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5ce69cbad7f00c00b61c5098") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25a6a48abbc306c62e6310") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5d25af8f8abbc3055079fec5") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5cf12a15d7f00c05464b293f") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfeaa0f0db834001b734927") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5bfea7ad0db834001c38f1ee") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to M700 Mags
            if (fileData._id === "5df8f535bb49d91fb446d6b0") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5df8f541c41b2312ea3335e3") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5a3501acc4a282000d72293a") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c38fc460e50a509cb25") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "65293c7a17e14363030ad308") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "6761770e48fa5c377e06fc3c") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("683246a74073e586d112af9f",
                    "68325a63730b17c69ee176eb",
                    "6833baea86387d71b68abd6f",
                    "6833bae4baa31474639bea7d",
                    "6833ba38a1c9ff155c04e56f",
                    "6833b8cb54aa764b2deefdfe",
                    "6834e6f28f5570aec23ca0c2",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to SR-25 Mags
            if (fileData._id === "5888988e24597752fe43a6fa") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1");
            } //Pushing 6.5x48mm to DVL-10 Mags
            if (fileData._id === "588892092459774ac91d4b11") {
                fileData._props.Chambers = [
                    {
                        "_name": "patron_in_weapon",
                        "_id": "588892092459774ac91d4b18",
                        "_parent": "588892092459774ac91d4b11",
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5a6086ea4f39f99cd479502f",
                                        "5a608bf24f39f98ffc77720e",
                                        "58dd3ad986f77403051cba8f",
                                        "5e023e53d4353e3302577c4c",
                                        "5efb0c1bd79ff02a1f5e68d9",
                                        "5e023e6e34d52a55c3304f71",
                                        "5e023e88277cce2b522ff2b1",
                                        "6768c25aa7b238f14a08d3f6",
                                        "6888f7c68c110666da6ba8ed",
                                        "6888f8076aafdbe26850afdb",
                                        "6888f89eaad6719189f5c85a",
                                        "6888f9496b33a53248fb345c",
                                        "68a34c89101752a9e84636a1"
                                    ]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571",
                    }
                ];
            } //Adding the Multi-Caliber Support to the DVL-10
            if (fileData._id === "5888956924597752983e182d") {
                fileData._props.ConflictingItems = [
                    "6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1"
                ];
            } //Adjusting Conflicts with the DVL Urbana to not allow 6.5.
            if (fileData._id === "5888945a2459774bf43ba385") {
                fileData._props.ConflictingItems = [
                    "6888f7c68c110666da6ba8ed",
                    "6888f8076aafdbe26850afdb",
                    "6888f89eaad6719189f5c85a",
                    "6888f9496b33a53248fb345c",
                    "68a34c89101752a9e84636a1"
                ];
            } //Adjusting Conflicts with the DVL Saboteur to not allow 6.5.
        }
    }


}
