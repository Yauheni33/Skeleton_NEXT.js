module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "styled-jsx/babel",
      { plugins: [
        ["styled-jsx-plugin-sass", {
          sassOptions: {
            data: `@import "${__dirname}/src/styles/index";`,
          }
        }],
        ["styled-jsx-plugin-postcss", {
          postcssLoaderOptions: {
            autoprefixer: true,
          }
        }]
      ]}
    ]
  ]
}
