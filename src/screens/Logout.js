// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Button } from "react-native";
// import { CheckBox, Dialog, Text } from "@rneui/base";

// const Logout = () => {
//   const { logout } = useContext(AuthContext);
//   const [visible, setVisible] = useState(false);
//   const [checked, setChecked] = useState(1);


//   const toggleDialog2 = () => {
//     setVisible(!visible);
//   };

//   return (
//     <>
//       <Button title="Logout" onPress={toggleDialog2} />

//     <Dialog
//       isVisible={visible}
//       onBackdropPress={toggleDialog2}
//     >
//       <Dialog.Title title="Select Preference"/>
//       {['Option 1', 'Option 2', 'Option 3'].map((l, i) => (
//         <CheckBox
//           key={i}
//           title={l}
//           containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
//           checkedIcon="dot-circle-o"
//           uncheckedIcon="circle-o"
//           checked={checked === i + 1}
//           onPress={() => setChecked(i + 1)}
//         />
//       ))}

//       <Dialog.Actions>
//         <Dialog.Button
//           title="CONFIRM"
//           onPress={() => {
//             console.log(`Option ${checked} was selected!`);
//             toggleDialog5();
//           }}
//         />
//         <Dialog.Button title="CANCEL" onPress={toggleDialog2} />
//       </Dialog.Actions>
//     </Dialog>
//     </>
//   );
// };

// export default Logout;
