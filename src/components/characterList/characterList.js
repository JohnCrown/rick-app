import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import RickService from "../../services/service";
import Pagination from "../pagination/pagination";

export default class CharacterList extends Component {
  rickApi = new RickService();

  state = {
    characterList: [],
  };

  componentDidMount() {
    this.rickApi.getAllCharacter()
    .then((characterList) => {
      this.setState({
        characterList,
      });
    });
  }
  renderItems(arr) {
    return arr.map(({ id, name, gender, species, status, image }) => {
      return (
        <div
          className="card mb-3"
          style={{ width: "350px", display: "inline-grid" }}
          key={id}
        >
          <h3 className="card-header">{name}</h3>

          <div className="card-body">
            <img src={image} className="card-title" alt={name} />
          </div>

          <ul
            className="list-group list-group-flush"
            style={{ textAlign: "center" }}
          >
            <li
              //  key={id}
              className="list-group-item"
            >
              species : {species}
            </li>
            <li className="list-group-item">gender - {gender}</li>
            <li className="list-group-item">id {id}</li>
          </ul>

          <div
            className="card-footer text-muted"
            style={{ textAlign: "center" }}
          >
            status : {status}
          </div>
        </div>
      );
    });
  }

  render() {
    const { characterList } = this.state;
    const items = this.renderItems(characterList);

    if (!characterList) {
      return <Spinner />;
    }

    return (
      <div>
        <div style={{ color: "green", textAlign: "center", fontSize: "45px" }}>
          CharacterList{" "}
         
        </div>
        {items}
       <Pagination />
      </div>
    );
  }
}
