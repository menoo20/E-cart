import { createStyles, Select } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function InputDropdown({ info, toParent }) {
  console.log("info", info)
  const { classes } = useStyles();
  return (
    <div style={{ width: '100%' }}>
      <Select
        value={info.value}
        onChange={toParent}
        style={{ marginTop: 20, zIndex: 2 }}
        data={info.data}
        placeholder={info.placeholder}
        label={info.label}
        classNames={classes}
      />
    </div>
  )
}
