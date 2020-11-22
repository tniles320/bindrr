/* eslint-disable camelcase */
$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstInput = $("input#first-input");
  const lastInput = $("input#last-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const companyInput = $("input#company-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      first: firstInput.val().trim(),
      last: lastInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      company: parseInt(companyInput.val())
    };

    if (
      !userData.first ||
      !userData.last ||
      !userData.email ||
      !userData.password ||
      !userData.company
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.first,
      userData.last,
      userData.email,
      userData.password,
      userData.company
    );
    firstInput.val("");
    lastInput.val("");
    emailInput.val("");
    passwordInput.val("");
    companyInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first, last, email, password, company) {
    $.post("/api/signup", {
      first_name: first,
      last_name: last,
      email: email,
      password: password,
      CompanyId: company
    })
      .then(() => {
        window.location.replace("/dashboard");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
