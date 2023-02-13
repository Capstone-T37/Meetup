import {
  check,
  request,
  RESULTS,
  Permission,
  PERMISSIONS
} from 'react-native-permissions';
import { Platform, Alert, Linking } from 'react-native';


async function checkPermission(permission: Permission): Promise<boolean> {

  var isPermissionGranted = false;
  let result = await check(permission);
  if (result === RESULTS.DENIED) result = await request(permission);
  switch (result) {
    case RESULTS.GRANTED:
      isPermissionGranted = true;
      break;
    case RESULTS.BLOCKED:
      isPermissionGranted = false;
      break;
    case RESULTS.UNAVAILABLE:
      isPermissionGranted = false;
      break;
  }
  return isPermissionGranted;
}


export async function checkForPermission(): Promise<boolean> {

  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;

  // Call our permission service and check for permissions
  const isPermissionGranted = await checkPermission(permission);
  if (!isPermissionGranted) {
    // Show an alert in case permission was not granted
    Alert.alert(
      'Permission Request',
      'Please allow permission to access the Location data.',
      [
        {
          text: 'Go to Settings',
          onPress: () => {
            Linking.openSettings();
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  return isPermissionGranted;
}
export function goToSettings() {
  return Linking.openSettings();
}
