import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function PhoneInput({ value, onChange, disabled, placeholder, className }: PhoneInputProps) {
  return (
    <div className={cn("phone-input-wrapper", className)}>
      <PhoneInputWithCountry
        international
        defaultCountry="IN"
        value={value}
        onChange={(val) => onChange(val || '')}
        disabled={disabled}
        placeholder={placeholder}
        className="phone-input"
        flagUrl="https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg"
      />
      <style>{`
        .phone-input-wrapper .PhoneInputInput {
          flex: 1;
          min-width: 0;
          border: 1px solid hsl(var(--input));
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          outline: none;
          transition: all 0.2s;
        }
        
        .phone-input-wrapper .PhoneInputInput:focus {
          outline: none;
          box-shadow: 0 0 0 2px hsl(var(--ring));
        }
        
        .phone-input-wrapper .PhoneInputInput:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        
        .phone-input-wrapper .PhoneInputInput::placeholder {
          color: hsl(var(--muted-foreground));
        }
        
        .phone-input-wrapper .PhoneInputCountry {
          margin-right: 0.5rem;
          position: relative;
        }
        
        .phone-input-wrapper .PhoneInputCountrySelect {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--input));
          border-radius: 0.375rem;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          color: hsl(var(--foreground));
        }
        
        .phone-input-wrapper .PhoneInputCountrySelect:focus {
          outline: none;
          box-shadow: 0 0 0 2px hsl(var(--ring));
        }
        
        .phone-input-wrapper .PhoneInputCountrySelect option {
          background: hsl(var(--popover));
          color: hsl(var(--popover-foreground));
          padding: 0.5rem;
        }
        
        .phone-input-wrapper .PhoneInputCountrySelectArrow {
          color: hsl(var(--muted-foreground));
          opacity: 0.8;
          width: 0.375rem;
          height: 0.375rem;
        }
        
        .phone-input-wrapper .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1rem;
          margin-right: 0.25rem;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .phone-input-wrapper .PhoneInputCountryIconImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Ensure dropdown is visible */
        .phone-input-wrapper select {
          background-color: hsl(var(--card)) !important;
          color: hsl(var(--card-foreground)) !important;
          border: 1px solid hsl(var(--border)) !important;
          z-index: 50;
        }
        
        .phone-input-wrapper select option {
          background-color: hsl(var(--card)) !important;
          color: hsl(var(--card-foreground)) !important;
          padding: 0.5rem !important;
        }
      `}</style>
    </div>
  );
}
