import React, { Component } from "react";

class Pokemon extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="single-item h-list">
          <div className="row p-10">
            <input
              type="checkbox"
              name="add-to"
              defaultChecked={this.props.checked}
            />
            <img
              src={this.props.poke.thumbnail_image}
              alt={this.props.poke.ThumbnailAltText}
              width="100"
              height="100"
            />
            <div className="col-8 details">
              <h4>{this.props.poke.name}</h4>
              {this.getTypes()}
              <div className="row details">
                <div className="col-6">
                  <h5>Abilities</h5>
                  <ul>{this.getAbilities()}</ul>
                </div>
                <div className="col-6">
                  <h5>Weakness</h5>
                  {this.getWeakness()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  getAbilities = () => {
    if (this.props.abilities.length > 0) {
      return this.props.abilities.map(ability => (
        <li key={ability.id}>{ability.name}</li>
      ));
    }
  };

  getWeakness = () => {
    if (this.props.poke.weakness.length > 0) {
      return (
        <span>
          {this.props.poke.weakness.map(weak => (
            <li>{weak.name}</li>
          ))}
        </span>
      );
      // this.props.poke.weakness.map(weak => (
      // <li key={weak.id}>{weak.name}</li>

      // ));
    }
  };

  getTypes = () => {
    if (this.props.poke.types.length > 0) {
      return this.props.poke.types.map(type => (
        <div key={type.id} className="chip">
          {type.name}
        </div>
      ));
    }
  };
}

export default Pokemon;
