import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Tuk-tuk");

  const categories = [
    { id: 1, name: "Tuk-tuk" },
    { id: 2, name: "Cars" },
    { id: 3, name: "Vans" },
    { id: 4, name: "Bikes" },
  ];

  const vehicles = [
    {
      id: 1,
      name: "Tuk-Tuk Auto",
      price: "Rs. 500.00",
      location: "Galle",
      rating: 4.9,
      image: require("../../assets/images/vehicles/tuktuk.jpg"),
      type: "With driver",
    },
    {
      id: 2,
      name: "Toyota Prius",
      price: "Rs. 5000.00",
      location: "Kandy",
      rating: 4.9,
      image: require("../../assets/images/vehicles/prius.jpeg"),
      type: "With driver",
    },
  ];

  const renderVehicleCard = ({ item }: any) => (
    <TouchableOpacity
      style={styles.vehicleCard}
      onPress={() => router.push(`../vehicledetails?id=${item.id}`)}
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.vehicleImage} />
      <View style={styles.vehicleInfo}>
        <View style={styles.vehicleHeader}>
          <Text style={styles.vehicleName}>{item.name}</Text>
          <View style={styles.driverBadge}>
            <Text style={styles.driverText}>{item.type}</Text>
          </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.vehicleFooter}>
          <View style={styles.locationRating}>
            <MaterialIcons name="location-on" size={16} color="#17A697" />
            <Text style={styles.location}>{item.location}</Text>
            <MaterialIcons name="star" size={16} color="#FFA500" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]} showsVerticalScrollIndicator={false}>
      {/* Header with Profile */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome to Sri Lanka</Text>
          <Text style={styles.subGreeting}>Find your perfect ride</Text>
        </View>
        <Image
          source={require("../../assets/images/profilepic.jpg")}
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar and Filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Vehicle..."
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => router.push("../filter")}
        >
          <MaterialIcons name="tune" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Category Buttons */}
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.name && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.name)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.name && styles.categoryTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Vehicle Cards */}
      <View style={styles.vehiclesContainer}>
        <FlatList
          data={vehicles}
          renderItem={renderVehicleCard}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subGreeting: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: "center",
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5F3",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#000",
    fontSize: 14,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E8F5F3",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E8F5F3",
  },
  categoryButtonActive: {
    backgroundColor: "#17A697",
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#fff",
  },
  vehiclesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  vehicleCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#F9F9F9",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  vehicleImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  vehicleInfo: {
    padding: 12,
  },
  vehicleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  driverBadge: {
    backgroundColor: "#E8F5F3",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  driverText: {
    fontSize: 12,
    color: "#17A697",
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  vehicleFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  location: {
    fontSize: 12,
    color: "#17A697",
    fontWeight: "500",
    marginRight: 8,
  },
  rating: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
  },
});
