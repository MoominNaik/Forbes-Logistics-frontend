import React from 'react';

const Step9Disclosures = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({
      disclosures: {
        ...data.disclosures,
        [field]: value,
      },
    });
  };

  const disclosureFields = [
    { key: 'deniedLicense', label: 'been denied a driver\'s license?' },
    { key: 'revokedLicense', label: 'had a license revoked or suspended?' },
    { key: 'jobFunctionIssue', label: 'been disqualified for any job-related function?' },
    { key: 'felonyConviction', label: 'been convicted of a felony?' },
  ];

  return (
    <div className="form-section brown p-8 rounded-3xl shadow-xl animate-fade-in duration-700">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 8: Legal & Health Disclosures</h3>

      <div className="space-y-6">
        {disclosureFields.map(({ key, label }) => (
          <div key={key}>
            <label className="form-label block mb-2">{`Have you ever ${label}`}</label>
            <select
              className="input w-full"
              value={data.disclosures?.[key] || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        ))}

        <div>
          <label className="form-label block mb-2">If you answered "Yes" to any of the above, please explain:</label>
          <textarea
            className="input w-full"
            rows={4}
            placeholder="Provide additional details here..."
            value={data.disclosures?.details || ''}
            onChange={(e) => handleChange('details', e.target.value)}
            required={disclosureFields.some(({ key }) => data.disclosures?.[key] === 'Yes')}
          />
        </div>
      </div>
    </div>
  );
};

export default Step9Disclosures;