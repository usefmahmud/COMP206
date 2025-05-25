import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

const App = () => {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
    });

    deckRef.current.initialize().then(() => {
      console.log('Reveal.js initialized successfully');
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    <div className='reveal h-screen' ref={deckDivRef}>
      <div className='slides'>
        <section>slide 1</section>
        <section>
          <section>slide 2.1</section>
          <section>slide 2.2</section>
          <section>slide 2.3</section>
        </section>
        <section>slide 3</section>
      </div>
    </div>
  );
};

export default App;
