import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import your Firebase configuration
import { toast } from "react-toastify";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import "../styles/OrderDetails.css"; // Import your CSS file for styling

const OrderDetails = () => {
  const { id } = useParams(); // Assuming the order ID is passed as a URL parameter
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setOrder(docSnap.data());
        } else {
          toast.error("No such order found.", { position: "top-center" });
        }
      } catch (error) {
        console.error("Error fetching order: ", error);
        toast.error("Failed to fetch order. Please try again later.", {
          position: "top-center",
        });
      }
    };
    fetchOrder();
  }, [id]);

  const handleCancelOrder = async () => {
    try {
      await deleteDoc(doc(db, "orders", id));
      toast.success("Order cancelled successfully!", { position: "top-center" });
      navigate("/"); // Redirect to the home page or orders list
    } catch (error) {
      console.error("Error cancelling order: ", error);
      toast.error("Failed to cancel order. Please try again later.", {
        position: "top-center",
      });
    }
  };

  const handleSaveOrder = async () => {
    try {
      await updateDoc(doc(db, "orders", id), order);
      toast.success("Order updated successfully!", { position: "top-center" });
      setEditMode(false);
    } catch (error) {
      console.error("Error updating order: ", error);
      toast.error("Failed to update order. Please try again later.", {
        position: "top-center",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  if (!order) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="order-details-container">
        <h2>Order Details</h2>
        <table className="order-details-table">
          <tbody>
            <tr>
              <th>Full Name</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="fullName"
                    value={order.fullName}
                    onChange={handleInputChange}
                  />
                ) : (
                  order.fullName
                )}
              </td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="mobileNumber"
                    value={order.mobileNumber}
                    onChange={handleInputChange}
                  />
                ) : (
                  order.mobileNumber
                )}
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="address"
                    value={order.address}
                    onChange={handleInputChange}
                  />
                ) : (
                  order.address
                )}
              </td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="pincode"
                    value={order.pincode}
                    onChange={handleInputChange}
                  />
                ) : (
                  order.pincode
                )}
              </td>
            </tr>
            <tr>
              <th>Menu Item</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="selectedMenuItem"
                    value={order.selectedMenuItem}
                    onChange={handleInputChange}
                  />
                ) : (
                  order.selectedMenuItem
                )}
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                {editMode ? (
                  <input
                    type="text"
                    name="price"
                    value={order.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  `$${order.price}`
                )}
              </td>
            </tr>
            <tr>
              <th>Timestamp</th>
              <td>{order.timestamp}</td>
            </tr>
          </tbody>
        </table>
        <div className="button-group">
          {editMode ? (
            <>
              <button className="btn btn-success" onClick={handleSaveOrder}>
                Save
              </button>
              <button className="btn btn-primary" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => setEditMode(true)}>
                Edit Order
              </button>
              <button className="btn btn-danger" onClick={handleCancelOrder}>
                Cancel Order
              </button>
              <button className="btn btn-success" onClick={handleSaveOrder}>
                Save
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
