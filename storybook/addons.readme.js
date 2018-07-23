import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

/**
 * [?] WHY RENAMED THIS FILE?
 *
 * Because Storybook module loader gives an error with
 * "babel-preset-react-native": "^5". If change version to
 * 4 then works fine for Storybook but RN module loader
 * gives an error. It is not wise to change "babel-preset-react-native"
 * version to 4 just to run Storybook in browser. Therefore,
 * "addons.js" file is renamed to avoid including it by storybook
 * module loader.
 *
 */
