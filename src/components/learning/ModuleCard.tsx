import Image from "next/image";
import Link from "next/link";
import { formatDuration, type LearningModule } from "@/config/learning";
export function ModuleCard({ module }: { module: LearningModule }) {
  return (
    <Link
      href={`/learn/${module.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-white hover:border-navy-700 transition-colors"
    >
      <div className="relative aspect-video bg-navy-950">
        <Image
          src={module.poster}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-navy-950/10 group-hover:bg-navy-950/25 transition-colors">
          <span
            aria-hidden="true"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy-900 text-lg shadow"
          >
            ▶
          </span>
        </span>
        <span className="absolute bottom-3 right-3 rounded bg-navy-950 px-2 py-1 text-xs text-white">
          {formatDuration(module.duration)}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">
          Module {module.number} · {module.category}
        </p>
        <h3 className="text-xl mt-3 group-hover:text-navy-700">
          {module.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed">{module.subtitle}</p>
        <p className="mt-5 text-sm font-semibold text-navy-700">
          Watch & read the overview →
        </p>
      </div>
    </Link>
  );
}
