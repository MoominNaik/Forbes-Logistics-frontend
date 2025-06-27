import React from 'react';

const Step3DOTMedical = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ medical: { ...data.medical, [field]: value } });
  };

  const isCurrent = data.medical?.isCurrent || false;

  return (
    <div className="form-section">
      <h3 className="form-section-title text-2xl font-bold mb-6 text-center">Step 3: DOT Medical Examination</h3>

      <div className="form-grid md:grid-cols-1 space-y-6">
        {/* Yes/No Section */}
        <div className="w-full">
          <label className="form-label block mb-2">Is your DOT Medical Card current?</label>
          <div className="w-full flex flex-col sm:flex-row sm:justify-start sm:items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isCurrent"
                value="true"
                checked={isCurrent === true}
                onChange={() => handleChange('isCurrent', true)}
                className="form-radio text-black"
              />
              <span className="text-sm sm:text-base">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isCurrent"
                value="false"
                checked={isCurrent === false}
                onChange={() => handleChange('isCurrent', false)}
                className="form-radio text-black"
              />
              <span className="text-sm sm:text-base">No</span>
            </label>
          </div>
        </div>

        {/* Conditional Fields */}
        {isCurrent && (
          <>
            <div className="w-full">
              <label className="form-label block mb-1">Medical Examiner's Name</label>
              <input
                type="text"
                name="examinerName"
                value={data.medical?.examinerName || ''}
                onChange={(e) => handleChange('examinerName', e.target.value)}
                className="input w-full"
              />
            </div>

            <div className="w-full">
              <label className="form-label block mb-1">Medical Examiner's Clinic/Hospital</label>
              <input
                type="text"
                name="clinic"
                value={data.medical?.clinic || ''}
                onChange={(e) => handleChange('clinic', e.target.value)}
                className="input w-full"
              />
            </div>

            <div className="w-full">
              <label className="form-label block mb-1">Medical Examiner's Address</label>
              <input
                type="text"
                name="examinerAddress"
                value={data.medical?.examinerAddress || ''}
                onChange={(e) => handleChange('examinerAddress', e.target.value)}
                className="input w-full"
              />
            </div>

            <div className="w-full">
              <label className="form-label block mb-1">Medical Examiner's Phone</label>
              <input
                type="tel"
                name="examinerPhone"
                value={data.medical?.examinerPhone || ''}
                onChange={(e) => handleChange('examinerPhone', e.target.value)}
                className="input w-full"
              />
            </div>

            <div className="w-full">
              <label className="form-label block mb-1">DOT Medical Card Expiration Date</label>
              <input
                type="date"
                name="expirationDate"
                value={data.medical?.expirationDate || ''}
                onChange={(e) => handleChange('expirationDate', e.target.value)}
                className="input w-full"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step3DOTMedical;