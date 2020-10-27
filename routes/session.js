
const express = require('express');
const user = express();
const stripe = require('stripe')();



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
        success_url: `https://02designstudio.com/paymentConfirmed`,
        cancel_url: `https://02designstudio.com/Payment:denied`,
    });
    res.json({ id: session.id });
});

module.exports = user;