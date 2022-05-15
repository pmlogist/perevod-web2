import useTranslation from "next-translate/useTranslation";
import { Box, Button, Center, Group, Text, Title } from "@mantine/core";
import { GuestLayout } from "@/layouts/GuestLayout";
import Head from "next/head";
import Link from "next/link";

export default function WelcomePage() {
  const { t } = useTranslation("home-page");

  return (
    <>
      <Head>
        <title>perevod</title>
      </Head>

      <Center style={{ height: "100%" }}>
        <Box>
          <Title order={1}>Another way to learn</Title>
          <Text align="center" color="dimmed">
            This web application is in alpha.
            <br />
            Some instabilities might occur
          </Text>
          <Group position="center">
            <Link href="/app">
              <a>
                <Button
                  mt={20}
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 35 }}
                >
                  Getting started
                </Button>
              </a>
            </Link>
          </Group>
        </Box>
      </Center>
    </>
  );
}

WelcomePage.setLayout = GuestLayout;
