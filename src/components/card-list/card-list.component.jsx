import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
