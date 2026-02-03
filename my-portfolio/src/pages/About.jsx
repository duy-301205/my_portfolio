import logo from "../assets/logo.jpg";
import { Github, Mail, Facebook } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-[calc(100vh-64px)] pt-16 text-slate-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
        {/* LEFT – PROFILE */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="w-60 h-60 rounded-full object-cover mb-6 shadow-lg"
          />

          <h2 className="text-2xl font-medium text-white">Hoàng Mạnh Duy</h2>

          <p className="text-slate-400 mt-4">Learner · Builder · Developer</p>
          <div className="flex gap-6 mt-4 text-slate-400">
            <a
              href="https://github.com/duy-301205"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={30} strokeWidth={1.5} />
            </a>

            <a
              href="mailto:hduy9863@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={30} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.facebook.com/duy.hoang.810739/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Facebook size={30} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* RIGHT – PROFILE */}
        <div className="md:col-span-2 font-black">
          <h1 className="text-2xl md:text-2.5xl text-white mb-6">
            Chào bạn 👋
          </h1>

          <p className="text-gray-400 leading-relaxed mb-4">
            Mình là Duy, đang sinh sống và học tập tại Hà Nội.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Là sinh viên năm 3 ngành Khoa học Máy tính và Thông tin tại Trường
            Đại học Khoa học Tự Nhiên (VNU-HUS). Hiện tại mình đang cố gắng để
            tìm kiếm 1 cơ hội học hỏi và làm việc về mảng Backend-Developer.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Blog này ra đời như một "cuốn nhật kí" - nơi mình lưu trữ những ý
            tưởng, bài học thực tế và cả những trải nghiệm của bản thân trên
            hành trình trưởng thành. Với mình, kiến thức chỉ thực sự có giá trị
            khi được trao đi.
          </p>
          <div className="my-8">
            <div className="bg-slate-600/60 px-6 py-2 rounded-md shadow-md">
              <p className="italic font-bold text-white text-lg">
                "Sharing is learning!"
              </p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            Cảm ơn bạn đã ghé thăm. Hy vọng bạn sẽ tìm thấy điều gì đó thú vị
            hoặc một chút cảm hứng tại đây!
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            Chúc bạn một ngày mới tràn đầy năng lượng và niềm vui!
          </p>
          <p className="text-slate-500 text-sm italic border-t border-slate-800 pt-1">
            Inspired by TungTT.
          </p>
        </div>
      </div>
    </section>
  );
}
