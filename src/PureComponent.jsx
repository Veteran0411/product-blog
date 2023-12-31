import React from "react";

class PureComponent extends React.Component {
    // shouldComponentUpdate(nextProps){
    //     if(this.props.name.length!=nextProps.name.length){
    //         console.log("called ");
    //         return true;
    //     }else return false;
    // }
    render() {
        return (
            <div>
                {console.log("called")}
                <h1>Unpure Component: {this.props.name}</h1>
            </div>
        )
    }
}
export default PureComponent;