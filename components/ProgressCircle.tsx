import React, { useEffect } from 'react'
import { View, TextInput, Animated, StyleSheet } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'
import { theme } from '../constants'
import { useStateValue } from '../screens/states/ThemeState'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export default function Donut({
  porcentage = 75,
  radius = 28,
  strokeWidth= 8,
  duration = 500,
  color = theme.colors.primary,
  delay = 0,
  // textColor,
  max = 100,

  v_min = 0,
  v_max = 0,
}) {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const [state]:any = useStateValue();

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true
    }).start();
  } 
  
  useEffect(() => {
    animation(porcentage);
    animatedValue.addListener((v) => {

      if(circleRef?.current){
        const maxPerc = 100 * v.value / max;
        const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;

        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if(inputRef?.current){
        inputRef.current.setNativeProps({
          // text: `${Math.round(v.value)}`,
          text: `${v_min}/${v_max}`,
        })
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    }
  }, [max, porcentage])

  return (
    <View>
      <Svg 
        width={radius * 2} 
        height={radius * 2} 
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <Circle 
            cx='50%'
            cy='50%' 
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle 
            ref={circleRef}
            cx='50%'
            cy='50%' 
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap='round'
          />
        </G>
      </Svg>
      <AnimatedInput 
        ref={inputRef}
        underlineColorAndroid='transparent'
        editable={false}
        defaultValue='0'
        style={[StyleSheet.absoluteFillObject, styles.TextDonut,{color: state.theme.textColor}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  TextDonut: {
    fontSize: theme.sizes.h6,
    fontWeight: `${theme.weight.bold}`,
    textAlign: "center",
  }
})
