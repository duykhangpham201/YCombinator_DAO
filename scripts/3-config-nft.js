import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xdE29406eE3b88CB1bDc40027cD8D447d5b27c981",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Crypto Ruby",
        description: "This NFT will give you access to YCDAO!",
        image: readFileSync("scripts/assets/ruby.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()