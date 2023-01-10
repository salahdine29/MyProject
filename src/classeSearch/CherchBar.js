import React,{Component} from "react";

export default class App extends Component{

    
    handleBtn = e =>{
        e.preventDefault();
        this.props.filter(e.target.search.value);
        console.log(this.state.info)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleBtn}>
                    <input type="text"  name="search" />
                    <button type="submit">chercher</button>
                </form>
            </div>
        )
    }
}