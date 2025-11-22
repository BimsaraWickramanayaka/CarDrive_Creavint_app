import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ContactDetailsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const ownerData = {
    name: "Kusal Perera",
    avatar: require("../assets/images/profilepic.jpg"),
    phone: "+94 123456789",
  };

  const vehicleData = {
    name: "Toyota Prius",
    description: "Sedan/Hybrid/2021",
    image: require("../assets/images/vehicles/prius.jpeg"),
  };

  const pickupLocation = "Bandaranayaka International Airport";

  const instructions = [
    "Bring your passport",
    "Bring your passport",
    "Bring your passport",
    "Bring your passport",
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Back Button */}
      <View style={[styles.headerTop, { paddingTop: insets.top }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Details</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Owner Card */}
      <View style={styles.ownerCard}>
        <Image source={ownerData.avatar} style={styles.ownerAvatar} />
        <Text style={styles.ownerName}>{ownerData.name}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Phone Section */}
        <View style={styles.phoneSection}>
          <View style={styles.phoneRow}>
            <MaterialIcons name="phone" size={20} color="#17A697" />
            <Text style={styles.phoneText}>{ownerData.phone}</Text>
          </View>
          <TouchableOpacity style={styles.callNowButton}>
            <Text style={styles.callNowText}>Call now</Text>
          </TouchableOpacity>
        </View>

        {/* WhatsApp Button */}
        <TouchableOpacity style={styles.whatsappButton}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.whatsappText}>Chat on Whatsapp</Text>
        </TouchableOpacity>

        {/* Vehicle Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle</Text>
          <View style={styles.vehicleCard}>
            <Image
              source={vehicleData.image}
              style={styles.vehicleImage}
            />
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleName}>{vehicleData.name}</Text>
              <Text style={styles.vehicleDescription}>
                {vehicleData.description}
              </Text>
            </View>
          </View>
        </View>

        {/* Pickup Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pickup Location</Text>
          <View style={styles.locationBox}>
            <MaterialIcons name="location-on" size={20} color="#17A697" />
            <Text style={styles.locationText}>{pickupLocation}</Text>
          </View>
        </View>

        {/* Important Instructions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Instructions</Text>
          <View style={styles.instructionsBox}>
            {instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <MaterialIcons
                  name="check-circle"
                  size={20}
                  color="#17A697"
                />
                <Text style={styles.instructionText}>{instruction}</Text>
              </View>
            ))}
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
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  ownerCard: {
    backgroundColor: "#E8F5F3",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  ownerAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  ownerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  phoneSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  phoneText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginLeft: 12,
  },
  callNowButton: {
    backgroundColor: "#E8F5F3",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  callNowText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#17A697",
  },
  whatsappButton: {
    backgroundColor: "#17A697",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 24,
  },
  whatsappText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  vehicleCard: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    overflow: "hidden",
  },
  vehicleImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  vehicleInfo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  vehicleDescription: {
    fontSize: 13,
    color: "#666",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginLeft: 12,
    flex: 1,
  },
  instructionsBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  instructionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  instructionText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 12,
    flex: 1,
  },
});
