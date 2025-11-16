import { useGetVenuesQuery } from "@/features/api/venues";
import { Text, View } from "react-native";

export default function Index() {
  const { data, error, isLoading } = useGetVenuesQuery();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching venues</Text>}
      {data && (
        <View>
          <Text>Venues:</Text>
          {data.map((venue: any) => (
            <Text key={venue.id}>{venue.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
}
