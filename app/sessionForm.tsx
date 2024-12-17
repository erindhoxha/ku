import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { H1, Stack, Form, H4, Spinner, Input, TextArea, TextAreaFrame, Label, Select } from 'tamagui';
import Button from '../components/Button';

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
        <Stack gap="$0">
          <Label theme="blue" color="$white" size="$4" htmlFor="title">
            Titulli
          </Label>
          <Input
            theme="blue"
            placeholder="P.sh ku po hajme sonte?"
            placeholderTextColor="rgb(70, 98, 138)"
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'rgb(47, 61, 80)',
              padding: 0,
              height: 42,
              color: 'white',
              fontSize: 16,
              marginLeft: 0,
              paddingLeft: 12,
            }}
          />
        </Stack>

        <Stack>
          <Label theme="blue" size="$4" htmlFor="description">
            Detajet
          </Label>
          <TextArea
            placeholderTextColor="rgb(70, 98, 138)"
            onSubmitEditing={() => {
              console.log('submit');
              // submit form
            }}
            placeholder="P.sh hajde po knaqemi sonte ne..."
            rows={12}
            theme="blue"
            style={{
              borderRadius: 4,
              borderWidth: 1,
              borderColor: 'rgb(47, 61, 80)',
              color: 'white',
              fontSize: 16,
              paddingLeft: 12,
              minHeight: 100,
            }}
          />
        </Stack>
        <Form.Trigger asChild disabled={status !== 'off'}>
          <Button theme="blue" size="$4" icon={status === 'submitting' ? () => <Spinner /> : undefined}>
            Krijo
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
