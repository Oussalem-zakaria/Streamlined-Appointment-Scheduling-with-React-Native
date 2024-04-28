import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
// import { RadioButton } from 'react-native-paper';

const TimeSlotList = ({ timeSlots }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleSelectTimeSlot = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <ScrollView>
      {timeSlots.map((timeSlot) => (
        <View
          key={timeSlot.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <RadioButton
            value={timeSlot.id}
            status={selectedTimeSlot === timeSlot.id ? "checked" : "unchecked"}
            onPress={() => handleSelectTimeSlot(timeSlot.id)}
          />
          <Text style={{ marginLeft: 10 }}>{timeSlot.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TimeSlotList;
