import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => this.props.onChangeCategory("")}>
                All
              </a>
            </li>
            {this.props.categories.map(category => (
              <li key={category.id}>
                <a
                  href="#"
                  onClick={() => this.props.onChangeCategory(category.slug)}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <hr className="divider" />
          <input
            type="text"
            className="search-box"
            placeholder="Search pokemon in this category"
            onChange={value => {
              this.props.onFilter(value.target.value);
            }}
          />
        </nav>
      </div>
    );
  }
}

export default Nav;
