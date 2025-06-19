import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ResultsOverview: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const gradingScales = [
    {
      title: "Qualitative Grading Scale",
      grades: [
        { grade: "U", description: "Undefined", meaning: "No grade available or not enough evidence to assess", numeric: "—" },
        { grade: "I", description: "Insufficient", meaning: "Performance does not meet minimum expectations", numeric: "3–4" },
        { grade: "S", description: "Satisfactory", meaning: "Meets basic expectation", numeric: "5–6" },
        { grade: "G", description: "Good", meaning: "Meets expectations well; solid and consistent work", numeric: "7-8" },
        { grade: "O", description: "Outstanding", meaning: "Exceeds expectations with excellent performance", numeric: "9-10" },
      ],
      showNumeric: true
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">List of results of {user.name} ({user.studentNumber})</h1>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Last updated on 19/16/2025 23:17:34
      </div>

      {/* Grading Scale Table */}
      

      {/* Original Content */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
          <p>No rights can be obtained from this information.</p>
        </div>
        
        {/* First Semester */}
        <div className=" mt-10 px-4 py-2 text-left text-xl font-bold text-black-800 bg-blue-50 border-b-2 border-blue-300 rounded-t-lg">
          First Semester
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left w-1/6">COURSE CODE</th>
                <th className="px-4 py-2 text-left w-3/6">TITLE</th>
                <th className="px-4 py-2 text-left w-1/6">SCORE</th>
                <th className="px-4 py-2 text-left w-1/6">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Operating systems II</td>
                <td className="px-4 py-2">I→R/S</td>
                <td className="px-4 py-2">09/02/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Pentesting</td>
                <td className="px-4 py-2">O</td>
                <td className="px-4 py-2">09/02/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Network Security</td>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">09/02/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Computer Networks</td>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">09/02/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Group Project</td>
                <td className="px-4 py-2">U→R/S</td>
                <td className="px-4 py-2">09/02/2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Second Semester */}
        <div className=" mt-10 px-4 py-2 text-left text-xl font-bold text-black-800 bg-blue-50 border-b-2 border-blue-300">
          Second Semester
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left w-1/6">COURSE CODE</th>
                <th className="px-4 py-2 text-left w-3/6">TITLE</th>
                <th className="px-4 py-2 text-left w-1/6">SCORE</th>
                <th className="px-4 py-2 text-left w-1/6">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">29V2C</td>
                <td className="px-4 py-2">Operating systems II</td>
                <td className="px-4 py-2">I</td>
                <td className="px-4 py-2">19/06/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V2C</td>
                <td className="px-4 py-2">Computer Networks</td>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">19/06/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V2C</td>
                <td className="px-4 py-2">IOT Security</td>
                <td className="px-4 py-2">O</td>
                <td className="px-4 py-2">19/06/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V2C</td>
                <td className="px-4 py-2">Web Application Security</td>
                <td className="px-4 py-2">O</td>
                <td className="px-4 py-2">19/06/2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V2C</td>
                <td className="px-4 py-2">Group Project</td>
                <td className="px-4 py-2">S</td>
                <td className="px-4 py-2">19/06/2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t flex justify-between items-center">
          {/* Empty footer */}
        </div>
      </div>



      {/* Grading Scale Section */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="mt-10 px-4 py-2 text-left text-xl font-bold text-black-800 bg-blue-100 border-b-2 border-blue-300 ">
          Qualitative Grading Scale
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Grade</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Meaning</th>
                <th className="px-4 py-2 text-left">Approx. Numeric Equivalent</th>
              </tr>
            </thead>
            <tbody>
              {gradingScales[0].grades.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 font-medium">{row.grade}</td>
                  <td className="px-4 py-2">{row.description}</td>
                  <td className="px-4 py-2">{row.meaning}</td>
                  <td className="px-4 py-2">{row.numeric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow mt-6">
  <div className="px-4 py-2 text-left text-xl font-bold text-black-800 bg-blue-100 border-b-2 border-blue-300 ">
    Grade Explanation
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-2">"R" – Remediated</h3>
    <p className="mb-3"><span className="font-medium">Meaning:</span> The student initially failed or was insufficient, but later passed through a remedial test or recovery process.</p>
    <p className="mb-3"><span className="font-medium">Typical Placement:</span> After the grade or in a separate column.</p>
    
    <div className="mt-4">
      <p className="font-medium mb-2">Example:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>I → <span className="font-medium">R/S</span> (Started as Insufficient, recovered to Satisfactory)</li>
        <li>Or: R alone if only the recovery is being noted.</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default ResultsOverview;