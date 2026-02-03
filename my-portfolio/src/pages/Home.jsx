import TypingIntro from "../components/TypingIntro";
import avt from "../assets/avt.jpg";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-start pt-16">
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
          cũng có nhiều ý tưởng trong đầu và lập trình là công cụ giúp mình hiện
          thực hóa các ý tưởng đó. Blog này nhằm chia sẻ kiến thức và kinh
          nghiệm của mình.
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
  );
}
