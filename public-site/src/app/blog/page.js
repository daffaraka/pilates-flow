import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Pilates Studio',
  description: 'Read our latest articles on Pilates, wellness, and mindful movement.',
};

export default async function BlogPage() {
  // Server-side fetching from Laravel API
  let posts = [];
  try {
    const res = await fetch('http://127.0.0.1:8000/api/public/blog-posts', { 
      next: { revalidate: 60 } 
    });
    if (res.ok) {
      posts = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">The Mindful Movement Blog</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights, tips, and inspiration for your Pilates journey.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-foreground/50 py-12">
            No blog posts available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="bg-ivory rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition h-full flex flex-col border border-sage/10">
                  {post.cover_image ? (
                    <div className="h-48 w-full bg-sage/20 relative overflow-hidden">
                      <img 
                        src={`http://127.0.0.1:8000/storage/${post.cover_image}`} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-sage/20 flex items-center justify-center text-sage">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-sage font-semibold mb-2">
                      {new Date(post.published_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-sage transition">{post.title}</h2>
                    <p className="text-foreground/70 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="text-sage font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
