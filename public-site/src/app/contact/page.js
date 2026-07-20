import React from 'react';

export const metadata = {
  title: 'Contact Us | Pilates Studio',
  description: 'Get in touch with us for class bookings, inquiries, or more information about our Pilates studio.',
};

export default async function ContactPage() {
  // Try to fetch settings, fallback to defaults if not available
  let settings = {
    whatsapp_number: '6281234567890',
    instagram: '@pilatesstudio',
    address: '123 Wellness Avenue, Mindful City',
    email: 'hello@pilatesstudio.com'
  };

  try {
    const res = await fetch('http://127.0.0.1:8000/api/public/settings', { 
      next: { revalidate: 3600 } 
    });
    if (res.ok) {
      const serverSettings = await res.json();
      settings = { ...settings, ...serverSettings };
    }
  } catch (error) {
    console.error('Failed to fetch settings:', error);
  }

  // Format WhatsApp number for URL (remove non-digits, ensure starts with country code)
  const waUrl = `https://wa.me/${settings.whatsapp_number.replace(/\D/g, '')}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Pilates%20Studio`;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-ivory text-foreground">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for bookings, questions, or just to say hello.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-blush/30 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-8 md:p-12 bg-sage text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-white/80">{settings.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">💬</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-white/80">{settings.whatsapp_number}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">✉️</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-white/80">{settings.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">📸</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <p className="text-white/80">{settings.instagram}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="p-8 md:p-12 flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
              <p className="text-foreground/70 mb-8">
                The fastest way to book a class or get your questions answered is through our WhatsApp admin.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-sage text-white font-semibold rounded-xl hover:bg-sage-light transition shadow-md w-full"
              >
                Chat with Admin
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
