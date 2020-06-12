import React from 'react';

function Message(props){
    return(
        <div>
             <h3>Value of Sum counter is : {props.count} </h3>
             <h3>Value of Sub counter is : {props.sub_count} </h3>
        </div>
    )
}
export default Message;