import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';


type IonIconProps = {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcon = ({name,size=25,color='black'}:IonIconProps) => {
// render
  return (
    <Icon name={name} size={size} color={color} />
  )
}
