import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { AuthContext } from "../context/AuthContext";
import { Icon } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { formatTime } from "../utils/formatTime";

const { View, Text } = require("react-native");
const { TouchableOpacity } = require("react-native-gesture-handler");

const CardRdv = ({ rdv }) => {
  const [center, setCenter] = useState(null);
  const [creneaux, setCreneaux] = useState(null);
  const { userToken, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const centerRes = await axios.get(`${BASE_URL}/centres/rdv/${rdv.id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        const creneauxRes = await axios.get(
          `${BASE_URL}/creneaux/rdv/${rdv.id}`,
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
  }, [rdv]);

  return (
    
    <View className="flex flex-col bg-slate-100 rounded-lg space-y-3 shadow-md shadow-black">
      <View
        className="px-4 py-4 rounded-b-none rounded-t-lg flex flex-row justify-between"
        style={{ backgroundColor: "#0e7aca" }}
      >
        <View className="flex flex-row space-x-2 items-center">
          <Entypo name="calendar" size={15} color="#FFF" />
          <Text className="text-white font-medium text-sm">{rdv.date}</Text>
        </View>
        <View className="flex flex-row space-x-1 items-center">
          <Ionicons name="time-outline" size={15} color="#fff" />
          <Text className="text-white font-medium">
            {creneaux && formatTime(creneaux.heureDebut)} - {creneaux && formatTime(creneaux.heureFin)}
          </Text>
        </View>
      </View>
      <View className="flex flex-col space-y-6 py-2 px-4">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row space-x-2 items-center">
            <FontAwesome name="hospital-o" size={15} color="black" />
            <Text className="font-semibold">{center?.nom}</Text>
          </View>
          <View className="flex flex-row space-x-2 items-center">
            <FontAwesome name="phone" size={15} color="black" />
            <Text className="font-semibold">{center?.phoneNumber}</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row space-x-2 items-center">
            <Ionicons name="location" size={15} color="black" />
            <Text className="font-semibold">{center?.adresse}</Text>
          </View>
        </View>
      </View>
      <View
        className={`flex flex-row justify-between space-x-1 px-4 py-2 rounded-t-none rounded-b-lg ${
          rdv.statut ? "bg-emerald-600" : "bg-yellow-200"
        }`}
      >
        <View className="flex flex-row space-x-1 items-center">
          <Entypo
            name="check"
            size={15}
            color={`${rdv.statut ? "#fff" : "black"}`}
          />
          <Text
            className={`font-medium ${
              rdv.statut ? " text-white" : " text-zinc-800"
            }`}
          >
            statut
          </Text>
        </View>
        <View className="flex flex-row space-x-1 items-center">
          <MaterialCommunityIcons
            name="progress-check"
            size={15}
            color={`${rdv.statut ? "#fff" : "black"}`}
          />
          <Text
            className={`font-medium ${
              rdv.statut ? " text-white" : " text-zinc-800"
            }`}
          >
            {rdv.statut === true ? (
              <Text className="text-sm py-1 px-4 border text-white rounded-full">
                validés
              </Text>
            ) : (
              <Text className="text-sm py-1 px-4 text-slate-700 rounded-full">
                en attente
              </Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardRdv;
