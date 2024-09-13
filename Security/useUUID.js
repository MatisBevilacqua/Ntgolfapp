import { useEffect, useState } from 'react';
import UUID from 'react-native-uuid';
import * as SecureStore from 'expo-secure-store';

export const useUUID = () => {
  const [storedUUID, setStoredUUID] = useState(null);

  useEffect(() => {
    const fetchUUID = async () => {
      
      const uuid = await SecureStore.getItemAsync('uuid');

      if (uuid) {
        console.log(`UUID actuel : ${uuid}`);
        setStoredUUID(uuid);
      } else {
        const newUUID = UUID.v4();
        await SecureStore.setItemAsync('uuid', newUUID);
        console.log(`Nouveau UUID généré : ${newUUID}`);
        setStoredUUID(newUUID);
      }
    };

    fetchUUID();
  }, []);

  return storedUUID;
};
