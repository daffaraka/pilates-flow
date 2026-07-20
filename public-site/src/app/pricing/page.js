import React from 'react';

export const metadata = {
  title: 'Pricing | Pilates Studio',
  description: 'View our membership packages and class pricing.',
};

export default async function PricingPage() {
  // Server-side fetching from Laravel API
  let packages = [];
  try {
    const res = await fetch('http://127.0.0.1:8000/api/public/pricing-packages', { 
      next: { revalidate: 60 } 
    });
    if (res.ok) {
      packages = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch pricing packages:', error);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-ivory text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Memberships & Pricing</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Invest in your wellness with our flexible pricing options.
          </p>
        </div>

        {packages.length === 0 ? (
          <div className="text-center text-foreground/50 py-12">
            No pricing packages available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-3xl p-8 border ${
                  pkg.is_featured ? 'border-sage shadow-2xl scale-105 relative' : 'border-blush/30 shadow-sm'
                }`}
              >
                {pkg.is_featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                
                <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-foreground/70 mb-6 min-h-[48px]">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-sage">Rp {Number(pkg.price).toLocaleString('id-ID')}</span>
                  <span className="text-foreground/50"> / {pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sage mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20membeli%20paket%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center rounded-xl font-semibold transition ${
                    pkg.is_featured ? 'bg-sage text-white hover:bg-sage-light' : 'bg-blush text-foreground hover:bg-blush/80'
                  }`}
                >
                  Choose Package
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
