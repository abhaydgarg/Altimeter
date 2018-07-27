import normalize from '../Lib/normalizeText';

const type = {
  iceberg: 'Iceberg-Regular',
  iceland: 'Iceland-Regular',
  regular: 'Ubuntu-Regular',
  medium: 'Ubuntu-Medium',
  bold: 'Ubuntu-Bold'
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
  xsmall: normalize(10),
  tiny: normalize(8.5)
};

function normalizeText (size) {
  return normalize(size);
}

export default {
  type,
  size,
  normalizeText
};
