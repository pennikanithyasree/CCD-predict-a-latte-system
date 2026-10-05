function placeOrder(drinkName, waitingTime) {

    const orderMessage =
        document.getElementById("order-message");


    orderMessage.innerHTML = `
        <h3>✅ Order Placed Successfully!</h3>

        <p>
            Your order:
            <strong>${drinkName}</strong>
        </p>

        <p>
            Estimated waiting time:
            <strong>${waitingTime} minutes</strong>
        </p>

        <p>
            Please collect your order from the CCD counter.
        </p>
    `;


    document
        .getElementById("orders")
        .scrollIntoView({
            behavior: "smooth"
        });
}