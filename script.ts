// Get all elements once
const elements = {
  form: document.getElementById("studentForm") as HTMLFormElement,
  name: document.getElementById("name") as HTMLInputElement,
  email: document.getElementById("email") as HTMLInputElement,
  age:document.getElementById("age") as HTMLInputElement,
  phone: document.getElementById("phone") as HTMLInputElement,
  password: document.getElementById("password") as HTMLInputElement,
  confirmPassword: document.getElementById("confirmPassword") as HTMLInputElement,
  message: document.getElementById("message") as HTMLParagraphElement
};

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = elements.name.value.trim();
  const email = elements.email.value.trim();
  const phone = elements.phone.value.trim();
  const password = elements.password.value;
  const confirmPassword = elements.confirmPassword.value;

  if (!name || !email || !phone || !password || !confirmPassword) {
    displayMessage("❌ Please fill in all fields.", "red");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayMessage("❌ Invalid email address.", "red");
    return;
  }

const ageValue = elements.age.value.trim();
const age = Number(ageValue);


if (isNaN(age) || age < 10 || age > 100) {
  displayMessage("❌ Please enter a valid age between 10 and 100.", "red");
  return;
}

  const phoneRegex = /^01[0-9]{9}$/;
  if (!phoneRegex.test(phone)) {
    displayMessage("❌ Invalid phone number.", "red");
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    displayMessage("❌ Password must have at least 8 characters, including uppercase, lowercase, number, and symbol.", "red");
    return;
  }

  if (password !== confirmPassword) {
    displayMessage("❌ Passwords do not match.", "red");
    return;
  }

  displayMessage("✅ Form submitted successfully!", "green");
  elements.form.reset();
});

function displayMessage(msg: string, color: string): void {
  elements.message.textContent = msg;
  elements.message.style.color = color;
}
