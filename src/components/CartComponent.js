// src/components/CartComponent.js
import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function CartComponent() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]); // ✅ store confirmed orders

  // Convert price string (₹ / $) safely to number
  const getPriceValue = (price) =>
    Number(String(price).replace(/[^0-9.]/g, ""));

  const total = cartItems.reduce(
    (sum, item) => sum + getPriceValue(item.price) * item.quantity,
    0
  );

  const handleProceedPayment = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    setOrderedItems((prev) => [...prev, selectedItem]); // ✅ mark this item as ordered

    setTimeout(() => {
      setShowModal(false);
      setPaymentConfirmed(false);
    }, 2000);
  };

  const isItemOrdered = (itemId) =>
    orderedItems.some((ordered) => ordered.id === itemId);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
          <>
            <div className="row g-4">
              {cartItems.map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="card shadow-sm border-0 h-100">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5>{item.name}</h5>
                      <p className="text-muted mb-1">{item.price}</p>
                      <p className="fw-semibold">Qty: {item.quantity}</p>

                      {isItemOrdered(item.id) ? (
                        <p className="text-success fw-bold mt-3">
                          ✅ Order Placed
                        </p>
                      ) : (
                        <>
                          <button
                            className="btn btn-outline-danger rounded-pill me-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                          <button
                            className="btn btn-success rounded-pill"
                            onClick={() => handleProceedPayment(item)}
                          >
                            Proceed Payment
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <h4>Total: ₹{total.toLocaleString("en-IN")}</h4>
              <button
                className="btn btn-dark rounded-pill mt-3 px-4"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Payment Popup Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Proceed to Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!paymentConfirmed ? (
            <>
              <p><strong>Item:</strong> {selectedItem?.name}</p>
              <p><strong>Quantity:</strong> {selectedItem?.quantity}</p>
              <p><strong>Price:</strong> {selectedItem?.price}</p>
              <p>
                <strong>Total:</strong> ₹
                {(
                  getPriceValue(selectedItem?.price) * selectedItem?.quantity
                ).toLocaleString("en-IN")}
              </p>
              <Button variant="primary" onClick={handleConfirmPayment}>
                Confirm Payment
              </Button>
            </>
          ) : (
            <div className="text-center text-success fw-bold fs-5">
              ✅ Payment Successful! <br /> 🎉 Order Placed!
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default CartComponent;
