import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',
    
    // Hero
    'hero.title': 'HYAKU KUBO',
    
    // About
    'about.title': 'ABOUT',
    'about.subtitle': 'RAW. AUTHENTIC. UNFILTERED.',
    'about.description': "I'm Hyaku Kubo—a photographer and model capturing the gritty, atmospheric essence of urban life. My work is about finding beauty in the raw and the real. Whether I'm behind the camera or in front of it, I bring an unfiltered perspective that blurs the line between art and reality.",
    'about.cta': 'View My Work',
    
    // Work
    'work.title': 'WORK',
    'work.work': 'WORK',
    'work.personal': 'PERSONAL WORK',
    'work.modeling': 'MODELING',
    'work.gallery': 'GALLERY',
    'work.photography.desc': 'Raw, atmospheric shots capturing urban life and emotion.',
    'work.modeling.desc': 'Edgy, authentic modeling work for fashion and art projects.',
    
    // Contact
    'contact.title': 'CONTACT',
    'contact.subtitle': "LET'S COLLABORATE",
    'contact.description': 'Available for photography projects, modeling gigs, and creative collaborations. Let\'s create something raw and unforgettable.',
    'contact.email': 'Email',
    'contact.follow': 'Follow',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': 'Tell me about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent! Will get back to you soon.',
    
    // Footer
    'footer.rights': 'All Rights Reserved.',
  },
  ja: {
    // Navigation - Keep English for nav items
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',
    
    // Hero
    'hero.title': 'HYAKU KUBO',
    
    // About - Section title in English, content in Japanese
    'about.title': 'ABOUT',
    'about.subtitle': '生々しく。リアルに。飾らずに。',
    'about.description': '久保百（ひゃく）。フォトグラファー兼モデルとして、都市生活の荒々しく雰囲気のある本質を捉えています。私の作品は、生々しさとリアルさの中に美しさを見出すこと。カメラの後ろでも前でも、アートと現実の境界を曖昧にする飾らない視点を提供します。',
    'about.cta': '作品を見る',
    
    // Work - Section title in English, content in Japanese
    'work.title': 'WORK',
    'work.work': 'WORK',
    'work.personal': 'PERSONAL WORK',
    'work.modeling': 'MODELING',
    'work.gallery': 'GALLERY',
    'work.photography.desc': '都市生活と感情を捉えた生々しく雰囲気のある写真。',
    'work.modeling.desc': 'ファッションとアートプロジェクトのためのエッジの効いた本物のモデリング作品。',
    
    // Contact - Section title in English, content in Japanese
    'contact.title': 'CONTACT',
    'contact.subtitle': '一緒に創りましょう',
    'contact.description': '写真プロジェクト、モデルの仕事、クリエイティブなコラボレーションを承ります。生々しく忘れられない何かを一緒に創りましょう。',
    'contact.email': 'メール',
    'contact.follow': 'フォロー',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.namePlaceholder': 'お名前を入力',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.messagePlaceholder': 'プロジェクトについて教えてください...',
    'contact.form.submit': '送信する',
    'contact.form.success': 'メッセージを送信しました！すぐに返信します。',
    
    // Footer
    'footer.rights': 'All Rights Reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations['en']];
    return translation || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}