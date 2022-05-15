import React from "react";
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Train,
  DeviceLaptop,
  BuildingBank,
  MoodHappy,
} from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text, Divider } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  const router = useRouter();

  return (
    <UnstyledButton
      onClick={() => router.push(href)}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <DeviceLaptop size={16} />,
    color: "blue",
    label: "Information technology",
    href: "/quiz/it",
  },
  {
    icon: <Train size={16} />,
    color: "teal",
    label: "Tourism",

    href: "/quiz/tourism",
  },
  {
    icon: <BuildingBank size={16} />,
    color: "violet",
    label: "Finance",

    href: "/",
  },

  {
    icon: <MoodHappy size={16} />,
    color: "violet",
    label: "Quizmoji",

    href: "/app/quizmoji",
  },
];

export function MainLinks() {
  return (
    <div>
      {data.map((link) => (
        <MainLink key={link.href} {...link} />
      ))}
    </div>
  );
}
