import React, { useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElement = useRef(null);

  // Function to toggle audio and indicator
  const toggleAudioIndicator = () => {
    if (isAudioPlaying) {
      audioElement.current.pause();
      setIsAudioPlaying(false);
      setIsIndicatorActive(false);
    } else {
      audioElement.current.play();
      setIsAudioPlaying(true);
      setIsIndicatorActive(true);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed z-50 h-16 border-none transition-all duration-700"
    >
      <header className="absolute top-1/2 w-full translate-y-1/2">
        <nav className="flex w-full items-center justify-between p-4">
          {/* Left Section */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Right Section */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="nav-hover-btn px-4 py-2 hover:bg-blue-100 rounded transition"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Audio Toggle Button */}
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElement}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
