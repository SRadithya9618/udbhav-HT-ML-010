import React, { useState } from "react";

function Predict() {
  const [form, setForm] = useState({
    age: "",
    sex: "",
    chest_pain_type: "",
    resting_bp: "",
    cholesterol: "",
    fasting_blood_sugar: "",
    resting_ecg: "",
    max_heart_rate: "",
    exercise_induced_angina: "",
    st_depression: "",
    st_slope: "",
    num_major_vessels: "",
    thalassemia: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Server Error!");
      const data = await response.json();
      // expects backend to return { probability: number }
      setResult(data.probability);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch prediction.");
    }
    setLoading(false);
  };

  return (
    <div className="predict-page">
      <div className="container">
        <div className="predict-content">
          <h1 className="predict-title">Heart Disease Prediction</h1>
          <p className="predict-description">
            Enter the patient details based on the UCI heart dataset fields.
          </p>

          <form className="predict-form" onSubmit={handleSubmit}>
            {/* 1. Age */}
            <div className="form-group">
              <label>
                Age (years)
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </label>
            </div>

            {/* 2. Sex */}
            <div className="form-group">
              <label>
                Sex
                <select
                  name="sex"
                  value={form.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </label>
            </div>

            {/* 3. Chest pain type */}
            <div className="form-group">
              <label>
                Chest Pain Type
                <select
                  name="chest_pain_type"
                  value={form.chest_pain_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Typical angina</option>
                  <option value="1">Atypical angina</option>
                  <option value="2">Non-anginal pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </label>
            </div>

            {/* 4. Resting BP */}
            <div className="form-group">
              <label>
                Resting Blood Pressure (mmHg)
                <input
                  type="number"
                  name="resting_bp"
                  value={form.resting_bp}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </label>
            </div>

            {/* 5. Cholesterol */}
            <div className="form-group">
              <label>
                Cholesterol (mg/dL)
                <input
                  type="number"
                  name="cholesterol"
                  value={form.cholesterol}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </label>
            </div>

            {/* 6. Fasting blood sugar */}
            <div className="form-group">
              <label>
                Fasting Blood Sugar &gt; 120 mg/dL
                <select
                  name="fasting_blood_sugar"
                  value={form.fasting_blood_sugar}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            </div>

            {/* 7. Resting ECG */}
            <div className="form-group">
              <label>
                Resting ECG
                <select
                  name="resting_ecg"
                  value={form.resting_ecg}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Normal</option>
                  <option value="1">ST-T wave abnormality</option>
                  <option value="2">Left ventricular hypertrophy</option>
                </select>
              </label>
            </div>

            {/* 8. Max heart rate */}
            <div className="form-group">
              <label>
                Max Heart Rate Achieved
                <input
                  type="number"
                  name="max_heart_rate"
                  value={form.max_heart_rate}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </label>
            </div>

            {/* 9. Exercise induced angina */}
            <div className="form-group">
              <label>
                Exercise Induced Angina
                <select
                  name="exercise_induced_angina"
                  value={form.exercise_induced_angina}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            </div>

            {/* 10. ST depression */}
            <div className="form-group">
              <label>
                ST Depression (oldpeak)
                <input
                  type="number"
                  step="0.1"
                  name="st_depression"
                  value={form.st_depression}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* 11. ST slope */}
            <div className="form-group">
              <label>
                ST Slope
                <select
                  name="st_slope"
                  value={form.st_slope}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </label>
            </div>

            {/* 12. Number of major vessels */}
            <div className="form-group">
              <label>
                Number of Major Vessels (0–3)
                <input
                  type="number"
                  name="num_major_vessels"
                  value={form.num_major_vessels}
                  onChange={handleChange}
                  min="0"
                  max="3"
                  required
                />
              </label>
            </div>

            {/* 13. Thalassemia */}
            <div className="form-group">
              <label>
                Thalassemia
                <select
                  name="thalassemia"
                  value={form.thalassemia}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Normal</option>
                  <option value="2">Fixed defect</option>
                  <option value="3">Reversible defect</option>
                </select>
              </label>
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Predict Heart Disease Risk"}
            </button>
          </form>

          <div className="predict-output">
            {loading && <p>Loading prediction...</p>}
            {result !== null && (
              <div className="result-card">
                <h2>Probability Score</h2>
                <p>
                  Predicted risk of heart disease:{" "}
                  <span className="probability-score">
                    {(result * 100).toFixed(2)}%
                  </span>
                </p>
              </div>
            )}
            {error && <p className="error">{error}</p>}
          </div>

          <div className="risk-report" style={{ marginTop: "2rem" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Predict;
