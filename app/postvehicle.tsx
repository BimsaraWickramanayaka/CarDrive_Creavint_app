import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PostVehicleScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [selectedVehicleType, setSelectedVehicleType] = useState("Car");
  const [withDriver, setWithDriver] = useState(true);
  const [description, setDescription] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [photos, setPhotos] = useState([1, 2]); // Sample photos

  const vehicleTypes = ["Car", "Van", "Tuk-tuk", "Bike"];

  const handleSubmit = () => {
    // Handle vehicle posting
    router.back();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Vehicle Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Details</Text>

          {/* Vehicle Type */}
          <Text style={styles.labelTitle}>Vehicle Type</Text>
          <View style={styles.vehicleTypeContainer}>
            {vehicleTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.vehicleTypeButton,
                  selectedVehicleType === type && styles.vehicleTypeButtonActive,
                ]}
                onPress={() => setSelectedVehicleType(type)}
              >
                <Text
                  style={[
                    styles.vehicleTypeText,
                    selectedVehicleType === type && styles.vehicleTypeTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Vehicle Photos Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Photos</Text>
          <View style={styles.photosContainer}>
            {photos.map((photo) => (
              <Image
                key={photo}
                source={require("../assets/images/vehicles/tuktuk.jpg")}
                style={styles.photoItem}
              />
            ))}
            <TouchableOpacity style={styles.addPhotoButton}>
              <MaterialIcons name="image" size={32} color="#999" />
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe your vehicles features and conditions"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Rental Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rental Details</Text>

          {/* With/Without Driver */}
          <View style={styles.rentalItem}>
            <Text style={styles.rentalLabel}>with / without driver</Text>
            <Switch
              value={withDriver}
              onValueChange={setWithDriver}
              trackColor={{ false: "#E0E0E0", true: "#17A697" }}
              thumbColor={withDriver ? "#fff" : "#fff"}
              style={styles.switch}
            />
          </View>

          {/* Price per Day */}
          <Text style={styles.rentalLabel}>Price per day</Text>
          <TextInput
            style={styles.rentalInput}
            placeholder="Enter price per day"
            placeholderTextColor="#999"
            value={pricePerDay}
            onChangeText={setPricePerDay}
            keyboardType="decimal-pad"
          />

          {/* Pickup Location */}
          <Text style={styles.rentalLabel}>Pickup location</Text>
          <TextInput
            style={styles.rentalInput}
            placeholder="Enter pickup location"
            placeholderTextColor="#999"
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
        </View>

        {/* Contact Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.rentalLabel}>Contact Number</Text>
          <TextInput
            style={styles.rentalInput}
            placeholder="Enter your contact number"
            placeholderTextColor="#999"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Text style={styles.submitButtonText}>Submit Listing</Text>
        </TouchableOpacity>

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
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
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
  labelTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  vehicleTypeContainer: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#E8F5F3",
    padding: 8,
    borderRadius: 20,
  },
  vehicleTypeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  vehicleTypeButtonActive: {
    backgroundColor: "#fff",
  },
  vehicleTypeText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#000",
  },
  vehicleTypeTextActive: {
    color: "#000",
  },
  photosContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  photoItem: {
    width: 100,
    height: 100,
    borderRadius: 12,
    resizeMode: "cover",
  },
  addPhotoButton: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#DDD",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  addPhotoText: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    fontWeight: "500",
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000",
    textAlignVertical: "top",
    minHeight: 100,
  },
  rentalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
  },
  rentalLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  rentalInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000",
    marginBottom: 12,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  submitButton: {
    backgroundColor: "#17A697",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  submitButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
