let { getPrefs } = await import("../utils.js");
let kitPrefs = await getPrefs();
let selectedSetting = await arg("Which setting");
let value = await arg("Set to what?");
kitPrefs.data[selectedSetting] = value;
await kitPrefs.write();
export {};