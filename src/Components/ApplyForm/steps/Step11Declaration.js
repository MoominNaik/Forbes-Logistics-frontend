import React from 'react';

const Step11Declaration = ({ data, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({
      declaration: {
        ...data.declaration,
        [name]: value,
      },
    });
  };

  return (
    <div className="form-section">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 11: Final Declaration</h3>

      <div className="bg-[#e5e2e0] p-4 rounded">
        <p className="text-sm leading-relaxed">
          I hereby certify that all information provided in this application is true, accurate, and complete to the best of my knowledge. I understand that any misrepresentation, falsification, or omission of facts may be grounds for denial of employment or, if employed, immediate dismissal.
          <br /><br />
          I authorize the investigation of all statements contained in this application, as well as the references and former employers listed herein, to provide any and all information concerning my previous employment, qualifications, or any other pertinent details they may possess. I release all parties involved from any and all liability for any damages that may result from the furnishing or use of such information.
          <br /><br />
          By entering my full legal name in the field below, I acknowledge that this entry constitutes my electronic signature and confirms my acceptance and agreement to the terms stated above.
        </p>
      </div>

      <div className="form-grid mt-6">
        <div>
          <label className="form-label">Full Name (Signature)</label>
          <input
            type="text"
            name="signature"
            className="input"
            placeholder="Your full name"
            value={data.declaration?.signature || ''}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            className="input"
            value={data.declaration?.date || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Step11Declaration;