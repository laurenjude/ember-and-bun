import { useState, useRef, useEffect } from "react";
import Vapi from "@vapi-ai/web";
import { Phone, PhoneOff, Mic, MicOff } from "lucide-react";

const VAPI_PUBLIC_KEY = "a68ed201-6a32-4dd7-b462-12784a326f06";
const ASSISTANT_ID = "40dcc6b5-7718-40ef-bca6-fedb514dd0b0";

export default function VoiceCallWidget() {
  const [callStatus, setCallStatus] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const vapiRef = useRef(null);

  const startCall = async () => {
    if (callStatus !== "idle") return;
    setCallStatus("connecting");
    try {
      await vapiRef.current.start(ASSISTANT_ID);
    } catch (err) {
      console.error("Call failed:", err);
      setCallStatus("idle");
    }
  };

  const endCall = () => {
    vapiRef.current?.stop();
    setCallStatus("idle");
    setIsMuted(false);
  };

  const toggleMute = () => {
    if (vapiRef.current) {
      vapiRef.current.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => setCallStatus("idle"));
    vapi.on("error", () => setCallStatus("idle"));

    const handleStartCall = () => startCall();
    window.addEventListener("start-vapi-call", handleStartCall);

    return () => {
      window.removeEventListener("start-vapi-call", handleStartCall);
      vapiRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (callStatus === "idle") {
    return (
      <button
        onClick={startCall}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #E8A020, #F0B840)",
          boxShadow: "0 0 0 0 rgba(232, 160, 32, 0.5)",
          animation: "pulse-ring 2s infinite",
        }}
        aria-label="Talk to AI Agent">
        <Phone
          size={28}
          color="#0A0A0A"
        />
      </button>
    );
  }

  if (callStatus === "connecting") {
    return (
      <div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
        style={{
          background: "#141414",
          border: "1px solid rgba(232, 160, 32, 0.3)",
        }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse"
          style={{ background: "#E8A020" }}>
          <Phone
            size={20}
            color="#0A0A0A"
          />
        </div>
        <span className="text-white text-sm font-medium">Connecting...</span>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
      style={{
        background: "#141414",
        border: "1px solid rgba(232, 160, 32, 0.3)",
        boxShadow: "0 0 30px rgba(232, 160, 32, 0.15)",
      }}>
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      <span className="text-white text-sm font-medium">
        AI Agent Speaking...
      </span>
      <button
        onClick={toggleMute}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: isMuted ? "#CC0000" : "rgba(255,255,255,0.1)" }}
        aria-label={isMuted ? "Unmute call" : "Mute call"}>
        {isMuted ? (
          <MicOff
            size={18}
            color="white"
          />
        ) : (
          <Mic
            size={18}
            color="white"
          />
        )}
      </button>
      <button
        onClick={endCall}
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "#CC0000" }}
        aria-label="End call">
        <PhoneOff
          size={18}
          color="white"
        />
      </button>
    </div>
  );
}
