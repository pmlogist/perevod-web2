import {
  Button,
  Card,
  Image,
  Group,
  Text,
  Badge,
  useMantineTheme,
  Box,
  Grid,
  Paper,
  Title,
} from "@mantine/core";
import { AppLayout } from "@/layouts/App/AppLayout";

export default function ITPage() {
  return (
    <div>
      <Title>Information Technology</Title>
      <Grid gutter={20}>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <QuizCard />
        </Grid.Col>
      </Grid>
    </div>
  );
}

function QuizCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Box>
      <Paper
        shadow="sm"
        p="lg"
        sx={{
          cursor: "pointer",
          border: `1px solid transparent`,
          ":hover": {
            boxShadow: theme.shadows.md,
            border: `1px solid ${theme.colors.gray[3]}`,
          },
        }}
      >
        <Card.Section>
          <Image
            src="https://bcn-a.akamaihd.net/img/news_09_02_17_buzova_coin.jpg"
            height={160}
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            New
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>
      </Paper>
    </Box>
  );
}

ITPage.setLayout = AppLayout;
