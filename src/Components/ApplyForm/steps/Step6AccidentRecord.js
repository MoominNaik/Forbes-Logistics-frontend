import React from 'react';

const Step6AccidentRecord = ({ data, updateData }) => {
  const handleChange = (index, field, value) => {
    const accidents = [...data.accidentRecords];
    accidents[index] = { ...accidents[index], [field]: value };
    updateData({ accidentRecords: accidents });
  };

  const addAccident = () => {
    updateData({ 
      accidentRecords: [...data.accidentRecords, {
        date: '',
        fatalities: '',
        nature: '',
        location: '',
        peopleInjured: ''
      }] 
    });
  };

  const removeAccident = (index) => {
    const accidents = [...data.accidentRecords];
    accidents.splice(index, 1);
    updateData({ accidentRecords: accidents });
  };

  return (
    <div className="form-section brown p-8 rounded-3xl shadow-xl animate-fade-in duration-700">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 6: Accident Record (Last 3 Years)</h3>
      
      {data.accidentRecords.map((accident, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-brown-800 font-semibold">Accident #{index + 1}</h4>
            <button
              onClick={() => removeAccident(index)}
              className="text-red-600 hover:text-red-800 transition-colors text-sm"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Date</label>
              <input
                type="date"
                name={`date${index}`}
                className="input w-full mt-2"
                value={accident.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label">Nature of Accident</label>
              <input
                type="text"
                name={`nature${index}`}
                className="input w-full mt-2"
                value={accident.nature}
                onChange={(e) => handleChange(index, 'nature', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label">Location</label>
              <input
                type="text"
                name={`location${index}`}
                className="input w-full mt-2"
                value={accident.location}
                onChange={(e) => handleChange(index, 'location', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label">Number of Fatalities</label>
              <input
                type="number"
                name={`fatalities${index}`}
                className="input w-full mt-2"
                value={accident.fatalities}
                onChange={(e) => handleChange(index, 'fatalities', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="form-label">Number of People Injured</label>
              <input
                type="number"
                name={`injured${index}`}
                className="input w-full mt-2"
                value={accident.peopleInjured}
                onChange={(e) => handleChange(index, 'peopleInjured', e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addAccident}
        className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
      >
        <span className="text-xl">+</span> Add Accident
      </button>
    </div>
  );
};

export default Step6AccidentRecord;