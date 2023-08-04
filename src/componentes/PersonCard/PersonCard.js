import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props)
        const {firstName, lastName, age, hairColor} = props;
        this.state ={
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age),
        hairColor: hairColor
        }
    }

    changeAge = () =>{
        console.log("Cambiaste la edad");
        this.setState({
        age: this.state.age + 1
        });
    }

    render(){
        const {firstName, lastName, age, hairColor} = this.state;
        return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={ ()=> this.changeAge()}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
        )
    }
}

export default PersonCard;