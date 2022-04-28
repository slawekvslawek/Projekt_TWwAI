import React from "react";

class Ware extends React.Component{
render(){
    return(
        <div class ="row">
        <div class="col-sm-10" style={{width:400}}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Company:{this.props.business}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Product: {this.props.whatIsInside}</li>
            <li class="list-group-item">Someone inside: {this.props.isSomeOneInside}</li>
            <li class="list-group-item">Packing or unpacking: {this.props.packingOrUnpacking}</li>
            <li class="list-group-item">Open time: {this.props.openTime}</li>
            <li class="list-group-item">Air quality: {this.props.airQuality}</li>
          </ul>
        </div>
        </div>
        </div>
    )
    }
}

export default class Warehouses extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            warehouses: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/api/warehouses")
        .then((res)=>res.json())
        .then((json)=>{
        this.setState({
            warehouses: json,
        });
        })
    }
    render(){
        const {warehouses} = this.state;

        return(
            <div className='row'>
                {warehouses.map((warehouse:any) => (
                <div className='col-sm'>
                <div className='test' style={{marginTop:'1em'}}>
                    <Ware className='col p-2' whatIsInside={warehouse.whatIsInside} business={warehouse.business} isSomeOneInside={warehouse.isSomeOneInside}
                    packingOrUnpacking={warehouse.packingOrUnpacking} openTime={warehouse.openTime} airQuality={warehouse.airQuality}/>
                    </div>
                </div>
                ))}
                </div>
        )
        }

}
