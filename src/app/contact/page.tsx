"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: connect to API route for email sending
    setTimeout(() => setStatus("sent"), 1000);
  }

  return (
    <>
      {/* Breadcrumb / Header */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/assets/img/page-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-hrz-blue/70" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            We are located in Monterrey, México with easy access to all ports in
            the country for your global warehousing needs. Our warehouse and
            storage facilities in either location allow for bulk storage and
            de-vaning of containers arriving from overseas.
          </p>
        </div>
      </section>

      <nav className="bg-hrz-light py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-hrz-red transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-hrz-blue font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Map */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-[340px] border-0"
              src="https://maps.google.com/maps?q=av%20industrial%20libramiento%20111&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-hrz-red/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-hrz-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-hrz-blue">Location:</h4>
                  <p className="text-sm text-muted-foreground">
                    Av. industrial libramiento 111, Parque Industrial
                    libramiento, General Escobedo, Nuevo León, México.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-hrz-red/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-hrz-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-hrz-blue">Email:</h4>
                  <p className="text-sm">
                    <a
                      href="mailto:info@hrzlogistics.mx?subject=Services Information&body=I saw your web page."
                      className="text-muted-foreground hover:text-hrz-red transition-colors"
                    >
                      info@hrzlogistics.mx
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-hrz-red/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-hrz-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-hrz-blue">Call:</h4>
                  <p className="text-sm">
                    <a
                      href="tel:+52811658548"
                      className="text-muted-foreground hover:text-hrz-red transition-colors"
                    >
                      +52 81 1658 5488
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                />

                {status === "sent" && (
                  <p className="text-green-600 text-sm">
                    Your message has been sent. Thank you!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-hrz-red hover:bg-hrz-red/90 text-white px-8"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
