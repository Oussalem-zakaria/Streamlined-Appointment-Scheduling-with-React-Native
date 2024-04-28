import { Icon } from "@rneui/base";
import TimeSlotList from "./TimeSlotList";

const { View, Text, Image } = require("react-native");
const { TouchableOpacity } = require("react-native-gesture-handler");

const CardCenter = ({ center }) => {
  return (
    <View className="flex flex-col bg-slate-100 py-3 px-3 rounded-lg space-y-3 shadow-sm shadow-black">
      <View className="flex flex-col pb-3">
        <View className="py-2 px-2 flex flex-col items-center">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View className="flex flex-col justify-center">
          <View className="flex flex-row justify-between pb-3">
            <Text className="text-lg font-bold text-slate-800">
              {center.name}
            </Text>
          </View>
          <View className="">
            <View className="flex flex-row justify-between flex-wrap gap-1">
              <View className="flex flex-row items-center space-x-2">
                <Icon name="home" />
                <Text>{center.address}</Text>
              </View>
              <View className="flex flex-row items-center space-x-2">
                <Icon name="phone" />
                <Text>{center.phonenumber}</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-lg pt-7 pb-3 font-semibold text-slate-800">
              Les créneau disponible
            </Text>
            <View className="flex flex-col space-y-2">
              <TimeSlotList timeSlots={center.timeSlots} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity className="py-2 px-2 rounded-full flex flex-row space-x-3 justify-center items-center" style={{ backgroundColor: "#39AFEA" }}>
          <Icon name="add" color={"#FFF"} size={30} />
          <Text className="text-white text-lg font-bold">Ajoutter un rendez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardCenter;
