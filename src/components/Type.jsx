import React, { useState } from 'react'; 
const Type = () => {
  const [type, setType] = useState(""); 

  return (
    <div className="mb-4">
      <label className="block text-xl " htmlFor="type">
        Type
      </label>
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className=" p-2 border border-stone-600 rounded-md outline-none mb-5 h-11 "
      >
         {/* <label className="block text-2xl font-bold mb-3" htmlFor="type">
        Type
      </label> */}
        <option className='text-xl' value="">Personal hygien</option>
        <option className='text-xl' value="admin">General hygien </option>
        <option className='text-xl' value="education">Daily follow up</option>
      </select>
    </div>
  );
};

export default Type;