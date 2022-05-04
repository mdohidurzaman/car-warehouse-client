import { Link, useParams } from "react-router-dom";
import "./InventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();

  return (
    <div className="inventory-details mt-5">
      <h2>Welcome to Our Inventory: {id}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary my-5">Delivered</button>
      </Link>
      <div>
        <Link to="/manage">
          <button>Manage Invertories</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryDetails;
