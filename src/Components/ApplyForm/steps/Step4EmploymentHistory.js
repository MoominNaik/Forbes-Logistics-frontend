import React from 'react';

const Step4EmploymentHistory = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData({
      drivingExperience: {
        ...data.drivingExperience,
        [field]: value
      }
    });
  };

  const updateList = (key, index, field, value) => {
    const updatedList = [...data.drivingExperience[key]];
    updatedList[index][field] = value;
    updateData({
      drivingExperience: {
        ...data.drivingExperience,
        [key]: updatedList
      }
    });
  };

  const addEntry = (key, template) => {
    updateData({
      drivingExperience: {
        ...data.drivingExperience,
        [key]: [...data.drivingExperience[key], template]
      }
    });
  };

  const removeEntry = (key, index) => {
    const updatedList = [...data.drivingExperience[key]];
    updatedList.splice(index, 1);
    updateData({
      drivingExperience: {
        ...data.drivingExperience,
        [key]: updatedList
      }
    });
  };

  return (
    <div className="form-section brown p-8 rounded-3xl shadow-xl animate-fade-in duration-700">
      <h3 className="form-section-title text-2xl font-bold mb-6">Step 4: Employment History</h3>

      <div className="mb-10">
        <label className="form-label block text-md font-medium mb-2 text-brown-700">
          States Operated (Last 5 Years)
        </label>
        <textarea
          name="statesOperated"
          value={data.drivingExperience?.statesOperated || ''}
          onChange={(e) => handleChange('statesOperated', e.target.value)}
          className="input w-full p-4 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-400 border border-amber-300"
          rows="4"
        />
      </div>

      {/* Special Courses Section */}
      <div className="mb-12">
        <label className="form-label text-lg font-semibold text-brown-700 mb-4 block">Special Courses and Training</label>
        {data.drivingExperience?.courses?.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-brown-800 font-semibold">Course #{index + 1}</h4>
              <button
                onClick={() => removeEntry('courses', index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={course.name}
                  onChange={(e) => updateList('courses', index, 'name', e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Year</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={course.year}
                  onChange={(e) => updateList('courses', index, 'year', e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Certification</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={course.certification}
                  onChange={(e) => updateList('courses', index, 'certification', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addEntry('courses', { name: '', year: '', certification: '' })}
          className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
          Add Course
        </button>
      </div>

      {/* Awards Section */}
      <div>
        <label className="form-label text-lg font-semibold text-brown-700 mb-4 block">Awards</label>
        {data.drivingExperience?.awards?.map((award, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-brown-800 font-semibold">Award #{index + 1}</h4>
              <button
                onClick={() => removeEntry('awards', index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Award Name</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={award.name}
                  onChange={(e) => updateList('awards', index, 'name', e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Year</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={award.year}
                  onChange={(e) => updateList('awards', index, 'year', e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Awarded By</label>
                <input
                  type="text"
                  className="input w-full mt-2"
                  value={award.awardedBy}
                  onChange={(e) => updateList('awards', index, 'awardedBy', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addEntry('awards', { name: '', year: '', awardedBy: '' })}
        className="w-full px-6 py-3 bg-brown-700 text-white rounded-xl text-sm hover:bg-brown-800 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          Add Award
        </button>
      </div>
    </div>
  );
};

export default Step4EmploymentHistory;