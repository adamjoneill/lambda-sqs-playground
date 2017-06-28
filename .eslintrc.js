module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js"]
    }],
    "class-methods-use-this": 0,
    "no-console": "error"
  }
};