import React, { useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toastMessage, clearToast } = useProfile();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  const { message, type } = toastMessage;

  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-500 flex-shrink-0" />
  };

  const borderMap = {
    success: 'border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-100',
    error: 'border-rose-500/30 bg-rose-50/90 dark:bg-rose-950/80 text-rose-900 dark:text-rose-100',
    info: 'border-indigo-500/30 bg-indigo-50/90 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-100'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className={`p-4 rounded-xl border backdrop-blur-md shadow-2xl flex items-center justify-between gap-3 ${borderMap[type] || borderMap.info}`}>
        <div className="flex items-center gap-3">
          {iconMap[type] || iconMap.info}
          <p className="text-sm font-medium leading-tight">{message}</p>
        </div>
        <button
          onClick={clearToast}
          className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1 rounded-lg transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
