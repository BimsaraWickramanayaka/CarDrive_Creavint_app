import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function MyListScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const listings = [
    {
      id: 1,
      name: "Toyota Prius",
      description: "Sedan/Hybrid/2021",
      status: "Active",
      image: require("../../assets/images/vehicles/prius.jpeg"),
    },
    {
      id: 2,
      name: "Toyota Prius",
      description: "Sedan/Hybrid/2021",
      status: "Active",
      image: require("../../assets/images/vehicles/prius.jpeg"),
    },
    {
      id: 3,
      name: "Toyota Prius",
      description: "Sedan/Hybrid/2021",
      status: "Active",
      image: require("../../assets/images/vehicles/prius.jpeg"),
    },
  ];

  const renderListingCard = ({ item }: any) => (
    <View style={styles.listingCard}>
      <View style={styles.cardHeader}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Image source={item.image} style={styles.listingImage} />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.listingName}>{item.name}</Text>
        <Text style={styles.listingDescription}>{item.description}</Text>

        <View style={styles.divider} />

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <MaterialIcons name="edit" size={18} color="#666" />
            <Text style={styles.actionButtonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <MaterialIcons name="visibility" size={18} color="#666" />
            <Text style={styles.actionButtonText}>View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <MaterialIcons name="delete" size={18} color="#E74C3C" />
            <Text style={[styles.actionButtonText, { color: "#E74C3C" }]}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Listing</Text>
        </View>

        {/* Listings */}
        <View style={styles.listingsContainer}>
          <FlatList
            data={listings}
            renderItem={renderListingCard}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity 
        style={styles.addButton} 
        activeOpacity={0.7}
        onPress={() => router.push("../postvehicle")}
      >
        <MaterialIcons name="add" size={32} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  listingsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  listingCard: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 12,
  },
  statusBadge: {
    backgroundColor: "#E8F5F3",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: "#17A697",
    fontWeight: "600",
  },
  listingImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  listingName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  listingDescription: {
    fontSize: 13,
    color: "#666",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 6,
  },
  actionButtonText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  addButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#17A697",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});
