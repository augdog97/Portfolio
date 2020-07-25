

$('form').on('send', (e) => {
    e.preventDefault(); 
    const name = $("#name")
        .val()
        .trim();
const email = $("#email")
        .val()
        .trim();
const message = $("#message")
        .val()
        .trim();

$.post("/email", data)
    .then(() => {
  window.location.href = "/email/sent";
    })
.catch(() => {
      window.location.href = "/error";
});

const data = {
    name, 
    email,
    message
};
})