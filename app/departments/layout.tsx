import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Departments",
  description: "Explore the wide range of medical departments and specialized healthcare services offered at Uttaranchal Hospital & Diagnostic Centre (UHDC).",
  openGraph: {
    title: "Medical Departments | UHDC Dehradun",
    description: "Explore the wide range of medical departments and specialized healthcare services offered at Uttaranchal Hospital & Diagnostic Centre (UHDC).",
  },
};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
