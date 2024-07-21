import { useMemo, useState } from 'react';

import type { SelectProps } from 'tamagui';

import { Adapt, Label, Select, Sheet, XStack, YStack, Text, PortalProvider } from 'tamagui';

import { LinearGradient } from 'tamagui/linear-gradient';
export function SelectDemo() {
  return (
    <YStack gap="$4">
      <XStack ai="center" gap="$4">
        <Label htmlFor="select-demo-1" f={1} miw={80}>
          Custom
        </Label>

        <SelectDemoItem id="select-demo-1" />
      </XStack>
      <XStack ai="center" gap="$4">
        <Label htmlFor="select-demo-2" f={1} miw={80}>
          Native
        </Label>

        <SelectDemoItem id="select-demo-2" native />
      </XStack>
    </YStack>
  );
}
export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState('apple');
  return (
    <PortalProvider>
      <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
        <Select.Trigger width={220}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>
        <Adapt when="sm" platform="touch">
          <Sheet
            native={!!props.native}
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: 'spring',
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>

            <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
          </Sheet>
        </Adapt>
        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3">
            <YStack zIndex={10}>
              <Text>Up</Text>
            </YStack>

            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', 'transparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>
          <Select.Viewport
            // to do animations:
            // animation="quick"
            // animateOnly={['transform', 'opacity']}
            // enterStyle={{ o: 0, y: -10 }}
            // exitStyle={{ o: 0, y: 10 }}
            minWidth={200}>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>

              {/* for longer lists memoizing these is useful */}

              {useMemo(
                () =>
                  items.map((item, i) => {
                    return (
                      <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                        <Select.ItemText>{item.name}</Select.ItemText>
                        <Select.ItemIndicator marginLeft="auto">
                          <Text>Check</Text>
                        </Select.ItemIndicator>
                      </Select.Item>
                    );
                  }),

                [items],
              )}
            </Select.Group>

            {/* Native gets an extra icon */}

            {props.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none">
                <Text>Down</Text>
              </YStack>
            )}
          </Select.Viewport>
          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3">
            <YStack zIndex={10}>
              <Text>Down</Text>
            </YStack>

            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['transparent', '$background']}
              borderRadius="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </PortalProvider>
  );
}
const items = [
  { name: 'Apple' },

  { name: 'Pear' },

  { name: 'Blackberry' },

  { name: 'Peach' },

  { name: 'Apricot' },

  { name: 'Melon' },

  { name: 'Honeydew' },

  { name: 'Starfruit' },

  { name: 'Blueberry' },

  { name: 'Raspberry' },

  { name: 'Strawberry' },

  { name: 'Mango' },

  { name: 'Pineapple' },

  { name: 'Lime' },

  { name: 'Lemon' },

  { name: 'Coconut' },

  { name: 'Guava' },

  { name: 'Papaya' },

  { name: 'Orange' },

  { name: 'Grape' },

  { name: 'Jackfruit' },

  { name: 'Durian' },
];
