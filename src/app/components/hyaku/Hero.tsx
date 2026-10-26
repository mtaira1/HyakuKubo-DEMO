import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';

// HYAKU KUBOの実際の写真
import photo1 from 'figma:asset/008c4a2f98cccff9e3c81ba32337286d571bcf04.png';
import photo2 from 'figma:asset/14df8c3a25087e215f895f194607bd641ecc7634.png';
import photo3 from 'figma:asset/6c07d460e7f928e6cb74e9778004620d9e168d0e.png';
import photo4 from 'figma:asset/35ac26a56104623dde0675450c47aa891b262983.png';
import photo5 from 'figma:asset/e61feed35f2013bc8f891a39c1ca33618ad4b1ba.png';
import photo6 from 'figma:asset/7434800fcb2afab03ed9bb8594d05c0b90168c2e.png';
import photo7 from 'figma:asset/52835199056848b00b57f798edf4893b1761ce76.png';
import photo8 from 'figma:asset/20b7d4ddd6bdfe2aaa11b22dcdbe95bfc9716cb8.png';
import photo9 from 'figma:asset/66cddfba9630da4a7b1bd71084a4a765c61f4b83.png';
import photo10 from 'figma:asset/82bfb42024c62aae6020cb9f1aa2994a30290647.png';
import photo11 from 'figma:asset/42a6b9466a9e347742228d84e9fa9d044a33a284.png';
import photo12 from 'figma:asset/5e2f4c682251585e91ffaa36f3a189f0e2d2eaad.png';
import photo13 from 'figma:asset/c1b37a6d8fed4a915a55f951a9406b402328578e.png';
import photo14 from 'figma:asset/a42dbd633135fec8ce84737bd245482c4588512e.png';

const allPhotos = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7,
  photo8, photo9, photo10, photo11, photo12, photo13, photo14
];

interface FloatingImage {
  id: number;
  photo: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
}

export function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [images, setImages] = useState<FloatingImage[]>([]);
  const nextIdRef = useRef(0);
  const photoIndexRef = useRef(0);

  // ランダムな画面外の位置を生成
  const getRandomStartPosition = () => {
    const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

    switch (side) {
      case 0: // top
        return { x: Math.random() * width, y: -300 };
      case 1: // right
        return { x: width + 300, y: Math.random() * height };
      case 2: // bottom
        return { x: Math.random() * width, y: height + 300 };
      case 3: // left
      default:
        return { x: -300, y: Math.random() * height };
    }
  };

  // ランダムな画面外の終了位置を生成
  const getRandomEndPosition = () => {
    const side = Math.floor(Math.random() * 4);
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

    switch (side) {
      case 0:
        return { x: Math.random() * width, y: -300 };
      case 1:
        return { x: width + 300, y: Math.random() * height };
      case 2:
        return { x: Math.random() * width, y: height + 300 };
      case 3:
      default:
        return { x: -300, y: Math.random() * height };
    }
  };

  // 新しい画像を生成
  const createNewImage = (): FloatingImage => {
    const start = getRandomStartPosition();
    const end = getRandomEndPosition();
    const photo = allPhotos[photoIndexRef.current % allPhotos.length];
    photoIndexRef.current += 1;

    return {
      id: nextIdRef.current++,
      photo,
      startX: start.x,
      startY: start.y,
      endX: end.x,
      endY: end.y,
      duration: 15 + Math.random() * 10, // 15-25秒
    };
  };

  useEffect(() => {
    // 初期画像を生成（10枚）
    const initialImages = Array.from({ length: 10 }, () => createNewImage());
    setImages(initialImages);

    // 音声を再生
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Audio play prevented:', err);
        });
      }
    }, 1000);

    // 定期的に新しい画像を追加（古い画像が消えるタイミングで）
    const interval = setInterval(() => {
      setImages(prev => {
        // 古い画像を削除して新しい画像を追加
        const newImage = createNewImage();
        return [...prev.slice(-9), newImage]; // 常に10枚を維持
      });
    }, 2500); // 2.5秒ごとに新しい画像

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="min-h-[170vh] flex items-center justify-center relative overflow-hidden bg-black">
      <audio ref={audioRef} src="/sounds/impact.mp3" preload="auto" />
      
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="absolute w-48 h-48 md:w-64 md:h-64"
              initial={{ 
                x: img.startX,
                y: img.startY,
                opacity: 0,
                scale: 0.8
              }}
              animate={{ 
                x: img.endX,
                y: img.endY,
                opacity: [0, 0.5, 0.4, 0.5, 0],
                scale: [0.8, 1, 1.1, 1, 0.9]
              }}
              exit={{
                opacity: 0,
                scale: 0.7
              }}
              transition={{
                duration: img.duration,
                ease: "linear"
              }}
            >
              <ImageWithFallback 
                src={img.photo}
                alt={`Floating image ${img.id}`}
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-red-500 tracking-widest"
          style={{ marginTop: '-10vh' }}
          initial={{ scale: 0.05, y: 12 }}
          animate={{
            scale: [0.05, 0.10, 0.22, 0.42, 0.70, 1.00],
            y: [12, 10, 7, 4, 2, 0],
          }}
          transition={{
            duration: 4,
            times: [0, 0.1, 0.225, 0.425, 0.675, 1.0],
            ease: "easeInOut",
          }}
        >
          HYAKU KUBO
        </motion.h1>
      </div>
    </section>
  );
}