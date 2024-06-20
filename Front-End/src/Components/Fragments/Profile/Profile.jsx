import React from 'react';
import NavBar from '../Dashboard/NavBar';
import Footer from '../Dashboard/Footer';

const ProfileDetail = () => {
  return (
   <>
   <NavBar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
        <div className="bg-green-500 text-white text-center p-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          />
          <h1 className="text-xl mt-4">Nama Pengguna</h1>
          <p className="text-sm mt-2">Deskripsi singkat tentang diri Anda. Misalnya, pekerjaan, hobi, atau hal menarik lainnya.</p>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">Kontak</h2>
          <p className="text-gray-700">Email: <a href="mailto:email@domain.com" className="text-green-500">email@domain.com</a></p>
          <p className="text-gray-700 mt-2">Telepon: <a href="tel:+123456789" className="text-green-500">+123456789</a></p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Sosial Media</h2>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-green-500 mt-1">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-green-500 mt-1">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-green-500 mt-1">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default ProfileDetail;
