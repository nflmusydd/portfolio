import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../layouts/Title';
import emailjs from '@emailjs/browser';
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Menghapus error saat mengetik ulang
    if (errors[e.target.name] || errors.contact) {
      setErrors({ ...errors, [e.target.name]: "", contact: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      newErrors.contact = t('contact.form.errors.contactRequired');
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t('contact.form.errors.emailInvalid');
      }
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setToast({ ...toast, show: false }); // Sembunyikan toast sebelumnya jika ada

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        company_name: formData.company || "N/A",
        phone_number: formData.phone || "N/A",
        reply_to: formData.email || "No Email Provided",
        subject: formData.subject,
        message: formData.message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setIsSubmitting(false);
          setToast({ 
            show: true, 
            message: t('contact.form.toast.success', { name: formData.name }), 
            type: "success" 
          });
          
          setFormData({
            name: "",
            company: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 6000);
        })
        .catch((err) => {
          setIsSubmitting(false);
          setToast({ 
            show: true, 
            message: t('contact.form.toast.error'), 
            type: "error" 
          });
          
          setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 6000);
        });
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-10 relative">
      <div className="flex flex-col justify-center items-center text-center">
        <Title title={t('contact.title')} des={t('contact.des')} />
        <p className="max-w-2xl text-gray-400 text-sm md:text-base tracking-wide">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-4xl h-auto bg-linear-to-b from-bodyColor via-[#0c1942] via-80% to-black p-8 lg:p-12 rounded-lg shadow-shadowOne flex flex-col gap-8">
          
          <form onSubmit={handleSend} className="w-full flex flex-col gap-6" noValidate>

            {/* Name & Company */}
            <div className="w-full flex flex-col md:flex-row gap-6">
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.name')} <span className="text-designColor">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-lightText px-4 border ${errors.name ? 'border-red-500' : 'border-transparent focus:border-designColor'} outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner`}
                />
                {/* Menampilkan error */}
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.company')}
                </label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#141518] rounded-lg text-lightText px-4 border border-transparent focus:border-designColor outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner" 
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="w-full flex flex-col md:flex-row gap-6">
              <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.email')} <span className="text-designColor">**</span>
                </label>
                <input
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-lightText px-4 border ${(errors.contact || errors.email) ? 'border-red-500' : 'border-transparent focus:border-designColor'} outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.phone')} <span className="text-designColor">**</span>
                </label>
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-lightText px-4 border ${(errors.contact) ? 'border-red-500' : 'border-transparent focus:border-designColor'} outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner`}
                />
              </div>

            </div>
            {errors.contact && <p className="text-red-500 text-xs -mt-4">{errors.contact}</p>}

            {/* Subject */}
            <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.subject')} <span className="text-designColor">*</span>
                </label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full h-12 bg-[#141518] rounded-lg text-lightText px-4 border ${errors.subject ? 'border-red-500' : 'border-transparent focus:border-designColor'} outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            {/* Message (Textarea) */}
            <div className="w-full flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  {t('contact.form.message')} <span className="text-designColor">*</span>
                </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30" 
                rows="6"
                className={`w-full bg-[#141518] rounded-lg text-lightText p-4 border ${errors.message ? 'border-red-500' : 'border-transparent focus:border-designColor'} outline-none focus:ring-1 focus:ring-designColor transition-colors duration-300 shadow-inner resize-y`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Keterangan Tambahan */}
            <div className="w-full mt-1">
              <p className="text-xs text-gray-500 tracking-wide">
                <span className="text-designColor">*</span> {t('contact.form.required')} <br />
                <span className="text-designColor">**</span> {t('contact.form.altContact')}
              </p>
            </div>

            {/* Tombol Submit */}
            <div className="w-full mt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-12 rounded-lg text-base tracking-wider uppercase border border-transparent shadow-shadowOne transition-all duration-300 
                  ${isSubmitting 
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                    : "bg-bodyColor text-white hover:text-white hover:border-designColor"
                  }`}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Toast Eksternal */}
      <div 
        className={`fixed left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-2xl z-50 transition-all duration-500 ease-in-out flex items-center gap-3
          ${toast.show ? "bottom-10 opacity-100" : "-bottom-20 opacity-0 pointer-events-none"}
          ${toast.type === "success" ? "bg-green-600 text-white border border-green-500" : "bg-red-600 text-white border border-red-500"}
        `}
      >
        {toast.type === "success" ? (
          <BsCheckCircle className="text-xl shrink-0" />
        ) : (
          <BsXCircle className="text-xl shrink-0" />
        )}
        <p className="text-sm font-medium tracking-wide">{toast.message}</p>
      </div>

    </section>
  )
}

export default Contact;