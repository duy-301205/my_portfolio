import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blogData";
import { Calendar, Timer, FileText } from "lucide-react";
// 1. Import các thư viện mới
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="text-white pt-20 text-center">
        Bài viết không tồn tại!
      </div>
    );

  return (
    <section className="min-h-screen pt-8 pb-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-14">
        {" "}
        {/* Giữ px-14 để thẳng hàng Logo Duy nhé */}
        <header className="pt-10 mb-8">
          <h1 className="text-3xl md:text-[2.75rem] font-bold text-slate-200 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex gap-4 text-sm font-bold text-blue-500 tracking-widest uppercase mb-6">
            {post.tags?.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-red-500" />
              <span>{post.date}</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-2">
              <Timer size={16} className="text-yellow-500" />
              <span>3 phút đọc</span>
            </div>
          </div>
        </header>
        <div className="border-b border-zinc-800/50 mb-12"></div>
        {/* 2. RENDER NỘI DUNG VỚI REACT MARKDOWN */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Định dạng lại thẻ code
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-xl border border-zinc-800 my-6 shadow-2xl"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-zinc-800 px-1.5 py-0.5 rounded text-blue-400"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              // Duy có thể định dạng thêm H2, P, v.v. ở đây để chúng đẹp hơn
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-lg leading-relaxed text-zinc-400 mb-6">
                  {children}
                </p>
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
