import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router'
import Icon from '@expo/vector-icons/Feather'

export function Memory() {
  return (
    <View className="space-y-4">
      <View className="flex-row items-center gap-2">
        <View className="h-px w-5 bg-gray-50" />
        <Text className="font-body text-xs text-gray-50">teste</Text>
      </View>

      <View className="space-y-4 px-8">
        <Image
          className="aspect-video w-full rounded-lg"
          source={{
            uri: 'http://192.168.0.108:3333/uploads/cd6d3e20-ae04-4e98-a603-0e9a4548159c.gif',
          }}
          alt=""
        />
      </View>

      <View className="px-8">
        <Text className="font-body text-base leading-relaxed text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          blanditiis voluptas accusamus vitae reiciendis veritatis eaque
          praesentium, amet doloribus repellendus. Officiis aperiam nemo
          quisquam eveniet consequatur mollitia eius voluptatem deleniti?
        </Text>

        <Link className="mt-2" href="/memories/id" asChild>
          <TouchableOpacity className="flex-row items-center gap-2">
            <Text className="font-body text-sm text-gray-200">Ler mais</Text>
            <Icon name="arrow-right" size={16} color="#9e9ea0" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
