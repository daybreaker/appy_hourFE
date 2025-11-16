import { useGetVenuesQuery } from "@/features/api/venues";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import { Button } from "@/components/Button";

export default function Index() {
  // No auth slice in the project yet — simulate local auth state for UI
  // Assumption: real auth will be wired into Redux or context later.
  const [user, setUser] = useState<{ name: string } | null>(null);

  const { data, error, isLoading } = useGetVenuesQuery();

  function onLoginPress() {
    // placeholder: toggle a fake user
    setUser({ name: "Demo User" });
  }

  function onProfilePress() {
    // placeholder: sign out on press
    setUser(null);
  }

  const renderItem = ({ item }: { item: any }) => (
    <View className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-3 shadow">
      <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</Text>
      {item.address && (
        <Text className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.address}</Text>
      )}
      {item.happyHour && (
        <Text className="text-sm text-indigo-600 dark:text-indigo-400 mt-2">{item.happyHour}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 px-4 pt-4 bg-gray-50 dark:bg-black">
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">Happy Hours</Text>

        {user ? (
          <Button onPress={onProfilePress} className="p-2 flex-row">
            <Text>{user.name}</Text>
            <Ionicons name="person-circle" size={36} color={"#111827"} />
          </Button>
        ) : (
          <Button onPress={onLoginPress} label="Login" />
        )}
      </View>

      {/* Title */}
      <Text className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Today's Happy Hours</Text>

      {/* Content */}
      {isLoading && <ActivityIndicator size="large" color="#4F46E5" />}

      {error && (
        <Text className="text-red-600 mt-4">There was an error loading venues.</Text>
      )}

      {!isLoading && data && data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      ) : null}

      {!isLoading && data && data.length === 0 && (
        <Text className="text-gray-600 mt-4">No happy hours found for today.</Text>
      )}
    </SafeAreaView>
  );
}
