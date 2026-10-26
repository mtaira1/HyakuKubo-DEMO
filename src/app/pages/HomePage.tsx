import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';

// A24 x MINOR PLANET NYC
import a24_1 from '../../imports/A24_Planet_NYC_Individuals0013_copy.jpg';
import a24_2 from '../../imports/A24_Planet_NYC_Individuals0017_copy.jpg';
import a24_3 from '../../imports/A24_Planet_NYC_Individuals0022_copy.jpg';
import a24_4 from '../../imports/A24_Planet_NYC_Individuals0026_copy.jpg';
import a24_5 from '../../imports/A24_Planet_NYC_Individuals0034_copy.jpg';
import a24_6 from '../../imports/A24_Planet_NYC_Individuals0039_copy.jpg';
import a24_7 from '../../imports/A24_PLANETNYC_INDIVIDUAL20251229_15130135_copy.jpg';
import a24_8 from '../../imports/A24_PLANETNYC_INDIVIDUAL20251229_15425804_copy.jpg';

// ALL MADE
import allMade_1 from '../../imports/975-6-15_1.jpg';
import allMade_2 from '../../imports/975-6-19_1.jpg';
import allMade_3 from '../../imports/975-6-31_1.jpg';
import allMade_4 from '../../imports/975-7-27_1.jpg';
import allMade_5 from '../../imports/975-11-15_1.jpg';
import allMade_6 from '../../imports/975-11-27_1.jpg';
import allMade_7 from '../../imports/975-11-30_1.jpg';
import allMade_8 from '../../imports/975-15-17_1.jpg';
import allMade_9 from '../../imports/975-15-30_1.jpg';
import allMade_10 from '../../imports/975-16-08_1.jpg';
import allMade_11 from '../../imports/975-17-25_1.jpg';

// CAFE TROPICAL
import cafeTropical_1 from '../../imports/000163980007_copy.jpg';
import cafeTropical_2 from '../../imports/000163980015_copy.jpg';
import cafeTropical_3 from '../../imports/000163980032_copy.jpg';
import cafeTropical_4 from '../../imports/000163990007_copy.jpg';
import cafeTropical_5 from '../../imports/000163990012_copy.jpg';
import cafeTropical_6 from '../../imports/000163990033_copy.jpg';
import cafeTropical_7 from '../../imports/000163990035_copy.jpg';
import cafeTropical_8 from '../../imports/000164000021_copy.jpg';
import cafeTropical_9 from '../../imports/000164000024_copy.jpg';
import cafeTropical_10 from '../../imports/000164000033_copy.jpg';
import cafeTropical_11 from '../../imports/000164000034_copy.jpg';

// COTODAMA
import cotodama_1 from '../../imports/RAW_0564.jpg';
import cotodama_2 from '../../imports/RAW_0629.jpg';
import cotodama_3 from '../../imports/RAW_0703.jpg';
import cotodama_4 from '../../imports/RAW_0723.jpg';
import cotodama_5 from '../../imports/RAW_0753.jpg';

// EYESCREAM MAGAZINE
import eyescream_1 from '../../imports/EYESCREAM_INC_PRINT_copy.jpg';
import eyescream_2 from '../../imports/EYESCREAM_INC_PRINT0001_copy.jpg';
import eyescream_3 from '../../imports/EYESCREAM_INC_PRINT0006_copy.jpg';
import eyescream_4 from '../../imports/EYESCREAM_INC_PRINT0008_copy.jpg';
import eyescream_5 from '../../imports/EYESCREAM_INC_PRINT0009_copy.jpg';
import eyescream_6 from '../../imports/EYESCREAM_INC_SCAN11_copy.jpg';
import eyescream_7 from '../../imports/EYESCREAM_INC_SCAN12_copy.jpg';
import eyescream_8 from '../../imports/EYESCREAM_OZZIE_DECEMBER.jpg';
import eyescream_9 from '../../imports/EYESCREAM_OZZIE_DECEMBER0010.jpg';
import eyescream_10 from '../../imports/EYESCREAM_OZZIE_DECEMBER0015.jpg';
import eyescream_11 from '../../imports/EYESCREAM_OZZIE_DECEMBER20251226_20422009.jpg';
import eyescream_12 from '../../imports/EYESCREAM_OZZIE_DECEMBER20251226_21571308.jpg';

