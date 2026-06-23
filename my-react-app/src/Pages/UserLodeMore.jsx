import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: "Amit kantariya", position: "Frontend Developer", salary: 50000 },
  { id: 2, name: "Bhavin parmar", position: "Backend Developer", salary: 75000 },
  { id: 3, name: "Chirag parmar", position: "UI/UX Designer", salary: 40000 },
  { id: 4, name: "Deepak chauhan", position: "Project Manager", salary: 90000 },
  { id: 5, name: "Esha jambucha", position: "QA Engineer", salary: 60000 },
  { id: 6, name: "Hardik Parmar", position: "Full Stack Developer", salary: 85000 },
  { id: 7, name: "Jignesh chauhan", position: "Data Analyst", salary: 45000 },
  { id: 8, name: "Karan mori", position: "DevOps Engineer", salary: 95000 },
  { id: 9, name: "Manoj parmar", position: "SEO Specialist", salary: 55000 },
  { id: 10, name: "Nitin Baraiya", position: "HR Manager", salary: 70000 },
  { id: 11, name: "Bharat Baraiya", position: "hardware", salary: 20000 },
  { id: 12, name: "Naresh chuhan", position: "Data Analyst", salary: 25000 },
  { id: 13, name: "Arayan Baraiya", position: "Python Developer", salary: 28000 },
  { id: 14, name: "Arjun Gouswami", position: "System Design", salary: 29000 }
];

const LoadMoreUsers = () => {
  // 1st show users + 4
  const [visibleCount, setVisibleCount] = useState(4);

  // button click this function active
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const displayedUsers = initialUsers.slice(0, visibleCount);

  const hasMore = visibleCount < initialUsers.length;

  return (
    <div className="w-full min-h-screen bg-[#f4f7f6] px-5 py-10 font-sans select-none box-border">
      
      {/* heading section*/}
      <div className="text-center mb-10">
        <h1 className="text-[#2c3e50] text-3xl md:text-[32px] font-bold mb-2.5">Team Directory</h1>
        <p className="text-[#7f8c8d] text-base">Showing <b className="font-bold">{displayedUsers.length}</b> of {initialUsers.length} professionals</p>
      </div>

      {/* usergrid layout*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto w-full items-stretch">
        {displayedUsers.map((user) => (
          <div 
            key={user.id} 
            className="bg-white p-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#3498db] flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-md hover:border-t-[#2ecc71] box-border"
          >
            <div>
              <h3 className="m-0 text-[#2c3e50] text-lg font-bold tracking-wide capitalize mb-2">{user.name}</h3>
              <span className="inline-block px-3 py-1 bg-[#e8f4fd] text-[#3498db] rounded-full text-xs font-semibold mb-4 tracking-wide">
                {user.position}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-[#f1f2f6] flex justify-between items-center w-full">
              <span className="text-[#95a5a6] text-xs font-medium uppercase tracking-wider">Estimated Salary</span>
              <span className="text-[#2ecc71] font-black text-lg">
                ₹{user.salary.toLocaleString('en-IN')}</span>
            </div>
          </div>
        ))}
      </div>

      {/* button section*/}
      <div className="text-center mt-10">
        {hasMore ? (
          <button 
            onClick={handleLoadMore}
            className="px-[30px] py-3 bg-[#3498db] hover:bg-[#2980b9] text-white font-semibold text-base rounded-lg shadow-[0_4px_10px_rgba(52,152,219,0.3)] hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
          >
            Load More Professionals
          </button>
        ) : (
          <div className="text-[#95a5a6] text-sm font-medium bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-3xs inline-block">
              🎉 You've reached the end of the directory.
          </div>
        )}
      </div>

    </div>
  );
};

export default LoadMoreUsers;
