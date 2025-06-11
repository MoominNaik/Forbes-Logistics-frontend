import React from 'react';

const Step10References = ({ data, updateData }) => {
  const handleChange = (index, field, value) => {
    const references = [...data.references];
    references[index] = { ...references[index], [field]: value };
    updateData({ references });
  };

  const addReference = () => {
    updateData({
      references: [
        ...data.references,
        {
          hasReference: true,
          name: '',
          relationship: '',
          phone: '',
          email: '',
          company: '',
          position: '',
          yearsKnown: '',
          safetyHabits: '',
          workEthic: '',
        },
      ],
    });
  };

  const removeReference = (index) => {
    const references = [...data.references];
    references.splice(index, 1);
    updateData({ references });
  };

  return (
    <div className="form-section brown p-8 rounded-3xl shadow-xl animate-fade-in duration-700">
      <h3 className="form-section-title text-2xl font-bold mb-2">Step 9: References</h3>
      <p className="text-gray-700 mb-6">
        Please list 3 people who have knowledge of your safety habits or work ethic (no family members).
      </p>

      {data.references.map((reference, index) => (
        <div
          key={index}
          className="bg-stone-100 p-6 rounded-2xl shadow-md mb-8 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-lg">Reference #{index + 1}</h4>
            <button
              type="button"
              onClick={() => removeReference(index)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>

          

          {reference.hasReference && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ['name', 'Full Name'],
                  ['relationship', 'Relationship'],
                  ['phone', 'Phone Number'],
                  ['email', 'Email'],
                  ['company', 'Company'],
                  ['position', 'Position'],
                  ['yearsKnown', 'Years Known'],
                ].map(([key, label]) => (
                  <div key={key}>
                    <label className="form-label block mb-1">{label}</label>
                    <input
                      type="text"
                      className="input w-full"
                      value={reference[key]}
                      onChange={(e) => handleChange(index, key, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="form-label block mb-1">
                  Please describe their knowledge of your safety habits:
                </label>
                <textarea
                  className="input w-full h-28"
                  value={reference.safetyHabits}
                  onChange={(e) =>
                    handleChange(index, 'safetyHabits', e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block mb-1">
                  Please describe their knowledge of your work ethic:
                </label>
                <textarea
                  className="input w-full h-28"
                  value={reference.workEthic}
                  onChange={(e) =>
                    handleChange(index, 'workEthic', e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addReference}
        className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
      >
        Add Reference
      </button>
    </div>
  );
};

export default Step10References;