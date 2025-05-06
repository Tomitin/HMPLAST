'use client';
import { DownArrowIcon } from '@/assets/icons/ArrowDown';
import { UpArrowIcon } from '@/assets/icons/ArrowUp';
import { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownProps {
  label: ReactNode;
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

export default function Dropdown({ label, options, onSelect, selectedValue }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center px-4 py-2 text-lg font-medium hover:cursor-pointer"
      >
        {label}
        {isOpen ? <UpArrowIcon width={18} height={18} className='ml-2' /> : <DownArrowIcon width={18} height={18} className='ml-2' />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleOptionClick(opt.value)}
              className={`block w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                selectedValue === opt.value ? 'font-semibold text-green-600 bg-gray-100 hover:bg-gray-200' : ''
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}