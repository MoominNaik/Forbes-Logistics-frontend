import React from 'react';

const Step2AddressHistory = ({ data, updateData }) => {
  const handleChange = (type, field, value) => {
    if (type === 'current') {
      updateData({ currentAddress: { ...data.currentAddress, [field]: value } });
    } else {
      const previousAddresses = [...data.previousAddresses];
      previousAddresses[type] = { ...previousAddresses[type], [field]: value };
      updateData({ previousAddresses });
    }
  };

  const addPreviousAddress = () => {
    updateData({ previousAddresses: [...data.previousAddresses, {}] });
  };

  const removePreviousAddress = (index) => {
    const previousAddresses = [...data.previousAddresses];
    previousAddresses.splice(index, 1);
    updateData({ previousAddresses });
  };

  return (
    <div className="form-section">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 2: Address History</h3>

      {/* Current Address */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-brown-800 mb-4">Current Address</h4>
        <div className="form-grid">
          {['address', 'city', 'state', 'zip'].map((field) => (
            <div key={field}>
              <label className="form-label capitalize">{field}</label>
              <input
                type="text"
                value={data.currentAddress?.[field] || ''}
                onChange={(e) => handleChange('current', field, e.target.value)}
                className="input"
                required
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Addresses */}
      <div>
        <h4 className="text-md font-semibold text-brown-800 mb-4">Previous Addresses</h4>
        {data.previousAddresses.map((address, index) => (
          <div key={index} className="mb-6 border border-gray-300 p-4 rounded-2xl bg-white shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-gray-700">Address {index + 1}</h5>
              <button
                onClick={() => removePreviousAddress(index)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
            <div className="form-grid">
              {['address', 'city', 'state', 'zip', 'dates'].map((field) => (
                <div key={field}>
                  <label className="form-label capitalize">
                    {field === 'dates' ? 'To/From Dates' : field}
                  </label>
                  <input
                    type="text"
                    placeholder={field === 'dates' ? 'MM/YYYY - MM/YYYY' : ''}
                    value={address[field] || ''}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                    className="input"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={addPreviousAddress}
          className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
          + Add Previous Address
        </button>
      </div>
    </div>
  );
};

export default Step2AddressHistory;