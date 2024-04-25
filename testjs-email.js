// Initialize EmailJS with your user ID
(function () {
  emailjs.init("YOUR_USER_ID");
})();

// Function to handle form submission and send email
function sendEmail(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const form = event.target;
  const fullname = form.elements["fullname"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  // Send email using EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      fullname: fullname,
      email: email,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        // You can add your own success message or redirect here if needed
      },
      function (error) {
        console.error("Error sending email:", error);
        // You can add your own error handling here
      }
    );
}
