import React, { useState } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Phone,
  Plane,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface LiveChatWidgetProps {
  currentLang: Language;
  onRequestService: (serviceName?: string) => void;
  onTrackRequest: () => void;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  currentLang,
  onRequestService,
  onTrackRequest,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: 'agent' | 'user'; text: string; time: string }[]
  >([
    {
      sender: 'agent',
      text: 'Asc & Welcome to Balcad Travel Agency! How can we assist with your flights, visa processing, or Umrah arrangements today?',
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const t = translations[currentLang];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: now }]);
    setInputVal('');

    // Automated smart assistant response
    setTimeout(() => {
      let reply =
        'Thank you for contacting us! Our certified travel officers in Mogadishu are reviewing your inquiry. For immediate booking, you can also submit a service request or call our hotline directly at +252 61 2483838.';

      if (userText.toLowerCase().includes('umrah') || userText.toLowerCase().includes('cumro')) {
        reply =
          'Waxaan bixinnaa xirmooyinka Cumrada ee ugu tayada sarreeya (VIP Hoteello Xaramka hortaagan, Fiisaha Nusuk, iyo Duulimaadyo toos ah). Fadlan riix "Submit Travel Request" si aan xogtaada u diiwaangelino.';
      } else if (
        userText.toLowerCase().includes('visa') ||
        userText.toLowerCase().includes('fiiso')
      ) {
        reply =
          'Waxaan fududeynaa fiisooyinka Dubai, Turkey, Schengen, Egypt, China iyo dalal kale. Wax lacag ah online lagama bixiyo.';
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gold-gradient text-stone-950 shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative group cursor-pointer"
          aria-label="Live Concierge Chat"
        >
          <MessageCircle className="w-7 h-7 text-stone-950" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-stone-950 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {t.chat_agent_title}
          </div>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl bg-white border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200 text-stone-900">
          {/* Header */}
          <div className="p-4 bg-stone-950 text-white border-b border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold-gradient text-stone-950 flex items-center justify-center font-bold shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-sm font-bold text-stone-100">
                  {t.chat_agent_title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online • Travel Specialist</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-stone-100 border-b border-stone-200 p-2 flex gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => onRequestService()}
              className="px-2.5 py-1 rounded-lg bg-white border border-stone-300 hover:border-amber-500 text-stone-700 font-semibold whitespace-nowrap"
            >
              📝 Submit Request
            </button>
            <button
              onClick={() => onTrackRequest()}
              className="px-2.5 py-1 rounded-lg bg-white border border-stone-300 hover:border-amber-500 text-stone-700 font-semibold whitespace-nowrap"
            >
              🔍 Track Request
            </button>
            <a
              href="tel:+252612483838"
              className="px-2.5 py-1 rounded-lg bg-white border border-stone-300 hover:border-amber-500 text-stone-700 font-semibold whitespace-nowrap"
            >
              📞 Call
            </a>
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-stone-50 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-500 text-stone-950 font-medium rounded-br-none'
                      : 'bg-white text-stone-800 border border-stone-200/90 rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-2 rounded-xl border border-stone-300 focus:border-amber-500 text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gold-gradient text-stone-950 hover:brightness-105 active:scale-95 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
