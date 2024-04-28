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
import { FontAwesome } from "@expo/vector-icons";
import { formatTime } from "../utils/formatTime";
import { Icon } from "@rneui/base";
import { showToast } from "../components/AlertToast";
import { useDispatch, useSelector } from "react-redux";
import { getCentre } from "../redux/features/centres/centreSlice";
import { filterWeekend } from "../utils/filterWeekend";
import { addNewRdv } from "../utils/addNewRdv";
import { getCentres } from "../utils/getCentres";
import { getAvailableSlots } from "../utils/getAvailableSlots";
import { addRdv, getRdv } from "../redux/features/rdvs/rdvSlice";

const AddRdv = ({ navigation }) => {
  const { user, logout, userToken } = useContext(AuthContext);

  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedCreneaux, setSelectedCreneaux] = useState("");
  const [joursTravail, setJoursTravail] = useState([]);
  const [jourName, setJourName] = useState("");

  const [dataCenter, setDataCenter] = useState([]);
  const [dataCreneaux, setDataCreneaux] = useState([]);
  const centres = useSelector((state) => state.centres.data);

  useEffect(() => {
    const fetchData = async () => {
      showToast(
        "info",
        "Bienvenue 👋",
        "Prenez rendez-vous pour sauver des vies ! 🩸"
      );
      try {
        const centerRes = await getCentres(userToken);

        console.log("centerRes:", centerRes);

        dispatch(getCentre(centerRes));

        if (selectedCenter) {
          const center = centerRes.find((item) => item.id === selectedCenter);
          console.log("center:", center);
          console.log("Jour", center.joursTravail);
          setJoursTravail(center.joursTravail);
        }
      } catch (error) {
        showToast(
          "error",
          "Erreur",
          "Erreur lors de la récupération des centres"
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDataCenter(
      centres.map((item) => ({
        key: item.id,
        value: item.nom + " - " + item.adresse,
      }))
    );
  }, [centres]);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedCenter) return;
      console.log("selectedCenter:", selectedCenter);

      const jourName = new Date(selectedDate).toLocaleDateString("fr-FR", {
        weekday: "long",
      });
      console.log("jourName:", jourName);
      setJourName(jourName);
      try {
        const creneauxRes = await getAvailableSlots(
          userToken,
          selectedCenter,
          jourName
        );

        console.log("creneaux:", creneauxRes);
        setDataCreneaux(
          creneauxRes.map((item) => ({
            key: item.id,
            value:
              formatTime(item.heureDebut) + " - " + formatTime(item.heureFin),
          }))
        );
      } catch (error) {
        showToast(
          "error",
          "Erreur",
          "Erreur lors de la récupération des créneaux"
        );
      }
    };
    fetchData();
  }, [selectedDate, selectedCenter]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon
            name="home"
            size={35}
            color={"#FFF"}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  // handleRdv function
  const handleRdv = async () => {
    try {
      const rdvData = {
        date: selectedDate,
        userId: user.userId,
        centerId: selectedCenter,
        jour: jourName,
        creneauId: selectedCreneaux,
      };

      const response = await addNewRdv(rdvData, userToken);
      console.log("response zakaria:", response);
      if (response.status) {
        dispatch(addRdv(response.data));
        showToast("success", "Rendez-vous créé", response.message);
        navigation.navigate("Home");
      } else {
        showToast("error", "Erreur 1", response.message);
      }
    } catch (error) {
      showToast(
        "error",
        "Erreur 2",
        "Erreur lors de la création du rendez-vous"
      );
    }
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <ImageBackground
            source={require("../../assets/images/bloodDon4.jpeg")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 250,
            }}
            className=""
          >
            <Text className="text-center opacity-80 text-2xl font-bold bg-slate-100 text-stone-900 px-4 py-2 mx-2 rounded-full">
              Prenez rendez-vous pour sauver des vies ! 🩸
            </Text>
          </ImageBackground>
        </View>
        <View
          className="flex flex-col space-y-3x"
          style={{ backgroundColor: "#F4F4FB" }}
        >
          <View className="bg-blue-100 py-2 px-6 shadow-sm shadow-black">
            <Text className="text-xl font-semibold text-gray-700">Center</Text>
          </View>
          <View className="mx-3 my-6">
            <SelectList
              setSelected={setSelectedCenter}
              data={dataCenter}
              arrowicon={
                <FontAwesome name="chevron-down" size={12} color={"black"} />
              }
              searchicon={
                <FontAwesome
                  name="search"
                  size={12}
                  color={"black"}
                  style={{ paddingEnd: 10 }}
                />
              }
              search={true}
              placeholder="Select Center"
              dropdownItemStyles={{
                backgroundColor: "#fff",
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 10,
                borderRadius: 5,
              }}
            />
          </View>
          <View className="bg-blue-100 py-2 px-6 shadow-sm shadow-black">
            <Text className="text-xl font-semibold text-gray-700">La Date</Text>
          </View>

          <View className="py-6 px-6">
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
              }}
              markedDates={{
                ...filterWeekend(),
                [selectedDate]: {
                  selected: true,
                  selectedColor: "#39AFEA",
                },
              }}
              minDate={new Date().toDateString()}
              hideExtraDays={true}
              className="shadow-sm shadow-black"
            />
          </View>
          <View className="bg-blue-100 py-2 px-6 shadow-sm shadow-black">
            <Text className="text-xl font-semibold text-gray-700">
              Les créneaux disponibles
            </Text>
          </View>
          <View className="mx-3 mt-6">
            <SelectList
              setSelected={setSelectedCreneaux}
              data={dataCreneaux}
              arrowicon={
                <FontAwesome name="chevron-down" size={12} color={"black"} />
              }
              searchicon={
                <FontAwesome name="search" size={12} color={"black"} />
              }
              search={false}
              placeholder="Select créneaux"
              dropdownItemStyles={{
                backgroundColor: "#fff",
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 10,
                borderRadius: 5,
              }}
            />
          </View>
          <View className="flex flex-row justify-center my-6 mx-3">
            <TouchableOpacity
              className=" py-2 px-2 rounded-lg w-full shadow-sm shadow-black"
              onPress={() => handleRdv()}
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
