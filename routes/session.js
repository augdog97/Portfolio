
const express = require('express');
const user = express();
const stripe = require('stripe')('sk_test_kEtLGPIUVPh7dxdFK9zBQhuu00aoh4gQRm');



user.post('/create-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Stubborn Attachments',
                        images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/paymentConfirmed`,
        cancel_url: `http://localhost:3000/Payment:denied`,
    });
    res.json({ id: session.id });
});

module.exports = user;