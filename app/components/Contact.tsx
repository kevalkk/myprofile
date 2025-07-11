'use client';

import React, { useState } from "react";

const accent = "#516A76";
const iconClass = "w-[22px] h-[22px] mr-2 inline-block align-middle";
const iconColor = "#57727E";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { type: 'success' | 'error', text: string }>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', text: 'Your message has been sent successfully!' });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: '#617F8D' }}>
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-between ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 pt-4" style={{ color: '#fff' }}>Get In Touch</h2>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row gap-8 dark:bg-gray-800 dark:shadow-lg w-full">
          {/* Left: Contact Info with Icons */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4" style={{ color: accent }}>Let&apos;s Connect</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-200">
              <div className="flex items-center">
                {/* Email Icon (from Hero) */}
                <svg className={iconClass} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:keval.mer@gmail.com" style={{ color: accent }} className="hover:underline font-medium">keval.mer@gmail.com</a>
              </div>
              <div className="flex items-center">
                {/* Phone Icon (from Hero) */}
                <svg className={iconClass} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 4.5A16 16 0 0 0 19.5 17.5L17 20a2 2 0 0 0 2 2c5 0 9-4 9-9a2 2 0 0 0-2-2l-2.5 2.5" /><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.59 2.34.72A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+918866618912" style={{ color: accent }} className="hover:underline font-medium">88666 18912</a>
              </div>
              <div className="flex items-center">
                {/* Location Icon (unchanged) */}
                <svg className={iconClass} fill="#64748b" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span className="font-medium" style={{ color: accent }}>Rajkot, Gujarat, India</span>
              </div>
              <div className="flex items-center">
                {/* LinkedIn Icon (from Hero) */}
                <svg className={iconClass} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><g><circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2.2" fill="none"/><path d="M8 11v5" stroke={iconColor} strokeWidth="2.2"/><circle cx="8" cy="8" r="1.2" fill={iconColor}/><path d="M12 16v-2.5a2.5 2.5 0 0 1 5 0V16" stroke={iconColor} strokeWidth="2.2"/></g></svg>
                <a href="https://linkedin.com/in/keval-mer-93312417/" target="_blank" rel="noopener noreferrer" style={{ color: accent }} className="hover:underline font-medium">LinkedIn</a>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <form className="flex-1 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ '--tw-ring-color': accent } as React.CSSProperties}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ '--tw-ring-color': accent } as React.CSSProperties}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 transition dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ '--tw-ring-color': accent } as React.CSSProperties}
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 transition dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              style={{ '--tw-ring-color': accent } as React.CSSProperties}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center"
              style={{ background: accent }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <div
                className={`mt-2 text-center rounded-lg px-4 py-2 font-medium ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}
              >
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;