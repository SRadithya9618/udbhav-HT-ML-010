
import React, { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.feedback.trim()) {
      setSuccess("❌ Please fill all fields");
      return;
    }

    console.log("Feedback Submitted:", formData);
    setSuccess("✅ Thank you! Your feedback has been submitted.");

    setFormData({ name: "", feedback: "" });
  };

  return (
    <div className="feedback-page">
      <div className="container">
        <div className="feedback-content">
          <h1 className="feedback-title">Feedback</h1>
          <p className="feedback-description">
            Share your thoughts after experiencing the Cardio360 workflow.
          </p>

          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Your Feedback</label>
              <textarea
                name="feedback"
                placeholder="Write your feedback here..."
                rows="4"
                value={formData.feedback}
                onChange={handleChange}
                className="form-input"
              ></textarea>
            </div>

            {success && (
              <p className="success-msg">{success}</p>
            )}

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
