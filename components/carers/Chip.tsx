interface ChipProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tag';
  size?: 'sm' | 'md';
  onClick?: () => void;
  active?: boolean;
}

export default function Chip({ children, variant = 'primary', size = 'md', onClick, active = false }: ChipProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full transition-colors";
  
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm"
  };
  
  const variantClasses = {
    primary: active 
      ? "bg-[#EF3688] text-white" 
      : "bg-white border-2 border-[#EF3688] text-[#EF3688] hover:bg-[#EF3688] hover:text-white",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    tag: "bg-[#FFF0F7] text-[#EF3688] border border-[#EF3688]"
  };

  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
