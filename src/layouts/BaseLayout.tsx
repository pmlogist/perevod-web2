export interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayoutSchema({ children }: BaseLayoutProps) {
  return <>{children}</>;
}

export function BaseLayout(page: React.ReactNode) {
  return <BaseLayoutSchema>{page}</BaseLayoutSchema>;
}
