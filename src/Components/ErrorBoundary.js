import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error, info)
    {
        this.setState({hasError:true});
    }
    
    render()
    {
        if(this.state.hasError)
        {
            return(
                <>
                <h1>Oops, failed to retrieve the data!</h1>
                <h2>Please try again later</h2>
                </>
            );
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;