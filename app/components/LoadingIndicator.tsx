import React, { useEffect, useRef } from 'react'
import { Animated, Easing, View, ViewStyle } from 'react-native'

import { Colors, Spacing } from '../constants'
interface LoadingIndicatorProps {
  isOverlay?: boolean
}

const HEIGHT = 50
const COLOR = Colors.tint

// NOTE: THIS DOESN'T WORK ON ANDROID
export const LoadingIndicator = ({
  isOverlay = false,
}: LoadingIndicatorProps) => {
  const rotationDegree = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationDegree, {
        toValue: 360,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  }, [rotationDegree])
  return (
    <View style={isOverlay ? $overlayWrapper : $nonOverlayWrapper}>
      <View style={$loadingIndicatorContainer}>
        <View style={$container}>
          <View style={$background} />
          <Animated.View
            style={[
              $progress,
              {
                borderTopColor: COLOR,
                // transforms 0 -> 360 to '0deg' -> '360deg'
                transform: [
                  {
                    rotateZ: rotationDegree.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    </View>
  )
}

const $loadingIndicatorContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'flex-start',
  paddingTop: Spacing.massive,
}

const $container: ViewStyle = {
  alignItems: 'center',
  height: HEIGHT,
  justifyContent: 'center',
  width: HEIGHT,
}

const $background: ViewStyle = {
  borderColor: COLOR,
  borderRadius: HEIGHT / 2,
  borderWidth: 6,
  height: '100%',
  opacity: 0.25,
  width: '100%',
}

const $progress: ViewStyle = {
  backgroundColor: 'transparent',
  borderColor: COLOR,
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRadius: HEIGHT / 2,
  borderRightColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: 6,
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  width: '100%',
}

const $overlayWrapper: ViewStyle = {
  zIndex: 1000,
  backgroundColor: 'rgba(1,1,1,0.2)',
  position: 'relative',
  height: '100%',
  width: '100%',
}

const $nonOverlayWrapper: ViewStyle = {
  zIndex: 1000,
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}
