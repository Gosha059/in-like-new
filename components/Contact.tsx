'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#FBFBFD] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg mb-2 tracking-tight">Email</h4>
                  <p className="text-sm text-gray-600">info@inlikenew.com</p>
                  <p className="text-sm text-gray-600">support@inlikenew.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg mb-2 tracking-tight">Phone</h4>
                  <p className="text-sm text-gray-600">+1 (555) 123‑4567</p>
                  <p className="text-sm text-gray-600">Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h4 className="text-lg mb-2 tracking-tight">Office</h4>
                  <p className="text-sm text-gray-600">123 Tech Street</p>
                  <p className="text-sm text-gray-600">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="border-gray-200 focus:border-[#0071E3] focus:ring-[#0071E3] rounded-xl h-12"
                />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="border-gray-200 focus:border-[#0071E3] focus:ring-[#0071E3] rounded-xl h-12"
                />
              </div>

              <div>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="border-gray-200 focus:border-[#0071E3] focus:ring-[#0071E3] rounded-xl h-12"
                />
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  required
                  className="border-gray-200 focus:border-[#0071E3] focus:ring-[#0071E3] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full h-12 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}