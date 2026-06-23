import React, { useState } from 'react'

const Users = () => {
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
  { id:11, name: "Bharat Baraiya", position: "hardwere", salary:20000},
  { id:12, name: "Naresh chuhan", position: "Data Analist", salary:25000},
  { id:13, name: "Arayan Baraiya", position: "Paython Devloper", salary:28000},
  { id:14, name: "Arjun Gouswami", position: "Sistem Desing", salary:29000}
];
const [users,setUsers] = useState(initialUsers);
const [searchBar,setSearchBar] = useState("");
const [sortBy,setSortBy] = useState("");
const [currentPage,setCurrentPage] = useState(1);
const itemPerPage = 4;
// deleted function
const handalDelete = (id) =>{
  const updateList = users.filter(user=>user.id !== id);
  setUsers(updateList);
}

// search and sorting
let displayedUsers = [...users];

// name fillter 

if(searchBar !== ''){
  displayedUsers = displayedUsers.filter(user=>
    user.name.toLowerCase().includes(searchBar.toLowerCase())
  )
};


// sallary high and lowe 
if(sortBy==='low-to-high'){
  displayedUsers.sort((a,b)=>a.salary  - b.salary);

}else if(sortBy === 'high-to-low'){
displayedUsers.sort((a,b)=>b.salary - a.salary);
}
// pagenation 
const indexofLastUser = currentPage * itemPerPage;
const indexofFirstuser = indexofLastUser - itemPerPage;

const currentuser = displayedUsers.slice(indexofFirstuser,indexofLastUser);

const totalPage = Math.ceil(displayedUsers.length / itemPerPage);
  return (
    <div className='p-8 max-w-6xl mx-auto my-6 font-sans select-none'>
      <h1 className='text-3xl font-extrabold text-gray-800 text-center md:text-left mb-2'>Users Management</h1>
      <h3 className='text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block mb-6'>Total user : {displayedUsers.length}</h3>
      <div className='flex flex-col sm:flex-row gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100'>
        <input type='text'
         placeholder='Search user by name...' 
         className='flex-1 px-4 py-2.5 bg-white border border-gray-200 
         rounded-lg outline-none focus:border-blue-500 text-sm transition-all shadow-xs'
         value={searchBar} 
         onChange={(e)=>setSearchBar(e.target.value)}/>

         <select value={sortBy}
         className='px-4 py-2.5 bg-white border border-gray-200 rounded-lg outline-none
          focus:border-blue-500 text-sm transition-all shadow-xs cursor-pointer' 
         onChange={(e)=>setSortBy(e.target.value)}>
          <option value=''>-- Sort By Salary --</option>
          <option value='low-to-high'>Salary: Low-to-High</option>
          <option value='high-to-low'>Salary: High-to-low</option>
         </select>
      </div>
      {/* users card-grid */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {displayedUsers.length > 0 ? (
          currentuser.map((user)=> (
            <div className='bg-white border border-gray-100 rounded-xl p-5 shadow-xs hover:shadow-md
             transition-all flex flex-col justify-between relative group' key={user.id}>
               {/* username */}
              <h3 className='text-lg font-bold text-gray-800 mb-1 tracking-wide truncate capitalize'>
                {user.name}
                </h3>

              {/* userpostion */}
              <p className='text-xs font-medium text-blue-600 bg-blue-50/70 px-2 py-1 rounded inline-block mb-4'>
                {user.position}
              </p>

              {/* userSalary */}
                <p className='text-sm font-semibold text-gray-600 flex items-center gap-1 mb-6'>
                  {user.salary}
                </p>

                <button type='button' 
                className='w-full py-2 bg-red-50 hover:bg-red-500 text-red-600
                 hover:text-white font-medium text-xs rounded-lg
                 transition-all duration-200 border border-red-100 hover:border-red-500 cursor-pointer text-center'
                onClick={()=>handalDelete(user.id)}>
                  Delete
                </button>
            </div>
          ))
        ) :(
          <p 
          className='col-span-full text-center py-10 text-gray-500 font-medium bg-gray-50 rounded-xl 
          border border-dashed border-gray-200'>
            No users found.
            </p> 
          )}
      </div>
      <div className='flex justify-between items-center bg-gray-50 p-4
       rounded-xl border border-gray-100 sm:flex-row flex-col gap-3'>
        <button disabled={currentPage===1}
        className='px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium 
        text-xs rounded-lg transition-all enabled:hover:bg-gray-100 disabled:opacity-50 
        disabled:cursor-not-allowed cursor-pointer shadow-xs'
        onClick={()=>setCurrentPage(currentPage - 1)}>
          Previous
        </button>

        <span className='text-xs font-semibold text-gray-600 bg-white px-3 py-1.5
         rounded-md border border-gray-200 shadow-2xs'>
          page {currentPage} of {totalPage}</span>

        <button 
        className='px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium
         text-xs rounded-lg transition-all enabled:hover:bg-gray-100
         disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-xs'
        disabled={currentPage===totalPage} onClick={()=>setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
      
    </div>
  )
}

export default Users
