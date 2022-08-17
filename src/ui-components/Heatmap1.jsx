/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Heatmap1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="417px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Heatmap1")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Background Card")}
      ></View>
      <View
        height="24px"
        position="absolute"
        top="16px"
        left="16px"
        right="72px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "16 sp \u2022 Body 1")}
      ></View>
      <View
        height="24px"
        position="absolute"
        top="40px"
        left="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "14 sp \u2022 Body 2")}
      ></View>
      <View
        width="56px"
        height="24px"
        position="absolute"
        top="16px"
        right="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Counter")}
      ></View>
      <View
        position="absolute"
        top="96px"
        bottom="115px"
        left="223px"
        right="-288px"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(90deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Bricks")}
      ></View>
    </View>
  );
}
