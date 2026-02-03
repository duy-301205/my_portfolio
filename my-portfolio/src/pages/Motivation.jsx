import QuoteCard from "../components/QuoteCard";
import quotes from "../data/quotes";

export default function Motivation() {
  return (
    <section className="min-h-[calc(100vh-64px)] pt-16 text-slate-300">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-black text-gray-300 mb-10">
          Đây là một số câu nói truyền động lực mà tôi cực kì tâm đắc.
        </h1>

        {/* QUOTES */}
        <div className="space-y-8 font-black">
          {quotes.map((q, i) => (
            <QuoteCard key={i} text={q.text} author={q.author} />
          ))}
        </div>
      </div>
    </section>
  );
}
