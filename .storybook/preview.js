import { muiTheme } from 'storybook-addon-material-ui5';
import {bookCardTheme} from '../src/components/organisms/card/CardStyle';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: "700px",
  },
}
export const decorators = [
  muiTheme([bookCardTheme])
];


