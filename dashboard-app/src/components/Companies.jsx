import React from "react";

class Compa extends React.Component{
render(){
    return(
        <div class ="row">
        <div class="col-sm-10" style={{width:400}}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Company:{this.props.name}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Product: {this.props.typeOfIndustrialPlant}</li>
            <li class="list-group-item">Number of workers: {this.props.numberOfWorkers}</li>
            <li class="list-group-item">Open time: {this.props.openTime}</li>
          </ul>
        </div>
        </div>
        </div>
    )
    }
}

export default class Companies extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            companies: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/api/industrialplants")
        .then((res)=>res.json())
        .then((json)=>{
        this.setState({
            companies: json,
        });
        })
    }
    render(){
        const {companies} = this.state;

        return(
            <div className='row'>
                {companies.map((company:any) => (
                <div className='col-sm'>
                <div className='test' style={{marginTop:'1em'}}>
                    <Compa className='col p-2' name={company.name} typeOfIndustrialPlant={company.typeOfIndustrialPlant} numberOfWorkers={company.numberOfWorkers}
                    openTime={company.openTime}/>
                    </div>
                </div>
                ))}
                </div>
        )
        }

}
