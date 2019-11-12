

import {Alert} from "react-native"


export default function ConfirmSubmitDialog(submit){
        Alert.alert(
          "Are you sure you want to submit your quiz?",
          "Once you have submitted it, you will not be able to aply any changes",
          [
            {
              text: "NO",
              style: "cancel"
            },
            {text: "YES", onPress: submit}
          ],
          {cancelable: false}
        )
}

