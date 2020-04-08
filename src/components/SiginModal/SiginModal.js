import React from 'react';
import './SiginModal.css'


const SiginModal = (props) => {

    return (
        <div className={props.visibility}>
            <div className="siginModal__content">
                <h4>{props.headerH4}</h4>
                <input
                    type='text'
                    name="SigInLogin"
                    value={props.loginValue}
                    onChange={props.onChange}
                >
                </input>
                <h4>{props.passwordH4}</h4>
                <input
                    type='text'
                    name="SigInPassword"
                    value={props.passwordValue}
                    onChange={props.onChange}
                >
                </input>
            </div>
        </div>
    )
}

export default SiginModal

// const ModalModalExample = () => (
//   <Modal trigger={<Button>Show Modal</Button>}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

