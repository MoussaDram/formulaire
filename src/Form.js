import { Component } from "react";
import Btn from './CustomButton'



class Resultat extends Component {

  state = {
    name: "Mario",
    winner: false
  }
    changeStatus = () => this.setState({ winner: !this.state.winner })
  render() {
    const success = {
      backgroundColor: 'green',
      color          : 'black',
    }

    const danger = {
      backgroundColor: 'red',
      color: 'white',
    }

    const classColor = this.state.winner ? "alert-success" : "alert-danger";
    return(<div className="container py-4">
        <div className={`alert ${classColor}`} role="alert">
          {this.state.winner ? `Bravo ${this.state.name}` : 'Raté !'}
        </div>
        <button
        onClick={this.changeStatus}
        className="btn btn-primary"> Changer</button>

        <Btn btnStyle={success}>Cliquez ici</Btn>
        <Btn btnStyle={danger}>Cliquez ici</Btn>
      </div>)
  }


}

export default Resultat;
