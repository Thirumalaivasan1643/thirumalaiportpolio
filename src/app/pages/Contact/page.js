"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

export default function ContactPage() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS environment variables missing");
      }

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject,
        user_message: formData.message,
      };

      emailjs.init(PUBLIC_KEY);

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
      );

      if (response.status === 200) {
        message.success("Message sent successfully! I will contact you soon.");

        setFormData({ name: "", email: "", subject: "", message: "" });
        formRef.current?.reset();
      } else {
        throw new Error("EmailJS failed");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);

      message.error(
        err?.text ||
          "Failed to send message. Please email me directly at thirumalai.ink@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
        <section id="contact" className="min-h-screen py-10 px-4 ">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-xl mb-2">
                Contact <span className="text-blue-400">Thirumalai</span>
              </h1>
              <p className="text-sm text-slate-500">
                Let’s build something great together
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
              {/* Info Card */}
              <div className="w-[350px] h-[350px] p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm flex flex-col mt-4 items-center">
                <h2 className="text-sm mb-6 font-regular">
                  Contact Information
                </h2>

                <div className="space-y-5 text-slate-700">
                  <InfoRow icon={<Phone size={20} />} text="+91 7845205463" />
                  <InfoRow
                    icon={<Mail size={20} />}
                    text="thirumalai.ink@gmail.com"
                  />
                  <InfoRow
                    icon={<MapPin size={20} />}
                    text="Bikkampatti, Dharmapuri"
                  />
                </div>
              </div>

              {/* Form Card */}
              <div className="w-[350px] h-[350px] p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden shadow-sm">
                <h2 className="text-sm mb-4">Send Message</h2>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <InputField
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <InputField
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                  />

                  <InputField
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-1 py-2 bg-transparent border-0 border-b border-white/40 text-sm resize-none focus:outline-none focus:ring-0 focus:border-blue-400 transition"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-24 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>










      {/* mobile */}
      <div className="block md:hidden">
  <section id="contact" className="py-10 px-4 bg-gray-50">
    <div className="max-w-md mx-auto">

      {/* Header */}
      <div className="text-center mb-6">
        
        
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-xl   p-4 mb-5  ">
        <h2 className="text-sm font-medium mb-3 text-gray-800">
          Contact Information
        </h2>

        <div className="space-y-3 text-gray-700 text-sm">
          <InfoRow icon={<Phone size={16} />} text="+91 7845205463" />
          <InfoRow icon={<Mail size={16} />} text="thirumalai.ink@gmail.com" />
          <InfoRow icon={<MapPin size={16} />} text="Bikkampatti, Dharmapuri" />
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl   p-4 ">
        <h2 className="text-sm font-medium mb-3 text-gray-800">
          Send Message
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <InputField
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />

          <InputField
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="3"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2   rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={14} />
          </button>
        </form>
      </div>

    </div>
  </section>
</div>


    </div>
  );
}

/* ---------- Reusable Components ---------- */

function InputField({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full px-1 py-2 bg-transparent border-0 border-b border-white/40 text-sm focus:outline-none focus:ring-0 focus:border-blue-400 transition"
    />
  );
}

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-blue-400">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