// FIRME ATELIER
import firme_1 from '../../imports/firme_1_copy.jpg';
import firme_2 from '../../imports/firme_5_copy.jpg';
import firme_3 from '../../imports/FIRME_APRON_ALFONSO_INDIVIDUALS12_copy.jpg';
import firme_4 from '../../imports/FIRME_APRON_KEI_INDIVIDUALS22_copy.jpg';
import firme_5 from '../../imports/FIRME_APRON_MANNY_INDIVIDUALS07_copy.jpg';
import firme_6 from '../../imports/hyak947-018_copy.jpg';
import firme_7 from '../../imports/papphet_print_20250803_16231493_1_1_copy.jpg';
import firme_8 from '../../imports/papphet_print_20250803_16305611_1_copy.jpg';
import firme_9 from '../../imports/papphet_print_20250803_16334635_2_copy.jpg';
import firme_10 from '../../imports/papphet_print_20250803_16413358_1_copy.jpg';
import firme_11 from '../../imports/papphet_print_20250803_16513155_2_copy.jpg';

// GEEKS RULE x SEGA
import geeks_1 from '../../imports/SCAN0000_______01____0001_copy.jpg';
import geeks_2 from '../../imports/SCAN0000_______02____0001_copy.jpg';
import geeks_3 from '../../imports/SCAN0000_______03____0001_copy.jpg';
import geeks_4 from '../../imports/SCAN0000_______04____0001_copy.jpg';
import geeks_5 from '../../imports/SCAN0000_______09____0001_copy.jpg';
import geeks_6 from '../../imports/SCAN0000_______12____0001_copy.jpg';
import geeks_7 from '../../imports/SCAN0000_______17____0001_copy.jpg';
import geeks_8 from '../../imports/SCAN0000_______18____0001_copy.jpg';
import geeks_9 from '../../imports/SCAN0000_______20____0001_copy.jpg';
import geeks_10 from '../../imports/SCAN0000_______21____0001_copy.jpg';

// GRAMICCI
import gramicci_1 from '../../imports/000211110006_copy.jpg';
import gramicci_2 from '../../imports/000211110016_copy.jpg';
import gramicci_3 from '../../imports/000211110030_copy.jpg';
import gramicci_4 from '../../imports/000211120011_copy.jpg';
import gramicci_5 from '../../imports/000211120016_copy.jpg';
import gramicci_6 from '../../imports/000211120021_copy.jpg';
import gramicci_7 from '../../imports/000211120030_copy.jpg';
import gramicci_8 from '../../imports/000211130005_copy.jpg';
import gramicci_9 from '../../imports/000211130022_copy.jpg';
import gramicci_10 from '../../imports/000211140011_copy.jpg';
import gramicci_11 from '../../imports/000211140019_copy.jpg';
import gramicci_12 from '../../imports/000211140029_copy.jpg';
import gramicci_13 from '../../imports/000211140034_copy.jpg';
import gramicci_14 from '../../imports/R1-06743-006A_copy.jpg';
import gramicci_15 from '../../imports/R1-06743-030A_copy.jpg';
import gramicci_16 from '../../imports/R1-06743-035A_copy.jpg';
import gramicci_17 from '../../imports/R1-06745-002A_copy.jpg';
import gramicci_18 from '../../imports/R1-06745-008A_copy.jpg';
import gramicci_19 from '../../imports/R1-06745-027A_copy.jpg';

// KODAK
import kodak_1 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL56_copy_3.jpg';
import kodak_2 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL71_copy_3.jpg';
import kodak_3 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL78_copy_3.jpg';
import kodak_4 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL90_copy_4.jpg';
import kodak_5 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL91_copy_3.jpg';
import kodak_6 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS13_copy.jpg';
import kodak_7 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS16_copy.jpg';
import kodak_8 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS18_copy.jpg';
import kodak_9 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS19_copy.jpg';
import kodak_10 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS20_copy.jpg';
import kodak_11 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS22_copy.jpg';
import kodak_12 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS25_copy.jpg';

