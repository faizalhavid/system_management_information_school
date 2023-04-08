import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import userSWR from 'swr';
const SiswaList = () => {
  const fetcher = async () => {
    const response = await axios.get('http://localhost:5000/siswa');
    return response.data;
  };
  const { data } = userSWR('siswa', fetcher);
  if (!data) return <h2>Loading...</h2>;
  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <Link to="/add" className="bg-green-700 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">
          Add new
        </Link>
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6 ">Nama Siswa</th>
                <th className="py-3 px-6 ">Alamat</th>
                <th className="py-3 px-6 ">Tanggal Lahir</th>
                <th className="py-3 px-6 ">Jenis Kelamin</th>
                <th className="py-3 px-6 ">Nomer Orangtua</th>
                <th className="py-3 px-6 ">Umur</th>
                <th className="py-3 px-1 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((siswa, index) => {
                return (
                  <tr className="bg-white border-b" key={siswa.id}>
                    <td className="py-3 px-1 text-center">{index + 1}</td>
                    <td className="py-3 px-6 text-gray-900">{siswa.name}</td>
                    <td className="py-3 px-6 ">{siswa.address}</td>
                    <td className="py-3 px-6 ">{siswa.birth}</td>
                    <td className="py-3 px-6 ">{siswa.sex}</td>
                    <td className="py-3 px-6 ">{siswa.no_parent}</td>
                    <td className="py-3 px-6 ">{siswa.age}</td>
                    <td className="py-3 px-1 text-center">
                      <Link to={`/edit/${siswa.id}`} className="font-medium bg-blue-400 hover:bg-blue-500 py-1 px-3 rounded text-white mr-1">
                        Edit
                      </Link>
                      <button className="font-medium bg-red-400 hover:bg-red-500 py-1 px-3 rounded text-white">Delete</button>
                    </td>
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SiswaList;
