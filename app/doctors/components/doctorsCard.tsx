'use client';

import Image from 'next/image';
import { Stethoscope, Award } from 'lucide-react';

interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Doctor Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Doctor Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {doctor.name}
        </h3>

        {/* Specialization */}
        <div className="flex items-center gap-2 mb-3">
          <Stethoscope className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <p className="text-gray-700 font-medium">{doctor.specialization}</p>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-green-600 flex-shrink-0" />
          <p className="text-gray-600 text-sm">{doctor.experience} of experience</p>
        </div>

        {/* Appointment Button */}
        <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;