// OYAKAWA
import oyakawa_1 from '../../imports/_RAW6389-Enhanced-NR.jpg';
import oyakawa_2 from '../../imports/_RAW6416-Enhanced-NR.jpg';
import oyakawa_3 from '../../imports/_RAW6472-Enhanced-NR.jpg';
import oyakawa_4 from '../../imports/_RAW6496-Enhanced-NR.jpg';
import oyakawa_5 from '../../imports/_RAW6539-Enhanced-NR.jpg';
import oyakawa_6 from '../../imports/_RAW6562-Enhanced-NR.jpg';
import oyakawa_7 from '../../imports/_RAW6594-Enhanced-NR.jpg';
import oyakawa_8 from '../../imports/_RAW6601-Enhanced-NR.jpg';
import oyakawa_9 from '../../imports/_RAW6620-Enhanced-NR.jpg';
import oyakawa_10 from '../../imports/_RAW6623-Enhanced-NR.jpg';
import oyakawa_11 from '../../imports/_RAW6626-Enhanced-NR.jpg';
import oyakawa_12 from '../../imports/_RAW6790-Enhanced-NR.jpg';

// THE KID LAROI x SAINT MICHEL
import kidLaroi_1 from '../../imports/DSC07885.jpg';
import kidLaroi_2 from '../../imports/DSC07892.jpg';
import kidLaroi_3 from '../../imports/DSC07898.jpg';
import kidLaroi_4 from '../../imports/IMGP1532.jpg';
import kidLaroi_5 from '../../imports/P1500115.jpg';
import kidLaroi_6 from '../../imports/P1500223.jpg';
import kidLaroi_7 from '../../imports/P1510552.jpg';
import kidLaroi_8 from '../../imports/P1510618.jpg';
import kidLaroi_9 from '../../imports/P1510621.jpg';

// プロジェクトごとに配列を作成
const projects = [
  [a24_1, a24_2, a24_3, a24_4, a24_5, a24_6, a24_7, a24_8],
  [allMade_1, allMade_2, allMade_3, allMade_4, allMade_5, allMade_6, allMade_7, allMade_8, allMade_9, allMade_10, allMade_11],
  [cafeTropical_1, cafeTropical_2, cafeTropical_3, cafeTropical_4, cafeTropical_5, cafeTropical_6, cafeTropical_7, cafeTropical_8, cafeTropical_9, cafeTropical_10, cafeTropical_11],
  [cotodama_1, cotodama_2, cotodama_3, cotodama_4, cotodama_5],
  [eyescream_1, eyescream_2, eyescream_3, eyescream_4, eyescream_5, eyescream_6, eyescream_7, eyescream_8, eyescream_9, eyescream_10, eyescream_11, eyescream_12],
  [firme_1, firme_2, firme_3, firme_4, firme_5, firme_6, firme_7, firme_8, firme_9, firme_10, firme_11],
  [geeks_1, geeks_2, geeks_3, geeks_4, geeks_5, geeks_6, geeks_7, geeks_8, geeks_9, geeks_10],
  [gramicci_1, gramicci_2, gramicci_3, gramicci_4, gramicci_5, gramicci_6, gramicci_7, gramicci_8, gramicci_9, gramicci_10, gramicci_11, gramicci_12, gramicci_13, gramicci_14, gramicci_15, gramicci_16, gramicci_17, gramicci_18, gramicci_19],
  [kodak_1, kodak_2, kodak_3, kodak_4, kodak_5, kodak_6, kodak_7, kodak_8, kodak_9, kodak_10, kodak_11, kodak_12],
  [oyakawa_1, oyakawa_2, oyakawa_3, oyakawa_4, oyakawa_5, oyakawa_6, oyakawa_7, oyakawa_8, oyakawa_9, oyakawa_10, oyakawa_11, oyakawa_12],
  [kidLaroi_1, kidLaroi_2, kidLaroi_3, kidLaroi_4, kidLaroi_5, kidLaroi_6, kidLaroi_7, kidLaroi_8, kidLaroi_9]
];

// 各プロジェクトからインデックスを管理
const indices = projects.map(() => 0);
const allPhotos: string[] = [];

