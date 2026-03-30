import { AlertTriangle, Info, Phone } from 'lucide-react';

interface CalloutProps {
  type: 'warning' | 'info' | 'urgent';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
      titleColor: 'text-amber-900'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: <Info className="w-5 h-5 text-blue-600" />,
      titleColor: 'text-blue-900'
    },
    urgent: {
      bg: 'bg-[#FFF0F7]',
      border: 'border-[#EF3688]',
      icon: <Phone className="w-5 h-5 text-[#EF3688]" />,
      titleColor: 'text-[#EF3688]'
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-6 my-6`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">{style.icon}</div>
        <div className="flex-1">
          {title && <h3 className={`${style.titleColor} mb-2`}>{title}</h3>}
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
