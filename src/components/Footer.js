import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer mt-24 h-453 py-6 px-6 flex flex-col items-center">
      <div className="font-ceviche text-5xl text-white cursor-pointer">
        Nimbo
      </div>
      <div className="mt-4 flex flex-wrap mb-12">
        <div className="link-box">
          <div className="text-sm font-bold">How we work</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Help & Support</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Return Policy</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Privacy & Policy</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Contact Us</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Our service</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Book a room</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Blog</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Help & Support</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Return Policy</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Privacy & Policy</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Contact Us</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Our service</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Book a room</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Blog</div>
        </div>
        <div className="link-box">
          <div className="text-sm font-bold">Contact Us</div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-4 justify-center">
        <div
          className="
              w-14
              h-14
              rounded-full
              shadow-xl
              bg-white
              flex
              justify-center
              items-center
              cursor-pointer
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32px"
            height="32px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
        </div>
        <div
          className="
              w-14
              h-14
              rounded-full
              shadow-xl
              bg-white
              flex
              justify-center
              items-center
              cursor-pointer
            "
        >
          <svg
            width="32px"
            height="32px"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"
              fill="#6681eb"
            />
          </svg>
        </div>
      </div>
      <div className="text-base mt-4">&copy;2021 Nimbo limited</div>
    </div>
  );
}

export default Footer;
