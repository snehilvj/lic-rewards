import "@mantine/core/styles.css";
import {
  Container,
  MantineProvider,
  NumberInput,
  Text,
  Card,
  Center,
  Stack,
  Paper,
  Space,
} from "@mantine/core";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import {
  GrandParty,
  LuckyDraw,
  RoyalEnfield,
  ToppersTop,
  TyohaarKUphaar,
} from "./competetions";

const texts = {
  description: "Amount ( SP + NSP ) 100000 या अधिक",
  title:
    "प्रीमियम आधार पर ( सभी प्लान पर ) सिंगल और नॉन सिंगल पर प्राप्त होने वाले इनाम दिनांक 1-10-23 से 27-10-2023 तक ( मिनिमम 1 लाख प्रीमियम )",
  tyohaar:
    "त्योहार के उपहार ( SP + NSP ) ZO 01-10-23 से 31 -10-23 तक (Every ananda extra 100 रु)",
  toppers: "टोप टॉपर्स CO ( SP + NSP ) 01-10-23 से 30-11-23 तक",
  total: "कुल इनाम",
  party:
    "होटल रामी रॉयल में आकर्षक एंजोयमेन्ट प्रोग्राम ( One night stay ) 03-10-23 से 27-10-23 तक",
  luckyDraw: "Lucky Draw Coupons (Upto 2 lacs)",
  royalEnfield: "कंपेन बुलेट प्रतियोगिता 31-03-24 तक",
  royalEnfieldDescription: "ROYAL ENFIELD BULLET जीतने की पात्रता",
};

interface RewardProps {
  text: string;
  value?: string;
}

const Reward = (props: RewardProps) => {
  return (
    <Card withBorder>
      <Stack mih={80} justify="center">
        <Text size="lg">{props.text}</Text>
        <Text color="indigo" size="lg">
          {props.value}
        </Text>
      </Stack>
    </Card>
  );
};

export default function App() {
  const [val, setVal] = useState<any>(0);
  const [topperReward, setTopperReward] = useState(ToppersTop(val));
  const [tyohaarReward, setTyohaarReward] = useState(TyohaarKUphaar(val));
  const [luckyDraw, setLuckyDraw] = useState(LuckyDraw(val));
  const [royal, setRoyal] = useState(RoyalEnfield(val));
  const [partyReward, setPartyReward] = useState(GrandParty(val));

  useEffect(() => {
    setTopperReward(ToppersTop(val));
  }, [val]);
  useEffect(() => {
    setTyohaarReward(TyohaarKUphaar(val));
  }, [val]);
  useEffect(() => {
    setLuckyDraw(LuckyDraw(val));
  }, [val]);
  useEffect(() => {
    setPartyReward(GrandParty(val));
  }, [val]);
  useEffect(() => {
    setRoyal(RoyalEnfield(val));
  }, [val]);

  return (
    <MantineProvider theme={theme}>
      <Container p={20}>
        <Text size="xl" lh={1.6}>
          {texts.title}
        </Text>
        <NumberInput
          min={0}
          size="lg"
          label={texts.description}
          value={val}
          hideControls
          onChange={setVal}
          py={30}
        />
        <Stack>
          {tyohaarReward ? (
            <Paper withBorder p={10}>
              {tyohaarReward ? (
                <Reward text={texts.tyohaar} value={tyohaarReward.toString()} />
              ) : null}
              {tyohaarReward ? <Space h={10} /> : null}
              {topperReward ? (
                <Reward text={texts.toppers} value={topperReward.toString()} />
              ) : null}
              {topperReward ? <Space h={10} /> : null}
              <Reward
                text={texts.total}
                value={(topperReward + tyohaarReward).toString()}
              />
            </Paper>
          ) : null}
          {partyReward ? (
            <Stack>
              <Center>+</Center>
              <Reward text={texts.party} value={partyReward} />
            </Stack>
          ) : null}
          {luckyDraw ? (
            <Stack>
              <Center>+</Center>
              <Reward text={texts.toppers} value={texts.luckyDraw} />
            </Stack>
          ) : null}
          {royal ? (
            <Stack>
              <Center>+</Center>
              <Reward
                text={texts.royalEnfield}
                value={texts.royalEnfieldDescription}
              />
            </Stack>
          ) : null}
        </Stack>
      </Container>
    </MantineProvider>
  );
}
