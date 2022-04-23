import { Card, Text, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef('image');

  return {
    card: {
      position: 'relative',
      height: 250,
      width: 250,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      [`&:hover .${image}`]: {
        transform: 'scale(1.03)',
      },
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      transition: 'transform 500ms ease',
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .65) 90%)',
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },
  };
});


export default function Image({ image, title, author, dim, cols }) {
  const { classes } = useStyles();

  return (
    <Card
      style={dim}
      p="lg"
      shadow="lg"
      className={[classes.card, cols]}
      radius="md"
      component="a"
      href={image}
      target="_blank"
    >
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Group position="apart" spacing="xs">
            <Text size="lg" className={classes.title} weight={500}>
              {title}
            </Text>
            <Text size="sm" className={classes.author}>
              {author}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
