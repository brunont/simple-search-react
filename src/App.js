import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
  
  
class App extends Component {


  constructor() {
    super();
    this.state = {
      procurar: [],
      Title: [],
      Poster:[],
      Year: [],
      resultado: []
    };
  }

  onChange = (event) => {
    this.setState({procurar: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${this.state.procurar}`;
    fetch(url).then(data => { 
      return data.json(); 
    }).then(result => {
      let show = result.data.map((title) => {

        return(
          <div key={title.data} class="col-md-3">
            <img src={title.Poster} heith="100" width="100" alt={this.state.procurar} />
            <br/><br/>
            <p>{title.Title}</p>
            <small>{title.Year}</small>
            <br/><br/><br/>
          </div>
        )
      })
      this.setState({resultado: show });
    })
}
  


  render() {
  
    return (
        <div className="App">
          <header className="App-header">
          <h1 className="App-title">Aplicação feita em</h1>        
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <body>
           <form onSubmit={this.handleSubmit}>
            <div class="row">            
            <h1 className="App-intro">Pesquise o filme desejado abaixo</h1>
            
                <div class="col-md-12 ">
                <label>Nome</label>
                <div class="input-group">
                 <input type="text" class="form-control" value={this.state.procurar} onChange={this.onChange} />
                 <span class="input-group-btn">
                  <button class="btn btn-primary" type="submit" >
                    <i class="glyphicon glyphicon-search"></i><span> Pesquisar</span>   
                  </button>
                  </span>
                  </div>
                </div>                  
            </div>
           </form>
           <hr/>
          <div>
            {this.state.resultado}
          </div>                
          </body>
      </div>
    );
  }
}

export default App;
