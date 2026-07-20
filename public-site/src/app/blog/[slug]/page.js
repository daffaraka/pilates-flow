import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/public/blog-posts/${slug}`);
    if (res.ok) {
      const post = await res.json();
      return {
        title: `${post.title} | Pilates Studio Blog`,
        description: post.meta_description || post.excerpt,
      };
    }
  } catch (error) {
    console.error('Failed to fetch post for metadata:', error);
  }
  
  return {
    title: 'Blog Post | Pilates Studio',
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  let post = null;
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/public/blog-posts/${slug}`, {
      next: { revalidate: 60 }
    });
    
    if (res.ok) {
      post = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      {post.cover_image && (
        <div className="w-full h-[50vh] relative bg-sage/20">
          <img 
            src={`http://127.0.0.1:8000/storage/${post.cover_image}`} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}
      
      <div className={`max-w-3xl mx-auto px-4 ${post.cover_image ? '-mt-24 relative z-10' : 'pt-24'}`}>
        <article className="bg-ivory rounded-3xl p-8 md:p-12 shadow-xl border border-blush/30 mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sage font-semibold mb-8 hover:opacity-80 transition">
            <span aria-hidden="true">&larr;</span> Back to Blog
          </Link>
          
          <div className="text-sm text-foreground/50 font-semibold mb-4 uppercase tracking-wider">
            {new Date(post.published_at).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          
          {/* Using dangerouslySetInnerHTML assuming Laravel sends pre-rendered HTML content */}
          <div 
            className="prose prose-sage prose-lg max-w-none text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
