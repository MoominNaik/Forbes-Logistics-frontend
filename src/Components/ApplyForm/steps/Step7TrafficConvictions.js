import React from 'react';

const Step7TrafficConvictions = ({ data, updateData }) => {
  const handleChange = (index, field, value) => {
    const updated = [...data.trafficConvictions];
    updated[index] = { ...updated[index], [field]: value };
    updateData({ trafficConvictions: updated });
  };

  const addConviction = () => {
    updateData({
      trafficConvictions: [
        ...data.trafficConvictions,
        {
          hasConviction: true,
          date: '',
          location: '',
          charge: '',
          penalty: ''
        }
      ]
    });
  };

  const removeConviction = (index) => {
    const updated = [...data.trafficConvictions];
    updated.splice(index, 1);
    updateData({ trafficConvictions: updated });
  };

  return (
    <div className="form-section brown">
      <h3 className="form-section-title text-xl font-bold mb-6">
        Step 7: Traffic Convictions and Forfeitures (Last 3 Years, excluding parking)
      </h3>

      {data.trafficConvictions.map((conviction, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="form-label brown font-semibold text-lg">
              Conviction #{index + 1}
            </h4>
            <button
              type="button"
              onClick={() => removeConviction(index)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>

          {/* Conviction Toggle */}
          <div className="mb-4">
            <label className="flex items-center space-x-3 text-brown-700 font-medium">
              
            </label>
          </div>

          {conviction.hasConviction && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full md:col-span-1">
                <label className="form-label brown">Date</label>
                <input
                  type="date"
                  className="input w-full mt-2"
                  value={conviction.date}
                  onChange={(e) => handleChange(index, 'date', e.target.value)}
                  required
                />
              </div>
              <div className="col-span-full md:col-span-1">
                <label className="form-label brown">Location</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={conviction.location}
                  onChange={(e) => handleChange(index, 'location', e.target.value)}
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="form-label brown">Nature of Charge</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={conviction.charge}
                  onChange={(e) => handleChange(index, 'charge', e.target.value)}
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="form-label brown">Penalty</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={conviction.penalty}
                  onChange={(e) => handleChange(index, 'penalty', e.target.value)}
                  required
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-6">
        <button
          type="button"
          onClick={addConviction}
          className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
          + Add Conviction
        </button>
      </div>
    </div>
  );
};

export default Step7TrafficConvictions;