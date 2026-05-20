"use client";
import { useEffect, useRef, useState } from "react";
import { X, Upload, ChevronDown, Calendar } from "lucide-react";

interface SavingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: Record<string, unknown>) => void;
}

const SAVINGS_TYPES = [
  "Individual Savings",
  "Target Savings",
  "Fixed Deposit",
  "Joint Savings",
];
const CITIES = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Benin City",
  "Enugu",
  "Kaduna",
];

export function SavingsModal({ isOpen, onClose, onSubmit }: SavingsModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    savingsType: "",
    occupation: "",
    city: "",
    address: "",
    idFile: null as File | null,
    passportFile: null as File | null,
  });
  const [idPreview, setIdPreview] = useState<string | null>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passportRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => setMounted(true), 10);
    else setMounted(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleFile = (field: "idFile" | "passportFile", file: File | null) => {
    if (!file) return;
    setForm((f) => ({ ...f, [field]: file }));
    const reader = new FileReader();
    reader.onload = (e) => {
      if (field === "idFile") setIdPreview(e.target?.result as string);
      else setPassportPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(10, 20, 50, 0.55)",
        backdropFilter: "blur(6px)",
        transition: "opacity 0.3s ease",
        opacity: mounted ? 1 : 0,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');
                .savings-modal * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }
                .savings-modal h1, .savings-modal h2 { font-family: 'Sora', sans-serif; }
                .savings-field { display: flex; flex-direction: column; gap: 6px; }
                .savings-label { font-size: 13px; font-weight: 600; color: #1a2a4a; letter-spacing: 0.01em; }
                .savings-input {
                    width: 100%; height: 46px; padding: 0 14px;
                    border: 1.5px solid #dde4f0; border-radius: 10px;
                    font-size: 14px; color: #1a2a4a; background: #f8faff;
                    outline: none; transition: border-color 0.2s, box-shadow 0.2s;
                    appearance: none; -webkit-appearance: none;
                }
                .savings-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); background: #fff; }
                .savings-input::placeholder { color: #a0aec0; }
                .savings-select-wrap { position: relative; }
                .savings-select-wrap svg { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #6b7faa; pointer-events: none; }
                .savings-textarea {
                    width: 100%; padding: 12px 14px; min-height: 80px;
                    border: 1.5px solid #dde4f0; border-radius: 10px;
                    font-size: 14px; color: #1a2a4a; background: #f8faff;
                    outline: none; resize: none; transition: border-color 0.2s, box-shadow 0.2s;
                    font-family: 'DM Sans', sans-serif;
                }
                .savings-textarea:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); background: #fff; }
                .upload-zone {
                    border: 2px dashed #c5d0e8; border-radius: 12px; padding: 20px;
                    display: flex; flex-direction: column; align-items: center; gap: 8px;
                    cursor: pointer; background: #f8faff; transition: all 0.2s;
                    text-align: center;
                }
                .upload-zone:hover { border-color: #2563eb; background: #eff6ff; }
                .upload-zone img { width: 100%; max-height: 100px; object-fit: contain; border-radius: 8px; }
                .submit-btn {
                    width: 100%; height: 52px; border-radius: 12px; border: none;
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: white; font-size: 15px; font-weight: 700;
                    font-family: 'Sora', sans-serif; cursor: pointer;
                    transition: transform 0.15s, box-shadow 0.15s;
                    box-shadow: 0 4px 16px rgba(37,99,235,0.35);
                    letter-spacing: 0.01em;
                }
                .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.45); }
                .submit-btn:active { transform: scale(0.99); }
                .ribbon { width: 72px; height: 72px; }
            `}</style>

      <div
        className="savings-modal"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 540,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 24px 60px rgba(10,20,60,0.18)",
          padding: "36px 32px 32px",
          transition:
            "transform 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease",
          transform: mounted
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.97)",
          opacity: mounted ? 1 : 0,
          scrollbarWidth: "thin",
          scrollbarColor: "#dde4f0 transparent",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="savings-modal-title"
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid #e2e8f0",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#64748b",
            transition: "background 0.15s",
          }}
          aria-label="Close"
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          {/* Placeholder ribbon logo — swap src for real asset */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <svg
              className="ribbon"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="rg"
                  x1="0"
                  y1="0"
                  x2="72"
                  y2="72"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f7c948" />
                  <stop offset="1" stopColor="#c8860a" />
                </linearGradient>
              </defs>
              <path
                d="M36 8 C20 8 12 20 18 32 C24 44 12 52 20 60 C28 68 44 60 44 48 C44 36 56 30 52 20 C48 10 52 8 36 8Z"
                fill="url(#rg)"
                opacity="0.85"
              />
              <path
                d="M30 14 C18 18 16 30 24 38 C32 46 22 56 32 62 C38 65 46 58 42 50 C38 42 48 34 46 24 C44 14 42 10 30 14Z"
                fill="url(#rg)"
                opacity="0.5"
              />
            </svg>
          </div>
          <h2
            id="savings-modal-title"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: "#1d4ed8",
              margin: 0,
            }}
          >
            Start Your Growth Journey
          </h2>
          <p
            style={{
              fontSize: 13,
              color: "#64748b",
              marginTop: 6,
              lineHeight: 1.5,
              maxWidth: 380,
              margin: "6px auto 0",
            }}
          >
            Fill in your details below to open your savings account and begin
            building your financial future.
          </p>
        </div>

        {/* Form grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px 20px",
          }}
        >
          {/* First Name */}
          <div className="savings-field">
            <label className="savings-label">
              First Name <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              className="savings-input"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
            />
          </div>

          {/* Last Name */}
          <div className="savings-field">
            <label className="savings-label">
              Last Name <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              className="savings-input"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={(e) =>
                setForm((f) => ({ ...f, lastName: e.target.value }))
              }
            />
          </div>

          {/* Phone */}
          <div className="savings-field">
            <label className="savings-label">
              Phone Number <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              className="savings-input"
              placeholder="Enter phone number"
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
            />
          </div>

          {/* Email */}
          <div className="savings-field">
            <label className="savings-label">
              Email Address <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              className="savings-input"
              placeholder="Enter email address"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
            />
          </div>

          {/* Date of Birth */}
          <div className="savings-field">
            <label className="savings-label">
              Date of Birth <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <div className="savings-select-wrap">
              <input
                className="savings-input"
                type="date"
                placeholder="Choose date of birth"
                value={form.dob}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dob: e.target.value }))
                }
                style={{ paddingRight: 40 }}
              />
              <Calendar size={16} />
            </div>
          </div>

          {/* Savings Type */}
          <div className="savings-field">
            <label className="savings-label">
              Savings Type <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <div className="savings-select-wrap">
              <select
                className="savings-input"
                style={{ paddingRight: 36 }}
                value={form.savingsType}
                onChange={(e) =>
                  setForm((f) => ({ ...f, savingsType: e.target.value }))
                }
              >
                <option value="">Select</option>
                {SAVINGS_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Occupation */}
          <div className="savings-field">
            <label className="savings-label">
              Occupation <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              className="savings-input"
              placeholder="Enter occupation"
              value={form.occupation}
              onChange={(e) =>
                setForm((f) => ({ ...f, occupation: e.target.value }))
              }
            />
          </div>

          {/* City */}
          <div className="savings-field">
            <label className="savings-label">
              City <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <div className="savings-select-wrap">
              <select
                className="savings-input"
                style={{ paddingRight: 36 }}
                value={form.city}
                onChange={(e) =>
                  setForm((f) => ({ ...f, city: e.target.value }))
                }
              >
                <option value="">Select</option>
                {CITIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Valid ID — full width */}
          <div className="savings-field" style={{ gridColumn: "1 / -1" }}>
            <label className="savings-label">
              Valid ID{" "}
              <span style={{ color: "#64748b", fontWeight: 400 }}>
                (National ID, Driver's License, Passport)
              </span>{" "}
              <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <div className="upload-zone" onClick={() => idRef.current?.click()}>
              <input
                ref={idRef}
                type="file"
                accept="image/*,application/pdf"
                style={{ display: "none" }}
                onChange={(e) =>
                  handleFile("idFile", e.target.files?.[0] ?? null)
                }
              />
              {idPreview ? (
                <img src={idPreview} alt="ID preview" />
              ) : (
                <>
                  <Upload size={28} color="#2563eb" strokeWidth={1.5} />
                  <span style={{ fontSize: 13, color: "#64748b" }}>
                    Click to upload image or drag and drop &nbsp;
                    <span style={{ color: "#94a3b8" }}>10mb max</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Passport Photo — full width */}
          <div className="savings-field" style={{ gridColumn: "1 / -1" }}>
            <label className="savings-label">Passport Photograph</label>
            <div
              className="upload-zone"
              onClick={() => passportRef.current?.click()}
            >
              <input
                ref={passportRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) =>
                  handleFile("passportFile", e.target.files?.[0] ?? null)
                }
              />
              {passportPreview ? (
                <img src={passportPreview} alt="Passport preview" />
              ) : (
                <>
                  <Upload size={28} color="#2563eb" strokeWidth={1.5} />
                  <span style={{ fontSize: 13, color: "#64748b" }}>
                    Click to upload image or drag and drop
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Residential Address — full width */}
          <div className="savings-field" style={{ gridColumn: "1 / -1" }}>
            <label className="savings-label">
              Residential Address <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <textarea
              className="savings-textarea"
              placeholder="Enter address"
              value={form.address}
              onChange={(e) =>
                setForm((f) => ({ ...f, address: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Submit */}
        <div style={{ marginTop: 24 }}>
          <button
            className="submit-btn"
            onClick={() =>
              onSubmit?.(form as unknown as Record<string, unknown>)
            }
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
