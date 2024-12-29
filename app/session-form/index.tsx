import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { H1, Stack, Form, H4, Spinner, Input, TextArea, TextAreaFrame, Label, Select } from 'tamagui';
import Button from '../../components/Button';

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
      <H1 color="$white" marginBottom={12}>
        Krijo nje votim
      </H1>
      <Form
        minWidth={300}
        onSubmit={() => setStatus('submitting')}
        borderWidth={1}
        borderRadius="$4"
        borderColor="$borderColor"
        width={'100%'}
        gap="$1"
        padding="">
        {/* <H4 color="$white">{status[0].toUpperCase() + status.slice(1)}</H4> */}
        <Stack gap="$1">
          <Label theme="input" color="$white" size="$3" htmlFor="title">
            Titulli
          </Label>
          <Input
            theme="input"
            placeholder="P.sh ku po hajme sonte?"
            placeholderTextColor="rgb(90, 90, 90)"
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'rgb(181, 181, 181)',
              padding: 0,
              height: 42,
              color: 'white',
              fontSize: 16,
              marginLeft: 0,
              paddingLeft: 12,
            }}
          />
        </Stack>

        <Stack gap="$1">
          <Label theme="input" color="$white" size="$3" htmlFor="description">
            Detajet
          </Label>
          <TextArea
            placeholderTextColor="rgb(90, 90, 90)"
            onSubmitEditing={() => {
              console.log('submit');
              // submit form
            }}
            placeholder="P.sh hajde po knaqemi sonte ne..."
            rows={12}
            theme="input"
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'rgb(181, 181, 181)',
              color: 'white',
              fontSize: 16,
              paddingLeft: 12,
              minHeight: 100,
            }}
          />
        </Stack>
        <Form.Trigger asChild disabled={status !== 'off'}>
          <Button theme="green" size="$4" icon={status === 'submitting' ? () => <Spinner /> : undefined}>
            Krijo votimin
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
    backgroundColor: 'rgb(5, 5, 5)',
  },
});
