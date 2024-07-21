import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, H1, Stack, Form, H4, Spinner, Input, TextArea, TextAreaFrame, Label, Select } from 'tamagui';
import { SelectDemo } from '../components/Select';

export default function Tab() {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off');

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <View style={styles.container}>
      <H1 marginBottom={12}>Krijo nje sesion</H1>
      <Form
        minWidth={300}
        onSubmit={() => setStatus('submitting')}
        borderWidth={1}
        borderRadius="$4"
        borderColor="$borderColor"
        width={'100%'}
        padding="">
        {/* <H4>{status[0].toUpperCase() + status.slice(1)}</H4> */}

        <Stack gap="0">
          <Label theme="blue" size="$4" htmlFor="title">
            Titulli
          </Label>
          <Input placeholder="P.sh ku po hajme sonte?" size="$4" />
        </Stack>

        <Stack>
          <Label theme="blue" size="$4" htmlFor="description">
            Detajet
          </Label>
          <TextArea
            onSubmitEditing={() => {
              console.log('submit');
              // submit form
            }}
            size="$4"
          />
        </Stack>

        <Stack>
          <Label theme="blue" size="$4" htmlFor="description">
            Tipi
          </Label>
          <SelectDemo />
        </Stack>

        <Form.Trigger asChild disabled={status !== 'off'}>
          <Button theme="blue" icon={status === 'submitting' ? () => <Spinner /> : undefined}>
            Submit
          </Button>
        </Form.Trigger>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 24,
  },
});
