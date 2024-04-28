import { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import { Calendar } from "react-native-calendars";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import { BASE_URL } from "../config";

const AddRdv = ({ navigation }) => {
  const { user, logout, userToken } = useContext(AuthContext);
  const [selected, setSelected] = useState("");
  const [center, setCenter] = useState(null);
  const [creneaux, setCreneaux] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const centerRes = await axios.get(`${BASE_URL}/centres`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        const creneauxRes = await axios.get(
          `${BASE_URL}/creneaux`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        console.log("centerRes:", centerRes.data);
        console.log("creneaux:", creneauxRes.data);
        setCreneaux(creneauxRes.data);
        setCenter(centerRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={require("../../assets/images/bloodDonation.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 200,
            }}
            className="bg-center bg-cover items-center"
          >
            <Text className="text-center text-2xl font-bold bg-slate-100 opacity-95 text-stone-900 px-4 py-2 mx-2">
              Prenez rendez-vous pour sauver des vies ! 🩸
            </Text>
          </ImageBackground>
        </View>
        <View
          className="flex flex-col space-y-3x"
          style={{ backgroundColor: "#F4F4FB" }}
        >
          <View className="bg-blue-100 py-2 px-6 shadow">
            <Text className="text-xl font-semibold text-gray-700">Center</Text>
          </View>
          <View className="mx-3 my-6">
            <SelectList
              setSelected={(val) => setCenter(val)}
              data={center}
              save="value"
              placeholder="Select Center"
            />
          </View>
          <View className="bg-blue-100 py-2 px-6">
            <Text className="text-xl font-semibold text-gray-700">La Date</Text>
          </View>

          <View className="py-6 px-6">
            <Calendar
              onDayPress={(day) => {
                setSelected(day.dateString);
                console.log(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                },
              }}
            />
          </View>
          <View className="bg-blue-100 py-2 px-6">
            <Text className="text-xl font-semibold text-gray-700">
              Les créneaux disponibles
            </Text>
          </View>
          <View className="mx-3 mt-6">
            <SelectList
              setSelected={(val) => setCenter(val)}
              data={creneaux}
              save="value"
              placeholder="Select créneaux"
            />
          </View>
          <View className="flex flex-row justify-center my-6 mx-3">
            <TouchableOpacity
              className=" py-2 px-2 rounded-lg w-full"
              onPress={() => navigation.navigate("Home")}
              style={{ backgroundColor: "#39AFEA" }}
            >
              <Text className="text-white font-bold text-center text-xl">
                Prendre un rendez-vous
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = LoginStyles;

export default AddRdv;
