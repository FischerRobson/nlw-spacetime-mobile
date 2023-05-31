import { View, Text } from 'react-native'
import NlwSpacetimeLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NewMemory() {
  const {} = a
  return (
    <View className="flex-1 px-8">
      <View className="flex-row items-center justify-between">
        <NlwSpacetimeLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
