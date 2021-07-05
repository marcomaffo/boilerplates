import { Component } from 'preact';
import { CSSObject } from './Helpers/CSSObject';

export default class MainComponent extends Component {

  render() {
    return (
      <div css={style.mainWrapper}>
      </div>
    );
  }
}

const style: CSSObject = {
  mainWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}