import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Uttaranchal Hospital & Diagnostic Centre (UHDC), our mission, vision, and our commitment to providing quality healthcare in Dehradun.",
  openGraph: {
    title: "About Us | UHDC Dehradun",
    description: "Learn more about Uttaranchal Hospital & Diagnostic Centre (UHDC), our mission, vision, and our commitment to providing quality healthcare in Dehradun.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
