import { AppLayout } from "@/layouts/App/AppLayout";
import { Center, Chip, Chips } from "@mantine/core";
import { useEffect, useState } from "react";

export default function AppPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("test");
      return fetch("/api/quizmoji/it", { method: "GET" })
        .then((res) => res.json())
        .then(setData);
    })();
  }, []);

  return (
    <Center style={{ height: "100%" }}>
      {data &&
        data.map((q) => (
          <Center style={{ height: "100%" }}>
            <Chips size="xl">
              <Chip key={q.answers.answer_a} value={q.answers.answer_a}>
                {q.answers.answer_a}
              </Chip>
              <Chip key={q.answers.answer_b} value={q.answers.answer_b}>
                {q.answers.answer_b}
              </Chip>
              <Chip key={q.answers.answer_c} value={q.answers.answer_c}>
                {q.answers.answer_c}
              </Chip>
              <Chip key={q.answers.answer_d} value={q.answers.answer_d}>
                {q.answers.answer_d}
              </Chip>
            </Chips>
          </Center>
        ))}
    </Center>
  );
}

AppPage.setLayout = AppLayout;
