import React from 'react';


class User extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count : 0,
      }
    };
    
     increment = () => this.setState({ count : this.state.count + 1});

     decrement = () => this.setState({ count : this.state.count - 1});

     reset = () => this.setState({ count : this.state.count = 0}); 
    
    render() {
      return (
       <> 
      <p>count : {this.state.count}</p>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.reset}>reset</button>
      </>
      )
    }
  };

export default User;
