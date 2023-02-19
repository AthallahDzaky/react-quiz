import { keyframes } from 'emotion';
import { cssSpace, cssSun, cssOrbit, cssPlanet } from './style';

const spin = keyframes`
100% {
  transform: rotate(360deg)
}
`;

const Solar = (props) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
      {props.listOfPlanet.map((item, index) => (
        <div className={cssOrbit} style={{animation: `${spin} ${(index + 1 * 2 )}s linear infinite`}}>
          <div className={cssPlanet()} style={{top: `${(index + 1) * 50}px`,backgroundColor: item}} />
        </div>
      ))}
      </div>
    </div>
  )
};

export default Solar;
