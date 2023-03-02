import type { LottiePlayer } from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import animationData from './69495-blue-pen.json';

function PenTool() {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        // path to your animation file, place it inside public folder
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
}

export default PenTool;
