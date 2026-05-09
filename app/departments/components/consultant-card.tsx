import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import type { DepartmentConsultant } from "../lib";

type ConsultantCardProps = {
  consultant: DepartmentConsultant;
};

export default function ConsultantCard({ consultant }: ConsultantCardProps) {
  return (
    <article className="group flex gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-[#1566a8]/30 hover:bg-white sm:p-5">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 sm:h-24 sm:w-24">
        {consultant.image ? (
          <Image
            src={consultant.image}
            alt={consultant.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[#1566a8]" />
          <div>
            <h3 className="text-lg font-semibold text-slate-950">
              {consultant.name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {consultant.designation}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
