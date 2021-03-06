import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { ProfileParameter } from '@src/components/social';
import {
  ImageOverlay,
  RateBar,
  textStyle,
} from '@src/components/common';
import { Profile } from '@src/core/model';

interface ComponentProps {
  profile: Profile;
  onRateChange: (value: number) => void;
}

export type Profile5Props = ThemedComponentProps & ComponentProps;

class Profile5Component extends React.Component<Profile5Props> {

  private onRateBarValueChange = (value: number) => {
    this.props.onRateChange(value);
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ImageOverlay
        style={themedStyle.container}
        source={profile.photo.imageSource}>
        <View style={themedStyle.infoContainer}>
          <Text
            style={themedStyle.nameLabel}
            category='h2'>
            {`${profile.firstName}\n${profile.lastName}`}
          </Text>
          <Text
            style={themedStyle.locationLabel}
            category='h6'>
            {profile.location}
          </Text>
          <RateBar
            hint='Experience'
            hintStyle={themedStyle.rateHintLabel}
            value={3}
            onChange={this.onRateBarValueChange}
          />
          <View style={themedStyle.parametersContainer}>
            <ProfileParameter
              hint='Height'
              value={`${profile.height} cm`}
            />
            <ProfileParameter
              hint='Age'
              value={`${profile.age}`}
            />
            <ProfileParameter
              hint='Inseam'
              value={`${profile.inseam} cm`}
            />
            <ProfileParameter
              hint='Weight'
              value={`${profile.weight} kg`}
            />
          </View>
        </View>
      </ImageOverlay>
    );
  }
}

export const Profile5 = withStyles(Profile5Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    paddingHorizontal: 24,
    paddingBottom: 32,
    left: 0,
    right: 0,
    bottom: 0,
  },
  parametersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
  },
  nameLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  locationLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  rateHintLabel: {
    color: 'white',
  },
}));
