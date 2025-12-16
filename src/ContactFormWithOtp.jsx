// ContactFormWithOtpWaMe.jsx
import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import axios from "axios";

/**
 Props:
  - clientWhatsAppNumber (string) : the phone that should receive the lead, E.164 like +9198...
  - initialCountry (string) optional: default country code like "IN" or "US"
  - openInNewTab (bool) optional: whether to open wa.me in new tab (default true)
*/
export default function ContactFormWithOtpWaMe({
  clientWhatsAppNumber = "+919599452301",
  initialCountry = "IN",
  openInNewTab = true
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // phone input raw
    grade: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState(""); // "", "sending", "success", "error"
  const [otpState, setOtpState] = useState({
    isSent: false,
    sending: false,
    verifying: false,
    code: "",
    msg: "",
    verified: false,
    resendCooldown: 0
  });

  const cooldownRef = useRef(null);
  useEffect(() => () => clearInterval(cooldownRef.current), []);

  // Helper: convert to E.164 if possible
  function toE164(phone) {
    if (!phone) return "";
    const pn = parsePhoneNumberFromString(phone);
    return pn ? pn.number : phone; // fallback to raw
  }

  // Send OTP - calls serverless /api/send-otp
  async function sendOtp() {
    const e164 = toE164(formData.phone);
    if (!e164) {
      setOtpState(s => ({ ...s, msg: "Please enter a valid phone number." }));
      return;
    }
    setOtpState(s => ({ ...s, sending: true, msg: "" }));
    try {
      const res = await axios.post("/api/send-otp", { phone: e164 });
      if (res.data?.success) {
        setOtpState(s => ({ ...s, isSent: true, sending: false, msg: "OTP sent. Check your phone.", resendCooldown: 30 }));
        cooldownRef.current = setInterval(() => {
          setOtpState(s => {
            if (s.resendCooldown <= 1) {
              clearInterval(cooldownRef.current);
              return { ...s, resendCooldown: 0 };
            }
            return { ...s, resendCooldown: s.resendCooldown - 1 };
          });
        }, 1000);
      } else {
        setOtpState(s => ({ ...s, sending: false, msg: res.data?.message || "Failed to send OTP." }));
      }
    } catch (err) {
      setOtpState(s => ({ ...s, sending: false, msg: err.response?.data?.message || "Network error sending OTP." }));
    }
  }

  // Verify OTP - calls serverless /api/verify-otp
  async function verifyOtp() {
    const e164 = toE164(formData.phone);
    if (!e164 || !otpState.code) {
      setOtpState(s => ({ ...s, msg: "Phone and OTP required." }));
      return;
    }
    setOtpState(s => ({ ...s, verifying: true, msg: "" }));
    try {
      const res = await axios.post("/api/verify-otp", { phone: e164, code: otpState.code });
      if (res.data?.verified) {
        setOtpState(s => ({ ...s, verified: true, verifying: false, msg: "Phone verified." }));
        // After verification, open wa.me with the message prefilled
        openWhatsAppFallback({ ...formData, phone: e164 });
      } else {
        setOtpState(s => ({ ...s, verifying: false, msg: res.data?.message || "Invalid/expired OTP." }));
      }
    } catch (err) {
      setOtpState(s => ({ ...s, verifying: false, msg: err.response?.data?.message || "Network error verifying OTP." }));
    }
  }

  // Build message and open wa.me
  function openWhatsAppFallback(payload) {
    // Construct message text
    const text = [
      "📩 New Lead from Website",
      `Name: ${payload.name || "—"}`,
      `Phone: ${payload.phone || "—"}`,
      `Email: ${payload.email || "—"}`,
      `Grade: ${payload.grade || "—"}`,
      `Subject: ${payload.subject || "—"}`,
      `Message: ${payload.message || "—"}`,
      `Received: ${new Date().toLocaleString()}`
    ].join("\n");

    // Ensure clientWhatsAppNumber is in format without 'whatsapp:' and without + in wa.me path.
    // wa.me requires the number without + and without spaces, e.g., 919876543210
    const cleanNumber = clientWhatsAppNumber.replace(/\D/g, ""); // remove non-digits
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;

    // open in new tab/window or same tab
    if (openInNewTab) window.open(url, "_blank", "noopener,noreferrer");
    else window.location.href = url;

    // mark form submission status
    setFormStatus("success");
  }

  // If user clicks final Send Inquiry button (we require verification first)
  function handleSendInquiryClick() {
    if (otpState.verified) {
      // Already verified: open wa.me immediately
      openWhatsAppFallback({ ...formData, phone: toE164(formData.phone) });
    } else {
      // Not verified: prompt to send OTP
      setOtpState(s => ({ ...s, msg: "Please verify your phone first. Click 'Send OTP'." }));
    }
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name *</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email *</label>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      {/* Phone input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
        <PhoneInput
          country={initialCountry}
          value={formData.phone}
          onChange={(val) => setFormData({ ...formData, phone: val })}
          className="w-full"
          placeholder="Enter phone number"
        />
        <p className="text-xs text-gray-500 mt-1">We'll send an OTP to verify this number before opening WhatsApp.</p>
      </div>

      {/* Grade */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Grade *</label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
        >
          <option value="">Select Grade</option>
          <option value="1-5">Grades 1-5</option>
          <option value="6-8">Grades 6-8</option>
          <option value="9-10">Grades 9-10</option>
          <option value="11-12">Grades 11-12</option>
        </select>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Subject of Interest *</label>
        <input
          type="text"
          placeholder="e.g., Mathematics, Physics"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* OTP Controls */}
      {!otpState.isSent ? (
        <button
          onClick={sendOtp}
          disabled={otpState.sending || !formData.phone}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 mb-3"
        >
          {otpState.sending ? "Sending OTP..." : "Send OTP"}
        </button>
      ) : (
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Enter OTP</label>
          <div className="flex gap-2">
            <input
              value={otpState.code}
              onChange={(e) => setOtpState(s => ({ ...s, code: e.target.value }))}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter OTP"
            />
            <button
              onClick={verifyOtp}
              disabled={otpState.verifying || !otpState.code}
              className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
            >
              {otpState.verifying ? "Verifying..." : "Verify"}
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <small className="text-sm text-gray-600">{otpState.msg}</small>
            <div>
              <button
                onClick={sendOtp}
                disabled={otpState.resendCooldown > 0 || otpState.sending}
                className="text-sm text-blue-600 underline disabled:opacity-50"
              >
                {otpState.resendCooldown > 0 ? `Resend (${otpState.resendCooldown}s)` : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Submit (opens wa.me after verification) */}
      <button
        onClick={handleSendInquiryClick}
        disabled={formStatus === "sending"}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {formStatus === "sending" ? "Processing..." : "Send Inquiry"}
      </button>

      {formStatus === "success" && (
        <p className="mt-4 text-green-600 text-center font-semibold">WhatsApp opened — press Send to notify the client.</p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-600 text-center font-semibold">Error processing request. Try again later.</p>
      )}
    </div>
  );
}
