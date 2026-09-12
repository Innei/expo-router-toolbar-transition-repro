import { Stack } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Detail() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ title: 'Conversation' }} />
      <Text style={{ marginTop: 150, marginHorizontal: 24 }}>This screen has no Stack.Toolbar.</Text>
      <View style={{ position: 'absolute', left: 20, right: 20, bottom: insets.bottom + 8,
        height: 52, borderRadius: 26, backgroundColor: '#eeeeff', justifyContent: 'center', paddingHorizontal: 20 }}>
        <TextInput placeholder="Conversation input" />
      </View>
    </View>
  );
}
