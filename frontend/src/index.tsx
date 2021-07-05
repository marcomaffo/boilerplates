import "preact/debug";
import "preact/devtools";

import {render} from 'preact';
import MainComponent from './MainComponent';
require('./Helpers/CSSTransform');  

render(<MainComponent />, (document.getElementById('mainRenderComponent') as HTMLElement));
