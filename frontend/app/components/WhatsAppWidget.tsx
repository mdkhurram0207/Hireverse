import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactUsWidget() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600  rounded-full shadow-lg px-5 py-3 flex items-center gap-2 transition"
      title="Contact Us"
    >
      <MessageCircle size={22} />
      <span className="font-medium">Contact Us</span>
    </Link>
  );
}
