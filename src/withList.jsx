import React, { useState } from "react";

const withList = (WrappedComponent) => {
    return class EnchancedComponent extends React.Component {
        constructor(props){
            super(props);

            this.state={
                todo:[],
            }
        }
        addTodo=(todo)=>{
            this.setState({todo:[...this.state.todo,todo]})
        }
        render() {
            return (
                <div>
                    hello
                    <WrappedComponent addTodo={this.addTodo} todo={this.state.todo} />
                </div>
            )
        }
    }

}
export default withList;