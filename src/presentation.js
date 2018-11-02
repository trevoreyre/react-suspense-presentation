// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide'

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const codeSample1 = `
const Example = () => (
  <Fragment>
    <h1>Hello World!</h1>
    <p>This is an example component. Let's see if it works yeah?</p>
  </Fragment>
)

export default Example
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        progress={null}
        theme={theme}
      >

        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          lang="jsx"
          code={codeSample1}
          ranges={[
            { loc: [1, 2] },
            { loc: [2, 6] }
          ]}
        />

      </Deck>
    );
  }
}
