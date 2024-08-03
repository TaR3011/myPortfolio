import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="skills_container">
      <div className="skills_text">
        <h1>تواصل معي</h1>
        <p>إذا كنت تريد تحويل افكارك الى واقع او لديك استفسارات ، تواصل معي</p>
      </div>
      <form className="contact_section" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="اسمك"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="ايميلك"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="رسالتك"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};
export default Contact;
