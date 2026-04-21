"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse({
        success: res.ok,
        message: data.message || data.error || "Something went wrong",
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsOpen(false), 1500);
      }
    } catch (error) {
      setResponse({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-outline"
      >
        Get in touch
      </button>

      {isOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="contact-modal-header">
              <h3>Send me a message</h3>
              <button
                className="contact-modal-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                rows={4}
              />

              {response && (
                <div className={`contact-response ${response.success ? "success" : "error"}`}>
                  {response.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-solid"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
