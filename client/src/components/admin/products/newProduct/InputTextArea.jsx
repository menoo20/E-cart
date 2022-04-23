import { Textarea } from '@mantine/core';

export default function InputTextArea({ data, toParent }) {
  return (
    <Textarea
      placeholder={data.placeholder}
      label={data.label}
      required
      value={data.value}
      onChange={(event) => toParent(event.currentTarget.value)}
      autosize
      minRows={3}
      mt="md"
      style={{ width: '100%' }}
    />
  );
}
