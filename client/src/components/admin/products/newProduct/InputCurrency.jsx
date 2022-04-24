import { NativeSelect, TextInput } from '@mantine/core';

const data = [
  { value: 'egp', label: '🇪🇬 EGP' },
  { value: 'eur', label: '🇪🇺 EUR' },
  { value: 'usd', label: '🇺🇸 USD' },
  { value: 'cad', label: '🇨🇦 CAD' },
  { value: 'gbp', label: '🇬🇧 GBP' },
  { value: 'aud', label: '🇦🇺 AUD' },
];

export default function InputCurrency({ dataInput, toParent, toParentTwo, currency }) {
  const select = (
    <NativeSelect
      data={data}
      value={currency}
      onChange={(event) => toParentTwo(event.currentTarget.value)}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  );

  return (
    <div style={{ width: '100%' }}>
      <TextInput
        type="number"
        placeholder="1000"
        label="Product Price"
        value={dataInput.value}
        onChange={(event) => toParent(event.currentTarget.value)}
        rightSection={select}
        rightSectionWidth={92}
      />
    </div>
  );
}
