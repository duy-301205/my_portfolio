import TypingIntro from "../components/TypingIntro";
import avt from "../assets/avt.jpg";
import { posts } from "../data/blogData";
import { Link } from "react-router-dom";

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  return (
    <div className="space-y-30 pb-20">
      <section className=" grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-start pt-16">
        {/* LEFT */}
        <div className="max-w-xl space-y-6">
          <h1
            className="text-[1.25rem] md:text-[2.25rem] font-semibold whitespace-nowrap
             bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400
             bg-[length:200%_200%]
             bg-clip-text text-transparent
             animate-gradient-x"
          >
            Chào bạn, cảm ơn đã ghé thăm !
          </h1>

          <p className="text-xl md:text-xl font-black text-slate-300 mb-3 leading-tight">
            Mình là Duy – một lập trình viên đầy nhiệt huyết.
          </p>

          <TypingIntro
            sentences={[
              "Sinh năm 2005 tại Nam Định.",
              "Đang học tập tại HUS – VNU.",
              "Mình thích chơi game 🎮 và nghe nhạc 🎧.",
              "Mình thích xem những bộ phim của Ghibli:))",
              "Thích động vật, đặc biệt là chó 🐶.",
            ]}
          />

          <p className="text-lg font-black text-gray-400 leading-loose">
            Mình biết đến và yêu thích lập trình từ khi vào đại học.Mình lúc nào
            cũng có nhiều ý tưởng trong đầu và lập trình là công cụ giúp mình
            hiện thực hóa các ý tưởng đó. Blog này nhằm chia sẻ kiến thức và
            kinh nghiệm của mình.
          </p>

          <p className="font-black text-lg text-gray-400 leading-loose">
            Chúc các bạn đọc vui vẻ 🍻
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <img
            src={avt}
            alt="Avatar"
            className="w-[360px] h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      <hr className="border-zinc-800" />

      <section className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-200">
              Bài viết mới nhất
            </h2>
            <p className="text-zinc-500 mt-2">
              Chia sẻ về lập trình và cuộc sống
            </p>
          </div>
          <Link
            to="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium border-b border-blue-400/30 pb-1"
          >
            Xem tất cả bài viết →
          </Link>
        </div>

        <div className="space-y-12">
          {recentPosts.map((post) => (
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
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex gap-3 text-[10px] font-bold text-blue-500 tracking-widest mt-2 uppercase">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="text-zinc-400 mt-3 leading-relaxed font-medium line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
