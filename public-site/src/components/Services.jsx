import React from 'react';
import { Dumbbell, Activity, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Reformer Pilates',
      description: 'Enhance your strength and flexibility using the versatile Pilates Reformer machine.',
      photo: 'http://127.0.0.1:8000/storage/classes/reformer.png',
      icon: Dumbbell,
    },
    {
      title: 'Mat Pilates',
      description: 'Focus on core strength and body alignment using nothing but your body weight and a mat.',
      photo: 'http://127.0.0.1:8000/storage/classes/mat.png',
      icon: Activity,
    },
    {
      title: 'Private Sessions',
      description: 'One-on-one tailored sessions focused entirely on your personal fitness goals.',
      photo: 'http://127.0.0.1:8000/storage/classes/private.png',
      icon: Star,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Classes</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover a variety of classes designed to help you build a stronger, more balanced body.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="group rounded-3xl bg-ivory border border-blush/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-64 w-full relative overflow-hidden bg-sage/20">
                  <img 
                    src={service.photo} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <div className="mb-4 bg-sage text-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm -mt-16 z-10 relative border-4 border-ivory">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
