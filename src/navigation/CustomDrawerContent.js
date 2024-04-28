import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
