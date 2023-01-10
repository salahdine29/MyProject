import React,{Component} from "react";
import './main.css';
import Test from "../PasswordF";

class App extends Component {
    constructor(){
        super();
        this.state = {comp:0}
    }
    inc = () => {
        this.setState({comp:this.state.comp+1})
    }
    decrementer(){
        this.setState({comp:this.state.comp-1})
    }
    render() { 
        return (
            <div style={{display: "flex",alignItems: "center",justifyContent: "center",height: "100vh",}}>
                <button onClick={this.inc}>+</button>
                <span>{this.state.comp}</span>
                <button onClick={()=>this.decrementer()}>-</button>
            </div>
        );
    }
}
 
export default App;