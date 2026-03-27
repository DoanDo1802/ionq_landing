"use client";

import { useRef, useState } from "react";

export default function Home() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const [isMuted3, setIsMuted3] = useState(true);

  const toggleMute1 = () => {
    if (videoRef1.current) {
      videoRef1.current.muted = !videoRef1.current.muted;
      setIsMuted1(videoRef1.current.muted);
    }
  };

  const toggleMute2 = () => {
    if (videoRef2.current) {
      videoRef2.current.muted = !videoRef2.current.muted;
      setIsMuted2(videoRef2.current.muted);
    }
  };

  const toggleMute3 = () => {
    if (videoRef3.current) {
      videoRef3.current.muted = !videoRef3.current.muted;
      setIsMuted3(videoRef3.current.muted);
    }
  };

  const images = [
    "c Q_page-0001.jpg",
    "c Q_page-0002.jpg",
    "c Q_page-0003.jpg",
    "c Q_page-0004.jpg",
    "c Q_page-0005.jpg",
    "c Q_page-0006.jpg",
    "c Q_page-0007.jpg",
    "c Q_page-0010.jpg",
    "c Q_page-0011.jpg",
    "c Q_page-0012.jpg",
    "c Q_page-0013.jpg",
    "c Q_page-0014.jpg",
    "c Q_page-0015.jpg",
    "c Q_page-0016.jpg",
    "c Q_page-0019.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 selection:bg-rose-100 selection:text-rose-900">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-neutral-900 italic">ionQ<span className="text-rose-600">.</span></span>
          <a
            href="#contact"
            className="bg-neutral-900 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
          >
            Hợp tác ngay
          </a>
        </div>
      </header>

      {/* Images Showcase */}
      <main className="flex flex-col items-center w-full">
        <div className="w-full max-w-4xl shadow-2xl bg-white">
          {images.map((image, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img
                src={`/${encodeURIComponent(image)}`}
                alt={`ionQ Product Page ${index + 1}`}
                className="w-full h-auto block hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading={index < 2 ? "eager" : "lazy"}
              />
              {/* Chèn video 3 sau ảnh c Q_page-0006.jpg */}
              {image === "c Q_page-0006.jpg" && (
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black overflow-hidden shadow-2xl my-8 rounded-2xl group/video">
                  <video
                    ref={videoRef3}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/ionQ_video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay tinh tế cho video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Mute/Unmute Button */}
                  <button 
                    onClick={toggleMute3}
                    className="absolute bottom-4 right-4 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all active:scale-90 shadow-lg border border-white/30"
                    aria-label={isMuted3 ? "Bật âm thanh" : "Tắt âm thanh"}
                  >
                    {isMuted3 ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              {/* Chèn video 2 sau ảnh c Q_page-0007.jpg */}
              {image === "c Q_page-0007.jpg" && (
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black overflow-hidden shadow-2xl my-8 rounded-2xl group/video">
                  <video
                    ref={videoRef2}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/ionQ_video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay tinh tế cho video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Mute/Unmute Button */}
                  <button 
                    onClick={toggleMute2}
                    className="absolute bottom-4 right-4 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all active:scale-90 shadow-lg border border-white/30"
                    aria-label={isMuted2 ? "Bật âm thanh" : "Tắt âm thanh"}
                  >
                    {isMuted2 ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              {/* Chèn video sau ảnh c Q_page-0011.jpg */}
              {image === "c Q_page-0011.jpg" && (
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black overflow-hidden shadow-2xl my-8 rounded-2xl group/video">
                  <video
                    ref={videoRef1}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/ionQ_video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay tinh tế cho video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Mute/Unmute Button */}
                  <button 
                    onClick={toggleMute1}
                    className="absolute bottom-4 right-4 z-10 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all active:scale-90 shadow-lg border border-white/30"
                    aria-label={isMuted1 ? "Bật âm thanh" : "Tắt âm thanh"}
                  >
                    {isMuted1 ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <section id="contact" className="relative w-full overflow-hidden bg-neutral-900 py-32 px-6">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-white">
              Đề Xuất Hợp Tác <br />
              <span className="text-rose-500 italic">Quảng Bá Sản Phẩm</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed">
              Mùa vi vu gõ cửa, nhu cầu làm tóc bùng nổ, cùng ionQ bứt phá mùa du lịch này! . <br className="hidden md:block" />
              Tham gia ngay để nhận những quyền lợi độc quyền từ ionQ bạn nhé ^^
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://docs.google.com/forms/d/1Y3vtxQ2LhDVkHvQFHZT2TC4qc2THPV7TOYbcJqnDCfY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-200 bg-rose-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 hover:bg-rose-700 active:scale-95 shadow-[0_0_40px_-10px_rgba(225,29,72,0.5)]"
              >
                NHẬN SẢN PHẨM MẪU TẠI ĐÂY
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-neutral-500 text-sm font-medium">Link dẫn tới Google Forms</span>
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Footer */}
      <footer className="w-full py-12 bg-neutral-950 text-neutral-500 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} ionQ Việt Nam.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href="https://docs.google.com/forms/d/1Y3vtxQ2LhDVkHvQFHZT2TC4qc2THPV7TOYbcJqnDCfY/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-rose-600 text-white rounded-full shadow-2xl active:scale-90 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
