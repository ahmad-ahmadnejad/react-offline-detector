import { useEffect, useState } from 'react';

export const useOfflineDetector = (): boolean => {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Set initial status based on the current network state
    setIsOffline(!navigator.onLine);

    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return isOffline;
};
