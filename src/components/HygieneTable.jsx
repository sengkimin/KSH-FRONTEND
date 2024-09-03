import React from 'react';

const HygieneTable = () => {
  const data = [
    {
      date: '26/Aug/2024',
      day: 'Monday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '27/Aug/2024',
      day: 'Tuesday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '28/Aug/2024',
      day: 'Wednesday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '29/Aug/2024',
      day: 'Thursday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '30/Aug/2024',
      day: 'Friday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '31/Aug/2024',
      day: 'Saturday',
      checks: ['', '', '', '', '', ''],
    },
    {
      date: '01/Sep/2024',
      day: 'Sunday',
      checks: ['', '', '', '', '', ''],
    },
  ];

  return (
    <table className="border-collapse border border-stone-500 w-full h-auto mt-2 text-center text-xl">
      <thead>
        <tr className="text-black">
          <th className="border p-3">Date</th>
          <th className="border p-3">Day</th>
          {Array(6).fill().map((_, i) => (
            <th key={i} className="border p-3">
              <img src={`${i+1}.jpg`} className="w-52 h-40" alt={`photo.jpg ${i + 1}`} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border">
            <td className="p-8 border">{row.date}</td>
            <td className="p-8 border">{row.day}</td>
            {row.checks.map((check, i) => (
              <td key={i} className="p-5 border">{check}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HygieneTable;
