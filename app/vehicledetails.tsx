import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function VehicleDetailsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // Sample data - in a real app, this would come from params
  const vehicle = {
    id: params.id || "2",
    name: "Toyota Prius",
    description: "Sedan/Hybrid/2021",
    price: "Rs. 5000.00",
    location: "Kandy",
    rating: 4.9,
    image: require("../assets/images/vehicles/prius.jpeg"),
    type: "With driver",
    owner: {
      name: "Kusal Perera",
      trips: 32,
      avatar: require("../assets/images/profilepic.jpg"),
    },
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Back and Favorite */}
      <View style={[styles.headerTop, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vehicle Details</Text>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-border"}
            size={24}
            color={isFavorite ? "#E74C3C" : "#000"}
          />
        </TouchableOpacity>
      </View>

      {/* Vehicle Image */}
      <View style={styles.imageContainer}>
        <Image source={vehicle.image} style={styles.vehicleImage} />
      </View>

      {/* Vehicle Info */}
      <View style={styles.content}>
        {/* Title and Description */}
        <View style={styles.titleSection}>
          <Text style={styles.vehicleName}>{vehicle.name}</Text>
          <Text style={styles.description}>{vehicle.description}</Text>
        </View>

        {/* Availability Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <View style={styles.calendarContainer}>
            <TouchableOpacity style={styles.calendarNavButton}>
              <MaterialIcons name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>

            <View style={styles.calendarHeader}>
              <Text style={styles.monthYear}>November 2025</Text>
            </View>

            <TouchableOpacity style={styles.calendarNavButton}>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.calendarGrid}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <Text key={day} style={styles.calendarDayName}>
                {day}
              </Text>
            ))}

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.calendarDate,
                  (date === 14 || date === 15) && styles.calendarDateHighlight,
                  (date >= 18 && date <= 20) && styles.calendarDateSelected,
                ]}
              >
                <Text
                  style={[
                    styles.calendarDateText,
                    (date >= 18 && date <= 20) && styles.calendarDateSelectedText,
                  ]}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Pickup Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pickup Location</Text>
          <View style={styles.mapContainer}>
            <Image
              source={require("../assets/images/location.jpeg")}
              style={styles.mapImage}
            />
          </View>
        </View>

        {/* Owner Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Owner</Text>
          <View style={styles.ownerContainer}>
            <View style={styles.ownerInfo}>
              <Image
                source={vehicle.owner.avatar}
                style={styles.ownerAvatar}
              />
              <View style={styles.ownerDetails}>
                <Text style={styles.ownerName}>{vehicle.owner.name}</Text>
                <Text style={styles.ownerTrips}>({vehicle.owner.trips} Trips)</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.viewDetailsButton}
              onPress={() => router.push("../contactdetails")}
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  imageContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  vehicleImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 20,
  },
  titleSection: {
    marginBottom: 20,
  },
  vehicleName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F0E8",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  calendarNavButton: {
    padding: 4,
  },
  monthYear: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  calendarHeader: {
    flex: 1,
    alignItems: "center",
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F5F0E8",
    borderRadius: 12,
    padding: 12,
  },
  calendarDayName: {
    width: "14.28%",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    color: "#999",
    marginBottom: 8,
  },
  calendarDate: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  calendarDateHighlight: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  calendarDateSelected: {
    backgroundColor: "#17A697",
    borderRadius: 8,
  },
  calendarDateText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  calendarDateSelectedText: {
    color: "#fff",
    fontWeight: "600",
  },
  mapContainer: {
    borderRadius: 12,
    overflow: "hidden",
    height: 200,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ownerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F0E8",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  ownerInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  ownerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  ownerDetails: {
    flex: 1,
  },
  ownerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  ownerTrips: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  viewDetailsButton: {
    backgroundColor: "#17A697",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  viewDetailsText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
