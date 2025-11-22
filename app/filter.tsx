import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FilterScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [selectedVehicleType, setSelectedVehicleType] = useState("Car");
  const [includeDriver, setIncludeDriver] = useState(true);
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [locationSearch, setLocationSearch] = useState("");

  const vehicleTypes = ["Car", "Van", "Tuk-tuk", "Bike"];

  const handleSubmit = () => {
    // Navigate back to home with filter applied
    router.back();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Vehicle Type Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehicle Type</Text>
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

      {/* Driver Options Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Driver Options</Text>
        <View style={styles.driverOptionContainer}>
          <Text style={styles.driverOptionText}>Include driver</Text>
          <Switch
            value={includeDriver}
            onValueChange={setIncludeDriver}
            trackColor={{ false: "#E0E0E0", true: "#17A697" }}
            thumbColor={includeDriver ? "#fff" : "#fff"}
            style={styles.switch}
          />
        </View>
      </View>

      {/* Location Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.locationSearchContainer}>
          <MaterialIcons name="search" size={20} color="#17A697" />
          <TextInput
            style={styles.locationInput}
            placeholder="Search Vehicle..."
            placeholderTextColor="#17A697"
            value={locationSearch}
            onChangeText={setLocationSearch}
          />
        </View>
      </View>

      {/* Rental Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rental Details</Text>
        <View style={styles.dateInputContainer}>
          <MaterialIcons name="calendar-today" size={20} color="#E8F5F3" />
          <TextInput
            style={styles.dateInput}
            placeholder="Start date"
            placeholderTextColor="#17A697"
          />
        </View>
        <View style={styles.dateInputContainer}>
          <MaterialIcons name="calendar-today" size={20} color="#E8F5F3" />
          <TextInput
            style={styles.dateInput}
            placeholder="End date"
            placeholderTextColor="#17A697"
          />
        </View>
      </View>

      {/* Price Range Section */}
      <View style={styles.section}>
        <View style={styles.priceHeader}>
          <Text style={styles.sectionTitle}>Price range</Text>
          <Text style={styles.priceValue}>
            Rs.{Math.round(priceRange[0])} - Rs.{Math.round(priceRange[1])}
          </Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10000}
          step={100}
          value={priceRange[1]}
          onValueChange={(value) => setPriceRange([priceRange[0], value])}
          minimumTrackTintColor="#17A697"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#17A697"
        />
      </View>

      {/* Submit Button */}
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Text style={styles.submitButtonText}>Submit Listing</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  section: {
    marginBottom: 24,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
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
  driverOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  driverOptionText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  locationSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5F3",
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  locationInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    color: "#000",
    fontSize: 14,
  },
  dateInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5F3",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  dateInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    color: "#000",
    fontSize: 14,
  },
  priceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  priceValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  submitButtonContainer: {
    marginBottom: 24,
    marginTop: 12,
  },
  submitButton: {
    backgroundColor: "#17A697",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
