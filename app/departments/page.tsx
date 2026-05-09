import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2 } from "lucide-react";
import { getAllDepartments } from "./lib";

export default function DepartmentsPage() {
    const departments = getAllDepartments();

    const totalDepartments = departments.length;

    return (
        <main className="relative overflow-hidden bg-slate-50 text-slate-900">
            {/* <div className="absolute inset-x-0 top-0 h-128 bg-[radial-gradient(circle_at_top,rgba(21,102,168,0.14),transparent_55%)]" /> */}
            <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-[#d8a519]/10 blur-3xl" />
            <div className="absolute -right-16 top-48 h-80 w-80 rounded-full bg-[#1566a8]/10 blur-3xl" />

            <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                   

                    <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl  lg:text-6xl">
                        Departments designed around real patient journeys.
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                        Explore every department at UHDC Dehradun, from diagnosis to treatment, with focused teams,
                        practical working hours, and clear access to care.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                            <BadgeCheck className="h-4 w-4 text-[#1566a8]" />
                            {totalDepartments} active departments
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                            <BadgeCheck className="h-4 w-4 text-[#d8a519]" />
                            Patient-first specialist care
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {departments.map((dept) => (
                        <Link
                            key={dept.routeSlug}
                            href={`/departments/${dept.routeSlug}`}
                            className="group flex h-full flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#1566a8]/30 hover:shadow-[0_24px_80px_rgba(21,102,168,0.18)]"
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                {dept.image ? (
                                    <Image
                                        src={dept.image}
                                        alt={dept.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-linear-to-br from-[#1566a8] to-[#0f2744] text-white">
                                        <Building2 className="h-14 w-14 opacity-80" />
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                
                                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                                        {dept.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <p className="text-base leading-7 text-slate-600">
                                    {dept.description}
                                </p>

                                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1566a8]">
                                        View details
                                    </span>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1566a8] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#0f4f84]">
                                        <ArrowRight className="h-5 w-5" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}