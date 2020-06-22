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
      let url = `https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?active_sw='Y'&sport_code='mlb'&name_part="${this.state.search}`
  
      fetch(url)
      .then(data => data.json() )
      .then( json => {
          console.log(json)
         
              
          this.setState({output:json.results})
          console.log(this.state.output)
      })
  }
    
    render () {
        
    return (
      <div className="results">
        <h1>MLB Stats </h1>
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