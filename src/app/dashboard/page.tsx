"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Home, FileText, Table, FileInput, Folders, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-[#18181b] text-zinc-200 flex flex-col justify-between" style={{boxShadow: '4px 0 16px 0 #1118'}}>
        <div>
          <div className="px-6 py-6 text-2xl font-bold tracking-wide">BUILD WITH AI</div>
          <div className="px-4">
            <Button className="w-full mb-4 bg-zinc-800 text-zinc-200 font-semibold hover:bg-zinc-700">+ New Report</Button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-1 px-2">
              <li className="bg-[#232323] rounded text-zinc-100 font-semibold px-4 py-2 flex items-center gap-3">
                <Home size={18} color="#fde047" /> Dashboard
              </li>
              <li className="hover:bg-[#232323] rounded px-4 py-2 cursor-pointer flex items-center gap-3"><FileText size={18} color="#fde047"/> Blank Page</li>
              <li className="hover:bg-[#232323] rounded px-4 py-2 cursor-pointer flex items-center gap-3"><Table size={18} color="#fde047"/> Tables</li>
              <li className="hover:bg-[#232323] rounded px-4 py-2 cursor-pointer flex items-center gap-3"><FileInput size={18} color="#fde047"/> Forms</li>
              <li className="hover:bg-[#232323] rounded px-4 py-2 cursor-pointer flex items-center gap-3"><Folders size={18} color="#fde047"/> Tabbed Content</li>
              <li className="hover:bg-[#232323] rounded px-4 py-2 cursor-pointer flex items-center gap-3"><Calendar size={18} color="#fde047"/> Calendar</li>
            </ul>
          </nav>
        </div>
        <div className="px-4 py-6">
          <Button className="w-full bg-yellow-500 text-zinc-900 font-semibold hover:bg-yellow-600">Upgrade to Pro!</Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#232323] text-foreground">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-yellow-400">Dashboard</h1>
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-semibold text-zinc-200">
              <span className="material-icons text-base">add</span> Monthly Reports
            </div>
            {/* Bar Chart */}
            <div className="h-48 bg-zinc-800 rounded">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: "Red", votes: 12 },
                  { name: "Blue", votes: 18 },
                  { name: "Yellow", votes: 3 },
                  { name: "Green", votes: 5 },
                  { name: "Purple", votes: 2 },
                  { name: "Orange", votes: 4 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232323" />
                  <XAxis dataKey="name" stroke="#e4e4e7" />
                  <YAxis stroke="#e4e4e7" />
                  <Tooltip contentStyle={{ background: '#18181b', color: '#fde047', borderColor: '#facc15' }} />
                  <Legend wrapperStyle={{ color: '#fde047' }} />
                  <Bar dataKey="votes" fill="#fde047" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2 font-semibold text-zinc-200">
              <span className="material-icons text-base">check</span> Resolved Reports
            </div>
            {/* Line Chart */}
            <div className="h-48 bg-zinc-800 rounded">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { name: "Red", votes: 17 },
                  { name: "Blue", votes: 19 },
                  { name: "Yellow", votes: 7 },
                  { name: "Green", votes: 2 },
                  { name: "Purple", votes: 1 },
                  { name: "Orange", votes: 2 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232323" />
                  <XAxis dataKey="name" stroke="#e4e4e7" />
                  <YAxis stroke="#e4e4e7" />
                  <Tooltip contentStyle={{ background: '#18181b', color: '#fde047', borderColor: '#facc15' }} />
                  <Legend wrapperStyle={{ color: '#fde047' }} />
                  <Line type="monotone" dataKey="votes" stroke="#fde047" strokeWidth={3} dot={{ r: 4, fill: '#fde047' }} activeDot={{ r: 6, fill: '#fde047' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Latest Reports Table */}
        <div className="bg-zinc-900 rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4 font-semibold text-zinc-200">
            <span className="material-icons text-base">list</span> Latest Reports
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-zinc-800 text-zinc-200">
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
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-[#18181b]' : 'bg-zinc-800'} text-zinc-100 hover:bg-zinc-800 transition-colors`}>
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