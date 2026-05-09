import { Clock3 } from "lucide-react";
import type { DepartmentWorkingHours } from "../lib";

type WorkingHoursCardProps = {
  workingHours?: DepartmentWorkingHours;
};

export default function WorkingHoursCard({ workingHours }: WorkingHoursCardProps) {
  if (!workingHours) {
    return null;
  }

  return (
    <aside className="rounded-[1.75rem] border border-[#1566a8]/10 bg-linear-to-br from-[#1566a8] to-[#0f2744] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          <Clock3 className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            {workingHours.title ?? "Working Hours"}
          </p>
          <h3 className="mt-1 text-xl font-bold">Plan your visit</h3>
        </div>
      </div>

      <div className="mt-6 space-y-4 rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
        {workingHours.days ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Days
            </p>
            <p className="mt-2 text-base font-medium text-white">
              {workingHours.days}
            </p>
          </div>
        ) : null}

        {workingHours.time ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Time
            </p>
            <p className="mt-2 text-base font-medium text-white">
              {workingHours.time}
            </p>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
