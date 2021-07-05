import preact, { h } from 'preact';
import classnames from 'classnames';
import { compact } from './Functions';
import { css as emotion } from '@emotion/css';

export const transformProps = ({ css, className, ...rest}) => {
  if (!css) {
    return {
      className,
      ...rest,
    };
  }
  let _css;
  if (Array.isArray(css)) {
    const compactCss = compact(css);
    if (compactCss.length === 0) {
      return {
        className,
        ...rest,
      };
    }
    _css = Object.assign({}, ...compactCss);
  } else {
    _css = css || {};
  }
  const cxName = classnames(emotion(_css), className);
  return {
    className: cxName,
    ...rest,
  };
};

(window as any).cssTransform = (tag, originalProps, ...children) => {
  let props;
  if (!originalProps) {
    props = originalProps;
  } else {
    props = transformProps(originalProps);
  }

  return h(tag, props, ...children);
};
