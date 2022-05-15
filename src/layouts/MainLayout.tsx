import { AppShell, Navbar, Header } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import { Transition } from "@/components/Transition/Transition";
import { Navigation } from "@/ui/Navigation";
import { BaseLayoutSchema } from "./BaseLayout";
import { NavItemProps } from "@/ui/Navigation/Item/NavItem";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayoutSchema = ({ children }: MainLayoutProps) => {
  const { pathname } = useRouter();
  const { t } = useTranslation("common");

  const items: NavItemProps[] = [
    { name: t`layout.navigation.play`, href: "/game" },
  ];

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export const MainLayout = (page: React.ReactNode) => {
  return (
    <BaseLayoutSchema>
      <MainLayoutSchema>{page}</MainLayoutSchema>
    </BaseLayoutSchema>
  );
};
