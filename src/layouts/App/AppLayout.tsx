import { Transition } from "@/components/Transition/Transition";
import {
  AppShell,
  Navbar,
  Header,
  ActionIcon,
  Group,
  useMantineColorScheme,
  Center,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { MoonStars, Sun } from "tabler-icons-react";
import { BaseLayoutSchema } from "../BaseLayout";
import { MainLinks } from "./NavLinks";

export interface AppLayoutSchemaProps {
  children: React.ReactNode;
}

export function AppLayoutSchema({ children }: AppLayoutSchemaProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { pathname } = useRouter();

  return (
    <AppShell
      padding="md"
      fixed
      header={
        <Header height={60} fixed>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Link href="/">
              <a>
                <Center>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.85 41.045L39.124 19.2l-.797-.818c-1.878-1.803-3.978-3.149-6.3-4.036-2.293-.919-4.658-1.132-7.094-.64-2.437.494-4.87 1.988-7.301 4.483-1.823 1.872-3.085 3.914-3.787 6.127-.698 2.152-.847 4.401-.447 6.746.4 2.345 1.292 4.759 2.677 7.241a30.716 30.716 0 001.776 2.74zm-4.015 19.02l43.39-44.552-4.32-4.435c-3.27-3.358-6.702-5.977-10.295-7.857C39.048 1.311 35.407.255 31.688.055c-3.717-.26-7.442.407-11.175 2.002-3.734 1.594-7.363 4.2-10.887 7.82-3.19 3.275-5.608 6.876-7.252 10.804C.73 24.608-.06 28.663.004 32.846.039 37 .934 41.133 2.69 45.244c1.755 4.11 4.408 7.99 7.959 11.635l1.677 1.722c.495.508.998.996 1.51 1.464z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M82.15 41.045L60.876 19.2l.797-.818c1.878-1.803 3.978-3.149 6.3-4.036 2.293-.919 4.657-1.132 7.094-.64 2.437.494 4.87 1.988 7.301 4.483 1.823 1.872 3.085 3.914 3.787 6.127.698 2.152.847 4.401.447 6.746-.4 2.345-1.292 4.759-2.677 7.241a30.716 30.716 0 01-1.775 2.74zm4.014 19.02l-43.39-44.552 4.32-4.435c3.271-3.358 6.703-5.977 10.296-7.857C60.952 1.311 64.593.255 68.312.055c3.717-.26 7.442.407 11.175 2.002 3.734 1.594 7.363 4.2 10.887 7.82 3.19 3.275 5.608 6.876 7.252 10.804 1.644 3.927 2.434 7.982 2.37 12.165-.035 4.154-.93 8.287-2.686 12.398-1.755 4.11-4.408 7.99-7.959 11.635L87.674 58.6c-.495.508-.998.996-1.51 1.464zM17.85 58.955L39.124 80.8l-.797.818c-1.878 1.803-3.978 3.149-6.3 4.036-2.293.919-4.658 1.132-7.094.64-2.437-.494-4.87-1.988-7.301-4.483-1.823-1.872-3.085-3.914-3.787-6.127-.698-2.153-.847-4.401-.447-6.746.4-2.345 1.292-4.759 2.677-7.241a30.716 30.716 0 011.776-2.74zm-4.015-19.02l43.39 44.552-4.32 4.435c-3.27 3.358-6.702 5.977-10.295 7.857-3.562 1.91-7.203 2.966-10.922 3.166-3.717.26-7.442-.407-11.175-2.002-3.734-1.594-7.363-4.2-10.887-7.82-3.19-3.275-5.608-6.877-7.252-10.804C.73 75.392-.06 71.337.004 67.154.039 63 .934 58.867 2.69 54.756c1.755-4.11 4.408-7.99 7.959-11.635l1.677-1.722c.495-.508.998-.996 1.51-1.464z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M82.15 58.955L60.876 80.8l.797.818c1.878 1.803 3.978 3.149 6.3 4.036 2.293.919 4.657 1.132 7.094.64 2.437-.494 4.87-1.988 7.301-4.483 1.823-1.872 3.085-3.914 3.787-6.127.698-2.153.847-4.401.447-6.746-.4-2.345-1.292-4.759-2.677-7.241a30.716 30.716 0 00-1.775-2.74zm4.014-19.02l-43.39 44.552 4.32 4.435c3.271 3.358 6.703 5.977 10.296 7.857 3.562 1.91 7.203 2.966 10.922 3.166 3.717.26 7.442-.407 11.175-2.002 3.734-1.594 7.363-4.2 10.887-7.82 3.19-3.275 5.608-6.877 7.252-10.804 1.644-3.927 2.434-7.982 2.37-12.165-.035-4.154-.93-8.287-2.686-12.398-1.755-4.11-4.408-7.99-7.959-11.635L87.674 41.4a36.621 36.621 0 00-1.51-1.464z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Center>
              </a>
            </Link>

            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <MoonStars size={16} />
              )}
            </ActionIcon>
          </Group>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
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
      <Transition location={pathname}>{children}</Transition>
    </AppShell>
  );
}

export function AppLayout(page: React.ReactNode) {
  return (
    <BaseLayoutSchema>
      <AppLayoutSchema>{page}</AppLayoutSchema>
    </BaseLayoutSchema>
  );
}
