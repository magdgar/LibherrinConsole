/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function ColorsPrimary(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="128px"
      height="128px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ColorsPrimary")}
    >
      <View
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(133,92,248,1)"
        {...getOverrideProps(overrides, "BG primary")}
      ></View>
    </View>
  );
}