import React from "react";
import StarRate from "./Star";


class Card extends React.Component {
    render() {
				const {name, universe, alterego, occupation, friends, superpowers, url} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="name">{name}</h4>
                    <p className="universe">Вселенная: {universe}</p>
                    <p className="alterego">Альтер эго: {alterego}</p>
                    <p className="occupation">Род деятельности: {occupation}</p>
                    <p className="friends">Друзья: {friends}</p>
                    <p className="superpowers">Суперсилы: {superpowers}</p>
                    <img className="card-image" src={url} alt={name}/>
                    <div className="card-footer">
                    <StarRate/></div>
                </div>
                


            </div>
        );
    }
}
export default Card

