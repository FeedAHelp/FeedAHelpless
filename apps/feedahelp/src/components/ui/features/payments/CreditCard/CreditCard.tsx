import React from "react";

const CreditCard = () => {
  return (<div>
            <form className="payment-card">
                <h1 className="payment-card__title">Card details</h1>
                <div className="payment-card__field payment-card__field--large">
                    <label htmlFor="card-number" className="payment-card__field-label">Card number</label>
                    <input className="payment-card__input payment-card__input--large" id="card-number" pattern="[0-9\s]{13,19}" placeholder="xxxx xxxx xxxx xxxx" />
                </div>
                <div className="payment-card__extra-fields">
                    <div className="payment-card__field payment-card__field--small">
                    <label htmlFor="card-expiry" className="payment-card__field-label">Expiry date</label>
                    <input className="payment-card__input" id="card-expiry" placeholder="xx/xx" />
                    </div>
                    <div className="payment-card__field payment-card__field--small">
                    <label htmlFor="card-ccv" className="payment-card__field-label">CCV</label>
                    <input className="payment-card__input" id="card-ccv" placeholder="xxx" />
                    </div>
                </div>
            </form>
          </div>
        );
};

export default CreditCard;
