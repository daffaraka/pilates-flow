import React from 'react';

export const metadata = {
  title: 'Our Classes | Pilates Studio',
  description: 'Explore our Pilates classes including Reformer, Mat, and Private sessions.',
};

export default async function ClassesPage() {
  // Server-side fetching from Laravel API
  let classes = [];
  try {
    const res = await fetch('http://127.0.0.1:8000/api/public/classes', { 
      next: { revalidate: 60 } // Revalidate every minute
    });
    if (res.ok) {
      classes = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch classes:', error);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Class Catalog</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find the perfect class for your level and focus area.
          </p>
        </div>

        {classes.length === 0 ? (
          <div className="text-center text-foreground/50 py-12">
            No classes available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <div key={cls.id} className="bg-ivory border border-sage/30 rounded-3xl overflow-hidden hover:shadow-lg transition flex flex-col">
                {cls.photo ? (
                  <div className="h-48 w-full bg-sage/20 relative">
                    <img src={`http://127.0.0.1:8000/storage/${cls.photo}`} alt={cls.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-sage/20 flex items-center justify-center text-3xl">🧘‍♀️</div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-semibold">{cls.title}</h2>
                    <span className="bg-blush px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {cls.level}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-sage mb-4 capitalize">{cls.category}</p>
                  <p className="text-foreground/70 mb-6 flex-1">
                    {cls.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cls.equipment?.map((eq, i) => (
                      <span key={i} className="text-xs bg-white border border-sage/20 px-2 py-1 rounded">
                        {eq}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20booking%20kelas%20${encodeURIComponent(cls.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-sage text-white text-center rounded-xl font-semibold hover:bg-sage-light transition mt-auto"
                  >
                    Book Class
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
