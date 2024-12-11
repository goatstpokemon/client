import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '@/pages/AboutPage';
import PartnerPage from '@/pages/PartnerPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';
import MemberPage from '@/pages/MemberPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/over-ons',
    element: <AboutPage />
  },
  {
    path: '/partners',
    element: <PartnerPage />
  },
  {
    path: '/team',
    element: <TeamPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/lid-worden',
    element: <MemberPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default router;
