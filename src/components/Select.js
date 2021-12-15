import { Component } from "react";

class Select extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            showData: false
        }
    }
    componentDidMount(){
        fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    data
                })
            })
    }
    handleDisplayData=(e)=>{
        this.setState({
            showData: e.target.checked
        })
    }

    render(){
        let dataToRender = this.state.data.map((item, index)=>{
            return (
                <div key={index}>
                    <div>Name: {item.title}</div>
                </div>
            )
        });
        
        return(
            <div>
                <h2>Show Hide</h2>
                
                <div>Show<input type="checkbox" onChange={this.handleDisplayData} checked={this.state.showData} /></div>
                
                {this.state.showData && dataToRender }

            </div>
        ) 
    }
}
  
export default Select;