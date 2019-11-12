

import { Alert} from "react-native"




export default function MyTipsDialog(tips, handleClick){
  let content= tips.length === 0 ? "There are no tips yet": tips.reduce((result="",tip) =>  (result = result + tip +" \ ") )
  
  Alert.alert(
    "Tips",
     content,
    [
      {text: "Thanks", onPress: handleClick}
    ],
    {cancelable: false}
  )
}