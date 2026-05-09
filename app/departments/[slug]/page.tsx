import Image from "next/image";
import { notFound } from "next/navigation";
import { Hospital } from "lucide-react";
import {
    getAllDepartments,
    getDepartmentBySlug,
} from "../lib";
import DepartmentSection from "../components/department-section";
import ConsultantCard from "../components/consultant-card";
import WorkingHoursCard from "../components/working-hours-card";
import RelatedDepartmentCard from "../components/related-department-card";
import FAQAccordion from "../components/faq-accordion";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getAllDepartments().map((department) => ({
        slug: department.routeSlug,
    }));
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    const department = getDepartmentBySlug(slug);

    if (!department) {
        notFound();
    }

    const consultants = department.content?.department_Consultant ?? [];
    const workingHours = department.content?.working_hours;
    const faqs = department.content?.faq ?? [];
    const overview = department.content?.overview ?? department.description;
    const relatedDepartments = getAllDepartments()
        .filter((item) => item.routeSlug !== department.routeSlug)
        .slice(0, 3);

    return (
        <main className="relative overflow-hidden bg-slate-50 text-slate-900">
            {/* <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(21,102,168,0.18),transparent_55%)]" /> */}
            {/* <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#d8a519]/10 blur-3xl" /> */}
            {/* <div className="absolute -right-20 top-56 h-96 w-96 rounded-full bg-[#1566a8]/10 blur-3xl" /> */}

            <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <div className="grid gap-8 ">
                    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="relative min-h-104 bg-slate-100 lg:min-h-136">
                                {department.image ? (
                                    <Image
                                        src={department.image}
                                        alt={department.title}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-linear-to-br from-[#1566a8] to-[#0f2744] text-white">
                                        <Hospital className="h-16 w-16 opacity-80" />
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                                        Department spotlight
                                    </p>
                                    <h1 className="mt-3 text-2xl font-black tracking-tight">
                                        {department.title}
                                    </h1>
                                    <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-sm">
                                        {department.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between p-6 sm:p-8">
                                <div>
                                    

                                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
                                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1566a8]">
                                            What this department offers
                                        </p>
                                        <p className="mt-3 text-sm leading-7 text-slate-600 text-justify">
                                            {overview}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8 grid lg:grid-cols-[1.6fr_0.5fr] gap-8">
                    <DepartmentSection
                        // eyebrow=""
                        title="A practical overview of the department"
                        description="The page uses the department JSON as the source of truth, so each specialty can surface its own story without hardcoded content."
                    >
                        <p className="text-base leading-8 text-slate-600 sm:text-lg">
                            {overview}
                        </p>
                    </DepartmentSection>
                    <div className="space-y-8 mt-20 ">
                        <WorkingHoursCard workingHours={workingHours} />

                        {/* <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1566a8]">
                                Quick notes
                            </p>
                            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                                <li>
                                    <span className="font-semibold text-slate-900">Patient first:</span> every department card is driven by the JSON data in <span className="font-medium text-slate-900">data/departments</span>.
                                </li>
                                <li>
                                    <span className="font-semibold text-slate-900">Reusable pieces:</span> hero, consultant, hours, and related-department blocks are split into dedicated components.
                                </li>
                            </ul>
                        </aside> */}
                        <div className="space-y-4">
                            {consultants.length ? (
                                consultants.map((consultant) => (
                                    <ConsultantCard
                                        key={`${consultant.name}-${consultant.designation}`}
                                        consultant={consultant}
                                    />
                                ))
                            ) : (
                                <p className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
                                    Consultant details can be added in the matching department JSON and will appear here automatically.
                                </p>
                            )}
                        </div>
                    </div>
                    

                </div>

                <DepartmentSection
                    // eyebrow="FAQs"
                    title="Frequently asked questions"
                    description="These questions and answers come directly from the matching department JSON file."
                >
                    <FAQAccordion items={faqs} />
                </DepartmentSection>

                <DepartmentSection
                    eyebrow="More departments"
                    title="Browse other specialties"
                >
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {relatedDepartments.map((relatedDepartment) => (
                            <RelatedDepartmentCard
                                key={relatedDepartment.routeSlug}
                                department={relatedDepartment}
                            />
                        ))}
                    </div>
                </DepartmentSection>
            </section>
        </main>
    );
}