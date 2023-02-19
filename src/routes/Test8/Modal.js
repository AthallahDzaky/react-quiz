import { cssModal } from "./style"

const Modal = (props) => {
  return (
    <div
      className={cssModal}
      // style={props.showingModal ? (
      //   'display:block'
      // ) : (
      //   'display:none'
      // )}
    >
      Name: {props.personData.name}
      <br/>
      Age: {props.personData.age}
      <br/>
      Address: {props.personData.address}
      <br/>
      <button>Reset</button>
    </div>
  );
};

export default Modal;
