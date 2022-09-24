module.exports = [
  // {
  //   name: "@electron-forge/maker-squirrel",
  //   config: {
  //     name: "react_electron",
  //   },
  // },
  {
    name: "@electron-forge/maker-zip",
    platforms: ["darwin"],
  },
  {
    name: "@electron-forge/maker-deb",
    config: {},
  },
  {
    name: "@electron-forge/maker-rpm",
    config: {},
  },
  // {
  //   name: "@electron-forge/maker-wix",
  //   config: {},
  // },
];
