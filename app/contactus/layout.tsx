import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Uttaranchal Hospital & Diagnostic Centre (UHDC). Find our contact details, location in Dehradun, and reach out for any inquiries.",
  openGraph: {
    title: "Contact Us | UHDC Dehradun",
    description: "Get in touch with Uttaranchal Hospital & Diagnostic Centre (UHDC). Find our contact details, location in Dehradun, and reach out for any inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
