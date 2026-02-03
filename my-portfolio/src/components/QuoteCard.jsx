export default function QuoteCard({ text, author }) {
  return (
    <div className="bg-slate-600/50 px-6 py-4 border-l-3 border-blue-400 rounded-md">
      <p className="italic text-lg text-white">“{text}”</p>
      <p className="mt-3 text-right text-slate-400">— {author}</p>
    </div>
  );
}
