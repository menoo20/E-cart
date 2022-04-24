import { useRef } from 'react';
import { createStyles, NumberInput, ActionIcon } from '@mantine/core';
import { Plus, Minus } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `6px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6]
    },
  },

  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
    '&:disabled': {
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.5,
      backgroundColor: 'transparent'
    }
  },
  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm}px !important`,
    paddingLeft: `${theme.spacing.sm}px !important`,
    height: 28,
    flex: 1
  }

}));

export default function InputStoke({ min = 1, toParent, value }) {
  const { classes } = useStyles();
  const handlers = useRef();

  return (
    <div style={{ width: '100%' }} className={classes.wrapper}>
      Add Stock
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.decrement()}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(e) => e.preventDefault()}
      >

        <Minus size={16} />
      </ActionIcon>
      <NumberInput
        variant='unstyled'
        min={min}
        handlersRef={handlers}
        value={value}
        onChange={toParent}
        classNames={{ input: classes.input }}
      />
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.increment()}
        className={classes.control}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Plus size={16} />
      </ActionIcon>
    </div>
  )
}
