import React from 'react';
import { Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Mediterranean Cooking",
    excerpt: "Discover why the Mediterranean diet is considered one of the healthiest in the world...",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    author: "Emma Green",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Meal Prep Tips for Busy Professionals",
    excerpt: "Learn how to efficiently prepare your meals for the week while maintaining nutritional value...",
    image: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&q=80",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Understanding Plant-Based Proteins",
    excerpt: "A comprehensive guide to getting enough protein on a plant-based diet...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    author: "Sarah Wilson",
    date: "March 10, 2024",
    readTime: "6 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <button className="text-emerald-600 font-medium hover:text-emerald-700">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}