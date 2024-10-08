import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

class UserPermissions  {
  getCameraPermission = async () => {
    // if(Constants.platform?.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if(status != 'granted'){
        alert('No tenemos acceso a la galeria')
      }
    // }
  }
}

export default new UserPermissions()