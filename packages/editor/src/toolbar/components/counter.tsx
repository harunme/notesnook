import { Flex, Text } from "rebass";
import { ToolButton } from "./tool-button";

export type CounterProps = {
  title: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
  value: string;
};
export function Counter(props: CounterProps) {
  const { title, onDecrease, onIncrease, onReset, value } = props;

  return (
    <Flex
      sx={{
        alignItems: "center",
        mr: 1,
        ":last-of-type": {
          mr: 0,
        },
      }}
    >
      <ToolButton
        toggled={false}
        title={`Decrease ${title}`}
        icon="minus"
        variant={"small"}
        onClick={onDecrease}
      />
      <Text
        variant={"body"}
        sx={{ fontSize: "subBody", mx: 1, textAlign: "center" }}
        title={`Reset ${title}`}
        onClick={onReset}
      >
        {value}
      </Text>
      <ToolButton
        toggled={false}
        title={`Increase ${title}`}
        icon="plus"
        variant={"small"}
        onClick={onIncrease}
      />
    </Flex>
  );
}
