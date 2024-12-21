import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="layout">
      <div id="ember3" className="content-layout user-logged-in">
        {children}
      </div>
    </div>
  );
}
