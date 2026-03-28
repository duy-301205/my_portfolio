import React, { useState } from "react";
import { Search, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectData";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <section className="min-h-screen text-slate-300 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-2">
        <h1 className="text-2xl md:text-4xl font-bold mb-10 text-slate-300 tracking-tight">
          Sản phẩm tâm huyết
        </h1>

        <div className="relative mb-16 max-w-2xl">
          <input
            type="text"
            placeholder="Tìm theo tên dự án hoặc công nghệ..."
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md py-3 px-4 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-3 text-slate-400" size={20} />
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 group"
            >
              {/* Cột năm thực hiện */}
              <div className="text-zinc-500 font-mono pt-1 text-sm md:text-lg flex items-center md:items-start gap-2">
                <span className="w-8 h-[1px] bg-zinc-800 hidden md:block mt-3.5"></span>
                {project.year}
              </div>

              {/* Cột nội dung dự án */}
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h2>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold text-blue-500/80 border border-blue-500/20 px-2 py-0.5 rounded tracking-[0.15em] uppercase bg-blue-500/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nút link nhanh nếu Duy muốn trỏ thẳng ra GitHub */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Github size={30} />
                  </a>
                </div>

                <p className="text-zinc-400 mt-5 leading-relaxed text-lg font-light max-w-3xl">
                  {project.description}
                </p>

                {/* Đường gạch chân trang trí mờ */}
                <div className="absolute -bottom-8 left-0 w-full h-[1px] bg-gradient-to-r from-zinc-800/50 to-transparent"></div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-zinc-900/20 rounded-2xl border border-dashed border-zinc-800">
              <p className="text-zinc-500 italic">
                Không tìm thấy dự án nào khớp với từ khóa này...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
