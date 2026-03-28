import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { posts } from "../data/blogData";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="min-h-screen text-slate-300 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="text-3xl font-bold mb-10 text-slate-300">
          Dưới đây là những bài viết chia sẻ kiến thức và cuộc sống của mình
        </h1>
        <div className="relative mb-16 max-w-2xl">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md py-3 px-4 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-3 text-slate-400" size={20} />
        </div>

        {/* Danh sách bài viết */}
        <div className="space-y-14">
          {filteredPosts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 group"
            >
              {/* Cột ngày tháng */}
              <div className="text-zinc-500 font-medium pt-1 text-sm md:text-base">
                {post.date}
              </div>

              {/* Cột nội dung */}
              <div className="max-w-none">
                <h2 className="text-2xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <div className="flex gap-3 text-[11px] font-bold text-blue-500 tracking-widest mt-2 uppercase">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="text-zinc-400 mt-3 leading-relaxed font-medium">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-zinc-500 mt-10">
              Không tìm thấy bài viết nào phù hợp.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
