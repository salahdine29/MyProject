import React,{Component} from "react";
import CherchBar from './CherchBar';
import Result from './Result';


const list=[
    {id:1,nom:"banane",type:"fruit"},
    {id:2,nom:"orange",type:"fruit"},
    {id:3,nom:"pomme",type:"fruit"},
    {id:4,nom:"kiwi",type:"fruit"},
    {id:5,nom:"tomate",type:"legume"},
    {id:6,nom:"carotte",type:"legume"},
    {id:7,nom:"pomme de terre",type:"legume"},
    {id:8,nom:"navet",type:"legume"},
]

export default class App extends Component{
    constructor(){
        super();
        this.state ={data:list}
    }

    filter=(cat)=>{
        const newItem =  list.filter((l)=>l.type === cat);
        this.setState({data:newItem});
    }

    render(){
        return(
            <div>
                <CherchBar filter={this.filter} />
                <Result data={this.state.data} />
            </div>
        )
    }
}