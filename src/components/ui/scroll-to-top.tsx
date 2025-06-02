import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from './button';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 rounded-full p-3 bg-gradient-to-r from-tinkuy-purple to-tinkuy-turquoise hover:from-tinkuy-purple-dark hover:to-tinkuy-turquoise-dark text-white shadow-lg"
      size="icon"
      aria-label="Volver arriba"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};
