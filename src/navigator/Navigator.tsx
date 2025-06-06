import React, { useContext,useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { AuthContext } from '../context/AuthContext';
import { RutasNoAutenticadas } from "./RutasNoAutenticadas";
import { RutasAutenticadas } from "./RutasAutenticadas";
import { LoadingScreen } from '../screens/LoadingScreen';

export const Navigator = () => {

  const { status } = useContext( AuthContext );

  //if ( status === 'checking' ) return <LoadingScreen />

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  //console.log(status)

  return (
      <>
        { (status === 'checking') ?
						(
              <LoadingScreen />
						)
						:
						(
              (status !== 'authenticated') ?  <RutasNoAutenticadas/> : <RutasAutenticadas/>
            )
        }


      </>
  );
}