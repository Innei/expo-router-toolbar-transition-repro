import { Stack, router } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Stack.SearchBar placement="integrated" placeholder="Search sessions" hideWhenScrolling={false} />
      <Stack.Toolbar>
        <Stack.Toolbar.SearchBarSlot />
        <Stack.Toolbar.Spacer width={6} />
        <Stack.Toolbar.Button icon="plus" separateBackground onPress={() => router.push('/detail')} />
      </Stack.Toolbar>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1, backgroundColor: '#f2f2f7' }}>
        <Pressable accessibilityRole="button" testID="open-detail" onPress={() => router.push('/detail')}
          style={{ margin: 20, padding: 24, backgroundColor: 'white', borderRadius: 12 }}>
          <Text>Open conversation</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
