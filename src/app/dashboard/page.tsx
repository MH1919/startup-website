"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between">
        <div>
          <div className="px-6 py-6 text-2xl font-bold">ADMIN</div>
          <div className="px-4">
            <Button className="w-full mb-4 bg-white text-blue-600 font-semibold">+ New Report</Button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-1 px-2">
              <li className="bg-blue-700 rounded text-white font-semibold px-4 py-2 flex items-center gap-2">
                <span className="material-icons">dashboard</span> Dashboard
              </li>
              <li className="hover:bg-blue-500 rounded px-4 py-2 cursor-pointer">Blank Page</li>
              <li className="hover:bg-blue-500 rounded px-4 py-2 cursor-pointer">Tables</li>
              <li className="hover:bg-blue-500 rounded px-4 py-2 cursor-pointer">Forms</li>
              <li className="hover:bg-blue-500 rounded px-4 py-2 cursor-pointer">Tabbed Content</li>
              <li className="hover:bg-blue-500 rounded px-4 py-2 cursor-pointer">Calendar</li>
            </ul>
          </nav>
        </div>
        <div className="px-4 py-6">
          <Button className="w-full bg-blue-800 text-white">Upgrade to Pro!</Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-semibold">
              <span className="material-icons text-base">add</span> Monthly Reports
            </div>
            {/* Bar Chart Placeholder */}
            <div className="h-48 flex items-center justify-center bg-gray-100 rounded">Bar Chart</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-semibold">
              <span className="material-icons text-base">check</span> Resolved Reports
            </div>
            {/* Line Chart Placeholder */}
            <div className="h-48 flex items-center justify-center bg-gray-100 rounded">Line Chart</div>
          </div>
        </div>
        {/* Latest Reports Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4 font-semibold">
            <span className="material-icons text-base">list</span> Latest Reports
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2 text-left">NAME</th>
                  <th className="px-4 py-2 text-left">LAST NAME</th>
                  <th className="px-4 py-2 text-left">PHONE</th>
                  <th className="px-4 py-2 text-left">EMAIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Lian", last: "Smith", phone: "622322662", email: "jonsmith@mail.com" },
                  { name: "Emma", last: "Johnson", phone: "622322662", email: "jonsmith@mail.com" },
                  { name: "Oliver", last: "Williams", phone: "622322662", email: "jonsmith@mail.com" },
                  { name: "Isabella", last: "Brown", phone: "622322662", email: "jonsmith@mail.com" },
                  { name: "Lian", last: "Smith", phone: "622322662", email: "jonsmith@mail.com" },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.last}</td>
                    <td className="px-4 py-2">{row.phone}</td>
                    <td className="px-4 py-2">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
} 