// 全ての写真を混ぜてallPhotosに追加（ラウンドロビン方式）
let hasMore = true;
while (hasMore) {
  hasMore = false;
  projects.forEach((project, projectIndex) => {
    if (indices[projectIndex] < project.length) {
      allPhotos.push(project[indices[projectIndex]]);
      indices[projectIndex]++;
      hasMore = true;
    }
  });
}

function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;

    const gradEllipse = (
      cx: number, cy: number, rx: number, ry: number,
      r: number, g: number, b: number, alpha: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(rx, ry);
      const gr = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      gr.addColorStop(0,    `rgba(${r},${g},${b},${alpha})`);
      gr.addColorStop(0.55, `rgba(${r},${g},${b},${alpha * 0.4})`);
      gr.addColorStop(1,    `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = gr;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
    };

    // base
    ctx.fillStyle = '#020405';
    ctx.fillRect(0, 0, W, H);

    // sky teal base
    gradEllipse(W*0.5, H*0.32, W*0.72, H*0.68, 14, 42, 40, 0.9);
    gradEllipse(W*0.5, H*0.42, W*0.6,  H*0.52, 10, 32, 30, 0.7);

    // cloud mass — dense overlapping teal/green ellipses
    gradEllipse(W*0.48, H*0.20, W*0.56, H*0.30, 20, 56, 53, 0.85);
    gradEllipse(W*0.34, H*0.16, W*0.42, H*0.24, 22, 58, 54, 0.70);
    gradEllipse(W*0.66, H*0.24, W*0.40, H*0.24, 17, 48, 46, 0.75);
    gradEllipse(W*0.50, H*0.36, W*0.66, H*0.20, 12, 38, 36, 0.62);
    gradEllipse(W*0.20, H*0.28, W*0.36, H*0.20, 16, 46, 43, 0.58);
    gradEllipse(W*0.80, H*0.30, W*0.34, H*0.22, 14, 42, 40, 0.52);
    gradEllipse(W*0.50, H*0.10, W*0.46, H*0.20, 9,  30, 28, 0.78);
    gradEllipse(W*0.28, H*0.44, W*0.40, H*0.12, 10, 30, 29, 0.45);
    gradEllipse(W*0.72, H*0.46, W*0.38, H*0.12, 9,  27, 26, 0.40);
    gradEllipse(W*0.50, H*0.52, W*0.55, H*0.10, 8,  24, 23, 0.35);

    // warm coral/burnt-orange top-left
    gradEllipse(-W*0.04, -H*0.04, W*0.58, H*0.52, 112, 44, 18, 0.60);
    gradEllipse(W*0.08,  H*0.08,  W*0.38, H*0.32, 95,  36, 15, 0.40);

    // warm coral top-right
    gradEllipse(W*1.04,  -H*0.04, W*0.54, H*0.48, 98, 38, 16, 0.65);
    gradEllipse(W*0.92,  H*0.09,  W*0.36, H*0.30, 85, 32, 13, 0.45);

    // subtle warm bleed into cloud edges
    gradEllipse(W*0.12, H*0.14, W*0.28, H*0.18, 105, 42, 20, 0.28);
    gradEllipse(W*0.88, H*0.16, W*0.26, H*0.16, 90,  36, 18, 0.32);

    // upper edge darkening
    const topDark = ctx.createLinearGradient(0, 0, 0, H*0.28);
    topDark.addColorStop(0, 'rgba(2,3,4,0.80)');
    topDark.addColorStop(1, 'rgba(2,3,4,0)');
    ctx.fillStyle = topDark;
    ctx.fillRect(0, 0, W, H*0.28);

    // ground fade
    const groundGrad = ctx.createLinearGradient(0, H*0.68, 0, H);
    groundGrad.addColorStop(0,    'rgba(2,4,4,0)');
    groundGrad.addColorStop(0.22, 'rgba(2,4,4,0.88)');
    groundGrad.addColorStop(1,    'rgba(1,1,2,1)');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, H*0.68, W, H*0.32);
    ctx.fillStyle = '#010102';
    ctx.fillRect(0, H*0.84, W, H*0.16);

    // landscape silhouette — barely visible bumps at horizon
    ctx.fillStyle = 'rgba(2,4,4,0.92)';
    for (let i = 0; i < 120; i++) {
      const x = (i / 120) * W;
      const bump = 3 + Math.sin(i * 2.1) * 2.5 + Math.sin(i * 5.9) * 1.5 + Math.sin(i * 11.3) * 0.8;
      ctx.fillRect(x, H*0.71 - bump, W/120 + 1, bump + H*0.12);
    }

    // horizon lights — scattered dim points
    const rng = (n: number) => { let x = Math.sin(n * 127.1 + 311.7) * 43758.5; return x - Math.floor(x); };
    for (let i = 0; i < 60; i++) {
      const x = rng(i * 3.7) * W;
      const y = H * 0.715 + (rng(i * 2.1) - 0.5) * 12;
      const radius = rng(i * 5.3) * 1.4 + 0.3;
      const bright = rng(i * 7.1) * 0.38 + 0.07;
      const isBlue = rng(i * 11.3) > 0.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = isBlue
        ? `rgba(155,185,255,${bright * 0.45})`
        : `rgba(255,232,185,${bright * 0.38})`;
      ctx.fill();
    }

    // film grain
    const imageData = ctx.getImageData(0, 0, W, H);
    const d = imageData.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = (Math.random() - 0.5) * 32;
      d[i]   = Math.max(0, Math.min(255, d[i]   + n));
      d[i+1] = Math.max(0, Math.min(255, d[i+1] + n * 0.88));
      d[i+2] = Math.max(0, Math.min(255, d[i+2] + n * 0.94));
    }
    ctx.putImageData(imageData, 0, 0);

    // vignette
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.12, W/2, H/2, W*0.8);
    vig.addColorStop(0,   'rgba(0,0,0,0)');
    vig.addColorStop(0.5, 'rgba(0,0,0,0.12)');
    vig.addColorStop(1,   'rgba(0,0,0,0.82)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    // final exposure darkening
    ctx.fillStyle = 'rgba(2,3,5,0.18)';
    ctx.fillRect(0, 0, W, H);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={960}
      height={540}
      className="fixed inset-0 w-full h-full z-0"
      style={{ objectFit: 'cover' }}
    />
  );
}

interface FloatingImage {
  id: number;
  photo: string;
  side: 'left' | 'right' | 'top' | 'bottom';
  position: number;
  duration: number;
}

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isReturn = sessionStorage.getItem('hyaku_visited') === 'true';
  const [images, setImages] = useState<FloatingImage[]>([]);
  const [showImages, setShowImages] = useState(isReturn);
  const [neonPhase, setNeonPhase] = useState(isReturn);
  const nextIdRef = useRef(0);
  const photoIndexRef = useRef(0);
  const sideSlots = useRef<{ [key: string]: number[] }>({ left: [], right: [], top: [], bottom: [] });

  useEffect(() => {
    if (isReturn) return;
    const photoTimer = setTimeout(() => {
      setShowImages(true);
      sessionStorage.setItem('hyaku_visited', 'true');
    }, 1200);
    const neonTimer = setTimeout(() => setNeonPhase(true), 1800);
    return () => { clearTimeout(photoTimer); clearTimeout(neonTimer); };
  }, []);

  useEffect(() => {
    if (!showImages) return;

    const addImage = () => {
      // 全4方向をシャッフルして順番に試す — 空きがあればどこかに必ず追加
      const sides: Array<'left' | 'right' | 'top' | 'bottom'> = ['left', 'right', 'top', 'bottom'];
      const shuffled = [...sides].sort(() => Math.random() - 0.5);

      for (const side of shuffled) {
        const minDist = (side === 'left' || side === 'right') ? 28 : 22;
        const occupied = sideSlots.current[side];

        let position: number | null = null;
        for (let attempt = 0; attempt < 20; attempt++) {
          const candidate = 5 + Math.random() * 80;
          if (!occupied.some(p => Math.abs(p - candidate) < minDist)) {
            position = candidate;
            break;
          }
        }

        if (position !== null) {
          const duration = 12 + Math.random() * 8;
          const pos = position;
          sideSlots.current[side] = [...sideSlots.current[side], pos];
          // アニメーション終了2秒前にスロットを解放して次の写真をすぐ投入できるようにする
          setTimeout(() => {
            sideSlots.current[side] = sideSlots.current[side].filter(p => p !== pos);
          }, Math.max(duration * 1000 - 2000, 0));

          const newImage: FloatingImage = {
            id: nextIdRef.current++,
            photo: allPhotos[photoIndexRef.current % allPhotos.length],
            side,
            position: pos,
            duration,
          };
          photoIndexRef.current++;
          setImages(prev => [...prev.slice(-29), newImage]);
          return;
        }
      }
    };

    // 初期画像を大量に追加してすぐ埋める
    for (let i = 0; i < 25; i++) {
      addImage();
    }

    // 400ms ごとに補充してギャップを防ぐ
    const interval = setInterval(addImage, 400);

    return () => clearInterval(interval);
  }, [showImages])

  const isMobile = window.innerWidth < 768;

  const getImageStyle = (img: FloatingImage) => {
    const baseStyle = {
      position: 'absolute' as const,
      width: isMobile ? '200px' : '250px',
      height: 'auto',
    };

    switch (img.side) {
      case 'left':
        return { ...baseStyle, left: '-300px', top: `${img.position}%` };
      case 'right':
        return { ...baseStyle, right: '-300px', top: `${img.position}%` };
      case 'top':
        return { ...baseStyle, top: '-400px', left: `${img.position}%` };
      case 'bottom':
        return { ...baseStyle, bottom: '-400px', left: `${img.position}%` };
    }
  };

  const getAnimateStyle = (img: FloatingImage) => {
    const duration = img.duration;

    switch (img.side) {
      case 'left':
        return {
          x: [0, window.innerWidth + 500],
          opacity: [0, 1, 1, 0],
          transition: { duration, ease: 'linear' }
        };
      case 'right':
        return {
          x: [0, -(window.innerWidth + 500)],
          opacity: [0, 1, 1, 0],
          transition: { duration, ease: 'linear' }
        };
      case 'top':
        return {
          y: [0, window.innerHeight + 500],
          opacity: [0, 1, 1, 0],
          transition: { duration, ease: 'linear' }
        };
      case 'bottom':
        return {
          y: [0, -(window.innerHeight + 500)],
          opacity: [0, 1, 1, 0],
          transition: { duration, ease: 'linear' }
        };
    }
  };

  return (
    <div className="min-h-screen relative">
      <CinematicBackground />
      <Header onMenuClick={() => setMenuOpen(true)} />
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Animated Background Images */}
      {showImages && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {images.map((img) => (
              <motion.div
                key={img.id}
                style={getImageStyle(img)}
                animate={getAnimateStyle(img)}
                exit={{ opacity: 0 }}
              >
                <ImageWithFallback
                  src={img.photo}
                  alt="Floating"
                  className="w-full h-auto opacity-80"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Neon flicker keyframes */}
      <style>{`
        @keyframes logo-appear {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes neon-logo-flicker {
          0%   { opacity: 1; }
          25%  { opacity: 1; }
          25.01% { opacity: 0; }
          50%  { opacity: 0; }
          50.01% { opacity: 1; }
          75%  { opacity: 1; }
          75.01% { opacity: 0; }
          100% { opacity: 0; }
        }
        .logo-appear     { animation: logo-appear 0.5s ease forwards; }
        .neon-logo-active { animation: neon-logo-flicker 0.56s steps(1, end) infinite; }
      `}</style>

      {/* Fixed Center Logo */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className={!isReturn && !neonPhase ? 'logo-appear' : ''}>
          <div className={neonPhase ? 'neon-logo-active' : ''}>
            <p className="text-white font-bold tracking-wider text-center"
               style={{ fontSize: 'clamp(36px, 7vw, 64px)', letterSpacing: '0.06em' }}>
              HYAKU KUBO
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 h-[60vh]">
        {/* 透明なスペーサー */}
      </div>

      {/* Additional scrollable content area */}
      <div className="relative z-10 h-[60vh]">
        {/* 将来的にコンテンツを追加できるスペース */}
      </div>
    </div>
  );
}