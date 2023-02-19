import { cssWrapper } from './style';

const Comp2 = (props) => {
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {props.lastNumber}*</div>
    </>
  )
}

export default Comp2;