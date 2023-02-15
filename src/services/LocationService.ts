import { LocationObject, LocationAccuracy, PermissionStatus, requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

class LocationService {
  private locationWatcher: any = null;
  private subscribers: ((location: LocationObject) => void)[] = [];

  public subscribe = (callback: (location: LocationObject) => void): void => {
    this.subscribers.push(callback);
  };

  public unsubscribe = (callback: (location: LocationObject) => void): void => {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
  };

  private notifySubscribers = (location: LocationObject): void => {
    this.subscribers.forEach((subscriber) => subscriber(location));
  };

  public startWatching = async (): Promise<void> => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== PermissionStatus.GRANTED) {
      throw new Error('Location permission not granted');
    }

    this.locationWatcher = await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        distanceInterval: 1000,
      },
      (location) => {
        this.notifySubscribers(location);
      }
    );
  };

  public stopWatching = (): void => {
    if (this.locationWatcher) {
      this.locationWatcher.remove();
      this.locationWatcher = null;
    }
  };
}

export default new LocationService();
