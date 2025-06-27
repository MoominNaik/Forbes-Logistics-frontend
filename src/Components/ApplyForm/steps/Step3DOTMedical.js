import React from 'react';

const Step3DOTMedical = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ medical: { ...data.medical, [field]: value } });
  };

  const isCurrent = data.medical?.isCurrent || false;

  return (
    <div className="form-section">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 3: DOT Medical Examination</h3>

      <div className="form-grid md:grid-cols-1">
        <div className="md:flex md:flex-col md:items-start md:space-x-0 space-x-4">
          <label className="form-label">Is your DOT Medical Card current?</label>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-1 md:items-start md:space-x-0">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isCurrent"
                value="true"
                checked={isCurrent === true}
                onChange={() => handleChange('isCurrent', true)}
                className="input"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isCurrent"
                value="false"
                checked={isCurrent === false}
                onChange={() => handleChange('isCurrent', false)}
                className="input"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {isCurrent && (
          <>
            <div>
              <label className="form-label">Medical Examiner's Name</label>
              <input
                type="text"
                name="examinerName"
                value={data.medical?.examinerName || ''}
                onChange={(e) => handleChange('examinerName', e.target.value)}
                className="input"
              />
            </div>

            <div>
              <label className="form-label">Medical Examiner's Clinic/Hospital</label>
              <input
                type="text"
                name="clinic"
                value={data.medical?.clinic || ''}
                onChange={(e) => handleChange('clinic', e.target.value)}
                className="input"
              />
            </div>

            <div>
              <label className="form-label">Medical Examiner's Address</label>
              <input
                type="text"
                name="examinerAddress"
                value={data.medical?.examinerAddress || ''}
                onChange={(e) => handleChange('examinerAddress', e.target.value)}
                className="input"
              />
            </div>

            <div>
              <label className="form-label">Medical Examiner's Phone</label>
              <input
                type="tel"
                name="examinerPhone"
                value={data.medical?.examinerPhone || ''}
                onChange={(e) => handleChange('examinerPhone', e.target.value)}
                className="input"
              />
            </div>

            <div>
              <label className="form-label">DOT Medical Card Expiration Date</label>
              <input
                type="date"
                name="expirationDate"
                value={data.medical?.expirationDate || ''}
                onChange={(e) => handleChange('expirationDate', e.target.value)}
                className="input"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step3DOTMedical;