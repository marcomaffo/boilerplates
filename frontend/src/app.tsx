import {Component} from 'react';
import {createRoot} from 'react-dom';
import {ThemeProvider} from "@chakra-ui/react"

class App extends Component {
  render() {
    return <ThemeProvider theme={{}}>
    <h1>Hello, world!</h1>
  </ThemeProvider>;
  }
}

const root = createRoot(document.getElementById('mainRenderComponent'));
root.render(<App />);
