import { Component } from 'react';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';


class Toasts extends Component {

    render(){
        return(
            setTimeout(() => {
                toast({
                    type: 'warning',
                    icon: 'envelope',
                    title: 'Warning Toast',
                    description: 'This is a Semantic UI toast wich waits 5 seconds before closing',
                    animation: 'bounce',
                    time: 5000,
                    onClose: () => alert('you close this toast'),
                    onClick: () => alert('you click on the toast'),
                    onDismiss: () => alert('you have dismissed this toast')
                });
            }, 5000)
        )
    }
}

export default Toasts;
