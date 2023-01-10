import React,{Component} from "react";

export default class App extends Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.data.map((d)=>{
                        return (
                            <li key={d.id}>{d.nom}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}