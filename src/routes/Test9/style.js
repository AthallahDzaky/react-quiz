import { css } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

export const cssOrbit = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
})

export const cssPlanet = () => css({
  position: 'absolute',
  width: 20,
  height: 20,
  margin: 10,
  marginRight:200,
  borderRadius: 10,
  backgroundColor: 'red',
});
