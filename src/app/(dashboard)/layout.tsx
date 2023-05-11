import { redirect } from 'next/navigation';
import { parseCookies } from 'nookies';

import { RenderDashboardLayoutInClient } from './client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { 'mais_cupom.accessToken': accessTOken } = parseCookies();

  // if (!accessTOken) {
  //   redirect('/auth');
  // }

  return (
    <RenderDashboardLayoutInClient>{children}</RenderDashboardLayoutInClient>
  );
}
