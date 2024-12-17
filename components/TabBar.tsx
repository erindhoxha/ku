import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const focusedColor = 'rgb(244, 244, 244)';
const unfocusedColor = 'rgb(103, 103, 103)';
const fontSize = 14;

export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
            <FontAwesome size={20} name="home" color={isFocused ? focusedColor : unfocusedColor} />
            <Text style={[styles.text, { color: isFocused ? focusedColor : unfocusedColor }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'rgb(12, 12, 12)',
    borderWidth: 1,
    borderColor: 'rgb(27, 27, 27)',
    marginHorizontal: 20,
    borderRadius: 999,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});
