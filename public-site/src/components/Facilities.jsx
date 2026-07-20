import React from 'react';
import { 
  Bath,
  Droplets,
  Compass,
  Armchair,
  Lock,
  GlassWater,
  Coffee,
  Wifi,
  Layers,
  Car
} from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { name: 'Toilet / Restroom', icon: Bath },
    { name: 'Shower Heater', icon: Droplets },
    { name: 'Musholla', icon: Compass },
    { name: 'Kursi Pijat', icon: Armchair },
    { name: 'Locker Room', icon: Lock },
    { name: 'Free Flow Water', icon: GlassWater },
    { name: 'Waiting Lounge', icon: Coffee },
    { name: 'High-Speed Wi-Fi', icon: Wifi },
    { name: 'Towel Service', icon: Layers },
    { name: 'Parking Area', icon: Car },
  ];

  return (
    <section className="py-24 bg-[#1c1917] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fasilitas Studio</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Kenyamanan Anda adalah prioritas kami. Nikmati berbagai fasilitas premium yang telah kami sediakan untuk pengalaman Pilates terbaik.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/5 rounded-2xl p-6 min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="mb-6 text-white">
                  <Icon size={56} strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-white/90 text-lg">{facility.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
