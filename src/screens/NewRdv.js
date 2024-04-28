import { useContext } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import ListeRdv from "../components/CardRdv";
import { Icon } from "@rneui/base";
import CardCenter from "../components/CardCenter";

const AddRdv = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const centers = [
    {
      name: "Center 1",
      address: "Ait Baha",
      phonenumber: "061929291",
      timeSlots: [
        { id: 1, time: "09:00 - 10:00" },
        { id: 2, time: "10:00 - 11:00" },
        { id: 3, time: "11:00 - 12:00" },
      ],
    },
    {
      name: "Center 2",
      address: "Ait Baha Chariaa boujdoyr",
      phonenumber: "061929291",
      timeSlots: [
        { id: 1, time: "09:00 - 10:00" },
        { id: 2, time: "10:00 - 11:00" },
        { id: 3, time: "11:00 - 12:00" },
      ],
    },
    {
      name: "Center 3",
      address: "Ait Baha",
      phonenumber: "061929291",
      timeSlots: [
        { id: 1, time: "09:00 - 10:00" },
        { id: 2, time: "10:00 - 11:00" },
        { id: 3, time: "11:00 - 12:00" },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/bgCenter2.jpeg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View className="py-10 px-5">
          <View className="pb-5">
            <Text className="text-xl font-bold">Choisir un centre</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {centers.map((center, index) => (
              <CardCenter key={index} center={center} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = LoginStyles;

export default AddRdv;
