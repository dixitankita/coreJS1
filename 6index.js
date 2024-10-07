function getProcessingFee(paymentMethod) {
    let fee;

    switch (paymentMethod) {
        case "credit":
            fee = "2%";
            break;
        case "debit":
            fee = "1.5%";
            break;
        case "paypal":
            fee = "3%";
            break;
        default:
            fee = "Invalid payment method";
    }

    console.log(`Processing fee for ${paymentMethod}: ${fee}`);
}

// Example usage:
getProcessingFee("credit");
getProcessingFee("debit");
getProcessingFee("paypal");
getProcessingFee("cash");
