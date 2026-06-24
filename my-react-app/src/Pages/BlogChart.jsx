import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const BlogChart = ({ posts }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const chartMap = { Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0 };

  posts.forEach((post) => {
    if (post.date) {
      const dateObj = new Date(post.date);
      const dayName = daysOfWeek[dateObj.getDay()];
      if (chartMap[dayName] !== undefined) {
        chartMap[dayName] += 1;
      }
    }
  });

  const chartData = Object.keys(chartMap).map((day) => ({
    day: day,
    blogs: chartMap[day],
  }));

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-6 font-sans select-none box-border">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-1 tracking-wide text-center md:text-left">Blogs Analytics</h2>
        <p className="text-xs text-gray-400 mb-6 text-center md:text-left">Weekly blog publication tracking breakdown</p>
        
        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb " vertical={false} />
              <XAxis dataKey="day" interval={0} tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip cursor={false} formatter={(value) => [`${value} Blogs`, 'Published']} contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: '500', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
              <Bar dataKey="blogs" fill="#2563eb" radius={[6, 6, 0, 0]} maxBarSize={22} activeBar={{ fill: '#1d4ed8' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BlogChart;
