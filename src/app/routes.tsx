import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { PhotographyPage } from './pages/PhotographyPage';
import { ProjectSlideshow } from './pages/ProjectSlideshow';
import { BookPage } from './pages/BookPage';
import { VideoPage } from './pages/VideoPage';
import { BioContactPage } from './pages/BioContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/photography' && sessionStorage.getItem('photo_scroll')) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      { path: '/', Component: HomePage },
      { path: '/photography', Component: PhotographyPage },
      { path: '/photography/:projectId', Component: ProjectSlideshow },
      { path: '/book', Component: BookPage },
      { path: '/video', Component: VideoPage },
      { path: '/bio-contact', Component: BioContactPage },
    ],
  },
]);
