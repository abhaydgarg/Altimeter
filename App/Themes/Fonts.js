import normalize from '../Lib/normalizeText';

const type = {
  base: 'Merriweather-Regular',
  bold: 'Merriweather-Bold',
  emphasis: 'Merriweather-Italic',
  numeric: 'StardosStencil-Regular',
  numericBold: 'StardosStencil-Bold'
};

const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(26),
  h5: normalize(20),
  h6: normalize(19),
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(12),
  tiny: normalize(8.5)
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  numeric: {
    fontFamily: type.numeric,
    fontSize: size.regular
  },
  numericBold: {
    fontFamily: type.numericBold,
    fontSize: size.regular
  }
};

export default {
  type,
  size,
  style
};
