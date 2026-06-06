import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: "Meet our team of highly experienced and skilled doctors at Uttaranchal Hospital & Diagnostic Centre (UHDC) across various specialties.",
  openGraph: {
    title: "Our Doctors | UHDC Dehradun",
    description: "Meet our team of highly experienced and skilled doctors at Uttaranchal Hospital & Diagnostic Centre (UHDC) across various specialties.",
  },
};

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
