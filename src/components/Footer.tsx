import React from 'react';
import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-accent">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <Logo />
          <div className="mt-4 text-gray-400">
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-4 w-4" />
              <span></span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-4 w-4" />
              <span></span>
            </div>
            <p className="text-sm">&copy; 2025 nissmo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
