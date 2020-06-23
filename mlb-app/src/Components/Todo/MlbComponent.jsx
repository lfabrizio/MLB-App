import React, {Component} from 'react'

class MlbComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: 'search',
            output: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
    }

    handleChange(event) {
        // console.log(event.target.value);
         this.setState(
             {
                 [event.target.name]: event.target.value
             })
     }

  

    buttonClick() {
		fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_pitching.bam?season='2017'&player_id='592789'&league_list_id='mlb'", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "mlb-data.p.rapidapi.com",
				"x-rapidapi-key": "2e0f109aefmsh15ae67f1ce52fa4p1ad83ejsn29fd1b7cd6b3"
			}
		})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
    //   let url = `https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?active_sw='Y'&sport_code='mlb'&name_part="${this.state.search}`
  
    //   fetch(url)
    //   .then(data => data.json() )
    //   .then( json => {
    //       console.log(json)
         
              
    //       this.setState({output:json.results})
    //       console.log(this.state.output)
      }
  
    
    render () {
        
    return (
      <div className="results">
		  
        <h1>MLB Projections 2020 </h1>
        <p>Enter Player: <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/></p>
        <button onClick={this.buttonClick}>Search</button>
       {
           this.state.output === '' ? <p> Stats</p> : 
           this.state.output.map((search_player_all) =>
           <div class="row">
           s
         </div>
           )
    }
      </div>
    );
  }
  }

  export default MlbComponent