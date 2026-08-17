import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  ShieldCheck,
  Clock,
  User,
  Plane,
  FileCheck,
  Send,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Calendar,
  MapPin,
  ChevronRight,
  Phone,
  Mail,
  RefreshCw,
} from 'lucide-react';
import { Language, CustomerRequest, ChatMessage } from '../types';
import { translations } from '../translations';

interface RequestTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialRequestId?: string;
}

export const RequestTrackerModal: React.FC<RequestTrackerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialRequestId = '',
}) => {
  const [searchId, setSearchId] = useState(initialRequestId);
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState<CustomerRequest | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [sendingMsg, setSendingMsg] = useState(false);

  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    if (initialRequestId) {
      setSearchId(initialRequestId);
      handleLookup(initialRequestId);
    }
  }, [initialRequestId]);

  if (!isOpen) return null;

  const handleLookup = async (idToSearch?: string) => {
    const target = (idToSearch || searchId).trim();
    if (!target) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch(`/api/requests/${encodeURIComponent(target)}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || t.tracker_not_found);
      }

      setRequestData(data.request);

      // Fetch chat messages
      fetchChat(data.request.id);
    } catch (err: any) {
      setErrorMsg(err.message || t.tracker_not_found);
      setRequestData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchChat = async (reqId: string) => {
    try {
      const res = await fetch(`/api/chat/${encodeURIComponent(reqId)}`);
      const data = await res.json();
      if (data.messages) {
        setChatMessages(data.messages);
      }
    } catch (err) {
      // Non-fatal
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !requestData) return;

    setSendingMsg(true);
    const text = chatInput.trim();
    setChatInput('');

    try {
      const res = await fetch('/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestId: requestData.id,
          sender: 'customer',
          senderName: requestData.fullName,
          text,
        }),
      });
      const data = await res.json();
      if (data.message) {
        setChatMessages((prev) => [...prev, data.message]);
        // Re-poll after 2s for automated response
        setTimeout(() => fetchChat(requestData.id), 2000);
      }
    } catch (err) {
      // handle error
    } finally {
      setSendingMsg(false);
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Approved':
      case 'Completed':
        return 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30';
      case 'In Review':
      case 'In Progress':
        return 'bg-blue-500/15 text-blue-700 border-blue-500/30';
      case 'Waiting for Customer':
        return 'bg-amber-500/15 text-amber-800 border-amber-500/30';
      case 'Rejected':
      case 'Cancelled':
        return 'bg-rose-500/15 text-rose-700 border-rose-500/30';
      default:
        return 'bg-amber-500/15 text-amber-700 border-amber-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white text-stone-900 border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-stone-950 text-white p-5 sm:p-6 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient text-stone-950 flex items-center justify-center font-bold shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-lg sm:text-xl font-bold text-stone-100">
                {t.tracker_title}
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">{t.tracker_subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-6 bg-stone-50 border-b border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLookup();
            }}
            className="flex gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t.tracker_input_ph}
                className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 rounded-xl border border-stone-300 focus:border-amber-500 text-xs sm:text-sm uppercase font-mono tracking-wider focus:outline-none bg-white shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !searchId.trim()}
              className="px-5 py-3 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-md disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
              ) : (
                <Search className="w-4 h-4 text-stone-950" />
              )}
              <span className="hidden sm:inline">{t.tracker_btn_search}</span>
            </button>
          </form>

          {/* Quick Demo ID hint */}
          <div className="mt-2 text-[11px] text-stone-500 flex items-center gap-2">
            <span>Quick sample test ID:</span>
            <button
              type="button"
              onClick={() => {
                setSearchId('BTA-REQ-2026-89421');
                handleLookup('BTA-REQ-2026-89421');
              }}
              className="font-mono text-amber-700 font-bold hover:underline"
            >
              BTA-REQ-2026-89421
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {requestData && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Header Status Card */}
              <div className="p-5 rounded-2xl bg-stone-950 text-white border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-amber-400 font-bold">
                    Travel Service Request
                  </div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-stone-100">
                    {requestData.id}
                  </div>
                  <div className="text-xs text-stone-300 mt-1 flex items-center gap-2">
                    <span>{requestData.serviceType}</span>
                    <span>•</span>
                    <span>{requestData.destinationCountry}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${getStatusBadgeClass(
                      requestData.status
                    )} bg-white`}
                  >
                    ● {requestData.status}
                  </span>
                  <span className="text-[11px] text-stone-400 mt-1.5">
                    Submitted: {new Date(requestData.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Assigned Specialist Officer Card */}
              {requestData.assignedStaff && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center text-sm shadow-md">
                      {requestData.assignedStaff.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-800 font-bold uppercase">
                        {t.tracker_assigned_officer}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-stone-950">
                        {requestData.assignedStaff.name}
                      </div>
                      <div className="text-[11px] text-stone-600">
                        {requestData.assignedStaff.department}
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-xs">
                    <a
                      href="tel:+252612483838"
                      className="px-3 py-1.5 rounded-lg bg-stone-900 text-amber-400 font-semibold text-xs flex items-center gap-1.5 hover:bg-stone-800 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Desk</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Timeline Events */}
              <div>
                <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{t.tracker_timeline_title}</span>
                </h3>

                <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-500/30 space-y-6">
                  {requestData.timeline?.map((evt, idx) => (
                    <div key={evt.id || idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-sm" />

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-stone-900">{evt.action}</span>
                          <span className="text-[11px] text-stone-400">
                            {new Date(evt.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {evt.description[currentLang] || evt.description.en}
                        </p>
                        <div className="mt-1 text-[10px] text-stone-400 flex items-center gap-1">
                          <span>Recorded by:</span>
                          <span className="font-semibold text-stone-600">
                            {evt.userName} ({evt.userRole})
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat with Assigned Officer */}
              <div className="pt-4 border-t border-stone-200">
                <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-600" />
                  <span>{t.tracker_chat_with_agent}</span>
                </h3>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden flex flex-col h-64">
                  {/* Chat Messages Log */}
                  <div className="p-4 overflow-y-auto flex-1 space-y-3">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          msg.sender === 'customer' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                            msg.sender === 'customer'
                              ? 'bg-amber-500 text-stone-950 font-medium rounded-br-none'
                              : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none shadow-sm'
                          }`}
                        >
                          <div className="text-[10px] font-bold opacity-75 mb-1">
                            {msg.senderName}
                          </div>
                          <div>{msg.text}</div>
                        </div>
                        <span className="text-[10px] text-stone-400 mt-0.5 px-1">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-stone-200 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder={t.chat_input_ph}
                      className="flex-1 px-3.5 py-2 rounded-xl border border-stone-300 focus:border-amber-500 text-xs focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={sendingMsg || !chatInput.trim()}
                      className="px-4 py-2 rounded-xl bg-gold-gradient text-stone-950 font-bold text-xs hover:brightness-105 active:scale-95 disabled:opacity-50 flex items-center gap-1 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t.chat_btn_send}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
