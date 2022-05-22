import React from "react";

export default class Pagination  extends React.Component{

  state = {
  charPerPage : null,
  totalChar: 842
  }
  

  render() {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(this.setState.totalChar / this.setState.charPerPage); i++){
      pageNumbers.push(i)
    }



     return(
      <div style={{ marginLeft : '25px'}}>
      <ul className="pagination pagination-sm">
        <li className="page-item disabled">
          <a className="page-link" href="#">&laquo;</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">4</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">5</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">&raquo;</a>
        </li>
      </ul>
    </div>
     )
  };
}