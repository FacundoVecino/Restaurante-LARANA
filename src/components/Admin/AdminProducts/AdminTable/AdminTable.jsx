// AdminTable.js
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import "./AdminTable.css";

const AdminTable = ({ products }) => {
  const itemsOnPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const numberOfPages = Math.ceil(products.length / itemsOnPage);

  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <li key={i}>
        <button
          className={i === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  const mappedRecords = currentProducts.map((product, index) => (
    <tr key={index}>
      <td className="product-profile">
        <img src={product.image} alt={product.name} />
      </td>
      <td>
        <span className="profile-info">
          <span className="profile-info__name">{product.name}</span>
        </span>
      </td>
      <td>{product.cost}</td>
      <td>
        <span
          className={`status status--${
            product.available ? "available" : "not-available"
          }`}
        >
          {product.available ? "Available" : "Not Available"}
        </span>
      </td>
      <td>
        <button id="btn-edit"><FiEdit /></button>
      </td>
    </tr>
  ));

  return (
    <>
      <div>
        <table className="table-widget">
          <thead>
            <th>Image</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Available</th>
            <th>Action</th>
          </thead>
          <tbody>{mappedRecords}</tbody>
        </table>
      </div>
      <article className="d-flex justify-content-center">
        <div>
          <div colSpan={5}>
            <div className="p-4 pagination">
              <div className="pages">
                <ul>{pages}</ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AdminTable;
