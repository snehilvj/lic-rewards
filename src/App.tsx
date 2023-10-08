import "@mantine/core/styles.css";
import {
  Container,
  MantineProvider,
  NumberInput,
  Text,
  Card,
  Center,
  Stack,
} from "@mantine/core";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import { Children } from "react";

interface RewardProps {
  text: string;
}

const Reward = (props: RewardProps) => {
  return (
    <Card withBorder>
      <Center h={100}>
        <Text size="lg">{props.text}</Text>
      </Center>{" "}
    </Card>
  );
};

function calculateRewards(amount: any) {
  const table = [
    { amount: 100000, cash: 300, bonus: 0, special1: "", special2: "" },
    { amount: 200000, cash: 750, bonus: 0, special1: "", special2: "" },
    { amount: 300000, cash: 750, bonus: 0, special1: "", special2: "" },
    { amount: 400000, cash: 750, bonus: 0, special1: "", special2: "" },
    { amount: 500000, cash: 2500, bonus: 0, special1: "", special2: "" },
    { amount: 600000, cash: 2500, bonus: 0, special1: "", special2: "" },
    { amount: 700000, cash: 2500, bonus: 0, special1: "", special2: "" },
    { amount: 800000, cash: 2500, bonus: 0, special1: "", special2: "" },
    { amount: 900000, cash: 2500, bonus: 0, special1: "", special2: "" },
    {
      amount: 1000000,
      cash: 10000,
      bonus: 0,
      special1: "Lucky Draw (2 lacs)",
      special2: "",
    },
    {
      amount: 1100000,
      cash: 11000,
      bonus: 6000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1200000,
      cash: 12000,
      bonus: 6000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1300000,
      cash: 13000,
      bonus: 6000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1400000,
      cash: 14000,
      bonus: 6000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1500000,
      cash: 15000,
      bonus: 6000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1600000,
      cash: 16000,
      bonus: 9000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1700000,
      cash: 17000,
      bonus: 9000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1800000,
      cash: 18000,
      bonus: 9000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 1900000,
      cash: 19000,
      bonus: 9000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 2000000,
      cash: 20000,
      bonus: 9000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - night stay - Ramec Royal",
    },
    {
      amount: 2100000,
      cash: 21000,
      bonus: 12000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2200000,
      cash: 22000,
      bonus: 12000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2300000,
      cash: 23000,
      bonus: 12000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2400000,
      cash: 24000,
      bonus: 12000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2500000,
      cash: 25000,
      bonus: 12000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2600000,
      cash: 26000,
      bonus: 15000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2700000,
      cash: 27000,
      bonus: 15000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2800000,
      cash: 28000,
      bonus: 15000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 2900000,
      cash: 29000,
      bonus: 15000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 3000000,
      cash: 30000,
      bonus: 15000,
      special1: "Lucky Draw (2 lacs)",
      special2: "Seminar - with spouse",
    },
    {
      amount: 3100000,
      cash: 31000,
      bonus: 18000,
      special1: "Lucky Draw (2 lacs)",
      special2: "3 tickets Ramec Royal",
    },
    {
      amount: 3200000,
      cash: 32000,
      bonus: 18000,
      special1: "Lucky Draw (2 lacs)",
      special2: "3 tickets Ramec Royal",
    },
    {
      amount: 3300000,
      cash: 33000,
      bonus: 18000,
      special1: "Lucky Draw (2 lacs)",
      special2: "3 tickets Ramec Royal",
    },
    {
      amount: 3400000,
      cash: 34000,
      bonus: 18000,
      special1: "Lucky Draw (2 lacs)",
      special2: "3 tickets Ramec Royal",
    },
    {
      amount: 3500000,
      cash: 35000,
      bonus: 18000,
      special1: "Lucky Draw (2 lacs)",
      special2: "3 tickets Ramec Royal",
    },
    {
      amount: 3600000,
      cash: 36000,
      bonus: 21000,
      special1: "Lucky Draw (2 lacs)",
      special2: "4 tickets Ramec Royal",
    },
  ];

  let rewards = [];

  for (let i = table.length - 1; i >= 0; i--) {
    if (amount >= table[i].amount) {
      const row = table[i];
      rewards.push("₹" + row.cash.toString());

      if (row.bonus > 0) {
        rewards.push("₹" + row.bonus.toString());
      }

      if (row.special1) {
        rewards.push(row.special1);
      }

      if (row.special2) {
        rewards.push(row.special2);
      }

      break;
    }
  }
  return rewards;
}

export default function App() {
  const [val, setVal] = useState<any>(1);
  const [rewards, setRewards] = useState<string[]>([]);

  useEffect(() => {
    const rew = calculateRewards(val * 100000);
    setRewards(rew);
  }, [val]);

  return (
    <MantineProvider theme={theme}>
      <Container p={50}>
        <Text size="30" lh={0}>
          LIC Agent Rewards
        </Text>
        <NumberInput
          min={0}
          max={40}
          size="lg"
          label="Amount"
          description="Enter the amount in lacs"
          value={val}
          onChange={setVal}
          py={50}
        />
        <Stack>
          {Children.map(rewards, (text, index) => {
            return <Reward key={index} text={text} />;
          })}
        </Stack>
      </Container>
    </MantineProvider>
  );
}
