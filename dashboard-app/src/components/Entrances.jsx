import React from "react";


class Entre extends React.Component{
render(){
    return(
        <div class ="row" >
        <div class="col-sm-10" style={{width:400}}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Place: {this.props.place}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Number of people in queue: {this.props.isQueue}</li>
          </ul>
        </div>
        </div>

        </div>
    )
    }
}

export default class Entrances extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            entrances: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/api/entrance")
        .then((res)=>res.json())
        .then((json)=>{
        this.setState({
            entrances: json,
        });
        })
    }
    render(){
        const {entrances} = this.state;

        return(
            <div className='row'>
                {entrances.map((entrance:any) => (
                <div className='col-sm'>
                <div className='test' style={{marginTop:'1em'}}>
                    <Entre className='col p-2' isQueue={entrance.isQueue} place={entrance.place}/>
                    </div>
                </div>
                ))}
                </div>
        )
        }

}
