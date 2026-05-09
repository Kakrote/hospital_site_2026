import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { DepartmentRecord } from "../lib";

type RelatedDepartmentCardProps = {
  department: DepartmentRecord;
};

export default function RelatedDepartmentCard({ department }: RelatedDepartmentCardProps) {
  return (
    <Link
      href={`/departments/${department.routeSlug}`}
      className="group flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#1566a8]/30 hover:shadow-[0_18px_48px_rgba(21,102,168,0.14)]"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
        {department.image ? (
          <Image
            src={department.image}
            alt={department.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="80px"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1566a8]">
              Department
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-950">
              {department.title}
            </h3>
          </div>
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#1566a8]" />
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
          {department.description}
        </p>
      </div>
    </Link>
  );
}
