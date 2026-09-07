import React, { useState } from 'react';
import { 
  CreditCard, 
  Sparkles, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink, 
  QrCode, 
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { REGISTRATION_DETAILS, WORKSHOP_DETAILS } from '../data/workshopData';

export default function Registration() {
  const [copiedField, setCopiedField] = useState(null);
  const [showQR, setShowQR] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="registration" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Registration & Payment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Registration Details & Fee Structure
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Choose your category and complete payment using the official bank details below.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Early Bird Concession Highlight Banner */}
        {/* <div className="mb-12 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
              <Sparkles className="w-8 h-8 text-amber-100" />
            </div>
            <div>
              <span className="bg-white text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Special Concession
              </span>
              <h3 className="text-lg font-bold text-white mt-1">Early Bird Registration Concession</h3>
              <p className="text-sm text-amber-100 mt-0.5">{REGISTRATION_DETAILS.earlyBirdNote}</p>
            </div>
          </div>
          <a
            href={WORKSHOP_DETAILS.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white hover:bg-slate-100 text-amber-900 font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Fee Table (Left Column) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" /> Category Fee Structure
            </h3>

            <div className="space-y-3">
              {REGISTRATION_DETAILS.fees.map((feeItem, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    feeItem.highlighted
                      ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {feeItem.highlighted ? (
                      <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                    <span className="font-semibold text-slate-800 text-sm">{feeItem.category}</span>
                  </div>

                  <span
                    className={`font-bold text-sm px-3 py-1 rounded-lg text-right ${
                      feeItem.highlighted
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-blue-900 text-white font-mono'
                    }`}
                  >
                    {feeItem.fee}
                  </span>
                </div>
              ))}
            </div>

            {/* Registration CTA */}
            {/* <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-end gap-3"> */}
              {/* <button
                onClick={() => setShowQR(!showQR)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors"
              >
                <QrCode className="w-4 h-4 text-blue-600" />
                <span>{showQR ? 'Hide QR' : 'Scan QR'}</span>
              </button> */}
              {/* <a
                href={WORKSHOP_DETAILS.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <span>Open Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a> */}
            {/* </div> */}

            {/* Modal/Dropdown QR Code */}
            {/* {showQR && (
              <div className="mt-6 p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center gap-6 shadow-xl animate-fadeIn">
                <img
                  src={REGISTRATION_DETAILS.qrCodeImage}
                  alt="Registration QR Code"
                  className="w-32 h-32 bg-white p-2 rounded-lg shadow"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-amber-400 text-sm">Scan QR Code to Register</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Scan with your mobile camera or QR scanner to open the workshop registration Google form directly.
                  </p>
                </div>
              </div>
            )} */}

          </div>

          {/* Bank Details Card (Right Column) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Bank Payment Details
              </h3>
              <span className="text-[10px] bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold px-2 py-0.5 rounded uppercase">
                SBI Official
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Account Name */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">Account Name</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-sm font-bold text-white text-xs sm:text-sm">
                    {REGISTRATION_DETAILS.bankDetails.accountName}
                  </span>
                  <button
                    onClick={() => copyToClipboard(REGISTRATION_DETAILS.bankDetails.accountName, 'accountName')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                    title="Copy Account Name"
                  >
                    {copiedField === 'accountName' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">Account Number</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-lg font-extrabold text-amber-400 tracking-wider">
                    {REGISTRATION_DETAILS.bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(REGISTRATION_DETAILS.bankDetails.accountNumber, 'accountNumber')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                    title="Copy Account Number"
                  >
                    {copiedField === 'accountNumber' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">IFSC Code</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-base font-bold text-white tracking-widest">
                    {REGISTRATION_DETAILS.bankDetails.ifscCode}
                  </span>
                  <button
                    onClick={() => copyToClipboard(REGISTRATION_DETAILS.bankDetails.ifscCode, 'ifscCode')}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifscCode' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Bank Name & Branch */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Bank Name</span>
                  <span className="font-semibold text-xs text-slate-200 mt-1 block">
                    {REGISTRATION_DETAILS.bankDetails.bankName}
                  </span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/80 p-3.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Branch</span>
                  <span className="font-semibold text-xs text-slate-200 mt-1 block">
                    {REGISTRATION_DETAILS.bankDetails.branch}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}