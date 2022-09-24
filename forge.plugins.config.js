module.exports = [
  [
    "@electron-forge/plugin-webpack",
    {
      devContentSecurityPolicy:
        "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;",
      mainConfig: "./webpack.main.config.js",
      renderer: {
        config: "./webpack.renderer.config.js",
        entryPoints: [
          {
            html: "./public/index.html",
            js: "./public/renderer.js",
            name: "main_window",
            preload: {
              js: "./public/preload.js",
            },
          },
        ],
      },
    },
  ],
];
