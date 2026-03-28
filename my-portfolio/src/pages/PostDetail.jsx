import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogData";
import {
  Calendar,
  Timer,
  FileText,
  Clipboard,
  Check,
  ChevronLeft,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { useState } from "react";

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Logic hiển thị tên ngôn ngữ (VD: java -> Java)
  const displayLang = language.charAt(0).toUpperCase() + language.slice(1);

  return (
    <div className="relative group my-8 overflow-hidden rounded-xl border border-zinc-800 shadow-2xl">
      {/* 1. THANH MAC-STYLE TRÊN CÙNG - Đã bỏ justify-between để dồn về bên trái */}
      <div className="flex items-center px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {/* Nút close/minimize/maximize mac-style */}
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70 hover:opacity-100 transition"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70 hover:opacity-100 transition"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70 hover:opacity-100 transition"></span>
        </div>

        {/* 2. HIỂN THỊ NGÔN NGỮ - Nằm sát bên trái sau các nút mac-style */}
        <div className="ml-4 flex items-center gap-2 py-1 text-[13px] font-mono text-zinc-400 border-l border-zinc-800 pl-4">
          <FileText size={14} className="text-zinc-500" />
          <span>{displayLang}</span>
        </div>

        {/* 3. NÚT COPY - Dùng ml-auto để đẩy về phía bên phải */}
        <button
          onClick={handleCopy}
          className="ml-auto z-20 p-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-400 
                     opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-zinc-700 hover:text-white"
          title="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Clipboard size={16} />
          )}
        </button>
      </div>

      <SyntaxHighlighter
        style={oneDark}
        language={language}
        PreTag="div"
        className="rounded-b-xl !m-0 !p-6"
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="text-white pt-20 text-center font-mono bg-black min-h-screen">
        Bài viết không tồn tại!
      </div>
    );

  return (
    <section className="min-h-screen pt-8 pb-20 text-slate-300 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        {/* Nút quay lại */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors mb-8 group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Quay lại Blog</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-2xl md:text-[2.5rem] font-bold text-slate-200 leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm border-y border-zinc-800/50 py-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-red-500/70" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer size={16} className="text-yellow-500/70" />
              <span>3 phút đọc</span>
            </div>
          </div>
        </header>

        {/* NỘI DUNG BÀI VIẾT */}
        <div className="prose prose-invert max-w-none prose-pre:bg-transparent prose-pre:p-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const content = String(children).replace(/\n$/, "");
                const lang = match ? match[1] : "text";
                const fileName = match
                  ? `${lang.charAt(0).toUpperCase() + lang.slice(1)}.java`
                  : "CodeBlock";

                return !inline && match ? (
                  <CodeBlock
                    language={lang}
                    value={content}
                    fileName={fileName}
                  />
                ) : (
                  <code
                    className="bg-zinc-800/50 border border-zinc-700 px-1.5 py-0.5 rounded text-blue-400 font-mono text-sm"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-100 mt-16 mb-8 flex items-center gap-4">
                  <span className="w-1 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-lg leading-relaxed text-zinc-400 mb-8 font-light">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-none space-y-4 mb-10 pl-2">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-3 text-zinc-400 text-lg">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0"></span>
                  <span>{children}</span>
                </li>
              ),
              hr: () => <hr className="border-zinc-800 my-16" />,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500/50 bg-blue-500/5 p-6 rounded-r-xl italic text-zinc-300 my-10">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
