"use client";

import Image from "next/image";
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
    <div className="flex flex-col min-h-screen bg-neutral-50 selection:bg-brand-pink/20 selection:text-brand-pink overflow-x-hidden w-full relative">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-neutral-100 shadow-sm overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center flex-1 min-w-0">
            <img
              src="/logo pink.png"
              alt="ionQ Logo"
              className="w-auto max-w-full h-8 sm:h-10 md:h-11 object-contain rounded-sm"
            />
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-brand-pink text-white text-[11px] sm:text-sm font-bold px-3 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-brand-pink/90 transition-all duration-300 active:scale-95 shadow-[0_4px_14px_0_rgba(255,0,85,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,85,0.23)] shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hợp tác ngay
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
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
        <section id="contact" className="relative w-full overflow-hidden bg-white py-32 px-6">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-neutral-900">
              Đề Xuất Hợp Tác <br />
              <span className="text-brand-pink italic">Quảng Bá Sản Phẩm</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed">
              Mùa vi vu gõ cửa, nhu cầu làm tóc bùng nổ, cùng ionQ bứt phá mùa du lịch này! <br className="hidden md:block" />
              Tham gia ngay để nhận những quyền lợi độc quyền từ ionQ bạn nhé ^^
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://docs.google.com/forms/d/1Y3vtxQ2LhDVkHvQFHZT2TC4qc2THPV7TOYbcJqnDCfY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full max-w-[280px] sm:max-w-none sm:inline-flex items-center justify-center px-4 sm:px-12 py-3.5 sm:py-5 font-bold text-white transition-all duration-200 bg-brand-pink font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink hover:bg-brand-pink/90 active:scale-95 shadow-[0_8px_30px_rgb(255,0,85,0.25)] hover:shadow-[0_8px_30px_rgb(255,0,85,0.4)] animate-pulse-gentle text-xs sm:text-base text-center leading-tight sm:leading-normal"
              >
                <span className="flex items-center justify-center">
                  NHẬN SẢN PHẨM MẪU TẠI ĐÂY
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <span className="text-neutral-500 text-sm font-medium">Link dẫn tới Google Forms</span>
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Footer */}
      <footer className="w-full py-12 bg-neutral-50 text-neutral-500 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} ionQ Việt Nam.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-pink transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-pink transition-colors">TikTok</a>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href="https://docs.google.com/forms/d/1Y3vtxQ2LhDVkHvQFHZT2TC4qc2THPV7TOYbcJqnDCfY/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-brand-pink text-white rounded-full shadow-2xl active:scale-90 transition-transform animate-pulse-gentle"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
