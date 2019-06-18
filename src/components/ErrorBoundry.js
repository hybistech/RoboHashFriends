import React from 'react'

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }
    
    render(){
      return this.state.hasError ?  <h1>Oh no. That is not good</h1> : this.props.children
    } 

    // render(){
    //     if(this.state.hasError){
    //         return <h1>Oh no. That is not good</h1>
    //     }
    //     return this.props.children
    // }
}

export default ErrorBoundry;