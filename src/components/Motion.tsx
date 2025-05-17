import React, { forwardRef } from 'react';

// Motion component without actual animation to keep file small
// This is a placeholder that would be replaced with actual framer-motion in a real project
export const motion = {
  div: forwardRef((props, ref) => <div ref={ref} {...props} />),
  a: forwardRef((props, ref) => <a ref={ref} {...props} />),
  p: forwardRef((props, ref) => <p ref={ref} {...props} />),
  h2: forwardRef((props, ref) => <h2 ref={ref} {...props} />),
  li: forwardRef((props, ref) => <li ref={ref} {...props} />),
};

// Add animation functions for simple illustration
motion.div.defaultProps = {
  initial: {},
  animate: {},
  whileHover: {},
  whileTap: {},
  whileInView: {},
  transition: {},
  viewport: {}
};

motion.a.defaultProps = motion.div.defaultProps;
motion.p.defaultProps = motion.div.defaultProps;
motion.h2.defaultProps = motion.div.defaultProps;
motion.li.defaultProps = motion.div.defaultProps;