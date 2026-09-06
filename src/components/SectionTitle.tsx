export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
      <span className="w-8 h-1 bg-cyan-400 rounded-full" />
      {title}
    </h2>
  );
}
