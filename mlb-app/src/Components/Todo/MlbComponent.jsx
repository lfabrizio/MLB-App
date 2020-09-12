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
 
      }
  
    
    render () {
        
    return (
      <div className="results">
		  <div class="ball"></div>
        <h1>MLB Stats 2020 Season </h1>
        <p>Enter Player: <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/></p>
        <button onClick={this.buttonClick}>Search</button>
       {
           this.state.output === '' ? <p> Statistics through 9/12/2020</p> : 
           this.state.output.map((search_player_all) =>
           <div class="row">
           {/* // finish  solo learn tutorial and test, learn hash tables
           // set up mysql add tables, algorithm, and front end  */}
         </div>
           )
    }
      </div>
      
        
      
      
    );
  }
  }

  export default MlbComponent