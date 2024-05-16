import React from 'react';
import Navbar from '../components/navbar';

const users = [
    {
        name: 'John Doe',
        email: 'jhon123@gmail.com',
        image: ''
    },
    {
        name: 'Jane Doe',
        email: 'jane123@gmail.com',
        image: ''
    }
];


const currentUser = users[0];

export default function Dashboard() {
  return (
    <div>
      <Navbar user={currentUser} />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Selamat datang di halaman dashboard Anda!</p>
        {/* Tambahkan konten dashboard lainnya di sini */}
      </div>
    </div>
  );
}
