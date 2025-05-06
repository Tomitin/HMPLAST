'use client';

import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useTranslations } from "next-intl";


export const ContactForm: React.FC = () => {
    const t = useTranslations("HomePage");
    const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '', company: '' });
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (event:any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setSuccess(false);
    
        const res = await fetch('/api/contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        if (res.ok) {
          setFormData({ name: '', email: '', message: '', company: '', subject: '' });
          setSuccess(true);
        }
    
        // Disable for 3 seconds
        setTimeout(() => setIsSending(false), 3000);
      };
  

    return (
        <form className="max-w-4xl w-full space-y-6" onSubmit={handleSubmit}>
            <input
                className="m-0"
                type="text" 
                name="company" 
                style={{visibility:"hidden"}} 
                tabIndex={-1} 
                onChange={handleChange}
                autoComplete="off" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-sm text-gray-700">
                        Company Name*
                    </label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-sm text-gray-700">
                        Email*
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block mb-1 font-medium text-sm text-gray-700">
                    Subject*
                </label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Message Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 font-medium text-sm text-gray-700">
                    Message*
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    className="w-full p-4 rounded-lg bg-gray-100 placeholder-gray-500 h-48 resize-none"
                />
            </div>
            <div className="flex flex-col items-end">
                <Button
                    disabled={isSending}
                    type="submit"
                    buttonType="primary"
                    size="lg"
                    className={`${isSending && 'bg-gray-400'}`}
                >
                            {isSending ? 'Sending...' : `${t('Send Message')}`}
                    {/* {t('Send Message')} */}
                </Button>
                {(success && !isSending) && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            </div>
        </form>
    )
};
