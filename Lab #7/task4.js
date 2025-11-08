const softwareHouses = ["PardazSoft", "CodeKaar", "ToseDev", "ByteSaz", "AppSazan"];
console.log("Start:", softwareHouses);

// 1) remove first
softwareHouses.shift();
console.log("After shift:", softwareHouses);

// 2) middle replace
const len = softwareHouses.length;
const midIndex = Math.floor(len / 2);
softwareHouses.splice(midIndex, 1, "NarmahStack");
console.log("After middle replace:", softwareHouses);

// 3) add at end
softwareHouses.push("AbrSazan");
console.log("After push:", softwareHouses);
