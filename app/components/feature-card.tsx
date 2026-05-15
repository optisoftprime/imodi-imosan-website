type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/20 hover:bg-slate-800/90">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-4 text-slate-300">{description}</p>
    </article>
  );
}
