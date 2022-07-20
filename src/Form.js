import { Component } from "react";



class Resultat extends Component {

  state = {
    name: "Mario",
    winner: false
  }
    changeStatus = () => this.setState({ winner: !this.state.winner })
  render() {
    const classColor = this.state.winner ? "alert-success" : "alert-danger";
    return(<div className="container py-4">
        <div className={`alert ${classColor}`} role="alert">
          {this.state.winner ? `Bravo ${this.state.name}` : 'Raté !'}
        </div>
        <button
        onClick={this.changeStatus}
        className="btn btn-primary"> Changer</button>
      </div>)
  }


}

export default Resultat;
