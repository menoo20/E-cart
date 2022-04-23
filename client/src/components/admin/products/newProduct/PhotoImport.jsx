import { useRef } from 'react';
import { Text, Group, Button, createStyles, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { CloudUpload } from 'tabler-icons-react';
import Image from './Image';


const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 20,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'relative',
    width: 250,
    marginBottom: '10px',
    left: 'calc(50% - 125px)',
  },
}));

function getActiveColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
      ? theme.colors.red[6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black;
}

export default function PhotoImport({ toParent, data }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const openRef = useRef();

  function imgRender(img) {
    if (img) {
      return <Image image={img} dim={{ height: '200px', width: '90%' }} col='col-12' />
    }
  }
  return (
    <div className={classes.wrapper}>
      <Dropzone
        multiple={false}
        openRef={openRef}
        onDrop={(file) => toParent(file)}
        className={classes.dropzone}
        radius="md"
        accept={IMAGE_MIME_TYPE}
        maxSize={2 * 1024 ** 2}
      >
        {(status) => (
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <CloudUpload size={50} color={getActiveColor(status, theme)} />
            </Group>
            <Text
              align="center"
              weight={700}
              size="lg"
              mt="xl"
              sx={{ color: getActiveColor(status, theme) }}
            >
              {status.accepted
                ? 'Drop Main Photo here'
                : status.rejected
                  ? 'JPG file less than 2mb'
                  : 'Upload Main Photo'}
            </Text>
            <Text align="center" size="sm" mt="xs" color="dimmed">
              Drag&apos;n&apos;drop files here to upload. We can accept only <i>.jpg</i> files that
              are less than 2mb in size.
            </Text>
          </div>
        )}
      </Dropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current()}>
        Select files
      </Button>
      <div className='row justify-content-evenly overflow-auto'>
        {imgRender(data)}
      </div>
    </div>
  );
}
